import{a as v,_ as k}from"./chevronDown.0ae2cd70.js";import{a as b,o as s,c as B,C as o,e,J as L,b as d,X as x,Y as P,t as p,q as N,Z as n,u as w,m as q,a5 as l,a6 as m,$ as h,a0 as _}from"./entry.ea459293.js";import{_ as $}from"./nuxt-link.4cbbee93.js";/* empty css                       */const U={},S=e("div",{class:"border-t-2 pt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right mb-6 md:mb-8"},[e("ol",{itemscope:"",itemtype:"https://schema.org/BreadcrumbList",class:"blog-breadcrumb"},[e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("a",{itemprop:"item",href:"/"},[e("span",{itemprop:"name"},"Home")]),e("meta",{itemprop:"position",content:"1"})]),e("span",null,"/"),e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("span",{itemprop:"name"},"Blog"),e("meta",{itemprop:"position",content:"2"})])])],-1),C=e("h1",{class:"font-bold mb-4 md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 text-center md:text-left"},"Hacklab Kuopio Blog",-1),D=e("p",{class:"mb-3 md:w-8/12 md:text-lg md:leading-lg text-center md:text-left"}," Blogi on kehitteillä. ",-1),I=e("div",{class:"border-t-2 mt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right"},null,-1);function V(t,a){const i=v;return s(),B(i,{id:"blog",class:"text-typography_primary"},{default:o(()=>[S,C,D,I]),_:1})}const G=b(U,[["render",V]]),E={class:"grid grid-cols-10 gap-4 text-typography_primary"},j={class:"wrapper"},A={class:"text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"},H={class:"text-sm leading-sm mb-4 text-typography_primary/75 dark:text-typography_primary_dark/75"},M={key:0,class:"w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"},O={__name:"list",props:{data:{type:Array,required:!0},message:{type:String,default:"There are no posts right now, but stay tuned for newer releases in the future."}},setup(t){const{$formatDate:a}=L();return(i,y)=>{const g=$;return s(),d(x,null,[e("ul",E,[(s(!0),d(x,null,P(t.data,r=>(s(),d("li",{key:r._path,class:"col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"},[n(g,{to:r._path+"/",class:"p-4 block relative"},{default:o(()=>[e("div",j,[e("header",null,[e("h2",A,p(r.headline),1),e("p",H,p(w(a)(r.date)),1),e("p",null,p(r.excerpt),1)])])]),_:2},1032,["to"])]))),128))]),t.data.length==0?(s(),d("p",M,p(t.message),1)):N("",!0)],64)}}},T={class:"pagination-list text-typography_primary"},z={class:"pagination-extra"},F={class:"pagination-extra"},J={__name:"pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},nextPage:{type:Boolean,required:!0},baseUrl:{type:String,required:!0},pageUrl:{type:String,required:!0}},setup(t){const a=t,i=r=>`${a.pageUrl}${r}/`,y=[Math.max(1,a.currentPage-1),a.currentPage,Math.min(a.totalPages,a.currentPage+1)],g=q(()=>a.currentPage===2?a.baseUrl:`${a.pageUrl}${a.currentPage-1}/`);return(r,K)=>{const f=k,u=$;return s(),d("div",T,[l(n(u,{class:"pagination-item pagination-icon",to:w(g)},{default:o(()=>[n(f,{class:"transform rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage>1]]),n(u,{class:_(["pagination-item",t.currentPage===1?"active":""]),to:t.baseUrl},{default:o(()=>[h("1")]),_:1},8,["class","to"]),l(e("span",z," ... ",512),[[m,t.currentPage>2]]),(s(),d(x,null,P(y,c=>l(n(u,{key:c,class:_(["pagination-item",t.currentPage===c?"active":""]),to:i(c)},{default:o(()=>[h(p(c),1)]),_:2},1032,["class","to"]),[[m,c!==1&&c!==t.totalPages]])),64)),l(e("span",F," ... ",512),[[m,t.currentPage<t.totalPages-1]]),l(n(u,{class:_(["pagination-item",t.currentPage===t.totalPages?"active":""]),to:i(t.totalPages)},{default:o(()=>[h(p(t.totalPages),1)]),_:1},8,["class","to"]),[[m,t.totalPages>1]]),l(n(u,{class:"pagination-item pagination-icon",to:i(t.currentPage+1)},{default:o(()=>[n(f,{class:"transform -rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage<t.totalPages]])])}}},Q=b(J,[["__scopeId","data-v-1dac4ff8"]]);export{G as _,O as a,Q as b};
