import{d as u,t as p,a7 as c,D as d,E as m,o as _,b as f,i as w}from"../modules/vue-qLwg7mlj.js";import{u as g}from"./context-MHM20Ows.js";import{b as v}from"./DrawingPreview-CFeype8E.js";import{_ as b}from"../index-DbjAHYTp.js";import"../modules/shiki-DvLM4DQx.js";const h=u({__name:"DrawingLayer",setup(l,{expose:t}){t();const{drauu:e,drawingEnabled:n,loadCanvas:o}=v(),a=g().$scale,r=p();c(()=>{e.mount(r.value,r.value.parentElement),d(a,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),m(()=>{e.unmount()});const s={drauu:e,drawingEnabled:n,loadCanvas:o,scale:a,svg:r};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function E(l,t,e,n,o,a){return _(),f("svg",{ref:"svg",class:w(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const S=b(h,[["render",E],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{S as default};
