var x={exports:{}},n={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D;function et(){if(D)return n;D=1;var f=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),g=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),P=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,q={};function v(t,e,o){this.props=t,this.context=e,this.refs=q,this.updater=o||O}v.prototype.isReactComponent={},v.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},v.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L(){}L.prototype=v.prototype;function A(t,e,o){this.props=t,this.context=e,this.refs=q,this.updater=o||O}var $=A.prototype=new L;$.constructor=A,b($,v.prototype),$.isPureReactComponent=!0;var I=Array.isArray;function N(){}var c={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function j(t,e,o){var r=o.ref;return{$$typeof:f,type:t,key:e,ref:r!==void 0?r:null,props:o}}function G(t,e){return j(t.type,e,t.props)}function S(t){return typeof t=="object"&&t!==null&&t.$$typeof===f}function Q(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(o){return e[o]})}var U=/\/+/g;function H(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Q(""+t.key):e.toString(36)}function X(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(N,N):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function k(t,e,o,r,s){var u=typeof t;(u==="undefined"||u==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(u){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case f:case p:a=!0;break;case R:return a=t._init,k(a(t._payload),e,o,r,s)}}if(a)return s=s(t),a=r===""?"."+H(t,0):r,I(s)?(o="",a!=null&&(o=a.replace(U,"$&/")+"/"),k(s,e,o,"",function(tt){return tt})):s!=null&&(S(s)&&(s=G(s,o+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(U,"$&/")+"/")+a)),e.push(s)),1;a=0;var _=r===""?".":r+":";if(I(t))for(var l=0;l<t.length;l++)r=t[l],u=_+H(r,l),a+=k(r,e,o,u,s);else if(l=Z(t),typeof l=="function")for(t=l.call(t),l=0;!(r=t.next()).done;)r=r.value,u=_+H(r,l++),a+=k(r,e,o,u,s);else if(u==="object"){if(typeof t.then=="function")return k(X(t),e,o,r,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function w(t,e,o){if(t==null)return t;var r=[],s=0;return k(t,r,"","",function(u){return e.call(o,u,s++)}),r}function J(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(o){(t._status===0||t._status===-1)&&(t._status=1,t._result=o)},function(o){(t._status===0||t._status===-1)&&(t._status=2,t._result=o)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var z=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},F={map:w,forEach:function(t,e,o){w(t,function(){e.apply(this,arguments)},o)},count:function(t){var e=0;return w(t,function(){e++}),e},toArray:function(t){return w(t,function(e){return e})||[]},only:function(t){if(!S(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};return n.Activity=W,n.Children=F,n.Component=v,n.Fragment=y,n.Profiler=m,n.PureComponent=A,n.StrictMode=h,n.Suspense=M,n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,n.__COMPILER_RUNTIME={__proto__:null,c:function(t){return c.H.useMemoCache(t)}},n.cache=function(t){return function(){return t.apply(null,arguments)}},n.cacheSignal=function(){return null},n.cloneElement=function(t,e,o){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=b({},t.props),s=t.key;if(e!=null)for(u in e.key!==void 0&&(s=""+e.key),e)!Y.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(r[u]=e[u]);var u=arguments.length-2;if(u===1)r.children=o;else if(1<u){for(var a=Array(u),_=0;_<u;_++)a[_]=arguments[_+2];r.children=a}return j(t.type,s,r)},n.createContext=function(t){return t={$$typeof:g,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:d,_context:t},t},n.createElement=function(t,e,o){var r,s={},u=null;if(e!=null)for(r in e.key!==void 0&&(u=""+e.key),e)Y.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=o;else if(1<a){for(var _=Array(a),l=0;l<a;l++)_[l]=arguments[l+2];s.children=_}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return j(t,u,s)},n.createRef=function(){return{current:null}},n.forwardRef=function(t){return{$$typeof:C,render:t}},n.isValidElement=S,n.lazy=function(t){return{$$typeof:R,_payload:{_status:-1,_result:t},_init:J}},n.memo=function(t,e){return{$$typeof:T,type:t,compare:e===void 0?null:e}},n.startTransition=function(t){var e=c.T,o={};c.T=o;try{var r=t(),s=c.S;s!==null&&s(o,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(N,z)}catch(u){z(u)}finally{e!==null&&o.types!==null&&(e.types=o.types),c.T=e}},n.unstable_useCacheRefresh=function(){return c.H.useCacheRefresh()},n.use=function(t){return c.H.use(t)},n.useActionState=function(t,e,o){return c.H.useActionState(t,e,o)},n.useCallback=function(t,e){return c.H.useCallback(t,e)},n.useContext=function(t){return c.H.useContext(t)},n.useDebugValue=function(){},n.useDeferredValue=function(t,e){return c.H.useDeferredValue(t,e)},n.useEffect=function(t,e){return c.H.useEffect(t,e)},n.useEffectEvent=function(t){return c.H.useEffectEvent(t)},n.useId=function(){return c.H.useId()},n.useImperativeHandle=function(t,e,o){return c.H.useImperativeHandle(t,e,o)},n.useInsertionEffect=function(t,e){return c.H.useInsertionEffect(t,e)},n.useLayoutEffect=function(t,e){return c.H.useLayoutEffect(t,e)},n.useMemo=function(t,e){return c.H.useMemo(t,e)},n.useOptimistic=function(t,e){return c.H.useOptimistic(t,e)},n.useReducer=function(t,e,o){return c.H.useReducer(t,e,o)},n.useRef=function(t){return c.H.useRef(t)},n.useState=function(t){return c.H.useState(t)},n.useSyncExternalStore=function(t,e,o){return c.H.useSyncExternalStore(t,e,o)},n.useTransition=function(){return c.H.useTransition()},n.version="19.2.5",n}var V;function nt(){return V||(V=1,x.exports=et()),x.exports}var E=nt();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ot=f=>f.replace(/^([A-Z])|[\s-_]+(\w)/g,(p,y,h)=>h?h.toUpperCase():y.toLowerCase()),B=f=>{const p=ot(f);return p.charAt(0).toUpperCase()+p.slice(1)},K=(...f)=>f.filter((p,y,h)=>!!p&&p.trim()!==""&&h.indexOf(p)===y).join(" ").trim(),st=f=>{for(const p in f)if(p.startsWith("aria-")||p==="role"||p==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=E.forwardRef(({color:f="currentColor",size:p=24,strokeWidth:y=2,absoluteStrokeWidth:h,className:m="",children:d,iconNode:g,...C},M)=>E.createElement("svg",{ref:M,...ut,width:p,height:p,stroke:f,strokeWidth:h?Number(y)*24/Number(p):y,className:K("lucide",m),...!d&&!st(C)&&{"aria-hidden":"true"},...C},[...g.map(([T,R])=>E.createElement(T,R)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(f,p)=>{const y=E.forwardRef(({className:h,...m},d)=>E.createElement(ct,{ref:d,iconNode:p,className:K(`lucide-${rt(B(f))}`,`lucide-${f}`,h),...m}));return y.displayName=B(f),y};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Nt=i("arrow-right",at);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],jt=i("arrow-up",it);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],St=i("chevron-left",ft);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ht=i("chevron-right",pt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xt=i("clock",lt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Pt=i("coffee",yt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ot=i("download",ht);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],bt=i("heart",_t);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],qt=i("mail",dt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Lt=i("map-pin",vt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],It=i("menu",kt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Yt=i("phone",mt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ut=i("plus",Et);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],zt=i("quote",Ct);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Dt=i("shopping-bag",Rt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Vt=i("sparkles",wt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Bt=i("star",gt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Kt=i("sun",Mt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Wt=i("truck",Tt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],Zt=i("utensils",At);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gt=i("x",$t);export{Nt as A,St as C,Ot as D,bt as H,It as M,Yt as P,zt as Q,Vt as S,Wt as T,Zt as U,Gt as X,E as a,Lt as b,Dt as c,Bt as d,Ht as e,Pt as f,xt as g,jt as h,Ut as i,Kt as j,qt as k,nt as r};
