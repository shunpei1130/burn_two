import{n as x,a as I,P as p}from"./app-DFQoYtIo.js";import"./main-ByhLQQC-.js";import"./local-fonts-DMBg5KN0.js";const f=794,D=1123,u=f*p.width,v='"Shippori Mincho", serif';function _(t){return JSON.parse(JSON.stringify(t))}function c(t,e,d){return Math.min(d,Math.max(e,t))}function T(t){const e=(t-p.x)/p.width;return c(e,0,1)*f}function M(t){const e=(t-p.y)/p.height;return c(e,0,1)*D}function P(t){return c(t/p.width,0,1)*f}function k(t){return c(t/p.height,0,1)*D}function A(t){return t==="center"||t==="right"?t:"left"}function N(t){return t==="serif"?v:'"Noto Sans JP", sans-serif'}function H(t={},e={}){if((t==null?void 0:t.editorType)==="pretext"&&Array.isArray(t.pretextBoxes))return _(t.pretextBoxes);const d=x(t),s=I(t,e),i=d.map((n,o)=>({id:n.id||`image-${o+1}`,kind:"image",x:T(n.x),y:M(n.y),width:P(n.width),height:k(n.height),minWidth:140,minHeight:140,zIndex:o+1,data:{src:null,cropX:0,cropY:0,zoom:1}}));return[...s.map((n,o)=>({id:n.id||`text-${o+1}`,kind:n.kind==="title"?"title":"body",x:T(n.x),y:M(n.y),width:P(n.width),height:k(n.height),minWidth:n.kind==="title"?220:200,minHeight:n.kind==="title"?90:140,zIndex:i.length+o+1,data:{text:String(n.text||""),fontFamily:N(n.family),fontSize:Math.max(14,Math.round(u*n.fontSize)),fontWeight:n.weight||(n.kind==="title"?700:400),lineHeight:Math.max(16,Math.round(u*n.fontSize*n.lineHeight)),letterSpacing:0,padding:Math.max(8,Math.round(u*(n.padding||.012))),color:"#111111",align:A(n.align)}})),...i]}function W(t=[]){return{editorType:"pretext",pretextBoxes:_(t).map(e=>{var d,s,i,l,n,o,r,a,g,m,y,E,w;return e.kind==="image"?{id:e.id,kind:"image",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{src:((d=e.data)==null?void 0:d.src)||null,cropX:Number((s=e.data)==null?void 0:s.cropX)||0,cropY:Number((i=e.data)==null?void 0:i.cropY)||0,zoom:Math.max(1,Number((l=e.data)==null?void 0:l.zoom)||1)}}:{id:e.id,kind:e.kind==="title"?"title":"body",x:Math.round(e.x*1e3)/1e3,y:Math.round(e.y*1e3)/1e3,width:Math.round(e.width*1e3)/1e3,height:Math.round(e.height*1e3)/1e3,minWidth:e.minWidth,minHeight:e.minHeight,zIndex:e.zIndex,data:{text:String(((n=e.data)==null?void 0:n.text)||""),fontFamily:String(((o=e.data)==null?void 0:o.fontFamily)||N("sans")),fontSize:Number((r=e.data)==null?void 0:r.fontSize)||22,fontWeight:Number((a=e.data)==null?void 0:a.fontWeight)||400,lineHeight:Number((g=e.data)==null?void 0:g.lineHeight)||34,letterSpacing:Number((m=e.data)==null?void 0:m.letterSpacing)||0,padding:Number((y=e.data)==null?void 0:y.padding)||12,color:String(((E=e.data)==null?void 0:E.color)||"#111111"),align:A((w=e.data)==null?void 0:w.align)}}})}}const S="memories-pretext-embedded-overrides",z="#f8f4ee",h="#ffffff";function R(t){return`
html,
body,
#root {
  background: ${h} !important;
}

html,
body {
  margin: 0 !important;
  min-height: 100% !important;
}

body::before,
body::after {
  display: none !important;
}

.app-shell,
.app-shell--embedded,
.workspace,
.canvas-area,
.canvas-area--embedded,
.page-stage-shell,
.page-stage {
  background: ${h} !important;
  border: 0 !important;
  box-shadow: none !important;
}

.app-shell--embedded,
.canvas-area--embedded {
  min-height: 100dvh !important;
  height: 100dvh !important;
}

.canvas-area--embedded {
  padding-top: 0 !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
  place-items: center !important;
}

.page-stage-shell,
.page-stage,
.page-shadow,
.page {
  border-radius: 0 !important;
}

.app-shell--embedded .page-shadow,
.page-shadow {
  display: none !important;
  background: transparent !important;
  filter: none !important;
}

.app-shell--embedded .page,
.page {
  background: ${t} !important;
  box-shadow: none !important;
  outline: 0 !important;
}
`}function B(){return window.location.origin==="null"?"*":window.location.origin}function C(t){return window.location.origin==="null"?t==="null"||t==="":t===window.location.origin}function G(t,e={}){let d=H(e.customLayout,e.textValues),s=e.backgroundColor||z;const i=document.createElement("iframe");i.className="compose-pretext-iframe",i.src="./pretext-editor.html?embedded=1",i.title="Pretext editor",i.setAttribute("loading","eager"),i.setAttribute("allow","clipboard-read; clipboard-write"),i.setAttribute("allowtransparency","true"),t.replaceChildren(i);const l=()=>{const r=i.contentDocument;if(!r)return;const a=r.documentElement,g=r.body;if(!a||!g)return;i.style.setProperty("background",h,"important"),t.style.setProperty("background",h,"important"),a.style.setProperty("background",h,"important"),g.style.setProperty("background",h,"important"),a.style.setProperty("color-scheme","light","important"),g.style.setProperty("color-scheme","light","important");let m=r.getElementById(S);m||(m=r.createElement("style"),m.id=S,r.head.appendChild(m)),m.textContent=R(s)},n=()=>{var r;l(),(r=i.contentWindow)==null||r.postMessage({type:"memories:pretext:init",boxes:d},B())},o=r=>{if(!C(r.origin)||r.source!==i.contentWindow)return;const a=r.data;if(!(!a||typeof a!="object")){if(a.type==="memories:pretext:ready"){l(),n();return}a.type==="memories:pretext:change"&&Array.isArray(a.boxes)&&(d=a.boxes)}};return i.addEventListener("load",n),window.addEventListener("message",o),{unmount(){i.removeEventListener("load",n),window.removeEventListener("message",o),i.remove()},sendCommand(r){var a;(a=i.contentWindow)==null||a.postMessage({type:"memories:pretext:command",command:r},B())},getBoxes(){return d},getSerializedLayout(){return W(d)},setBackgroundColor(r){s=r||z,l()}}}export{G as mountComposePretextEditor};
