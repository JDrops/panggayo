var gn=Array.isArray,An=Array.from,xn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Rn=Object.prototype,Sn=Array.prototype,Bt=Object.getPrototypeOf;const Dn=()=>{};function kn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,M=8,nt=16,E=32,G=64,D=128,B=256,p=512,x=1024,j=2048,b=4096,Y=8192,$t=16384,vt=32768,On=65536,Kt=1<<18,pt=1<<19,ot=Symbol("$state");function ht(t){return t===this.v}function Gt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Gt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function zt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function Xt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Cn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Fn(t){return tn(rt(t))}function qn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function tn(t){return o!==null&&o.f&m&&(y===null?hn([t]):y.push(t)),t}function Ln(t,n){return o!==null&&lt()&&o.f&(m|nt)&&(y===null||!y.includes(t))&&Xt(),nn(t,n)}function nn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),yt(t,x),lt()&&a!==null&&a.f&p&&!(a.f&E)&&(_!==null&&_.includes(t)?(w(a,x),z(a)):A===null?dn([t]):A.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&x||!e&&u===a||(w(u,n),i&(p|D)&&(i&m?yt(u,j):z(u)))}}const Mn=1,jn=2,Yn=4,Hn=8,Un=16,Bn=1,Vn=2,rn="[",en="[!",sn="]",Et={},$n=Symbol();function wt(t){console.warn("hydration_mismatch")}let S=!1;function Kn(t){S=t}let d;function F(t){if(t===null)throw wt(),Et;return d=t}function Gn(){return F(k(d))}function Zn(t){if(S){if(k(d)!==null)throw wt(),Et;d=t}}function Wn(t=1){if(S){for(var n=t,r=d;n--;)r=k(r);d=r}}function zn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=k(n);n.remove(),n=e}}var it,ln,Tt,mt;function Jn(){if(it===void 0){it=window,ln=document;var t=Element.prototype,n=Node.prototype;Tt=at(n,"firstChild").get,mt=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return Tt.call(t)}function k(t){return mt.call(t)}function Qn(t,n){if(!S)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function Xn(t,n){if(!S){var r=Q(t);return r instanceof Comment&&r.data===""?k(r):r}return d}function tr(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=k(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),F(l),l}return F(e),e}function nr(t){t.textContent=""}function un(t){var n=m|x;a===null?n|=D:a.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:a};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function rr(t){const n=un(t);return n.equals=dt,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):C(e)}}}function At(t){var n,r=a;K(t.parent);try{gt(t),n=Lt(t)}finally{K(r)}return n}function xt(t){var n=At(t),r=(O||t.f&D)&&t.deps!==null?j:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){gt(t),L(t,0),w(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){a===null&&o===null&&zt(),o!==null&&o.f&D&&Wt(),st&&Zt()}function an(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&G)!==0,l=a,u={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{ft(!0),W(u),u.f|=$t}catch(c){throw C(u),c}finally{ft(i)}}else n!==null&&z(u);var T=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&pt)===0;if(!T&&!s&&e&&(l!==null&&an(u,l),o!==null&&o.f&m)){var g=o;(g.children??(g.children=[])).push(u)}return u}function er(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function sr(t){Rt();var n=a!==null&&(a.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:o})}else{var e=St(t);return e}}function lr(t){return Rt(),on(t)}function ur(t){const n=P(G,t,!0);return()=>{C(n)}}function St(t){return P(ct,t,!1)}function on(t){return P(M,t,!0)}function ar(t){return fn(t)}function fn(t,n=0){return P(M|nt|n,t,!0)}function or(t,n=!0){return P(M|E,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=st,e=o;_t(!0),$(null);try{n.call(null)}finally{_t(r),$(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Ot(t,n&&!r),kt(t),L(t,0),w(t,Y);var u=t.transitions;if(u!==null)for(const T of u)T.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];Nt(t,r,!0),cn(r,()=>{C(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Nt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&vt)!==0||(e.f&E)!==0;Nt(e,n,l?r:!1),e=s}}}function fr(t){bt(t,!0)}function bt(t,n){if(t.f&b){H(t)&&W(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&E)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,X=[];function Pt(){V=!1;const t=X.slice();X=[],Vt(t)}function _r(t){V||(V=!0,queueMicrotask(Pt)),X.push(t)}function vn(){V&&Pt()}const Ct=0,pn=1;let U=Ct,q=!1,I=!1,st=!1;function ft(t){I=t}function _t(t){st=t}let R=[],N=0;let o=null;function $(t){o=t}let a=null;function K(t){a=t}let y=null;function hn(t){y=t}let _=null,h=0,A=null;function dn(t){A=t}let Ft=0,O=!1,f=null;function qt(){return++Ft}function lt(){return!Z||f!==null&&f.l===null}function H(t){var u,i;var n=t.f;if(n&x)return!0;if(n&j){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&xt(l),e&&a!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function yn(t,n,r){throw t}function Lt(t){var ut;var n=_,r=h,e=A,s=o,l=O,u=y,i=f,T=t.f;_=null,h=0,A=null,o=T&(E|G)?null:t,O=!I&&(T&D)!==0,y=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return g}finally{_=n,h=r,A=e,o=s,O=l,y=u,f=i}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,j),n.f&(D|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function W(t){var n=t.f;if(!(n&Y)){w(t,p);var r=a;a=t;try{n&nt?_n(t):Ot(t),kt(t),Dt(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){yn(s)}finally{a=r}}}function Mt(){N>1e3&&(N=0,Jt()),N++}function jt(t){var n=t.length;if(n!==0){Mt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Yt(s,l),wn(l)}}finally{I=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|b))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=R;R=[],jt(t),q||(N=0)}function z(t){U===Ct&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,u=l&&(s&p)!==0;if(!u&&!(s&b))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function Ht(t){var n=U,r=R;try{Mt();const s=[];U=pn,R=s,q=!1,jt(r);var e=t==null?void 0:t();return vn(),(R.length>0||s.length>0)&&Ht(),N=0,e}finally{U=n,R=r}}async function cr(){await Promise.resolve(),Ht()}function vr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=At(t);return et(t),e}if(o!==null){y!==null&&y.includes(t)&&Qt();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&a!==null&&a.f&p&&!(a.f&E)&&A.includes(t)&&(w(a,x),z(a))}else if(r&&t.deps===null){var l=t,u=l.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(l))&&(u.deriveds??(u.deriveds=[])).push(l)}return r&&(l=t,H(l)&&xt(l)),t.v}function pr(t){const n=o;try{return o=null,t()}finally{o=n}}const mn=~(x|j|p);function w(t,n){t.f=t.f&mn|n}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function dr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const u=n.e;if(u!==null){var r=a,e=o;n.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];K(l.effect),$(l.reaction),St(l.fn)}}finally{K(r),$(e)}}f=n.p,n.m=!0}return t||{}}function yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Bt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ln as $,Qn as A,Zn as B,tr as C,Bt as D,vt as E,Ut as F,Wn as G,Kt as H,a as I,Vn as J,Gn as K,xn as L,$ as M,K as N,gn as O,o as P,Jn as Q,Et as R,sn as S,Bn as T,wt as U,In as V,nr as W,An as X,ur as Y,er as Z,qn as _,rn as a,Ln as a0,ot as a1,Rn as a2,Sn as a3,rt as a4,bn as a5,$n as a6,at as a7,Pn as a8,en as a9,zn as aa,fr as ab,ir as ac,St as ad,on as ae,_r as af,Nn as ag,On as ah,Yn as ai,dt as aj,E as ak,G as al,Mn as am,Z as an,jn as ao,Hn as ap,rr as aq,Un as ar,Ht as as,cr as at,Fn as au,Gt as av,fn as b,J as c,F as d,Cn as e,d as f,k as g,S as h,Q as i,or as j,C as k,Xn as l,dr as m,Dn as n,sr as o,hr as p,f as q,pr as r,Kn as s,Vt as t,lr as u,vr as v,kn as w,yr as x,un as y,ar as z};
