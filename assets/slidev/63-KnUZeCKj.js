import{I as f}from"./default-DAWz1zwl.js";import{_ as v,bd as l}from"../index-DbjAHYTp.js";import{p as d,u as c,f as x}from"./context-MHM20Ows.js";import{o as h,c as b,k as y,q as g,s as $,e,a6 as t}from"../modules/vue-qLwg7mlj.js";import"../modules/shiki-DvLM4DQx.js";const S={__name:"63",setup(u,{expose:a}){a(),d(l);const{$slidev:o,$nav:r,$clicksContext:s,$clicks:n,$page:p,$renderContext:_,$frontmatter:m}=c(),i={$slidev:o,$nav:r,$clicksContext:s,$clicks:n,$page:p,$renderContext:_,$frontmatter:m,InjectedLayout:f,get frontmatter(){return l},get useSlideContext(){return c},get _provideFrontmatter(){return d},get _frontmatterToProps(){return x}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},k=e("h1",null,"A08 Fixing it 🪄",-1),z=e("div",{class:"dense"},[e("ul",null,[e("li",null,[t("Run the automated tests for step 8 - "),e("code",null,"npm run verify")]),e("li",null,"The tests fail because the server shouldn’t trust a library that provides a way to deserialize strings into executable JavaScript code"),e("li",null,[t("Untrusted data passed into "),e("code",null,"unserialize()"),t(" function in "),e("code",null,"node-serialize"),t(" module can be exploited to achieve arbitrary code execution by passing a serialized JavaScript Object with an Immediately invoked function expression (IIFE)")]),e("li",null,[t("💡 "),e("code",null,"JSON.parse"),t(" is a safer way to deserialize data")])])],-1);function I(u,a,o,r,s,n){return h(),b(r.InjectedLayout,g($(r._frontmatterToProps(r.frontmatter,62))),{default:y(()=>[k,z]),_:1},16)}const F=v(S,[["render",I],["__file","/@slidev/slides/63.md"]]);export{F as default};
