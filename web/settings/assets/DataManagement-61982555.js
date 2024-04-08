import{l as V,a9 as z,aa as A,ab as R,ac as j,ad as H,F as P}from"./vendor-fortawesome-9fdc06a9.js";import{_ as v,C as E}from"./index-b8f06cb8.js";import{_ as N}from"./dynamic-import-helper-be004503.js";import{_ as D,q as c,k as m,l as f,z as S,M as u,x as i,y as g,B as o,u as n,a1 as U,a2 as q,I as B,A as W,p as C,J as F,a3 as I}from"./vendor-f0f38b48.js";import"./vendor-bootstrap-384bc385.js";import"./vendor-jquery-8576ed22.js";import"./vendor-axios-e59ef189.js";import"./vendor-sortablejs-cbf37f8f.js";const G={name:"BackupCloudConfigFallback",emits:["update:configuration"],props:{backupCloud:{type:Object,required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},J={class:"backup-cloud-fallback"},Z={key:1};function K(t,e,d,b,l,s){const p=c("openwb-base-alert"),r=c("openwb-base-textarea");return m(),f("div",J,[Object.keys(d.backupCloud.configuration).length==0?(m(),S(p,{key:0,subtype:"info"},{default:u(()=>[i(' Die Backup-Cloud "'+g(d.backupCloud.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(m(),f("div",Z,[o(p,{subtype:"warning"},{default:u(()=>[i(' Es wurde keine Konfigurationsseite für die Backup-Cloud "'+g(d.backupCloud.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),o(r,{title:"Konfiguration",subtype:"json","model-value":d.backupCloud.configuration,"onUpdate:modelValue":e[0]||(e[0]=_=>s.updateConfiguration(_,"configuration"))},{help:u(()=>[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),o(p,{subtype:"info"},{default:u(()=>[n("pre",null,g(JSON.stringify(d.backupCloud.configuration,void 0,2)),1)]),_:1})]))])}const $=D(G,[["render",K],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudConfigFallback.vue"]]),Q={name:"OpenwbBackupCloudProxy",emits:["update:configuration","sendCommand"],props:{backupCloud:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading backup cloud: ${this.backupCloud.type}`),U({loader:()=>N(Object.assign({"./nextcloud/backup_cloud.vue":()=>v(()=>import("./backup_cloud-9f2fcfd9.js"),["assets/backup_cloud-9f2fcfd9.js","assets/vendor-f0f38b48.js","assets/vendor-sortablejs-cbf37f8f.js","assets/vendor-867a85e2.css"]),"./nfs/backup_cloud.vue":()=>v(()=>import("./backup_cloud-bd2a7ae2.js"),["assets/backup_cloud-bd2a7ae2.js","assets/vendor-f0f38b48.js","assets/vendor-sortablejs-cbf37f8f.js","assets/vendor-867a85e2.css"]),"./onedrive/backup_cloud.vue":()=>v(()=>import("./backup_cloud-879a1fbe.js"),["assets/backup_cloud-879a1fbe.js","assets/vendor-f0f38b48.js","assets/vendor-sortablejs-cbf37f8f.js","assets/vendor-867a85e2.css"]),"./samba/backup_cloud.vue":()=>v(()=>import("./backup_cloud-56c2247a.js"),["assets/backup_cloud-56c2247a.js","assets/vendor-f0f38b48.js","assets/vendor-sortablejs-cbf37f8f.js","assets/vendor-867a85e2.css"])}),`./${this.backupCloud.type}/backup_cloud.vue`),errorComponent:$})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)},sendCommand(t){this.$emit("sendCommand",t)}}};function X(t,e,d,b,l,s){const p=c("openwb-base-heading");return m(),f(B,null,[o(p,null,{default:u(()=>[i(' Einstellungen für Backup-Cloud Modul "'+g(d.backupCloud.name)+'" ',1)]),_:1}),(m(),S(q(s.myComponent),{backupCloud:d.backupCloud,"onUpdate:configuration":e[0]||(e[0]=r=>s.updateConfiguration(r)),onSendCommand:e[1]||(e[1]=r=>s.sendCommand(r))},null,40,["backupCloud"]))],64)}const Y=D(Q,[["render",X],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudProxy.vue"]]);V.add(z,A,R,j,H);const ee={name:"OpenwbSystem",mixins:[E],emits:["sendCommand"],components:{FontAwesomeIcon:P,OpenwbBackupCloudProxy:Y},data(){return{mqttTopicsToSubscribe:["openWB/system/configurable/backup_clouds","openWB/system/backup_cloud/config","openWB/system/backup_cloud/backup_before_update","openWB/system/device/+/component/+/config","openWB/chargepoint/+/config","openWB/vehicle/+/name","openWB/LegacySmartHome/config/get/Devices/+/device_configured","openWB/LegacySmartHome/config/get/Devices/+/device_name"],warningAcknowledged:!1,selectedRestoreFile:void 0,restoreUploadDone:!1,selectedDataMigrationFile:void 0,dataMigrationUploadDone:!1,dataMigrationConfig:[{sectionName:"Ladepunkte",sectionComponents:[{key:"cp1",label:"Ladepunkt 1",validTypes:["chargePoint"]},{key:"cp2",label:"Ladepunkt 2",validTypes:["chargePoint"]},{key:"cp3",label:"Ladepunkt 3",validTypes:["chargePoint"]},{key:"cp4",label:"Ladepunkt 4",validTypes:["chargePoint"]},{key:"cp5",label:"Ladepunkt 5",validTypes:["chargePoint"]},{key:"cp6",label:"Ladepunkt 6",validTypes:["chargePoint"]},{key:"cp7",label:"Ladepunkt 7",validTypes:["chargePoint"]},{key:"cp8",label:"Ladepunkt 8",validTypes:["chargePoint"]}]},{sectionName:"Zähler",sectionComponents:[{key:"evu",label:"EVU",validTypes:["counter"]},{key:"consumer1",label:"Verbraucher 1",validTypes:["counter"]},{key:"consumer2",label:"Verbraucher 2",validTypes:["counter"]},{key:"consumer3",label:"Verbraucher 3",validTypes:["counter"]}]},{sectionName:"Wechselrichter",sectionComponents:[{key:"pvAll",label:"Wechselrichter (Summe)",validTypes:["inverter"],help:"Die 1.9er Version von openWB speichert lediglich die Summen-Leistung aller Wechselrichter."}]},{sectionName:"Batteriespeicher",sectionComponents:[{key:"bat",label:"Speicher 1",validTypes:["battery"]}]},{sectionName:"Fahrzeuge",sectionComponents:[{key:"ev1",label:"Fahrzeug von Ladepunkt 1",validTypes:["vehicle"]},{key:"ev2",label:"Fahrzeug von Ladepunkt 2",validTypes:["vehicle"]}]},{sectionName:"SmartHome 2.0",sectionComponents:[{key:"sh1",label:"Gerät 1",validTypes:["smartHome"]},{key:"sh2",label:"Gerät 2",validTypes:["smartHome"]},{key:"sh3",label:"Gerät 3",validTypes:["smartHome"]},{key:"sh4",label:"Gerät 4",validTypes:["smartHome"]},{key:"sh5",label:"Gerät 5",validTypes:["smartHome"]},{key:"sh6",label:"Gerät 6",validTypes:["smartHome"]},{key:"sh7",label:"Gerät 7",validTypes:["smartHome"]},{key:"sh8",label:"Gerät 8",validTypes:["smartHome"]},{key:"sh9",label:"Gerät 9",validTypes:["smartHome"]},{key:"sh10",label:"Gerät 10",validTypes:["smartHome"]}]}],dataMigrationMapping:{cp1:void 0,cp2:void 0,cp3:void 0,cp4:void 0,cp5:void 0,cp6:void 0,cp7:void 0,cp8:void 0,evu:void 0,pvAll:void 0,bat:void 0,consumer1:void 0,consumer2:void 0,consumer3:void 0,sh1:void 0,sh2:void 0,sh3:void 0,sh4:void 0,sh5:void 0,sh6:void 0,sh7:void 0,sh8:void 0,sh9:void 0,sh10:void 0,ev1:void 0,ev2:void 0}}},computed:{backupCloudList(){return this.$store.state.mqtt["openWB/system/configurable/backup_clouds"]},componentConfigurations(){return this.getWildcardTopics("openWB/system/device/+/component/+/config")},chargePointOptions(){let t=this.getWildcardTopics("openWB/chargepoint/+/config");var e=[];for(const d of Object.values(t))e.push({value:d.id,text:d.name});return e},counterOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"counter")&&t.push({value:e.id,text:e.name});return t},inverterOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"inverter")&&t.push({value:e.id,text:e.name});return t},batteryOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"bat")&&t.push({value:e.id,text:e.name});return t},vehicleOptions(){let t=this.getWildcardTopics("openWB/vehicle/+/name");var e=[];for(const[d,b]of Object.entries(t)){let l=parseInt(d.match(/\/(\d\d?)\//)[1]);e.push({value:l,text:b})}return e},smartHomeOptions(){let t=this.getWildcardTopics("openWB/LegacySmartHome/config/get/Devices/+/device_configured");var e=[];for(const[d,b]of Object.entries(t))if(b==1){let l=parseInt(d.match(/\/(\d\d?)\//)[1]);e.push({value:l,text:this.$store.state.mqtt[`openWB/LegacySmartHome/config/get/Devices/${l}/device_name`]})}return e}},methods:{isComponentType(t,e){return t.split("_").includes(e)},getBackupCloudDefaultConfiguration(t){const e=this.backupCloudList.find(d=>d.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...JSON.parse(JSON.stringify(e.defaults))}:(console.warn("no default configuration found for backup cloud type!",t),{})},sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})},getMigrationOptions(t){var e=[{value:void 0,text:"-- nicht übernehmen --"}];return t.includes("chargePoint")&&e.push(...this.chargePointOptions),t.includes("counter")&&e.push(...this.counterOptions),t.includes("inverter")&&e.push(...this.inverterOptions),t.includes("battery")&&e.push(...this.batteryOptions),t.includes("vehicle")&&e.push(...this.vehicleOptions),t.includes("smartHome")&&e.push(...this.smartHomeOptions),e},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)},updateSelectedBackupCloud(t){this.updateState("openWB/system/backup_cloud/config",t,"type"),this.updateState("openWB/system/backup_cloud/config",this.getBackupCloudDefaultConfiguration(t))},updateSelectedRestoreFile(t){this.selectedRestoreFile=t.target.files[0]},updateSelectedDataMigrationFile(t){this.selectedDataMigrationFile=t.target.files[0]},uploadFile(t,e,d){return new Promise(b=>{if(e!==void 0){let l=new FormData;l.append("file",e),l.append("target",t),this.axios.post(location.protocol+"//"+location.host+"/openWB/web/settings/uploadFile.php",l,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{this.$root.postClientMessage(d,"success"),b(!0)}).catch(s=>{if(s.response){console.error(s.response.status,s.response.data);var p="Hochladen der Datei fehlgeschlagen!<br />"+s.response.status+": "+s.response.data}else s.request?(console.error(s.request),p+="Es wurde keine Antwort vom Server empfangen."):(console.error("Error",s.message),p+="Es ist ein unbekannter Fehler aufgetreten.");this.$root.postClientMessage(p,"danger"),b(!1)})}else console.error("no file selected for upload"),b(!1)})},async uploadRestoreFile(){const t="Die Sicherungsdatei wurde erfolgreich hochgeladen. Sie können die Wiederherstellung jetzt starten.";this.restoreUploadDone=await this.uploadFile("restore",this.selectedRestoreFile,t)},async uploadDataMigrationFile(){const t="Die Sicherungsdatei wurde erfolgreich hochgeladen. Sie können den Import jetzt starten.";this.dataMigrationUploadDone=await this.uploadFile("migrate",this.selectedDataMigrationFile,t)},restoreBackup(){this.sendSystemCommand("restoreBackup"),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})},dataMigration(){this.sendSystemCommand("dataMigration",this.dataMigrationMapping)},factoryReset(){this.sendSystemCommand("factoryReset",{}),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})}}},te={class:"system"},ne=n("h2",null,"Achtung!",-1),oe=n("p",null," Vor allen Aktionen auf dieser Seite ist sicherzustellen, dass kein Ladevorgang aktiv ist! Zur Sicherheit bitte zusätzlich alle Fahrzeuge von der Ladestation / den Ladestationen abstecken! ",-1),se={key:0},ie={name:"backupForm"},ae=n("a",{href:"/openWB/data/backup/",target:"_blank"},"hier",-1),le={class:"row justify-content-center"},ue={class:"col-md-4 d-flex py-1 justify-content-center"},de=n("hr",null,null,-1),re={name:"restoreForm"},ce=n("br",null,null,-1),pe={class:"input-group"},me={class:"input-group-prepend"},be={class:"input-group-text"},he={class:"custom-file"},fe={id:"input-file-label",class:"custom-file-label",for:"input-file","data-browse":"Suchen"},ge={class:"input-group-append"},_e=["disabled"],ke={class:"row justify-content-center"},ye={class:"col-md-4 d-flex py-1 justify-content-center"},ve=n("hr",null,null,-1),Ce={name:"cloudBackupForm"},we=n("br",null,null,-1),Be=n("a",{href:"https://github.com/openWB/core/wiki/Cloud-Sicherung",target:"_blank",rel:"noopener noreferrer"}," hier ",-1),De={key:0},Se={name:"dataMigrationForm"},Oe=n("br",null,null,-1),We=n("br",null,null,-1),Fe={class:"input-group"},Me={class:"input-group-prepend"},xe={class:"input-group-text"},Te={class:"custom-file"},Le={id:"data-migration-file-label",class:"custom-file-label",for:"data-migration-file","data-browse":"Suchen"},Ve={class:"input-group-append"},ze=["disabled"],Ae={class:"row justify-content-center"},Re={class:"col-md-4 d-flex py-1 justify-content-center"},je={name:"resetForm"},He={class:"row justify-content-center"},Pe={class:"col-md-4 d-flex py-1 justify-content-center"};function Ee(t,e,d,b,l,s){const p=c("openwb-base-button-group-input"),r=c("openwb-base-alert"),_=c("openwb-base-heading"),h=c("font-awesome-icon"),y=c("openwb-base-click-button"),O=c("openwb-base-select-input"),M=c("openwb-base-button-input"),x=c("openwb-backup-cloud-proxy"),T=c("openwb-base-submit-buttons"),w=c("openwb-base-card");return m(),f("div",te,[o(r,{subtype:"danger"},{default:u(()=>[ne,oe,o(p,{title:"Ich habe die Warnung verstanden",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:this.warningAcknowledged,"onUpdate:modelValue":e[0]||(e[0]=a=>this.warningAcknowledged=a)},null,8,["modelValue"])]),_:1}),l.warningAcknowledged?(m(),f("div",se,[o(w,{title:"Sicherung / Wiederherstellung",subtype:"success",collapsible:!0,collapsed:!0},{default:u(()=>[n("form",ie,[o(_,null,{default:u(()=>[i("Sicherung")]),_:1}),o(r,{subtype:"danger"},{default:u(()=>[i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master", "Beta" oder "Release" erstellt wurden! ')]),_:1}),o(r,{subtype:"info"},{default:u(()=>[i(" Nachdem die Sicherung abgeschlossen ist, kann die erstellte Datei über den Link in der Benachrichtigung oder "),ae,i(" heruntergeladen werden. ")]),_:1}),n("div",le,[n("div",ue,[o(y,{class:"btn-success clickable",onButtonClicked:e[1]||(e[1]=a=>s.sendSystemCommand("createBackup",{use_extended_filename:!0}))},{default:u(()=>[i(" Sicherung erstellen "),o(h,{"fixed-width":"",icon:["fas","archive"]})]),_:1})])])]),de,n("form",re,[o(_,null,{default:u(()=>[i("Wiederherstellung")]),_:1}),o(r,{subtype:"danger"},{default:u(()=>[i(" Für die Wiederherstellung wird eine aktive Internetverbindung benötigt."),ce,i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master", "Beta" oder "Release" erstellt wurden! ')]),_:1}),n("div",pe,[n("div",me,[n("div",be,[o(h,{"fixed-width":"",icon:["fas","file-archive"]})])]),n("div",he,[n("input",{id:"input-file",type:"file",class:"custom-file-input",accept:".tar.gz,application/gzip,application/tar+gzip",onChange:e[2]||(e[2]=a=>s.updateSelectedRestoreFile(a))},null,32),n("label",fe,g(l.selectedRestoreFile?l.selectedRestoreFile.name:"Bitte eine Datei auswählen"),1)]),n("div",ge,[n("button",{class:C(["btn",l.selectedRestoreFile?"btn-success clickable":"btn-outline-success"]),disabled:!l.selectedRestoreFile,type:"button",onClick:e[3]||(e[3]=a=>s.uploadRestoreFile())},[i(" Hochladen "),o(h,{"fixed-width":"",icon:["fas","upload"]})],10,_e)])]),n("div",ke,[n("div",ye,[o(y,{class:C(l.restoreUploadDone?"btn-success clickable":"btn-outline-success"),disabled:!l.restoreUploadDone,onButtonClicked:e[4]||(e[4]=a=>s.restoreBackup())},{default:u(()=>[i(" Wiederherstellung starten "),o(h,{"fixed-width":"",icon:["fas","box-open"]})]),_:1},8,["class","disabled"])])])]),ve,n("form",Ce,[o(_,null,{default:u(()=>[i(" Automatische Sicherung in einen Cloud-Dienst ")]),_:1}),o(r,{subtype:"info"},{default:u(()=>[i(" Zwischen Mitternacht und 5:00 Uhr wird automatisch eine Sicherung erstellt und in den angegebenen Cloud-Dienst (nicht openWB Cloud!) hochgeladen. Ist kein Cloud-Dienst konfiguriert, wird keine automatische Sicherung erstellt. Die automatische Sicherung kann unabhängig von der openWB Cloud genutzt werden."),we,i(" Die Anleitung zur Konfiguration des Cloud-Dienstes findest Du "),Be,i(" . ")]),_:1}),o(O,{class:"mb-2",title:"Backup-Cloud",options:s.backupCloudList,"model-value":t.$store.state.mqtt["openWB/system/backup_cloud/config"].type,"onUpdate:modelValue":e[5]||(e[5]=a=>s.updateSelectedBackupCloud(a))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/system/backup_cloud/config"].type?(m(),f("div",De,[o(p,{title:"Option Sicherung vor System Update",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/system/backup_cloud/backup_before_update"],"onUpdate:modelValue":e[6]||(e[6]=a=>t.updateState("openWB/system/backup_cloud/backup_before_update",a))},null,8,["model-value"]),o(M,{title:"Manuelle Cloud-Sicherung",buttonText:"Sicherung erstellen und hochladen",subtype:"success",onButtonClicked:e[7]||(e[7]=a=>s.sendSystemCommand("createCloudBackup",{}))}),o(x,{backupCloud:t.$store.state.mqtt["openWB/system/backup_cloud/config"],"onUpdate:configuration":e[8]||(e[8]=a=>s.updateConfiguration("openWB/system/backup_cloud/config",a)),onSendCommand:e[9]||(e[9]=a=>s.sendSystemCommand(a.command,a.args))},null,8,["backupCloud"])])):W("",!0),o(T,{formName:"cloudBackupForm",hideReset:!0,hideDefaults:!0,onSave:e[10]||(e[10]=a=>t.$emit("save")),onReset:e[11]||(e[11]=a=>t.$emit("reset")),onDefaults:e[12]||(e[12]=a=>t.$emit("defaults"))})])]),_:1}),o(w,{title:"Datenübernahme",subtype:"success",collapsible:!0,collapsed:!0},{default:u(()=>[n("form",Se,[o(r,{subtype:"info"},{default:u(()=>[i(" Hier kann die Sicherung einer älteren 1.9er Version hochgeladen werden, um vorhandene historische Daten (Diagramme und Ladeprotokolle) sowie Cloud-Daten und Seriennummer in diese Installation zu importieren. Die Zuordnung zwischen den alten und neuen Komponenten muss manuell durchgeführt werden. ")]),_:1}),o(r,{subtype:"danger"},{default:u(()=>[i(" Die Portierung kann bei vielen historischen Daten von mehreren Jahren durchaus bis zu 30 Minuten dauern. Die openWB in dieser Zeit bitte nicht herunterfahren! Du erhältst eine Meldung, wenn die Datenübernahme abgeschlossen ist."),Oe,i(" Vor der Datenübernahme unbedingt eine Sicherung erstellen."),We,i(" Die Datenübernahme kann nur durch Einspielen einer Sicherung rückgängig gemacht werden! ")]),_:1}),n("div",Fe,[n("div",Me,[n("div",xe,[o(h,{"fixed-width":"",icon:["fas","file-archive"]})])]),n("div",Te,[n("input",{id:"data-migration-file",type:"file",class:"custom-file-input",accept:".tar.gz,application/gzip,application/tar+gzip",onChange:e[13]||(e[13]=a=>s.updateSelectedDataMigrationFile(a))},null,32),n("label",Le,g(l.selectedDataMigrationFile?l.selectedDataMigrationFile.name:"Bitte eine Datei auswählen"),1)]),n("div",Ve,[n("button",{class:C(["btn",l.selectedDataMigrationFile?"btn-success clickable":"btn-outline-success"]),disabled:!l.selectedDataMigrationFile,type:"button",onClick:e[14]||(e[14]=a=>s.uploadDataMigrationFile())},[i(" Hochladen "),o(h,{"fixed-width":"",icon:["fas","upload"]})],10,ze)])]),o(_,null,{default:u(()=>[i("Zuordnung der Komponenten")]),_:1}),(m(!0),f(B,null,F(l.dataMigrationConfig,a=>(m(),f("div",{key:a.sectionName},[o(_,null,{default:u(()=>[i(g(a.sectionName),1)]),_:2},1024),(m(!0),f(B,null,F(a.sectionComponents,k=>(m(),S(O,{key:k.key,title:k.label,options:s.getMigrationOptions(k.validTypes),modelValue:l.dataMigrationMapping[k.key],"onUpdate:modelValue":L=>l.dataMigrationMapping[k.key]=L},I({_:2},[k.help?{name:"help",fn:u(()=>[i(g(k.help),1)]),key:"0"}:void 0]),1032,["title","options","modelValue","onUpdate:modelValue"]))),128))]))),128)),n("div",Ae,[n("div",Re,[o(y,{class:C(l.dataMigrationUploadDone?"btn-success clickable":"btn-outline-success"),disabled:!l.dataMigrationUploadDone,onButtonClicked:e[15]||(e[15]=a=>s.dataMigration())},{default:u(()=>[i(" Datenübernahme starten "),o(h,{"fixed-width":"",icon:["fas","box-open"]})]),_:1},8,["class","disabled"])])])])]),_:1}),n("form",je,[o(w,{title:"Zurücksetzen",subtype:"danger",collapsible:!0,collapsed:!0},{footer:u(()=>[n("div",He,[n("div",Pe,[o(y,{class:"btn-danger clickable",onButtonClicked:e[16]||(e[16]=a=>s.factoryReset())},{default:u(()=>[o(h,{"fixed-width":"",icon:["fas","skull-crossbones"]}),i(" Zurücksetzen "),o(h,{"fixed-width":"",icon:["fas","skull-crossbones"]})]),_:1})])])]),default:u(()=>[o(r,{subtype:"danger"},{default:u(()=>[i(" Alle Einstellungen, angelegte Geräte/Komponenten, Ladepunkte und Fahrzeuge, etc, Tages-, Monats- und Jahresauswertungen sowie das Ladeprotokoll werden unwiederbringlich gelöscht. Auch die Vorkonfiguration im Auslieferungszustand wird gelöscht. Die openWB muss danach komplett neu eingerichtet werden. Die openWB wird hierfür automatisch neu gestartet. Bitte erstelle vor dem Zurücksetzen eine Sicherung! ")]),_:1})]),_:1})])])):W("",!0)])}const $e=D(ee,[["render",Ee],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/DataManagement.vue"]]);export{$e as default};