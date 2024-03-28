import{_ as b,q as t,k as m,l as _,B as o,M as u,x as s,u as f,y as v}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const g={name:"DeviceSunnyBoyInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},y={class:"device-sunnyboy-inverter"},w={class:"small"};function h(a,e,i,S,C,r){const d=t("openwb-base-heading"),l=t("openwb-base-button-group-input"),p=t("openwb-base-select-input"),c=t("openwb-base-number-input");return m(),_("div",y,[o(d,null,{default:u(()=>[s(" Einstellungen für SMA Sunny Boy/Tripower Wechselrichter "),f("span",w,"(Modul: "+v(a.$options.name)+")",1)]),_:1}),o(l,{title:"Hybrid-System",buttons:[{buttonValue:!1,text:"nicht vorhanden"},{buttonValue:!0,text:"vorhanden"}],"model-value":i.configuration.hybrid,"onUpdate:modelValue":e[0]||(e[0]=n=>r.updateConfiguration(n,"configuration.hybrid"))},{help:u(()=>[s(" Diese Option aktivieren, wenn ein Tripower Smart Energy, Sunny Boy Smart Energy oder ein anderes Hybrid-System verbaut ist. ")]),_:1},8,["model-value"]),o(p,{title:"Version",notSelected:"Bitte auswählen",options:[{value:0,text:"Standard"},{value:1,text:"Core-2"},{value:2,text:"Data Manager/Cluster Controller"}],"model-value":i.configuration.version,"onUpdate:modelValue":e[1]||(e[1]=n=>r.updateConfiguration(n,"configuration.version"))},null,8,["model-value"]),o(c,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>r.updateConfiguration(n,"configuration.modbus_id"))},{help:u(()=>[s(" Für die Standardversion ist die Standardmodbus-ID 3, für Core-2 ist sie 1 und für Data Manager/Cluster Controller 2. Wurde eine abweichende Modbus ID konfiguriert, entsprechend anpassen. ")]),_:1},8,["model-value"])])}const V=b(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/inverter.vue"]]);export{V as default};
