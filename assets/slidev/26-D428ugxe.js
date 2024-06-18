import{I as f}from"./default-DAWz1zwl.js";import{_ as h,aE as c}from"../index-DbjAHYTp.js";import{p as u,u as i,f as v}from"./context-MHM20Ows.js";import{o as g,c as x,k as y,q as b,s as $,e,a6 as t}from"../modules/vue-qLwg7mlj.js";import"../modules/shiki-DvLM4DQx.js";const k={__name:"26",setup(d,{expose:o}){o(),u(c);const{$slidev:n,$nav:r,$clicksContext:a,$clicks:s,$page:m,$renderContext:_,$frontmatter:p}=i(),l={$slidev:n,$nav:r,$clicksContext:a,$clicks:s,$page:m,$renderContext:_,$frontmatter:p,InjectedLayout:f,get frontmatter(){return c},get useSlideContext(){return i},get _provideFrontmatter(){return u},get _frontmatterToProps(){return v}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},P=e("h1",null,"A03 Attack",-1),S=e("div",{class:"dense"},[e("ul",null,[e("li",null,[t("Run the server for step 3 ("),e("code",null,"cd src/a03-injection"),t(", "),e("code",null,"npm start"),t(")")]),e("li",null,[t("In Postman, run the query for "),e("code",null,"A03: Get customer by name"),t(". Observe the data for "),e("code",null,'name: "alice"'),t(" being returned")]),e("li",null,[t("Try to run the query for "),e("code",null,"A03: SQL Injection"),t(". Observe all the customers being returned")]),e("li",null,[t("The query param value "),e("code",null,"' OR '1'='1"),t(" takes advantage of the unsafe string concatenation to create this SQL query "),e("code",null,"SELECT * FROM customers WHERE name='' OR '1'='1'"),t(" which will return every record in the table")])])],-1);function T(d,o,n,r,a,s){return g(),x(r.InjectedLayout,b($(r._frontmatterToProps(r.frontmatter,25))),{default:y(()=>[P,S]),_:1},16)}const E=h(k,[["render",T],["__file","/@slidev/slides/26.md"]]);export{E as default};
