import{_ as c,q as t,k as l,l as _,B as o,M as a,x as s,u as m,y as f}from"./vendor-9a0665cc.js";import"./vendor-sortablejs-9c53dd87.js";const b={name:"DeviceEnphaseCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-enphase-counter"},h={class:"small"};function v(n,e,i,w,E,r){const u=t("openwb-base-heading"),d=t("openwb-base-number-input");return l(),_("div",g,[o(u,null,{default:a(()=>[s(" Einstellungen für Enphase Envoy / IQ Gateway Zähler "),m("span",h,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(d,{title:"EID",required:"","model-value":i.configuration.eid,"onUpdate:modelValue":e[0]||(e[0]=p=>r.updateConfiguration(p,"configuration.eid"))},{help:a(()=>[s(' EID für "net-consumption" ')]),_:1},8,["model-value"])])}const B=c(b,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/enphase/counter.vue"]]);export{B as default};