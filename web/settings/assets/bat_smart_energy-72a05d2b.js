import{_ as d,q as t,k as c,l as p,B as o,M as m,x as _,u as l,y as b}from"./vendor-493c2bec.js";import"./vendor-sortablejs-0b339223.js";const f={name:"DeviceSunnyBoyBatSmartEnergy",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-sunnyboy-bat-smart-energy"},y={class:"small"};function v(n,e,a,B,h,s){const i=t("openwb-base-heading"),r=t("openwb-base-number-input");return c(),p("div",g,[o(i,null,{default:m(()=>[_(" Einstellungen für SMA Sunny Boy Smart Energy Batteriespeicher "),l("span",y,"(Modul: "+b(n.$options.name)+")",1)]),_:1}),o(r,{title:"Modbus ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=u=>s.updateConfiguration(u,"configuration.modbus_id"))},null,8,["model-value"])])}const S=d(f,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/bat_smart_energy.vue"]]);export{S as default};