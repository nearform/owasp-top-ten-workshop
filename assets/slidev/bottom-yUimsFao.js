function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as n,al as z,am as F,an as j,y as c,ao as A,ap as E,Q as t,S as w,R as L,aq as B,d as g,_ as x,o as m,b as C,F as P,g as O,e as k,Y as i,ar as S,c as $,h as N,i as R,af as D,A as M,as as q,v as I}from"../modules/vue-6JIR2-ud.js";import{f as V,_ as W,c as r,b as T,v as G,w as K,x as U,y as H,z as Q,A as X}from"../index-vRGOauCP.js";const ie=n(!1),le=n(!1),re=n(!1),Y=n(!1),ce=n(!0),de=z({xs:460,...B}),y=F(),ue=j(),pe=c(()=>y.height.value-y.width.value/V.value>120),ve=A(w?document.body:null),h=E(),fe=c(()=>{var s,e;return["INPUT","TEXTAREA"].includes(((s=h.value)==null?void 0:s.tagName)||"")||((e=h.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),ge=c(()=>{var s;return["BUTTON","A"].includes(((s=h.value)==null?void 0:s.tagName)||"")});t("slidev-camera","default",{listenToStorageChanges:!1});t("slidev-mic","default",{listenToStorageChanges:!1});const me=t("slidev-scale",0),he=t("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),we=t("slidev-show-editor",!1,{listenToStorageChanges:!1}),_e=t("slidev-editor-vertical",!1,{listenToStorageChanges:!1});t("slidev-editor-width",w?window.innerWidth*.4:318,{listenToStorageChanges:!1});t("slidev-editor-height",w?window.innerHeight*.4:300,{listenToStorageChanges:!1});const f=t("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),v=t("slidev-presenter-layout",1,{listenToStorageChanges:!1});function Ce(){v.value=v.value+1,v.value>2&&(v.value=1)}function Se(){f.value=Math.min(2,f.value+.1)}function ye(){f.value=Math.max(.5,f.value-.1)}const xe=L(Y);function ke(s,e=""){var d,a;const o=["slidev-page",e],l=(a=(d=s==null?void 0:s.meta)==null?void 0:d.slide)==null?void 0:a.no;return l!=null&&o.push(`slidev-page-${l}`),o.filter(Boolean).join(" ")}async function Te(){const{saveAs:s}=await W(()=>import("../modules/file-saver-LVY1lggI.js").then(e=>e.F),__vite__mapDeps([]));s(typeof r.download=="string"?r.download:r.exportFilename?`${r.exportFilename}.pdf`:"/owasp-top-ten-workshop/slidev-exported.pdf",`${r.title}.pdf`)}const Z={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},J=k("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),ee=k("div",null,"Loading slide...",-1),se=g({__name:"SlideLoading",setup(s){const e=n(!1);return x(()=>{setTimeout(()=>{e.value=!0},200)}),(o,l)=>(m(),C("div",Z,[e.value?(m(),C(P,{key:0},[J,ee],64)):O("v-if",!0)]))}}),te=T(se,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/SlideLoading.vue"]]),oe=g({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(s){const e=s,o=c(()=>{var a,u;return((u=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:u.frontmatter.zoom)??1});i(G,e.route),i(K,n(e.route.no)),i(U,n(e.renderContext)),i(H,S(e,"active")),i(Q,S(e,"clicksContext")),i(X,o);const l=c(()=>o.value===1?void 0:{width:`${100/o.value}%`,height:`${100/o.value}%`,transformOrigin:"top left",transform:`scale(${o.value})`}),d=q({loader:async()=>{const a=await e.is();return g({setup(u,{attrs:b}){return x(()=>{var p,_;(_=(p=e.clicksContext)==null?void 0:p.onMounted)==null||_.call(p)}),()=>I(a.default,b)}})},delay:300,loadingComponent:te});return(a,u)=>(m(),$(D(M(d)),{style:N(l.value),"data-slidev-no":e.route.no,class:R({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","data-slidev-no","class"]))}}),be=T(oe,[["__scopeId","data-v-026ee359"],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),ze={render(){return[]}},Fe={render(){return[]}};export{Fe as G,be as S,ze as a,Y as b,f as c,ye as d,ie as e,le as f,ke as g,pe as h,Se as i,we as j,me as k,_e as l,re as m,ue as n,Te as o,v as p,ce as q,ge as r,he as s,xe as t,fe as u,ve as v,y as w,de as x,Ce as y,h as z};
