import{t as L,y as b,A as lt,d as q,as as qt,at as Ht,au as K,o as H,b as Y,e as _t,f as St,h as ft,a7 as Tt,F as Yt,g as Kt,ab as Zt,av as Xt,v as Qt,l as ut,i as Jt,P as Wt,S as ht,aw as te,J as ee,ax as se,n as ne,D as re}from"../modules/vue-qLwg7mlj.js";import{U as ie,a as jt,Y as bt,Q as Pt,A as Et,z as Mt,V as oe,Z as ae,_ as tt,$ as le,a0 as ue,a1 as he,a2 as ce,v as pt,a3 as de,a4 as fe,a5 as ct,a6 as kt,a7 as pe,O as ge}from"../index-DbjAHYTp.js";function me(t){var e;return{info:L(((e=ie(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const dt={};function fs(t){function e(s){return dt[s]??(dt[s]=me(s))}return{info:b({get(){return e(lt(t)).info.value},set(s){e(lt(t)).info.value=s}}),update:async(s,n)=>{const i=e(n??lt(t)),r=await i.update(s);return r&&(i.info.value=r),r}}}const ve=q({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t,{expose:e}){e();const s=t,{isPrintMode:n}=jt(),i=L(null),r=qt(i),a=L(null),o=b(()=>s.width??r.width.value),l=b(()=>s.width?s.width/bt.value:r.height.value),c=b(()=>Pt.value&&!n.value?+Pt.value:Math.min(o.value/Et.value,l.value/Mt.value)),v=b(()=>({height:`${Mt.value}px`,width:`${Et.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),g=b(()=>s.width?{width:`${s.width}px`,height:`${s.width/bt.value}px`}:{});s.isMain&&Ht(b(()=>`:root { --slidev-slide-scale: ${c.value}; }`)),K(oe,c),K(ae,a);const y={props:s,isPrintMode:n,container:i,containerSize:r,slideElement:a,width:o,height:l,scale:c,contentStyle:v,containerStyle:g};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),_e=["id"],ye=["id"];function xe(t,e,s,n,i,r){return H(),Y("div",{id:s.isMain?"slide-container":void 0,ref:"container",class:"slidev-slide-container",style:ft(n.containerStyle)},[_t("div",{id:s.isMain?"slide-content":void 0,ref:"slideElement",class:"slidev-slide-content",style:ft(n.contentStyle)},[St(t.$slots,"default",{},void 0,!0)],12,ye),St(t.$slots,"controls",{},void 0,!0)],12,_e)}const ps=tt(ve,[["render",xe],["__scopeId","data-v-03fb3d3c"],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/SlideContainer.vue"]]),we=q({__name:"SlideLoading",setup(t,{expose:e}){e();const s=L(!1);Tt(()=>{setTimeout(()=>{s.value=!0},200)});const n={timeout:s};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),Se={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},be=_t("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),Pe=_t("div",null,"Loading slide...",-1);function Ee(t,e,s,n,i,r){return H(),Y("div",Se,[n.timeout?(H(),Y(Yt,{key:0},[be,Pe],64)):Kt("v-if",!0)])}const Me=tt(we,[["render",Ee],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/SlideLoading.vue"]]),gs={render:()=>[]},ms={render:()=>[]},ke={render:()=>[]},Le={render:()=>[]},Ce=q({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t,{expose:e}){e();const s=t,n=b(()=>{var l,c;return((c=(l=s.route.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter.zoom)??1});K(le,s.route),K(ue,L(s.route.no)),K(he,L(s.renderContext)),K(ce,Zt(s,"clicksContext")),K(de,n);const i=b(()=>n.value===1?void 0:{width:`${100/n.value}%`,height:`${100/n.value}%`,transformOrigin:"top left",transform:`scale(${n.value})`}),r=b(()=>({...i.value,"user-select":pt.selectable?void 0:"none"})),a=b(()=>s.route&&Xt({loader:async()=>{const l=await s.route.component();return q({setup(c,{attrs:v}){return Tt(()=>{var g,y;return(y=(g=s.clicksContext)==null?void 0:g.onMounted)==null?void 0:y.call(g)}),()=>Qt(l.default,v)}})},delay:300,loadingComponent:Me})),o={props:s,zoom:n,zoomStyle:i,style:r,SlideComponent:a,get getSlideClass(){return fe},get SlideBottom(){return Le},get SlideTop(){return ke}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),De=["data-slidev-no"];function $e(t,e,s,n,i,r){return H(),Y("div",{"data-slidev-no":n.props.route.no,class:Jt(n.getSlideClass(s.route,["slide","presenter"].includes(n.props.renderContext)?"":"disable-view-transition")),style:ft(n.style)},[ut(n.SlideBottom),ut(n.SlideComponent),ut(n.SlideTop)],14,De)}const vs=tt(Ce,[["render",$e],["__scopeId","data-v-026ee359"],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/SlideWrapper.vue"]]);var Ne=Object.defineProperty,Lt=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?Ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,gt=(t,e)=>{for(var s in e||(e={}))Ie.call(e,s)&&Ct(t,s,e[s]);if(Lt)for(var s of Lt(e))Ae.call(e,s)&&Ct(t,s,e[s]);return t},Fe=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],i=n.length;s<i;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}});function Dt(t,e,s,n=i=>i){return t*n(.5-e*(.5-s))}function Te(t){return[-t[0],-t[1]]}function k(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Ke(t,e){return[t[0]/e,t[1]/e]}function U(t){return[t[1],-t[0]]}function $t(t,e){return t[0]*e[0]+t[1]*e[1]}function je(t,e){return t[0]===e[0]&&t[1]===e[1]}function Oe(t){return Math.hypot(t[0],t[1])}function ze(t){return t[0]*t[0]+t[1]*t[1]}function Nt(t,e){return ze(P(t,e))}function Ot(t){return Ke(t,Oe(t))}function Re(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function V(t,e,s){let n=Math.sin(s),i=Math.cos(s),r=t[0]-e[0],a=t[1]-e[1],o=r*i-a*n,l=r*n+a*i;return[o+e[0],l+e[1]]}function mt(t,e,s){return k(t,M(P(e,t),s))}function It(t,e,s){return k(t,M(e,s))}var{min:O,PI:Be}=Math,At=.275,G=Be+1e-4;function Ue(t,e={}){let{size:s=16,smoothing:n=.5,thinning:i=.5,simulatePressure:r=!0,easing:a=h=>h,start:o={},end:l={},last:c=!1}=e,{cap:v=!0,easing:g=h=>h*(2-h)}=o,{cap:y=!0,easing:p=h=>--h*h*h+1}=l;if(t.length===0||s<=0)return[];let f=t[t.length-1].runningLength,d=o.taper===!1?0:o.taper===!0?Math.max(s,f):o.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,f):l.taper,j=Math.pow(s*n,2),D=[],u=[],x=t.slice(0,10).reduce((h,S)=>{let m=S.pressure;if(r){let _=O(1,S.distance/s),it=O(1,1-_);m=O(1,h+(it-h)*(_*At))}return(h+m)/2},t[0].pressure),w=Dt(s,i,t[t.length-1].pressure,a),et,st=t[0].vector,R=t[0].point,Z=R,A=R,F=Z,nt=!1;for(let h=0;h<t.length;h++){let{pressure:S}=t[h],{point:m,vector:_,distance:it,runningLength:B}=t[h];if(h<t.length-1&&f-B<3)continue;if(i){if(r){let I=O(1,it/s),at=O(1,1-I);S=O(1,x+(at-x)*(I*At))}w=Dt(s,i,S,a)}else w=s/2;et===void 0&&(et=w);let Ut=B<d?g(B/d):1,Vt=f-B<E?p((f-B)/E):1;w=Math.max(.01,w*Math.min(Ut,Vt));let yt=(h<t.length-1?t[h+1]:t[h]).vector,ot=h<t.length-1?$t(_,yt):1,Gt=$t(_,st)<0&&!nt,xt=ot!==null&&ot<0;if(Gt||xt){let I=M(U(st),w);for(let at=1/13,Q=0;Q<=1;Q+=at)A=V(P(m,I),m,G*Q),D.push(A),F=V(k(m,I),m,G*-Q),u.push(F);R=A,Z=F,xt&&(nt=!0);continue}if(nt=!1,h===t.length-1){let I=M(U(_),w);D.push(P(m,I)),u.push(k(m,I));continue}let wt=M(U(mt(yt,_,ot)),w);A=P(m,wt),(h<=1||Nt(R,A)>j)&&(D.push(A),R=A),F=k(m,wt),(h<=1||Nt(Z,F)>j)&&(u.push(F),Z=F),x=S,st=_}let $=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):k(t[0].point,[1,1]),rt=[],X=[];if(t.length===1){if(!(d||E)||c){let h=It($,Ot(U(P($,N))),-(et||w)),S=[];for(let m=1/13,_=m;_<=1;_+=m)S.push(V(h,$,G*2*_));return S}}else{if(!(d||E&&t.length===1))if(v)for(let S=1/13,m=S;m<=1;m+=S){let _=V(u[0],$,G*m);rt.push(_)}else{let S=P(D[0],u[0]),m=M(S,.5),_=M(S,.51);rt.push(P($,m),P($,_),k($,_),k($,m))}let h=U(Te(t[t.length-1].vector));if(E||d&&t.length===1)X.push(N);else if(y){let S=It(N,h,w);for(let m=1/29,_=m;_<1;_+=m)X.push(V(S,N,G*3*_))}else X.push(k(N,M(h,w)),k(N,M(h,w*.99)),P(N,M(h,w*.99)),P(N,M(h,w)))}return D.concat(X,u.reverse(),rt)}function Ve(t,e={}){var s;let{streamline:n=.5,size:i=16,last:r=!1}=e;if(t.length===0)return[];let a=.15+(1-n)*.85,o=Array.isArray(t[0])?t:t.map(({x:p,y:f,pressure:d=.5})=>[p,f,d]);if(o.length===2){let p=o[1];o=o.slice(0,-1);for(let f=1;f<5;f++)o.push(mt(o[0],p,f/4))}o.length===1&&(o=[...o,[...k(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],c=!1,v=0,g=l[0],y=o.length-1;for(let p=1;p<o.length;p++){let f=r&&p===y?o[p].slice(0,2):mt(g.point,o[p],a);if(je(g.point,f))continue;let d=Re(f,g.point);if(v+=d,p<y&&!c){if(v<i)continue;c=!0}g={point:f,pressure:o[p][2]>=0?o[p][2]:.5,vector:Ot(P(g.point,f)),distance:d,runningLength:v},l.push(g)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Ge(t,e={}){return Ue(Ve(t,e),e)}function J(t,e){return t-e}function qe(t){return t<0?-1:1}function W(t){return[Math.abs(t),qe(t)]}function zt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var He=2,C=He,z=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const i=this.drauu.el,r=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*r,y:(t.pageY-o.top+a.y)*r,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((n=i.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*r,y:l.y*r,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?gt(gt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),n.setAttribute("stroke",i.color),n.setAttribute("stroke-width",i.size.toString()),n.setAttribute("stroke-linecap","round"),i.dasharray&&n.setAttribute("stroke-dasharray",i.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(C))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Ye=class Rt extends z{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Rt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=Ge(e,gt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const i=n.reduce((r,[a,o],l,c)=>{const[v,g]=c[(l+1)%c.length];return r.push(a,o,(a+v)/2,(o+g)/2),r},["M",...n[0],"Q"]);return i.push("Z"),i.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},Ze=class extends z{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=W(t.x-this.start.x),[n,i]=W(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(J),[o,l]=[this.start.y,this.start.y+n*i].sort(J);this.attr("cx",(r+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-r)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Bt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(i),s.appendChild(n),s}var Xe=class extends z{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=zt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Bt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let r=n/i;r=Math.round(r),Math.abs(r)<=1?(e=this.start.x+i*r,s=this.start.y+i):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Qe=class extends z{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=W(t.x-this.start.x),[n,i]=W(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(e,n);e=r,n=r}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[r,a]=[this.start.x,this.start.x+e*s].sort(J),[o,l]=[this.start.y,this.start.y+n*i].sort(J);this.attr("x",r),this.attr("y",o),this.attr("width",a-r),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Je(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function We(t,e,s){let n=e.x,i=e.y,r=s.x-n,a=s.y-i;if(r!==0||a!==0){const o=((t.x-n)*r+(t.y-i)*a)/(r*r+a*a);o>1?(n=s.x,i=s.y):o>0&&(n+=r*o,i+=a*o)}return r=t.x-n,a=t.y-i,r*r+a*a}function ts(t,e){let s=t[0];const n=[s];let i;for(let r=1,a=t.length;r<a;r++)i=t[r],Je(i,s)>e&&(n.push(i),s=i);return s!==i&&i&&n.push(i),n}function vt(t,e,s,n,i){let r=n,a=0;for(let o=e+1;o<s;o++){const l=We(t[o],t[e],t[s]);l>r&&(a=o,r=l)}r>n&&(a-e>1&&vt(t,e,a,n,i),i.push(t[a]),s-a>1&&vt(t,a,s,n,i))}function es(t,e){const s=t.length-1,n=[t[0]];return vt(t,0,s,e,n),n.push(t[s]),n}function Ft(t,e,s=!1){if(t.length<=2)return t;const n=e!==void 0?e*e:1;return t=s?t:ts(t,n),t=es(t,n),t}var ss=class T extends z{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=zt();const s=Bt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ft(this.points,1,!0),this.count=0),this.attr("d",T.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",T.toSvgData(Ft(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const n=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(n**2+i**2),angle:Math.atan2(i,n)}}static controlPoint(e,s,n,i){const r=s||e,a=n||e,o=.2,l=T.line(r,a),c=l.angle+(i?Math.PI:0),v=l.length*o,g=e.x+Math.cos(c)*v,y=e.y+Math.sin(c)*v;return{x:g,y}}static bezierCommand(e,s,n){const i=T.controlPoint(n[s-1],n[s-2],e),r=T.controlPoint(e,n[s-1],n[s+1],!0);return`C ${i.x.toFixed(C)},${i.y.toFixed(C)} ${r.x.toFixed(C)},${r.y.toFixed(C)} ${e.x.toFixed(C)},${e.y.toFixed(C)}`}static toSvgData(e){return e.reduce((s,n,i,r)=>i===0?`M ${n.x.toFixed(C)},${n.y.toFixed(C)}`:`${s} ${T.bezierCommand(n,i,r)}`,"")}},ns=class extends z{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const a=r.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=r.getPointAtLength(a*o/this.pathSubFactor),c=r.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:c.x,y1:l.y,y2:c.y,segment:o,element:n||r})}}else r.children&&e(r.children,r)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,i=e.x1,r=e.x2,a=t.y1,o=t.y2,l=e.y1,c=e.y2,v=(s-n)*(l-c)-(a-o)*(i-r),g=(s*o-a*n)*(i-r)-(s-n)*(i*c-l*r),y=(s*o-a*n)*(l-c)-(a-o)*(i*c-l*r),p=(f,d,E)=>f>=d&&f<=E?!0:f>=E&&f<=d;if(v===0)return!1;{const f={x:g/v,y:y/v};return p(f.x,s,n)&&p(f.y,a,o)&&p(f.x,i,r)&&p(f.y,l,c)}}};function rs(t){return{draw:new ss(t),stylus:new Ye(t),line:new Xe(t),rectangle:new Qe(t),ellipse:new Ze(t),eraseLine:new ns(t)}}var is=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Fe(),this._originalPointerId=null,this._models=rs(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),r=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",r,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",r),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function os(t){return new is(t)}const as=Wt(()=>{const{currentSlideNo:t,isPresenter:e}=jt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ht("slidev-drawing-enabled",!1),i=ht("slidev-drawing-pinned",!1),r=te(ht("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=L(!1),o=L(!1),l=L(!1),c=L(!1),v=L("stylus"),g=b(()=>pt.drawings.syncAll||e.value);let y=!1;const p=b({get(){return v.value},set(u){v.value=u,u==="arrow"?(d.mode="line",r.arrowEnd=!0):(d.mode=u,r.arrowEnd=!1)}}),f=ee({brush:r,acceptsInputTypes:b(()=>n.value&&(!pt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),d=se(os(f));function E(){d.clear(),g.value&&kt(t.value,"")}function j(){var u;l.value=d.canRedo(),o.value=d.canUndo(),c.value=!!((u=d.el)!=null&&u.children.length)}function D(u){y=!0;const x=ct[u||t.value];x!=null?d.load(x):d.clear(),j(),y=!1}return d.on("changed",()=>{if(j(),!y){const u=d.dump(),x=t.value;(ct[x]||"")!==u&&g.value&&kt(x,d.dump())}}),pe(u=>{y=!0,u[t.value]!=null&&d.load(u[t.value]||""),y=!1,j()}),ne(()=>{re(t,()=>{d.mounted&&D()},{immediate:!0})}),d.on("start",()=>a.value=!0),d.on("end",()=>a.value=!1),window.addEventListener("keydown",u=>{if(!n.value||ge.value)return;const x=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let w=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?d.redo():d.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&x?p.value="line":u.code==="KeyA"&&x?p.value="arrow":u.code==="KeyS"&&x?p.value="stylus":u.code==="KeyR"&&x?p.value="rectangle":u.code==="KeyE"&&x?p.value="ellipse":u.code==="KeyC"&&x?E():u.code.startsWith("Digit")&&x&&+u.code[5]<=s.length?r.color=s[+u.code[5]-1]:w=!1,w&&(u.preventDefault(),u.stopPropagation())},!1),{brush:r,brushColors:s,canClear:c,canRedo:l,canUndo:o,clear:E,drauu:d,drauuOptions:f,drawingEnabled:n,drawingMode:p,drawingPinned:i,drawingState:ct,isDrawing:a,loadCanvas:D}}),ls=q({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t,{expose:e}){e();const{drawingState:s}=as(),n={drawingState:s};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),us=["innerHTML"];function hs(t,e,s,n,i,r){return n.drawingState[s.page]?(H(),Y("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:n.drawingState[s.page]},null,8,us)):Kt("v-if",!0)}const _s=tt(ls,[["render",hs],["__file","/home/runner/work/owasp-top-ten-workshop/owasp-top-ten-workshop/node_modules/@slidev/client/internals/DrawingPreview.vue"]]);export{_s as D,ms as G,ps as S,vs as a,as as b,fs as c,gs as d,me as u};
