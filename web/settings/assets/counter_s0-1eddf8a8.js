import{_ as c,p as o,k as u,l as d,A as t,L as s,u as a,q as p,x as l}from"./vendor-8521f8a3.js";import"./vendor-sortablejs-5d1612dc.js";const _={name:"DeviceFroniusCounterS0",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-fronius-counter-s0"},m={class:"small"};function b(e,n,g,h,v,w){const i=o("openwb-base-heading"),r=o("openwb-base-alert");return u(),d("div",f,[t(i,null,{default:s(()=>[a(" Einstellungen für Fronius S0 Zähler "),p("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),t(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const k=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/counter_s0.vue"]]);export{k as default};