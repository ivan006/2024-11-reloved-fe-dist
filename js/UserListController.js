import"moment";import{_ as o,a8 as p,r as n,e as c,c as u,x as d,s as m}from"./vendor.js";import"moment-timezone";import{U as f}from"./index.js";const _={name:"User-list",components:{SuperTable:p},props:{parentKeyValuePair:{type:Object,default:()=>({})},fetchFlags:{type:Object,default:()=>({})}},data(){return{templateListGrid:{cols:[{width:12,class:"q-pa-md q-col-gutter-sm",cols:[{width:12,dataPoint:{type:"function",function:e=>`${e.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}}]}]}}},computed:{superTableModel(){return f}},methods:{openRecord(e,l,t){t.push({name:"/lists/users/:rId/:rName",params:{rId:e,rName:e}})}}};function h(e,l,t,i,r,a){const s=n("SuperTable");return c(),u(s,{showMap:!0,model:a.superTableModel,onClickRow:a.openRecord,displayMapField:!1,parentKeyValuePair:t.parentKeyValuePair,fetchFlags:t.fetchFlags,templateListGrid:r.templateListGrid,viewAs:{show:[],default:"grid"},allowedFilters:[]},null,8,["model","onClickRow","parentKeyValuePair","fetchFlags","templateListGrid"])}const y=o(_,[["render",h],["__file","UserList.vue"]]),g={name:"User-list-controller",components:{userList:y},data(){return{parentKeyValuePair:{},fetchFlags:{}}}};function L(e,l,t,i,r,a){const s=n("userList");return c(),d("div",null,[m(s,{parentKeyValuePair:r.parentKeyValuePair,fetchFlags:r.fetchFlags},null,8,["parentKeyValuePair","fetchFlags"])])}const K=o(g,[["render",L],["__file","UserListController.vue"]]);export{K as default};
