import{L as H,M as A,N as D,O as P,P as j,I as V,Q as E,i as q,a as C,g as W,R as T,s as g,d as I,K as $,f as p,S as B,U as K,V as Q,W as U,X,Y as Z,c as z,j as F,p as G,h as S,m as J,q as x,n as N,r as ee,Z as re,_ as te,v as ae,a0 as se}from"./runtime.BnF_BI9D.js";import{r as ne}from"./svelte-head.CtI-zcGH.js";import{b as ie}from"./disclose-version.BAsdFCBQ.js";const ue=new Set,L=new Set;function y(e){var O;var r=this,s=r.ownerDocument,a=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],t=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(t=u[c]||e.target,t!==r){H(e,"currentTarget",{configurable:!0,get(){return t||s}});var w=j,o=V;A(null),D(null);try{for(var n,i=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+a];if(_!==void 0&&!t.disabled)if(P(_)){var[Y,...k]=_;Y.apply(t,[e,...k])}else _.call(t,e)}catch(v){n?i.push(v):n=v}if(e.cancelBubble||f===r||f===null)break;t=f}if(n){for(let v of i)queueMicrotask(()=>{throw v});throw n}}finally{e.__root=r,delete e.currentTarget,A(w),D(o)}}}const oe=["touchstart","touchmove"];function fe(e){return oe.includes(e)}function he(e,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function ce(e,r){return M(e,r)}function pe(e,r){E(),r.intro=r.intro??!1;const s=r.target,a=S,u=p;try{for(var t=q(s);t&&(t.nodeType!==8||t.data!==C);)t=W(t);if(!t)throw T;g(!0),I(t),$();const c=M(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==B)throw K(),T;return g(!1),c}catch(c){if(c===T)return r.recover===!1&&Q(),E(),U(s),g(!1),ce(e,r);throw c}finally{g(a),I(u),ne()}}const h=new Map;function M(e,{target:r,anchor:s,props:a={},events:u,context:t,intro:c=!0}){E();var b=new Set,d=o=>{for(var n=0;n<o.length;n++){var i=o[n];if(!b.has(i)){b.add(i);var f=fe(i);r.addEventListener(i,y,{passive:f});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:f}),h.set(i,1)):h.set(i,_+1)}}};d(X(ue)),L.add(d);var l=void 0,w=Z(()=>{var o=s??r.appendChild(z());return F(()=>{if(t){G({});var n=x;n.c=t}u&&(a.$$events=u),S&&ie(o,null),l=e(o,a)||{},S&&(V.nodes_end=p),t&&J()}),()=>{var f;for(var n of b){r.removeEventListener(n,y);var i=h.get(n);--i===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,i)}L.delete(d),R.delete(l),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,w),l}let R=new WeakMap;function ve(e){const r=R.get(e);r&&r()}function de(e,r,s){if(e==null)return r(void 0),N;const a=ee(()=>e.subscribe(r,s));return a.unsubscribe?()=>a.unsubscribe():a}let m=!1;function ge(e,r,s){const a=s[r]??(s[r]={store:null,source:te(void 0),unsubscribe:N});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=N;else{var u=!0;a.unsubscribe=de(e,t=>{u?a.source.v=t:se(a.source,t)}),u=!1}return ae(a.source)}function ye(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function me(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}export{he as a,ge as b,me as c,pe as h,ce as m,ye as s,ve as u};
