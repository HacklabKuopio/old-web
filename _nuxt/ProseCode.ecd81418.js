import{_ as x,o as _,c as y,a as h,g as w,a5 as Q,m,a2 as M,a3 as j,V as W,a6 as D,n as F,y as B,G,C as R,t as I,f as E,z as U,j as P}from"./entry.3cd8be95.js";const J={},Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},z=h("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"},null,-1),K=[z];function q(e,t){return _(),y("svg",Z,K)}const X=x(J,[["render",q]]),Y={},ee={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},te=h("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"},null,-1),ne=[te];function oe(e,t){return _(),y("svg",ee,ne)}const ae=x(Y,[["render",oe]]);var S;const b=typeof window<"u",se=e=>typeof e=="string",re=()=>{};b&&((S=window==null?void 0:window.navigator)!=null&&S.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function O(e){return typeof e=="function"?e():m(e)}function ue(e){return e}function N(e){return M()?(j(e),!0):!1}function ie(e,t=!0){W()?D(e):t?e():F(e)}function ce(e,t,n={}){const{immediate:a=!0}=n,s=w(!1);let u=null;function d(){u&&(clearTimeout(u),u=null)}function o(){s.value=!1,d()}function c(...l){d(),s.value=!0,u=setTimeout(()=>{s.value=!1,u=null,e(...l)},O(t))}return a&&(s.value=!0,b&&c()),N(o),{isPending:Q(s),start:c,stop:o}}function le(e){var t;const n=O(e);return(t=n==null?void 0:n.$el)!=null?t:n}const de=b?window:void 0,pe=b?window.navigator:void 0;function fe(...e){let t,n,a,s;if(se(e[0])||Array.isArray(e[0])?([n,a,s]=e,t=de):[t,n,a,s]=e,!t)return re;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const u=[],d=()=>{u.forEach(i=>i()),u.length=0},o=(i,f,v,g)=>(i.addEventListener(f,v,g),()=>i.removeEventListener(f,v,g)),c=G(()=>[le(t),O(s)],([i,f])=>{d(),i&&u.push(...n.flatMap(v=>a.map(g=>o(i,v,g,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),d()};return N(l),l}function _e(e,t=!1){const n=w(),a=()=>n.value=!!e();return a(),ie(a,t),n}function ve(e={}){const{navigator:t=pe,read:n=!1,source:a,copiedDuring:s=1500,legacy:u=!1}=e,d=["copy","cut"],o=_e(()=>t&&"clipboard"in t),c=B(()=>o.value||u),l=w(""),i=w(!1),f=ce(()=>i.value=!1,s);function v(){o.value?t.clipboard.readText().then(r=>{l.value=r}):l.value=H()}if(c.value&&n)for(const r of d)fe(r,v);async function g(r=O(a)){c.value&&r!=null&&(o.value?await t.clipboard.writeText(r):V(r),l.value=r,i.value=!0,f.start())}function V(r){const p=document.createElement("textarea");p.value=r??"",p.style.position="absolute",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),p.remove()}function H(){var r,p,C;return(C=(p=(r=document==null?void 0:document.getSelection)==null?void 0:r.call(document))==null?void 0:p.toString())!=null?C:""}return{isSupported:c,text:l,copied:i,copy:g}}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k="__vueuse_ssr_handlers__";T[k]=T[k]||{};var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ge=Object.defineProperty,$=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,he=(e,t)=>{for(var n in t||(t={}))me.call(t,n)&&L(e,n,t[n]);if($)for(var n of $(t))ye.call(t,n)&&L(e,n,t[n]);return e};const we={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};he({linear:ue},we);const be={class:"container group"},Oe={key:0,class:"filename-text"},xe={key:1,class:"language-text"},Ce={class:"bottom-container opacity-100 group-hover:md:opacity-100 md:opacity-0 transition-opacity duration-150"},Ie={class:"copy-container"},Ee=R({__name:"ProseCode",props:{code:{default:""},language:{default:null},filename:{default:null},highlights:{default:[]}},setup(e){const{copy:t,copied:n,text:a}=ve(),s=e,u={java:{text:"Java"},javascript:{text:"JavaScript"},python:{text:"Python"}},d=B(()=>{var o;return s.language?(o=u[s.language])==null?void 0:o.text:null});return(o,c)=>{const l=X,i=ae;return _(),y("div",be,[o.filename?(_(),y("span",Oe,I(o.filename),1)):E("",!0),m(d)?(_(),y("span",xe,I(m(d)),1)):E("",!0),U(o.$slots,"default"),h("div",Ce,[h("div",Ie,[h("button",{onClick:c[0]||(c[0]=f=>m(t)(o.code)),class:"p-1 text-background border rounded-md border-background hover:border-brand_primary hover:bg-brand_primary hover:text-background"},[m(n)?(_(),P(l,{key:0,class:"w-5 h-5",width:"20",height:"20"})):(_(),P(i,{key:1,class:"w-5 h-5",width:"20",height:"20"}))])])])])}}});const Se=x(Ee,[["__scopeId","data-v-5db9d261"]]);export{Se as default};
