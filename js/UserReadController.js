import{_ as c,a8 as v,r as l,e as p,c as $,x as f,W as o,F as h,s as n,a9 as w,V as S,G as C,w as i,a6 as _,aa as L,ab as R}from"./vendor.js";import"moment";import"moment-timezone";import{U as b}from"./index.js";import q from"vue-cookies";const y={name:"User-read",components:{SuperRecord:v},computed:{superRecordModel(){return b}},data(){return{templateListGrid:{class:"q-pa-md q-col-gutter-md",cols:[{width:12,dataPoint:{type:"function",function:e=>`${e.name}`,label:"",tag:"div",class:"text-h6",hideLabel:!0}},{width:3,dataPoint:{type:"function",function:e=>`${e.email}`,label:"Email"}},{width:12,dataPoint:{hideLabel:!0,field:"actions"}}]}}}};function x(e,t,s,m,a,r){const d=l("SuperRecord");return p(),$(d,{model:r.superRecordModel,id:+e.$route.params.rId,displayMapField:!0,onInitialLoadHappened:t[0]||(t[0]=u=>e.$emit("initialLoadHappened")),templateOverview:a.templateListGrid,allowedTabs:["overview"]},null,8,["model","id","templateOverview"])}const B=c(y,[["render",x],["__file","UserRead.vue"]]),U={name:"SectionComponent",props:{label:String,noBorder:{type:Boolean,default:()=>!1}}},H={class:"q-px-md q-py-sm"},g={class:"q-my-xs"};function I(e,t,s,m,a,r){return p(),f("div",null,[o("div",H,[o("div",g,h(s.label),1)]),n(w),o("div",{class:C(s.noBorder?"q-py-md":"q-pa-md")},[S(e.$slots,"default")],2)])}const V=c(U,[["render",I],["__file","SectionComponent.vue"]]),k={name:"User-read-controller",components:{SectionComponent:V,userRead:B},data(){return{initialLoadHappened:!1,renderSection1:!1}},computed:{session(){return q.get("VITE_AUTH")}}},E={class:"row q-col-gutter-md"},G={class:"col-xl-6 col-md-6 col-sm-12 col-xs-12"},M=o("div",{class:"q-ma-md"}," ... ",-1);function P(e,t,s,m,a,r){const d=l("userRead"),u=l("SectionComponent");return p(),f("div",null,[n(_,{class:"q-mb-md",style:{overflow:"hidden"}},{default:i(()=>[n(d,{id:+e.$route.params.rId,onInitialLoadHappened:t[0]||(t[0]=T=>a.initialLoadHappened=!0)},null,8,["id"])]),_:1}),L(o("div",null,[o("div",E,[o("div",G,[n(_,{class:"",style:{overflow:"hidden"}},{default:i(()=>[n(u,{label:"Lorum Ipsum",noBorder:""},{default:i(()=>[M]),_:1})]),_:1})])])],512),[[R,a.initialLoadHappened]])])}const z=c(k,[["render",P],["__file","UserReadController.vue"]]);export{z as default};
