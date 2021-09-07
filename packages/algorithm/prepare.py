""" Aufbereitung der Daten für den Algorithmus
"""

import copy

from . import chargelog
from . import chargepoint
from . import data
from ..helpermodules import log
from ..helpermodules import pub
from ..helpermodules import subdata


class prepare():
    """ 
    """

    def __init__(self):
        pass

    def setup_algorithm(self):
        """ bereitet die Daten für den Algorithmus vor und startet diesen.
        """
        log.message_debug_log("info", "# ***Start*** ")
        self._set_default_values()
        self._counter()
        self._check_chargepoints()
        self._use_pv()
        self._bat()
        self._get_home_consumption()
        data.data.print_all()

    def copy_data(self):
        """ kopiert die Daten, die per MQTT empfangen wurden.
        """
        try:
            data.data.general_data = copy.deepcopy(subdata.subData.general_data)
            data.data.optional_data = copy.deepcopy(subdata.subData.optional_data)
            data.data.cp_data = copy.deepcopy(subdata.subData.cp_data)
            data.data.cp_template_data = copy.deepcopy(
                subdata.subData.cp_template_data)
            for chargepoint in data.data.cp_data:
                try:
                    if "cp" in chargepoint:
                        data.data.cp_data[chargepoint].template = data.data.cp_template_data["cpt" +str(data.data.cp_data[chargepoint].data["config"]["template"])]
                        # Status zurücksetzen (wird jeden Zyklus neu ermittelt)
                        data.data.cp_data[chargepoint].data["get"]["state_str"] = None
                except Exception as e:
                    log.exception_logging(e)

            data.data.pv_data = copy.deepcopy(subdata.subData.pv_data)
            data.data.ev_data = copy.deepcopy(subdata.subData.ev_data)
            data.data.ev_template_data = copy.deepcopy(
                subdata.subData.ev_template_data)
            data.data.ev_charge_template_data = copy.deepcopy(
                subdata.subData.ev_charge_template_data)
            for vehicle in data.data.ev_data:
                try:
                    # Globaler oder individueller Lademodus?
                    if data.data.general_data["general"].data["chargemode_config"]["individual_mode"] == True:
                        data.data.ev_data[vehicle].charge_template = data.data.ev_charge_template_data["ct" +str(data.data.ev_data[vehicle].data["charge_template"])]
                    else:
                        data.data.ev_data[vehicle].charge_template = data.data.ev_charge_template_data["ct0"]
                    # erstmal das aktuelle Template laden
                    data.data.ev_data[vehicle].ev_template = data.data.ev_template_data["et" +str(data.data.ev_data[vehicle].data["ev_template"])]
                except Exception as e:
                    log.exception_logging(e)

            data.data.counter_data = copy.deepcopy(subdata.subData.counter_data)
            data.data.counter_module_data = copy.deepcopy(subdata.subData.counter_module_data)
            data.data.bat_module_data = copy.deepcopy(subdata.subData.bat_module_data)
        except Exception as e:
            log.exception_logging(e)

    def _check_chargepoints(self):
        """ ermittelt die gewünschte Stromstärke für jeden LP.
        """
        data.data.cp_data["all"].get_power_counter_all()
        data.data.cp_data["all"].match_rfid_to_cp()
        for cp_item in data.data.cp_data:
            state = True
            try:
                if "cp" in cp_item:
                    cp = data.data.cp_data[cp_item]
                    vehicle, message = cp.get_state()
                    if vehicle != -1:
                        charging_ev = data.data.ev_data["ev"+str(vehicle)]
                        # Ev wurde neu angesteckt, Kopie der aktuellen Templates erstellen und publishen
                        #if cp.data["set"]["charging_ev"] == -1 and cp.data["set"]["charging_ev_prev"] == -1:
                        charging_ev.data["set"]["ev_template"] = data.data.ev_template_data["et"+str(charging_ev.data["ev_template"])].data
                        pub.pub("openWB/set/vehicle/"+str(charging_ev.ev_num) +"/set/ev_template", charging_ev.data["set"]["ev_template"])

                        cp.data["set"]["charging_ev"] = vehicle
                        pub.pub("openWB/set/chargepoint/"+str(cp.cp_num)+"/set/charging_ev", vehicle)
                        charging_ev.ev_template.data = charging_ev.data["set"]["ev_template"]
                        cp.data["set"]["charging_ev_data"] = charging_ev

                        if state == True:
                            phases = cp.get_phases(charging_ev.charge_template.data["chargemode"]["selected"])
                            state, message_ev, submode, required_current = charging_ev.get_required_current()
                            self._pub_connected_vehicle(charging_ev, cp)
                            # Einhaltung des Minimal- und Maximalstroms prüfen
                            required_current = charging_ev.check_min_max_current(required_current, charging_ev.data["control_parameter"]["phases"])
                            current_changed, mode_changed = charging_ev.check_state(required_current, cp.data["set"]["current"], cp.data["get"]["charge_state"])
                            
                            if message_ev != None:
                                message = message_ev
                            log.message_debug_log("debug", "Ladepunkt "+str(cp.cp_num)+", EV: "+cp.data["set"]["charging_ev_data"].data["name"]+" (EV-Nr."+str(vehicle)+")")
                            
                            # Die benötigte Stromstärke hat sich durch eine Änderung des Lademdous oder der Konfiguration geändert. Die Zuteilung entsprechend der Priorisierung muss neu geprüft werden.
                            # Daher muss der LP zurückgesetzt werden, wenn er gerade lädt, um in der Regelung wieder berücksichtigt zu werden.
                            if current_changed == True:
                                log.message_debug_log("debug", "LP"+str(cp.cp_num)+" : Da sich die Stromstärke geändert hat, muss der Ladepunkt im Algorithmus neu priorisiert werden.")
                                data.data.pv_data["all"].reset_switch_on_off(cp, charging_ev)
                                charging_ev.reset_phase_switch()
                                if max(cp.data["get"]["current"]) != 0:
                                    cp.data["set"]["current"] = 0
                                # Da nicht bekannt ist, ob mit Bezug, Überschuss oder aus dem Speicher geladen wird, wird die freiwerdende Leistung erst im nächsten Durchlauf berücksichtigt.
                                # Ggf. entsteht so eine kurze Unterbrechung der Ladung, wenn während dem Laden umkonfiguriert wird.
                            charging_ev.set_control_parameter(submode, required_current)
                            # Ein Eintrag muss nur erstellt werden, wenn vorher schon geladen wurde und auch danach noch geladen werden soll.
                            if mode_changed == True and cp.data["get"]["charge_state"] == True and state == True:
                                chargelog.save_data(cp, charging_ev)

                        # Wenn die Nachrichten gesendet wurden, EV wieder löschen, wenn das EV im Algorithmus nicht berücksichtigt werden soll.
                        if state == False:
                            if cp.data["set"]["charging_ev"] != -1:
                                # Altes EV merken
                                cp.data["set"]["charging_ev_prev"] = cp.data["set"]["charging_ev"]
                                pub.pub("openWB/set/chargepoint/"+str(cp.cp_num)+"/set/charging_ev_prev", cp.data["set"]["charging_ev_prev"])
                            cp.data["set"]["charging_ev"] = -1
                            pub.pub("openWB/set/chargepoint/"+str(cp.cp_num)+"/set/charging_ev", -1)
                            log.message_debug_log("debug", "EV"+str(charging_ev.ev_num)+": Lademodus "+str(charging_ev.charge_template.data["chargemode"]["selected"])+", Submodus: "+str(charging_ev.data["control_parameter"]["submode"]))
                        else:
                            if (charging_ev.data["control_parameter"]["timestamp_switch_on_off"] != "0" and
                                    cp.data["get"]["charge_state"] == False and 
                                    data.data.pv_data["all"].data["set"]["overhang_power_left"] == 0):
                                log.message_debug_log("error", "Reservierte Leistung kann nicht 0 sein.")
                            
                            log.message_debug_log("debug", "EV"+str(charging_ev.ev_num)+": Theroretisch benötigter Strom "+str(required_current)+"A, Lademodus "+str(
                                charging_ev.charge_template.data["chargemode"]["selected"])+", Submodus: "+str(charging_ev.data["control_parameter"]["submode"])+", Phasen: "+str(phases)+", Prioritaet: "+str(charging_ev.charge_template.data["prio"])+", max. Ist-Strom: "+str(max(cp.data["get"]["current"])))
                    else:
                        # Wenn kein EV zur Ladung zugeordnet wird, auf hinterlegtes EV zurückgreifen.
                        self._pub_connected_vehicle(data.data.ev_data["ev"+str(cp.template.data["ev"])], cp)
                    if message != None and cp.data["get"]["state_str"] == None:
                        log.message_debug_log("info", "LP "+str(cp.cp_num)+": "+message)
                        cp.data["get"]["state_str"] = message
            except Exception as e:
                log.exception_logging(e)
        if "all" not in data.data.cp_data:
            data.data.cp_data["all"]=chargepoint.allChargepoints()
        data.data.cp_data["all"].no_charge()

    def _pub_connected_vehicle(self, vehicle, chargepoint):
        """ published die Daten, die zur Anzeige auf der Haupseite benötigt werden.

        Parameter
        ---------
        vehicle: dict
            EV, das dem LP zugeordnet ist
        cp_num: int
            LP-Nummer
        """
        try:
            soc_config_obj = {"configured": vehicle.data["soc"]["config"]["configured"], 
                    "manual": vehicle.data["soc"]["config"]["manual"]}
            soc_obj = {"soc": vehicle.data["get"]["soc"],
                    "range": vehicle.data["get"]["range_charged"],
                    "range_unit": data.data.general_data["general"].data["range_unit"],
                    "timestamp": vehicle.data["get"]["soc_timestamp"],
                    "fault_stat": vehicle.data["soc"]["get"]["fault_state"],
                    "fault_str": vehicle.data["soc"]["get"]["fault_str"]}
            info_obj = {"id": vehicle.ev_num,
                    "name": vehicle.data["name"]}
            if vehicle.charge_template.data["chargemode"]["selected"] == "time_charging":
                current_plan = vehicle.charge_template.data["chargemode"]["current_plan"]
            elif vehicle.charge_template.data["chargemode"]["selected"] == "scheduled_charging":
                current_plan = vehicle.charge_template.data["chargemode"]["current_plan"]
            else:
                current_plan = ""
            config_obj = {"charge_template": vehicle.charge_template.ct_num,
                    "ev_template": vehicle.ev_template.et_num,
                    "chargemode": vehicle.charge_template.data["chargemode"]["selected"],
                    "priority": vehicle.charge_template.data["prio"],
                    "current_plan": current_plan,
                    "average_consumption": vehicle.ev_template.data["average_consump"]}
            if soc_config_obj != chargepoint.data["get"]["connected_vehicle"]["soc_config"]:
                pub.pub("openWB/chargepoint/"+str(chargepoint.cp_num)+"/get/connected_vehicle/soc_config", soc_config_obj)
            if soc_obj != chargepoint.data["get"]["connected_vehicle"]["soc"]:
                pub.pub("openWB/chargepoint/"+str(chargepoint.cp_num)+"/get/connected_vehicle/soc", soc_obj)
            if info_obj != chargepoint.data["get"]["connected_vehicle"]["info"]:
                pub.pub("openWB/chargepoint/"+str(chargepoint.cp_num)+"/get/connected_vehicle/info", info_obj)
            if config_obj != chargepoint.data["get"]["connected_vehicle"]["config"]:
                pub.pub("openWB/chargepoint/"+str(chargepoint.cp_num)+"/get/connected_vehicle/config", config_obj)
        except Exception as e:
            log.exception_logging(e)

    def _use_pv(self):
        """ ermittelt, ob Überschuss an der EVU vorhanden ist.
        """
        try:
            data.data.pv_data["all"].calc_power_for_control()
        except Exception as e:
            log.exception_logging(e)

    def _bat(self):
        """ ermittelt, ob Überschuss am Speicher verfügbar ist.
        """
        try:
            data.data.bat_module_data["all"].setup_bat()
        except Exception as e:
            log.exception_logging(e)

    def _counter(self):
        """ initialisiert alle Zähler für den Algorithmus
        """
        try:
            for counter in data.data.counter_data:
                if "counter" in counter:
                    data.data.counter_data[counter].setup_counter()
        except Exception as e:
            log.exception_logging(e)

    def _set_default_values(self):
        """ ruft für jedes Modul die rekursive Funktion zur Überprüfung auf fehlende Werte auf.
        """
        try:
            # für jeden LP müssen die defaults geprüft werden
            for cp in data.data.cp_data:
                if "cp" in cp:
                    self._check_key(subdata.subData.defaults_cp_data["cp0"].data, data.data.cp_data[cp].data)
            for cpt in data.data.cp_template_data:
                if "cpt" in cpt:
                    self._check_key(subdata.subData.defaults_cp_template_data["cpt0"].data, data.data.cp_template_data[cpt].data)
            for pv in data.data.pv_data:
                if "pv" in pv:
                    self._check_key(subdata.subData.defaults_pv_data["pv0"].data, data.data.pv_data[pv].data)
            for ev in data.data.ev_data:
                if "ev" in ev:
                    self._check_key(subdata.subData.defaults_ev_data["ev0"].data, data.data.ev_data[ev].data)
            for et in data.data.ev_template_data:
                if "et" in et:
                    self._check_key(subdata.subData.defaults_ev_template_data["et0"].data, data.data.ev_template_data[et].data)
            for ct in data.data.ev_charge_template_data:
                if "ct" in ct:
                    self._check_key(subdata.subData.defaults_ev_charge_template_data["ct0"].data, data.data.ev_charge_template_data[ct].data)
            for counter in data.data.counter_data:
                if "counter" in counter:
                    self._check_key(subdata.subData.defaults_counter_data["counter0"].data, data.data.counter_data[counter].data)
            for bat in data.data.bat_module_data:
                if "bat" in bat:
                    self._check_key(subdata.subData.defaults_bat_module_data["bat0"].data, data.data.bat_module_data[bat].data)
            self._check_key(subdata.subData.defaults_general_data["general"].data, data.data.general_data["general"].data)
            self._check_key(subdata.subData.defaults_optional_data["optional"].data, data.data.optional_data["optional"].data)
        except Exception as e:
            log.exception_logging(e)

    def _check_key(self, default, settings):
        """ prüft, ob ein Wert, für den es einen default-Werte gäbe, gesetzt ist, sonst wird das Dictionary mit einem default-Wert gefüllt. Dictionaries werden rekursiv 
        durchgegangen, bis das Dictionary nicht weiter verschachtelt ist.
        """
        try:
            # alle Einträge des Dictionaries durchgehen
            for key in default:
                # Ist der Value des Eintrags ein Dictionary? Dann erst dieses Dictionary durchgehen.
                if isinstance(default[key], dict) == True:
                    # prüfen, ob das Dict auch in den Einstellungen angelegt ist, sonst anlegen.
                    if key not in settings:
                        settings[key] = {}
                        # Eine Verschachtelungsebene tiefer gehen.
                    self._check_key(default[key], settings[key])
                # Der Value des Eintrags ist ein Wert. Prüfen, ob dieser Key im Modul-Dictionary exisitert, sonst Key-Value-Paar anlegen.
                else:
                    if key not in settings:
                        settings[key] = default[key]
                        log.message_debug_log("warning", "default-Wert für "+str(key)+" in "+str(settings)+" gesetzt.")
        except Exception as e:
            log.exception_logging(e)

    def _get_home_consumption(self):
        """ ermittelt den Hausverbrauch.
        """
        try:
            data.data.counter_data["all"].calc_home_consumption()
        except Exception as e:
            log.exception_logging(e)
