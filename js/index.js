const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/EmptyLayout.js","js/vendor.js","css/vendor.css","js/MainLayout.js","js/SigninView.js","js/JoinView.js","js/AboutController.js","js/UserListController.js","js/UserReadController.js","js/ProductBrandListController.js","js/ProductBrandReadController.js","js/ProductCategoryListController.js","js/ProductCategoryReadController.js","js/ProductListController.js","js/ProductReadController.js","js/ErrorNotFound.js","js/qcalendar.js","js/store.js","js/vuex-orm-axios.js"])))=>i.map(i=>d[i]);
var T=Object.defineProperty;var P=(i,t,a)=>t in i?T(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var r=(i,t,a)=>P(i,typeof t!="symbol"?t+"":t,a);import{M as W,_ as L,o as N,i as $,a as D,b as E,c as w,u as H,d as O,r as F,e as x,D as M,V as S,f as V,g as k,h as l,j as q,k as K,l as B,Q as j,m as z,n as Q}from"./vendor.js";class I extends W{static fields(){return{id:this.attr(null).nullable(),name:this.attr(""),label:this.attr(""),parent:this.attr(null),lineage:this.attr([])}}}r(I,"entity","routeLineages");function f(i){return typeof i=="string"?i.replace(/^\//,""):""}function C(i){const t={};function a(e,s=""){const n=f(s+"/"+f(e.path));t[n]=e,e.children&&e.children.length>0&&e.children.forEach(d=>a(d,n))}return i.forEach(e=>a(e)),t}function G(i,t){var d,_,A;f(i.path);const a=[];let e=i;for(;e;){const o=e.name||"";if(a.includes(o))break;a.unshift(o);const h=((d=e.meta)==null?void 0:d.breadcrumbParentName)||null;if(!h)break;e=(h?t[f(h)]:null)||null}const n={label:((_=i.meta)==null?void 0:_.breadcrumbName)||"",name:i.name||"",parent:(A=i.meta)!=null&&A.breadcrumbParentName?f(i.meta.breadcrumbParentName):null,lineage:a};I.insert({data:n})}function v(i){console.log("Generating route lineages...");const t=C(i);Object.values(t).forEach(a=>{G(a,t)}),console.log("Route lineages generated.")}const J=Object.assign({name:"App"},{__name:"App",setup(i,{expose:t}){t(),N(()=>{H();const e=O();$.use(D,{axios:E,baseURL:"http://aiv-team-2.0.test/api"}),e&&e.options&&e.options.routes?v(e.options.routes):console.error("Router is not properly initialized or routes are not accessible.")});const a={onMounted:N,get useStore(){return H},get useRouter(){return O},get VuexORM(){return $},get VuexORMAxios(){return D},get axios(){return E},get generateRouteLineages(){return v}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function X(i,t,a,e,s,n){const d=F("router-view");return x(),w(d)}const Y=L(J,[["render",X],["__file","App.vue"]]);class g extends M{static mergeHeaders(t){const a={...t},e=S.get("VITE_AUTH");if(e!=null&&e.token){const s=new Date(e.expireDate);new Date<=s&&(a.Authorization=`Bearer ${e.token}`)}return a}}r(g,"baseUrl","https://test.bluegem.co.za"),r(g,"adapator","laravel");class m extends g{static openRecord(t,a,e){e.push({name:"/lists/product-brands/:rId/:rName",params:{rId:t,rName:t}})}static fields(){return{id:this.attr("").nullable(),name:this.attr(""),slug:this.attr(""),created_at:this.attr("").nullable(),updated_at:this.attr("").nullable(),products:this.hasMany(c,"brand_id")}}static FetchAll(t=[],a={},e={},s={page:1,limit:15,filters:{},clearPrimaryModelOnly:!1}){return this.customSupabaseApiFetchAll(`${this.baseUrl}${this.entityUrl}`,[...this.parentWithables,...t],a,this.mergeHeaders(e),s,this)}static FetchById(t,a=[],e={},s={}){return this.customSupabaseApiFetchById(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Store(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Update(t,a=[],e={},s={}){return this.customSupabaseApiUpdate(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Delete(t,a={},e={}){return this.customSupabaseApiDelete(`${this.baseUrl}${this.entityUrl}`,t,a,this.mergeHeaders(e),this)}}r(m,"entity","productbrand"),r(m,"entityUrl","/api/product-brands"),r(m,"primaryKey","id"),r(m,"titleKey","name"),r(m,"entityHumanName","ProductBrand"),r(m,"parentWithables",[]),r(m,"rules",{readables:()=>!0,readable:t=>!0,editable:t=>!0,creatable:()=>!0}),r(m,"hooks",{createComplete:t=>{}}),r(m,"fieldsMetadata",{id:{},name:{},slug:{},created_at:{},updated_at:{}});class p extends g{static openRecord(t,a,e){e.push({name:"/lists/product-categories/:rId/:rName",params:{rId:t,rName:t}})}static fields(){return{id:this.attr("").nullable(),name:this.attr(""),slug:this.attr(""),created_at:this.attr("").nullable(),updated_at:this.attr("").nullable(),products:this.hasMany(c,"category_id")}}static FetchAll(t=[],a={},e={},s={page:1,limit:15,filters:{},clearPrimaryModelOnly:!1}){return this.customSupabaseApiFetchAll(`${this.baseUrl}${this.entityUrl}`,[...this.parentWithables,...t],a,this.mergeHeaders(e),s,this)}static FetchById(t,a=[],e={},s={}){return this.customSupabaseApiFetchById(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Store(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Update(t,a=[],e={},s={}){return this.customSupabaseApiUpdate(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Delete(t,a={},e={}){return this.customSupabaseApiDelete(`${this.baseUrl}${this.entityUrl}`,t,a,this.mergeHeaders(e),this)}}r(p,"entity","productcategory"),r(p,"entityUrl","/api/product-categories"),r(p,"primaryKey","id"),r(p,"titleKey","name"),r(p,"entityHumanName","ProductCategory"),r(p,"parentWithables",[]),r(p,"rules",{readables:()=>!0,readable:t=>!0,editable:t=>!0,creatable:()=>!0}),r(p,"hooks",{createComplete:t=>{}}),r(p,"fieldsMetadata",{id:{},name:{},slug:{},created_at:{},updated_at:{}});class c extends g{static openRecord(t,a,e){e.push({name:"/lists/products/:rId/:rName",params:{rId:t,rName:t}})}static fields(){return{id:this.attr("").nullable(),title:this.attr(""),description:this.attr("").nullable(),price:this.attr(""),seller_id:this.attr(""),buyer_id:this.attr("").nullable(),category_id:this.attr("").nullable(),brand_id:this.attr("").nullable(),status:this.attr(""),created_at:this.attr("").nullable(),updated_at:this.attr("").nullable(),brand:this.belongsTo(m,"brand_id"),buyer:this.belongsTo(u,"buyer_id"),category:this.belongsTo(p,"category_id"),seller:this.belongsTo(u,"seller_id")}}static FetchAll(t=[],a={},e={},s={page:1,limit:15,filters:{},clearPrimaryModelOnly:!1}){return this.customSupabaseApiFetchAll(`${this.baseUrl}${this.entityUrl}`,[...this.parentWithables,...t],a,this.mergeHeaders(e),s,this)}static FetchById(t,a=[],e={},s={}){return this.customSupabaseApiFetchById(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Store(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Update(t,a=[],e={},s={}){return this.customSupabaseApiUpdate(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Delete(t,a={},e={}){return this.customSupabaseApiDelete(`${this.baseUrl}${this.entityUrl}`,t,a,this.mergeHeaders(e),this)}}r(c,"entity","product"),r(c,"entityUrl","/api/products"),r(c,"primaryKey","id"),r(c,"titleKey","title"),r(c,"entityHumanName","Product"),r(c,"parentWithables",["seller","buyer","category","brand"]),r(c,"rules",{readables:()=>!0,readable:t=>!0,editable:t=>!0,creatable:()=>!0}),r(c,"hooks",{createComplete:t=>{}}),r(c,"fieldsMetadata",{id:{},title:{},description:{},price:{},seller_id:{linkablesRule:()=>({})},buyer_id:{linkablesRule:()=>({})},category_id:{linkablesRule:()=>({})},brand_id:{linkablesRule:()=>({})},status:{},created_at:{},updated_at:{}});class u extends g{static openRecord(t,a,e){e.push({name:"/lists/users/:rId/:rName",params:{rId:t,rName:t}})}static fields(){return{id:this.attr("").nullable(),old_id:this.attr("").nullable(),name:this.attr(""),created_at:this.attr("").nullable(),updated_at:this.attr("").nullable(),products:this.hasMany(c,"buyer_id"),productsSellerId:this.hasMany(c,"seller_id")}}static FetchAll(t=[],a={},e={},s={page:1,limit:15,filters:{},clearPrimaryModelOnly:!1}){return this.customSupabaseApiFetchAll(`${this.baseUrl}${this.entityUrl}`,[...this.parentWithables,...t],a,this.mergeHeaders(e),s,this)}static FetchById(t,a=[],e={},s={}){return this.customSupabaseApiFetchById(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Store(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Update(t,a=[],e={},s={}){return this.customSupabaseApiUpdate(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Delete(t,a={},e={}){return this.customSupabaseApiDelete(`${this.baseUrl}${this.entityUrl}`,t,a,this.mergeHeaders(e),this)}static Register(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}/api/register`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}}r(u,"entity","user"),r(u,"entityUrl","/api/users"),r(u,"primaryKey","id"),r(u,"entityHumanName","User"),r(u,"titleKey","name"),r(u,"parentWithables",[]),r(u,"rules",{readables:()=>!0,readable:t=>!0,editable:t=>{const a=S.get("VITE_AUTH");return t.id===(a==null?void 0:a.user.id)},creatable:()=>!1}),r(u,"fieldsMetadata",{id:{},old_id:{},name:{},created_at:{autoFill(t){return t.created_at?t.created_at:new Date().toISOString().slice(0,19).replace("T"," ")}},updated_at:{autoFill(t){return new Date().toISOString().slice(0,19).replace("T"," ")}}}),r(u,"templateListGrid",{}),r(u,"templateOverview",{});class y extends g{static fields(){return{user:this.attr({}),accessToken:this.attr(""),expireDate:this.attr("")}}static FetchAll(t=[],a={},e={},s={page:1,limit:15,filters:{},clearPrimaryModelOnly:!1}){return this.customSupabaseApiFetchAll(`${this.baseUrl}${this.entityUrl}`,[...this.parentWithables,...t],a,this.mergeHeaders(e),s,this)}static FetchById(t,a=[],e={},s={}){return this.customSupabaseApiFetchById(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Store(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Update(t,a=[],e={},s={}){return this.customSupabaseApiUpdate(`${this.baseUrl}${this.entityUrl}`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}static Delete(t,a={flags:{},moreHeaders:{}}){return this.customSupabaseApiDelete(`${this.baseUrl}${this.entityUrl}`,t,a.flags,this.mergeHeaders(a.moreHeaders),this)}static signIn(t,a=[],e={},s={}){return this.customSupabaseApiStore(`${this.baseUrl}/api/login`,t,[...this.parentWithables,...a],e,this.mergeHeaders(s),this)}}r(y,"entity","session"),r(y,"entityUrl","/api/session"),r(y,"primaryKey","id"),r(y,"parentWithables",[]);const b=new $.Database;b.register(V);b.register(u);b.register(y);b.register(I);b.register(m);b.register(p);b.register(c);const U=k({plugins:[$.install(b)]}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),tt=[{path:"/",component:()=>l(()=>import("./EmptyLayout.js"),__vite__mapDeps([0,1,2])),meta:{requiresAuth:!1},children:[{path:"/",component:()=>l(()=>import("./MainLayout.js"),__vite__mapDeps([3,1,2])),redirect:i=>"/about",children:[{path:"/login",name:"/login",component:()=>l(()=>import("./SigninView.js"),__vite__mapDeps([4,1,2])),meta:{requiresAuth:!1}},{path:"/register",name:"/register",component:()=>l(()=>import("./JoinView.js"),__vite__mapDeps([5,1,2])),meta:{requiresAuth:!1}},{path:"/about",name:"/about",component:()=>l(()=>import("./AboutController.js"),__vite__mapDeps([6,1,2])),meta:{breadcrumbName:"About",breadcrumbParentName:"",requiresAuth:!1}},{path:"/lists/users",name:"/lists/users",component:()=>l(()=>import("./UserListController.js"),__vite__mapDeps([7,1,2])),meta:{breadcrumbName:"Users",breadcrumbParentName:"",requiresAuth:!1}},{path:"/lists/users/:rId/:rName",name:"/lists/users/:rId/:rName",component:()=>l(()=>import("./UserReadController.js"),__vite__mapDeps([8,1,2])),meta:{breadcrumbName:":rName",breadcrumbParentName:"/lists/users",requiresAuth:!1}},{path:"/lists/product-brands",name:"/lists/product-brands",component:()=>l(()=>import("./ProductBrandListController.js"),__vite__mapDeps([9,1,2])),meta:{breadcrumbName:"ProductBrands",breadcrumbParentName:""}},{path:"/lists/product-brands/:rId/:rName",name:"/lists/product-brands/:rId/:rName",component:()=>l(()=>import("./ProductBrandReadController.js"),__vite__mapDeps([10,1,2])),meta:{breadcrumbName:":rName",breadcrumbParentName:"/lists/product-brands"}},{path:"/lists/product-categories",name:"/lists/product-categories",component:()=>l(()=>import("./ProductCategoryListController.js"),__vite__mapDeps([11,1,2])),meta:{breadcrumbName:"ProductCategories",breadcrumbParentName:""}},{path:"/lists/product-categories/:rId/:rName",name:"/lists/product-categories/:rId/:rName",component:()=>l(()=>import("./ProductCategoryReadController.js"),__vite__mapDeps([12,1,2])),meta:{breadcrumbName:":rName",breadcrumbParentName:"/lists/product-categories"}},{path:"/lists/products",name:"/lists/products",component:()=>l(()=>import("./ProductListController.js"),__vite__mapDeps([13,1,2])),meta:{breadcrumbName:"Products",breadcrumbParentName:""}},{path:"/lists/products/:rId/:rName",name:"/lists/products/:rId/:rName",component:()=>l(()=>import("./ProductReadController.js"),__vite__mapDeps([14,1,2])),meta:{breadcrumbName:":rName",breadcrumbParentName:"/lists/products"}}],meta:{requiresAuth:!1}}]},{path:"/:catchAll(.*)*",component:()=>l(()=>import("./ErrorNotFound.js"),__vite__mapDeps([15,1,2])),meta:{requiresAuth:!1}}],R=q(function(){const t=K({scrollBehavior:()=>({left:0,top:0}),routes:tt,history:B("/")});return t.beforeEach((a,e,s)=>{const n=S.get("VITE_AUTH");a.matched.some(_=>_.meta.requiresAuth!==!1)&&!(n!=null&&n.user)?s({path:"/login"}):s()}),t});async function et(i,t){const a=i(Y);a.use(j,t);const e=typeof U=="function"?await U({}):U,{storeKey:s}=await l(async()=>{const{storeKey:d}=await Promise.resolve().then(()=>Z);return{storeKey:d}},void 0),n=z(typeof R=="function"?await R({store:e}):R);return e.$router=n,{app:a,store:e,storeKey:s,router:n}}const at={config:{brand:{}}},st="/";async function rt({app:i,router:t,store:a,storeKey:e},s){let n=!1;const d=o=>{try{return t.resolve(o).href}catch{}return Object(o)===o?null:o},_=o=>{if(n=!0,typeof o=="string"&&/^https?:\/\//.test(o)){window.location.href=o;return}const h=d(o);h!==null&&(window.location.href=h,window.location.reload())},A=window.location.href.replace(window.location.origin,"");for(let o=0;n===!1&&o<s.length;o++)try{await s[o]({app:i,router:t,store:a,ssrContext:null,redirect:_,urlPath:A,publicPath:st})}catch(h){if(h&&h.url){_(h.url);return}console.error("[Quasar] boot error:",h);return}n!==!0&&(i.use(t),i.use(a,e),i.mount("#q-app"))}et(Q,at).then(i=>{const[t,a]=Promise.allSettled!==void 0?["allSettled",e=>e.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",e=>e.map(s=>s.default)];return Promise[t]([l(()=>import("./qcalendar.js"),__vite__mapDeps([16,1,2])),l(()=>import("./store.js"),__vite__mapDeps([17,1,2])),l(()=>import("./vuex-orm-axios.js"),__vite__mapDeps([18,1,2]))]).then(e=>{const s=a(e).filter(n=>typeof n=="function");rt(i,s)})});export{m as P,y as S,u as U,p as a,c as b,U as s};
