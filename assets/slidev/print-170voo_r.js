function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-mH2TFdB1.js","assets/modules/vue-6JIR2-ud.js","assets/index-vRGOauCP.js","assets/modules/shiki-ioKdsmC-.js","assets/modules/shiki-UnITDZrU.css","assets/index-J6lZMBzu.css","assets/slidev/bottom-yUimsFao.js","assets/bottom-2yFrefRR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as l,M as F,Y as q,J as M,o as a,b as c,l as d,A as e,i as A,c as m,g,h as B,F as v,Z as R,e as S,f as V,C as j,_ as z}from"../modules/vue-6JIR2-ud.js";import{t as G}from"../modules/shiki-ioKdsmC-.js";import{G as W,g as D,S as I,a as O,w as T}from"./bottom-yUimsFao.js";import{s as H,a as f,_ as J,c as k,i as K,b as h,u as C,d as $,C as X,e as N,f as w,p as Y,g as Z}from"../index-vRGOauCP.js";import{P as Q}from"./PrintStyle-S5-r8leu.js";const U=["id"],ee=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(i){const{nav:t}=i,n=l(()=>t.currentSlideRoute.value),r=l(()=>({height:`${H.value}px`,width:`${f.value}px`})),s=F();J(()=>import("./DrawingPreview-mH2TFdB1.js").then(o=>o.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(o=>s.value=o.default);const u=l(()=>`${n.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return q(K,M({nav:t,configs:k,themeConfigs:l(()=>k.themeConfig)})),(o,y)=>(a(),c("div",{id:u.value,class:"print-slide-container",style:B(r.value)},[d(e(W)),d(I,{is:n.value.component,"clicks-context":o.nav.clicksContext.value,class:A(e(D)(n.value)),route:n.value},null,8,["is","clicks-context","class","route"]),s.value?(a(),m(e(s),{key:0,page:n.value.no},null,8,["page"])):g("v-if",!0),d(e(O))],12,U))}}),L=h(ee,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(i){const{route:t}=i,{isPrintWithClicks:n}=C(),r=$(t,n.value?0:X);return(s,u)=>(a(),c(v,null,[d(L,{"clicks-context":e(r),nav:e(N)(s.route,e(r))},null,8,["clicks-context","nav"]),e(n)?(a(!0),c(v,{key:0},R(e(r).total,o=>(a(),m(L,{key:o,nav:e(N)(s.route,e($)(s.route,o))},null,8,["nav"]))),128)):g("v-if",!0)],64))}}),ne=h(te,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/PrintSlide.vue"]]),se={id:"print-content"},oe=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(i){const t=i,{slides:n,currentRoute:r}=C(),s=l(()=>t.width),u=l(()=>t.width/w.value),o=l(()=>s.value/u.value),y=l(()=>o.value<w.value?s.value/f.value:u.value*w.value/f.value);let p=n.value;r.value.query.range&&(p=Y(p.length,r.value.query.range).map(b=>p[b-1]));const E=l(()=>({"select-none":!k.selectable}));return q(Z,y),(P,b)=>(a(),c("div",{id:"print-container",class:A(E.value)},[S("div",se,[(a(!0),c(v,null,R(e(p),x=>(a(),m(ne,{key:x.no,route:x},null,8,["route"]))),128))]),V(P.$slots,"controls")],2))}}),ae=h(oe,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/PrintContainer.vue"]]),re={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=S("div",{id:"twoslash-container"},null,-1),ie=_({__name:"print",setup(i){const{isPrintMode:t}=C();return j(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),z(()=>{G()}),(n,r)=>(a(),c(v,null,[e(t)?(a(),m(Q,{key:0})):g("v-if",!0),S("div",re,[d(ae,{class:"w-full h-full",style:B({background:"var(--slidev-slide-container-background, black)"}),width:e(T).width.value},null,8,["style","width"])]),le],64))}}),_e=h(ie,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/pages/print.vue"]]);export{_e as default};
