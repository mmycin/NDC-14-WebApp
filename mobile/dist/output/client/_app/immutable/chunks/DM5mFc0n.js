import{h as b,v as P,ab as O,aM as g,C as y,af as N,O as S,aA as R,ag as q,aP as D,a1 as B,j as C,a as F,aH as H,a3 as M,a4 as W,u as j,a5 as E,a7 as T,k as L,a8 as k,l as U,_ as Y}from"./CPz9NqMD.js";function K(e){b&&P(e)!==null&&O(e)}let A=!1;function Z(){A||(A=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var a;if(!e.defaultPrevented)for(const n of e.target.elements)(a=n.__on_r)==null||a.call(n)})},{capture:!0}))}function m(e){var a=N,n=S;g(null),y(null);try{return e()}finally{g(a),y(n)}}function Q(e,a,n,s=n){e.addEventListener(a,()=>m(n));const r=e.__on_r;r?e.__on_r=()=>{r(),s(!0)}:e.__on_r=()=>s(!0),Z()}const V=new Set,X=new Set;function z(e,a,n,s){function r(t){if(s.capture||G.call(a,t),!t.cancelBubble)return m(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{a.addEventListener(e,r,s)}):a.addEventListener(e,r,s),r}function $(e,a,n,s,r){var t={capture:s,passive:r},l=z(e,a,n,t);(a===document.body||a===window||a===document)&&R(()=>{a.removeEventListener(e,l,t)})}function G(e){var w;var a=this,n=a.ownerDocument,s=e.type,r=((w=e.composedPath)==null?void 0:w.call(e))||[],t=r[0]||e.target,l=0,_=e.__root;if(_){var f=r.indexOf(_);if(f!==-1&&(a===document||a===window)){e.__root=a;return}var d=r.indexOf(a);if(d===-1)return;f<=d&&(l=f)}if(t=r[l]||e.target,t!==a){D(e,"currentTarget",{configurable:!0,get(){return t||n}});var h=N,c=S;g(null),y(null);try{for(var i,o=[];t!==null;){var u=t.assignedSlot||t.parentNode||t.host||null;try{var v=t["__"+s];if(v!==void 0&&!t.disabled)if(B(v)){var[x,...I]=v;x.apply(t,[e,...I])}else v.call(t,e)}catch(p){i?o.push(p):i=p}if(e.cancelBubble||u===a||u===null)break;t=u}if(i){for(let p of o)queueMicrotask(()=>{throw p});throw i}}finally{e.__root=a,delete e.currentTarget,g(h),y(c)}}}function ee(e,a,n=!1){b&&F();var s=e,r=null,t=null,l=Y,_=n?H:0,f=!1;const d=(c,i=!0)=>{f=!0,h(i,c)},h=(c,i)=>{if(l===(l=c))return;let o=!1;if(b){const u=s.data===M;!!l===u&&(s=W(),j(s),E(!1),o=!0)}l?(r?T(r):i&&(r=L(()=>i(s))),t&&k(t,()=>{t=null})):(t?T(t):i&&(t=L(()=>i(s))),r&&k(r,()=>{r=null})),o&&E(!0)};C(()=>{f=!1,a(d),f||h(null,null)},_),b&&(s=U)}export{Z as a,V as b,X as c,$ as e,G as h,ee as i,Q as l,K as r};
