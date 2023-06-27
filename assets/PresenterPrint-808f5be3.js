import{d as p,i as _,a as d,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as k,m as w,p as N,q as P,_ as S}from"./index-3857cc9b.js";import{N as V}from"./NoteDisplay-c3b7a49e.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=p({__name:"PresenterPrint",setup(q){_(d),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(P))},[t("div",j,[t("div",L,[t("h1",T,s(a(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(b)),1),k(" "+s(e==null?void 0:e.title)+" ",1),z])]),w(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
