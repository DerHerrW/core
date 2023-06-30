import{C as l}from"./index-cc3e3600.js";import{_,p as o,k as a,l as i,q as b,A as s,L as r,u}from"./vendor-20bb207d.js";import"./vendor-fortawesome-7eb61844.js";import"./vendor-bootstrap-d275de6c.js";import"./vendor-jquery-89b63fca.js";import"./vendor-axios-13ef03ae.js";import"./vendor-sortablejs-ad1d2cc8.js";const h={name:"OpenwbInstantChargeConfig",mixins:[l],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/instant_charging/phases_to_use"]}}},c={class:"instantChargeConfig"},f={name:"instantChargeConfigForm"},v={key:0},C={key:1};function w(t,e,$,k,B,V){const p=o("openwb-base-alert"),m=o("openwb-base-button-group-input"),g=o("openwb-base-card"),d=o("openwb-base-submit-buttons");return a(),i("div",c,[b("form",f,[s(g,{title:"Phasenumschaltung"},{default:r(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),i("div",v,[s(p,{subtype:"info"},{default:r(()=>[u(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(a(),i("div",C,[s(m,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/instant_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/instant_charging/phases_to_use",n))},{help:r(()=>[u(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Sofortladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen 1- und 3-phasig (s.g. 1p3p). ')]),_:1},8,["model-value"])]))]),_:1}),s(d,{formName:"instantChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const M=_(h,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstantChargeConfig.vue"]]);export{M as default};
