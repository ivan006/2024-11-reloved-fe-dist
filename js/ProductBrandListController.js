import"moment";import{_ as l,a7 as u,r as c,e as s,c as p,x as i,s as m}from"./vendor.js";import"moment-timezone";import{P as f}from"./index.js";import"vue-cookies";const _={name:"ProductBrand-list",components:{SuperTable:u},props:{noBorder:{type:Boolean,default:()=>!1},parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},computed:{superTableModel(){return f}},methods:{openRecord(r,n,e){e.push({name:"/lists/product-brands/:rId/:rName",params:{rId:r,rName:r}})}}};function B(r,n,e,d,t,a){const o=c("SuperTable");return s(),p(o,{showMap:!0,model:a.superTableModel,onClickRow:a.openRecord,displayMapField:!1,parentKeyValuePair:e.parentKeyValuePair,fetchFlags:e.fetchFlags,noBorder:e.noBorder},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","noBorder"])}const P=l(_,[["render",B],["__file","ProductBrandList.vue"]]),h={name:"ProductBrand-list-controller",components:{productBrandList:P},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function y(r,n,e,d,t,a){const o=c("productBrandList");return s(),i("div",null,[m(o,{parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])])}const L=l(h,[["render",y],["__file","ProductBrandListController.vue"]]);export{L as default};
