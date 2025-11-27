(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var _d={exports:{}},bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function BE(){if(h0)return bl;h0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var h in a)h!=="key"&&(l[h]=a[h])}else l=a;return a=l.ref,{$$typeof:s,type:i,key:c,ref:a!==void 0?a:null,props:l}}return bl.Fragment=e,bl.jsx=t,bl.jsxs=t,bl}var f0;function FE(){return f0||(f0=1,_d.exports=BE()),_d.exports}var vs=FE(),vd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function zE(){if(d0)return pt;d0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,ee,Me){this.props=N,this.context=ee,this.refs=T,this.updater=Me||y}M.prototype.isReactComponent={},M.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=M.prototype;function P(N,ee,Me){this.props=N,this.context=ee,this.refs=T,this.updater=Me||y}var D=P.prototype=new x;D.constructor=P,S(D,M.prototype),D.isPureReactComponent=!0;var w=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function U(N,ee,Me,Ee,J,_e){return Me=_e.ref,{$$typeof:s,type:N,key:ee,ref:Me!==void 0?Me:null,props:_e}}function G(N,ee){return U(N.type,ee,void 0,void 0,void 0,N.props)}function L(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function A(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Me){return ee[Me]})}var k=/\/+/g;function se(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):ee.toString(36)}function re(){}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(re,re):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function he(N,ee,Me,Ee,J){var _e=typeof N;(_e==="undefined"||_e==="boolean")&&(N=null);var Ae=!1;if(N===null)Ae=!0;else switch(_e){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(N.$$typeof){case s:case e:Ae=!0;break;case m:return Ae=N._init,he(Ae(N._payload),ee,Me,Ee,J)}}if(Ae)return J=J(N),Ae=Ee===""?"."+se(N,0):Ee,w(J)?(Me="",Ae!=null&&(Me=Ae.replace(k,"$&/")+"/"),he(J,ee,Me,"",function(ct){return ct})):J!=null&&(L(J)&&(J=G(J,Me+(J.key==null||N&&N.key===J.key?"":(""+J.key).replace(k,"$&/")+"/")+Ae)),ee.push(J)),1;Ae=0;var Le=Ee===""?".":Ee+":";if(w(N))for(var Ue=0;Ue<N.length;Ue++)Ee=N[Ue],_e=Le+se(Ee,Ue),Ae+=he(Ee,ee,Me,_e,J);else if(Ue=v(N),typeof Ue=="function")for(N=Ue.call(N),Ue=0;!(Ee=N.next()).done;)Ee=Ee.value,_e=Le+se(Ee,Ue++),Ae+=he(Ee,ee,Me,_e,J);else if(_e==="object"){if(typeof N.then=="function")return he(me(N),ee,Me,Ee,J);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function z(N,ee,Me){if(N==null)return N;var Ee=[],J=0;return he(N,Ee,"","",function(_e){return ee.call(Me,_e,J++)}),Ee}function j(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(Me){(N._status===0||N._status===-1)&&(N._status=1,N._result=Me)},function(Me){(N._status===0||N._status===-1)&&(N._status=2,N._result=Me)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Se(){}return pt.Children={map:z,forEach:function(N,ee,Me){z(N,function(){ee.apply(this,arguments)},Me)},count:function(N){var ee=0;return z(N,function(){ee++}),ee},toArray:function(N){return z(N,function(ee){return ee})||[]},only:function(N){if(!L(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=M,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=P,pt.StrictMode=i,pt.Suspense=f,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,pt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},pt.cache=function(N){return function(){return N.apply(null,arguments)}},pt.cloneElement=function(N,ee,Me){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ee=S({},N.props),J=N.key,_e=void 0;if(ee!=null)for(Ae in ee.ref!==void 0&&(_e=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!F.call(ee,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ee.ref===void 0||(Ee[Ae]=ee[Ae]);var Ae=arguments.length-2;if(Ae===1)Ee.children=Me;else if(1<Ae){for(var Le=Array(Ae),Ue=0;Ue<Ae;Ue++)Le[Ue]=arguments[Ue+2];Ee.children=Le}return U(N.type,J,void 0,void 0,_e,Ee)},pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},pt.createElement=function(N,ee,Me){var Ee,J={},_e=null;if(ee!=null)for(Ee in ee.key!==void 0&&(_e=""+ee.key),ee)F.call(ee,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(J[Ee]=ee[Ee]);var Ae=arguments.length-2;if(Ae===1)J.children=Me;else if(1<Ae){for(var Le=Array(Ae),Ue=0;Ue<Ae;Ue++)Le[Ue]=arguments[Ue+2];J.children=Le}if(N&&N.defaultProps)for(Ee in Ae=N.defaultProps,Ae)J[Ee]===void 0&&(J[Ee]=Ae[Ee]);return U(N,_e,void 0,void 0,null,J)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:h,render:N}},pt.isValidElement=L,pt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:j}},pt.memo=function(N,ee){return{$$typeof:d,type:N,compare:ee===void 0?null:ee}},pt.startTransition=function(N){var ee=O.T,Me={};O.T=Me;try{var Ee=N(),J=O.S;J!==null&&J(Me,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(Se,q)}catch(_e){q(_e)}finally{O.T=ee}},pt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},pt.use=function(N){return O.H.use(N)},pt.useActionState=function(N,ee,Me){return O.H.useActionState(N,ee,Me)},pt.useCallback=function(N,ee){return O.H.useCallback(N,ee)},pt.useContext=function(N){return O.H.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N,ee){return O.H.useDeferredValue(N,ee)},pt.useEffect=function(N,ee,Me){var Ee=O.H;if(typeof Me=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ee.useEffect(N,ee)},pt.useId=function(){return O.H.useId()},pt.useImperativeHandle=function(N,ee,Me){return O.H.useImperativeHandle(N,ee,Me)},pt.useInsertionEffect=function(N,ee){return O.H.useInsertionEffect(N,ee)},pt.useLayoutEffect=function(N,ee){return O.H.useLayoutEffect(N,ee)},pt.useMemo=function(N,ee){return O.H.useMemo(N,ee)},pt.useOptimistic=function(N,ee){return O.H.useOptimistic(N,ee)},pt.useReducer=function(N,ee,Me){return O.H.useReducer(N,ee,Me)},pt.useRef=function(N){return O.H.useRef(N)},pt.useState=function(N){return O.H.useState(N)},pt.useSyncExternalStore=function(N,ee,Me){return O.H.useSyncExternalStore(N,ee,Me)},pt.useTransition=function(){return O.H.useTransition()},pt.version="19.1.1",pt}var p0;function _m(){return p0||(p0=1,vd.exports=zE()),vd.exports}var yi=_m(),yd={exports:{}},Rl={},xd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function HE(){return m0||(m0=1,function(s){function e(z,j){var q=z.length;z.push(j);e:for(;0<q;){var Se=q-1>>>1,N=z[Se];if(0<a(N,j))z[Se]=j,z[q]=N,q=Se;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var j=z[0],q=z.pop();if(q!==j){z[0]=q;e:for(var Se=0,N=z.length,ee=N>>>1;Se<ee;){var Me=2*(Se+1)-1,Ee=z[Me],J=Me+1,_e=z[J];if(0>a(Ee,q))J<N&&0>a(_e,Ee)?(z[Se]=_e,z[J]=q,Se=J):(z[Se]=Ee,z[Me]=q,Se=Me);else if(J<N&&0>a(_e,q))z[Se]=_e,z[J]=q,Se=J;else break e}}return j}function a(z,j){var q=z.sortIndex-j.sortIndex;return q!==0?q:z.id-j.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],d=[],m=1,_=null,v=3,y=!1,S=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var j=t(d);j!==null;){if(j.callback===null)i(d);else if(j.startTime<=z)i(d),j.sortIndex=j.expirationTime,e(f,j);else break;j=t(d)}}function O(z){if(T=!1,w(z),!S)if(t(f)!==null)S=!0,F||(F=!0,se());else{var j=t(d);j!==null&&he(O,j.startTime-z)}}var F=!1,U=-1,G=5,L=-1;function A(){return M?!0:!(s.unstable_now()-L<G)}function k(){if(M=!1,F){var z=s.unstable_now();L=z;var j=!0;try{e:{S=!1,T&&(T=!1,P(U),U=-1),y=!0;var q=v;try{t:{for(w(z),_=t(f);_!==null&&!(_.expirationTime>z&&A());){var Se=_.callback;if(typeof Se=="function"){_.callback=null,v=_.priorityLevel;var N=Se(_.expirationTime<=z);if(z=s.unstable_now(),typeof N=="function"){_.callback=N,w(z),j=!0;break t}_===t(f)&&i(f),w(z)}else i(f);_=t(f)}if(_!==null)j=!0;else{var ee=t(d);ee!==null&&he(O,ee.startTime-z),j=!1}}break e}finally{_=null,v=q,y=!1}j=void 0}}finally{j?se():F=!1}}}var se;if(typeof D=="function")se=function(){D(k)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,me=re.port2;re.port1.onmessage=k,se=function(){me.postMessage(null)}}else se=function(){x(k,0)};function he(z,j){U=x(function(){z(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var q=v;v=j;try{return z()}finally{v=q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=v;v=z;try{return j()}finally{v=q}},s.unstable_scheduleCallback=function(z,j,q){var Se=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Se+q:Se):q=Se,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,z={id:m++,callback:j,priorityLevel:z,startTime:q,expirationTime:N,sortIndex:-1},q>Se?(z.sortIndex=q,e(d,z),t(f)===null&&z===t(d)&&(T?(P(U),U=-1):T=!0,he(O,q-Se))):(z.sortIndex=N,e(f,z),S||y||(S=!0,F||(F=!0,se()))),z},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(z){var j=v;return function(){var q=v;v=j;try{return z.apply(this,arguments)}finally{v=q}}}}(Md)),Md}var g0;function VE(){return g0||(g0=1,xd.exports=HE()),xd.exports}var Sd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function GE(){if(_0)return zn;_0=1;var s=_m();function e(f){var d="https://react.dev/errors/"+f;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)d+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+f+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(f,d,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:_==null?null:""+_,children:f,containerInfo:d,implementation:m}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,d){if(f==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,zn.createPortal=function(f,d){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(f,d,null,m)},zn.flushSync=function(f){var d=c.T,m=i.p;try{if(c.T=null,i.p=2,f)return f()}finally{c.T=d,i.p=m,i.d.f()}},zn.preconnect=function(f,d){typeof f=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(f,d))},zn.prefetchDNS=function(f){typeof f=="string"&&i.d.D(f)},zn.preinit=function(f,d){if(typeof f=="string"&&d&&typeof d.as=="string"){var m=d.as,_=h(m,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;m==="style"?i.d.S(f,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):m==="script"&&i.d.X(f,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(f,d){if(typeof f=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var m=h(d.as,d.crossOrigin);i.d.M(f,{crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(f)},zn.preload=function(f,d){if(typeof f=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var m=d.as,_=h(m,d.crossOrigin);i.d.L(f,m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(f,d){if(typeof f=="string")if(d){var m=h(d.as,d.crossOrigin);i.d.m(f,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:m,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(f)},zn.requestFormReset=function(f){i.d.r(f)},zn.unstable_batchedUpdates=function(f,d){return f(d)},zn.useFormState=function(f,d,m){return c.H.useFormState(f,d,m)},zn.useFormStatus=function(){return c.H.useHostTransitionStatus()},zn.version="19.1.1",zn}var v0;function kE(){if(v0)return Sd.exports;v0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=GE(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function WE(){if(y0)return Rl;y0=1;var s=VE(),e=_m(),t=kE();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(i(188))}function f(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return h(p),n;if(g===u)return h(p),r;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=p,u=g;else{for(var E=!1,R=p.child;R;){if(R===o){E=!0,o=p,u=g;break}if(R===u){E=!0,u=p,o=g;break}R=R.sibling}if(!E){for(R=g.child;R;){if(R===o){E=!0,o=g,u=p;break}if(R===u){E=!0,u=g,o=p;break}R=R.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function d(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=d(n),r!==null)return r;n=n.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var re=Symbol.for("react.client.reference");function me(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===re?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case O:return"Suspense";case F:return"SuspenseList";case L:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case D:return(n.displayName||"Context")+".Provider";case P:return(n._context.displayName||"Context")+".Consumer";case w:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return r=n.displayName||null,r!==null?r:me(n.type)||"Memo";case G:r=n._payload,n=n._init;try{return me(n(r))}catch{}}return null}var he=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Se=[],N=-1;function ee(n){return{current:n}}function Me(n){0>N||(n.current=Se[N],Se[N]=null,N--)}function Ee(n,r){N++,Se[N]=n.current,n.current=r}var J=ee(null),_e=ee(null),Ae=ee(null),Le=ee(null);function Ue(n,r){switch(Ee(Ae,r),Ee(_e,n),Ee(J,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?zv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=zv(r),n=Hv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Me(J),Ee(J,n)}function ct(){Me(J),Me(_e),Me(Ae)}function Ke(n){n.memoizedState!==null&&Ee(Le,n);var r=J.current,o=Hv(r,n.type);r!==o&&(Ee(_e,n),Ee(J,o))}function Ct(n){_e.current===n&&(Me(J),Me(_e)),Le.current===n&&(Me(Le),Ml._currentValue=q)}var Lt=Object.prototype.hasOwnProperty,ft=s.unstable_scheduleCallback,X=s.unstable_cancelCallback,sn=s.unstable_shouldYield,Mt=s.unstable_requestPaint,ht=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,dt=s.unstable_ImmediatePriority,Ye=s.unstable_UserBlockingPriority,rt=s.unstable_NormalPriority,$t=s.unstable_LowPriority,I=s.unstable_IdlePriority,b=s.log,ie=s.unstable_setDisableYieldValue,fe=null,pe=null;function ce(n){if(typeof b=="function"&&ie(n),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(fe,n)}catch{}}var Fe=Math.clz32?Math.clz32:We,De=Math.log,Ve=Math.LN2;function We(n){return n>>>=0,n===0?32:31-(De(n)/Ve|0)|0}var Te=256,Be=4194304;function Xe(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function W(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var R=u&134217727;return R!==0?(u=R&~g,u!==0?p=Xe(u):(E&=R,E!==0?p=Xe(E):o||(o=R&~n,o!==0&&(p=Xe(o))))):(R=u&~g,R!==0?p=Xe(R):E!==0?p=Xe(E):o||(o=u&~n,o!==0&&(p=Xe(o)))),p===0?0:r!==0&&r!==p&&(r&g)===0&&(g=p&-p,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:p}function te(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Re(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V(){var n=Te;return Te<<=1,(Te&4194048)===0&&(Te=256),n}function we(){var n=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),n}function ye(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Ne(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function be(n,r,o,u,p,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var R=n.entanglements,H=n.expirationTimes,ne=n.hiddenUpdates;for(o=E&~o;0<o;){var de=31-Fe(o),xe=1<<de;R[de]=0,H[de]=-1;var ae=ne[de];if(ae!==null)for(ne[de]=null,de=0;de<ae.length;de++){var oe=ae[de];oe!==null&&(oe.lane&=-536870913)}o&=~xe}u!==0&&ge(n,u,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~r))}function ge(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Fe(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Oe(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Fe(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}function qe(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function vt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function mt(){var n=j.p;return n!==0?n:(n=window.event,n===void 0?32:s0(n.type))}function hn(n,r){var o=j.p;try{return j.p=n,r()}finally{j.p=o}}var en=Math.random().toString(36).slice(2),an="__reactFiber$"+en,_n="__reactProps$"+en,In="__reactContainer$"+en,sr="__reactEvents$"+en,la="__reactListeners$"+en,ua="__reactHandles$"+en,Ai="__reactResources$"+en,bi="__reactMarker$"+en;function ki(n){delete n[an],delete n[_n],delete n[sr],delete n[la],delete n[ua]}function Ri(n){var r=n[an];if(r)return r;for(var o=n.parentNode;o;){if(r=o[In]||o[an]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Wv(n);n!==null;){if(o=n[an])return o;n=Wv(n)}return r}n=o,o=n.parentNode}return null}function Wi(n){if(n=n[an]||n[In]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function ar(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function wi(n){var r=n[Ai];return r||(r=n[Ai]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function on(n){n[bi]=!0}var ca=new Set,or={};function Ci(n,r){C(n,r),C(n+"Capture",r)}function C(n,r){for(or[n]=r,n=0;n<r.length;n++)ca.add(r[n])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},ue={};function Q(n){return Lt.call(ue,n)?!0:Lt.call(le,n)?!1:Z.test(n)?ue[n]=!0:(le[n]=!0,!1)}function Ce(n,r,o){if(Q(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function Ie(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function ze(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var He,at;function $e(n){if(He===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);He=r&&r[1]||"",at=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+n+at}var je=!1;function gt(n,r){if(!n||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(oe){var ae=oe}Reflect.construct(n,[],xe)}else{try{xe.call()}catch(oe){ae=oe}n.call(xe.prototype)}}else{try{throw Error()}catch(oe){ae=oe}(xe=n())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(oe){if(oe&&ae&&typeof oe.stack=="string")return[oe.stack,ae.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],R=g[1];if(E&&R){var H=E.split(`
`),ne=R.split(`
`);for(p=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;p<ne.length&&!ne[p].includes("DetermineComponentFrameRoot");)p++;if(u===H.length||p===ne.length)for(u=H.length-1,p=ne.length-1;1<=u&&0<=p&&H[u]!==ne[p];)p--;for(;1<=u&&0<=p;u--,p--)if(H[u]!==ne[p]){if(u!==1||p!==1)do if(u--,p--,0>p||H[u]!==ne[p]){var de=`
`+H[u].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=u&&0<=p);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?$e(o):""}function It(n){switch(n.tag){case 26:case 27:case 5:return $e(n.type);case 16:return $e("Lazy");case 13:return $e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return gt(n.type,!1);case 11:return gt(n.type.render,!1);case 1:return gt(n.type,!0);case 31:return $e("Activity");default:return""}}function tn(n){try{var r="";do r+=It(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function St(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Bt(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Je(n){var r=Bt(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Gt(n){n._valueTracker||(n._valueTracker=Je(n))}function Rt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Bt(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function En(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Vr=/[\n"\\]/g;function Qt(n){return n.replace(Vr,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function lr(n,r,o,u,p,g,E,R){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+St(r)):n.value!==""+St(r)&&(n.value=""+St(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Bn(n,E,St(r)):o!=null?Bn(n,E,St(o)):u!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?n.name=""+St(R):n.removeAttribute("name")}function jt(n,r,o,u,p,g,E,R){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null))return;o=o!=null?""+St(o):"",r=r!=null?""+St(r):o,R||r===n.value||(n.value=r),n.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=R?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Bn(n,r,o){r==="number"&&En(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function vn(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+St(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Tn(n,r,o){if(r!=null&&(r=""+St(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+St(o):""}function Un(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(he(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=St(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Xi(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ur=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zm(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||ur.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Hm(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&zm(n,p,u)}else for(var g in r)r.hasOwnProperty(g)&&zm(n,g,r[g])}function mh(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),IM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ou(n){return IM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var gh=null;function _h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ha=null,fa=null;function Vm(n){var r=Wi(n);if(r&&(n=r.stateNode)){var o=n[_n]||null;e:switch(n=r.stateNode,r.type){case"input":if(lr(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Qt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=u[_n]||null;if(!p)throw Error(i(90));lr(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&Rt(u)}break e;case"textarea":Tn(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&vn(n,!!o.multiple,r,!1)}}}var vh=!1;function Gm(n,r,o){if(vh)return n(r,o);vh=!0;try{var u=n(r);return u}finally{if(vh=!1,(ha!==null||fa!==null)&&(Yu(),ha&&(r=ha,n=fa,fa=ha=null,Vm(r),n)))for(r=0;r<n.length;r++)Vm(n[r])}}function Po(n,r){var o=n.stateNode;if(o===null)return null;var u=o[_n]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=!1;if(cr)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{yh=!1}var Gr=null,xh=null,lu=null;function km(){if(lu)return lu;var n,r=xh,o=r.length,u,p="value"in Gr?Gr.value:Gr.textContent,g=p.length;for(n=0;n<o&&r[n]===p[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===p[g-u];u++);return lu=p.slice(n,1<u?1-u:void 0)}function uu(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function cu(){return!0}function Wm(){return!1}function Zn(n){function r(o,u,p,g,E){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var R in n)n.hasOwnProperty(R)&&(o=n[R],this[R]=o?o(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?cu:Wm,this.isPropagationStopped=Wm,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=cu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=cu)},persist:function(){},isPersistent:cu}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Zn(bs),Io=m({},bs,{view:0,detail:0}),BM=Zn(Io),Mh,Sh,Bo,fu=m({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bo&&(Bo&&n.type==="mousemove"?(Mh=n.screenX-Bo.screenX,Sh=n.screenY-Bo.screenY):Sh=Mh=0,Bo=n),Mh)},movementY:function(n){return"movementY"in n?n.movementY:Sh}}),Xm=Zn(fu),FM=m({},fu,{dataTransfer:0}),zM=Zn(FM),HM=m({},Io,{relatedTarget:0}),Eh=Zn(HM),VM=m({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=Zn(VM),kM=m({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),WM=Zn(kM),XM=m({},bs,{data:0}),Ym=Zn(XM),YM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZM(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=jM[n])?!!r[n]:!1}function Th(){return ZM}var KM=m({},Io,{key:function(n){if(n.key){var r=YM[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=uu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(n){return n.type==="keypress"?uu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?uu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),QM=Zn(KM),JM=m({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=Zn(JM),$M=m({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),eS=Zn($M),tS=m({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Zn(tS),iS=m({},fu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Zn(iS),sS=m({},bs,{newState:0,oldState:0}),aS=Zn(sS),oS=[9,13,27,32],Ah=cr&&"CompositionEvent"in window,Fo=null;cr&&"documentMode"in document&&(Fo=document.documentMode);var lS=cr&&"TextEvent"in window&&!Fo,jm=cr&&(!Ah||Fo&&8<Fo&&11>=Fo),Zm=" ",Km=!1;function Qm(n,r){switch(n){case"keyup":return oS.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function uS(n,r){switch(n){case"compositionend":return Jm(r);case"keypress":return r.which!==32?null:(Km=!0,Zm);case"textInput":return n=r.data,n===Zm&&Km?null:n;default:return null}}function cS(n,r){if(da)return n==="compositionend"||!Ah&&Qm(n,r)?(n=km(),lu=xh=Gr=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jm&&r.locale!=="ko"?null:r.data;default:return null}}var hS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $m(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!hS[n.type]:r==="textarea"}function eg(n,r,o,u){ha?fa?fa.push(u):fa=[u]:ha=u,r=Ju(r,"onChange"),0<r.length&&(o=new hu("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var zo=null,Ho=null;function fS(n){Pv(n,0)}function du(n){var r=ar(n);if(Rt(r))return n}function tg(n,r){if(n==="change")return r}var ng=!1;if(cr){var bh;if(cr){var Rh="oninput"in document;if(!Rh){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),Rh=typeof ig.oninput=="function"}bh=Rh}else bh=!1;ng=bh&&(!document.documentMode||9<document.documentMode)}function rg(){zo&&(zo.detachEvent("onpropertychange",sg),Ho=zo=null)}function sg(n){if(n.propertyName==="value"&&du(Ho)){var r=[];eg(r,Ho,n,_h(n)),Gm(fS,r)}}function dS(n,r,o){n==="focusin"?(rg(),zo=r,Ho=o,zo.attachEvent("onpropertychange",sg)):n==="focusout"&&rg()}function pS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return du(Ho)}function mS(n,r){if(n==="click")return du(r)}function gS(n,r){if(n==="input"||n==="change")return du(r)}function _S(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ei=typeof Object.is=="function"?Object.is:_S;function Vo(n,r){if(ei(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Lt.call(r,p)||!ei(n[p],r[p]))return!1}return!0}function ag(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function og(n,r){var o=ag(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ag(o)}}function lg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?lg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ug(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=En(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=En(n.document)}return r}function wh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var vS=cr&&"documentMode"in document&&11>=document.documentMode,pa=null,Ch=null,Go=null,Lh=!1;function cg(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Lh||pa==null||pa!==En(u)||(u=pa,"selectionStart"in u&&wh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Go&&Vo(Go,u)||(Go=u,u=Ju(Ch,"onSelect"),0<u.length&&(r=new hu("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=pa)))}function Rs(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var ma={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Dh={},hg={};cr&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function ws(n){if(Dh[n])return Dh[n];if(!ma[n])return n;var r=ma[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in hg)return Dh[n]=r[o];return n}var fg=ws("animationend"),dg=ws("animationiteration"),pg=ws("animationstart"),yS=ws("transitionrun"),xS=ws("transitionstart"),MS=ws("transitioncancel"),mg=ws("transitionend"),gg=new Map,Uh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uh.push("scrollEnd");function Li(n,r){gg.set(n,r),Ci(r,[n])}var _g=new WeakMap;function ci(n,r){if(typeof n=="object"&&n!==null){var o=_g.get(n);return o!==void 0?o:(r={value:n,source:r,stack:tn(r)},_g.set(n,r),r)}return{value:n,source:r,stack:tn(r)}}var hi=[],ga=0,Nh=0;function pu(){for(var n=ga,r=Nh=ga=0;r<n;){var o=hi[r];hi[r++]=null;var u=hi[r];hi[r++]=null;var p=hi[r];hi[r++]=null;var g=hi[r];if(hi[r++]=null,u!==null&&p!==null){var E=u.pending;E===null?p.next=p:(p.next=E.next,E.next=p),u.pending=p}g!==0&&vg(o,p,g)}}function mu(n,r,o,u){hi[ga++]=n,hi[ga++]=r,hi[ga++]=o,hi[ga++]=u,Nh|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Ph(n,r,o,u){return mu(n,r,o,u),gu(n)}function _a(n,r){return mu(n,null,null,r),gu(n)}function vg(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&r!==null&&(p=31-Fe(o),n=g.hiddenUpdates,u=n[p],u===null?n[p]=[r]:u.push(r),r.lane=o|536870912),g):null}function gu(n){if(50<dl)throw dl=0,Vf=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var va={};function SS(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,r,o,u){return new SS(n,r,o,u)}function Oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hr(n,r){var o=n.alternate;return o===null?(o=ti(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yg(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function _u(n,r,o,u,p,g){var E=0;if(u=n,typeof n=="function")Oh(n)&&(E=1);else if(typeof n=="string")E=TE(n,o,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case L:return n=ti(31,o,r,p),n.elementType=L,n.lanes=g,n;case S:return Cs(o.children,p,g,r);case T:E=8,p|=24;break;case M:return n=ti(12,o,r,p|2),n.elementType=M,n.lanes=g,n;case O:return n=ti(13,o,r,p),n.elementType=O,n.lanes=g,n;case F:return n=ti(19,o,r,p),n.elementType=F,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case D:E=10;break e;case P:E=9;break e;case w:E=11;break e;case U:E=14;break e;case G:E=16,u=null;break e}E=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=ti(E,o,r,p),r.elementType=n,r.type=u,r.lanes=g,r}function Cs(n,r,o,u){return n=ti(7,n,u,r),n.lanes=o,n}function Ih(n,r,o){return n=ti(6,n,null,r),n.lanes=o,n}function Bh(n,r,o){return r=ti(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ya=[],xa=0,vu=null,yu=0,fi=[],di=0,Ls=null,fr=1,dr="";function Ds(n,r){ya[xa++]=yu,ya[xa++]=vu,vu=n,yu=r}function xg(n,r,o){fi[di++]=fr,fi[di++]=dr,fi[di++]=Ls,Ls=n;var u=fr;n=dr;var p=32-Fe(u)-1;u&=~(1<<p),o+=1;var g=32-Fe(r)+p;if(30<g){var E=p-p%5;g=(u&(1<<E)-1).toString(32),u>>=E,p-=E,fr=1<<32-Fe(r)+p|o<<p|u,dr=g+n}else fr=1<<g|o<<p|u,dr=n}function Fh(n){n.return!==null&&(Ds(n,1),xg(n,1,0))}function zh(n){for(;n===vu;)vu=ya[--xa],ya[xa]=null,yu=ya[--xa],ya[xa]=null;for(;n===Ls;)Ls=fi[--di],fi[di]=null,dr=fi[--di],fi[di]=null,fr=fi[--di],fi[di]=null}var kn=null,ln=null,Pt=!1,Us=null,Yi=!1,Hh=Error(i(519));function Ns(n){var r=Error(i(418,""));throw Xo(ci(r,n)),Hh}function Mg(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[an]=n,r[_n]=u,o){case"dialog":At("cancel",r),At("close",r);break;case"iframe":case"object":case"embed":At("load",r);break;case"video":case"audio":for(o=0;o<ml.length;o++)At(ml[o],r);break;case"source":At("error",r);break;case"img":case"image":case"link":At("error",r),At("load",r);break;case"details":At("toggle",r);break;case"input":At("invalid",r),jt(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Gt(r);break;case"select":At("invalid",r);break;case"textarea":At("invalid",r),Un(r,u.value,u.defaultValue,u.children),Gt(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||Fv(r.textContent,o)?(u.popover!=null&&(At("beforetoggle",r),At("toggle",r)),u.onScroll!=null&&At("scroll",r),u.onScrollEnd!=null&&At("scrollend",r),u.onClick!=null&&(r.onclick=$u),r=!0):r=!1,r||Ns(n)}function Sg(n){for(kn=n.return;kn;)switch(kn.tag){case 5:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:kn=kn.return}}function ko(n){if(n!==kn)return!1;if(!Pt)return Sg(n),Pt=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||id(n.type,n.memoizedProps)),o=!o),o&&ln&&Ns(n),Sg(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){ln=Ui(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}ln=null}}else r===27?(r=ln,rs(n.type)?(n=od,od=null,ln=n):ln=r):ln=kn?Ui(n.stateNode.nextSibling):null;return!0}function Wo(){ln=kn=null,Pt=!1}function Eg(){var n=Us;return n!==null&&(Jn===null?Jn=n:Jn.push.apply(Jn,n),Us=null),n}function Xo(n){Us===null?Us=[n]:Us.push(n)}var Vh=ee(null),Ps=null,pr=null;function kr(n,r,o){Ee(Vh,r._currentValue),r._currentValue=o}function mr(n){n._currentValue=Vh.current,Me(Vh)}function Gh(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function kh(n,r,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;e:for(;g!==null;){var R=g;g=p;for(var H=0;H<r.length;H++)if(R.context===r[H]){g.lanes|=o,R=g.alternate,R!==null&&(R.lanes|=o),Gh(g.return,o,n),u||(E=null);break e}g=R.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Gh(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function Yo(n,r,o,u){n=null;for(var p=r,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var R=p.type;ei(p.pendingProps.value,E.value)||(n!==null?n.push(R):n=[R])}}else if(p===Le.current){if(E=p.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Ml):n=[Ml])}p=p.return}n!==null&&kh(r,n,o,u),r.flags|=262144}function xu(n){for(n=n.firstContext;n!==null;){if(!ei(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Os(n){Ps=n,pr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Fn(n){return Tg(Ps,n)}function Mu(n,r){return Ps===null&&Os(n),Tg(n,r)}function Tg(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},pr===null){if(n===null)throw Error(i(308));pr=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else pr=pr.next=r;return o}var ES=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},TS=s.unstable_scheduleCallback,AS=s.unstable_NormalPriority,yn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new ES,data:new Map,refCount:0}}function qo(n){n.refCount--,n.refCount===0&&TS(AS,function(){n.controller.abort()})}var jo=null,Xh=0,Ma=0,Sa=null;function bS(n,r){if(jo===null){var o=jo=[];Xh=0,Ma=jf(),Sa={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Xh++,r.then(Ag,Ag),r}function Ag(){if(--Xh===0&&jo!==null){Sa!==null&&(Sa.status="fulfilled");var n=jo;jo=null,Ma=0,Sa=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function RS(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var bg=z.S;z.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&bS(n,r),bg!==null&&bg(n,r)};var Is=ee(null);function Yh(){var n=Is.current;return n!==null?n:Jt.pooledCache}function Su(n,r){r===null?Ee(Is,Is.current):Ee(Is,r.pool)}function Rg(){var n=Yh();return n===null?null:{parent:yn._currentValue,pool:n}}var Zo=Error(i(460)),wg=Error(i(474)),Eu=Error(i(542)),qh={then:function(){}};function Cg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Tu(){}function Lg(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Tu,Tu),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Ug(n),n;default:if(typeof r.status=="string")r.then(Tu,Tu);else{if(n=Jt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Ug(n),n}throw Ko=r,Zo}}var Ko=null;function Dg(){if(Ko===null)throw Error(i(459));var n=Ko;return Ko=null,n}function Ug(n){if(n===Zo||n===Eu)throw Error(i(483))}var Wr=!1;function jh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Xr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(zt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=gu(n),vg(n,null,o),r}return mu(n,u,r,o),gu(n)}function Qo(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Oe(n,o)}}function Kh(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=r:g=g.next=r}else p=g=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Qh=!1;function Jo(){if(Qh){var n=Sa;if(n!==null)throw n}}function $o(n,r,o,u){Qh=!1;var p=n.updateQueue;Wr=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var H=R,ne=H.next;H.next=null,E===null?g=ne:E.next=ne,E=H;var de=n.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==E&&(R===null?de.firstBaseUpdate=ne:R.next=ne,de.lastBaseUpdate=H))}if(g!==null){var xe=p.baseState;E=0,de=ne=H=null,R=g;do{var ae=R.lane&-536870913,oe=ae!==R.lane;if(oe?(wt&ae)===ae:(u&ae)===ae){ae!==0&&ae===Ma&&(Qh=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var lt=n,nt=R;ae=r;var Xt=o;switch(nt.tag){case 1:if(lt=nt.payload,typeof lt=="function"){xe=lt.call(Xt,xe,ae);break e}xe=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=nt.payload,ae=typeof lt=="function"?lt.call(Xt,xe,ae):lt,ae==null)break e;xe=m({},xe,ae);break e;case 2:Wr=!0}}ae=R.callback,ae!==null&&(n.flags|=64,oe&&(n.flags|=8192),oe=p.callbacks,oe===null?p.callbacks=[ae]:oe.push(ae))}else oe={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(ne=de=oe,H=xe):de=de.next=oe,E|=ae;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,p.lastBaseUpdate=oe,p.shared.pending=null}}while(!0);de===null&&(H=xe),p.baseState=H,p.firstBaseUpdate=ne,p.lastBaseUpdate=de,g===null&&(p.shared.lanes=0),es|=E,n.lanes=E,n.memoizedState=xe}}function Ng(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function Pg(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Ng(o[n],r)}var Ea=ee(null),Au=ee(0);function Og(n,r){n=Sr,Ee(Au,n),Ee(Ea,r),Sr=n|r.baseLanes}function Jh(){Ee(Au,Sr),Ee(Ea,Ea.current)}function $h(){Sr=Au.current,Me(Ea),Me(Au)}var qr=0,yt=null,kt=null,pn=null,bu=!1,Ta=!1,Bs=!1,Ru=0,el=0,Aa=null,wS=0;function fn(){throw Error(i(321))}function ef(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ei(n[o],r[o]))return!1;return!0}function tf(n,r,o,u,p,g){return qr=g,yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?v_:y_,Bs=!1,g=o(u,p),Bs=!1,Ta&&(g=Bg(r,o,u,p)),Ig(n),g}function Ig(n){z.H=Nu;var r=kt!==null&&kt.next!==null;if(qr=0,pn=kt=yt=null,bu=!1,el=0,Aa=null,r)throw Error(i(300));n===null||An||(n=n.dependencies,n!==null&&xu(n)&&(An=!0))}function Bg(n,r,o,u){yt=n;var p=0;do{if(Ta&&(Aa=null),el=0,Ta=!1,25<=p)throw Error(i(301));if(p+=1,pn=kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}z.H=OS,g=r(o,u)}while(Ta);return g}function CS(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?tl(r):r,n=n.useState()[0],(kt!==null?kt.memoizedState:null)!==n&&(yt.flags|=1024),r}function nf(){var n=Ru!==0;return Ru=0,n}function rf(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function sf(n){if(bu){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}bu=!1}qr=0,pn=kt=yt=null,Ta=!1,el=Ru=0,Aa=null}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?yt.memoizedState=pn=n:pn=pn.next=n,pn}function mn(){if(kt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var r=pn===null?yt.memoizedState:pn.next;if(r!==null)pn=r,kt=n;else{if(n===null)throw yt.alternate===null?Error(i(467)):Error(i(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},pn===null?yt.memoizedState=pn=n:pn=pn.next=n}return pn}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(n){var r=el;return el+=1,Aa===null&&(Aa=[]),n=Lg(Aa,n,r),r=yt,(pn===null?r.memoizedState:pn.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?v_:y_),n}function wu(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return tl(n);if(n.$$typeof===D)return Fn(n)}throw Error(i(438,String(n)))}function of(n){var r=null,o=yt.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=yt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=af(),yt.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=A;return r.index++,o}function gr(n,r){return typeof r=="function"?r(n):r}function Cu(n){var r=mn();return lf(r,kt,n)}function lf(n,r,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var p=n.baseQueue,g=u.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}r.baseQueue=p=g,u.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{r=p.next;var R=E=null,H=null,ne=r,de=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(wt&xe)===xe:(qr&xe)===xe){var ae=ne.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===Ma&&(de=!0);else if((qr&ae)===ae){ne=ne.next,ae===Ma&&(de=!0);continue}else xe={lane:0,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=xe,E=g):H=H.next=xe,yt.lanes|=ae,es|=ae;xe=ne.action,Bs&&o(g,xe),g=ne.hasEagerState?ne.eagerState:o(g,xe)}else ae={lane:xe,revertLane:ne.revertLane,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(R=H=ae,E=g):H=H.next=ae,yt.lanes|=xe,es|=xe;ne=ne.next}while(ne!==null&&ne!==r);if(H===null?E=g:H.next=R,!ei(g,n.memoizedState)&&(An=!0,de&&(o=Sa,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=H,u.lastRenderedState=g}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function uf(n){var r=mn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,g=r.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);ei(g,r.memoizedState)||(An=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function Fg(n,r,o){var u=yt,p=mn(),g=Pt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=r();var E=!ei((kt||p).memoizedState,o);E&&(p.memoizedState=o,An=!0),p=p.queue;var R=Vg.bind(null,u,p,n);if(nl(2048,8,R,[n]),p.getSnapshot!==r||E||pn!==null&&pn.memoizedState.tag&1){if(u.flags|=2048,ba(9,Lu(),Hg.bind(null,u,p,o,r),null),Jt===null)throw Error(i(349));g||(qr&124)!==0||zg(u,r,o)}return o}function zg(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=yt.updateQueue,r===null?(r=af(),yt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Hg(n,r,o,u){r.value=o,r.getSnapshot=u,Gg(r)&&kg(n)}function Vg(n,r,o){return o(function(){Gg(r)&&kg(n)})}function Gg(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ei(n,o)}catch{return!0}}function kg(n){var r=_a(n,2);r!==null&&ai(r,n,2)}function cf(n){var r=Kn();if(typeof n=="function"){var o=n;if(n=o(),Bs){ce(!0);try{o()}finally{ce(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},r}function Wg(n,r,o,u){return n.baseState=o,lf(n,kt,typeof u=="function"?u:gr)}function LS(n,r,o,u,p){if(Uu(n))throw Error(i(485));if(n=r.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};z.T!==null?o(!0):g.isTransition=!1,u(g),o=r.pending,o===null?(g.next=r.pending=g,Xg(r,g)):(g.next=o.next,r.pending=o.next=g)}}function Xg(n,r){var o=r.action,u=r.payload,p=n.state;if(r.isTransition){var g=z.T,E={};z.T=E;try{var R=o(p,u),H=z.S;H!==null&&H(E,R),Yg(n,r,R)}catch(ne){hf(n,r,ne)}finally{z.T=g}}else try{g=o(p,u),Yg(n,r,g)}catch(ne){hf(n,r,ne)}}function Yg(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){qg(n,r,u)},function(u){return hf(n,r,u)}):qg(n,r,o)}function qg(n,r,o){r.status="fulfilled",r.value=o,jg(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Xg(n,o)))}function hf(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,jg(r),r=r.next;while(r!==u)}n.action=null}function jg(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Zg(n,r){return r}function Kg(n,r){if(Pt){var o=Jt.formState;if(o!==null){e:{var u=yt;if(Pt){if(ln){t:{for(var p=ln,g=Yi;p.nodeType!==8;){if(!g){p=null;break t}if(p=Ui(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){ln=Ui(p.nextSibling),u=p.data==="F!";break e}}Ns(u)}u=!1}u&&(r=o[0])}}return o=Kn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zg,lastRenderedState:r},o.queue=u,o=m_.bind(null,yt,u),u.dispatch=o,u=cf(!1),g=gf.bind(null,yt,!1,u.queue),u=Kn(),p={state:r,dispatch:null,action:n,pending:null},u.queue=p,o=LS.bind(null,yt,p,g,o),p.dispatch=o,u.memoizedState=n,[r,o,!1]}function Qg(n){var r=mn();return Jg(r,kt,n)}function Jg(n,r,o){if(r=lf(n,r,Zg)[0],n=Cu(gr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=tl(r)}catch(E){throw E===Zo?Eu:E}else u=r;r=mn();var p=r.queue,g=p.dispatch;return o!==r.memoizedState&&(yt.flags|=2048,ba(9,Lu(),DS.bind(null,p,o),null)),[u,g,n]}function DS(n,r){n.action=r}function $g(n){var r=mn(),o=kt;if(o!==null)return Jg(r,o,n);mn(),r=r.memoizedState,o=mn();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function ba(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=yt.updateQueue,r===null&&(r=af(),yt.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Lu(){return{destroy:void 0,resource:void 0}}function e_(){return mn().memoizedState}function Du(n,r,o,u){var p=Kn();u=u===void 0?null:u,yt.flags|=n,p.memoizedState=ba(1|r,Lu(),o,u)}function nl(n,r,o,u){var p=mn();u=u===void 0?null:u;var g=p.memoizedState.inst;kt!==null&&u!==null&&ef(u,kt.memoizedState.deps)?p.memoizedState=ba(r,g,o,u):(yt.flags|=n,p.memoizedState=ba(1|r,g,o,u))}function t_(n,r){Du(8390656,8,n,r)}function n_(n,r){nl(2048,8,n,r)}function i_(n,r){return nl(4,2,n,r)}function r_(n,r){return nl(4,4,n,r)}function s_(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function a_(n,r,o){o=o!=null?o.concat([n]):null,nl(4,4,s_.bind(null,r,n),o)}function ff(){}function o_(n,r){var o=mn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&ef(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function l_(n,r){var o=mn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&ef(r,u[1]))return u[0];if(u=n(),Bs){ce(!0);try{n()}finally{ce(!1)}}return o.memoizedState=[u,r],u}function df(n,r,o){return o===void 0||(qr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=hv(),yt.lanes|=n,es|=n,o)}function u_(n,r,o,u){return ei(o,r)?o:Ea.current!==null?(n=df(n,o,u),ei(n,r)||(An=!0),n):(qr&42)===0?(An=!0,n.memoizedState=o):(n=hv(),yt.lanes|=n,es|=n,r)}function c_(n,r,o,u,p){var g=j.p;j.p=g!==0&&8>g?g:8;var E=z.T,R={};z.T=R,gf(n,!1,r,o);try{var H=p(),ne=z.S;if(ne!==null&&ne(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=RS(H,u);il(n,r,de,si(n))}else il(n,r,u,si(n))}catch(xe){il(n,r,{then:function(){},status:"rejected",reason:xe},si())}finally{j.p=g,z.T=E}}function US(){}function pf(n,r,o,u){if(n.tag!==5)throw Error(i(476));var p=h_(n).queue;c_(n,p,r,q,o===null?US:function(){return f_(n),o(u)})}function h_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:q},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function f_(n){var r=h_(n).next.queue;il(n,r,{},si())}function mf(){return Fn(Ml)}function d_(){return mn().memoizedState}function p_(){return mn().memoizedState}function NS(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=si();n=Xr(o);var u=Yr(r,n,o);u!==null&&(ai(u,r,o),Qo(u,r,o)),r={cache:Wh()},n.payload=r;return}r=r.return}}function PS(n,r,o){var u=si();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Uu(n)?g_(r,o):(o=Ph(n,r,o,u),o!==null&&(ai(o,n,u),__(o,r,u)))}function m_(n,r,o){var u=si();il(n,r,o,u)}function il(n,r,o,u){var p={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Uu(n))g_(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,R=g(E,o);if(p.hasEagerState=!0,p.eagerState=R,ei(R,E))return mu(n,r,p,0),Jt===null&&pu(),!1}catch{}finally{}if(o=Ph(n,r,p,u),o!==null)return ai(o,n,u),__(o,r,u),!0}return!1}function gf(n,r,o,u){if(u={lane:2,revertLane:jf(),action:u,hasEagerState:!1,eagerState:null,next:null},Uu(n)){if(r)throw Error(i(479))}else r=Ph(n,o,u,2),r!==null&&ai(r,n,2)}function Uu(n){var r=n.alternate;return n===yt||r!==null&&r===yt}function g_(n,r){Ta=bu=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function __(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,Oe(n,o)}}var Nu={readContext:Fn,use:wu,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn},v_={readContext:Fn,use:wu,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:Fn,useEffect:t_,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,Du(4194308,4,s_.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Du(4194308,4,n,r)},useInsertionEffect:function(n,r){Du(4,2,n,r)},useMemo:function(n,r){var o=Kn();r=r===void 0?null:r;var u=n();if(Bs){ce(!0);try{n()}finally{ce(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Kn();if(o!==void 0){var p=o(r);if(Bs){ce(!0);try{o(r)}finally{ce(!1)}}}else p=r;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=PS.bind(null,yt,n),[u.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:function(n){n=cf(n);var r=n.queue,o=m_.bind(null,yt,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:ff,useDeferredValue:function(n,r){var o=Kn();return df(o,n,r)},useTransition:function(){var n=cf(!1);return n=c_.bind(null,yt,n.queue,!0,!1),Kn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=yt,p=Kn();if(Pt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),Jt===null)throw Error(i(349));(wt&124)!==0||zg(u,r,o)}p.memoizedState=o;var g={value:o,getSnapshot:r};return p.queue=g,t_(Vg.bind(null,u,g,n),[n]),u.flags|=2048,ba(9,Lu(),Hg.bind(null,u,g,o,r),null),o},useId:function(){var n=Kn(),r=Jt.identifierPrefix;if(Pt){var o=dr,u=fr;o=(u&~(1<<32-Fe(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Ru++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=wS++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:mf,useFormState:Kg,useActionState:Kg,useOptimistic:function(n){var r=Kn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=gf.bind(null,yt,!0,o),o.dispatch=r,[n,r]},useMemoCache:of,useCacheRefresh:function(){return Kn().memoizedState=NS.bind(null,yt)}},y_={readContext:Fn,use:wu,useCallback:o_,useContext:Fn,useEffect:n_,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:Cu,useRef:e_,useState:function(){return Cu(gr)},useDebugValue:ff,useDeferredValue:function(n,r){var o=mn();return u_(o,kt.memoizedState,n,r)},useTransition:function(){var n=Cu(gr)[0],r=mn().memoizedState;return[typeof n=="boolean"?n:tl(n),r]},useSyncExternalStore:Fg,useId:d_,useHostTransitionStatus:mf,useFormState:Qg,useActionState:Qg,useOptimistic:function(n,r){var o=mn();return Wg(o,kt,n,r)},useMemoCache:of,useCacheRefresh:p_},OS={readContext:Fn,use:wu,useCallback:o_,useContext:Fn,useEffect:n_,useImperativeHandle:a_,useInsertionEffect:i_,useLayoutEffect:r_,useMemo:l_,useReducer:uf,useRef:e_,useState:function(){return uf(gr)},useDebugValue:ff,useDeferredValue:function(n,r){var o=mn();return kt===null?df(o,n,r):u_(o,kt.memoizedState,n,r)},useTransition:function(){var n=uf(gr)[0],r=mn().memoizedState;return[typeof n=="boolean"?n:tl(n),r]},useSyncExternalStore:Fg,useId:d_,useHostTransitionStatus:mf,useFormState:$g,useActionState:$g,useOptimistic:function(n,r){var o=mn();return kt!==null?Wg(o,kt,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:of,useCacheRefresh:p_},Ra=null,rl=0;function Pu(n){var r=rl;return rl+=1,Ra===null&&(Ra=[]),Lg(Ra,n,r)}function sl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Ou(n,r){throw r.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function x_(n){var r=n._init;return r(n._payload)}function M_(n){function r(K,Y){if(n){var $=K.deletions;$===null?(K.deletions=[Y],K.flags|=16):$.push(Y)}}function o(K,Y){if(!n)return null;for(;Y!==null;)r(K,Y),Y=Y.sibling;return null}function u(K){for(var Y=new Map;K!==null;)K.key!==null?Y.set(K.key,K):Y.set(K.index,K),K=K.sibling;return Y}function p(K,Y){return K=hr(K,Y),K.index=0,K.sibling=null,K}function g(K,Y,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<Y?(K.flags|=67108866,Y):$):(K.flags|=67108866,Y)):(K.flags|=1048576,Y)}function E(K){return n&&K.alternate===null&&(K.flags|=67108866),K}function R(K,Y,$,ve){return Y===null||Y.tag!==6?(Y=Ih($,K.mode,ve),Y.return=K,Y):(Y=p(Y,$),Y.return=K,Y)}function H(K,Y,$,ve){var ke=$.type;return ke===S?de(K,Y,$.props.children,ve,$.key):Y!==null&&(Y.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===G&&x_(ke)===Y.type)?(Y=p(Y,$.props),sl(Y,$),Y.return=K,Y):(Y=_u($.type,$.key,$.props,null,K.mode,ve),sl(Y,$),Y.return=K,Y)}function ne(K,Y,$,ve){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==$.containerInfo||Y.stateNode.implementation!==$.implementation?(Y=Bh($,K.mode,ve),Y.return=K,Y):(Y=p(Y,$.children||[]),Y.return=K,Y)}function de(K,Y,$,ve,ke){return Y===null||Y.tag!==7?(Y=Cs($,K.mode,ve,ke),Y.return=K,Y):(Y=p(Y,$),Y.return=K,Y)}function xe(K,Y,$){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Ih(""+Y,K.mode,$),Y.return=K,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return $=_u(Y.type,Y.key,Y.props,null,K.mode,$),sl($,Y),$.return=K,$;case y:return Y=Bh(Y,K.mode,$),Y.return=K,Y;case G:var ve=Y._init;return Y=ve(Y._payload),xe(K,Y,$)}if(he(Y)||se(Y))return Y=Cs(Y,K.mode,$,null),Y.return=K,Y;if(typeof Y.then=="function")return xe(K,Pu(Y),$);if(Y.$$typeof===D)return xe(K,Mu(K,Y),$);Ou(K,Y)}return null}function ae(K,Y,$,ve){var ke=Y!==null?Y.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:R(K,Y,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===ke?H(K,Y,$,ve):null;case y:return $.key===ke?ne(K,Y,$,ve):null;case G:return ke=$._init,$=ke($._payload),ae(K,Y,$,ve)}if(he($)||se($))return ke!==null?null:de(K,Y,$,ve,null);if(typeof $.then=="function")return ae(K,Y,Pu($),ve);if($.$$typeof===D)return ae(K,Y,Mu(K,$),ve);Ou(K,$)}return null}function oe(K,Y,$,ve,ke){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get($)||null,R(Y,K,""+ve,ke);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case v:return K=K.get(ve.key===null?$:ve.key)||null,H(Y,K,ve,ke);case y:return K=K.get(ve.key===null?$:ve.key)||null,ne(Y,K,ve,ke);case G:var Et=ve._init;return ve=Et(ve._payload),oe(K,Y,$,ve,ke)}if(he(ve)||se(ve))return K=K.get($)||null,de(Y,K,ve,ke,null);if(typeof ve.then=="function")return oe(K,Y,$,Pu(ve),ke);if(ve.$$typeof===D)return oe(K,Y,$,Mu(Y,ve),ke);Ou(Y,ve)}return null}function lt(K,Y,$,ve){for(var ke=null,Et=null,Ze=Y,st=Y=0,Rn=null;Ze!==null&&st<$.length;st++){Ze.index>st?(Rn=Ze,Ze=null):Rn=Ze.sibling;var Dt=ae(K,Ze,$[st],ve);if(Dt===null){Ze===null&&(Ze=Rn);break}n&&Ze&&Dt.alternate===null&&r(K,Ze),Y=g(Dt,Y,st),Et===null?ke=Dt:Et.sibling=Dt,Et=Dt,Ze=Rn}if(st===$.length)return o(K,Ze),Pt&&Ds(K,st),ke;if(Ze===null){for(;st<$.length;st++)Ze=xe(K,$[st],ve),Ze!==null&&(Y=g(Ze,Y,st),Et===null?ke=Ze:Et.sibling=Ze,Et=Ze);return Pt&&Ds(K,st),ke}for(Ze=u(Ze);st<$.length;st++)Rn=oe(Ze,K,st,$[st],ve),Rn!==null&&(n&&Rn.alternate!==null&&Ze.delete(Rn.key===null?st:Rn.key),Y=g(Rn,Y,st),Et===null?ke=Rn:Et.sibling=Rn,Et=Rn);return n&&Ze.forEach(function(us){return r(K,us)}),Pt&&Ds(K,st),ke}function nt(K,Y,$,ve){if($==null)throw Error(i(151));for(var ke=null,Et=null,Ze=Y,st=Y=0,Rn=null,Dt=$.next();Ze!==null&&!Dt.done;st++,Dt=$.next()){Ze.index>st?(Rn=Ze,Ze=null):Rn=Ze.sibling;var us=ae(K,Ze,Dt.value,ve);if(us===null){Ze===null&&(Ze=Rn);break}n&&Ze&&us.alternate===null&&r(K,Ze),Y=g(us,Y,st),Et===null?ke=us:Et.sibling=us,Et=us,Ze=Rn}if(Dt.done)return o(K,Ze),Pt&&Ds(K,st),ke;if(Ze===null){for(;!Dt.done;st++,Dt=$.next())Dt=xe(K,Dt.value,ve),Dt!==null&&(Y=g(Dt,Y,st),Et===null?ke=Dt:Et.sibling=Dt,Et=Dt);return Pt&&Ds(K,st),ke}for(Ze=u(Ze);!Dt.done;st++,Dt=$.next())Dt=oe(Ze,K,st,Dt.value,ve),Dt!==null&&(n&&Dt.alternate!==null&&Ze.delete(Dt.key===null?st:Dt.key),Y=g(Dt,Y,st),Et===null?ke=Dt:Et.sibling=Dt,Et=Dt);return n&&Ze.forEach(function(IE){return r(K,IE)}),Pt&&Ds(K,st),ke}function Xt(K,Y,$,ve){if(typeof $=="object"&&$!==null&&$.type===S&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var ke=$.key;Y!==null;){if(Y.key===ke){if(ke=$.type,ke===S){if(Y.tag===7){o(K,Y.sibling),ve=p(Y,$.props.children),ve.return=K,K=ve;break e}}else if(Y.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===G&&x_(ke)===Y.type){o(K,Y.sibling),ve=p(Y,$.props),sl(ve,$),ve.return=K,K=ve;break e}o(K,Y);break}else r(K,Y);Y=Y.sibling}$.type===S?(ve=Cs($.props.children,K.mode,ve,$.key),ve.return=K,K=ve):(ve=_u($.type,$.key,$.props,null,K.mode,ve),sl(ve,$),ve.return=K,K=ve)}return E(K);case y:e:{for(ke=$.key;Y!==null;){if(Y.key===ke)if(Y.tag===4&&Y.stateNode.containerInfo===$.containerInfo&&Y.stateNode.implementation===$.implementation){o(K,Y.sibling),ve=p(Y,$.children||[]),ve.return=K,K=ve;break e}else{o(K,Y);break}else r(K,Y);Y=Y.sibling}ve=Bh($,K.mode,ve),ve.return=K,K=ve}return E(K);case G:return ke=$._init,$=ke($._payload),Xt(K,Y,$,ve)}if(he($))return lt(K,Y,$,ve);if(se($)){if(ke=se($),typeof ke!="function")throw Error(i(150));return $=ke.call($),nt(K,Y,$,ve)}if(typeof $.then=="function")return Xt(K,Y,Pu($),ve);if($.$$typeof===D)return Xt(K,Y,Mu(K,$),ve);Ou(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,Y!==null&&Y.tag===6?(o(K,Y.sibling),ve=p(Y,$),ve.return=K,K=ve):(o(K,Y),ve=Ih($,K.mode,ve),ve.return=K,K=ve),E(K)):o(K,Y)}return function(K,Y,$,ve){try{rl=0;var ke=Xt(K,Y,$,ve);return Ra=null,ke}catch(Ze){if(Ze===Zo||Ze===Eu)throw Ze;var Et=ti(29,Ze,null,K.mode);return Et.lanes=ve,Et.return=K,Et}finally{}}}var wa=M_(!0),S_=M_(!1),pi=ee(null),qi=null;function jr(n){var r=n.alternate;Ee(xn,xn.current&1),Ee(pi,n),qi===null&&(r===null||Ea.current!==null||r.memoizedState!==null)&&(qi=n)}function E_(n){if(n.tag===22){if(Ee(xn,xn.current),Ee(pi,n),qi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(qi=n)}}else Zr()}function Zr(){Ee(xn,xn.current),Ee(pi,pi.current)}function _r(n){Me(pi),qi===n&&(qi=null),Me(xn)}var xn=ee(0);function Iu(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||ad(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function _f(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:m({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var vf={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=si(),p=Xr(u);p.payload=r,o!=null&&(p.callback=o),r=Yr(n,p,u),r!==null&&(ai(r,n,u),Qo(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=si(),p=Xr(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Yr(n,p,u),r!==null&&(ai(r,n,u),Qo(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=si(),u=Xr(o);u.tag=2,r!=null&&(u.callback=r),r=Yr(n,u,o),r!==null&&(ai(r,n,o),Qo(r,n,o))}};function T_(n,r,o,u,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!Vo(o,u)||!Vo(p,g):!0}function A_(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&vf.enqueueReplaceState(r,r.state,null)}function Fs(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=m({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}var Bu=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function b_(n){Bu(n)}function R_(n){console.error(n)}function w_(n){Bu(n)}function Fu(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function C_(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function yf(n,r,o){return o=Xr(o),o.tag=3,o.payload={element:null},o.callback=function(){Fu(n,r)},o}function L_(n){return n=Xr(n),n.tag=3,n}function D_(n,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;n.payload=function(){return p(g)},n.callback=function(){C_(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){C_(r,o,u),typeof p!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var R=u.stack;this.componentDidCatch(u.value,{componentStack:R!==null?R:""})})}function IS(n,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Yo(r,o,p,!0),o=pi.current,o!==null){switch(o.tag){case 13:return qi===null?kf():o.alternate===null&&un===0&&(un=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===qh?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Xf(n,u,p)),!1;case 22:return o.flags|=65536,u===qh?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Xf(n,u,p)),!1}throw Error(i(435,o.tag))}return Xf(n,u,p),kf(),!1}if(Pt)return r=pi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Hh&&(n=Error(i(422),{cause:u}),Xo(ci(n,o)))):(u!==Hh&&(r=Error(i(423),{cause:u}),Xo(ci(r,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=ci(u,o),p=yf(n.stateNode,u,p),Kh(n,p),un!==4&&(un=2)),!1;var g=Error(i(520),{cause:u});if(g=ci(g,o),fl===null?fl=[g]:fl.push(g),un!==4&&(un=2),r===null)return!0;u=ci(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=yf(o.stateNode,u,n),Kh(o,n),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ts===null||!ts.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=L_(p),D_(p,n,o,u),Kh(o,p),!1}o=o.return}while(o!==null);return!1}var U_=Error(i(461)),An=!1;function Nn(n,r,o,u){r.child=n===null?S_(r,null,o,u):wa(r,n.child,o,u)}function N_(n,r,o,u,p){o=o.render;var g=r.ref;if("ref"in u){var E={};for(var R in u)R!=="ref"&&(E[R]=u[R])}else E=u;return Os(r),u=tf(n,r,o,E,g,p),R=nf(),n!==null&&!An?(rf(n,r,p),vr(n,r,p)):(Pt&&R&&Fh(r),r.flags|=1,Nn(n,r,u,p),r.child)}function P_(n,r,o,u,p){if(n===null){var g=o.type;return typeof g=="function"&&!Oh(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,O_(n,r,g,u,p)):(n=_u(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,!Rf(n,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:Vo,o(E,u)&&n.ref===r.ref)return vr(n,r,p)}return r.flags|=1,n=hr(g,u),n.ref=r.ref,n.return=r,r.child=n}function O_(n,r,o,u,p){if(n!==null){var g=n.memoizedProps;if(Vo(g,u)&&n.ref===r.ref)if(An=!1,r.pendingProps=u=g,Rf(n,p))(n.flags&131072)!==0&&(An=!0);else return r.lanes=n.lanes,vr(n,r,p)}return xf(n,r,o,u,p)}function I_(n,r,o){var u=r.pendingProps,p=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,n!==null){for(p=r.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;r.childLanes=g&~u}else r.childLanes=0,r.child=null;return B_(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Su(r,g!==null?g.cachePool:null),g!==null?Og(r,g):Jh(),E_(r);else return r.lanes=r.childLanes=536870912,B_(n,r,g!==null?g.baseLanes|o:o,o)}else g!==null?(Su(r,g.cachePool),Og(r,g),Zr(),r.memoizedState=null):(n!==null&&Su(r,null),Jh(),Zr());return Nn(n,r,p,o),r.child}function B_(n,r,o,u){var p=Yh();return p=p===null?null:{parent:yn._currentValue,pool:p},r.memoizedState={baseLanes:o,cachePool:p},n!==null&&Su(r,null),Jh(),E_(r),n!==null&&Yo(n,r,u,!0),null}function zu(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function xf(n,r,o,u,p){return Os(r),o=tf(n,r,o,u,void 0,p),u=nf(),n!==null&&!An?(rf(n,r,p),vr(n,r,p)):(Pt&&u&&Fh(r),r.flags|=1,Nn(n,r,o,p),r.child)}function F_(n,r,o,u,p,g){return Os(r),r.updateQueue=null,o=Bg(r,u,o,p),Ig(n),u=nf(),n!==null&&!An?(rf(n,r,g),vr(n,r,g)):(Pt&&u&&Fh(r),r.flags|=1,Nn(n,r,o,g),r.child)}function z_(n,r,o,u,p){if(Os(r),r.stateNode===null){var g=va,E=o.contextType;typeof E=="object"&&E!==null&&(g=Fn(E)),g=new o(u,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=vf,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=u,g.state=r.memoizedState,g.refs={},jh(r),E=o.contextType,g.context=typeof E=="object"&&E!==null?Fn(E):va,g.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(_f(r,o,E,u),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&vf.enqueueReplaceState(g,g.state,null),$o(r,u,g,p),Jo(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){g=r.stateNode;var R=r.memoizedProps,H=Fs(o,R);g.props=H;var ne=g.context,de=o.contextType;E=va,typeof de=="object"&&de!==null&&(E=Fn(de));var xe=o.getDerivedStateFromProps;de=typeof xe=="function"||typeof g.getSnapshotBeforeUpdate=="function",R=r.pendingProps!==R,de||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(R||ne!==E)&&A_(r,g,u,E),Wr=!1;var ae=r.memoizedState;g.state=ae,$o(r,u,g,p),Jo(),ne=r.memoizedState,R||ae!==ne||Wr?(typeof xe=="function"&&(_f(r,o,xe,u),ne=r.memoizedState),(H=Wr||T_(r,o,H,u,ae,ne,E))?(de||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=ne),g.props=u,g.state=ne,g.context=E,u=H):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,Zh(n,r),E=r.memoizedProps,de=Fs(o,E),g.props=de,xe=r.pendingProps,ae=g.context,ne=o.contextType,H=va,typeof ne=="object"&&ne!==null&&(H=Fn(ne)),R=o.getDerivedStateFromProps,(ne=typeof R=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==xe||ae!==H)&&A_(r,g,u,H),Wr=!1,ae=r.memoizedState,g.state=ae,$o(r,u,g,p),Jo();var oe=r.memoizedState;E!==xe||ae!==oe||Wr||n!==null&&n.dependencies!==null&&xu(n.dependencies)?(typeof R=="function"&&(_f(r,o,R,u),oe=r.memoizedState),(de=Wr||T_(r,o,de,u,ae,oe,H)||n!==null&&n.dependencies!==null&&xu(n.dependencies))?(ne||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,oe,H),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,oe,H)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=oe),g.props=u,g.state=oe,g.context=H,u=de):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ae===n.memoizedState||(r.flags|=1024),u=!1)}return g=u,zu(n,r),u=(r.flags&128)!==0,g||u?(g=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,n!==null&&u?(r.child=wa(r,n.child,null,p),r.child=wa(r,null,o,p)):Nn(n,r,o,p),r.memoizedState=g.state,n=r.child):n=vr(n,r,p),n}function H_(n,r,o,u){return Wo(),r.flags|=256,Nn(n,r,o,u),r.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(n){return{baseLanes:n,cachePool:Rg()}}function Ef(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=mi),n}function V_(n,r,o){var u=r.pendingProps,p=!1,g=(r.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(xn.current&2)!==0),E&&(p=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(Pt){if(p?jr(r):Zr(),Pt){var R=ln,H;if(H=R){e:{for(H=R,R=Yi;H.nodeType!==8;){if(!R){R=null;break e}if(H=Ui(H.nextSibling),H===null){R=null;break e}}R=H}R!==null?(r.memoizedState={dehydrated:R,treeContext:Ls!==null?{id:fr,overflow:dr}:null,retryLane:536870912,hydrationErrors:null},H=ti(18,null,null,0),H.stateNode=R,H.return=r,r.child=H,kn=r,ln=null,H=!0):H=!1}H||Ns(r)}if(R=r.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return ad(R)?r.lanes=32:r.lanes=536870912,null;_r(r)}return R=u.children,u=u.fallback,p?(Zr(),p=r.mode,R=Hu({mode:"hidden",children:R},p),u=Cs(u,p,o,null),R.return=r,u.return=r,R.sibling=u,r.child=R,p=r.child,p.memoizedState=Sf(o),p.childLanes=Ef(n,E,o),r.memoizedState=Mf,u):(jr(r),Tf(r,R))}if(H=n.memoizedState,H!==null&&(R=H.dehydrated,R!==null)){if(g)r.flags&256?(jr(r),r.flags&=-257,r=Af(n,r,o)):r.memoizedState!==null?(Zr(),r.child=n.child,r.flags|=128,r=null):(Zr(),p=u.fallback,R=r.mode,u=Hu({mode:"visible",children:u.children},R),p=Cs(p,R,o,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,wa(r,n.child,null,o),u=r.child,u.memoizedState=Sf(o),u.childLanes=Ef(n,E,o),r.memoizedState=Mf,r=p);else if(jr(r),ad(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var ne=E.dgst;E=ne,u=Error(i(419)),u.stack="",u.digest=E,Xo({value:u,source:null,stack:null}),r=Af(n,r,o)}else if(An||Yo(n,r,o,!1),E=(o&n.childLanes)!==0,An||E){if(E=Jt,E!==null&&(u=o&-o,u=(u&42)!==0?1:qe(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,_a(n,u),ai(E,n,u),U_;R.data==="$?"||kf(),r=Af(n,r,o)}else R.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=H.treeContext,ln=Ui(R.nextSibling),kn=r,Pt=!0,Us=null,Yi=!1,n!==null&&(fi[di++]=fr,fi[di++]=dr,fi[di++]=Ls,fr=n.id,dr=n.overflow,Ls=r),r=Tf(r,u.children),r.flags|=4096);return r}return p?(Zr(),p=u.fallback,R=r.mode,H=n.child,ne=H.sibling,u=hr(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,ne!==null?p=hr(ne,p):(p=Cs(p,R,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,R=n.child.memoizedState,R===null?R=Sf(o):(H=R.cachePool,H!==null?(ne=yn._currentValue,H=H.parent!==ne?{parent:ne,pool:ne}:H):H=Rg(),R={baseLanes:R.baseLanes|o,cachePool:H}),p.memoizedState=R,p.childLanes=Ef(n,E,o),r.memoizedState=Mf,u):(jr(r),o=n.child,n=o.sibling,o=hr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Tf(n,r){return r=Hu({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Hu(n,r){return n=ti(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Af(n,r,o){return wa(r,n.child,null,o),n=Tf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function G_(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Gh(n.return,r,o)}function bf(n,r,o,u,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=p)}function k_(n,r,o){var u=r.pendingProps,p=u.revealOrder,g=u.tail;if(Nn(n,r,u.children,o),u=xn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&G_(n,o,r);else if(n.tag===19)G_(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Ee(xn,u),p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Iu(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),bf(r,!1,p,o,g);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Iu(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}bf(r,!0,o,null,g);break;case"together":bf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function vr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),es|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Yo(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=hr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Rf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&xu(n)))}function BS(n,r,o){switch(r.tag){case 3:Ue(r,r.stateNode.containerInfo),kr(r,yn,n.memoizedState.cache),Wo();break;case 27:case 5:Ke(r);break;case 4:Ue(r,r.stateNode.containerInfo);break;case 10:kr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(jr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?V_(n,r,o):(jr(r),n=vr(n,r,o),n!==null?n.sibling:null);jr(r);break;case 19:var p=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Yo(n,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return k_(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ee(xn,xn.current),u)break;return null;case 22:case 23:return r.lanes=0,I_(n,r,o);case 24:kr(r,yn,n.memoizedState.cache)}return vr(n,r,o)}function W_(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)An=!0;else{if(!Rf(n,o)&&(r.flags&128)===0)return An=!1,BS(n,r,o);An=(n.flags&131072)!==0}else An=!1,Pt&&(r.flags&1048576)!==0&&xg(r,yu,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,p=u._init;if(u=p(u._payload),r.type=u,typeof u=="function")Oh(u)?(n=Fs(u,n),r.tag=1,r=z_(null,r,u,n,o)):(r.tag=0,r=xf(null,r,u,n,o));else{if(u!=null){if(p=u.$$typeof,p===w){r.tag=11,r=N_(null,r,u,n,o);break e}else if(p===U){r.tag=14,r=P_(null,r,u,n,o);break e}}throw r=me(u)||u,Error(i(306,r,""))}}return r;case 0:return xf(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=Fs(u,r.pendingProps),z_(n,r,u,p,o);case 3:e:{if(Ue(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var g=r.memoizedState;p=g.element,Zh(n,r),$o(r,u,null,o);var E=r.memoizedState;if(u=E.cache,kr(r,yn,u),u!==g.cache&&kh(r,[yn],o,!0),Jo(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=H_(n,r,u,o);break e}else if(u!==p){p=ci(Error(i(424)),r),Xo(p),r=H_(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ln=Ui(n.firstChild),kn=r,Pt=!0,Us=null,Yi=!0,o=S_(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Wo(),u===p){r=vr(n,r,o);break e}Nn(n,r,u,o)}r=r.child}return r;case 26:return zu(n,r),n===null?(o=jv(r.type,null,r.pendingProps,null))?r.memoizedState=o:Pt||(o=r.type,n=r.pendingProps,u=ec(Ae.current).createElement(o),u[an]=r,u[_n]=n,On(u,o,n),on(u),r.stateNode=u):r.memoizedState=jv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Ke(r),n===null&&Pt&&(u=r.stateNode=Xv(r.type,r.pendingProps,Ae.current),kn=r,Yi=!0,p=ln,rs(r.type)?(od=p,ln=Ui(u.firstChild)):ln=p),Nn(n,r,r.pendingProps.children,o),zu(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Pt&&((p=u=ln)&&(u=hE(u,r.type,r.pendingProps,Yi),u!==null?(r.stateNode=u,kn=r,ln=Ui(u.firstChild),Yi=!1,p=!0):p=!1),p||Ns(r)),Ke(r),p=r.type,g=r.pendingProps,E=n!==null?n.memoizedProps:null,u=g.children,id(p,g)?u=null:E!==null&&id(p,E)&&(r.flags|=32),r.memoizedState!==null&&(p=tf(n,r,CS,null,null,o),Ml._currentValue=p),zu(n,r),Nn(n,r,u,o),r.child;case 6:return n===null&&Pt&&((n=o=ln)&&(o=fE(o,r.pendingProps,Yi),o!==null?(r.stateNode=o,kn=r,ln=null,n=!0):n=!1),n||Ns(r)),null;case 13:return V_(n,r,o);case 4:return Ue(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=wa(r,null,u,o):Nn(n,r,u,o),r.child;case 11:return N_(n,r,r.type,r.pendingProps,o);case 7:return Nn(n,r,r.pendingProps,o),r.child;case 8:return Nn(n,r,r.pendingProps.children,o),r.child;case 12:return Nn(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,kr(r,r.type,u.value),Nn(n,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,Os(r),p=Fn(p),u=u(p),r.flags|=1,Nn(n,r,u,o),r.child;case 14:return P_(n,r,r.type,r.pendingProps,o);case 15:return O_(n,r,r.type,r.pendingProps,o);case 19:return k_(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=Hu(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=hr(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return I_(n,r,o);case 24:return Os(r),u=Fn(yn),n===null?(p=Yh(),p===null&&(p=Jt,g=Wh(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),r.memoizedState={parent:u,cache:p},jh(r),kr(r,yn,p)):((n.lanes&o)!==0&&(Zh(n,r),$o(r,null,null,o),Jo()),p=n.memoizedState,g=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),kr(r,yn,u)):(u=g.cache,kr(r,yn,u),u!==p.cache&&kh(r,[yn],o,!0))),Nn(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function yr(n){n.flags|=4}function X_(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!$v(r)){if(r=pi.current,r!==null&&((wt&4194048)===wt?qi!==null:(wt&62914560)!==wt&&(wt&536870912)===0||r!==qi))throw Ko=qh,wg;n.flags|=8192}}function Vu(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?we():536870912,n.lanes|=r,Ua|=r)}function al(n,r){if(!Pt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function FS(n,r,o){var u=r.pendingProps;switch(zh(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(r),null;case 1:return rn(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),mr(yn),ct(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ko(r)?yr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Eg())),rn(r),null;case 26:return o=r.memoizedState,n===null?(yr(r),o!==null?(rn(r),X_(r,o)):(rn(r),r.flags&=-16777217)):o?o!==n.memoizedState?(yr(r),rn(r),X_(r,o)):(rn(r),r.flags&=-16777217):(n.memoizedProps!==u&&yr(r),rn(r),r.flags&=-16777217),null;case 27:Ct(r),o=Ae.current;var p=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&yr(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return rn(r),null}n=J.current,ko(r)?Mg(r):(n=Xv(p,u,o),r.stateNode=n,yr(r))}return rn(r),null;case 5:if(Ct(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&yr(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return rn(r),null}if(n=J.current,ko(r))Mg(r);else{switch(p=ec(Ae.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?p.createElement("select",{is:u.is}):p.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?p.createElement(o,{is:u.is}):p.createElement(o)}}n[an]=r,n[_n]=u;e:for(p=r.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===r)break e;for(;p.sibling===null;){if(p.return===null||p.return===r)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}r.stateNode=n;e:switch(On(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&yr(r)}}return rn(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&yr(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=Ae.current,ko(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,p=kn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[an]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Fv(n.nodeValue,o)),n||Ns(r)}else n=ec(n).createTextNode(u),n[an]=r,r.stateNode=n}return rn(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=ko(r),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[an]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;rn(r),p=!1}else p=Eg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(_r(r),r):(_r(r),null)}if(_r(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),Vu(r,r.updateQueue),rn(r),null;case 4:return ct(),n===null&&Jf(r.stateNode.containerInfo),rn(r),null;case 10:return mr(r.type),rn(r),null;case 19:if(Me(xn),p=r.memoizedState,p===null)return rn(r),null;if(u=(r.flags&128)!==0,g=p.rendering,g===null)if(u)al(p,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(g=Iu(n),g!==null){for(r.flags|=128,al(p,!1),n=g.updateQueue,r.updateQueue=n,Vu(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)yg(o,n),o=o.sibling;return Ee(xn,xn.current&1|2),r.child}n=n.sibling}p.tail!==null&&ht()>Wu&&(r.flags|=128,u=!0,al(p,!1),r.lanes=4194304)}else{if(!u)if(n=Iu(g),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,Vu(r,n),al(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Pt)return rn(r),null}else 2*ht()-p.renderingStartTime>Wu&&o!==536870912&&(r.flags|=128,u=!0,al(p,!1),r.lanes=4194304);p.isBackwards?(g.sibling=r.child,r.child=g):(n=p.last,n!==null?n.sibling=g:r.child=g,p.last=g)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=ht(),r.sibling=null,n=xn.current,Ee(xn,u?n&1|2:n&1),r):(rn(r),null);case 22:case 23:return _r(r),$h(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(rn(r),r.subtreeFlags&6&&(r.flags|=8192)):rn(r),o=r.updateQueue,o!==null&&Vu(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&Me(Is),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),mr(yn),rn(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function zS(n,r){switch(zh(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return mr(yn),ct(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Ct(r),null;case 13:if(_r(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Wo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Me(xn),null;case 4:return ct(),null;case 10:return mr(r.type),null;case 22:case 23:return _r(r),$h(),n!==null&&Me(Is),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return mr(yn),null;case 25:return null;default:return null}}function Y_(n,r){switch(zh(r),r.tag){case 3:mr(yn),ct();break;case 26:case 27:case 5:Ct(r);break;case 4:ct();break;case 13:_r(r);break;case 19:Me(xn);break;case 10:mr(r.type);break;case 22:case 23:_r(r),$h(),n!==null&&Me(Is);break;case 24:mr(yn)}}function ol(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==p)}}catch(R){Zt(r,r.return,R)}}function Kr(n,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&n)===n){var E=u.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,p=r;var H=o,ne=R;try{ne()}catch(de){Zt(p,H,de)}}}u=u.next}while(u!==g)}}catch(de){Zt(r,r.return,de)}}function q_(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{Pg(r,o)}catch(u){Zt(n,n.return,u)}}}function j_(n,r,o){o.props=Fs(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Zt(n,r,u)}}function ll(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){Zt(n,r,p)}}function ji(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){Zt(n,r,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){Zt(n,r,p)}else o.current=null}function Z_(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){Zt(n,n.return,p)}}function wf(n,r,o){try{var u=n.stateNode;aE(u,n.type,o,r),u[_n]=r}catch(p){Zt(n,n.return,p)}}function K_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&rs(n.type)||n.tag===4}function Cf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||K_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&rs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lf(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=$u));else if(u!==4&&(u===27&&rs(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Lf(n,r,o),n=n.sibling;n!==null;)Lf(n,r,o),n=n.sibling}function Gu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&rs(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Gu(n,r,o),n=n.sibling;n!==null;)Gu(n,r,o),n=n.sibling}function Q_(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);On(r,u,o),r[an]=n,r[_n]=o}catch(g){Zt(n,n.return,g)}}var xr=!1,dn=!1,Df=!1,J_=typeof WeakSet=="function"?WeakSet:Set,bn=null;function HS(n,r){if(n=n.containerInfo,td=ac,n=ug(n),wh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,R=-1,H=-1,ne=0,de=0,xe=n,ae=null;t:for(;;){for(var oe;xe!==o||p!==0&&xe.nodeType!==3||(R=E+p),xe!==g||u!==0&&xe.nodeType!==3||(H=E+u),xe.nodeType===3&&(E+=xe.nodeValue.length),(oe=xe.firstChild)!==null;)ae=xe,xe=oe;for(;;){if(xe===n)break t;if(ae===o&&++ne===p&&(R=E),ae===g&&++de===u&&(H=E),(oe=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=oe}o=R===-1||H===-1?null:{start:R,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(nd={focusedElem:n,selectionRange:o},ac=!1,bn=r;bn!==null;)if(r=bn,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,bn=n;else for(;bn!==null;){switch(r=bn,g=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=r,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var lt=Fs(o.type,p,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(lt,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(nt){Zt(o,o.return,nt)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)sd(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":sd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,bn=n;break}bn=r.return}}function $_(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Qr(n,o),u&4&&ol(5,o);break;case 1:if(Qr(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){Zt(o,o.return,E)}else{var p=Fs(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(p,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){Zt(o,o.return,E)}}u&64&&q_(o),u&512&&ll(o,o.return);break;case 3:if(Qr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{Pg(n,r)}catch(E){Zt(o,o.return,E)}}break;case 27:r===null&&u&4&&Q_(o);case 26:case 5:Qr(n,o),r===null&&u&4&&Z_(o),u&512&&ll(o,o.return);break;case 12:Qr(n,o);break;case 13:Qr(n,o),u&4&&nv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=ZS.bind(null,o),dE(n,o))));break;case 22:if(u=o.memoizedState!==null||xr,!u){r=r!==null&&r.memoizedState!==null||dn,p=xr;var g=dn;xr=u,(dn=r)&&!g?Jr(n,o,(o.subtreeFlags&8772)!==0):Qr(n,o),xr=p,dn=g}break;case 30:break;default:Qr(n,o)}}function ev(n){var r=n.alternate;r!==null&&(n.alternate=null,ev(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&ki(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var nn=null,Qn=!1;function Mr(n,r,o){for(o=o.child;o!==null;)tv(n,r,o),o=o.sibling}function tv(n,r,o){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(fe,o)}catch{}switch(o.tag){case 26:dn||ji(o,r),Mr(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:dn||ji(o,r);var u=nn,p=Qn;rs(o.type)&&(nn=o.stateNode,Qn=!1),Mr(n,r,o),_l(o.stateNode),nn=u,Qn=p;break;case 5:dn||ji(o,r);case 6:if(u=nn,p=Qn,nn=null,Mr(n,r,o),nn=u,Qn=p,nn!==null)if(Qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(o.stateNode)}catch(g){Zt(o,r,g)}else try{nn.removeChild(o.stateNode)}catch(g){Zt(o,r,g)}break;case 18:nn!==null&&(Qn?(n=nn,kv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Al(n)):kv(nn,o.stateNode));break;case 4:u=nn,p=Qn,nn=o.stateNode.containerInfo,Qn=!0,Mr(n,r,o),nn=u,Qn=p;break;case 0:case 11:case 14:case 15:dn||Kr(2,o,r),dn||Kr(4,o,r),Mr(n,r,o);break;case 1:dn||(ji(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&j_(o,r,u)),Mr(n,r,o);break;case 21:Mr(n,r,o);break;case 22:dn=(u=dn)||o.memoizedState!==null,Mr(n,r,o),dn=u;break;default:Mr(n,r,o)}}function nv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Al(n)}catch(o){Zt(r,r.return,o)}}function VS(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new J_),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new J_),r;default:throw Error(i(435,n.tag))}}function Uf(n,r){var o=VS(n);r.forEach(function(u){var p=KS.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}function ni(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=n,E=r,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){nn=R.stateNode,Qn=!1;break e}break;case 5:nn=R.stateNode,Qn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(nn===null)throw Error(i(160));tv(g,E,p),nn=null,Qn=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)iv(r,n),r=r.sibling}var Di=null;function iv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ni(r,n),ii(n),u&4&&(Kr(3,n,n.return),ol(3,n),Kr(5,n,n.return));break;case 1:ni(r,n),ii(n),u&512&&(dn||o===null||ji(o,o.return)),u&64&&xr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Di;if(ni(r,n),ii(n),u&512&&(dn||o===null||ji(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[bi]||g[an]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),On(g,u,o),g[an]=n,on(g),u=g;break e;case"link":var E=Qv("link","href",p).get(u+(o.href||""));if(E){for(var R=0;R<E.length;R++)if(g=E[R],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(R,1);break t}}g=p.createElement(u),On(g,u,o),p.head.appendChild(g);break;case"meta":if(E=Qv("meta","content",p).get(u+(o.content||""))){for(R=0;R<E.length;R++)if(g=E[R],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(R,1);break t}}g=p.createElement(u),On(g,u,o),p.head.appendChild(g);break;default:throw Error(i(468,u))}g[an]=n,on(g),u=g}n.stateNode=u}else Jv(p,n.type,n.stateNode);else n.stateNode=Kv(p,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?Jv(p,n.type,n.stateNode):Kv(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&wf(n,n.memoizedProps,o.memoizedProps)}break;case 27:ni(r,n),ii(n),u&512&&(dn||o===null||ji(o,o.return)),o!==null&&u&4&&wf(n,n.memoizedProps,o.memoizedProps);break;case 5:if(ni(r,n),ii(n),u&512&&(dn||o===null||ji(o,o.return)),n.flags&32){p=n.stateNode;try{Xi(p,"")}catch(oe){Zt(n,n.return,oe)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,wf(n,p,o!==null?o.memoizedProps:p)),u&1024&&(Df=!0);break;case 6:if(ni(r,n),ii(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(oe){Zt(n,n.return,oe)}}break;case 3:if(ic=null,p=Di,Di=tc(r.containerInfo),ni(r,n),Di=p,ii(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Al(r.containerInfo)}catch(oe){Zt(n,n.return,oe)}Df&&(Df=!1,rv(n));break;case 4:u=Di,Di=tc(n.stateNode.containerInfo),ni(r,n),ii(n),Di=u;break;case 12:ni(r,n),ii(n);break;case 13:ni(r,n),ii(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ff=ht()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Uf(n,u)));break;case 22:p=n.memoizedState!==null;var H=o!==null&&o.memoizedState!==null,ne=xr,de=dn;if(xr=ne||p,dn=de||H,ni(r,n),dn=de,xr=ne,ii(n),u&8192)e:for(r=n.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||H||xr||dn||zs(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){H=o=r;try{if(g=H.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(oe){Zt(H,H.return,oe)}}}else if(r.tag===6){if(o===null){H=r;try{H.stateNode.nodeValue=p?"":H.memoizedProps}catch(oe){Zt(H,H.return,oe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Uf(n,o))));break;case 19:ni(r,n),ii(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Uf(n,u)));break;case 30:break;case 21:break;default:ni(r,n),ii(n)}}function ii(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(K_(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,g=Cf(n);Gu(n,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(Xi(E,""),o.flags&=-33);var R=Cf(n);Gu(n,R,E);break;case 3:case 4:var H=o.stateNode.containerInfo,ne=Cf(n);Lf(n,ne,H);break;default:throw Error(i(161))}}catch(de){Zt(n,n.return,de)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function rv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;rv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Qr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)$_(n,r.alternate,r),r=r.sibling}function zs(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Kr(4,r,r.return),zs(r);break;case 1:ji(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&j_(r,r.return,o),zs(r);break;case 27:_l(r.stateNode);case 26:case 5:ji(r,r.return),zs(r);break;case 22:r.memoizedState===null&&zs(r);break;case 30:zs(r);break;default:zs(r)}n=n.sibling}}function Jr(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=n,g=r,E=g.flags;switch(g.tag){case 0:case 11:case 15:Jr(p,g,o),ol(4,g);break;case 1:if(Jr(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ne){Zt(u,u.return,ne)}if(u=g,p=u.updateQueue,p!==null){var R=u.stateNode;try{var H=p.shared.hiddenCallbacks;if(H!==null)for(p.shared.hiddenCallbacks=null,p=0;p<H.length;p++)Ng(H[p],R)}catch(ne){Zt(u,u.return,ne)}}o&&E&64&&q_(g),ll(g,g.return);break;case 27:Q_(g);case 26:case 5:Jr(p,g,o),o&&u===null&&E&4&&Z_(g),ll(g,g.return);break;case 12:Jr(p,g,o);break;case 13:Jr(p,g,o),o&&E&4&&nv(p,g);break;case 22:g.memoizedState===null&&Jr(p,g,o),ll(g,g.return);break;case 30:break;default:Jr(p,g,o)}r=r.sibling}}function Nf(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&qo(o))}function Pf(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&qo(n))}function Zi(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)sv(n,r,o,u),r=r.sibling}function sv(n,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(n,r,o,u),p&2048&&ol(9,r);break;case 1:Zi(n,r,o,u);break;case 3:Zi(n,r,o,u),p&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&qo(n)));break;case 12:if(p&2048){Zi(n,r,o,u),n=r.stateNode;try{var g=r.memoizedProps,E=g.id,R=g.onPostCommit;typeof R=="function"&&R(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Zt(r,r.return,H)}}else Zi(n,r,o,u);break;case 13:Zi(n,r,o,u);break;case 23:break;case 22:g=r.stateNode,E=r.alternate,r.memoizedState!==null?g._visibility&2?Zi(n,r,o,u):ul(n,r):g._visibility&2?Zi(n,r,o,u):(g._visibility|=2,Ca(n,r,o,u,(r.subtreeFlags&10256)!==0)),p&2048&&Nf(E,r);break;case 24:Zi(n,r,o,u),p&2048&&Pf(r.alternate,r);break;default:Zi(n,r,o,u)}}function Ca(n,r,o,u,p){for(p=p&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var g=n,E=r,R=o,H=u,ne=E.flags;switch(E.tag){case 0:case 11:case 15:Ca(g,E,R,H,p),ol(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&2?Ca(g,E,R,H,p):ul(g,E):(de._visibility|=2,Ca(g,E,R,H,p)),p&&ne&2048&&Nf(E.alternate,E);break;case 24:Ca(g,E,R,H,p),p&&ne&2048&&Pf(E.alternate,E);break;default:Ca(g,E,R,H,p)}r=r.sibling}}function ul(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,p=u.flags;switch(u.tag){case 22:ul(o,u),p&2048&&Nf(u.alternate,u);break;case 24:ul(o,u),p&2048&&Pf(u.alternate,u);break;default:ul(o,u)}r=r.sibling}}var cl=8192;function La(n){if(n.subtreeFlags&cl)for(n=n.child;n!==null;)av(n),n=n.sibling}function av(n){switch(n.tag){case 26:La(n),n.flags&cl&&n.memoizedState!==null&&bE(Di,n.memoizedState,n.memoizedProps);break;case 5:La(n);break;case 3:case 4:var r=Di;Di=tc(n.stateNode.containerInfo),La(n),Di=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=cl,cl=16777216,La(n),cl=r):La(n));break;default:La(n)}}function ov(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function hl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];bn=u,uv(u,n)}ov(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lv(n),n=n.sibling}function lv(n){switch(n.tag){case 0:case 11:case 15:hl(n),n.flags&2048&&Kr(9,n,n.return);break;case 3:hl(n);break;case 12:hl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,ku(n)):hl(n);break;default:hl(n)}}function ku(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];bn=u,uv(u,n)}ov(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Kr(8,r,r.return),ku(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,ku(r));break;default:ku(r)}n=n.sibling}}function uv(n,r){for(;bn!==null;){var o=bn;switch(o.tag){case 0:case 11:case 15:Kr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:qo(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,bn=u;else e:for(o=n;bn!==null;){u=bn;var p=u.sibling,g=u.return;if(ev(u),u===o){bn=null;break e}if(p!==null){p.return=g,bn=p;break e}bn=g}}}var GS={getCacheForType:function(n){var r=Fn(yn),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},kS=typeof WeakMap=="function"?WeakMap:Map,zt=0,Jt=null,Tt=null,wt=0,Ht=0,ri=null,$r=!1,Da=!1,Of=!1,Sr=0,un=0,es=0,Hs=0,If=0,mi=0,Ua=0,fl=null,Jn=null,Bf=!1,Ff=0,Wu=1/0,Xu=null,ts=null,Pn=0,ns=null,Na=null,Pa=0,zf=0,Hf=null,cv=null,dl=0,Vf=null;function si(){if((zt&2)!==0&&wt!==0)return wt&-wt;if(z.T!==null){var n=Ma;return n!==0?n:jf()}return mt()}function hv(){mi===0&&(mi=(wt&536870912)===0||Pt?V():536870912);var n=pi.current;return n!==null&&(n.flags|=32),mi}function ai(n,r,o){(n===Jt&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)&&(Oa(n,0),is(n,wt,mi,!1)),Ne(n,o),((zt&2)===0||n!==Jt)&&(n===Jt&&((zt&2)===0&&(Hs|=o),un===4&&is(n,wt,mi,!1)),Ki(n))}function fv(n,r,o){if((zt&6)!==0)throw Error(i(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||te(n,r),p=u?YS(n,r):Wf(n,r,!0),g=u;do{if(p===0){Da&&!u&&is(n,r,0,!1);break}else{if(o=n.current.alternate,g&&!WS(o)){p=Wf(n,r,!1),g=!1;continue}if(p===2){if(g=r,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var R=n;p=fl;var H=R.current.memoizedState.isDehydrated;if(H&&(Oa(R,E).flags|=256),E=Wf(R,E,!1),E!==2){if(Of&&!H){R.errorRecoveryDisabledLanes|=g,Hs|=g,p=4;break e}g=Jn,Jn=p,g!==null&&(Jn===null?Jn=g:Jn.push.apply(Jn,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){Oa(n,0),is(n,r,0,!0);break}e:{switch(u=n,g=p,g){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:is(u,r,mi,!$r);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(p=Ff+300-ht(),10<p)){if(is(u,r,mi,!$r),W(u,0,!0)!==0)break e;u.timeoutHandle=Vv(dv.bind(null,u,o,Jn,Xu,Bf,r,mi,Hs,Ua,$r,g,2,-0,0),p);break e}dv(u,o,Jn,Xu,Bf,r,mi,Hs,Ua,$r,g,0,-0,0)}}break}while(!0);Ki(n)}function dv(n,r,o,u,p,g,E,R,H,ne,de,xe,ae,oe){if(n.timeoutHandle=-1,xe=r.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(xl={stylesheets:null,count:0,unsuspend:AE},av(r),xe=RE(),xe!==null)){n.cancelPendingCommit=xe(xv.bind(null,n,r,g,o,u,p,E,R,H,de,1,ae,oe)),is(n,g,E,!ne);return}xv(n,r,g,o,u,p,E,R,H)}function WS(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!ei(g(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function is(n,r,o,u){r&=~If,r&=~Hs,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var p=r;0<p;){var g=31-Fe(p),E=1<<g;u[g]=-1,p&=~E}o!==0&&ge(n,o,r)}function Yu(){return(zt&6)===0?(pl(0),!1):!0}function Gf(){if(Tt!==null){if(Ht===0)var n=Tt.return;else n=Tt,pr=Ps=null,sf(n),Ra=null,rl=0,n=Tt;for(;n!==null;)Y_(n.alternate,n),n=n.return;Tt=null}}function Oa(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,lE(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Gf(),Jt=n,Tt=o=hr(n.current,null),wt=r,Ht=0,ri=null,$r=!1,Da=te(n,r),Of=!1,Ua=mi=If=Hs=es=un=0,Jn=fl=null,Bf=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var p=31-Fe(u),g=1<<p;r|=n[p],u&=~g}return Sr=r,pu(),o}function pv(n,r){yt=null,z.H=Nu,r===Zo||r===Eu?(r=Dg(),Ht=3):r===wg?(r=Dg(),Ht=4):Ht=r===U_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ri=r,Tt===null&&(un=1,Fu(n,ci(r,n.current)))}function mv(){var n=z.H;return z.H=Nu,n===null?Nu:n}function gv(){var n=z.A;return z.A=GS,n}function kf(){un=4,$r||(wt&4194048)!==wt&&pi.current!==null||(Da=!0),(es&134217727)===0&&(Hs&134217727)===0||Jt===null||is(Jt,wt,mi,!1)}function Wf(n,r,o){var u=zt;zt|=2;var p=mv(),g=gv();(Jt!==n||wt!==r)&&(Xu=null,Oa(n,r)),r=!1;var E=un;e:do try{if(Ht!==0&&Tt!==null){var R=Tt,H=ri;switch(Ht){case 8:Gf(),E=6;break e;case 3:case 2:case 9:case 6:pi.current===null&&(r=!0);var ne=Ht;if(Ht=0,ri=null,Ia(n,R,H,ne),o&&Da){E=0;break e}break;default:ne=Ht,Ht=0,ri=null,Ia(n,R,H,ne)}}XS(),E=un;break}catch(de){pv(n,de)}while(!0);return r&&n.shellSuspendCounter++,pr=Ps=null,zt=u,z.H=p,z.A=g,Tt===null&&(Jt=null,wt=0,pu()),E}function XS(){for(;Tt!==null;)_v(Tt)}function YS(n,r){var o=zt;zt|=2;var u=mv(),p=gv();Jt!==n||wt!==r?(Xu=null,Wu=ht()+500,Oa(n,r)):Da=te(n,r);e:do try{if(Ht!==0&&Tt!==null){r=Tt;var g=ri;t:switch(Ht){case 1:Ht=0,ri=null,Ia(n,r,g,1);break;case 2:case 9:if(Cg(g)){Ht=0,ri=null,vv(r);break}r=function(){Ht!==2&&Ht!==9||Jt!==n||(Ht=7),Ki(n)},g.then(r,r);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Cg(g)?(Ht=0,ri=null,vv(r)):(Ht=0,ri=null,Ia(n,r,g,7));break;case 5:var E=null;switch(Tt.tag){case 26:E=Tt.memoizedState;case 5:case 27:var R=Tt;if(!E||$v(E)){Ht=0,ri=null;var H=R.sibling;if(H!==null)Tt=H;else{var ne=R.return;ne!==null?(Tt=ne,qu(ne)):Tt=null}break t}}Ht=0,ri=null,Ia(n,r,g,5);break;case 6:Ht=0,ri=null,Ia(n,r,g,6);break;case 8:Gf(),un=6;break e;default:throw Error(i(462))}}qS();break}catch(de){pv(n,de)}while(!0);return pr=Ps=null,z.H=u,z.A=p,zt=o,Tt!==null?0:(Jt=null,wt=0,pu(),un)}function qS(){for(;Tt!==null&&!sn();)_v(Tt)}function _v(n){var r=W_(n.alternate,n,Sr);n.memoizedProps=n.pendingProps,r===null?qu(n):Tt=r}function vv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=F_(o,r,r.pendingProps,r.type,void 0,wt);break;case 11:r=F_(o,r,r.pendingProps,r.type.render,r.ref,wt);break;case 5:sf(r);default:Y_(o,r),r=Tt=yg(r,Sr),r=W_(o,r,Sr)}n.memoizedProps=n.pendingProps,r===null?qu(n):Tt=r}function Ia(n,r,o,u){pr=Ps=null,sf(r),Ra=null,rl=0;var p=r.return;try{if(IS(n,p,r,o,wt)){un=1,Fu(n,ci(o,n.current)),Tt=null;return}}catch(g){if(p!==null)throw Tt=p,g;un=1,Fu(n,ci(o,n.current)),Tt=null;return}r.flags&32768?(Pt||u===1?n=!0:Da||(wt&536870912)!==0?n=!1:($r=n=!0,(u===2||u===9||u===3||u===6)&&(u=pi.current,u!==null&&u.tag===13&&(u.flags|=16384))),yv(r,n)):qu(r)}function qu(n){var r=n;do{if((r.flags&32768)!==0){yv(r,$r);return}n=r.return;var o=FS(r.alternate,r,Sr);if(o!==null){Tt=o;return}if(r=r.sibling,r!==null){Tt=r;return}Tt=r=n}while(r!==null);un===0&&(un=5)}function yv(n,r){do{var o=zS(n.alternate,n);if(o!==null){o.flags&=32767,Tt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Tt=n;return}Tt=n=o}while(n!==null);un=6,Tt=null}function xv(n,r,o,u,p,g,E,R,H){n.cancelPendingCommit=null;do ju();while(Pn!==0);if((zt&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(g=r.lanes|r.childLanes,g|=Nh,be(n,o,g,E,R,H),n===Jt&&(Tt=Jt=null,wt=0),Na=r,ns=n,Pa=o,zf=g,Hf=p,cv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,QS(rt,function(){return Av(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,p=j.p,j.p=2,E=zt,zt|=4;try{HS(n,r,o)}finally{zt=E,j.p=p,z.T=u}}Pn=1,Mv(),Sv(),Ev()}}function Mv(){if(Pn===1){Pn=0;var n=ns,r=Na,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=j.p;j.p=2;var p=zt;zt|=4;try{iv(r,n);var g=nd,E=ug(n.containerInfo),R=g.focusedElem,H=g.selectionRange;if(E!==R&&R&&R.ownerDocument&&lg(R.ownerDocument.documentElement,R)){if(H!==null&&wh(R)){var ne=H.start,de=H.end;if(de===void 0&&(de=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(de,R.value.length);else{var xe=R.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var oe=ae.getSelection(),lt=R.textContent.length,nt=Math.min(H.start,lt),Xt=H.end===void 0?nt:Math.min(H.end,lt);!oe.extend&&nt>Xt&&(E=Xt,Xt=nt,nt=E);var K=og(R,nt),Y=og(R,Xt);if(K&&Y&&(oe.rangeCount!==1||oe.anchorNode!==K.node||oe.anchorOffset!==K.offset||oe.focusNode!==Y.node||oe.focusOffset!==Y.offset)){var $=xe.createRange();$.setStart(K.node,K.offset),oe.removeAllRanges(),nt>Xt?(oe.addRange($),oe.extend(Y.node,Y.offset)):($.setEnd(Y.node,Y.offset),oe.addRange($))}}}}for(xe=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&xe.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}ac=!!td,nd=td=null}finally{zt=p,j.p=u,z.T=o}}n.current=r,Pn=2}}function Sv(){if(Pn===2){Pn=0;var n=ns,r=Na,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=j.p;j.p=2;var p=zt;zt|=4;try{$_(n,r.alternate,r)}finally{zt=p,j.p=u,z.T=o}}Pn=3}}function Ev(){if(Pn===4||Pn===3){Pn=0,Mt();var n=ns,r=Na,o=Pa,u=cv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Pn=5:(Pn=0,Na=ns=null,Tv(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(ts=null),vt(o),r=r.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(fe,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=z.T,p=j.p,j.p=2,z.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var R=u[E];g(R.value,{componentStack:R.stack})}}finally{z.T=r,j.p=p}}(Pa&3)!==0&&ju(),Ki(n),p=n.pendingLanes,(o&4194090)!==0&&(p&42)!==0?n===Vf?dl++:(dl=0,Vf=n):dl=0,pl(0)}}function Tv(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,qo(r)))}function ju(n){return Mv(),Sv(),Ev(),Av()}function Av(){if(Pn!==5)return!1;var n=ns,r=zf;zf=0;var o=vt(Pa),u=z.T,p=j.p;try{j.p=32>o?32:o,z.T=null,o=Hf,Hf=null;var g=ns,E=Pa;if(Pn=0,Na=ns=null,Pa=0,(zt&6)!==0)throw Error(i(331));var R=zt;if(zt|=4,lv(g.current),sv(g,g.current,E,o),zt=R,pl(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(fe,g)}catch{}return!0}finally{j.p=p,z.T=u,Tv(n,r)}}function bv(n,r,o){r=ci(o,r),r=yf(n.stateNode,r,2),n=Yr(n,r,2),n!==null&&(Ne(n,2),Ki(n))}function Zt(n,r,o){if(n.tag===3)bv(n,n,o);else for(;r!==null;){if(r.tag===3){bv(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ts===null||!ts.has(u))){n=ci(o,n),o=L_(2),u=Yr(r,o,2),u!==null&&(D_(o,u,r,n),Ne(u,2),Ki(u));break}}r=r.return}}function Xf(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new kS;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(Of=!0,p.add(o),n=jS.bind(null,n,r,o),r.then(n,n))}function jS(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Jt===n&&(wt&o)===o&&(un===4||un===3&&(wt&62914560)===wt&&300>ht()-Ff?(zt&2)===0&&Oa(n,0):If|=o,Ua===wt&&(Ua=0)),Ki(n)}function Rv(n,r){r===0&&(r=we()),n=_a(n,r),n!==null&&(Ne(n,r),Ki(n))}function ZS(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Rv(n,o)}function KS(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),Rv(n,o)}function QS(n,r){return ft(n,r)}var Zu=null,Ba=null,Yf=!1,Ku=!1,qf=!1,Vs=0;function Ki(n){n!==Ba&&n.next===null&&(Ba===null?Zu=Ba=n:Ba=Ba.next=n),Ku=!0,Yf||(Yf=!0,$S())}function pl(n,r){if(!qf&&Ku){qf=!0;do for(var o=!1,u=Zu;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var E=u.suspendedLanes,R=u.pingedLanes;g=(1<<31-Fe(42|n)+1)-1,g&=p&~(E&~R),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Dv(u,g))}else g=wt,g=W(u,u===Jt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||te(u,g)||(o=!0,Dv(u,g));u=u.next}while(o);qf=!1}}function JS(){wv()}function wv(){Ku=Yf=!1;var n=0;Vs!==0&&(oE()&&(n=Vs),Vs=0);for(var r=ht(),o=null,u=Zu;u!==null;){var p=u.next,g=Cv(u,r);g===0?(u.next=null,o===null?Zu=p:o.next=p,p===null&&(Ba=o)):(o=u,(n!==0||(g&3)!==0)&&(Ku=!0)),u=p}pl(n)}function Cv(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Fe(g),R=1<<E,H=p[E];H===-1?((R&o)===0||(R&u)!==0)&&(p[E]=Re(R,r)):H<=r&&(n.expiredLanes|=R),g&=~R}if(r=Jt,o=wt,o=W(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&X(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||te(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&X(u),vt(o)){case 2:case 8:o=Ye;break;case 32:o=rt;break;case 268435456:o=I;break;default:o=rt}return u=Lv.bind(null,n),o=ft(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&X(u),n.callbackPriority=2,n.callbackNode=null,2}function Lv(n,r){if(Pn!==0&&Pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(ju()&&n.callbackNode!==o)return null;var u=wt;return u=W(n,n===Jt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(fv(n,u,r),Cv(n,ht()),n.callbackNode!=null&&n.callbackNode===o?Lv.bind(null,n):null)}function Dv(n,r){if(ju())return null;fv(n,r,!0)}function $S(){uE(function(){(zt&6)!==0?ft(dt,JS):wv()})}function jf(){return Vs===0&&(Vs=V()),Vs}function Uv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ou(""+n)}function Nv(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function eE(n,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var g=Uv((p[_n]||null).action),E=u.submitter;E&&(r=(r=E[_n]||null)?Uv(r.formAction):E.getAttribute("formAction"),r!==null&&(g=r,E=null));var R=new hu("action","action",null,u,p);n.push({event:R,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Vs!==0){var H=E?Nv(p,E):new FormData(p);pf(o,{pending:!0,data:H,method:p.method,action:g},null,H)}}else typeof g=="function"&&(R.preventDefault(),H=E?Nv(p,E):new FormData(p),pf(o,{pending:!0,data:H,method:p.method,action:g},g,H))},currentTarget:p}]})}}for(var Zf=0;Zf<Uh.length;Zf++){var Kf=Uh[Zf],tE=Kf.toLowerCase(),nE=Kf[0].toUpperCase()+Kf.slice(1);Li(tE,"on"+nE)}Li(fg,"onAnimationEnd"),Li(dg,"onAnimationIteration"),Li(pg,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(yS,"onTransitionRun"),Li(xS,"onTransitionStart"),Li(MS,"onTransitionCancel"),Li(mg,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function Pv(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var R=u[E],H=R.instance,ne=R.currentTarget;if(R=R.listener,H!==g&&p.isPropagationStopped())break e;g=R,p.currentTarget=ne;try{g(p)}catch(de){Bu(de)}p.currentTarget=null,g=H}else for(E=0;E<u.length;E++){if(R=u[E],H=R.instance,ne=R.currentTarget,R=R.listener,H!==g&&p.isPropagationStopped())break e;g=R,p.currentTarget=ne;try{g(p)}catch(de){Bu(de)}p.currentTarget=null,g=H}}}}function At(n,r){var o=r[sr];o===void 0&&(o=r[sr]=new Set);var u=n+"__bubble";o.has(u)||(Ov(r,n,2,!1),o.add(u))}function Qf(n,r,o){var u=0;r&&(u|=4),Ov(o,n,u,r)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Jf(n){if(!n[Qu]){n[Qu]=!0,ca.forEach(function(o){o!=="selectionchange"&&(iE.has(o)||Qf(o,!1,n),Qf(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qu]||(r[Qu]=!0,Qf("selectionchange",!1,r))}}function Ov(n,r,o,u){switch(s0(r)){case 2:var p=LE;break;case 8:p=DE;break;default:p=fd}o=p.bind(null,r,o,n),p=void 0,!yh||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function $f(n,r,o,u,p){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var R=u.stateNode.containerInfo;if(R===p)break;if(E===4)for(E=u.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;R!==null;){if(E=Ri(R),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){u=g=E;continue e}R=R.parentNode}}u=u.return}Gm(function(){var ne=g,de=_h(o),xe=[];e:{var ae=gg.get(n);if(ae!==void 0){var oe=hu,lt=n;switch(n){case"keypress":if(uu(o)===0)break e;case"keydown":case"keyup":oe=QM;break;case"focusin":lt="focus",oe=Eh;break;case"focusout":lt="blur",oe=Eh;break;case"beforeblur":case"afterblur":oe=Eh;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=zM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=eS;break;case fg:case dg:case pg:oe=GM;break;case mg:oe=nS;break;case"scroll":case"scrollend":oe=BM;break;case"wheel":oe=rS;break;case"copy":case"cut":case"paste":oe=WM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=qm;break;case"toggle":case"beforetoggle":oe=aS}var nt=(r&4)!==0,Xt=!nt&&(n==="scroll"||n==="scrollend"),K=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var Y=ne,$;Y!==null;){var ve=Y;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||K===null||(ve=Po(Y,K),ve!=null&&nt.push(gl(Y,ve,$))),Xt)break;Y=Y.return}0<nt.length&&(ae=new oe(ae,lt,null,o,de),xe.push({event:ae,listeners:nt}))}}if((r&7)===0){e:{if(ae=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",ae&&o!==gh&&(lt=o.relatedTarget||o.fromElement)&&(Ri(lt)||lt[In]))break e;if((oe||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,oe?(lt=o.relatedTarget||o.toElement,oe=ne,lt=lt?Ri(lt):null,lt!==null&&(Xt=l(lt),nt=lt.tag,lt!==Xt||nt!==5&&nt!==27&&nt!==6)&&(lt=null)):(oe=null,lt=ne),oe!==lt)){if(nt=Xm,ve="onMouseLeave",K="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(nt=qm,ve="onPointerLeave",K="onPointerEnter",Y="pointer"),Xt=oe==null?ae:ar(oe),$=lt==null?ae:ar(lt),ae=new nt(ve,Y+"leave",oe,o,de),ae.target=Xt,ae.relatedTarget=$,ve=null,Ri(de)===ne&&(nt=new nt(K,Y+"enter",lt,o,de),nt.target=$,nt.relatedTarget=Xt,ve=nt),Xt=ve,oe&&lt)t:{for(nt=oe,K=lt,Y=0,$=nt;$;$=Fa($))Y++;for($=0,ve=K;ve;ve=Fa(ve))$++;for(;0<Y-$;)nt=Fa(nt),Y--;for(;0<$-Y;)K=Fa(K),$--;for(;Y--;){if(nt===K||K!==null&&nt===K.alternate)break t;nt=Fa(nt),K=Fa(K)}nt=null}else nt=null;oe!==null&&Iv(xe,ae,oe,nt,!1),lt!==null&&Xt!==null&&Iv(xe,Xt,lt,nt,!0)}}e:{if(ae=ne?ar(ne):window,oe=ae.nodeName&&ae.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ae.type==="file")var ke=tg;else if($m(ae))if(ng)ke=gS;else{ke=pS;var Et=dS}else oe=ae.nodeName,!oe||oe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&mh(ne.elementType)&&(ke=tg):ke=mS;if(ke&&(ke=ke(n,ne))){eg(xe,ke,o,de);break e}Et&&Et(n,ae,ne),n==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&Bn(ae,"number",ae.value)}switch(Et=ne?ar(ne):window,n){case"focusin":($m(Et)||Et.contentEditable==="true")&&(pa=Et,Ch=ne,Go=null);break;case"focusout":Go=Ch=pa=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,cg(xe,o,de);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":cg(xe,o,de)}var Ze;if(Ah)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else da?Qm(n,o)&&(st="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(jm&&o.locale!=="ko"&&(da||st!=="onCompositionStart"?st==="onCompositionEnd"&&da&&(Ze=km()):(Gr=de,xh="value"in Gr?Gr.value:Gr.textContent,da=!0)),Et=Ju(ne,st),0<Et.length&&(st=new Ym(st,n,null,o,de),xe.push({event:st,listeners:Et}),Ze?st.data=Ze:(Ze=Jm(o),Ze!==null&&(st.data=Ze)))),(Ze=lS?uS(n,o):cS(n,o))&&(st=Ju(ne,"onBeforeInput"),0<st.length&&(Et=new Ym("onBeforeInput","beforeinput",null,o,de),xe.push({event:Et,listeners:st}),Et.data=Ze)),eE(xe,n,ne,o,de)}Pv(xe,r)})}function gl(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Ju(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Po(n,o),p!=null&&u.unshift(gl(n,p,g)),p=Po(n,r),p!=null&&u.push(gl(n,p,g))),n.tag===3)return u;n=n.return}return[]}function Fa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Iv(n,r,o,u,p){for(var g=r._reactName,E=[];o!==null&&o!==u;){var R=o,H=R.alternate,ne=R.stateNode;if(R=R.tag,H!==null&&H===u)break;R!==5&&R!==26&&R!==27||ne===null||(H=ne,p?(ne=Po(o,g),ne!=null&&E.unshift(gl(o,ne,H))):p||(ne=Po(o,g),ne!=null&&E.push(gl(o,ne,H)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var rE=/\r\n?/g,sE=/\u0000|\uFFFD/g;function Bv(n){return(typeof n=="string"?n:""+n).replace(rE,`
`).replace(sE,"")}function Fv(n,r){return r=Bv(r),Bv(n)===r}function $u(){}function Wt(n,r,o,u,p,g){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Xi(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Xi(n,""+u);break;case"className":Ie(n,"class",u);break;case"tabIndex":Ie(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(n,o,u);break;case"style":Hm(n,u,g);break;case"data":if(r!=="object"){Ie(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=ou(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&Wt(n,r,"name",p.name,p,null),Wt(n,r,"formEncType",p.formEncType,p,null),Wt(n,r,"formMethod",p.formMethod,p,null),Wt(n,r,"formTarget",p.formTarget,p,null)):(Wt(n,r,"encType",p.encType,p,null),Wt(n,r,"method",p.method,p,null),Wt(n,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=ou(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=$u);break;case"onScroll":u!=null&&At("scroll",n);break;case"onScrollEnd":u!=null&&At("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=ou(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":At("beforetoggle",n),At("toggle",n),Ce(n,"popover",u);break;case"xlinkActuate":ze(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":ze(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":ze(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":ze(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":ze(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":ze(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":ze(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":ze(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":ze(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ce(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=OM.get(o)||o,Ce(n,o,u))}}function ed(n,r,o,u,p,g){switch(o){case"style":Hm(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Xi(n,u):(typeof u=="number"||typeof u=="bigint")&&Xi(n,""+u);break;case"onScroll":u!=null&&At("scroll",n);break;case"onScrollEnd":u!=null&&At("scrollend",n);break;case"onClick":u!=null&&(n.onclick=$u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!or.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),g=n[_n]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(r,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,p);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ce(n,o,u)}}}function On(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",n),At("load",n);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Wt(n,r,g,E,o,null)}}p&&Wt(n,r,"srcSet",o.srcSet,o,null),u&&Wt(n,r,"src",o.src,o,null);return;case"input":At("invalid",n);var R=g=E=p=null,H=null,ne=null;for(u in o)if(o.hasOwnProperty(u)){var de=o[u];if(de!=null)switch(u){case"name":p=de;break;case"type":E=de;break;case"checked":H=de;break;case"defaultChecked":ne=de;break;case"value":g=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(i(137,r));break;default:Wt(n,r,u,de,o,null)}}jt(n,g,R,H,ne,E,p,!1),Gt(n);return;case"select":At("invalid",n),u=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(R=o[p],R!=null))switch(p){case"value":g=R;break;case"defaultValue":E=R;break;case"multiple":u=R;default:Wt(n,r,p,R,o,null)}r=g,o=E,n.multiple=!!u,r!=null?vn(n,!!u,r,!1):o!=null&&vn(n,!!u,o,!0);return;case"textarea":At("invalid",n),g=p=u=null;for(E in o)if(o.hasOwnProperty(E)&&(R=o[E],R!=null))switch(E){case"value":u=R;break;case"defaultValue":p=R;break;case"children":g=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(i(91));break;default:Wt(n,r,E,R,o,null)}Un(n,u,p,g),Gt(n);return;case"option":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Wt(n,r,H,u,o,null)}return;case"dialog":At("beforetoggle",n),At("toggle",n),At("cancel",n),At("close",n);break;case"iframe":case"object":At("load",n);break;case"video":case"audio":for(u=0;u<ml.length;u++)At(ml[u],n);break;case"image":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"embed":case"source":case"link":At("error",n),At("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in o)if(o.hasOwnProperty(ne)&&(u=o[ne],u!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:Wt(n,r,ne,u,o,null)}return;default:if(mh(r)){for(de in o)o.hasOwnProperty(de)&&(u=o[de],u!==void 0&&ed(n,r,de,u,o,void 0));return}}for(R in o)o.hasOwnProperty(R)&&(u=o[R],u!=null&&Wt(n,r,R,u,o,null))}function aE(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,R=null,H=null,ne=null,de=null;for(oe in o){var xe=o[oe];if(o.hasOwnProperty(oe)&&xe!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":H=xe;default:u.hasOwnProperty(oe)||Wt(n,r,oe,null,u,xe)}}for(var ae in u){var oe=u[ae];if(xe=o[ae],u.hasOwnProperty(ae)&&(oe!=null||xe!=null))switch(ae){case"type":g=oe;break;case"name":p=oe;break;case"checked":ne=oe;break;case"defaultChecked":de=oe;break;case"value":E=oe;break;case"defaultValue":R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(i(137,r));break;default:oe!==xe&&Wt(n,r,ae,oe,u,xe)}}lr(n,E,R,H,ne,de,g,p);return;case"select":oe=E=R=ae=null;for(g in o)if(H=o[g],o.hasOwnProperty(g)&&H!=null)switch(g){case"value":break;case"multiple":oe=H;default:u.hasOwnProperty(g)||Wt(n,r,g,null,u,H)}for(p in u)if(g=u[p],H=o[p],u.hasOwnProperty(p)&&(g!=null||H!=null))switch(p){case"value":ae=g;break;case"defaultValue":R=g;break;case"multiple":E=g;default:g!==H&&Wt(n,r,p,g,u,H)}r=R,o=E,u=oe,ae!=null?vn(n,!!o,ae,!1):!!u!=!!o&&(r!=null?vn(n,!!o,r,!0):vn(n,!!o,o?[]:"",!1));return;case"textarea":oe=ae=null;for(R in o)if(p=o[R],o.hasOwnProperty(R)&&p!=null&&!u.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(n,r,R,null,u,p)}for(E in u)if(p=u[E],g=o[E],u.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":ae=p;break;case"defaultValue":oe=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&Wt(n,r,E,p,u,g)}Tn(n,ae,oe);return;case"option":for(var lt in o)if(ae=o[lt],o.hasOwnProperty(lt)&&ae!=null&&!u.hasOwnProperty(lt))switch(lt){case"selected":n.selected=!1;break;default:Wt(n,r,lt,null,u,ae)}for(H in u)if(ae=u[H],oe=o[H],u.hasOwnProperty(H)&&ae!==oe&&(ae!=null||oe!=null))switch(H){case"selected":n.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Wt(n,r,H,ae,u,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in o)ae=o[nt],o.hasOwnProperty(nt)&&ae!=null&&!u.hasOwnProperty(nt)&&Wt(n,r,nt,null,u,ae);for(ne in u)if(ae=u[ne],oe=o[ne],u.hasOwnProperty(ne)&&ae!==oe&&(ae!=null||oe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(i(137,r));break;default:Wt(n,r,ne,ae,u,oe)}return;default:if(mh(r)){for(var Xt in o)ae=o[Xt],o.hasOwnProperty(Xt)&&ae!==void 0&&!u.hasOwnProperty(Xt)&&ed(n,r,Xt,void 0,u,ae);for(de in u)ae=u[de],oe=o[de],!u.hasOwnProperty(de)||ae===oe||ae===void 0&&oe===void 0||ed(n,r,de,ae,u,oe);return}}for(var K in o)ae=o[K],o.hasOwnProperty(K)&&ae!=null&&!u.hasOwnProperty(K)&&Wt(n,r,K,null,u,ae);for(xe in u)ae=u[xe],oe=o[xe],!u.hasOwnProperty(xe)||ae===oe||ae==null&&oe==null||Wt(n,r,xe,ae,u,oe)}var td=null,nd=null;function ec(n){return n.nodeType===9?n:n.ownerDocument}function zv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function id(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rd=null;function oE(){var n=window.event;return n&&n.type==="popstate"?n===rd?!1:(rd=n,!0):(rd=null,!1)}var Vv=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,Gv=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gv<"u"?function(n){return Gv.resolve(null).then(n).catch(cE)}:Vv;function cE(n){setTimeout(function(){throw n})}function rs(n){return n==="head"}function kv(n,r){var o=r,u=0,p=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&_l(E.documentElement),o&2&&_l(E.body),o&4)for(o=E.head,_l(o),E=o.firstChild;E;){var R=E.nextSibling,H=E.nodeName;E[bi]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=R}}if(p===0){n.removeChild(g),Al(r);return}p--}else o==="$"||o==="$?"||o==="$!"?p++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);Al(r)}function sd(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":sd(o),ki(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function hE(n,r,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[bi])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Ui(n.nextSibling),n===null)break}return null}function fE(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ui(n.nextSibling),n===null))return null;return n}function ad(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function dE(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Ui(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var od=null;function Wv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function Xv(n,r,o){switch(r=ec(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function _l(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ki(n)}var gi=new Map,Yv=new Set;function tc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Er=j.d;j.d={f:pE,r:mE,D:gE,C:_E,L:vE,m:yE,X:ME,S:xE,M:SE};function pE(){var n=Er.f(),r=Yu();return n||r}function mE(n){var r=Wi(n);r!==null&&r.tag===5&&r.type==="form"?f_(r):Er.r(n)}var za=typeof document>"u"?null:document;function qv(n,r,o){var u=za;if(u&&typeof r=="string"&&r){var p=Qt(r);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),Yv.has(p)||(Yv.add(p),n={rel:n,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),On(r,"link",n),on(r),u.head.appendChild(r)))}}function gE(n){Er.D(n),qv("dns-prefetch",n,null)}function _E(n,r){Er.C(n,r),qv("preconnect",n,r)}function vE(n,r,o){Er.L(n,r,o);var u=za;if(u&&n&&r){var p='link[rel="preload"][as="'+Qt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Qt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Qt(o.imageSizes)+'"]')):p+='[href="'+Qt(n)+'"]';var g=p;switch(r){case"style":g=Ha(n);break;case"script":g=Va(n)}gi.has(g)||(n=m({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),gi.set(g,n),u.querySelector(p)!==null||r==="style"&&u.querySelector(vl(g))||r==="script"&&u.querySelector(yl(g))||(r=u.createElement("link"),On(r,"link",n),on(r),u.head.appendChild(r)))}}function yE(n,r){Er.m(n,r);var o=za;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+Qt(u)+'"][href="'+Qt(n)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Va(n)}if(!gi.has(g)&&(n=m({rel:"modulepreload",href:n},r),gi.set(g,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yl(g)))return}u=o.createElement("link"),On(u,"link",n),on(u),o.head.appendChild(u)}}}function xE(n,r,o){Er.S(n,r,o);var u=za;if(u&&n){var p=wi(u).hoistableStyles,g=Ha(n);r=r||"default";var E=p.get(g);if(!E){var R={loading:0,preload:null};if(E=u.querySelector(vl(g)))R.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":r},o),(o=gi.get(g))&&ld(n,o);var H=E=u.createElement("link");on(H),On(H,"link",n),H._p=new Promise(function(ne,de){H.onload=ne,H.onerror=de}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:R},p.set(g,E)}}}function ME(n,r){Er.X(n,r);var o=za;if(o&&n){var u=wi(o).hoistableScripts,p=Va(n),g=u.get(p);g||(g=o.querySelector(yl(p)),g||(n=m({src:n,async:!0},r),(r=gi.get(p))&&ud(n,r),g=o.createElement("script"),on(g),On(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function SE(n,r){Er.M(n,r);var o=za;if(o&&n){var u=wi(o).hoistableScripts,p=Va(n),g=u.get(p);g||(g=o.querySelector(yl(p)),g||(n=m({src:n,async:!0,type:"module"},r),(r=gi.get(p))&&ud(n,r),g=o.createElement("script"),on(g),On(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function jv(n,r,o,u){var p=(p=Ae.current)?tc(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ha(o.href),o=wi(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Ha(o.href);var g=wi(p).hoistableStyles,E=g.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=p.querySelector(vl(n)))&&!g._p&&(E.instance=g,E.state.loading=5),gi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},gi.set(n,o),g||EE(p,n,o,E.state))),r&&u===null)throw Error(i(528,""));return E}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Va(o),o=wi(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Ha(n){return'href="'+Qt(n)+'"'}function vl(n){return'link[rel="stylesheet"]['+n+"]"}function Zv(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function EE(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),On(r,"link",o),on(r),n.head.appendChild(r))}function Va(n){return'[src="'+Qt(n)+'"]'}function yl(n){return"script[async]"+n}function Kv(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+Qt(o.href)+'"]');if(u)return r.instance=u,on(u),u;var p=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),on(u),On(u,"style",p),nc(u,o.precedence,n),r.instance=u;case"stylesheet":p=Ha(o.href);var g=n.querySelector(vl(p));if(g)return r.state.loading|=4,r.instance=g,on(g),g;u=Zv(o),(p=gi.get(p))&&ld(u,p),g=(n.ownerDocument||n).createElement("link"),on(g);var E=g;return E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),On(g,"link",u),r.state.loading|=4,nc(g,o.precedence,n),r.instance=g;case"script":return g=Va(o.src),(p=n.querySelector(yl(g)))?(r.instance=p,on(p),p):(u=o,(p=gi.get(g))&&(u=m({},o),ud(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),on(p),On(p,"link",u),n.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,nc(u,o.precedence,n));return r.instance}function nc(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,E=0;E<u.length;E++){var R=u[E];if(R.dataset.precedence===r)g=R;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function ld(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function ud(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var ic=null;function Qv(n,r,o){if(ic===null){var u=new Map,p=ic=new Map;p.set(o,u)}else p=ic,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[bi]||g[an]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(r)||"";E=n+E;var R=u.get(E);R?R.push(g):u.set(E,[g])}}return u}function Jv(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function TE(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function $v(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var xl=null;function AE(){}function bE(n,r,o){if(xl===null)throw Error(i(475));var u=xl;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var p=Ha(o.href),g=n.querySelector(vl(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=rc.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=g,on(g);return}g=n.ownerDocument||n,o=Zv(o),(p=gi.get(p))&&ld(o,p),g=g.createElement("link"),on(g);var E=g;E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),On(g,"link",o),r.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=rc.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function RE(){if(xl===null)throw Error(i(475));var n=xl;return n.stylesheets&&n.count===0&&cd(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&cd(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var sc=null;function cd(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,sc=new Map,r.forEach(wE,n),sc=null,rc.call(n))}function wE(n,r){if(!(r.state.loading&4)){var o=sc.get(n);if(o)var u=o.get(null);else{o=new Map,sc.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}p=r.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,p),o.set(E,p),this.count++,u=rc.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),r.state.loading|=4}}var Ml={$$typeof:D,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function CE(n,r,o,u,p,g,E,R){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function e0(n,r,o,u,p,g,E,R,H,ne,de,xe){return n=new CE(n,r,o,E,R,H,ne,xe),r=1,g===!0&&(r|=24),g=ti(3,null,null,r),n.current=g,g.stateNode=n,r=Wh(),r.refCount++,n.pooledCache=r,r.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:r},jh(g),n}function t0(n){return n?(n=va,n):va}function n0(n,r,o,u,p,g){p=t0(p),u.context===null?u.context=p:u.pendingContext=p,u=Xr(r),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Yr(n,u,r),o!==null&&(ai(o,n,r),Qo(o,n,r))}function i0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function hd(n,r){i0(n,r),(n=n.alternate)&&i0(n,r)}function r0(n){if(n.tag===13){var r=_a(n,67108864);r!==null&&ai(r,n,67108864),hd(n,67108864)}}var ac=!0;function LE(n,r,o,u){var p=z.T;z.T=null;var g=j.p;try{j.p=2,fd(n,r,o,u)}finally{j.p=g,z.T=p}}function DE(n,r,o,u){var p=z.T;z.T=null;var g=j.p;try{j.p=8,fd(n,r,o,u)}finally{j.p=g,z.T=p}}function fd(n,r,o,u){if(ac){var p=dd(u);if(p===null)$f(n,r,u,oc,o),a0(n,u);else if(NE(p,n,r,o,u))u.stopPropagation();else if(a0(n,u),r&4&&-1<UE.indexOf(n)){for(;p!==null;){var g=Wi(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Xe(g.pendingLanes);if(E!==0){var R=g;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var H=1<<31-Fe(E);R.entanglements[1]|=H,E&=~H}Ki(g),(zt&6)===0&&(Wu=ht()+500,pl(0))}}break;case 13:R=_a(g,2),R!==null&&ai(R,g,2),Yu(),hd(g,2)}if(g=dd(u),g===null&&$f(n,r,u,oc,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else $f(n,r,u,null,o)}}function dd(n){return n=_h(n),pd(n)}var oc=null;function pd(n){if(oc=null,n=Ri(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return oc=n,null}function s0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case dt:return 2;case Ye:return 8;case rt:case $t:return 32;case I:return 268435456;default:return 32}default:return 32}}var md=!1,ss=null,as=null,os=null,Sl=new Map,El=new Map,ls=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a0(n,r){switch(n){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Sl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(r.pointerId)}}function Tl(n,r,o,u,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},r!==null&&(r=Wi(r),r!==null&&r0(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function NE(n,r,o,u,p){switch(r){case"focusin":return ss=Tl(ss,n,r,o,u,p),!0;case"dragenter":return as=Tl(as,n,r,o,u,p),!0;case"mouseover":return os=Tl(os,n,r,o,u,p),!0;case"pointerover":var g=p.pointerId;return Sl.set(g,Tl(Sl.get(g)||null,n,r,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,El.set(g,Tl(El.get(g)||null,n,r,o,u,p)),!0}return!1}function o0(n){var r=Ri(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,hn(n.priority,function(){if(o.tag===13){var u=si();u=qe(u);var p=_a(o,u);p!==null&&ai(p,o,u),hd(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=dd(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);gh=u,o.target.dispatchEvent(u),gh=null}else return r=Wi(o),r!==null&&r0(r),n.blockedOn=o,!1;r.shift()}return!0}function l0(n,r,o){lc(n)&&o.delete(r)}function PE(){md=!1,ss!==null&&lc(ss)&&(ss=null),as!==null&&lc(as)&&(as=null),os!==null&&lc(os)&&(os=null),Sl.forEach(l0),El.forEach(l0)}function uc(n,r){n.blockedOn===r&&(n.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,PE)))}var cc=null;function u0(n){cc!==n&&(cc=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cc===n&&(cc=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],p=n[r+2];if(typeof u!="function"){if(pd(u||o)===null)continue;break}var g=Wi(o);g!==null&&(n.splice(r,3),r-=3,pf(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Al(n){function r(H){return uc(H,n)}ss!==null&&uc(ss,n),as!==null&&uc(as,n),os!==null&&uc(os,n),Sl.forEach(r),El.forEach(r);for(var o=0;o<ls.length;o++){var u=ls[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<ls.length&&(o=ls[0],o.blockedOn===null);)o0(o),o.blockedOn===null&&ls.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],E=p[_n]||null;if(typeof g=="function")E||u0(o);else if(E){var R=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[_n]||null)R=E.formAction;else if(pd(p)!==null)continue}else R=E.action;typeof R=="function"?o[u+1]=R:(o.splice(u,3),u-=3),u0(o)}}}function gd(n){this._internalRoot=n}hc.prototype.render=gd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=si();n0(o,u,n,r,null,null)},hc.prototype.unmount=gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n0(n.current,2,null,n,null,null),Yu(),r[In]=null}};function hc(n){this._internalRoot=n}hc.prototype.unstable_scheduleHydration=function(n){if(n){var r=mt();n={blockedOn:null,target:n,priority:r};for(var o=0;o<ls.length&&r!==0&&r<ls[o].priority;o++);ls.splice(o,0,n),o===0&&o0(n)}};var c0=e.version;if(c0!=="19.1.1")throw Error(i(527,c0,"19.1.1"));j.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=f(r),n=n!==null?d(n):null,n=n===null?null:n.stateNode,n};var OE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{fe=fc.inject(OE),pe=fc}catch{}}return Rl.createRoot=function(n,r){if(!a(n))throw Error(i(299));var o=!1,u="",p=b_,g=R_,E=w_,R=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(R=r.unstable_transitionCallbacks)),r=e0(n,1,!1,null,null,o,u,p,g,E,R,null),n[In]=r.current,Jf(n),new gd(r)},Rl.hydrateRoot=function(n,r,o){if(!a(n))throw Error(i(299));var u=!1,p="",g=b_,E=R_,R=w_,H=null,ne=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(R=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(H=o.unstable_transitionCallbacks),o.formState!==void 0&&(ne=o.formState)),r=e0(n,1,!0,r,o??null,u,p,g,E,R,H,ne),r.context=t0(null),o=r.current,u=si(),u=qe(u),p=Xr(u),p.callback=null,Yr(o,p,u),o=u,r.current.lanes=o,Ne(r,o),Ki(r),n[In]=r.current,Jf(n),new hc(r)},Rl.version="19.1.1",Rl}var x0;function XE(){if(x0)return yd.exports;x0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=WE(),yd.exports}var YE=XE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const As="178",Ga={ROTATE:0,DOLLY:1,PAN:2},ka={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qE=0,M0=1,jE=2,wx=1,ZE=2,Lr=3,Fr=0,qn=1,Si=2,Es=0,mo=1,S0=2,E0=3,T0=4,KE=5,$s=100,QE=101,JE=102,$E=103,eT=104,tT=200,nT=201,iT=202,rT=203,yp=204,xp=205,sT=206,aT=207,oT=208,lT=209,uT=210,cT=211,hT=212,fT=213,dT=214,Mp=0,Sp=1,Ep=2,xo=3,Tp=4,Ap=5,bp=6,Rp=7,Cx=0,pT=1,mT=2,Ts=0,gT=1,_T=2,vT=3,yT=4,xT=5,MT=6,ST=7,A0="attached",ET="detached",Lx=300,Mo=301,So=302,wp=303,Cp=304,uh=306,Eo=1e3,Ss=1001,th=1002,$n=1003,Dx=1004,Gl=1005,Ei=1006,Xc=1007,Ur=1008,nr=1009,Ux=1010,Nx=1011,jl=1012,vm=1013,ra=1014,Fi=1015,nu=1016,ym=1017,xm=1018,Zl=1020,Px=35902,Ox=1021,Ix=1022,Ti=1023,Kl=1026,Ql=1027,Mm=1028,Sm=1029,Bx=1030,Em=1031,Tm=1033,Yc=33776,qc=33777,jc=33778,Zc=33779,Lp=35840,Dp=35841,Up=35842,Np=35843,Pp=36196,Op=37492,Ip=37496,Bp=37808,Fp=37809,zp=37810,Hp=37811,Vp=37812,Gp=37813,kp=37814,Wp=37815,Xp=37816,Yp=37817,qp=37818,jp=37819,Zp=37820,Kp=37821,Kc=36492,Qp=36494,Jp=36495,Fx=36283,$p=36284,em=36285,tm=36286,TT=2200,nm=2201,AT=2202,Jl=2300,$l=2301,Ed=2302,ho=2400,fo=2401,nh=2402,Am=2500,bT=2501,RT=0,zx=1,im=2,wT=3200,CT=3201,bm=0,LT=1,xs="",Mi="srgb",To="srgb-linear",ih="linear",Yt="srgb",Wa=7680,b0=519,DT=512,UT=513,NT=514,Hx=515,PT=516,OT=517,IT=518,BT=519,rm=35044,FT=35048,R0="300 es",Nr=2e3,rh=2001;let aa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}};const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let w0=1234567;const Xl=Math.PI/180,Ao=180/Math.PI;function zi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function Rm(s,e){return(s%e+e)%e}function zT(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function HT(s,e,t){return s!==e?(t-s)/(e-s):0}function Yl(s,e,t){return(1-t)*s+t*e}function VT(s,e,t,i){return Yl(s,e,1-Math.exp(-t*i))}function GT(s,e=1){return e-Math.abs(Rm(s,e*2)-e)}function kT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function WT(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function XT(s,e){return s+Math.floor(Math.random()*(e-s+1))}function YT(s,e){return s+Math.random()*(e-s)}function qT(s){return s*(.5-Math.random())}function jT(s){s!==void 0&&(w0=s);let e=w0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZT(s){return s*Xl}function KT(s){return s*Ao}function QT(s){return(s&s-1)===0&&s!==0}function JT(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $T(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function eA(s,e,t,i,a){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),d=l((e+i)/2),m=c((e+i)/2),_=l((e-i)/2),v=c((e-i)/2),y=l((i-e)/2),S=c((i-e)/2);switch(a){case"XYX":s.set(h*m,f*_,f*v,h*d);break;case"YZY":s.set(f*v,h*m,f*_,h*d);break;case"ZXZ":s.set(f*_,f*v,h*m,h*d);break;case"XZX":s.set(h*m,f*S,f*y,h*d);break;case"YXY":s.set(f*y,h*m,f*S,h*d);break;case"ZYZ":s.set(f*S,f*y,h*m,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cn={DEG2RAD:Xl,RAD2DEG:Ao,generateUUID:zi,clamp:xt,euclideanModulo:Rm,mapLinear:zT,inverseLerp:HT,lerp:Yl,damp:VT,pingpong:GT,smoothstep:kT,smootherstep:WT,randInt:XT,randFloat:YT,randFloatSpread:qT,seededRandom:jT,degToRad:ZT,radToDeg:KT,isPowerOfTwo:QT,ceilPowerOfTwo:JT,floorPowerOfTwo:$T,setQuaternionFromProperEuler:eA,normalize:Vt,denormalize:Ii};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*a+e.x,this.y=l*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,c,h){let f=i[a+0],d=i[a+1],m=i[a+2],_=i[a+3];const v=l[c+0],y=l[c+1],S=l[c+2],T=l[c+3];if(h===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h===1){e[t+0]=v,e[t+1]=y,e[t+2]=S,e[t+3]=T;return}if(_!==T||f!==v||d!==y||m!==S){let M=1-h;const x=f*v+d*y+m*S+_*T,P=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const O=Math.sqrt(D),F=Math.atan2(O,x*P);M=Math.sin(M*F)/O,h=Math.sin(h*F)/O}const w=h*P;if(f=f*M+v*w,d=d*M+y*w,m=m*M+S*w,_=_*M+T*w,M===1-h){const O=1/Math.sqrt(f*f+d*d+m*m+_*_);f*=O,d*=O,m*=O,_*=O}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,c){const h=i[a],f=i[a+1],d=i[a+2],m=i[a+3],_=l[c],v=l[c+1],y=l[c+2],S=l[c+3];return e[t]=h*S+m*_+f*y-d*v,e[t+1]=f*S+m*v+d*_-h*y,e[t+2]=d*S+m*y+h*v-f*_,e[t+3]=m*S-h*_-f*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,d=h(i/2),m=h(a/2),_=h(l/2),v=f(i/2),y=f(a/2),S=f(l/2);switch(c){case"XYZ":this._x=v*m*_+d*y*S,this._y=d*y*_-v*m*S,this._z=d*m*S+v*y*_,this._w=d*m*_-v*y*S;break;case"YXZ":this._x=v*m*_+d*y*S,this._y=d*y*_-v*m*S,this._z=d*m*S-v*y*_,this._w=d*m*_+v*y*S;break;case"ZXY":this._x=v*m*_-d*y*S,this._y=d*y*_+v*m*S,this._z=d*m*S+v*y*_,this._w=d*m*_-v*y*S;break;case"ZYX":this._x=v*m*_-d*y*S,this._y=d*y*_+v*m*S,this._z=d*m*S-v*y*_,this._w=d*m*_+v*y*S;break;case"YZX":this._x=v*m*_+d*y*S,this._y=d*y*_+v*m*S,this._z=d*m*S-v*y*_,this._w=d*m*_-v*y*S;break;case"XZY":this._x=v*m*_-d*y*S,this._y=d*y*_-v*m*S,this._z=d*m*S+v*y*_,this._w=d*m*_+v*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],c=t[1],h=t[5],f=t[9],d=t[2],m=t[6],_=t[10],v=i+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-d)*y,this._z=(c-a)*y}else if(i>h&&i>_){const y=2*Math.sqrt(1+i-h-_);this._w=(m-f)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+d)/y}else if(h>_){const y=2*Math.sqrt(1+h-i-_);this._w=(l-d)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+_-i-h);this._w=(c-a)/y,this._x=(l+d)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,c=e._w,h=t._x,f=t._y,d=t._z,m=t._w;return this._x=i*m+c*h+a*d-l*f,this._y=a*m+c*f+l*h-i*d,this._z=l*m+c*d+i*f-a*h,this._w=c*m-i*h-a*f-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,c=this._w;let h=c*e._w+i*e._x+a*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,h),_=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=c*_+this._w*v,this._x=i*_+this._x*v,this._y=a*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(C0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,c=e.y,h=e.z,f=e.w,d=2*(c*a-h*i),m=2*(h*t-l*a),_=2*(l*i-c*t);return this.x=t+f*d+c*_-h*m,this.y=i+f*m+h*d-l*_,this.z=a+f*_+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*c-i*f,this.z=i*h-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new B,C0=new ut;class it{constructor(e,t,i,a,l,c,h,f,d){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,h,f,d)}set(e,t,i,a,l,c,h,f,d){const m=this.elements;return m[0]=e,m[1]=a,m[2]=h,m[3]=t,m[4]=l,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],h=i[3],f=i[6],d=i[1],m=i[4],_=i[7],v=i[2],y=i[5],S=i[8],T=a[0],M=a[3],x=a[6],P=a[1],D=a[4],w=a[7],O=a[2],F=a[5],U=a[8];return l[0]=c*T+h*P+f*O,l[3]=c*M+h*D+f*F,l[6]=c*x+h*w+f*U,l[1]=d*T+m*P+_*O,l[4]=d*M+m*D+_*F,l[7]=d*x+m*w+_*U,l[2]=v*T+y*P+S*O,l[5]=v*M+y*D+S*F,l[8]=v*x+y*w+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8];return t*c*m-t*h*d-i*l*m+i*h*f+a*l*d-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8],_=m*c-h*d,v=h*f-m*l,y=d*l-c*f,S=t*_+i*v+a*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(a*d-m*i)*T,e[2]=(h*i-a*c)*T,e[3]=v*T,e[4]=(m*t-a*f)*T,e[5]=(a*l-h*t)*T,e[6]=y*T,e[7]=(i*f-d*t)*T,e[8]=(c*t-i*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,c,h){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*c+d*h)+c+e,-a*d,a*f,-a*(-d*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new it;function Vx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function eu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tA(){const s=eu("canvas");return s.style.display="block",s}const L0={};function go(s){s in L0||(L0[s]=!0,console.warn(s))}function nA(s,e,t){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}function iA(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rA(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const D0=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sA(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Yt&&(a.r=Ir(a.r),a.g=Ir(a.g),a.b=Ir(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(a.r=_o(a.r),a.g=_o(a.g),a.b=_o(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xs?ih:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[To]:{primaries:e,whitePoint:i,transfer:ih,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:i,transfer:Yt,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),s}const Ut=sA();function Ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xa;class aA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xa===void 0&&(Xa=eu("canvas")),Xa.width=e.width,Xa.height=e.height;const a=Xa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Xa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Ir(l[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oA=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,h=a.length;c<h;c++)a[c].isDataTexture?l.push(bd(a[c].image)):l.push(bd(a[c]))}else l=bd(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lA=0;const Rd=new B;class Ln extends aa{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=Ss,a=Ss,l=Ei,c=Ur,h=Ti,f=nr,d=Ln.DEFAULT_ANISOTROPY,m=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=zi(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rd).x}get height(){return this.source.getSize(Rd).y}get depth(){return this.source.getSize(Rd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Lx;Ln.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const f=e.elements,d=f[0],m=f[4],_=f[8],v=f[1],y=f[5],S=f[9],T=f[2],M=f[6],x=f[10];if(Math.abs(m-v)<.01&&Math.abs(_-T)<.01&&Math.abs(S-M)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+T)<.1&&Math.abs(S+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(d+1)/2,w=(y+1)/2,O=(x+1)/2,F=(m+v)/4,U=(_+T)/4,G=(S+M)/4;return D>w&&D>O?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=F/i,l=U/i):w>O?w<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(w),i=F/a,l=G/a):O<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(O),i=U/l,a=G/l),this.set(i,a,l,t),this}let P=Math.sqrt((M-S)*(M-S)+(_-T)*(_-T)+(v-m)*(v-m));return Math.abs(P)<.001&&(P=1),this.x=(M-S)/P,this.y=(_-T)/P,this.z=(v-m)/P,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uA extends aa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:i.depth},l=new Ln(a);this.textures=[];const c=i.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new wm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends uA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gx extends Ln{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cA extends Ln{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(l,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),pc.subVectors(this.max,wl),Ya.subVectors(e.a,wl),qa.subVectors(e.b,wl),ja.subVectors(e.c,wl),cs.subVectors(qa,Ya),hs.subVectors(ja,qa),Gs.subVectors(Ya,ja);let t=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Gs.z,Gs.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Gs.z,0,-Gs.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Gs.y,Gs.x,0];return!wd(t,Ya,qa,ja,pc)||(t=[1,0,0,0,1,0,0,0,1],!wd(t,Ya,qa,ja,pc))?!1:(mc.crossVectors(cs,hs),t=[mc.x,mc.y,mc.z],wd(t,Ya,qa,ja,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new B,new B,new B,new B,new B,new B,new B,new B],Ni=new B,dc=new Hr,Ya=new B,qa=new B,ja=new B,cs=new B,hs=new B,Gs=new B,wl=new B,pc=new B,mc=new B,ks=new B;function wd(s,e,t,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){ks.fromArray(s,l);const h=a.x*Math.abs(ks.x)+a.y*Math.abs(ks.y)+a.z*Math.abs(ks.z),f=e.dot(ks),d=t.dot(ks),m=i.dot(ks);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>h)return!1}return!0}const hA=new Hr,Cl=new B,Cd=new B;class ir{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hA.setFromPoints(e).getCenter(i);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const t=Cl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Cl,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(Cd)),this.expandByPoint(Cl.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ar=new B,Ld=new B,gc=new B,fs=new B,Dd=new B,_c=new B,Ud=new B;class Co{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ld.copy(e).add(t).multiplyScalar(.5),gc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Ld);const l=e.distanceTo(t)*.5,c=-this.direction.dot(gc),h=fs.dot(this.direction),f=-fs.dot(gc),d=fs.lengthSq(),m=Math.abs(1-c*c);let _,v,y,S;if(m>0)if(_=c*f-h,v=c*h-f,S=l*m,_>=0)if(v>=-S)if(v<=S){const T=1/m;_*=T,v*=T,y=_*(_+c*v+2*h)+v*(c*_+v+2*f)+d}else v=l,_=Math.max(0,-(c*v+h)),y=-_*_+v*(v+2*f)+d;else v=-l,_=Math.max(0,-(c*v+h)),y=-_*_+v*(v+2*f)+d;else v<=-S?(_=Math.max(0,-(-c*l+h)),v=_>0?-l:Math.min(Math.max(-l,-f),l),y=-_*_+v*(v+2*f)+d):v<=S?(_=0,v=Math.min(Math.max(-l,-f),l),y=v*(v+2*f)+d):(_=Math.max(0,-(c*l+h)),v=_>0?l:Math.min(Math.max(-l,-f),l),y=-_*_+v*(v+2*f)+d);else v=c>0?-l:l,_=Math.max(0,-(c*v+h)),y=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Ld).addScaledVector(gc,v),y}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const i=Ar.dot(this.direction),a=Ar.dot(Ar)-i*i,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),h=i-c,f=i+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,c,h,f;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,a=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,a=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),_>=0?(h=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||h>a)||((h>i||i!==i)&&(i=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,a,l){Dd.subVectors(t,e),_c.subVectors(i,e),Ud.crossVectors(Dd,_c);let c=this.direction.dot(Ud),h;if(c>0){if(a)return null;h=1}else if(c<0)h=-1,c=-c;else return null;fs.subVectors(this.origin,e);const f=h*this.direction.dot(_c.crossVectors(fs,_c));if(f<0)return null;const d=h*this.direction.dot(Dd.cross(fs));if(d<0||f+d>c)return null;const m=-h*fs.dot(Ud);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,a,l,c,h,f,d,m,_,v,y,S,T,M){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,l,c,h,f,d,m,_,v,y,S,T,M)}set(e,t,i,a,l,c,h,f,d,m,_,v,y,S,T,M){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=a,x[1]=l,x[5]=c,x[9]=h,x[13]=f,x[2]=d,x[6]=m,x[10]=_,x[14]=v,x[3]=y,x[7]=S,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/Za.setFromMatrixColumn(e,0).length(),l=1/Za.setFromMatrixColumn(e,1).length(),c=1/Za.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,c=Math.cos(i),h=Math.sin(i),f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,y=c*_,S=h*m,T=h*_;t[0]=f*m,t[4]=-f*_,t[8]=d,t[1]=y+S*d,t[5]=v-T*d,t[9]=-h*f,t[2]=T-v*d,t[6]=S+y*d,t[10]=c*f}else if(e.order==="YXZ"){const v=f*m,y=f*_,S=d*m,T=d*_;t[0]=v+T*h,t[4]=S*h-y,t[8]=c*d,t[1]=c*_,t[5]=c*m,t[9]=-h,t[2]=y*h-S,t[6]=T+v*h,t[10]=c*f}else if(e.order==="ZXY"){const v=f*m,y=f*_,S=d*m,T=d*_;t[0]=v-T*h,t[4]=-c*_,t[8]=S+y*h,t[1]=y+S*h,t[5]=c*m,t[9]=T-v*h,t[2]=-c*d,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const v=c*m,y=c*_,S=h*m,T=h*_;t[0]=f*m,t[4]=S*d-y,t[8]=v*d+T,t[1]=f*_,t[5]=T*d+v,t[9]=y*d-S,t[2]=-d,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,y=c*d,S=h*f,T=h*d;t[0]=f*m,t[4]=T-v*_,t[8]=S*_+y,t[1]=_,t[5]=c*m,t[9]=-h*m,t[2]=-d*m,t[6]=y*_+S,t[10]=v-T*_}else if(e.order==="XZY"){const v=c*f,y=c*d,S=h*f,T=h*d;t[0]=f*m,t[4]=-_,t[8]=d*m,t[1]=v*_+T,t[5]=c*m,t[9]=y*_-S,t[2]=S*_-y,t[6]=h*m,t[10]=T*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fA,e,dA)}lookAt(e,t,i){const a=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ds.crossVectors(i,oi),ds.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ds.crossVectors(i,oi)),ds.normalize(),vc.crossVectors(oi,ds),a[0]=ds.x,a[4]=vc.x,a[8]=oi.x,a[1]=ds.y,a[5]=vc.y,a[9]=oi.y,a[2]=ds.z,a[6]=vc.z,a[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,c=i[0],h=i[4],f=i[8],d=i[12],m=i[1],_=i[5],v=i[9],y=i[13],S=i[2],T=i[6],M=i[10],x=i[14],P=i[3],D=i[7],w=i[11],O=i[15],F=a[0],U=a[4],G=a[8],L=a[12],A=a[1],k=a[5],se=a[9],re=a[13],me=a[2],he=a[6],z=a[10],j=a[14],q=a[3],Se=a[7],N=a[11],ee=a[15];return l[0]=c*F+h*A+f*me+d*q,l[4]=c*U+h*k+f*he+d*Se,l[8]=c*G+h*se+f*z+d*N,l[12]=c*L+h*re+f*j+d*ee,l[1]=m*F+_*A+v*me+y*q,l[5]=m*U+_*k+v*he+y*Se,l[9]=m*G+_*se+v*z+y*N,l[13]=m*L+_*re+v*j+y*ee,l[2]=S*F+T*A+M*me+x*q,l[6]=S*U+T*k+M*he+x*Se,l[10]=S*G+T*se+M*z+x*N,l[14]=S*L+T*re+M*j+x*ee,l[3]=P*F+D*A+w*me+O*q,l[7]=P*U+D*k+w*he+O*Se,l[11]=P*G+D*se+w*z+O*N,l[15]=P*L+D*re+w*j+O*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],c=e[1],h=e[5],f=e[9],d=e[13],m=e[2],_=e[6],v=e[10],y=e[14],S=e[3],T=e[7],M=e[11],x=e[15];return S*(+l*f*_-a*d*_-l*h*v+i*d*v+a*h*y-i*f*y)+T*(+t*f*y-t*d*v+l*c*v-a*c*y+a*d*m-l*f*m)+M*(+t*d*_-t*h*y-l*c*_+i*c*y+l*h*m-i*d*m)+x*(-a*h*m-t*f*_+t*h*v+a*c*_-i*c*v+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8],_=e[9],v=e[10],y=e[11],S=e[12],T=e[13],M=e[14],x=e[15],P=_*M*d-T*v*d+T*f*y-h*M*y-_*f*x+h*v*x,D=S*v*d-m*M*d-S*f*y+c*M*y+m*f*x-c*v*x,w=m*T*d-S*_*d+S*h*y-c*T*y-m*h*x+c*_*x,O=S*_*f-m*T*f-S*h*v+c*T*v+m*h*M-c*_*M,F=t*P+i*D+a*w+l*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=P*U,e[1]=(T*v*l-_*M*l-T*a*y+i*M*y+_*a*x-i*v*x)*U,e[2]=(h*M*l-T*f*l+T*a*d-i*M*d-h*a*x+i*f*x)*U,e[3]=(_*f*l-h*v*l-_*a*d+i*v*d+h*a*y-i*f*y)*U,e[4]=D*U,e[5]=(m*M*l-S*v*l+S*a*y-t*M*y-m*a*x+t*v*x)*U,e[6]=(S*f*l-c*M*l-S*a*d+t*M*d+c*a*x-t*f*x)*U,e[7]=(c*v*l-m*f*l+m*a*d-t*v*d-c*a*y+t*f*y)*U,e[8]=w*U,e[9]=(S*_*l-m*T*l-S*i*y+t*T*y+m*i*x-t*_*x)*U,e[10]=(c*T*l-S*h*l+S*i*d-t*T*d-c*i*x+t*h*x)*U,e[11]=(m*h*l-c*_*l-m*i*d+t*_*d+c*i*y-t*h*y)*U,e[12]=O*U,e[13]=(m*T*a-S*_*a+S*i*v-t*T*v-m*i*M+t*_*M)*U,e[14]=(S*h*a-c*T*a-S*i*f+t*T*f+c*i*M-t*h*M)*U,e[15]=(c*_*a-m*h*a+m*i*f-t*_*f-c*i*v+t*h*v)*U,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,c=e.x,h=e.y,f=e.z,d=l*c,m=l*h;return this.set(d*c+i,d*h-a*f,d*f+a*h,0,d*h+a*f,m*h+i,m*f-a*c,0,d*f-a*h,m*f+a*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,c){return this.set(1,i,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,d=l+l,m=c+c,_=h+h,v=l*d,y=l*m,S=l*_,T=c*m,M=c*_,x=h*_,P=f*d,D=f*m,w=f*_,O=i.x,F=i.y,U=i.z;return a[0]=(1-(T+x))*O,a[1]=(y+w)*O,a[2]=(S-D)*O,a[3]=0,a[4]=(y-w)*F,a[5]=(1-(v+x))*F,a[6]=(M+P)*F,a[7]=0,a[8]=(S+D)*U,a[9]=(M-P)*U,a[10]=(1-(v+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=Za.set(a[0],a[1],a[2]).length();const c=Za.set(a[4],a[5],a[6]).length(),h=Za.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Pi.copy(this);const d=1/l,m=1/c,_=1/h;return Pi.elements[0]*=d,Pi.elements[1]*=d,Pi.elements[2]*=d,Pi.elements[4]*=m,Pi.elements[5]*=m,Pi.elements[6]*=m,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,t.setFromRotationMatrix(Pi),i.x=l,i.y=c,i.z=h,this}makePerspective(e,t,i,a,l,c,h=Nr){const f=this.elements,d=2*l/(t-e),m=2*l/(i-a),_=(t+e)/(t-e),v=(i+a)/(i-a);let y,S;if(h===Nr)y=-(c+l)/(c-l),S=-2*c*l/(c-l);else if(h===rh)y=-c/(c-l),S=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,l,c,h=Nr){const f=this.elements,d=1/(t-e),m=1/(i-a),_=1/(c-l),v=(t+e)*d,y=(i+a)*m;let S,T;if(h===Nr)S=(c+l)*_,T=-2*_;else if(h===rh)S=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Za=new B,Pi=new ot,fA=new B(0,0,0),dA=new B(1,1,1),ds=new B,vc=new B,oi=new B,N0=new ot,P0=new ut;class jn{constructor(e=0,t=0,i=0,a=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],d=a[5],m=a[9],_=a[2],v=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pA=0;const O0=new B,Ka=new ut,br=new ot,yc=new B,Ll=new B,mA=new B,gA=new ut,I0=new B(1,0,0),B0=new B(0,1,0),F0=new B(0,0,1),z0={type:"added"},_A={type:"removed"},Qa={type:"childadded",child:null},Nd={type:"childremoved",child:null};class Kt extends aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new B,t=new jn,i=new ut,a=new B(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ot},normalMatrix:{value:new it}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.multiply(Ka),this}rotateOnWorldAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.premultiply(Ka),this}rotateX(e){return this.rotateOnAxis(I0,e)}rotateY(e){return this.rotateOnAxis(B0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,t){return O0.copy(e).applyQuaternion(this.quaternion),this.position.add(O0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I0,e)}translateY(e){return this.translateOnAxis(B0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Ll,yc,this.up):br.lookAt(yc,Ll,this.up),this.quaternion.setFromRotationMatrix(br),a&&(br.extractRotation(a.matrixWorld),Ka.setFromRotationMatrix(br),this.quaternion.premultiply(Ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z0),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_A),Nd.child=e,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z0),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,mA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,gA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const _=f[d];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),S=c(e.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),S.length>0&&(i.nodes=S)}return i.object=a,i;function c(h){const f=[];for(const d in h){const m=h[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Kt.DEFAULT_UP=new B(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new B,Rr=new B,Pd=new B,wr=new B,Ja=new B,$a=new B,H0=new B,Od=new B,Id=new B,Bd=new B,Fd=new Ot,zd=new Ot,Hd=new Ot;class Bi{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Oi.subVectors(e,t),a.cross(Oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){Oi.subVectors(a,t),Rr.subVectors(i,t),Pd.subVectors(e,t);const c=Oi.dot(Oi),h=Oi.dot(Rr),f=Oi.dot(Pd),d=Rr.dot(Rr),m=Rr.dot(Pd),_=c*d-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(d*f-h*m)*v,S=(c*m-h*f)*v;return l.set(1-y-S,S,y)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,i,a,l,c,h,f){return this.getBarycoord(e,t,i,a,wr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,wr.x),f.addScaledVector(c,wr.y),f.addScaledVector(h,wr.z),f)}static getInterpolatedAttribute(e,t,i,a,l,c){return Fd.setScalar(0),zd.setScalar(0),Hd.setScalar(0),Fd.fromBufferAttribute(e,t),zd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Fd,l.x),c.addScaledVector(zd,l.y),c.addScaledVector(Hd,l.z),c}static isFrontFacing(e,t,i,a){return Oi.subVectors(i,t),Rr.subVectors(e,t),Oi.cross(Rr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Oi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,l){return Bi.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let c,h;Ja.subVectors(a,i),$a.subVectors(l,i),Od.subVectors(e,i);const f=Ja.dot(Od),d=$a.dot(Od);if(f<=0&&d<=0)return t.copy(i);Id.subVectors(e,a);const m=Ja.dot(Id),_=$a.dot(Id);if(m>=0&&_<=m)return t.copy(a);const v=f*_-m*d;if(v<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Ja,c);Bd.subVectors(e,l);const y=Ja.dot(Bd),S=$a.dot(Bd);if(S>=0&&y<=S)return t.copy(l);const T=y*d-f*S;if(T<=0&&d>=0&&S<=0)return h=d/(d-S),t.copy(i).addScaledVector($a,h);const M=m*S-y*_;if(M<=0&&_-m>=0&&y-S>=0)return H0.subVectors(l,a),h=(_-m)/(_-m+(y-S)),t.copy(a).addScaledVector(H0,h);const x=1/(M+T+v);return c=T*x,h=v*x,t.copy(i).addScaledVector(Ja,c).addScaledVector($a,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Vd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Ut.workingColorSpace){if(e=Rm(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Vd(c,l,e+1/3),this.g=Vd(c,l,e),this.b=Vd(c,l,e-1/3)}return Ut.colorSpaceToWorking(this,a),this}setStyle(e,t=Mi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],h=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const i=kx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ut.workingToColorSpace(Vn.copy(this),e),Math.round(xt(Vn.r*255,0,255))*65536+Math.round(xt(Vn.g*255,0,255))*256+Math.round(xt(Vn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,a=Vn.g,l=Vn.b,c=Math.max(i,a,l),h=Math.min(i,a,l);let f,d;const m=(h+c)/2;if(h===c)f=0,d=0;else{const _=c-h;switch(d=m<=.5?_/(c+h):_/(2-c-h),c){case i:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-i)/_+2;break;case l:f=(i-a)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Mi){Ut.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,i=Vn.g,a=Vn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(xc);const i=Yl(ps.h,xc.h,t),a=Yl(ps.s,xc.s,t),l=Yl(ps.l,xc.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Qe;Qe.NAMES=kx;let vA=0;class Hi extends aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=mo,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yp,this.blendDst=xp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yp&&(i.blendSrc=this.blendSrc),this.blendDst!==xp&&(i.blendDst=this.blendDst),this.blendEquation!==$s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pr extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new B,Mc=new tt;let yA=0;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}}class Wx extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xx extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vi extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xA=0;const _i=new ot,Gd=new Kt,eo=new B,li=new Hr,Dl=new Hr,wn=new B;class Dn extends aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Xx:Wx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new it().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Vi(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];li.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(li.min,Dl.min),li.expandByPoint(wn),wn.addVectors(li.max,Dl.max),li.expandByPoint(wn)):(li.expandByPoint(Dl.min),li.expandByPoint(Dl.max))}li.getCenter(i);let a=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(wn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)wn.fromBufferAttribute(h,d),f&&(eo.fromBufferAttribute(e,d),wn.add(eo)),a=Math.max(a,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),h=[],f=[];for(let G=0;G<i.count;G++)h[G]=new B,f[G]=new B;const d=new B,m=new B,_=new B,v=new tt,y=new tt,S=new tt,T=new B,M=new B;function x(G,L,A){d.fromBufferAttribute(i,G),m.fromBufferAttribute(i,L),_.fromBufferAttribute(i,A),v.fromBufferAttribute(l,G),y.fromBufferAttribute(l,L),S.fromBufferAttribute(l,A),m.sub(d),_.sub(d),y.sub(v),S.sub(v);const k=1/(y.x*S.y-S.x*y.y);isFinite(k)&&(T.copy(m).multiplyScalar(S.y).addScaledVector(_,-y.y).multiplyScalar(k),M.copy(_).multiplyScalar(y.x).addScaledVector(m,-S.x).multiplyScalar(k),h[G].add(T),h[L].add(T),h[A].add(T),f[G].add(M),f[L].add(M),f[A].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let G=0,L=P.length;G<L;++G){const A=P[G],k=A.start,se=A.count;for(let re=k,me=k+se;re<me;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const D=new B,w=new B,O=new B,F=new B;function U(G){O.fromBufferAttribute(a,G),F.copy(O);const L=h[G];D.copy(L),D.sub(O.multiplyScalar(O.dot(L))).normalize(),w.crossVectors(F,L);const k=w.dot(f[G])<0?-1:1;c.setXYZW(G,D.x,D.y,D.z,k)}for(let G=0,L=P.length;G<L;++G){const A=P[G],k=A.start,se=A.count;for(let re=k,me=k+se;re<me;re+=3)U(e.getX(re+0)),U(e.getX(re+1)),U(e.getX(re+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const a=new B,l=new B,c=new B,h=new B,f=new B,d=new B,m=new B,_=new B;if(e)for(let v=0,y=e.count;v<y;v+=3){const S=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,M),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),h.add(m),f.add(m),d.add(m),i.setXYZ(S,h.x,h.y,h.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(a,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,f){const d=h.array,m=h.itemSize,_=h.normalized,v=new d.constructor(f.length*m);let y=0,S=0;for(let T=0,M=f.length;T<M;T++){h.isInterleavedBufferAttribute?y=f[T]*h.data.stride+h.offset:y=f[T]*m;for(let x=0;x<m;x++)v[S++]=d[y++]}return new qt(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,a=this.attributes;for(const h in a){const f=a[h],d=e(f,i);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const f=[],d=l[h];for(let m=0,_=d.length;m<_;m++){const v=d[m],y=e(v,i);f.push(y)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const d=c[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let _=0,v=d.length;_<v;_++){const y=d[_];m.push(y.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const d in a){const m=a[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V0=new ot,Ws=new Co,Sc=new ir,G0=new B,Ec=new B,Tc=new B,Ac=new B,kd=new B,bc=new B,k0=new B,Rc=new B;class Gn extends Kt{constructor(e=new Dn,t=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){bc.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const m=h[f],_=l[f];m!==0&&(kd.fromBufferAttribute(_,e),c?bc.addScaledVector(kd,m):bc.addScaledVector(kd.sub(t),m))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(l),Ws.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Sc,G0)===null||Ws.origin.distanceToSquared(G0)>(e.far-e.near)**2))&&(V0.copy(l).invert(),Ws.copy(e.ray).applyMatrix4(V0),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,i){let a;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(h!==null)if(Array.isArray(c))for(let S=0,T=v.length;S<T;S++){const M=v[S],x=c[M.materialIndex],P=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let w=P,O=D;w<O;w+=3){const F=h.getX(w),U=h.getX(w+1),G=h.getX(w+2);a=wc(this,x,e,i,d,m,_,F,U,G),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=S,x=T;M<x;M+=3){const P=h.getX(M),D=h.getX(M+1),w=h.getX(M+2);a=wc(this,c,e,i,d,m,_,P,D,w),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let S=0,T=v.length;S<T;S++){const M=v[S],x=c[M.materialIndex],P=Math.max(M.start,y.start),D=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let w=P,O=D;w<O;w+=3){const F=w,U=w+1,G=w+2;a=wc(this,x,e,i,d,m,_,F,U,G),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let M=S,x=T;M<x;M+=3){const P=M,D=M+1,w=M+2;a=wc(this,c,e,i,d,m,_,P,D,w),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}}}function MA(s,e,t,i,a,l,c,h){let f;if(e.side===qn?f=i.intersectTriangle(c,l,a,!0,h):f=i.intersectTriangle(a,l,c,e.side===Fr,h),f===null)return null;Rc.copy(h),Rc.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Rc);return d<t.near||d>t.far?null:{distance:d,point:Rc.clone(),object:s}}function wc(s,e,t,i,a,l,c,h,f,d){s.getVertexPosition(h,Ec),s.getVertexPosition(f,Tc),s.getVertexPosition(d,Ac);const m=MA(s,e,t,i,Ec,Tc,Ac,k0);if(m){const _=new B;Bi.getBarycoord(k0,Ec,Tc,Ac,_),a&&(m.uv=Bi.getInterpolatedAttribute(a,h,f,d,_,new tt)),l&&(m.uv1=Bi.getInterpolatedAttribute(l,h,f,d,_,new tt)),c&&(m.normal=Bi.getInterpolatedAttribute(c,h,f,d,_,new B),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:h,b:f,c:d,normal:new B,materialIndex:0};Bi.getNormal(Ec,Tc,Ac,v.normal),m.face=v,m.barycoord=_}return m}class iu extends Dn{constructor(e=1,t=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const h=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],d=[],m=[],_=[];let v=0,y=0;S("z","y","x",-1,-1,i,t,e,c,l,0),S("z","y","x",1,-1,i,t,-e,c,l,1),S("x","z","y",1,1,e,i,t,a,c,2),S("x","z","y",1,-1,e,i,-t,a,c,3),S("x","y","z",1,-1,e,t,i,a,l,4),S("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(f),this.setAttribute("position",new Vi(d,3)),this.setAttribute("normal",new Vi(m,3)),this.setAttribute("uv",new Vi(_,2));function S(T,M,x,P,D,w,O,F,U,G,L){const A=w/U,k=O/G,se=w/2,re=O/2,me=F/2,he=U+1,z=G+1;let j=0,q=0;const Se=new B;for(let N=0;N<z;N++){const ee=N*k-re;for(let Me=0;Me<he;Me++){const Ee=Me*A-se;Se[T]=Ee*P,Se[M]=ee*D,Se[x]=me,d.push(Se.x,Se.y,Se.z),Se[T]=0,Se[M]=0,Se[x]=F>0?1:-1,m.push(Se.x,Se.y,Se.z),_.push(Me/U),_.push(1-N/G),j+=1}}for(let N=0;N<G;N++)for(let ee=0;ee<U;ee++){const Me=v+ee+he*N,Ee=v+ee+he*(N+1),J=v+(ee+1)+he*(N+1),_e=v+(ee+1)+he*N;f.push(Me,Ee,_e),f.push(Ee,J,_e),q+=6}h.addGroup(y,q,L),y+=q,v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Xn(s){const e={};for(let t=0;t<s.length;t++){const i=bo(s[t]);for(const a in i)e[a]=i[a]}return e}function SA(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const qx={clone:bo,merge:Xn};var EA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EA,this.fragmentShader=TA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=SA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jx extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ms=new B,W0=new tt,X0=new tt;class Cn extends jx{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,W0,X0),t.subVectors(X0,W0)}setViewOffset(e,t,i,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xl*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*i/d,a*=c.width/f,i*=c.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class AA extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Cn(to,no,e,t);a.layers=this.layers,this.add(a);const l=new Cn(to,no,e,t);l.layers=this.layers,this.add(l);const c=new Cn(to,no,e,t);c.layers=this.layers,this.add(c);const h=new Cn(to,no,e,t);h.layers=this.layers,this.add(h);const f=new Cn(to,no,e,t);f.layers=this.layers,this.add(f);const d=new Cn(to,no,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,l,c,h,f]=t;for(const d of t)this.remove(d);if(e===Nr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,l),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,h),e.setRenderTarget(i,3,a),e.render(t,f),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,a),e.render(t,m),e.setRenderTarget(_,v,y),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Zx extends Ln{constructor(e=[],t=Mo,i,a,l,c,h,f,d,m){super(e,t,i,a,l,c,h,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bA extends sa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Zx(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new iu(5,5,5),l=new zr({name:"CubemapFromEquirect",uniforms:bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qn,blending:Es});l.uniforms.tEquirect.value=t;const c=new Gn(a,l),h=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Ei),new AA(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(l)}}class ui extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RA={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,c=null;const h=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const M=t.getJointPose(T,i),x=this._getHandJoint(d,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,S=.005;d.inputState.pinching&&v>y+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(RA)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class wA extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class CA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rm,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wn=new B;class Lm{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Y0=new B,q0=new Ot,j0=new Ot,LA=new B,Z0=new ot,Cc=new B,Xd=new ir,K0=new ot,Yd=new Co;class Kx extends Gn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=A0,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cc),this.boundingBox.expandByPoint(Cc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cc),this.boundingSphere.expandByPoint(Cc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xd.copy(this.boundingSphere),Xd.applyMatrix4(a),e.ray.intersectsSphere(Xd)!==!1&&(K0.copy(a).invert(),Yd.copy(e.ray).applyMatrix4(K0),!(this.boundingBox!==null&&Yd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===A0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ET?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;q0.fromBufferAttribute(a.attributes.skinIndex,e),j0.fromBufferAttribute(a.attributes.skinWeight,e),Y0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const c=j0.getComponent(l);if(c!==0){const h=q0.getComponent(l);Z0.multiplyMatrices(i.bones[h].matrixWorld,i.boneInverses[h]),t.addScaledVector(LA.copy(Y0).applyMatrix4(Z0),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qx extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jx extends Ln{constructor(e=null,t=1,i=1,a,l,c,h,f,d=$n,m=$n,_,v){super(null,c,h,f,d,m,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Q0=new ot,DA=new ot;class ch{constructor(e=[],t=[]){this.uuid=zi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let l=0,c=e.length;l<c;l++){const h=e[l]?e[l].matrixWorld:DA;Q0.multiplyMatrices(h,t[l]),Q0.toArray(i,l*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Jx(t,e,e,Ti,Fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const l=e.bones[i];let c=t[l];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),c=new Qx),this.bones.push(c),this.boneInverses.push(new ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,l=t.length;a<l;a++){const c=t[a];e.bones.push(c.uuid);const h=i[a];e.boneInverses.push(h.toArray())}return e}}class sm extends qt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new ot,J0=new ot,Lc=[],$0=new Hr,UA=new ot,Ul=new Gn,Nl=new ir;class NA extends Gn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,UA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),$0.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union($0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,io),Nl.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(Nl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let h=0;h<i.length;h++)i[h]=a[c+h]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Ul.geometry=this.geometry,Ul.material=this.material,Ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(i),e.ray.intersectsSphere(Nl)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,io),J0.multiplyMatrices(i,io),Ul.matrixWorld=J0,Ul.raycast(e,Lc);for(let c=0,h=Lc.length;c<h;c++){const f=Lc[c];f.instanceId=l,f.object=this,t.push(f)}Lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jx(new Float32Array(a*this.count),a,this.count,Mm,Fi));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const h=this.geometry.morphTargetsRelative?1:1-c,f=a*e;l[f]=h,l.set(i,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qd=new B,PA=new B,OA=new it;class ys{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=qd.subVectors(i,t).cross(PA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qd),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||OA.getNormalMatrix(e),a=this.coplanarPoint(qd).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new ir,IA=new tt(.5,.5),Dc=new B;class Dm{constructor(e=new ys,t=new ys,i=new ys,a=new ys,l=new ys,c=new ys){this.planes=[e,t,i,a,l,c]}set(e,t,i,a,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(i),h[3].copy(a),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nr){const i=this.planes,a=e.elements,l=a[0],c=a[1],h=a[2],f=a[3],d=a[4],m=a[5],_=a[6],v=a[7],y=a[8],S=a[9],T=a[10],M=a[11],x=a[12],P=a[13],D=a[14],w=a[15];if(i[0].setComponents(f-l,v-d,M-y,w-x).normalize(),i[1].setComponents(f+l,v+d,M+y,w+x).normalize(),i[2].setComponents(f+c,v+m,M+S,w+P).normalize(),i[3].setComponents(f-c,v-m,M-S,w-P).normalize(),i[4].setComponents(f-h,v-_,M-T,w-D).normalize(),t===Nr)i[5].setComponents(f+h,v+_,M+T,w+D).normalize();else if(t===rh)i[5].setComponents(h,_,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const t=IA.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Dc.x=a.normal.x>0?e.max.x:e.min.x,Dc.y=a.normal.y>0?e.max.y:e.min.y,Dc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oa extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sh=new B,ah=new B,ey=new ot,Pl=new Co,Uc=new ir,jd=new B,ty=new B;class hh extends Kt{constructor(e=new Dn,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,l=t.count;a<l;a++)sh.fromBufferAttribute(t,a-1),ah.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=sh.distanceTo(ah);e.setAttribute("lineDistance",new Vi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(a),Uc.radius+=l,e.ray.intersectsSphere(Uc)===!1)return;ey.copy(a).invert(),Pl.copy(e.ray).applyMatrix4(ey);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=y,M=S-1;T<M;T+=d){const x=m.getX(T),P=m.getX(T+1),D=Nc(this,e,Pl,f,x,P,T);D&&t.push(D)}if(this.isLineLoop){const T=m.getX(S-1),M=m.getX(y),x=Nc(this,e,Pl,f,T,M,S-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let T=y,M=S-1;T<M;T+=d){const x=Nc(this,e,Pl,f,T,T+1,T);x&&t.push(x)}if(this.isLineLoop){const T=Nc(this,e,Pl,f,S-1,y,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Nc(s,e,t,i,a,l,c){const h=s.geometry.attributes.position;if(sh.fromBufferAttribute(h,a),ah.fromBufferAttribute(h,l),t.distanceSqToSegment(sh,ah,jd,ty)>i)return;jd.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(jd);if(!(d<e.near||d>e.far))return{distance:d,point:ty.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const ny=new B,iy=new B;class ru extends hh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,l=t.count;a<l;a+=2)ny.fromBufferAttribute(t,a),iy.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ny.distanceTo(iy);e.setAttribute("lineDistance",new Vi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BA extends hh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $x extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ry=new ot,am=new Co,Pc=new ir,Oc=new B;class FA extends Kt{constructor(e=new Dn,t=new $x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(a),Pc.radius+=l,e.ray.intersectsSphere(Pc)===!1)return;ry.copy(a).invert(),am.copy(e.ray).applyMatrix4(ry);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=i.index,_=i.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let S=v,T=y;S<T;S++){const M=d.getX(S);Oc.fromBufferAttribute(_,M),sy(Oc,M,f,a,e,t,this)}}else{const v=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let S=v,T=y;S<T;S++)Oc.fromBufferAttribute(_,S),sy(Oc,S,f,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function sy(s,e,t,i,a,l,c){const h=am.distanceSqToPoint(s);if(h<t){const f=new B;am.closestPointToPoint(s,f),f.applyMatrix4(i);const d=a.ray.origin.distanceTo(f);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class eM extends Ln{constructor(e,t,i=ra,a,l,c,h=$n,f=$n,d,m=Kl,_=1){if(m!==Kl&&m!==Ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,a,l,c,h,f,m,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class su extends Dn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,c=t/2,h=Math.floor(i),f=Math.floor(a),d=h+1,m=f+1,_=e/h,v=t/f,y=[],S=[],T=[],M=[];for(let x=0;x<m;x++){const P=x*v-c;for(let D=0;D<d;D++){const w=D*_-l;S.push(w,-P,0),T.push(0,0,1),M.push(D/h),M.push(1-x/f)}}for(let x=0;x<f;x++)for(let P=0;P<h;P++){const D=P+d*x,w=P+d*(x+1),O=P+1+d*(x+1),F=P+1+d*x;y.push(D,w,F),y.push(w,O,F)}this.setIndex(y),this.setAttribute("position",new Vi(S,3)),this.setAttribute("normal",new Vi(T,3)),this.setAttribute("uv",new Vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class fh extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bm,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rr extends fh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zA extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HA extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ic(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function VA(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function GA(s){function e(a,l){return s[a]-s[l]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function ay(s,e,t){const i=s.length,a=new s.constructor(i);for(let l=0,c=0;c!==i;++l){const h=t[l]*e;for(let f=0;f!==e;++f)a[c++]=s[h+f]}return a}function tM(s,e,t,i){let a=1,l=s[0];for(;l!==void 0&&l[i]===void 0;)l=s[a++];if(l===void 0)return;let c=l[i];if(c!==void 0)if(Array.isArray(c))do c=l[i],c!==void 0&&(e.push(l.time),t.push(...c)),l=s[a++];while(l!==void 0);else if(c.toArray!==void 0)do c=l[i],c!==void 0&&(e.push(l.time),c.toArray(t,t.length)),l=s[a++];while(l!==void 0);else do c=l[i],c!==void 0&&(e.push(l.time),t.push(c)),l=s[a++];while(l!==void 0)}class au{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],l=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let h=i+2;;){if(a===void 0){if(e<l)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===h)break;if(l=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=l)){const h=t[1];e<h&&(i=2,l=h);for(let f=i-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(a=l,l=t[--i-1],e>=l)break t}c=i,i=0;break n}break e}for(;i<c;){const h=i+c>>>1;e<t[h]?c=h:i=h+1}if(a=t[i],l=t[i-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,l,a)}return this.interpolate_(i,l,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,l=e*a;for(let c=0;c!==a;++c)t[c]=i[l+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kA extends au{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(e,t,i){const a=this.parameterPositions;let l=e-2,c=e+1,h=a[l],f=a[c];if(h===void 0)switch(this.getSettings_().endingStart){case fo:l=e,h=2*t-i;break;case nh:l=a.length-2,h=t+a[l]-a[l+1];break;default:l=e,h=i}if(f===void 0)switch(this.getSettings_().endingEnd){case fo:c=e,f=2*i-t;break;case nh:c=1,f=i+a[1]-a[0];break;default:c=e-1,f=t}const d=(i-t)*.5,m=this.valueSize;this._weightPrev=d/(t-h),this._weightNext=d/(f-i),this._offsetPrev=l*m,this._offsetNext=c*m}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=e*h,d=f-h,m=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,y=this._weightNext,S=(i-t)/(a-t),T=S*S,M=T*S,x=-v*M+2*v*T-v*S,P=(1+v)*M+(-1.5-2*v)*T+(-.5+v)*S+1,D=(-1-y)*M+(1.5+y)*T+.5*S,w=y*M-y*T;for(let O=0;O!==h;++O)l[O]=x*c[m+O]+P*c[d+O]+D*c[f+O]+w*c[_+O];return l}}class nM extends au{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=e*h,d=f-h,m=(i-t)/(a-t),_=1-m;for(let v=0;v!==h;++v)l[v]=c[d+v]*_+c[f+v]*m;return l}}class WA extends au{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gi{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ic(t,this.TimeBufferType),this.values=Ic(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ic(e.times,Array),values:Ic(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new WA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jl:t=this.InterpolantFactoryMethodDiscrete;break;case $l:t=this.InterpolantFactoryMethodLinear;break;case Ed:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jl;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return Ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let l=0,c=a-1;for(;l!==a&&i[l]<e;)++l;for(;c!==-1&&i[c]>t;)--c;if(++c,l!==0||c!==a){l>=c&&(c=Math.max(c,1),l=c-1);const h=this.getValueSize();this.times=i.slice(l,c),this.values=this.values.slice(l*h,c*h)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,l=i.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let h=0;h!==l;h++){const f=i[h];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,h,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,h,f,c),e=!1;break}c=f}if(a!==void 0&&VA(a))for(let h=0,f=a.length;h!==f;++h){const d=a[h];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,h,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Ed,l=e.length-1;let c=1;for(let h=1;h<l;++h){let f=!1;const d=e[h],m=e[h+1];if(d!==m&&(h!==1||d!==e[0]))if(a)f=!0;else{const _=h*i,v=_-i,y=_+i;for(let S=0;S!==i;++S){const T=t[_+S];if(T!==t[v+S]||T!==t[y+S]){f=!0;break}}}if(f){if(h!==c){e[c]=e[h];const _=h*i,v=c*i;for(let y=0;y!==i;++y)t[v+y]=t[_+y]}++c}}if(l>0){e[c]=e[l];for(let h=l*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[h+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}Gi.prototype.ValueTypeName="";Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=$l;class Lo extends Gi{constructor(e,t,i){super(e,t,i)}}Lo.prototype.ValueTypeName="bool";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=Jl;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class iM extends Gi{constructor(e,t,i,a){super(e,t,i,a)}}iM.prototype.ValueTypeName="color";class Ro extends Gi{constructor(e,t,i,a){super(e,t,i,a)}}Ro.prototype.ValueTypeName="number";class XA extends au{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=(i-t)/(a-t);let d=e*h;for(let m=d+h;d!==m;d+=4)ut.slerpFlat(l,0,c,d-h,c,d,f);return l}}class Yn extends Gi{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new XA(this.times,this.values,this.getValueSize(),e)}}Yn.prototype.ValueTypeName="quaternion";Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends Gi{constructor(e,t,i){super(e,t,i)}}Do.prototype.ValueTypeName="string";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Jl;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Gi{constructor(e,t,i,a){super(e,t,i,a)}}wo.prototype.ValueTypeName="vector";class tu{constructor(e="",t=-1,i=[],a=Am){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=zi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,h=i.length;c!==h;++c)t.push(qA(i[c]).scale(a));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,c=i.length;l!==c;++l)t.push(Gi.toJSON(i[l]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const l=t.length,c=[];for(let h=0;h<l;h++){let f=[],d=[];f.push((h+l-1)%l,h,(h+1)%l),d.push(0,1,0);const m=GA(f);f=ay(f,1,m),d=ay(d,1,m),!a&&f[0]===0&&(f.push(l),d.push(d[0])),c.push(new Ro(".morphTargetInfluences["+t[h].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},l=/^([\w-]*?)([\d]+)$/;for(let h=0,f=e.length;h<f;h++){const d=e[h],m=d.name.match(l);if(m&&m.length>1){const _=m[1];let v=a[_];v||(a[_]=v=[]),v.push(d)}}const c=[];for(const h in a)c.push(this.CreateFromMorphTargetSequence(h,a[h],t,i));return c}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(_,v,y,S,T){if(y.length!==0){const M=[],x=[];tM(y,M,x,S),M.length!==0&&T.push(new _(v,M,x))}},a=[],l=e.name||"default",c=e.fps||30,h=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const v=d[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let S;for(S=0;S<v.length;S++)if(v[S].morphTargets)for(let T=0;T<v[S].morphTargets.length;T++)y[v[S].morphTargets[T]]=-1;for(const T in y){const M=[],x=[];for(let P=0;P!==v[S].morphTargets.length;++P){const D=v[S];M.push(D.time),x.push(D.morphTarget===T?1:0)}a.push(new Ro(".morphTargetInfluence["+T+"]",M,x))}f=y.length*c}else{const y=".bones["+t[_].name+"]";i(wo,y+".position",v,"pos",a),i(Yn,y+".quaternion",v,"rot",a),i(wo,y+".scale",v,"scl",a)}}return a.length===0?null:new this(l,f,a,h)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const l=this.tracks[i];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function YA(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ro;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return iM;case"quaternion":return Yn;case"bool":case"boolean":return Lo;case"string":return Do}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qA(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=YA(s.type);if(s.times===void 0){const t=[],i=[];tM(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Or={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class jA{constructor(e,t,i){const a=this;let l=!1,c=0,h=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){h++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,h),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,h),c===h&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,_){return d.push(m,_),this},this.removeHandler=function(m){const _=d.indexOf(m);return _!==-1&&d.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=d.length;_<v;_+=2){const y=d[_],S=d[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return S}return null}}}const ZA=new jA;class Uo{constructor(e){this.manager=e!==void 0?e:ZA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,l){i.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class KA extends Error{constructor(e,t){super(e),this.response=t}}class rM extends Uo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Or.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:i,onError:a});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),h=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const m=Cr[e],_=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,S=y!==0;let T=0;const M=new ReadableStream({start(x){P();function P(){_.read().then(({done:D,value:w})=>{if(D)x.close();else{T+=w.byteLength;const O=new ProgressEvent("progress",{lengthComputable:S,loaded:T,total:y});for(let F=0,U=m.length;F<U;F++){const G=m[F];G.onProgress&&G.onProgress(O)}x.enqueue(w),P()}},D=>{x.error(D)})}}});return new Response(M)}else throw new KA(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(m=>new DOMParser().parseFromString(m,h));case"json":return d.json();default:if(h==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(h),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(S=>y.decode(S))}}}).then(d=>{Or.add(`file:${e}`,d);const m=Cr[e];delete Cr[e];for(let _=0,v=m.length;_<v;_++){const y=m[_];y.onLoad&&y.onLoad(d)}}).catch(d=>{const m=Cr[e];if(m===void 0)throw this.manager.itemError(e),d;delete Cr[e];for(let _=0,v=m.length;_<v;_++){const y=m[_];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const ro=new WeakMap;class sM extends Uo{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Or.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=ro.get(c);_===void 0&&(_=[],ro.set(c,_)),_.push({onLoad:t,onError:a})}return c}const h=eu("img");function f(){m(),t&&t(this);const _=ro.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}ro.delete(this),l.manager.itemEnd(e)}function d(_){m(),a&&a(_),Or.remove(`image:${e}`);const v=ro.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onError&&S.onError(_)}ro.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){h.removeEventListener("load",f,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",f,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Or.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class QA extends Uo{constructor(e){super(e)}load(e,t,i,a){const l=new Ln,c=new sM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},i,a),l}}class dh extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zd=new ot,oy=new B,ly=new B;class Um{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=nr,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dm,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;oy.setFromMatrixPosition(e.matrixWorld),t.position.copy(oy),ly.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ly),t.updateMatrixWorld(),Zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JA extends Um{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ao*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(i!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=i,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $A extends dh{constructor(e,t,i=0,a=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=a,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new JA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uy=new ot,Ol=new B,Kd=new B;class eb extends Um{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),Ol.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ol),Kd.copy(i.position),Kd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Kd),i.updateMatrixWorld(),a.makeTranslation(-Ol.x,-Ol.y,-Ol.z),uy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uy)}}class tb extends dh{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vo extends jx{constructor(e=-1,t=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,c=i+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nb extends Um{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ib extends dh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ql{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qd=new WeakMap;class rb extends Uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Or.get(`image-bitmap:${e}`);if(c!==void 0){if(l.manager.itemStart(e),c.then){c.then(d=>{if(Qd.has(c)===!0)a&&a(Qd.get(c)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(d),l.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c}const h={};h.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",h.headers=this.requestHeader;const f=fetch(e,h).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(d){return Or.add(`image-bitmap:${e}`,d),t&&t(d),l.manager.itemEnd(e),d}).catch(function(d){a&&a(d),Qd.set(f,d),Or.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});Or.add(`image-bitmap:${e}`,f),l.manager.itemStart(e)}}class sb extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class ob{constructor(e,t,i){this.binding=e,this.valueSize=i;let a,l,c;switch(t){case"quaternion":a=this._slerp,l=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":a=this._select,l=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:a=this._lerp,l=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=a,this._mixBufferRegionAdditive=l,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,a=this.valueSize,l=e*a+a;let c=this.cumulativeWeight;if(c===0){for(let h=0;h!==a;++h)i[l+h]=i[h];c=t}else{c+=t;const h=t/c;this._mixBufferRegion(i,l,0,h,a)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,a=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,a,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,a=e*t+t,l=this.cumulativeWeight,c=this.cumulativeWeightAdditive,h=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const f=t*this._origIndex;this._mixBufferRegion(i,a,f,1-l,t)}c>0&&this._mixBufferRegionAdditive(i,a,this._addIndex*t,1,t);for(let f=t,d=t+t;f!==d;++f)if(i[f]!==i[f+t]){h.setValue(i,a);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,a=i*this._origIndex;e.getValue(t,a);for(let l=i,c=a;l!==c;++l)t[l]=t[a+l%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,a,l){if(a>=.5)for(let c=0;c!==l;++c)e[t+c]=e[i+c]}_slerp(e,t,i,a){ut.slerpFlat(e,t,e,t,e,i,a)}_slerpAdditive(e,t,i,a,l){const c=this._workIndex*l;ut.multiplyQuaternionsFlat(e,c,e,t,e,i),ut.slerpFlat(e,t,e,t,e,c,a)}_lerp(e,t,i,a,l){const c=1-a;for(let h=0;h!==l;++h){const f=t+h;e[f]=e[f]*c+e[i+h]*a}}_lerpAdditive(e,t,i,a,l){for(let c=0;c!==l;++c){const h=t+c;e[h]=e[h]+e[i+c]*a}}}const Nm="\\[\\]\\.:\\/",lb=new RegExp("["+Nm+"]","g"),Pm="[^"+Nm+"]",ub="[^"+Nm.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",Pm),hb=/(WCOD+)?/.source.replace("WCOD",ub),fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pm),db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pm),pb=new RegExp("^"+cb+hb+fb+db+"$"),mb=["material","materials","bones","map"];class gb{constructor(e,t,i){const a=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,l=i.length;a!==l;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,i):new Ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lb,"")}static parseTrackName(e){const t=pb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const l=i.nodeName.substring(a+1);mb.indexOf(l)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=l)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(l){for(let c=0;c<l.length;c++){const h=l[c];if(h.name===t||h.uuid===t)return h;const f=i(h.children);if(f)return f}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,l=i.length;a!==l;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let l=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===d){d=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[a];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?h=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(l!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=gb;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _b{constructor(e,t,i=null,a=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=a;const l=t.tracks,c=l.length,h=new Array(c),f={endingStart:ho,endingEnd:ho};for(let d=0;d!==c;++d){const m=l[d].createInterpolant(null);h[d]=m,m.settings=f}this._interpolantSettings=f,this._interpolants=h,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=nm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const a=this._clip.duration,l=e._clip.duration,c=l/a,h=a/l;e.warp(1,c,t),this.warp(h,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const a=this._mixer,l=a.time,c=this.timeScale;let h=this._timeScaleInterpolant;h===null&&(h=a._lendControlInterpolant(),this._timeScaleInterpolant=h);const f=h.parameterPositions,d=h.sampleValues;return f[0]=l,f[1]=l+i,d[0]=e/c,d[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,a){if(!this.enabled){this._updateWeight(e);return}const l=this._startTime;if(l!==null){const f=(e-l)*i;f<0||i===0?t=0:(this._startTime=null,t=i*f)}t*=this._updateTimeScale(e);const c=this._updateTime(t),h=this._updateWeight(e);if(h>0){const f=this._interpolants,d=this._propertyBindings;switch(this.blendMode){case bT:for(let m=0,_=f.length;m!==_;++m)f[m].evaluate(c),d[m].accumulateAdditive(h);break;case Am:default:for(let m=0,_=f.length;m!==_;++m)f[m].evaluate(c),d[m].accumulate(a,h)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const a=i.evaluate(e)[0];t*=a,e>i.parameterPositions[1]&&(this.stopFading(),a===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const a=i.evaluate(e)[0];t*=a,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let a=this.time+e,l=this._loopCount;const c=i===AT;if(e===0)return l===-1?a:c&&(l&1)===1?t-a:a;if(i===TT){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(a>=t)a=t;else if(a<0)a=0;else{this.time=a;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(l===-1&&(e>=0?(l=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),a>=t||a<0){const h=Math.floor(a/t);a-=t*h,l+=Math.abs(h);const f=this.repetitions-l;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,a=e>0?t:0,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const d=e<0;this._setEndings(d,!d,c)}else this._setEndings(!1,!1,c);this._loopCount=l,this.time=a,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:h})}}else this.time=a;if(c&&(l&1)===1)return t-a}return a}_setEndings(e,t,i){const a=this._interpolantSettings;i?(a.endingStart=fo,a.endingEnd=fo):(e?a.endingStart=this.zeroSlopeAtStart?fo:ho:a.endingStart=nh,t?a.endingEnd=this.zeroSlopeAtEnd?fo:ho:a.endingEnd=nh)}_scheduleFading(e,t,i){const a=this._mixer,l=a.time;let c=this._weightInterpolant;c===null&&(c=a._lendControlInterpolant(),this._weightInterpolant=c);const h=c.parameterPositions,f=c.sampleValues;return h[0]=l,f[0]=t,h[1]=l+e,f[1]=i,this}}const vb=new Float32Array(1);class yb extends aa{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,a=e._clip.tracks,l=a.length,c=e._propertyBindings,h=e._interpolants,f=i.uuid,d=this._bindingsByRootAndName;let m=d[f];m===void 0&&(m={},d[f]=m);for(let _=0;_!==l;++_){const v=a[_],y=v.name;let S=m[y];if(S!==void 0)++S.referenceCount,c[_]=S;else{if(S=c[_],S!==void 0){S._cacheIndex===null&&(++S.referenceCount,this._addInactiveBinding(S,f,y));continue}const T=t&&t._propertyBindings[_].binding.parsedPath;S=new ob(Ft.create(i,y,T),v.ValueTypeName,v.getValueSize()),++S.referenceCount,this._addInactiveBinding(S,f,y),c[_]=S}h[_].resultBuffer=S.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,a=e._clip.uuid,l=this._actionsByClip[a];this._bindAction(e,l&&l.knownActions[0]),this._addInactiveAction(e,a,i)}const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const a=this._actions,l=this._actionsByClip;let c=l[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,l[t]=c;else{const h=c.knownActions;e._byClipCacheIndex=h.length,h.push(e)}e._cacheIndex=a.length,a.push(e),c.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],a=e._cacheIndex;i._cacheIndex=a,t[a]=i,t.pop(),e._cacheIndex=null;const l=e._clip.uuid,c=this._actionsByClip,h=c[l],f=h.knownActions,d=f[f.length-1],m=e._byClipCacheIndex;d._byClipCacheIndex=m,f[m]=d,f.pop(),e._byClipCacheIndex=null;const _=h.actionByRoot,v=(e._localRoot||this._root).uuid;delete _[v],f.length===0&&delete c[l],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,a=t.length;i!==a;++i){const l=t[i];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,a=this._nActiveActions++,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,a=--this._nActiveActions,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_addInactiveBinding(e,t,i){const a=this._bindingsByRootAndName,l=this._bindings;let c=a[t];c===void 0&&(c={},a[t]=c),c[i]=e,e._cacheIndex=l.length,l.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,a=i.rootNode.uuid,l=i.path,c=this._bindingsByRootAndName,h=c[a],f=t[t.length-1],d=e._cacheIndex;f._cacheIndex=d,t[d]=f,t.pop(),delete h[l],Object.keys(h).length===0&&delete c[a]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,a=this._nActiveBindings++,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,a=--this._nActiveBindings,l=t[a];e._cacheIndex=a,t[a]=e,l._cacheIndex=i,t[i]=l}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new nM(new Float32Array(2),new Float32Array(2),1,vb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,a=--this._nActiveControlInterpolants,l=t[a];e.__cacheIndex=a,t[a]=e,l.__cacheIndex=i,t[i]=l}clipAction(e,t,i){const a=t||this._root,l=a.uuid;let c=typeof e=="string"?tu.findByName(a,e):e;const h=c!==null?c.uuid:e,f=this._actionsByClip[h];let d=null;if(i===void 0&&(c!==null?i=c.blendMode:i=Am),f!==void 0){const _=f.actionByRoot[l];if(_!==void 0&&_.blendMode===i)return _;d=f.knownActions[0],c===null&&(c=d._clip)}if(c===null)return null;const m=new _b(this,c,t,i);return this._bindAction(m,d),this._addInactiveAction(m,h,l),m}existingAction(e,t){const i=t||this._root,a=i.uuid,l=typeof e=="string"?tu.findByName(i,e):e,c=l?l.uuid:e,h=this._actionsByClip[c];return h!==void 0&&h.actionByRoot[a]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,a=this.time+=e,l=Math.sign(e),c=this._accuIndex^=1;for(let d=0;d!==i;++d)t[d]._update(a,e,l,c);const h=this._bindings,f=this._nActiveBindings;for(let d=0;d!==f;++d)h[d].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,a=this._actionsByClip,l=a[i];if(l!==void 0){const c=l.knownActions;for(let h=0,f=c.length;h!==f;++h){const d=c[h];this._deactivateAction(d);const m=d._cacheIndex,_=t[t.length-1];d._cacheIndex=null,d._byClipCacheIndex=null,_._cacheIndex=m,t[m]=_,t.pop(),this._removeInactiveBindingsForAction(d)}delete a[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const c in i){const h=i[c].actionByRoot,f=h[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const a=this._bindingsByRootAndName,l=a[t];if(l!==void 0)for(const c in l){const h=l[c];h.restoreOriginalState(),this._removeInactiveBinding(h)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class cy{constructor(e,t,i,a,l,c=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=a,this.count=l,this.normalized=c,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const hy=new ot;class xb{constructor(e,t,i=0,a=1/0){this.ray=new Co(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Cm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hy),this}intersectObject(e,t=!0,i=[]){return om(e,this,i,t),i.sort(fy),i}intersectObjects(e,t=!0,i=[]){for(let a=0,l=e.length;a<l;a++)om(e[a],this,i,t);return i.sort(fy),i}}function fy(s,e){return s.distance-e.distance}function om(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const l=s.children;for(let c=0,h=l.length;c<h;c++)om(l[c],e,t,!0)}}class dy{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mb extends ru{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Dn;a.setAttribute("position",new Vi(t,3)),a.setAttribute("color",new Vi(i,3));const l=new oa({vertexColors:!0,toneMapped:!1});super(a,l),this.type="AxesHelper"}setColors(e,t,i){const a=new Qe,l=this.geometry.attributes.color.array;return a.set(e),a.toArray(l,0),a.toArray(l,3),a.set(t),a.toArray(l,6),a.toArray(l,9),a.set(i),a.toArray(l,12),a.toArray(l,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function py(s,e,t,i){const a=Sb(i);switch(t){case Ox:return s*e;case Mm:return s*e/a.components*a.byteLength;case Sm:return s*e/a.components*a.byteLength;case Bx:return s*e*2/a.components*a.byteLength;case Em:return s*e*2/a.components*a.byteLength;case Ix:return s*e*3/a.components*a.byteLength;case Ti:return s*e*4/a.components*a.byteLength;case Tm:return s*e*4/a.components*a.byteLength;case Yc:case qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dp:case Np:return Math.max(s,16)*Math.max(e,8)/4;case Lp:case Up:return Math.max(s,8)*Math.max(e,8)/2;case Pp:case Op:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ip:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xp:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case jp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kc:case Qp:case Jp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fx:case $p:return Math.ceil(s/4)*Math.ceil(e/4)*8;case em:case tm:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sb(s){switch(s){case nr:case Ux:return{byteLength:1,components:1};case jl:case Nx:case nu:return{byteLength:2,components:1};case ym:case xm:return{byteLength:2,components:4};case ra:case vm:case Fi:return{byteLength:4,components:1};case Px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oM(){let s=null,e=!1,t=null,i=null;function a(l,c){t(l,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Eb(s){const e=new WeakMap;function t(h,f){const d=h.array,m=h.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,d,m),h.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function i(h,f,d){const m=f.array,_=f.updateRanges;if(s.bindBuffer(d,h),_.length===0)s.bufferSubData(d,0,m);else{_.sort((y,S)=>y.start-S.start);let v=0;for(let y=1;y<_.length;y++){const S=_[v],T=_[y];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++v,_[v]=T)}_.length=v+1;for(let y=0,S=_.length;y<S;y++){const T=_[y];s.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,f));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,f),d.version=h.version}}return{get:a,remove:l,update:c}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ub=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ER=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,j1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:Tb,alphahash_pars_fragment:Ab,alphamap_fragment:bb,alphamap_pars_fragment:Rb,alphatest_fragment:wb,alphatest_pars_fragment:Cb,aomap_fragment:Lb,aomap_pars_fragment:Db,batching_pars_vertex:Ub,batching_vertex:Nb,begin_vertex:Pb,beginnormal_vertex:Ob,bsdfs:Ib,iridescence_fragment:Bb,bumpmap_pars_fragment:Fb,clipping_planes_fragment:zb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:Gb,color_fragment:kb,color_pars_fragment:Wb,color_pars_vertex:Xb,color_vertex:Yb,common:qb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:Zb,displacementmap_pars_vertex:Kb,displacementmap_vertex:Qb,emissivemap_fragment:Jb,emissivemap_pars_fragment:$b,colorspace_fragment:eR,colorspace_pars_fragment:tR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:rR,envmap_pars_vertex:sR,envmap_physical_pars_fragment:gR,envmap_vertex:aR,fog_vertex:oR,fog_pars_vertex:lR,fog_fragment:uR,fog_pars_fragment:cR,gradientmap_pars_fragment:hR,lightmap_pars_fragment:fR,lights_lambert_fragment:dR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:_R,lights_toon_pars_fragment:vR,lights_phong_fragment:yR,lights_phong_pars_fragment:xR,lights_physical_fragment:MR,lights_physical_pars_fragment:SR,lights_fragment_begin:ER,lights_fragment_maps:TR,lights_fragment_end:AR,logdepthbuf_fragment:bR,logdepthbuf_pars_fragment:RR,logdepthbuf_pars_vertex:wR,logdepthbuf_vertex:CR,map_fragment:LR,map_pars_fragment:DR,map_particle_fragment:UR,map_particle_pars_fragment:NR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:OR,morphinstance_vertex:IR,morphcolor_vertex:BR,morphnormal_vertex:FR,morphtarget_pars_vertex:zR,morphtarget_vertex:HR,normal_fragment_begin:VR,normal_fragment_maps:GR,normal_pars_fragment:kR,normal_pars_vertex:WR,normal_vertex:XR,normalmap_pars_fragment:YR,clearcoat_normal_fragment_begin:qR,clearcoat_normal_fragment_maps:jR,clearcoat_pars_fragment:ZR,iridescence_pars_fragment:KR,opaque_fragment:QR,packing:JR,premultiplied_alpha_fragment:$R,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:a1,shadowmap_vertex:o1,shadowmask_pars_fragment:l1,skinbase_vertex:u1,skinning_pars_vertex:c1,skinning_vertex:h1,skinnormal_vertex:f1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:_1,transmission_pars_fragment:v1,uv_pars_fragment:y1,uv_pars_vertex:x1,uv_vertex:M1,worldpos_vertex:S1,background_vert:E1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:b1,cube_vert:R1,cube_frag:w1,depth_vert:C1,depth_frag:L1,distanceRGBA_vert:D1,distanceRGBA_frag:U1,equirect_vert:N1,equirect_frag:P1,linedashed_vert:O1,linedashed_frag:I1,meshbasic_vert:B1,meshbasic_frag:F1,meshlambert_vert:z1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:k1,meshnormal_frag:W1,meshphong_vert:X1,meshphong_frag:Y1,meshphysical_vert:q1,meshphysical_frag:j1,meshtoon_vert:Z1,meshtoon_frag:K1,points_vert:Q1,points_frag:J1,shadow_vert:$1,shadow_frag:ew,sprite_vert:tw,sprite_frag:nw},Pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},er={basic:{uniforms:Xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Pe.points,Pe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Pe.common,Pe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Pe.sprite,Pe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Xn([Pe.common,Pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Xn([Pe.lights,Pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};er.physical={uniforms:Xn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Bc={r:0,b:0,g:0},Ys=new jn,iw=new ot;function rw(s,e,t,i,a,l,c){const h=new Qe(0);let f=l===!0?0:1,d,m,_=null,v=0,y=null;function S(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?t:e).get(w)),w}function T(D){let w=!1;const O=S(D);O===null?x(h,f):O&&O.isColor&&(x(O,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,w){const O=S(w);O&&(O.isCubeTexture||O.mapping===uh)?(m===void 0&&(m=new Gn(new iu(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:bo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),Ys.copy(w.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(iw.makeRotationFromEuler(Ys)),m.material.toneMapped=Ut.getTransfer(O.colorSpace)!==Yt,(_!==O||v!==O.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=O,v=O.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Gn(new su(2,2),new zr({name:"BackgroundMaterial",uniforms:bo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Ut.getTransfer(O.colorSpace)!==Yt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||y!==s.toneMapping)&&(d.material.needsUpdate=!0,_=O,v=O.version,y=s.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function x(D,w){D.getRGB(Bc,Yx(s)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,c)}function P(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,w=1){h.set(D),f=w,x(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(h,f)},render:T,addToRenderList:M,dispose:P}}function sw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function h(A,k,se,re,me){let he=!1;const z=_(re,se,k);l!==z&&(l=z,d(l.object)),he=y(A,re,se,me),he&&S(A,re,se,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,w(A,k,se,re),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function f(){return s.createVertexArray()}function d(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function _(A,k,se){const re=se.wireframe===!0;let me=i[A.id];me===void 0&&(me={},i[A.id]=me);let he=me[k.id];he===void 0&&(he={},me[k.id]=he);let z=he[re];return z===void 0&&(z=v(f()),he[re]=z),z}function v(A){const k=[],se=[],re=[];for(let me=0;me<t;me++)k[me]=0,se[me]=0,re[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:re,object:A,attributes:{},index:null}}function y(A,k,se,re){const me=l.attributes,he=k.attributes;let z=0;const j=se.getAttributes();for(const q in j)if(j[q].location>=0){const N=me[q];let ee=he[q];if(ee===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;z++}return l.attributesNum!==z||l.index!==re}function S(A,k,se,re){const me={},he=k.attributes;let z=0;const j=se.getAttributes();for(const q in j)if(j[q].location>=0){let N=he[q];N===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),me[q]=ee,z++}l.attributes=me,l.attributesNum=z,l.index=re}function T(){const A=l.newAttributes;for(let k=0,se=A.length;k<se;k++)A[k]=0}function M(A){x(A,0)}function x(A,k){const se=l.newAttributes,re=l.enabledAttributes,me=l.attributeDivisors;se[A]=1,re[A]===0&&(s.enableVertexAttribArray(A),re[A]=1),me[A]!==k&&(s.vertexAttribDivisor(A,k),me[A]=k)}function P(){const A=l.newAttributes,k=l.enabledAttributes;for(let se=0,re=k.length;se<re;se++)k[se]!==A[se]&&(s.disableVertexAttribArray(se),k[se]=0)}function D(A,k,se,re,me,he,z){z===!0?s.vertexAttribIPointer(A,k,se,me,he):s.vertexAttribPointer(A,k,se,re,me,he)}function w(A,k,se,re){T();const me=re.attributes,he=se.getAttributes(),z=k.defaultAttributeValues;for(const j in he){const q=he[j];if(q.location>=0){let Se=me[j];if(Se===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor)),Se!==void 0){const N=Se.normalized,ee=Se.itemSize,Me=e.get(Se);if(Me===void 0)continue;const Ee=Me.buffer,J=Me.type,_e=Me.bytesPerElement,Ae=J===s.INT||J===s.UNSIGNED_INT||Se.gpuType===vm;if(Se.isInterleavedBufferAttribute){const Le=Se.data,Ue=Le.stride,ct=Se.offset;if(Le.isInstancedInterleavedBuffer){for(let Ke=0;Ke<q.locationSize;Ke++)x(q.location+Ke,Le.meshPerAttribute);A.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Ke=0;Ke<q.locationSize;Ke++)M(q.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ke=0;Ke<q.locationSize;Ke++)D(q.location+Ke,ee/q.locationSize,J,N,Ue*_e,(ct+ee/q.locationSize*Ke)*_e,Ae)}else{if(Se.isInstancedBufferAttribute){for(let Le=0;Le<q.locationSize;Le++)x(q.location+Le,Se.meshPerAttribute);A.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Le=0;Le<q.locationSize;Le++)M(q.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Le=0;Le<q.locationSize;Le++)D(q.location+Le,ee/q.locationSize,J,N,ee*_e,ee/q.locationSize*Le*_e,Ae)}}else if(z!==void 0){const N=z[j];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(q.location,N);break;case 3:s.vertexAttrib3fv(q.location,N);break;case 4:s.vertexAttrib4fv(q.location,N);break;default:s.vertexAttrib1fv(q.location,N)}}}}P()}function O(){G();for(const A in i){const k=i[A];for(const se in k){const re=k[se];for(const me in re)m(re[me].object),delete re[me];delete k[se]}delete i[A]}}function F(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const se in k){const re=k[se];for(const me in re)m(re[me].object),delete re[me];delete k[se]}delete i[A.id]}function U(A){for(const k in i){const se=i[k];if(se[A.id]===void 0)continue;const re=se[A.id];for(const me in re)m(re[me].object),delete re[me];delete se[A.id]}}function G(){L(),c=!0,l!==a&&(l=a,d(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:G,resetDefaultState:L,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:M,disableUnusedAttributes:P}}function aw(s,e,t){let i;function a(d){i=d}function l(d,m){s.drawArrays(i,d,m),t.update(m,i,1)}function c(d,m,_){_!==0&&(s.drawArraysInstanced(i,d,m,_),t.update(m,i,_))}function h(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,_);let y=0;for(let S=0;S<_;S++)y+=m[S];t.update(y,i,1)}function f(d,m,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<d.length;S++)c(d[S],m[S],v[S]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,m,0,v,0,_);let S=0;for(let T=0;T<_;T++)S+=m[T]*v[T];t.update(S,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function ow(s,e,t,i){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==Ti&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const G=U===nu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==nr&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fi&&!G)}function f(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=S>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:O,maxSamples:F}}function lw(s){const e=this;let t=null,i=0,a=!1,l=!1;const c=new ys,h=new it,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||i!==0||a;return a=v,i=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const S=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=s.get(_);if(!a||S===null||S.length===0||l&&!M)l?m(null):d();else{const P=l?0:i,D=P*4;let w=x.clippingState||null;f.value=w,w=m(S,v,D,y);for(let O=0;O!==D;++O)w[O]=t[O];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,y,S){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=f.value,S!==!0||M===null){const x=y+T*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,w=y;D!==T;++D,w+=4)c.copy(_[D]).applyMatrix4(P,h),c.normal.toArray(M,w),M[w+3]=c.constant}f.value=M,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function uw(s){let e=new WeakMap;function t(c,h){return h===wp?c.mapping=Mo:h===Cp&&(c.mapping=So),c}function i(c){if(c&&c.isTexture){const h=c.mapping;if(h===wp||h===Cp)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new bA(f.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",a),t(d.texture,c.mapping)}else return null}}return c}function a(c){const h=c.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const po=4,my=[.125,.215,.35,.446,.526,.582],ea=20,Jd=new vo,gy=new Qe;let $d=null,ep=0,tp=0,np=!1;const Js=(1+Math.sqrt(5))/2,so=1/Js,_y=[new B(-Js,so,0),new B(Js,so,0),new B(-so,0,Js),new B(so,0,Js),new B(0,Js,-so),new B(0,Js,so),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],cw=new B;class vy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100,l={}){const{size:c=256,position:h=cw}=l;$d=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=My(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($d,ep,tp),this._renderer.xr.enabled=np,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:nu,format:Ti,colorSpace:To,depthBuffer:!1},a=yy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yy(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hw(l)),this._blurMaterial=fw(l,e,t)}return a}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Jd)}_sceneToCubeUV(e,t,i,a,l){const f=new Cn(90,1,t,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(gy),_.toneMapping=Ts,_.autoClear=!1;const S=new Pr({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new Gn(new iu,S);let M=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,M=!0):(S.color.copy(gy),M=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[P],l.y,l.z)):D===1?(f.up.set(0,0,d[P]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[P],l.z)):(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[P]));const w=this._cubeSize;Fc(a,D*w,P>2?w:0,w,w),_.setRenderTarget(a),M&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Mo||e.mapping===So;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=My()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xy());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Fc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Jd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=_y[(a-l-1)%_y.length];this._blur(e,l-1,l,c,h)}t.autoClear=i}_blur(e,t,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",l),this._halfBlur(c,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,c,h){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Gn(this._lodPlanes[a],d),v=d.uniforms,y=this._sizeLods[i]-1,S=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ea-1),T=l/S,M=isFinite(l)?1+Math.floor(m*T):ea;M>ea&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ea}`);const x=[];let P=0;for(let U=0;U<ea;++U){const G=U/T,L=Math.exp(-G*G/2);x.push(L),U===0?P+=L:U<M&&(P+=2*L)}for(let U=0;U<x.length;U++)x[U]=x[U]/P;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=c==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:D}=this;v.dTheta.value=S,v.mipInt.value=D-i;const w=this._sizeLods[a],O=3*w*(a>D-po?a-D+po:0),F=4*(this._cubeSize-w);Fc(t,O,F,3*w,2*w),f.setRenderTarget(t),f.render(_,Jd)}}function hw(s){const e=[],t=[],i=[];let a=s;const l=s-po+1+my.length;for(let c=0;c<l;c++){const h=Math.pow(2,a);t.push(h);let f=1/h;c>s-po?f=my[c-s+po-1]:c===0&&(f=0),i.push(f);const d=1/(h-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,S=6,T=3,M=2,x=1,P=new Float32Array(T*S*y),D=new Float32Array(M*S*y),w=new Float32Array(x*S*y);for(let F=0;F<y;F++){const U=F%3*2/3-1,G=F>2?0:-1,L=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];P.set(L,T*S*F),D.set(v,M*S*F);const A=[F,F,F,F,F,F];w.set(A,x*S*F)}const O=new Dn;O.setAttribute("position",new qt(P,T)),O.setAttribute("uv",new qt(D,M)),O.setAttribute("faceIndex",new qt(w,x)),e.push(O),a>po&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yy(s,e,t){const i=new sa(s,e,t);return i.texture.mapping=uh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fc(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function fw(s,e,t){const i=new Float32Array(ea),a=new B(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ea,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function xy(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function My(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dw(s){let e=new WeakMap,t=null;function i(h){if(h&&h.isTexture){const f=h.mapping,d=f===wp||f===Cp,m=f===Mo||f===So;if(d||m){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new vy(s)),_=d?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return d&&y&&y.height>0||m&&y&&a(y)?(t===null&&(t=new vy(s)),_=d?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function a(h){let f=0;const d=6;for(let m=0;m<d;m++)h[m]!==void 0&&f++;return f===d}function l(h){const f=h.target;f.removeEventListener("dispose",l);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function pw(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&go("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function mw(s,e,t,i){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);v.removeEventListener("dispose",c),delete a[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function d(_){const v=[],y=_.index,S=_.attributes.position;let T=0;if(y!==null){const P=y.array;T=y.version;for(let D=0,w=P.length;D<w;D+=3){const O=P[D+0],F=P[D+1],U=P[D+2];v.push(O,F,F,U,U,O)}}else if(S!==void 0){const P=S.array;T=S.version;for(let D=0,w=P.length/3-1;D<w;D+=3){const O=D+0,F=D+1,U=D+2;v.push(O,F,F,U,U,O)}}else return;const M=new(Vx(v)?Xx:Wx)(v,1);M.version=T;const x=l.get(_);x&&e.remove(x),l.set(_,M)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&d(_)}else d(_);return l.get(_)}return{get:h,update:f,getWireframeAttribute:m}}function gw(s,e,t){let i;function a(v){i=v}let l,c;function h(v){l=v.type,c=v.bytesPerElement}function f(v,y){s.drawElements(i,y,l,v*c),t.update(y,i,1)}function d(v,y,S){S!==0&&(s.drawElementsInstanced(i,y,l,v*c,S),t.update(y,i,S))}function m(v,y,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,v,0,S);let M=0;for(let x=0;x<S;x++)M+=y[x];t.update(M,i,1)}function _(v,y,S,T){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(i,y,0,l,v,0,T,0,S);let x=0;for(let P=0;P<S;P++)x+=y[P]*T[P];t.update(x,i,1)}}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function _w(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function vw(s,e,t){const i=new WeakMap,a=new Ot;function l(c,h,f){const d=c.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(h);if(v===void 0||v.count!==_){let A=function(){G.dispose(),i.delete(h),h.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let w=0;S===!0&&(w=1),T===!0&&(w=2),M===!0&&(w=3);let O=h.attributes.position.count*w,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*F*4*_),G=new Gx(U,O,F,_);G.type=Fi,G.needsUpdate=!0;const L=w*4;for(let k=0;k<_;k++){const se=x[k],re=P[k],me=D[k],he=O*F*4*k;for(let z=0;z<se.count;z++){const j=z*L;S===!0&&(a.fromBufferAttribute(se,z),U[he+j+0]=a.x,U[he+j+1]=a.y,U[he+j+2]=a.z,U[he+j+3]=0),T===!0&&(a.fromBufferAttribute(re,z),U[he+j+4]=a.x,U[he+j+5]=a.y,U[he+j+6]=a.z,U[he+j+7]=0),M===!0&&(a.fromBufferAttribute(me,z),U[he+j+8]=a.x,U[he+j+9]=a.y,U[he+j+10]=a.z,U[he+j+11]=me.itemSize===4?a.w:1)}}v={count:_,texture:G,size:new tt(O,F)},i.set(h,v),h.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let M=0;M<d.length;M++)S+=d[M];const T=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function yw(s,e,t,i){let a=new WeakMap;function l(f){const d=i.render.frame,m=f.geometry,_=e.get(f,m);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return _}function c(){a=new WeakMap}function h(f){const d=f.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const lM=new Ln,Sy=new eM(1,1),uM=new Gx,cM=new cA,hM=new Zx,Ey=[],Ty=[],Ay=new Float32Array(16),by=new Float32Array(9),Ry=new Float32Array(4);function No(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=Ey[a];if(l===void 0&&(l=new Float32Array(a),Ey[a]=l),e!==0){i.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Sn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ph(s,e){let t=Ty[e];t===void 0&&(t=new Int32Array(e),Ty[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function xw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),Sn(t,e)}}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),Sn(t,e)}}function Ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),Sn(t,e)}}function Tw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;Ry.set(i),s.uniformMatrix2fv(this.addr,!1,Ry),Sn(t,i)}}function Aw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;by.set(i),s.uniformMatrix3fv(this.addr,!1,by),Sn(t,i)}}function bw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;Ay.set(i),s.uniformMatrix4fv(this.addr,!1,Ay),Sn(t,i)}}function Rw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),Sn(t,e)}}function Cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),Sn(t,e)}}function Lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),Sn(t,e)}}function Dw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),Sn(t,e)}}function Nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),Sn(t,e)}}function Pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),Sn(t,e)}}function Ow(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Sy.compareFunction=Hx,l=Sy):l=lM,t.setTexture2D(e||l,a)}function Iw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||cM,a)}function Bw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||hM,a)}function Fw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||uM,a)}function zw(s){switch(s){case 5126:return xw;case 35664:return Mw;case 35665:return Sw;case 35666:return Ew;case 35674:return Tw;case 35675:return Aw;case 35676:return bw;case 5124:case 35670:return Rw;case 35667:case 35671:return ww;case 35668:case 35672:return Cw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Uw;case 36295:return Nw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ow;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Fw}}function Hw(s,e){s.uniform1fv(this.addr,e)}function Vw(s,e){const t=No(e,this.size,2);s.uniform2fv(this.addr,t)}function Gw(s,e){const t=No(e,this.size,3);s.uniform3fv(this.addr,t)}function kw(s,e){const t=No(e,this.size,4);s.uniform4fv(this.addr,t)}function Ww(s,e){const t=No(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Xw(s,e){const t=No(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Yw(s,e){const t=No(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qw(s,e){s.uniform1iv(this.addr,e)}function jw(s,e){s.uniform2iv(this.addr,e)}function Zw(s,e){s.uniform3iv(this.addr,e)}function Kw(s,e){s.uniform4iv(this.addr,e)}function Qw(s,e){s.uniform1uiv(this.addr,e)}function Jw(s,e){s.uniform2uiv(this.addr,e)}function $w(s,e){s.uniform3uiv(this.addr,e)}function eC(s,e){s.uniform4uiv(this.addr,e)}function tC(s,e,t){const i=this.cache,a=e.length,l=ph(t,a);Mn(i,l)||(s.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||lM,l[c])}function nC(s,e,t){const i=this.cache,a=e.length,l=ph(t,a);Mn(i,l)||(s.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||cM,l[c])}function iC(s,e,t){const i=this.cache,a=e.length,l=ph(t,a);Mn(i,l)||(s.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||hM,l[c])}function rC(s,e,t){const i=this.cache,a=e.length,l=ph(t,a);Mn(i,l)||(s.uniform1iv(this.addr,l),Sn(i,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||uM,l[c])}function sC(s){switch(s){case 5126:return Hw;case 35664:return Vw;case 35665:return Gw;case 35666:return kw;case 35674:return Ww;case 35675:return Xw;case 35676:return Yw;case 5124:case 35670:return qw;case 35667:case 35671:return jw;case 35668:case 35672:return Zw;case 35669:case 35673:return Kw;case 5125:return Qw;case 36294:return Jw;case 36295:return $w;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return rC}}class aC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zw(t.type)}}class oC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sC(t.type)}}class lC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const h=a[l];h.setValue(e,t[h.id],i)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function wy(s,e){s.seq.push(e),s.map[e.id]=e}function uC(s,e,t){const i=s.name,a=i.length;for(ip.lastIndex=0;;){const l=ip.exec(i),c=ip.lastIndex;let h=l[1];const f=l[2]==="]",d=l[3];if(f&&(h=h|0),d===void 0||d==="["&&c+2===a){wy(t,d===void 0?new aC(h,s,e):new oC(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new lC(h),wy(t,_)),t=_}}}class Qc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);uC(l,c,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=i[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Cy(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const cC=37297;let hC=0;function fC(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const h=c+1;i.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return i.join(`
`)}const Ly=new it;function dC(s){Ut._getMatrix(Ly,Ut.workingColorSpace,s);const e=`mat3( ${Ly.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case ih:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Dy(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+fC(s.getShaderSource(e),c)}else return a}function pC(s,e){const t=dC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mC(s,e){let t;switch(e){case gT:t="Linear";break;case _T:t="Reinhard";break;case vT:t="Cineon";break;case yT:t="ACESFilmic";break;case MT:t="AgX";break;case ST:t="Neutral";break;case xT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zc=new B;function gC(){Ut.getLuminanceCoefficients(zc);const s=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _C(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function vC(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yC(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function kl(s){return s!==""}function Uy(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ny(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xC=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(s){return s.replace(xC,SC)}const MC=new Map;function SC(s,e){let t=_t[e];if(t===void 0){const i=MC.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lm(t)}const EC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Py(s){return s.replace(EC,TC)}function TC(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Oy(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ZE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function bC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mo:case So:e="ENVMAP_TYPE_CUBE";break;case uh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function wC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cx:e="ENVMAP_BLENDING_MULTIPLY";break;case pT:e="ENVMAP_BLENDING_MIX";break;case mT:e="ENVMAP_BLENDING_ADD";break}return e}function CC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function LC(s,e,t,i){const a=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=AC(t),d=bC(t),m=RC(t),_=wC(t),v=CC(t),y=_C(t),S=vC(l),T=a.createProgram();let M,x,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(kl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(kl).join(`
`),x.length>0&&(x+=`
`)):(M=[Oy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),x=[Oy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?_t.tonemapping_pars_fragment:"",t.toneMapping!==Ts?mC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,pC("linearToOutputTexel",t.outputColorSpace),gC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kl).join(`
`)),c=lm(c),c=Uy(c,t),c=Ny(c,t),h=lm(h),h=Uy(h,t),h=Ny(h,t),c=Py(c),h=Py(h),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===R0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===R0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=P+M+c,w=P+x+h,O=Cy(a,a.VERTEX_SHADER,D),F=Cy(a,a.FRAGMENT_SHADER,w);a.attachShader(T,O),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(k){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(T).trim(),re=a.getShaderInfoLog(O).trim(),me=a.getShaderInfoLog(F).trim();let he=!0,z=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,O,F);else{const j=Dy(a,O,"vertex"),q=Dy(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+se+`
`+j+`
`+q)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(re===""||me==="")&&(z=!1);z&&(k.diagnostics={runnable:he,programLog:se,vertexShader:{log:re,prefix:M},fragmentShader:{log:me,prefix:x}})}a.deleteShader(O),a.deleteShader(F),G=new Qc(a,T),L=yC(a,T)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,cC)),A},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=F,this}let DC=0;class UC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NC(e),t.set(e,i)),i}}class NC{constructor(e){this.id=DC++,this.code=e,this.usedTimes=0}}function PC(s,e,t,i,a,l,c){const h=new Cm,f=new UC,d=new Set,m=[],_=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return d.add(L),L===0?"uv":`uv${L}`}function M(L,A,k,se,re){const me=se.fog,he=re.geometry,z=L.isMeshStandardMaterial?se.environment:null,j=(L.isMeshStandardMaterial?t:e).get(L.envMap||z),q=j&&j.mapping===uh?j.image.height:null,Se=S[L.type];L.precision!==null&&(y=a.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const N=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,ee=N!==void 0?N.length:0;let Me=0;he.morphAttributes.position!==void 0&&(Me=1),he.morphAttributes.normal!==void 0&&(Me=2),he.morphAttributes.color!==void 0&&(Me=3);let Ee,J,_e,Ae;if(Se){const mt=er[Se];Ee=mt.vertexShader,J=mt.fragmentShader}else Ee=L.vertexShader,J=L.fragmentShader,f.update(L),_e=f.getVertexShaderID(L),Ae=f.getFragmentShaderID(L);const Le=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),ct=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,Ct=!!L.map,Lt=!!L.matcap,ft=!!j,X=!!L.aoMap,sn=!!L.lightMap,Mt=!!L.bumpMap,ht=!!L.normalMap,Ge=!!L.displacementMap,dt=!!L.emissiveMap,Ye=!!L.metalnessMap,rt=!!L.roughnessMap,$t=L.anisotropy>0,I=L.clearcoat>0,b=L.dispersion>0,ie=L.iridescence>0,fe=L.sheen>0,pe=L.transmission>0,ce=$t&&!!L.anisotropyMap,Fe=I&&!!L.clearcoatMap,De=I&&!!L.clearcoatNormalMap,Ve=I&&!!L.clearcoatRoughnessMap,We=ie&&!!L.iridescenceMap,Te=ie&&!!L.iridescenceThicknessMap,Be=fe&&!!L.sheenColorMap,Xe=fe&&!!L.sheenRoughnessMap,W=!!L.specularMap,te=!!L.specularColorMap,Re=!!L.specularIntensityMap,V=pe&&!!L.transmissionMap,we=pe&&!!L.thicknessMap,ye=!!L.gradientMap,Ne=!!L.alphaMap,be=L.alphaTest>0,ge=!!L.alphaHash,Oe=!!L.extensions;let qe=Ts;L.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(qe=s.toneMapping);const vt={shaderID:Se,shaderType:L.type,shaderName:L.name,vertexShader:Ee,fragmentShader:J,defines:L.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:ct,instancingColor:ct&&re.instanceColor!==null,instancingMorph:ct&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:To,alphaToCoverage:!!L.alphaToCoverage,map:Ct,matcap:Lt,envMap:ft,envMapMode:ft&&j.mapping,envMapCubeUVHeight:q,aoMap:X,lightMap:sn,bumpMap:Mt,normalMap:ht,displacementMap:v&&Ge,emissiveMap:dt,normalMapObjectSpace:ht&&L.normalMapType===LT,normalMapTangentSpace:ht&&L.normalMapType===bm,metalnessMap:Ye,roughnessMap:rt,anisotropy:$t,anisotropyMap:ce,clearcoat:I,clearcoatMap:Fe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:ie,iridescenceMap:We,iridescenceThicknessMap:Te,sheen:fe,sheenColorMap:Be,sheenRoughnessMap:Xe,specularMap:W,specularColorMap:te,specularIntensityMap:Re,transmission:pe,transmissionMap:V,thicknessMap:we,gradientMap:ye,opaque:L.transparent===!1&&L.blending===mo&&L.alphaToCoverage===!1,alphaMap:Ne,alphaTest:be,alphaHash:ge,combine:L.combine,mapUv:Ct&&T(L.map.channel),aoMapUv:X&&T(L.aoMap.channel),lightMapUv:sn&&T(L.lightMap.channel),bumpMapUv:Mt&&T(L.bumpMap.channel),normalMapUv:ht&&T(L.normalMap.channel),displacementMapUv:Ge&&T(L.displacementMap.channel),emissiveMapUv:dt&&T(L.emissiveMap.channel),metalnessMapUv:Ye&&T(L.metalnessMap.channel),roughnessMapUv:rt&&T(L.roughnessMap.channel),anisotropyMapUv:ce&&T(L.anisotropyMap.channel),clearcoatMapUv:Fe&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(L.sheenRoughnessMap.channel),specularMapUv:W&&T(L.specularMap.channel),specularColorMapUv:te&&T(L.specularColorMap.channel),specularIntensityMapUv:Re&&T(L.specularIntensityMap.channel),transmissionMapUv:V&&T(L.transmissionMap.channel),thicknessMapUv:we&&T(L.thicknessMap.channel),alphaMapUv:Ne&&T(L.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ht||$t),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!he.attributes.uv&&(Ct||Ne),fog:!!me,useFog:L.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ue,skinning:re.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ct&&L.map.isVideoTexture===!0&&Ut.getTransfer(L.map.colorSpace)===Yt,decodeVideoTextureEmissive:dt&&L.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(L.emissiveMap.colorSpace)===Yt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Si,flipSided:L.side===qn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Oe&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&L.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return vt.vertexUv1s=d.has(1),vt.vertexUv2s=d.has(2),vt.vertexUv3s=d.has(3),d.clear(),vt}function x(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)A.push(k),A.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(P(A,L),D(A,L),A.push(s.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function P(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function D(L,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),A.gradientMap&&h.enable(22),L.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),L.push(h.mask)}function w(L){const A=S[L.type];let k;if(A){const se=er[A];k=qx.clone(se.uniforms)}else k=L.uniforms;return k}function O(L,A){let k;for(let se=0,re=m.length;se<re;se++){const me=m[se];if(me.cacheKey===A){k=me,++k.usedTimes;break}}return k===void 0&&(k=new LC(s,A,L,l),m.push(k)),k}function F(L){if(--L.usedTimes===0){const A=m.indexOf(L);m[A]=m[m.length-1],m.pop(),L.destroy()}}function U(L){f.remove(L)}function G(){f.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:O,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:G}}function OC(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function a(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:l}}function IC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Iy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function By(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function c(_,v,y,S,T,M){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:S,renderOrder:_.renderOrder,z:T,group:M},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=S,x.renderOrder=_.renderOrder,x.z=T,x.group=M),e++,x}function h(_,v,y,S,T,M){const x=c(_,v,y,S,T,M);y.transmission>0?i.push(x):y.transparent===!0?a.push(x):t.push(x)}function f(_,v,y,S,T,M){const x=c(_,v,y,S,T,M);y.transmission>0?i.unshift(x):y.transparent===!0?a.unshift(x):t.unshift(x)}function d(_,v){t.length>1&&t.sort(_||IC),i.length>1&&i.sort(v||Iy),a.length>1&&a.sort(v||Iy)}function m(){for(let _=e,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:h,unshift:f,finish:m,sort:d}}function BC(){let s=new WeakMap;function e(i,a){const l=s.get(i);let c;return l===void 0?(c=new By,s.set(i,[c])):a>=l.length?(c=new By,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function FC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function zC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HC=0;function VC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GC(s){const e=new FC,t=zC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new B);const a=new B,l=new ot,c=new ot;function h(d){let m=0,_=0,v=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let y=0,S=0,T=0,M=0,x=0,P=0,D=0,w=0,O=0,F=0,U=0;d.sort(VC);for(let L=0,A=d.length;L<A;L++){const k=d[L],se=k.color,re=k.intensity,me=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=se.r*re,_+=se.g*re,v+=se.b*re;else if(k.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(k.sh.coefficients[z],re);U++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const j=k.shadow,q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.directionalShadow[y]=q,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=k.shadow.matrix,P++}i.directional[y]=z,y++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(se).multiplyScalar(re),z.distance=me,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,i.spot[T]=z;const j=k.shadow;if(k.map&&(i.spotLightMap[O]=k.map,O++,j.updateMatrices(k),k.castShadow&&F++),i.spotLightMatrix[T]=j.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,i.spotShadow[T]=q,i.spotShadowMap[T]=he,w++}T++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(se).multiplyScalar(re),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),i.rectArea[M]=z,M++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const j=k.shadow,q=t.get(k);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,i.pointShadow[S]=q,i.pointShadowMap[S]=he,i.pointShadowMatrix[S]=k.shadow.matrix,D++}i.point[S]=z,S++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(re),z.groundColor.copy(k.groundColor).multiplyScalar(re),i.hemi[x]=z,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const G=i.hash;(G.directionalLength!==y||G.pointLength!==S||G.spotLength!==T||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==P||G.numPointShadows!==D||G.numSpotShadows!==w||G.numSpotMaps!==O||G.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=M,i.point.length=S,i.hemi.length=x,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=w+O-F,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=U,G.directionalLength=y,G.pointLength=S,G.spotLength=T,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=P,G.numPointShadows=D,G.numSpotShadows=w,G.numSpotMaps=O,G.numLightProbes=U,i.version=HC++)}function f(d,m){let _=0,v=0,y=0,S=0,T=0;const M=m.matrixWorldInverse;for(let x=0,P=d.length;x<P;x++){const D=d[x];if(D.isDirectionalLight){const w=i.directional[_];w.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(M),_++}else if(D.isSpotLight){const w=i.spot[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),c.identity(),l.copy(D.matrixWorld),l.premultiply(M),c.extractRotation(l),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),S++}else if(D.isPointLight){const w=i.point[v];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const w=i.hemi[T];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:f,state:i}}function Fy(s){const e=new GC(s),t=[],i=[];function a(m){d.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function h(){e.setup(t)}function f(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function kC(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let h;return c===void 0?(h=new Fy(s),e.set(a,[h])):l>=c.length?(h=new Fy(s),c.push(h)):h=c[l],h}function i(){e=new WeakMap}return{get:t,dispose:i}}const WC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YC(s,e,t){let i=new Dm;const a=new tt,l=new tt,c=new Ot,h=new zA({depthPacking:CT}),f=new HA,d={},m=t.maxTextureSize,_={[Fr]:qn,[qn]:Fr,[Si]:Si},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:WC,fragmentShader:XC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const S=new Dn;S.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Gn(S,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let x=this.type;this.render=function(F,U,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const L=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Es),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const re=x!==Lr&&this.type===Lr,me=x===Lr&&this.type!==Lr;for(let he=0,z=F.length;he<z;he++){const j=F[he],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const Se=q.getFrameExtents();if(a.multiply(Se),l.copy(q.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/Se.x),a.x=l.x*Se.x,q.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/Se.y),a.y=l.y*Se.y,q.mapSize.y=l.y)),q.map===null||re===!0||me===!0){const ee=this.type!==Lr?{minFilter:$n,magFilter:$n}:{};q.map!==null&&q.map.dispose(),q.map=new sa(a.x,a.y,ee),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const N=q.getViewportCount();for(let ee=0;ee<N;ee++){const Me=q.getViewport(ee);c.set(l.x*Me.x,l.y*Me.y,l.x*Me.z,l.y*Me.w),se.viewport(c),q.updateMatrices(j,ee),i=q.getFrustum(),w(U,G,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Lr&&P(q,G),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(L,A,k)};function P(F,U){const G=e.update(T);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new sa(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,G,v,T,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,G,y,T,null)}function D(F,U,G,L){let A=null;const k=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)A=k;else if(A=G.isPointLight===!0?f:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const se=A.uuid,re=U.uuid;let me=d[se];me===void 0&&(me={},d[se]=me);let he=me[re];he===void 0&&(he=A.clone(),me[re]=he,U.addEventListener("dispose",O)),A=he}if(A.visible=U.visible,A.wireframe=U.wireframe,L===Lr?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:_[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=s.properties.get(A);se.light=G}return A}function w(F,U,G,L,A){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Lr)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const re=e.update(F),me=F.material;if(Array.isArray(me)){const he=re.groups;for(let z=0,j=he.length;z<j;z++){const q=he[z],Se=me[q.materialIndex];if(Se&&Se.visible){const N=D(F,Se,L,A);F.onBeforeShadow(s,F,U,G,re,N,q),s.renderBufferDirect(G,null,re,N,F,q),F.onAfterShadow(s,F,U,G,re,N,q)}}}else if(me.visible){const he=D(F,me,L,A);F.onBeforeShadow(s,F,U,G,re,he,null),s.renderBufferDirect(G,null,re,he,F,null),F.onAfterShadow(s,F,U,G,re,he,null)}}const se=F.children;for(let re=0,me=se.length;re<me;re++)w(se[re],U,G,L,A)}function O(F){F.target.removeEventListener("dispose",O);for(const G in d){const L=d[G],A=F.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}const qC={[Mp]:Sp,[Ep]:bp,[Tp]:Rp,[xo]:Ap,[Sp]:Mp,[bp]:Ep,[Rp]:Tp,[Ap]:xo};function jC(s,e){function t(){let V=!1;const we=new Ot;let ye=null;const Ne=new Ot(0,0,0,0);return{setMask:function(be){ye!==be&&!V&&(s.colorMask(be,be,be,be),ye=be)},setLocked:function(be){V=be},setClear:function(be,ge,Oe,qe,vt){vt===!0&&(be*=qe,ge*=qe,Oe*=qe),we.set(be,ge,Oe,qe),Ne.equals(we)===!1&&(s.clearColor(be,ge,Oe,qe),Ne.copy(we))},reset:function(){V=!1,ye=null,Ne.set(-1,0,0,0)}}}function i(){let V=!1,we=!1,ye=null,Ne=null,be=null;return{setReversed:function(ge){if(we!==ge){const Oe=e.get("EXT_clip_control");ge?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=ge;const qe=be;be=null,this.setClear(qe)}},getReversed:function(){return we},setTest:function(ge){ge?Le(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(ge){ye!==ge&&!V&&(s.depthMask(ge),ye=ge)},setFunc:function(ge){if(we&&(ge=qC[ge]),Ne!==ge){switch(ge){case Mp:s.depthFunc(s.NEVER);break;case Sp:s.depthFunc(s.ALWAYS);break;case Ep:s.depthFunc(s.LESS);break;case xo:s.depthFunc(s.LEQUAL);break;case Tp:s.depthFunc(s.EQUAL);break;case Ap:s.depthFunc(s.GEQUAL);break;case bp:s.depthFunc(s.GREATER);break;case Rp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=ge}},setLocked:function(ge){V=ge},setClear:function(ge){be!==ge&&(we&&(ge=1-ge),s.clearDepth(ge),be=ge)},reset:function(){V=!1,ye=null,Ne=null,be=null,we=!1}}}function a(){let V=!1,we=null,ye=null,Ne=null,be=null,ge=null,Oe=null,qe=null,vt=null;return{setTest:function(mt){V||(mt?Le(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(mt){we!==mt&&!V&&(s.stencilMask(mt),we=mt)},setFunc:function(mt,hn,en){(ye!==mt||Ne!==hn||be!==en)&&(s.stencilFunc(mt,hn,en),ye=mt,Ne=hn,be=en)},setOp:function(mt,hn,en){(ge!==mt||Oe!==hn||qe!==en)&&(s.stencilOp(mt,hn,en),ge=mt,Oe=hn,qe=en)},setLocked:function(mt){V=mt},setClear:function(mt){vt!==mt&&(s.clearStencil(mt),vt=mt)},reset:function(){V=!1,we=null,ye=null,Ne=null,be=null,ge=null,Oe=null,qe=null,vt=null}}}const l=new t,c=new i,h=new a,f=new WeakMap,d=new WeakMap;let m={},_={},v=new WeakMap,y=[],S=null,T=!1,M=null,x=null,P=null,D=null,w=null,O=null,F=null,U=new Qe(0,0,0),G=0,L=!1,A=null,k=null,se=null,re=null,me=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=j>=2);let Se=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Ee=new Ot().fromArray(ee),J=new Ot().fromArray(Me);function _e(V,we,ye,Ne){const be=new Uint8Array(4),ge=s.createTexture();s.bindTexture(V,ge),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<ye;Oe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(we+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ge}const Ae={};Ae[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Le(s.DEPTH_TEST),c.setFunc(xo),Mt(!1),ht(M0),Le(s.CULL_FACE),X(Es);function Le(V){m[V]!==!0&&(s.enable(V),m[V]=!0)}function Ue(V){m[V]!==!1&&(s.disable(V),m[V]=!1)}function ct(V,we){return _[V]!==we?(s.bindFramebuffer(V,we),_[V]=we,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ke(V,we){let ye=y,Ne=!1;if(V){ye=v.get(we),ye===void 0&&(ye=[],v.set(we,ye));const be=V.textures;if(ye.length!==be.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Oe=be.length;ge<Oe;ge++)ye[ge]=s.COLOR_ATTACHMENT0+ge;ye.length=be.length,Ne=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(ye)}function Ct(V){return S!==V?(s.useProgram(V),S=V,!0):!1}const Lt={[$s]:s.FUNC_ADD,[QE]:s.FUNC_SUBTRACT,[JE]:s.FUNC_REVERSE_SUBTRACT};Lt[$E]=s.MIN,Lt[eT]=s.MAX;const ft={[tT]:s.ZERO,[nT]:s.ONE,[iT]:s.SRC_COLOR,[yp]:s.SRC_ALPHA,[uT]:s.SRC_ALPHA_SATURATE,[oT]:s.DST_COLOR,[sT]:s.DST_ALPHA,[rT]:s.ONE_MINUS_SRC_COLOR,[xp]:s.ONE_MINUS_SRC_ALPHA,[lT]:s.ONE_MINUS_DST_COLOR,[aT]:s.ONE_MINUS_DST_ALPHA,[cT]:s.CONSTANT_COLOR,[hT]:s.ONE_MINUS_CONSTANT_COLOR,[fT]:s.CONSTANT_ALPHA,[dT]:s.ONE_MINUS_CONSTANT_ALPHA};function X(V,we,ye,Ne,be,ge,Oe,qe,vt,mt){if(V===Es){T===!0&&(Ue(s.BLEND),T=!1);return}if(T===!1&&(Le(s.BLEND),T=!0),V!==KE){if(V!==M||mt!==L){if((x!==$s||w!==$s)&&(s.blendEquation(s.FUNC_ADD),x=$s,w=$s),mt)switch(V){case mo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case S0:s.blendFunc(s.ONE,s.ONE);break;case E0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case T0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case mo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case S0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case E0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,D=null,O=null,F=null,U.set(0,0,0),G=0,M=V,L=mt}return}be=be||we,ge=ge||ye,Oe=Oe||Ne,(we!==x||be!==w)&&(s.blendEquationSeparate(Lt[we],Lt[be]),x=we,w=be),(ye!==P||Ne!==D||ge!==O||Oe!==F)&&(s.blendFuncSeparate(ft[ye],ft[Ne],ft[ge],ft[Oe]),P=ye,D=Ne,O=ge,F=Oe),(qe.equals(U)===!1||vt!==G)&&(s.blendColor(qe.r,qe.g,qe.b,vt),U.copy(qe),G=vt),M=V,L=!1}function sn(V,we){V.side===Si?Ue(s.CULL_FACE):Le(s.CULL_FACE);let ye=V.side===qn;we&&(ye=!ye),Mt(ye),V.blending===mo&&V.transparent===!1?X(Es):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const Ne=V.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),dt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function ht(V){V!==qE?(Le(s.CULL_FACE),V!==k&&(V===M0?s.cullFace(s.BACK):V===jE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),k=V}function Ge(V){V!==se&&(z&&s.lineWidth(V),se=V)}function dt(V,we,ye){V?(Le(s.POLYGON_OFFSET_FILL),(re!==we||me!==ye)&&(s.polygonOffset(we,ye),re=we,me=ye)):Ue(s.POLYGON_OFFSET_FILL)}function Ye(V){V?Le(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function rt(V){V===void 0&&(V=s.TEXTURE0+he-1),Se!==V&&(s.activeTexture(V),Se=V)}function $t(V,we,ye){ye===void 0&&(Se===null?ye=s.TEXTURE0+he-1:ye=Se);let Ne=N[ye];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[ye]=Ne),(Ne.type!==V||Ne.texture!==we)&&(Se!==ye&&(s.activeTexture(ye),Se=ye),s.bindTexture(V,we||Ae[V]),Ne.type=V,Ne.texture=we)}function I(){const V=N[Se];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(V){Ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ee.copy(V))}function Xe(V){J.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),J.copy(V))}function W(V,we){let ye=d.get(we);ye===void 0&&(ye=new WeakMap,d.set(we,ye));let Ne=ye.get(V);Ne===void 0&&(Ne=s.getUniformBlockIndex(we,V.name),ye.set(V,Ne))}function te(V,we){const Ne=d.get(we).get(V);f.get(we)!==Ne&&(s.uniformBlockBinding(we,Ne,V.__bindingPointIndex),f.set(we,Ne))}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},Se=null,N={},_={},v=new WeakMap,y=[],S=null,T=!1,M=null,x=null,P=null,D=null,w=null,O=null,F=null,U=new Qe(0,0,0),G=0,L=!1,A=null,k=null,se=null,re=null,me=null,Ee.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:Le,disable:Ue,bindFramebuffer:ct,drawBuffers:Ke,useProgram:Ct,setBlending:X,setMaterial:sn,setFlipSided:Mt,setCullFace:ht,setLineWidth:Ge,setPolygonOffset:dt,setScissorTest:Ye,activeTexture:rt,bindTexture:$t,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:ie,texImage2D:We,texImage3D:Te,updateUBOMapping:W,uniformBlockBinding:te,texStorage2D:De,texStorage3D:Ve,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Fe,scissor:Be,viewport:Xe,reset:Re}}function ZC(s,e,t,i,a,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new tt,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,b){return y?new OffscreenCanvas(I,b):eu("canvas")}function T(I,b,ie){let fe=1;const pe=$t(I);if((pe.width>ie||pe.height>ie)&&(fe=ie/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(fe*pe.width),Fe=Math.floor(fe*pe.height);_===void 0&&(_=S(ce,Fe));const De=b?S(ce,Fe):_;return De.width=ce,De.height=Fe,De.getContext("2d").drawImage(I,0,0,ce,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Fe+")."),De}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,b,ie,fe,pe=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=b;if(b===s.RED&&(ie===s.FLOAT&&(ce=s.R32F),ie===s.HALF_FLOAT&&(ce=s.R16F),ie===s.UNSIGNED_BYTE&&(ce=s.R8)),b===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ce=s.R8UI),ie===s.UNSIGNED_SHORT&&(ce=s.R16UI),ie===s.UNSIGNED_INT&&(ce=s.R32UI),ie===s.BYTE&&(ce=s.R8I),ie===s.SHORT&&(ce=s.R16I),ie===s.INT&&(ce=s.R32I)),b===s.RG&&(ie===s.FLOAT&&(ce=s.RG32F),ie===s.HALF_FLOAT&&(ce=s.RG16F),ie===s.UNSIGNED_BYTE&&(ce=s.RG8)),b===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ce=s.RG8UI),ie===s.UNSIGNED_SHORT&&(ce=s.RG16UI),ie===s.UNSIGNED_INT&&(ce=s.RG32UI),ie===s.BYTE&&(ce=s.RG8I),ie===s.SHORT&&(ce=s.RG16I),ie===s.INT&&(ce=s.RG32I)),b===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),ie===s.UNSIGNED_INT&&(ce=s.RGB32UI),ie===s.BYTE&&(ce=s.RGB8I),ie===s.SHORT&&(ce=s.RGB16I),ie===s.INT&&(ce=s.RGB32I)),b===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),ie===s.UNSIGNED_INT&&(ce=s.RGBA32UI),ie===s.BYTE&&(ce=s.RGBA8I),ie===s.SHORT&&(ce=s.RGBA16I),ie===s.INT&&(ce=s.RGBA32I)),b===s.RGB&&ie===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),b===s.RGBA){const Fe=pe?ih:Ut.getTransfer(fe);ie===s.FLOAT&&(ce=s.RGBA32F),ie===s.HALF_FLOAT&&(ce=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(ce=Fe===Yt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(I,b){let ie;return I?b===null||b===ra||b===Zl?ie=s.DEPTH24_STENCIL8:b===Fi?ie=s.DEPTH32F_STENCIL8:b===jl&&(ie=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ra||b===Zl?ie=s.DEPTH_COMPONENT24:b===Fi?ie=s.DEPTH_COMPONENT32F:b===jl&&(ie=s.DEPTH_COMPONENT16),ie}function O(I,b){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==$n&&I.minFilter!==Ei?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function F(I){const b=I.target;b.removeEventListener("dispose",F),G(b),b.isVideoTexture&&m.delete(b)}function U(I){const b=I.target;b.removeEventListener("dispose",U),A(b)}function G(I){const b=i.get(I);if(b.__webglInit===void 0)return;const ie=I.source,fe=v.get(ie);if(fe){const pe=fe[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&L(I),Object.keys(fe).length===0&&v.delete(ie)}i.remove(I)}function L(I){const b=i.get(I);s.deleteTexture(b.__webglTexture);const ie=I.source,fe=v.get(ie);delete fe[b.__cacheKey],c.memory.textures--}function A(I){const b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let pe=0;pe<b.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)s.deleteFramebuffer(b.__webglFramebuffer[fe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=I.textures;for(let fe=0,pe=ie.length;fe<pe;fe++){const ce=i.get(ie[fe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),i.remove(ie[fe])}i.remove(I)}let k=0;function se(){k=0}function re(){const I=k;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),k+=1,I}function me(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function he(I,b){const ie=i.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ie,I,b);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+b)}function z(I,b){const ie=i.get(I);if(I.version>0&&ie.__version!==I.version){Ae(ie,I,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+b)}function j(I,b){const ie=i.get(I);if(I.version>0&&ie.__version!==I.version){Ae(ie,I,b);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+b)}function q(I,b){const ie=i.get(I);if(I.version>0&&ie.__version!==I.version){Le(ie,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+b)}const Se={[Eo]:s.REPEAT,[Ss]:s.CLAMP_TO_EDGE,[th]:s.MIRRORED_REPEAT},N={[$n]:s.NEAREST,[Dx]:s.NEAREST_MIPMAP_NEAREST,[Gl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Xc]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},ee={[DT]:s.NEVER,[BT]:s.ALWAYS,[UT]:s.LESS,[Hx]:s.LEQUAL,[NT]:s.EQUAL,[IT]:s.GEQUAL,[PT]:s.GREATER,[OT]:s.NOTEQUAL};function Me(I,b){if(b.type===Fi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ei||b.magFilter===Xc||b.magFilter===Gl||b.magFilter===Ur||b.minFilter===Ei||b.minFilter===Xc||b.minFilter===Gl||b.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Se[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Se[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Se[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==Gl&&b.minFilter!==Ur||b.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(I,b){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",F));const fe=b.source;let pe=v.get(fe);pe===void 0&&(pe={},v.set(fe,pe));const ce=me(b);if(ce!==I.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),pe[ce].usedTimes++;const Fe=pe[I.__cacheKey];Fe!==void 0&&(pe[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&L(b)),I.__cacheKey=ce,I.__webglTexture=pe[ce].texture}return ie}function J(I,b,ie){return Math.floor(Math.floor(I/ie)/b)}function _e(I,b,ie,fe){const ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ie,fe,b.data);else{ce.sort((Te,Be)=>Te.start-Be.start);let Fe=0;for(let Te=1;Te<ce.length;Te++){const Be=ce[Fe],Xe=ce[Te],W=Be.start+Be.count,te=J(Xe.start,b.width,4),Re=J(Be.start,b.width,4);Xe.start<=W+1&&te===Re&&J(Xe.start+Xe.count-1,b.width,4)===te?Be.count=Math.max(Be.count,Xe.start+Xe.count-Be.start):(++Fe,ce[Fe]=Xe)}ce.length=Fe+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Te=0,Be=ce.length;Te<Be;Te++){const Xe=ce[Te],W=Math.floor(Xe.start/4),te=Math.ceil(Xe.count/4),Re=W%b.width,V=Math.floor(W/b.width),we=te,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Re,V,we,ye,ie,fe,b.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function Ae(I,b,ie){let fe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=Ee(I,b),ce=b.source;t.bindTexture(fe,I.__webglTexture,s.TEXTURE0+ie);const Fe=i.get(ce);if(ce.version!==Fe.__version||pe===!0){t.activeTexture(s.TEXTURE0+ie);const De=Ut.getPrimaries(Ut.workingColorSpace),Ve=b.colorSpace===xs?null:Ut.getPrimaries(b.colorSpace),We=b.colorSpace===xs||De===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Te=T(b.image,!1,a.maxTextureSize);Te=rt(b,Te);const Be=l.convert(b.format,b.colorSpace),Xe=l.convert(b.type);let W=D(b.internalFormat,Be,Xe,b.colorSpace,b.isVideoTexture);Me(fe,b);let te;const Re=b.mipmaps,V=b.isVideoTexture!==!0,we=Fe.__version===void 0||pe===!0,ye=ce.dataReady,Ne=O(b,Te);if(b.isDepthTexture)W=w(b.format===Ql,b.type),we&&(V?t.texStorage2D(s.TEXTURE_2D,1,W,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,W,Te.width,Te.height,0,Be,Xe,null));else if(b.isDataTexture)if(Re.length>0){V&&we&&t.texStorage2D(s.TEXTURE_2D,Ne,W,Re[0].width,Re[0].height);for(let be=0,ge=Re.length;be<ge;be++)te=Re[be],V?ye&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,te.width,te.height,Be,Xe,te.data):t.texImage2D(s.TEXTURE_2D,be,W,te.width,te.height,0,Be,Xe,te.data);b.generateMipmaps=!1}else V?(we&&t.texStorage2D(s.TEXTURE_2D,Ne,W,Te.width,Te.height),ye&&_e(b,Te,Be,Xe)):t.texImage2D(s.TEXTURE_2D,0,W,Te.width,Te.height,0,Be,Xe,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,W,Re[0].width,Re[0].height,Te.depth);for(let be=0,ge=Re.length;be<ge;be++)if(te=Re[be],b.format!==Ti)if(Be!==null)if(V){if(ye)if(b.layerUpdates.size>0){const Oe=py(te.width,te.height,b.format,b.type);for(const qe of b.layerUpdates){const vt=te.data.subarray(qe*Oe/te.data.BYTES_PER_ELEMENT,(qe+1)*Oe/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,qe,te.width,te.height,1,Be,vt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,te.width,te.height,Te.depth,Be,te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,W,te.width,te.height,Te.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,te.width,te.height,Te.depth,Be,Xe,te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,W,te.width,te.height,Te.depth,0,Be,Xe,te.data)}else{V&&we&&t.texStorage2D(s.TEXTURE_2D,Ne,W,Re[0].width,Re[0].height);for(let be=0,ge=Re.length;be<ge;be++)te=Re[be],b.format!==Ti?Be!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,te.width,te.height,Be,te.data):t.compressedTexImage2D(s.TEXTURE_2D,be,W,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,te.width,te.height,Be,Xe,te.data):t.texImage2D(s.TEXTURE_2D,be,W,te.width,te.height,0,Be,Xe,te.data)}else if(b.isDataArrayTexture)if(V){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,W,Te.width,Te.height,Te.depth),ye)if(b.layerUpdates.size>0){const be=py(Te.width,Te.height,b.format,b.type);for(const ge of b.layerUpdates){const Oe=Te.data.subarray(ge*be/Te.data.BYTES_PER_ELEMENT,(ge+1)*be/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Te.width,Te.height,1,Be,Xe,Oe)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Be,Xe,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,W,Te.width,Te.height,Te.depth,0,Be,Xe,Te.data);else if(b.isData3DTexture)V?(we&&t.texStorage3D(s.TEXTURE_3D,Ne,W,Te.width,Te.height,Te.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Be,Xe,Te.data)):t.texImage3D(s.TEXTURE_3D,0,W,Te.width,Te.height,Te.depth,0,Be,Xe,Te.data);else if(b.isFramebufferTexture){if(we)if(V)t.texStorage2D(s.TEXTURE_2D,Ne,W,Te.width,Te.height);else{let be=Te.width,ge=Te.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,W,be,ge,0,Be,Xe,null),be>>=1,ge>>=1}}else if(Re.length>0){if(V&&we){const be=$t(Re[0]);t.texStorage2D(s.TEXTURE_2D,Ne,W,be.width,be.height)}for(let be=0,ge=Re.length;be<ge;be++)te=Re[be],V?ye&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Be,Xe,te):t.texImage2D(s.TEXTURE_2D,be,W,Be,Xe,te);b.generateMipmaps=!1}else if(V){if(we){const be=$t(Te);t.texStorage2D(s.TEXTURE_2D,Ne,W,be.width,be.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Xe,Te)}else t.texImage2D(s.TEXTURE_2D,0,W,Be,Xe,Te);M(b)&&x(fe),Fe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Le(I,b,ie){if(b.image.length!==6)return;const fe=Ee(I,b),pe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ie);const ce=i.get(pe);if(pe.version!==ce.__version||fe===!0){t.activeTexture(s.TEXTURE0+ie);const Fe=Ut.getPrimaries(Ut.workingColorSpace),De=b.colorSpace===xs?null:Ut.getPrimaries(b.colorSpace),Ve=b.colorSpace===xs||Fe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const We=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Be=[];for(let ge=0;ge<6;ge++)!We&&!Te?Be[ge]=T(b.image[ge],!0,a.maxCubemapSize):Be[ge]=Te?b.image[ge].image:b.image[ge],Be[ge]=rt(b,Be[ge]);const Xe=Be[0],W=l.convert(b.format,b.colorSpace),te=l.convert(b.type),Re=D(b.internalFormat,W,te,b.colorSpace),V=b.isVideoTexture!==!0,we=ce.__version===void 0||fe===!0,ye=pe.dataReady;let Ne=O(b,Xe);Me(s.TEXTURE_CUBE_MAP,b);let be;if(We){V&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Re,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){be=Be[ge].mipmaps;for(let Oe=0;Oe<be.length;Oe++){const qe=be[Oe];b.format!==Ti?W!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,qe.width,qe.height,W,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,Re,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,qe.width,qe.height,W,te,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,Re,qe.width,qe.height,0,W,te,qe.data)}}}else{if(be=b.mipmaps,V&&we){be.length>0&&Ne++;const ge=$t(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,Re,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Te){V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Be[ge].width,Be[ge].height,W,te,Be[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,Be[ge].width,Be[ge].height,0,W,te,Be[ge].data);for(let Oe=0;Oe<be.length;Oe++){const vt=be[Oe].image[ge].image;V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,vt.width,vt.height,W,te,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,Re,vt.width,vt.height,0,W,te,vt.data)}}else{V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,W,te,Be[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,W,te,Be[ge]);for(let Oe=0;Oe<be.length;Oe++){const qe=be[Oe];V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,W,te,qe.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,Re,W,te,qe.image[ge])}}}M(b)&&x(s.TEXTURE_CUBE_MAP),ce.__version=pe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ue(I,b,ie,fe,pe,ce){const Fe=l.convert(ie.format,ie.colorSpace),De=l.convert(ie.type),Ve=D(ie.internalFormat,Fe,De,ie.colorSpace),We=i.get(b),Te=i.get(ie);if(Te.__renderTarget=b,!We.__hasExternalTextures){const Be=Math.max(1,b.width>>ce),Xe=Math.max(1,b.height>>ce);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,Ve,Be,Xe,b.depth,0,Fe,De,null):t.texImage2D(pe,ce,Ve,Be,Xe,0,Fe,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),dt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,Te.__webglTexture,0,Ge(b)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,Te.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,b,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const fe=b.depthTexture,pe=fe&&fe.isDepthTexture?fe.type:null,ce=w(b.stencilBuffer,pe),Fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=Ge(b);dt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,ce,b.width,b.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,I)}else{const fe=b.textures;for(let pe=0;pe<fe.length;pe++){const ce=fe[pe],Fe=l.convert(ce.format,ce.colorSpace),De=l.convert(ce.type),Ve=D(ce.internalFormat,Fe,De,ce.colorSpace),We=Ge(b);ie&&dt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ve,b.width,b.height):dt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=i.get(b.depthTexture);fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const pe=fe.__webglTexture,ce=Ge(b);if(b.depthTexture.format===Kl)dt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(b.depthTexture.format===Ql)dt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ct(I){const b=i.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const fe=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",pe)};fe.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=fe}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const fe=I.texture.mipmaps;fe&&fe.length>0?Ke(b.__webglFramebuffer[0],I):Ke(b.__webglFramebuffer,I)}else if(ie){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=s.createRenderbuffer(),ct(b.__webglDepthbuffer[fe],I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}else{const fe=I.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ct(b.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(I,b,ie){const fe=i.get(I);b!==void 0&&Ue(fe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Ct(I)}function ft(I){const b=I.texture,ie=i.get(I),fe=i.get(b);I.addEventListener("dispose",U);const pe=I.textures,ce=I.isWebGLCubeRenderTarget===!0,Fe=pe.length>1;if(Fe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=b.version,c.memory.textures++),ce){ie.__webglFramebuffer=[];for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[De]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)ie.__webglFramebuffer[De][Ve]=s.createFramebuffer()}else ie.__webglFramebuffer[De]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let De=0;De<b.mipmaps.length;De++)ie.__webglFramebuffer[De]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let De=0,Ve=pe.length;De<Ve;De++){const We=i.get(pe[De]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&dt(I)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let De=0;De<pe.length;De++){const Ve=pe[De];ie.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[De]);const We=l.convert(Ve.format,Ve.colorSpace),Te=l.convert(Ve.type),Be=D(Ve.internalFormat,We,Te,Ve.colorSpace,I.isXRRenderTarget===!0),Xe=Ge(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Be,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ie.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Me(s.TEXTURE_CUBE_MAP,b);for(let De=0;De<6;De++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)Ue(ie.__webglFramebuffer[De][Ve],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ve);else Ue(ie.__webglFramebuffer[De],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(b)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let De=0,Ve=pe.length;De<Ve;De++){const We=pe[De],Te=i.get(We);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),Me(s.TEXTURE_2D,We),Ue(ie.__webglFramebuffer,I,We,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),M(We)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,fe.__webglTexture),Me(De,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)Ue(ie.__webglFramebuffer[Ve],I,b,s.COLOR_ATTACHMENT0,De,Ve);else Ue(ie.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,De,0);M(b)&&x(De),t.unbindTexture()}I.depthBuffer&&Ct(I)}function X(I){const b=I.textures;for(let ie=0,fe=b.length;ie<fe;ie++){const pe=b[ie];if(M(pe)){const ce=P(I),Fe=i.get(pe).__webglTexture;t.bindTexture(ce,Fe),x(ce),t.unbindTexture()}}}const sn=[],Mt=[];function ht(I){if(I.samples>0){if(dt(I)===!1){const b=I.textures,ie=I.width,fe=I.height;let pe=s.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=i.get(I),De=b.length>1;if(De)for(let We=0;We<b.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ve=I.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let We=0;We<b.length;We++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[We]);const Te=i.get(b[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,ie,fe,0,0,ie,fe,pe,s.NEAREST),f===!0&&(sn.length=0,Mt.length=0,sn.push(s.COLOR_ATTACHMENT0+We),I.depthBuffer&&I.resolveDepthBuffer===!1&&(sn.push(ce),Mt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<b.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[We]);const Te=i.get(b[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ge(I){return Math.min(a.maxSamples,I.samples)}function dt(I){const b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(I){const b=c.render.frame;m.get(I)!==b&&(m.set(I,b),I.update())}function rt(I,b){const ie=I.colorSpace,fe=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ie!==To&&ie!==xs&&(Ut.getTransfer(ie)===Yt?(fe!==Ti||pe!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function $t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(d.width=I.naturalWidth||I.width,d.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(d.width=I.displayWidth,d.height=I.displayHeight):(d.width=I.width,d.height=I.height),d}this.allocateTextureUnit=re,this.resetTextureUnits=se,this.setTexture2D=he,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=dt}function KC(s,e){function t(i,a=xs){let l;const c=Ut.getTransfer(a);if(i===nr)return s.UNSIGNED_BYTE;if(i===ym)return s.UNSIGNED_SHORT_4_4_4_4;if(i===xm)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Px)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return s.BYTE;if(i===Nx)return s.SHORT;if(i===jl)return s.UNSIGNED_SHORT;if(i===vm)return s.INT;if(i===ra)return s.UNSIGNED_INT;if(i===Fi)return s.FLOAT;if(i===nu)return s.HALF_FLOAT;if(i===Ox)return s.ALPHA;if(i===Ix)return s.RGB;if(i===Ti)return s.RGBA;if(i===Kl)return s.DEPTH_COMPONENT;if(i===Ql)return s.DEPTH_STENCIL;if(i===Mm)return s.RED;if(i===Sm)return s.RED_INTEGER;if(i===Bx)return s.RG;if(i===Em)return s.RG_INTEGER;if(i===Tm)return s.RGBA_INTEGER;if(i===Yc||i===qc||i===jc||i===Zc)if(c===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Yc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Yc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lp||i===Dp||i===Up||i===Np)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Lp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Up)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Np)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pp||i===Op||i===Ip)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Pp||i===Op)return c===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Ip)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bp||i===Fp||i===zp||i===Hp||i===Vp||i===Gp||i===kp||i===Wp||i===Xp||i===Yp||i===qp||i===jp||i===Zp||i===Kp)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Bp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kp)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===Qp||i===Jp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Kc)return c===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fx||i===$p||i===em||i===tm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Kc)return l.COMPRESSED_RED_RGTC1_EXT;if(i===$p)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===em)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zl?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const QC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Ln,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zr({vertexShader:QC,fragmentShader:JC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new su(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eL extends aa{constructor(e,t){super();const i=this;let a=null,l=1,c=null,h="local-floor",f=1,d=null,m=null,_=null,v=null,y=null,S=null;const T=new $C,M=t.getContextAttributes();let x=null,P=null;const D=[],w=[],O=new tt;let F=null;const U=new Cn;U.viewport=new Ot;const G=new Cn;G.viewport=new Ot;const L=[U,G],A=new sb;let k=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=D[J];return _e===void 0&&(_e=new Wd,D[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=D[J];return _e===void 0&&(_e=new Wd,D[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=D[J];return _e===void 0&&(_e=new Wd,D[J]=_e),_e.getHandSpace()};function re(J){const _e=w.indexOf(J.inputSource);if(_e===-1)return;const Ae=D[_e];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,d||c),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function me(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",me),a.removeEventListener("inputsourceschange",he);for(let J=0;J<D.length;J++){const _e=w[J];_e!==null&&(w[J]=null,D[J].disconnect(_e))}k=null,se=null,T.reset(),e.setRenderTarget(x),y=null,v=null,_=null,a=null,P=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",me),a.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Le=null,Ue=null;M.depth&&(Ue=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=M.stencil?Ql:Kl,Le=M.stencil?Zl:ra);const ct={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:l};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(ct),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new sa(v.textureWidth,v.textureHeight,{format:Ti,type:nr,depthTexture:new eM(v.textureWidth,v.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,Ae),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new sa(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await a.requestReferenceSpace(h),Ee.setContext(a),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(J){for(let _e=0;_e<J.removed.length;_e++){const Ae=J.removed[_e],Le=w.indexOf(Ae);Le>=0&&(w[Le]=null,D[Le].disconnect(Ae))}for(let _e=0;_e<J.added.length;_e++){const Ae=J.added[_e];let Le=w.indexOf(Ae);if(Le===-1){for(let ct=0;ct<D.length;ct++)if(ct>=w.length){w.push(Ae),Le=ct;break}else if(w[ct]===null){w[ct]=Ae,Le=ct;break}if(Le===-1)break}const Ue=D[Le];Ue&&Ue.connect(Ae)}}const z=new B,j=new B;function q(J,_e,Ae){z.setFromMatrixPosition(_e.matrixWorld),j.setFromMatrixPosition(Ae.matrixWorld);const Le=z.distanceTo(j),Ue=_e.projectionMatrix.elements,ct=Ae.projectionMatrix.elements,Ke=Ue[14]/(Ue[10]-1),Ct=Ue[14]/(Ue[10]+1),Lt=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],X=(Ue[8]-1)/Ue[0],sn=(ct[8]+1)/ct[0],Mt=Ke*X,ht=Ke*sn,Ge=Le/(-X+sn),dt=Ge*-X;if(_e.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(dt),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ye=Ke+Ge,rt=Ct+Ge,$t=Mt-dt,I=ht+(Le-dt),b=Lt*Ct/rt*Ye,ie=ft*Ct/rt*Ye;J.projectionMatrix.makePerspective($t,I,b,ie,Ye,rt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Se(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let _e=J.near,Ae=J.far;T.texture!==null&&(T.depthNear>0&&(_e=T.depthNear),T.depthFar>0&&(Ae=T.depthFar)),A.near=G.near=U.near=_e,A.far=G.far=U.far=Ae,(k!==A.near||se!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,se=A.far),U.layers.mask=J.layers.mask|2,G.layers.mask=J.layers.mask|4,A.layers.mask=U.layers.mask|G.layers.mask;const Le=J.parent,Ue=A.cameras;Se(A,Le);for(let ct=0;ct<Ue.length;ct++)Se(Ue[ct],Le);Ue.length===2?q(A,U,G):A.projectionMatrix.copy(U.projectionMatrix),N(J,A,Le)};function N(J,_e,Ae){Ae===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ao*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(J){f=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let ee=null;function Me(J,_e){if(m=_e.getViewerPose(d||c),S=_e,m!==null){const Ae=m.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Le=!1;Ae.length!==A.cameras.length&&(A.cameras.length=0,Le=!0);for(let Ke=0;Ke<Ae.length;Ke++){const Ct=Ae[Ke];let Lt=null;if(y!==null)Lt=y.getViewport(Ct);else{const X=_.getViewSubImage(v,Ct);Lt=X.viewport,Ke===0&&(e.setRenderTargetTextures(P,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(P))}let ft=L[Ke];ft===void 0&&(ft=new Cn,ft.layers.enable(Ke),ft.viewport=new Ot,L[Ke]=ft),ft.matrix.fromArray(Ct.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ct.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ke===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Le===!0&&A.cameras.push(ft)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ke=_.getDepthInformation(Ae[0]);Ke&&Ke.isValid&&Ke.texture&&T.init(e,Ke,a.renderState)}}for(let Ae=0;Ae<D.length;Ae++){const Le=w[Ae],Ue=D[Ae];Le!==null&&Ue!==void 0&&Ue.update(Le,_e,d||c)}ee&&ee(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),S=null}const Ee=new oM;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const qs=new jn,tL=new ot;function nL(s,e){function t(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function i(M,x){x.color.getRGB(M.fogColor.value,Yx(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function a(M,x,P,D,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(M,x):x.isMeshToonMaterial?(l(M,x),_(M,x)):x.isMeshPhongMaterial?(l(M,x),m(M,x)):x.isMeshStandardMaterial?(l(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,w)):x.isMeshMatcapMaterial?(l(M,x),S(M,x)):x.isMeshDepthMaterial?l(M,x):x.isMeshDistanceMaterial?(l(M,x),T(M,x)):x.isMeshNormalMaterial?l(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?f(M,x,P,D):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,t(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,t(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,t(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,t(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),D=P.envMap,w=P.envMapRotation;D&&(M.envMap.value=D,qs.copy(w),qs.x*=-1,qs.y*=-1,qs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),M.envMapRotation.value.setFromMatrix4(tL.makeRotationFromEuler(qs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function f(M,x,P,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=D*.5,x.map&&(M.map.value=x.map,t(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function iL(s,e,t,i){let a={},l={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,D){const w=D.program;i.uniformBlockBinding(P,w)}function d(P,D){let w=a[P.id];w===void 0&&(S(P),w=m(P),a[P.id]=w,P.addEventListener("dispose",M));const O=D.program;i.updateUBOMapping(P,O);const F=e.render.frame;l[P.id]!==F&&(v(P),l[P.id]=F)}function m(P){const D=_();P.__bindingPointIndex=D;const w=s.createBuffer(),O=P.__size,F=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,O,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,w),w}function _(){for(let P=0;P<h;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const D=a[P.id],w=P.uniforms,O=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,U=w.length;F<U;F++){const G=Array.isArray(w[F])?w[F]:[w[F]];for(let L=0,A=G.length;L<A;L++){const k=G[L];if(y(k,F,L,O)===!0){const se=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let he=0;he<re.length;he++){const z=re[he],j=T(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,se+me,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,me),me+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,D,w,O){const F=P.value,U=D+"_"+w;if(O[U]===void 0)return typeof F=="number"||typeof F=="boolean"?O[U]=F:O[U]=F.clone(),!0;{const G=O[U];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return O[U]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function S(P){const D=P.uniforms;let w=0;const O=16;for(let U=0,G=D.length;U<G;U++){const L=Array.isArray(D[U])?D[U]:[D[U]];for(let A=0,k=L.length;A<k;A++){const se=L[A],re=Array.isArray(se.value)?se.value:[se.value];for(let me=0,he=re.length;me<he;me++){const z=re[me],j=T(z),q=w%O,Se=q%j.boundary,N=q+Se;w+=Se,N!==0&&O-N<j.storage&&(w+=O-N),se.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=w,w+=j.storage}}}const F=w%O;return F>0&&(w+=O-F),P.__size=w,P.__cache={},this}function T(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function M(P){const D=P.target;D.removeEventListener("dispose",M);const w=c.indexOf(D.__bindingPointIndex);c.splice(w,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function x(){for(const P in a)s.deleteBuffer(a[P]);c=[],a={},l={}}return{bind:f,update:d,dispose:x}}class rL{constructor(e={}){const{canvas:t=tA(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const S=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const P=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let O=!1;this._outputColorSpace=Mi;let F=0,U=0,G=null,L=-1,A=null;const k=new Ot,se=new Ot;let re=null;const me=new Qe(0);let he=0,z=t.width,j=t.height,q=1,Se=null,N=null;const ee=new Ot(0,0,z,j),Me=new Ot(0,0,z,j);let Ee=!1;const J=new Dm;let _e=!1,Ae=!1;const Le=new ot,Ue=new ot,ct=new B,Ke=new Ot,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ft(){return G===null?q:1}let X=i;function sn(C,Z){return t.getContext(C,Z)}try{const C={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ge,!1),X===null){const Z="webgl2";if(X=sn(Z,C),X===null)throw sn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Mt,ht,Ge,dt,Ye,rt,$t,I,b,ie,fe,pe,ce,Fe,De,Ve,We,Te,Be,Xe,W,te,Re,V;function we(){Mt=new pw(X),Mt.init(),te=new KC(X,Mt),ht=new ow(X,Mt,e,te),Ge=new jC(X,Mt),ht.reverseDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),dt=new _w(X),Ye=new OC,rt=new ZC(X,Mt,Ge,Ye,ht,te,dt),$t=new uw(w),I=new dw(w),b=new Eb(X),Re=new sw(X,b),ie=new mw(X,b,dt,Re),fe=new yw(X,ie,b,dt),Be=new vw(X,ht,rt),Ve=new lw(Ye),pe=new PC(w,$t,I,Mt,ht,Re,Ve),ce=new nL(w,Ye),Fe=new BC,De=new kC(Mt),Te=new rw(w,$t,I,Ge,fe,y,f),We=new YC(w,fe,ht),V=new iL(X,dt,ht,Ge),Xe=new aw(X,Mt,dt),W=new gw(X,Mt,dt),dt.programs=pe.programs,w.capabilities=ht,w.extensions=Mt,w.properties=Ye,w.renderLists=Fe,w.shadowMap=We,w.state=Ge,w.info=dt}we();const ye=new eL(w,X);this.xr=ye,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(z,j,!1))},this.getSize=function(C){return C.set(z,j)},this.setSize=function(C,Z,le=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,j=Z,t.width=Math.floor(C*q),t.height=Math.floor(Z*q),le===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(z*q,j*q).floor()},this.setDrawingBufferSize=function(C,Z,le){z=C,j=Z,q=le,t.width=Math.floor(C*le),t.height=Math.floor(Z*le),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,Z,le,ue){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,Z,le,ue),Ge.viewport(k.copy(ee).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,Z,le,ue){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,Z,le,ue),Ge.scissor(se.copy(Me).multiplyScalar(q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Ge.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){Se=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,le=!0){let ue=0;if(C){let Q=!1;if(G!==null){const Ce=G.texture.format;Q=Ce===Tm||Ce===Em||Ce===Sm}if(Q){const Ce=G.texture.type,Ie=Ce===nr||Ce===ra||Ce===jl||Ce===Zl||Ce===ym||Ce===xm,ze=Te.getClearColor(),He=Te.getClearAlpha(),at=ze.r,$e=ze.g,je=ze.b;Ie?(S[0]=at,S[1]=$e,S[2]=je,S[3]=He,X.clearBufferuiv(X.COLOR,0,S)):(T[0]=at,T[1]=$e,T[2]=je,T[3]=He,X.clearBufferiv(X.COLOR,0,T))}else ue|=X.COLOR_BUFFER_BIT}Z&&(ue|=X.DEPTH_BUFFER_BIT),le&&(ue|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),Fe.dispose(),De.dispose(),Ye.dispose(),$t.dispose(),I.dispose(),fe.dispose(),Re.dispose(),V.dispose(),pe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",an),ye.removeEventListener("sessionend",_n),In.stop()};function Ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=dt.autoReset,Z=We.enabled,le=We.autoUpdate,ue=We.needsUpdate,Q=We.type;we(),dt.autoReset=C,We.enabled=Z,We.autoUpdate=le,We.needsUpdate=ue,We.type=Q}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Oe(C){const Z=C.target;Z.removeEventListener("dispose",Oe),qe(Z)}function qe(C){vt(C),Ye.remove(C)}function vt(C){const Z=Ye.get(C).programs;Z!==void 0&&(Z.forEach(function(le){pe.releaseProgram(le)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,le,ue,Q,Ce){Z===null&&(Z=Ct);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=ar(C,Z,le,ue,Q);Ge.setMaterial(ue,Ie);let He=le.index,at=1;if(ue.wireframe===!0){if(He=ie.getWireframeAttribute(le),He===void 0)return;at=2}const $e=le.drawRange,je=le.attributes.position;let gt=$e.start*at,It=($e.start+$e.count)*at;Ce!==null&&(gt=Math.max(gt,Ce.start*at),It=Math.min(It,(Ce.start+Ce.count)*at)),He!==null?(gt=Math.max(gt,0),It=Math.min(It,He.count)):je!=null&&(gt=Math.max(gt,0),It=Math.min(It,je.count));const tn=It-gt;if(tn<0||tn===1/0)return;Re.setup(Q,ue,ze,le,He);let St,Bt=Xe;if(He!==null&&(St=b.get(He),Bt=W,Bt.setIndex(St)),Q.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*ft()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(Q.isLine){let Je=ue.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*ft()),Q.isLineSegments?Bt.setMode(X.LINES):Q.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else Q.isPoints?Bt.setMode(X.POINTS):Q.isSprite&&Bt.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Je=Q._multiDrawStarts,Gt=Q._multiDrawCounts,Rt=Q._multiDrawCount,En=He?b.get(He).bytesPerElement:1,Vr=Ye.get(ue).currentProgram.getUniforms();for(let Qt=0;Qt<Rt;Qt++)Vr.setValue(X,"_gl_DrawID",Qt),Bt.render(Je[Qt]/En,Gt[Qt])}else if(Q.isInstancedMesh)Bt.renderInstances(gt,tn,Q.count);else if(le.isInstancedBufferGeometry){const Je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Gt=Math.min(le.instanceCount,Je);Bt.renderInstances(gt,tn,Gt)}else Bt.render(gt,tn)};function mt(C,Z,le){C.transparent===!0&&C.side===Si&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,ki(C,Z,le),C.side=Fr,C.needsUpdate=!0,ki(C,Z,le),C.side=Si):ki(C,Z,le)}this.compile=function(C,Z,le=null){le===null&&(le=C),x=De.get(le),x.init(Z),D.push(x),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),C!==le&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ue=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const ze=Ce[Ie];mt(ze,le,Q),ue.add(ze)}else mt(Ce,le,Q),ue.add(Ce)}),x=D.pop(),ue},this.compileAsync=function(C,Z,le=null){const ue=this.compile(C,Z,le);return new Promise(Q=>{function Ce(){if(ue.forEach(function(Ie){Ye.get(Ie).currentProgram.isReady()&&ue.delete(Ie)}),ue.size===0){Q(C);return}setTimeout(Ce,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let hn=null;function en(C){hn&&hn(C)}function an(){In.stop()}function _n(){In.start()}const In=new oM;In.setAnimationLoop(en),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(C){hn=C,ye.setAnimationLoop(C),C===null?In.stop():In.start()},ye.addEventListener("sessionstart",an),ye.addEventListener("sessionend",_n),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(Z),Z=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,G),x=De.get(C,D.length),x.init(Z),D.push(x),Ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J.setFromProjectionMatrix(Ue),Ae=this.localClippingEnabled,_e=Ve.init(this.clippingPlanes,Ae),M=Fe.get(C,P.length),M.init(),P.push(M),ye.enabled===!0&&ye.isPresenting===!0){const Ce=w.xr.getDepthSensingMesh();Ce!==null&&sr(Ce,Z,-1/0,w.sortObjects)}sr(C,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Se,N),Lt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Lt&&Te.addToRenderList(M,C),this.info.render.frame++,_e===!0&&Ve.beginShadows();const le=x.state.shadowsArray;We.render(le,C,Z),_e===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=M.opaque,Q=M.transmissive;if(x.setupLights(),Z.isArrayCamera){const Ce=Z.cameras;if(Q.length>0)for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const He=Ce[Ie];ua(ue,Q,C,He)}Lt&&Te.render(C);for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const He=Ce[Ie];la(M,C,He,He.viewport)}}else Q.length>0&&ua(ue,Q,C,Z),Lt&&Te.render(C),la(M,C,Z);G!==null&&U===0&&(rt.updateMultisampleRenderTarget(G),rt.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(w,C,Z),Re.resetDefaultState(),L=-1,A=null,D.pop(),D.length>0?(x=D[D.length-1],_e===!0&&Ve.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function sr(C,Z,le,ue){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){ue&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ue);const Ie=fe.update(C),ze=C.material;ze.visible&&M.push(C,Ie,ze,le,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Ie=fe.update(C),ze=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ke.copy(Ie.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Ue)),Array.isArray(ze)){const He=Ie.groups;for(let at=0,$e=He.length;at<$e;at++){const je=He[at],gt=ze[je.materialIndex];gt&&gt.visible&&M.push(C,Ie,gt,le,Ke.z,je)}}else ze.visible&&M.push(C,Ie,ze,le,Ke.z,null)}}const Ce=C.children;for(let Ie=0,ze=Ce.length;Ie<ze;Ie++)sr(Ce[Ie],Z,le,ue)}function la(C,Z,le,ue){const Q=C.opaque,Ce=C.transmissive,Ie=C.transparent;x.setupLightsView(le),_e===!0&&Ve.setGlobalState(w.clippingPlanes,le),ue&&Ge.viewport(k.copy(ue)),Q.length>0&&Ai(Q,Z,le),Ce.length>0&&Ai(Ce,Z,le),Ie.length>0&&Ai(Ie,Z,le),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ua(C,Z,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new sa(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?nu:nr,minFilter:Ur,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[ue.id],Ie=ue.viewport||k;Ce.setSize(Ie.z*w.transmissionResolutionScale,Ie.w*w.transmissionResolutionScale);const ze=w.getRenderTarget(),He=w.getActiveCubeFace(),at=w.getActiveMipmapLevel();w.setRenderTarget(Ce),w.getClearColor(me),he=w.getClearAlpha(),he<1&&w.setClearColor(16777215,.5),w.clear(),Lt&&Te.render(le);const $e=w.toneMapping;w.toneMapping=Ts;const je=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),_e===!0&&Ve.setGlobalState(w.clippingPlanes,ue),Ai(C,le,ue),rt.updateMultisampleRenderTarget(Ce),rt.updateRenderTargetMipmap(Ce),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let It=0,tn=Z.length;It<tn;It++){const St=Z[It],Bt=St.object,Je=St.geometry,Gt=St.material,Rt=St.group;if(Gt.side===Si&&Bt.layers.test(ue.layers)){const En=Gt.side;Gt.side=qn,Gt.needsUpdate=!0,bi(Bt,le,ue,Je,Gt,Rt),Gt.side=En,Gt.needsUpdate=!0,gt=!0}}gt===!0&&(rt.updateMultisampleRenderTarget(Ce),rt.updateRenderTargetMipmap(Ce))}w.setRenderTarget(ze,He,at),w.setClearColor(me,he),je!==void 0&&(ue.viewport=je),w.toneMapping=$e}function Ai(C,Z,le){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ce=C.length;Q<Ce;Q++){const Ie=C[Q],ze=Ie.object,He=Ie.geometry,at=Ie.group;let $e=Ie.material;$e.allowOverride===!0&&ue!==null&&($e=ue),ze.layers.test(le.layers)&&bi(ze,Z,le,He,$e,at)}}function bi(C,Z,le,ue,Q,Ce){C.onBeforeRender(w,Z,le,ue,Q,Ce),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(w,Z,le,ue,C,Ce),Q.transparent===!0&&Q.side===Si&&Q.forceSinglePass===!1?(Q.side=qn,Q.needsUpdate=!0,w.renderBufferDirect(le,Z,ue,Q,C,Ce),Q.side=Fr,Q.needsUpdate=!0,w.renderBufferDirect(le,Z,ue,Q,C,Ce),Q.side=Si):w.renderBufferDirect(le,Z,ue,Q,C,Ce),C.onAfterRender(w,Z,le,ue,Q,Ce)}function ki(C,Z,le){Z.isScene!==!0&&(Z=Ct);const ue=Ye.get(C),Q=x.state.lights,Ce=x.state.shadowsArray,Ie=Q.state.version,ze=pe.getParameters(C,Q.state,Ce,Z,le),He=pe.getProgramCacheKey(ze);let at=ue.programs;ue.environment=C.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(C.isMeshStandardMaterial?I:$t).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",Oe),at=new Map,ue.programs=at);let $e=at.get(He);if($e!==void 0){if(ue.currentProgram===$e&&ue.lightsStateVersion===Ie)return Wi(C,ze),$e}else ze.uniforms=pe.getUniforms(C),C.onBeforeCompile(ze,w),$e=pe.acquireProgram(ze,He),at.set(He,$e),ue.uniforms=ze.uniforms;const je=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=Ve.uniform),Wi(C,ze),ue.needsLights=on(C),ue.lightsStateVersion=Ie,ue.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMap.value=Q.state.directionalShadowMap,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotShadowMap.value=Q.state.spotShadowMap,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMap.value=Q.state.pointShadowMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=$e,ue.uniformsList=null,$e}function Ri(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Qc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Wi(C,Z){const le=Ye.get(C);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function ar(C,Z,le,ue,Q){Z.isScene!==!0&&(Z=Ct),rt.resetTextureUnits();const Ce=Z.fog,Ie=ue.isMeshStandardMaterial?Z.environment:null,ze=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:To,He=(ue.isMeshStandardMaterial?I:$t).get(ue.envMap||Ie),at=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),je=!!le.morphAttributes.position,gt=!!le.morphAttributes.normal,It=!!le.morphAttributes.color;let tn=Ts;ue.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tn=w.toneMapping);const St=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Bt=St!==void 0?St.length:0,Je=Ye.get(ue),Gt=x.state.lights;if(_e===!0&&(Ae===!0||C!==A)){const Tn=C===A&&ue.id===L;Ve.setState(ue,C,Tn)}let Rt=!1;ue.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Gt.state.version||Je.outputColorSpace!==ze||Q.isBatchedMesh&&Je.batching===!1||!Q.isBatchedMesh&&Je.batching===!0||Q.isBatchedMesh&&Je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Je.instancingMorph===!1&&Q.morphTexture!==null||Je.envMap!==He||ue.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ve.numPlanes||Je.numIntersection!==Ve.numIntersection)||Je.vertexAlphas!==at||Je.vertexTangents!==$e||Je.morphTargets!==je||Je.morphNormals!==gt||Je.morphColors!==It||Je.toneMapping!==tn||Je.morphTargetsCount!==Bt)&&(Rt=!0):(Rt=!0,Je.__version=ue.version);let En=Je.currentProgram;Rt===!0&&(En=ki(ue,Z,Q));let Vr=!1,Qt=!1,lr=!1;const jt=En.getUniforms(),Bn=Je.uniforms;if(Ge.useProgram(En.program)&&(Vr=!0,Qt=!0,lr=!0),ue.id!==L&&(L=ue.id,Qt=!0),Vr||A!==C){Ge.buffers.depth.getReversed()?(Le.copy(C.projectionMatrix),iA(Le),rA(Le),jt.setValue(X,"projectionMatrix",Le)):jt.setValue(X,"projectionMatrix",C.projectionMatrix),jt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Un=jt.map.cameraPosition;Un!==void 0&&Un.setValue(X,ct.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&jt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&jt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Qt=!0,lr=!0)}if(Q.isSkinnedMesh){jt.setOptional(X,Q,"bindMatrix"),jt.setOptional(X,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),jt.setValue(X,"boneTexture",Tn.boneTexture,rt))}Q.isBatchedMesh&&(jt.setOptional(X,Q,"batchingTexture"),jt.setValue(X,"batchingTexture",Q._matricesTexture,rt),jt.setOptional(X,Q,"batchingIdTexture"),jt.setValue(X,"batchingIdTexture",Q._indirectTexture,rt),jt.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&jt.setValue(X,"batchingColorTexture",Q._colorsTexture,rt));const vn=le.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Be.update(Q,le,En),(Qt||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,jt.setValue(X,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&(Bn.envMapIntensity.value=Z.environmentIntensity),Qt&&(jt.setValue(X,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&wi(Bn,lr),Ce&&ue.fog===!0&&ce.refreshFogUniforms(Bn,Ce),ce.refreshMaterialUniforms(Bn,ue,q,j,x.state.transmissionRenderTarget[C.id]),Qc.upload(X,Ri(Je),Bn,rt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Qc.upload(X,Ri(Je),Bn,rt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&jt.setValue(X,"center",Q.center),jt.setValue(X,"modelViewMatrix",Q.modelViewMatrix),jt.setValue(X,"normalMatrix",Q.normalMatrix),jt.setValue(X,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Tn=ue.uniformsGroups;for(let Un=0,Xi=Tn.length;Un<Xi;Un++){const ur=Tn[Un];V.update(ur,En),V.bind(ur,En)}}return En}function wi(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function on(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Z,le){const ue=Ye.get(C);ue.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ye.get(C.texture).__webglTexture=Z,Ye.get(C.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const le=Ye.get(C);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0};const ca=X.createFramebuffer();this.setRenderTarget=function(C,Z=0,le=0){G=C,F=Z,U=le;let ue=!0,Q=null,Ce=!1,Ie=!1;if(C){const He=Ye.get(C);if(He.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(X.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(He.__hasExternalTextures)rt.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const je=C.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&Ye.has(je)&&(C.width!==je.image.width||C.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ie=!0);const $e=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($e[Z])?Q=$e[Z][le]:Q=$e[Z],Ce=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?Q=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray($e)?Q=$e[le]:Q=$e,k.copy(C.viewport),se.copy(C.scissor),re=C.scissorTest}else k.copy(ee).multiplyScalar(q).floor(),se.copy(Me).multiplyScalar(q).floor(),re=Ee;if(le!==0&&(Q=ca),Ge.bindFramebuffer(X.FRAMEBUFFER,Q)&&ue&&Ge.drawBuffers(C,Q),Ge.viewport(k),Ge.scissor(se),Ge.setScissorTest(re),Ce){const He=Ye.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,le)}else if(Ie){const He=Ye.get(C.texture),at=Z;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,He.__webglTexture,le,at)}else if(C!==null&&le!==0){const He=Ye.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,He.__webglTexture,le)}L=-1},this.readRenderTargetPixels=function(C,Z,le,ue,Q,Ce,Ie,ze=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He){Ge.bindFramebuffer(X.FRAMEBUFFER,He);try{const at=C.textures[ze],$e=at.format,je=at.type;if(!ht.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ue&&le>=0&&le<=C.height-Q&&(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze),X.readPixels(Z,le,ue,Q,te.convert($e),te.convert(je),Ce))}finally{const at=G!==null?Ye.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(C,Z,le,ue,Q,Ce,Ie,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(He=He[Ie]),He)if(Z>=0&&Z<=C.width-ue&&le>=0&&le<=C.height-Q){Ge.bindFramebuffer(X.FRAMEBUFFER,He);const at=C.textures[ze],$e=at.format,je=at.type;if(!ht.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.bufferData(X.PIXEL_PACK_BUFFER,Ce.byteLength,X.STREAM_READ),C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze),X.readPixels(Z,le,ue,Q,te.convert($e),te.convert(je),0);const It=G!==null?Ye.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,It);const tn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await nA(X,tn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ce),X.deleteBuffer(gt),X.deleteSync(tn),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,le=0){const ue=Math.pow(2,-le),Q=Math.floor(C.image.width*ue),Ce=Math.floor(C.image.height*ue),Ie=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;rt.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,le,0,0,Ie,ze,Q,Ce),Ge.unbindTexture()};const or=X.createFramebuffer(),Ci=X.createFramebuffer();this.copyTextureToTexture=function(C,Z,le=null,ue=null,Q=0,Ce=null){Ce===null&&(Q!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=Q,Q=0):Ce=0);let Ie,ze,He,at,$e,je,gt,It,tn;const St=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(le!==null)Ie=le.max.x-le.min.x,ze=le.max.y-le.min.y,He=le.isBox3?le.max.z-le.min.z:1,at=le.min.x,$e=le.min.y,je=le.isBox3?le.min.z:0;else{const vn=Math.pow(2,-Q);Ie=Math.floor(St.width*vn),ze=Math.floor(St.height*vn),C.isDataArrayTexture?He=St.depth:C.isData3DTexture?He=Math.floor(St.depth*vn):He=1,at=0,$e=0,je=0}ue!==null?(gt=ue.x,It=ue.y,tn=ue.z):(gt=0,It=0,tn=0);const Bt=te.convert(Z.format),Je=te.convert(Z.type);let Gt;Z.isData3DTexture?(rt.setTexture3D(Z,0),Gt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(rt.setTexture2DArray(Z,0),Gt=X.TEXTURE_2D_ARRAY):(rt.setTexture2D(Z,0),Gt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Rt=X.getParameter(X.UNPACK_ROW_LENGTH),En=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Vr=X.getParameter(X.UNPACK_SKIP_PIXELS),Qt=X.getParameter(X.UNPACK_SKIP_ROWS),lr=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,St.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,St.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,at),X.pixelStorei(X.UNPACK_SKIP_ROWS,$e),X.pixelStorei(X.UNPACK_SKIP_IMAGES,je);const jt=C.isDataArrayTexture||C.isData3DTexture,Bn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const vn=Ye.get(C),Tn=Ye.get(Z),Un=Ye.get(vn.__renderTarget),Xi=Ye.get(Tn.__renderTarget);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,Un.__webglFramebuffer),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let ur=0;ur<He;ur++)jt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,Q,je+ur),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ye.get(Z).__webglTexture,Ce,tn+ur)),X.blitFramebuffer(at,$e,Ie,ze,gt,It,Ie,ze,X.DEPTH_BUFFER_BIT,X.NEAREST);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ye.has(C)){const vn=Ye.get(C),Tn=Ye.get(Z);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,or),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ci);for(let Un=0;Un<He;Un++)jt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,Q,je+Un):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,Q),Bn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Tn.__webglTexture,Ce,tn+Un):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Tn.__webglTexture,Ce),Q!==0?X.blitFramebuffer(at,$e,Ie,ze,gt,It,Ie,ze,X.COLOR_BUFFER_BIT,X.NEAREST):Bn?X.copyTexSubImage3D(Gt,Ce,gt,It,tn+Un,at,$e,Ie,ze):X.copyTexSubImage2D(Gt,Ce,gt,It,at,$e,Ie,ze);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Bn?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Gt,Ce,gt,It,tn,Ie,ze,He,Bt,Je,St.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Gt,Ce,gt,It,tn,Ie,ze,He,Bt,St.data):X.texSubImage3D(Gt,Ce,gt,It,tn,Ie,ze,He,Bt,Je,St):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ce,gt,It,Ie,ze,Bt,Je,St.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ce,gt,It,St.width,St.height,Bt,St.data):X.texSubImage2D(X.TEXTURE_2D,Ce,gt,It,Ie,ze,Bt,Je,St);X.pixelStorei(X.UNPACK_ROW_LENGTH,Rt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,En),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Vr),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,lr),Ce===0&&Z.generateMipmaps&&X.generateMipmap(Gt),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,le=null,ue=null,Q=0){return go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,le,ue,Q)},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){F=0,U=0,G=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}const sL=parseInt(As.replace(/\D+/g,""));function zy(s,e){if(e===RT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===im||e===zx){let t=s.getIndex();if(t===null){const c=[],h=s.getAttribute("position");if(h!==void 0){for(let f=0;f<h.count;f++)c.push(f);s.setIndex(c),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,a=[];if(t)if(e===im)for(let c=1;c<=i;c++)a.push(t.getX(0)),a.push(t.getX(c)),a.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(a.push(t.getX(c)),a.push(t.getX(c+1)),a.push(t.getX(c+2))):(a.push(t.getX(c+2)),a.push(t.getX(c+1)),a.push(t.getX(c)));a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=s.clone();return l.setIndex(a),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var aL=Object.defineProperty,oL=(s,e,t)=>e in s?aL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,lL=(s,e,t)=>(oL(s,e+"",t),t);class uL{constructor(){lL(this,"_listeners")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}var cL=Object.defineProperty,hL=(s,e,t)=>e in s?cL(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,et=(s,e,t)=>(hL(s,typeof e!="symbol"?e+"":e,t),t);const Hc=new Co,Hy=new ys,fL=Math.cos(70*(Math.PI/180)),Vy=(s,e)=>(s%e+e)%e;class dL extends uL{constructor(e,t){super(),et(this,"object"),et(this,"domElement"),et(this,"enabled",!0),et(this,"target",new B),et(this,"minDistance",0),et(this,"maxDistance",1/0),et(this,"minZoom",0),et(this,"maxZoom",1/0),et(this,"minPolarAngle",0),et(this,"maxPolarAngle",Math.PI),et(this,"minAzimuthAngle",-1/0),et(this,"maxAzimuthAngle",1/0),et(this,"enableDamping",!1),et(this,"dampingFactor",.05),et(this,"enableZoom",!0),et(this,"zoomSpeed",1),et(this,"enableRotate",!0),et(this,"rotateSpeed",1),et(this,"enablePan",!0),et(this,"panSpeed",1),et(this,"screenSpacePanning",!0),et(this,"keyPanSpeed",7),et(this,"zoomToCursor",!1),et(this,"autoRotate",!1),et(this,"autoRotateSpeed",2),et(this,"reverseOrbit",!1),et(this,"reverseHorizontalOrbit",!1),et(this,"reverseVerticalOrbit",!1),et(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),et(this,"mouseButtons",{LEFT:Ga.ROTATE,MIDDLE:Ga.DOLLY,RIGHT:Ga.PAN}),et(this,"touches",{ONE:ka.ROTATE,TWO:ka.DOLLY_PAN}),et(this,"target0"),et(this,"position0"),et(this,"zoom0"),et(this,"_domElementKeyEvents",null),et(this,"getPolarAngle"),et(this,"getAzimuthalAngle"),et(this,"setPolarAngle"),et(this,"setAzimuthalAngle"),et(this,"getDistance"),et(this,"getZoomScale"),et(this,"listenToKeyEvents"),et(this,"stopListenToKeyEvents"),et(this,"saveState"),et(this,"reset"),et(this,"update"),et(this,"connect"),et(this,"dispose"),et(this,"dollyIn"),et(this,"dollyOut"),et(this,"getScale"),et(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=W=>{let te=Vy(W,2*Math.PI),Re=m.phi;Re<0&&(Re+=2*Math.PI),te<0&&(te+=2*Math.PI);let V=Math.abs(te-Re);2*Math.PI-V<V&&(te<Re?te+=2*Math.PI:Re+=2*Math.PI),_.phi=te-Re,i.update()},this.setAzimuthalAngle=W=>{let te=Vy(W,2*Math.PI),Re=m.theta;Re<0&&(Re+=2*Math.PI),te<0&&(te+=2*Math.PI);let V=Math.abs(te-Re);2*Math.PI-V<V&&(te<Re?te+=2*Math.PI:Re+=2*Math.PI),_.theta=te-Re,i.update()},this.getDistance=()=>i.object.position.distanceTo(i.target),this.listenToKeyEvents=W=>{W.addEventListener("keydown",ce),this._domElementKeyEvents=W},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=()=>{i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=()=>{i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(a),i.update(),f=h.NONE},this.update=(()=>{const W=new B,te=new B(0,1,0),Re=new ut().setFromUnitVectors(e.up,te),V=Re.clone().invert(),we=new B,ye=new ut,Ne=2*Math.PI;return function(){const ge=i.object.position;Re.setFromUnitVectors(e.up,te),V.copy(Re).invert(),W.copy(ge).sub(i.target),W.applyQuaternion(Re),m.setFromVector3(W),i.autoRotate&&f===h.NONE&&me(se()),i.enableDamping?(m.theta+=_.theta*i.dampingFactor,m.phi+=_.phi*i.dampingFactor):(m.theta+=_.theta,m.phi+=_.phi);let Oe=i.minAzimuthAngle,qe=i.maxAzimuthAngle;isFinite(Oe)&&isFinite(qe)&&(Oe<-Math.PI?Oe+=Ne:Oe>Math.PI&&(Oe-=Ne),qe<-Math.PI?qe+=Ne:qe>Math.PI&&(qe-=Ne),Oe<=qe?m.theta=Math.max(Oe,Math.min(qe,m.theta)):m.theta=m.theta>(Oe+qe)/2?Math.max(Oe,m.theta):Math.min(qe,m.theta)),m.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,m.phi)),m.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(y,i.dampingFactor):i.target.add(y),i.zoomToCursor&&L||i.object.isOrthographicCamera?m.radius=Ee(m.radius):m.radius=Ee(m.radius*v),W.setFromSpherical(m),W.applyQuaternion(V),ge.copy(i.target).add(W),i.object.matrixAutoUpdate||i.object.updateMatrix(),i.object.lookAt(i.target),i.enableDamping===!0?(_.theta*=1-i.dampingFactor,_.phi*=1-i.dampingFactor,y.multiplyScalar(1-i.dampingFactor)):(_.set(0,0,0),y.set(0,0,0));let vt=!1;if(i.zoomToCursor&&L){let mt=null;if(i.object instanceof Cn&&i.object.isPerspectiveCamera){const hn=W.length();mt=Ee(hn*v);const en=hn-mt;i.object.position.addScaledVector(U,en),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const hn=new B(G.x,G.y,0);hn.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix(),vt=!0;const en=new B(G.x,G.y,0);en.unproject(i.object),i.object.position.sub(en).add(hn),i.object.updateMatrixWorld(),mt=W.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;mt!==null&&(i.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(mt).add(i.object.position):(Hc.origin.copy(i.object.position),Hc.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Hc.direction))<fL?e.lookAt(i.target):(Hy.setFromNormalAndCoplanarPoint(i.object.up,i.target),Hc.intersectPlane(Hy,i.target))))}else i.object instanceof vo&&i.object.isOrthographicCamera&&(vt=v!==1,vt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/v)),i.object.updateProjectionMatrix()));return v=1,L=!1,vt||we.distanceToSquared(i.object.position)>d||8*(1-ye.dot(i.object.quaternion))>d?(i.dispatchEvent(a),we.copy(i.object.position),ye.copy(i.object.quaternion),vt=!1,!0):!1}})(),this.connect=W=>{i.domElement=W,i.domElement.style.touchAction="none",i.domElement.addEventListener("contextmenu",Ve),i.domElement.addEventListener("pointerdown",$t),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",pe)},this.dispose=()=>{var W,te,Re,V,we,ye;i.domElement&&(i.domElement.style.touchAction="auto"),(W=i.domElement)==null||W.removeEventListener("contextmenu",Ve),(te=i.domElement)==null||te.removeEventListener("pointerdown",$t),(Re=i.domElement)==null||Re.removeEventListener("pointercancel",b),(V=i.domElement)==null||V.removeEventListener("wheel",pe),(we=i.domElement)==null||we.ownerDocument.removeEventListener("pointermove",I),(ye=i.domElement)==null||ye.ownerDocument.removeEventListener("pointerup",b),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ce)};const i=this,a={type:"change"},l={type:"start"},c={type:"end"},h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let f=h.NONE;const d=1e-6,m=new dy,_=new dy;let v=1;const y=new B,S=new tt,T=new tt,M=new tt,x=new tt,P=new tt,D=new tt,w=new tt,O=new tt,F=new tt,U=new B,G=new tt;let L=!1;const A=[],k={};function se(){return 2*Math.PI/60/60*i.autoRotateSpeed}function re(){return Math.pow(.95,i.zoomSpeed)}function me(W){i.reverseOrbit||i.reverseHorizontalOrbit?_.theta+=W:_.theta-=W}function he(W){i.reverseOrbit||i.reverseVerticalOrbit?_.phi+=W:_.phi-=W}const z=(()=>{const W=new B;return function(Re,V){W.setFromMatrixColumn(V,0),W.multiplyScalar(-Re),y.add(W)}})(),j=(()=>{const W=new B;return function(Re,V){i.screenSpacePanning===!0?W.setFromMatrixColumn(V,1):(W.setFromMatrixColumn(V,0),W.crossVectors(i.object.up,W)),W.multiplyScalar(Re),y.add(W)}})(),q=(()=>{const W=new B;return function(Re,V){const we=i.domElement;if(we&&i.object instanceof Cn&&i.object.isPerspectiveCamera){const ye=i.object.position;W.copy(ye).sub(i.target);let Ne=W.length();Ne*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Re*Ne/we.clientHeight,i.object.matrix),j(2*V*Ne/we.clientHeight,i.object.matrix)}else we&&i.object instanceof vo&&i.object.isOrthographicCamera?(z(Re*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),j(V*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function Se(W){i.object instanceof Cn&&i.object.isPerspectiveCamera||i.object instanceof vo&&i.object.isOrthographicCamera?v=W:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(W){Se(v/W)}function ee(W){Se(v*W)}function Me(W){if(!i.zoomToCursor||!i.domElement)return;L=!0;const te=i.domElement.getBoundingClientRect(),Re=W.clientX-te.left,V=W.clientY-te.top,we=te.width,ye=te.height;G.x=Re/we*2-1,G.y=-(V/ye)*2+1,U.set(G.x,G.y,1).unproject(i.object).sub(i.object.position).normalize()}function Ee(W){return Math.max(i.minDistance,Math.min(i.maxDistance,W))}function J(W){S.set(W.clientX,W.clientY)}function _e(W){Me(W),w.set(W.clientX,W.clientY)}function Ae(W){x.set(W.clientX,W.clientY)}function Le(W){T.set(W.clientX,W.clientY),M.subVectors(T,S).multiplyScalar(i.rotateSpeed);const te=i.domElement;te&&(me(2*Math.PI*M.x/te.clientHeight),he(2*Math.PI*M.y/te.clientHeight)),S.copy(T),i.update()}function Ue(W){O.set(W.clientX,W.clientY),F.subVectors(O,w),F.y>0?N(re()):F.y<0&&ee(re()),w.copy(O),i.update()}function ct(W){P.set(W.clientX,W.clientY),D.subVectors(P,x).multiplyScalar(i.panSpeed),q(D.x,D.y),x.copy(P),i.update()}function Ke(W){Me(W),W.deltaY<0?ee(re()):W.deltaY>0&&N(re()),i.update()}function Ct(W){let te=!1;switch(W.code){case i.keys.UP:q(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:q(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:q(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:q(-i.keyPanSpeed,0),te=!0;break}te&&(W.preventDefault(),i.update())}function Lt(){if(A.length==1)S.set(A[0].pageX,A[0].pageY);else{const W=.5*(A[0].pageX+A[1].pageX),te=.5*(A[0].pageY+A[1].pageY);S.set(W,te)}}function ft(){if(A.length==1)x.set(A[0].pageX,A[0].pageY);else{const W=.5*(A[0].pageX+A[1].pageX),te=.5*(A[0].pageY+A[1].pageY);x.set(W,te)}}function X(){const W=A[0].pageX-A[1].pageX,te=A[0].pageY-A[1].pageY,Re=Math.sqrt(W*W+te*te);w.set(0,Re)}function sn(){i.enableZoom&&X(),i.enablePan&&ft()}function Mt(){i.enableZoom&&X(),i.enableRotate&&Lt()}function ht(W){if(A.length==1)T.set(W.pageX,W.pageY);else{const Re=Xe(W),V=.5*(W.pageX+Re.x),we=.5*(W.pageY+Re.y);T.set(V,we)}M.subVectors(T,S).multiplyScalar(i.rotateSpeed);const te=i.domElement;te&&(me(2*Math.PI*M.x/te.clientHeight),he(2*Math.PI*M.y/te.clientHeight)),S.copy(T)}function Ge(W){if(A.length==1)P.set(W.pageX,W.pageY);else{const te=Xe(W),Re=.5*(W.pageX+te.x),V=.5*(W.pageY+te.y);P.set(Re,V)}D.subVectors(P,x).multiplyScalar(i.panSpeed),q(D.x,D.y),x.copy(P)}function dt(W){const te=Xe(W),Re=W.pageX-te.x,V=W.pageY-te.y,we=Math.sqrt(Re*Re+V*V);O.set(0,we),F.set(0,Math.pow(O.y/w.y,i.zoomSpeed)),N(F.y),w.copy(O)}function Ye(W){i.enableZoom&&dt(W),i.enablePan&&Ge(W)}function rt(W){i.enableZoom&&dt(W),i.enableRotate&&ht(W)}function $t(W){var te,Re;i.enabled!==!1&&(A.length===0&&((te=i.domElement)==null||te.ownerDocument.addEventListener("pointermove",I),(Re=i.domElement)==null||Re.ownerDocument.addEventListener("pointerup",b)),We(W),W.pointerType==="touch"?Fe(W):ie(W))}function I(W){i.enabled!==!1&&(W.pointerType==="touch"?De(W):fe(W))}function b(W){var te,Re,V;Te(W),A.length===0&&((te=i.domElement)==null||te.releasePointerCapture(W.pointerId),(Re=i.domElement)==null||Re.ownerDocument.removeEventListener("pointermove",I),(V=i.domElement)==null||V.ownerDocument.removeEventListener("pointerup",b)),i.dispatchEvent(c),f=h.NONE}function ie(W){let te;switch(W.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Ga.DOLLY:if(i.enableZoom===!1)return;_e(W),f=h.DOLLY;break;case Ga.ROTATE:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enablePan===!1)return;Ae(W),f=h.PAN}else{if(i.enableRotate===!1)return;J(W),f=h.ROTATE}break;case Ga.PAN:if(W.ctrlKey||W.metaKey||W.shiftKey){if(i.enableRotate===!1)return;J(W),f=h.ROTATE}else{if(i.enablePan===!1)return;Ae(W),f=h.PAN}break;default:f=h.NONE}f!==h.NONE&&i.dispatchEvent(l)}function fe(W){if(i.enabled!==!1)switch(f){case h.ROTATE:if(i.enableRotate===!1)return;Le(W);break;case h.DOLLY:if(i.enableZoom===!1)return;Ue(W);break;case h.PAN:if(i.enablePan===!1)return;ct(W);break}}function pe(W){i.enabled===!1||i.enableZoom===!1||f!==h.NONE&&f!==h.ROTATE||(W.preventDefault(),i.dispatchEvent(l),Ke(W),i.dispatchEvent(c))}function ce(W){i.enabled===!1||i.enablePan===!1||Ct(W)}function Fe(W){switch(Be(W),A.length){case 1:switch(i.touches.ONE){case ka.ROTATE:if(i.enableRotate===!1)return;Lt(),f=h.TOUCH_ROTATE;break;case ka.PAN:if(i.enablePan===!1)return;ft(),f=h.TOUCH_PAN;break;default:f=h.NONE}break;case 2:switch(i.touches.TWO){case ka.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;sn(),f=h.TOUCH_DOLLY_PAN;break;case ka.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Mt(),f=h.TOUCH_DOLLY_ROTATE;break;default:f=h.NONE}break;default:f=h.NONE}f!==h.NONE&&i.dispatchEvent(l)}function De(W){switch(Be(W),f){case h.TOUCH_ROTATE:if(i.enableRotate===!1)return;ht(W),i.update();break;case h.TOUCH_PAN:if(i.enablePan===!1)return;Ge(W),i.update();break;case h.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(W),i.update();break;case h.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;rt(W),i.update();break;default:f=h.NONE}}function Ve(W){i.enabled!==!1&&W.preventDefault()}function We(W){A.push(W)}function Te(W){delete k[W.pointerId];for(let te=0;te<A.length;te++)if(A[te].pointerId==W.pointerId){A.splice(te,1);return}}function Be(W){let te=k[W.pointerId];te===void 0&&(te=new tt,k[W.pointerId]=te),te.set(W.pageX,W.pageY)}function Xe(W){const te=W.pointerId===A[0].pointerId?A[1]:A[0];return k[te.pointerId]}this.dollyIn=(W=re())=>{ee(W),i.update()},this.dollyOut=(W=re())=>{N(W),i.update()},this.getScale=()=>v,this.setScale=W=>{Se(W),i.update()},this.getZoomScale=()=>re(),t!==void 0&&this.connect(t),this.update()}}function oh(s){if(typeof TextDecoder<"u")return new TextDecoder().decode(s);let e="";for(let t=0,i=s.length;t<i;t++)e+=String.fromCharCode(s[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const ta="srgb",Br="srgb-linear",Gy=3001,pL=3e3;class mL extends Uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xL(t)}),this.register(function(t){return new ML(t)}),this.register(function(t){return new LL(t)}),this.register(function(t){return new DL(t)}),this.register(function(t){return new UL(t)}),this.register(function(t){return new EL(t)}),this.register(function(t){return new TL(t)}),this.register(function(t){return new AL(t)}),this.register(function(t){return new bL(t)}),this.register(function(t){return new yL(t)}),this.register(function(t){return new RL(t)}),this.register(function(t){return new SL(t)}),this.register(function(t){return new CL(t)}),this.register(function(t){return new wL(t)}),this.register(function(t){return new _L(t)}),this.register(function(t){return new NL(t)}),this.register(function(t){return new PL(t)})}load(e,t,i,a){const l=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=ql.extractUrlBase(e);c=ql.resolveURL(d,this.path)}else c=ql.extractUrlBase(e);this.manager.itemStart(e);const h=function(d){a?a(d):console.error(d),l.manager.itemError(e),l.manager.itemEnd(e)},f=new rM(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{l.parse(d,c,function(m){t(m),l.manager.itemEnd(e)},h)}catch(m){h(m)}},i,h)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,a){let l;const c={},h={};if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(oh(new Uint8Array(e.slice(0,4)))===fM){try{c[bt.KHR_BINARY_GLTF]=new OL(e)}catch(m){a&&a(m);return}l=JSON.parse(c[bt.KHR_BINARY_GLTF].content)}else l=JSON.parse(oh(new Uint8Array(e)));else l=e;if(l.asset===void 0||l.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const f=new jL(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const m=this.pluginCallbacks[d](f);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),h[m.name]=m,c[m.name]=!0}if(l.extensionsUsed)for(let d=0;d<l.extensionsUsed.length;++d){const m=l.extensionsUsed[d],_=l.extensionsRequired||[];switch(m){case bt.KHR_MATERIALS_UNLIT:c[m]=new vL;break;case bt.KHR_DRACO_MESH_COMPRESSION:c[m]=new IL(l,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:c[m]=new BL;break;case bt.KHR_MESH_QUANTIZATION:c[m]=new FL;break;default:_.indexOf(m)>=0&&h[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}f.setExtensions(c),f.setPlugins(h),f.parse(i,a)}parseAsync(e,t){const i=this;return new Promise(function(a,l){i.parse(e,t,a,l)})}}function gL(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _L{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,a=t.length;i<a;i++){const l=t[i];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let a=t.cache.get(i);if(a)return a;const l=t.json,f=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let d;const m=new Qe(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],Br);const _=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new aM(m),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new tb(m),d.distance=_;break;case"spot":d=new $A(m),d.distance=_,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),d.decay=2,Dr(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),a=Promise.resolve(d),t.cache.add(i,a),a}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,l=i.json.nodes[e],h=(l.extensions&&l.extensions[this.name]||{}).light;return h===void 0?null:this._loadLight(h).then(function(f){return i._getNodeRef(t.cache,h,f)})}}class vL{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pr}extendParams(e,t,i){const a=[];e.color=new Qe(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const c=l.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Br),e.opacity=c[3]}l.baseColorTexture!==void 0&&a.push(i.assignTexture(e,"map",l.baseColorTexture,ta))}return Promise.all(a)}}class yL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class xL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(l.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const h=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(h,h)}return Promise.all(l)}}class ML{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class SL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&l.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(l)}}class EL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=a.extensions[this.name];if(c.sheenColorFactor!==void 0){const h=c.sheenColorFactor;t.sheenColor.setRGB(h[0],h[1],h[2],Br)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&l.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,ta)),c.sheenRoughnessTexture!==void 0&&l.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(l)}}class TL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&l.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(l)}}class AL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&l.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const h=c.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(h[0],h[1],h[2],Br),Promise.all(l)}}class bL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const a=this.parser.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=a.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class RL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&l.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const h=c.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(h[0],h[1],h[2],Br),c.specularColorTexture!==void 0&&l.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,ta)),Promise.all(l)}}class wL{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&l.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(l)}}class CL{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser,a=i.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const l=[],c=a.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&l.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(l)}}class LL{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,a=i.textures[e];if(!a.extensions||!a.extensions[this.name])return null;const l=a.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,c)}}class DL{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,a=i.json,l=a.textures[e];if(!l.extensions||!l.extensions[t])return null;const c=l.extensions[t],h=a.images[c.source];let f=i.textureLoader;if(h.uri){const d=i.options.manager.getHandler(h.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(a.extensionsRequired&&a.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UL{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,a=i.json,l=a.textures[e];if(!l.extensions||!l.extensions[t])return null;const c=l.extensions[t],h=a.images[c.source];let f=i.textureLoader;if(h.uri){const d=i.options.manager.getHandler(h.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(a.extensionsRequired&&a.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NL{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const a=i.extensions[this.name],l=this.parser.getDependency("buffer",a.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(h){const f=a.byteOffset||0,d=a.byteLength||0,m=a.count,_=a.byteStride,v=new Uint8Array(h,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,_,v,a.mode,a.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*_);return c.decodeGltfBuffer(new Uint8Array(y),m,_,v,a.mode,a.filter),y})})}else return null}}class PL{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const a=t.meshes[i.mesh];for(const d of a.primitives)if(d.mode!==xi.TRIANGLES&&d.mode!==xi.TRIANGLE_STRIP&&d.mode!==xi.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,h=[],f={};for(const d in c)h.push(this.parser.getDependency("accessor",c[d]).then(m=>(f[d]=m,f[d])));return h.length<1?null:(h.push(this.parser.createNodeMesh(e)),Promise.all(h).then(d=>{const m=d.pop(),_=m.isGroup?m.children:[m],v=d[0].count,y=[];for(const S of _){const T=new ot,M=new B,x=new ut,P=new B(1,1,1),D=new NA(S.geometry,S.material,v);for(let w=0;w<v;w++)f.TRANSLATION&&M.fromBufferAttribute(f.TRANSLATION,w),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,w),f.SCALE&&P.fromBufferAttribute(f.SCALE,w),D.setMatrixAt(w,T.compose(M,x,P));for(const w in f)if(w==="_COLOR_0"){const O=f[w];D.instanceColor=new sm(O.array,O.itemSize,O.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&S.geometry.setAttribute(w,f[w]);Kt.prototype.copy.call(D,S),this.parser.assignFinalMaterial(D),y.push(D)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const fM="glTF",Il=12,ky={JSON:1313821514,BIN:5130562};class OL{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Il);if(this.header={magic:oh(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fM)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Il,a=new DataView(e,Il);let l=0;for(;l<i;){const c=a.getUint32(l,!0);l+=4;const h=a.getUint32(l,!0);if(l+=4,h===ky.JSON){const f=new Uint8Array(e,Il+l,c);this.content=oh(f)}else if(h===ky.BIN){const f=Il+l;this.body=e.slice(f,f+c)}l+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class IL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,a=this.dracoLoader,l=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,h={},f={},d={};for(const m in c){const _=um[m]||m.toLowerCase();h[_]=c[m]}for(const m in e.attributes){const _=um[m]||m.toLowerCase();if(c[m]!==void 0){const v=i.accessors[e.attributes[m]],y=yo[v.componentType];d[_]=y.name,f[_]=v.normalized===!0}}return t.getDependency("bufferView",l).then(function(m){return new Promise(function(_,v){a.decodeDracoFile(m,function(y){for(const S in y.attributes){const T=y.attributes[S],M=f[S];M!==void 0&&(T.normalized=M)}_(y)},h,d,Br,v)})})}}class BL{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FL{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class dM extends au{constructor(e,t,i,a){super(e,t,i,a)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,l=e*a*3+a;for(let c=0;c!==a;c++)t[c]=i[l+c];return t}interpolate_(e,t,i,a){const l=this.resultBuffer,c=this.sampleValues,h=this.valueSize,f=h*2,d=h*3,m=a-t,_=(i-t)/m,v=_*_,y=v*_,S=e*d,T=S-d,M=-2*y+3*v,x=y-v,P=1-M,D=x-v+_;for(let w=0;w!==h;w++){const O=c[T+w+h],F=c[T+w+f]*m,U=c[S+w+h],G=c[S+w]*m;l[w]=P*O+D*F+M*U+x*G}return l}}const zL=new ut;class HL extends dM{interpolate_(e,t,i,a){const l=super.interpolate_(e,t,i,a);return zL.fromArray(l).normalize().toArray(l),l}}const xi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wy={9728:$n,9729:Ei,9984:Dx,9985:Xc,9986:Gl,9987:Ur},Xy={33071:Ss,33648:th,10497:Eo},rp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},um={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...sL>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VL={CUBICSPLINE:void 0,LINEAR:$l,STEP:Jl},sp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GL(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new fh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fr})),s.DefaultMaterial}function js(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Dr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kL(s,e,t){let i=!1,a=!1,l=!1;for(let d=0,m=e.length;d<m;d++){const _=e[d];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(a=!0),_.COLOR_0!==void 0&&(l=!0),i&&a&&l)break}if(!i&&!a&&!l)return Promise.resolve(s);const c=[],h=[],f=[];for(let d=0,m=e.length;d<m;d++){const _=e[d];if(i){const v=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):s.attributes.position;c.push(v)}if(a){const v=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):s.attributes.normal;h.push(v)}if(l){const v=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):s.attributes.color;f.push(v)}}return Promise.all([Promise.all(c),Promise.all(h),Promise.all(f)]).then(function(d){const m=d[0],_=d[1],v=d[2];return i&&(s.morphAttributes.position=m),a&&(s.morphAttributes.normal=_),l&&(s.morphAttributes.color=v),s.morphTargetsRelative=!0,s})}function WL(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,a=t.length;i<a;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XL(s){let e;const t=s.extensions&&s.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ap(t.attributes):e=s.indices+":"+ap(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,a=s.targets.length;i<a;i++)e+=":"+ap(s.targets[i]);return e}function ap(s){let e="";const t=Object.keys(s).sort();for(let i=0,a=t.length;i<a;i++)e+=t[i]+":"+s[t[i]]+";";return e}function cm(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YL(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qL=new ot;class jL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,a=!1,l=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,a=navigator.userAgent.indexOf("Firefox")>-1,l=a?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||a&&l<98?this.textureLoader=new QA(this.options.manager):this.textureLoader=new rb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rM(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,a=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const h={scene:c[0][a.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:a.asset,parser:i,userData:{}};return js(l,h,a),Dr(h,a),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(h)})).then(function(){for(const f of h.scenes)f.updateMatrixWorld();e(h)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let a=0,l=t.length;a<l;a++){const c=t[a].joints;for(let h=0,f=c.length;h<f;h++)e[c[h]].isBone=!0}for(let a=0,l=e.length;a<l;a++){const c=e[a];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const a=i.clone(),l=(c,h)=>{const f=this.associations.get(c);f!=null&&this.associations.set(h,f);for(const[d,m]of c.children.entries())l(m,h.children[d])};return l(i,a),a.name+="_instance_"+e.uses[t]++,a}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const a=e(t[i]);if(a)return a}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let a=0;a<t.length;a++){const l=e(t[a]);l&&i.push(l)}return i}getDependency(e,t){const i=e+":"+t;let a=this.cache.get(i);if(!a){switch(e){case"scene":a=this.loadScene(t);break;case"node":a=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":a=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":a=this.loadAccessor(t);break;case"bufferView":a=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":a=this.loadBuffer(t);break;case"material":a=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":a=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":a=this.loadSkin(t);break;case"animation":a=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":a=this.loadCamera(t);break;default:if(a=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!a)throw new Error("Unknown type: "+e);break}this.cache.add(i,a)}return a}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,a=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(a.map(function(l,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const a=this.options;return new Promise(function(l,c){i.load(ql.resolveURL(t.uri,a.path),l,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const a=t.byteLength||0,l=t.byteOffset||0;return i.slice(l,l+a)})}loadAccessor(e){const t=this,i=this.json,a=this.json.accessors[e];if(a.bufferView===void 0&&a.sparse===void 0){const c=rp[a.type],h=yo[a.componentType],f=a.normalized===!0,d=new h(a.count*c);return Promise.resolve(new qt(d,c,f))}const l=[];return a.bufferView!==void 0?l.push(this.getDependency("bufferView",a.bufferView)):l.push(null),a.sparse!==void 0&&(l.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(l).then(function(c){const h=c[0],f=rp[a.type],d=yo[a.componentType],m=d.BYTES_PER_ELEMENT,_=m*f,v=a.byteOffset||0,y=a.bufferView!==void 0?i.bufferViews[a.bufferView].byteStride:void 0,S=a.normalized===!0;let T,M;if(y&&y!==_){const x=Math.floor(v/y),P="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+x+":"+a.count;let D=t.cache.get(P);D||(T=new d(h,x*y,a.count*y/m),D=new CA(T,y/m),t.cache.add(P,D)),M=new Lm(D,f,v%y/m,S)}else h===null?T=new d(a.count*f):T=new d(h,v,a.count*f),M=new qt(T,f,S);if(a.sparse!==void 0){const x=rp.SCALAR,P=yo[a.sparse.indices.componentType],D=a.sparse.indices.byteOffset||0,w=a.sparse.values.byteOffset||0,O=new P(c[1],D,a.sparse.count*x),F=new d(c[2],w,a.sparse.count*f);h!==null&&(M=new qt(M.array.slice(),M.itemSize,M.normalized));for(let U=0,G=O.length;U<G;U++){const L=O[U];if(M.setX(L,F[U*f]),f>=2&&M.setY(L,F[U*f+1]),f>=3&&M.setZ(L,F[U*f+2]),f>=4&&M.setW(L,F[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return M})}loadTexture(e){const t=this.json,i=this.options,l=t.textures[e].source,c=t.images[l];let h=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(h=f)}return this.loadTextureImage(e,l,h)}loadTextureImage(e,t,i){const a=this,l=this.json,c=l.textures[e],h=l.images[t],f=(h.uri||h.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||h.name||"",m.name===""&&typeof h.uri=="string"&&h.uri.startsWith("data:image/")===!1&&(m.name=h.uri);const v=(l.samplers||{})[c.sampler]||{};return m.magFilter=Wy[v.magFilter]||Ei,m.minFilter=Wy[v.minFilter]||Ur,m.wrapS=Xy[v.wrapS]||Eo,m.wrapT=Xy[v.wrapT]||Eo,a.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,a=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=a.images[e],h=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(_){d=!0;const v=new Blob([_],{type:c.mimeType});return f=h.createObjectURL(v),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(_){return new Promise(function(v,y){let S=v;t.isImageBitmapLoader===!0&&(S=function(T){const M=new Ln(T);M.needsUpdate=!0,v(M)}),t.load(ql.resolveURL(_,l.path),S,void 0,y)})}).then(function(_){return d===!0&&h.revokeObjectURL(f),Dr(_,c),_.userData.mimeType=c.mimeType||YL(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),_});return this.sourceCache[e]=m,m}assignTexture(e,t,i,a){const l=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),l.extensions[bt.KHR_TEXTURE_TRANSFORM]){const h=i.extensions!==void 0?i.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(h){const f=l.associations.get(c);c=l.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(c,h),l.associations.set(c,f)}}return a!==void 0&&(typeof a=="number"&&(a=a===Gy?ta:Br),"colorSpace"in c?c.colorSpace=a:c.encoding=a===ta?Gy:pL),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const a=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const h="PointsMaterial:"+i.uuid;let f=this.cache.get(h);f||(f=new $x,Hi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(h,f)),i=f}else if(e.isLine){const h="LineBasicMaterial:"+i.uuid;let f=this.cache.get(h);f||(f=new oa,Hi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(h,f)),i=f}if(a||l||c){let h="ClonedMaterial:"+i.uuid+":";a&&(h+="derivative-tangents:"),l&&(h+="vertex-colors:"),c&&(h+="flat-shading:");let f=this.cache.get(h);f||(f=i.clone(),l&&(f.vertexColors=!0),c&&(f.flatShading=!0),a&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(h,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return fh}loadMaterial(e){const t=this,i=this.json,a=this.extensions,l=i.materials[e];let c;const h={},f=l.extensions||{},d=[];if(f[bt.KHR_MATERIALS_UNLIT]){const _=a[bt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),d.push(_.extendParams(h,l,t))}else{const _=l.pbrMetallicRoughness||{};if(h.color=new Qe(1,1,1),h.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;h.color.setRGB(v[0],v[1],v[2],Br),h.opacity=v[3]}_.baseColorTexture!==void 0&&d.push(t.assignTexture(h,"map",_.baseColorTexture,ta)),h.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,h.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(h,"metalnessMap",_.metallicRoughnessTexture)),d.push(t.assignTexture(h,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,h)})))}l.doubleSided===!0&&(h.side=Si);const m=l.alphaMode||sp.OPAQUE;if(m===sp.BLEND?(h.transparent=!0,h.depthWrite=!1):(h.transparent=!1,m===sp.MASK&&(h.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&c!==Pr&&(d.push(t.assignTexture(h,"normalMap",l.normalTexture)),h.normalScale=new tt(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;h.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&c!==Pr&&(d.push(t.assignTexture(h,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(h.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&c!==Pr){const _=l.emissiveFactor;h.emissive=new Qe().setRGB(_[0],_[1],_[2],Br)}return l.emissiveTexture!==void 0&&c!==Pr&&d.push(t.assignTexture(h,"emissiveMap",l.emissiveTexture,ta)),Promise.all(d).then(function(){const _=new c(h);return l.name&&(_.name=l.name),Dr(_,l),t.associations.set(_,{materials:e}),l.extensions&&js(a,_,l),_})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,a=this.primitiveCache;function l(h){return i[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(h,t).then(function(f){return Yy(f,h,t)})}const c=[];for(let h=0,f=e.length;h<f;h++){const d=e[h],m=XL(d),_=a[m];if(_)c.push(_.promise);else{let v;d.extensions&&d.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?v=l(d):v=Yy(new Dn,d,t),a[m]={primitive:d,promise:v},c.push(v)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,a=this.extensions,l=i.meshes[e],c=l.primitives,h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f].material===void 0?GL(this.cache):this.getDependency("material",c[f].material);h.push(m)}return h.push(t.loadGeometries(c)),Promise.all(h).then(function(f){const d=f.slice(0,f.length-1),m=f[f.length-1],_=[];for(let y=0,S=m.length;y<S;y++){const T=m[y],M=c[y];let x;const P=d[y];if(M.mode===xi.TRIANGLES||M.mode===xi.TRIANGLE_STRIP||M.mode===xi.TRIANGLE_FAN||M.mode===void 0)x=l.isSkinnedMesh===!0?new Kx(T,P):new Gn(T,P),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),M.mode===xi.TRIANGLE_STRIP?x.geometry=zy(x.geometry,zx):M.mode===xi.TRIANGLE_FAN&&(x.geometry=zy(x.geometry,im));else if(M.mode===xi.LINES)x=new ru(T,P);else if(M.mode===xi.LINE_STRIP)x=new hh(T,P);else if(M.mode===xi.LINE_LOOP)x=new BA(T,P);else if(M.mode===xi.POINTS)x=new FA(T,P);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);Object.keys(x.geometry.morphAttributes).length>0&&WL(x,l),x.name=t.createUniqueName(l.name||"mesh_"+e),Dr(x,l),M.extensions&&js(a,x,M),t.assignFinalMaterial(x),_.push(x)}for(let y=0,S=_.length;y<S;y++)t.associations.set(_[y],{meshes:e,primitives:y});if(_.length===1)return l.extensions&&js(a,_[0],l),_[0];const v=new ui;l.extensions&&js(a,v,l),t.associations.set(v,{meshes:e});for(let y=0,S=_.length;y<S;y++)v.add(_[y]);return v})}loadCamera(e){let t;const i=this.json.cameras[e],a=i[i.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Cn(cn.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):i.type==="orthographic"&&(t=new vo(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Dr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let a=0,l=t.joints.length;a<l;a++)i.push(this._loadNodeShallow(t.joints[a]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(a){const l=a.pop(),c=a,h=[],f=[];for(let d=0,m=c.length;d<m;d++){const _=c[d];if(_){h.push(_);const v=new ot;l!==null&&v.fromArray(l.array,d*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new ch(h,f)})}loadAnimation(e){const t=this.json,i=this,a=t.animations[e],l=a.name?a.name:"animation_"+e,c=[],h=[],f=[],d=[],m=[];for(let _=0,v=a.channels.length;_<v;_++){const y=a.channels[_],S=a.samplers[y.sampler],T=y.target,M=T.node,x=a.parameters!==void 0?a.parameters[S.input]:S.input,P=a.parameters!==void 0?a.parameters[S.output]:S.output;T.node!==void 0&&(c.push(this.getDependency("node",M)),h.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",P)),d.push(S),m.push(T))}return Promise.all([Promise.all(c),Promise.all(h),Promise.all(f),Promise.all(d),Promise.all(m)]).then(function(_){const v=_[0],y=_[1],S=_[2],T=_[3],M=_[4],x=[];for(let P=0,D=v.length;P<D;P++){const w=v[P],O=y[P],F=S[P],U=T[P],G=M[P];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const L=i._createAnimationTracks(w,O,F,U,G);if(L)for(let A=0;A<L.length;A++)x.push(L[A])}return new tu(l,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,a=t.nodes[e];return a.mesh===void 0?null:i.getDependency("mesh",a.mesh).then(function(l){const c=i._getNodeRef(i.meshCache,a.mesh,l);return a.weights!==void 0&&c.traverse(function(h){if(h.isMesh)for(let f=0,d=a.weights.length;f<d;f++)h.morphTargetInfluences[f]=a.weights[f]}),c})}loadNode(e){const t=this.json,i=this,a=t.nodes[e],l=i._loadNodeShallow(e),c=[],h=a.children||[];for(let d=0,m=h.length;d<m;d++)c.push(i.getDependency("node",h[d]));const f=a.skin===void 0?Promise.resolve(null):i.getDependency("skin",a.skin);return Promise.all([l,Promise.all(c),f]).then(function(d){const m=d[0],_=d[1],v=d[2];v!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(v,qL)});for(let y=0,S=_.length;y<S;y++)m.add(_[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,a=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],c=l.name?a.createUniqueName(l.name):"",h=[],f=a._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&h.push(f),l.camera!==void 0&&h.push(a.getDependency("camera",l.camera).then(function(d){return a._getNodeRef(a.cameraCache,l.camera,d)})),a._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){h.push(d)}),this.nodeCache[e]=Promise.all(h).then(function(d){let m;if(l.isBone===!0?m=new Qx:d.length>1?m=new ui:d.length===1?m=d[0]:m=new Kt,m!==d[0])for(let _=0,v=d.length;_<v;_++)m.add(d[_]);if(l.name&&(m.userData.name=l.name,m.name=c),Dr(m,l),l.extensions&&js(i,m,l),l.matrix!==void 0){const _=new ot;_.fromArray(l.matrix),m.applyMatrix4(_)}else l.translation!==void 0&&m.position.fromArray(l.translation),l.rotation!==void 0&&m.quaternion.fromArray(l.rotation),l.scale!==void 0&&m.scale.fromArray(l.scale);return a.associations.has(m)||a.associations.set(m,{}),a.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],a=this,l=new ui;i.name&&(l.name=a.createUniqueName(i.name)),Dr(l,i),i.extensions&&js(t,l,i);const c=i.nodes||[],h=[];for(let f=0,d=c.length;f<d;f++)h.push(a.getDependency("node",c[f]));return Promise.all(h).then(function(f){for(let m=0,_=f.length;m<_;m++)l.add(f[m]);const d=m=>{const _=new Map;for(const[v,y]of a.associations)(v instanceof Hi||v instanceof Ln)&&_.set(v,y);return m.traverse(v=>{const y=a.associations.get(v);y!=null&&_.set(v,y)}),_};return a.associations=d(l),l})}_createAnimationTracks(e,t,i,a,l){const c=[],h=e.name?e.name:e.uuid,f=[];gs[l.path]===gs.weights?e.traverse(function(v){v.morphTargetInfluences&&f.push(v.name?v.name:v.uuid)}):f.push(h);let d;switch(gs[l.path]){case gs.weights:d=Ro;break;case gs.rotation:d=Yn;break;case gs.position:case gs.scale:d=wo;break;default:switch(i.itemSize){case 1:d=Ro;break;case 2:case 3:default:d=wo;break}break}const m=a.interpolation!==void 0?VL[a.interpolation]:$l,_=this._getArrayFromAccessor(i);for(let v=0,y=f.length;v<y;v++){const S=new d(f[v]+"."+gs[l.path],t.array,_,m);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),c.push(S)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=cm(t.constructor),a=new Float32Array(t.length);for(let l=0,c=t.length;l<c;l++)a[l]=t[l]*i;t=a}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const a=this instanceof Yn?HL:dM;return new a(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZL(s,e,t){const i=e.attributes,a=new Hr;if(i.POSITION!==void 0){const h=t.json.accessors[i.POSITION],f=h.min,d=h.max;if(f!==void 0&&d!==void 0){if(a.set(new B(f[0],f[1],f[2]),new B(d[0],d[1],d[2])),h.normalized){const m=cm(yo[h.componentType]);a.min.multiplyScalar(m),a.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const h=new B,f=new B;for(let d=0,m=l.length;d<m;d++){const _=l[d];if(_.POSITION!==void 0){const v=t.json.accessors[_.POSITION],y=v.min,S=v.max;if(y!==void 0&&S!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(S[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(S[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(S[2]))),v.normalized){const T=cm(yo[v.componentType]);f.multiplyScalar(T)}h.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(h)}s.boundingBox=a;const c=new ir;a.getCenter(c.center),c.radius=a.min.distanceTo(a.max)/2,s.boundingSphere=c}function Yy(s,e,t){const i=e.attributes,a=[];function l(c,h){return t.getDependency("accessor",c).then(function(f){s.setAttribute(h,f)})}for(const c in i){const h=um[c]||c.toLowerCase();h in s.attributes||a.push(l(i[c],h))}if(e.indices!==void 0&&!s.index){const c=t.getDependency("accessor",e.indices).then(function(h){s.setIndex(h)});a.push(c)}return Dr(s,e),ZL(s,e,t),Promise.all(a).then(function(){return e.targets!==void 0?kL(s,e.targets,t):s})}/*!
 * @pixiv/three-vrm v3.4.4
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var Vc=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),Nt=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),qy=class extends Kt{constructor(s){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${s}`,this.expressionName=s,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(s){this._binds.push(s)}deleteBind(s){const e=this._binds.indexOf(s);e>=0&&this._binds.splice(e,1)}applyWeight(s){var e;let t=this.outputWeight;t*=(e=s?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(s=>s.clearAppliedWeight())}};function pM(s,e,t){var i,a;const l=s.parser.json,c=(i=l.nodes)==null?void 0:i[e];if(c==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const h=c.mesh;if(h==null)return null;const f=(a=l.meshes)==null?void 0:a[h];if(f==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${h}] of glTF but the mesh doesn't exist`),null;const d=f.primitives.length,m=[];return t.traverse(_=>{m.length<d&&_.isMesh&&m.push(_)}),m}function jy(s,e){return Nt(this,null,function*(){const t=yield s.parser.getDependency("node",e);return pM(s,e,t)})}function Zy(s){return Nt(this,null,function*(){const e=yield s.parser.getDependencies("node"),t=new Map;return e.forEach((i,a)=>{const l=pM(s,a,i);l!=null&&t.set(a,l)}),t})}var hm={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function mM(s){return Math.max(Math.min(s,1),0)}var Ky=class gM{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(hm));return Object.entries(this._expressionMap).forEach(([i,a])=>{t.has(i)&&(e[i]=a)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(hm));return Object.entries(this._expressionMap).forEach(([i,a])=>{t.has(i)||(e[i]=a)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new gM().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i?.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=mM(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const a=t.expressionName;this.blinkExpressionNames.indexOf(a)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(a)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(a)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(a=>{e-=a.overrideBlinkAmount,t-=a.overrideLookAtAmount,i-=a.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},Bl={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},KL={_Color:Bl.Color,_EmissionColor:Bl.EmissionColor,_ShadeColor:Bl.ShadeColor,_RimColor:Bl.RimColor,_OutlineColor:Bl.OutlineColor},QL=new Qe,_M=class vM{constructor({material:e,type:t,targetValue:i,targetAlpha:a}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=a??1;const l=this._initColorBindState(),c=this._initAlphaBindState();this._state={color:l,alpha:c}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:a,deltaValue:l}=t,c=this.material[a];c?.add(QL.copy(l).multiplyScalar(e))}if(i!=null){const{propertyName:a,deltaValue:l}=i;this.material[a]!=null&&(this.material[a]+=l*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:a}=e,l=this.material[i];l?.copy(a)}if(t!=null){const{propertyName:i,initialValue:a}=t;this.material[i]!=null&&(this.material[i]=a)}}_initColorBindState(){var e,t,i;const{material:a,type:l,targetValue:c}=this,h=this._getPropertyNameMap(),f=(t=(e=h?.[l])==null?void 0:e[0])!=null?t:null;if(f==null)return console.warn(`Tried to add a material color bind to the material ${(i=a.name)!=null?i:"(no name)"}, the type ${l} but the material or the type is not supported.`),null;const m=a[f].clone(),_=new Qe(c.r-m.r,c.g-m.g,c.b-m.b);return{propertyName:f,initialValue:m,deltaValue:_}}_initAlphaBindState(){var e,t,i;const{material:a,type:l,targetAlpha:c}=this,h=this._getPropertyNameMap(),f=(t=(e=h?.[l])==null?void 0:e[1])!=null?t:null;if(f==null&&c!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=a.name)!=null?i:"(no name)"}, the type ${l} but the material or the type does not support alpha.`),null;if(f==null)return null;const d=a[f],m=c-d;return{propertyName:f,initialValue:d,deltaValue:m}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(vM._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};_M._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Qy=_M,Jy=class{constructor({primitives:s,index:e,weight:t}){this.primitives=s,this.index=e,this.weight=t}applyWeight(s){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*s)})}clearAppliedWeight(){this.primitives.forEach(s=>{var e;((e=s.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(s.morphTargetInfluences[this.index]=0)})}},$y=new tt,yM=class xM{constructor({material:e,scale:t,offset:i}){var a,l;this.material=e,this.scale=t,this.offset=i;const c=(a=Object.entries(xM._propertyNamesMap).find(([h])=>e[h]===!0))==null?void 0:a[1];c==null?(console.warn(`Tried to add a texture transform bind to the material ${(l=e.name)!=null?l:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],c.forEach(h=>{var f;const d=(f=e[h])==null?void 0:f.clone();if(!d)return null;e[h]=d;const m=d.offset.clone(),_=d.repeat.clone(),v=i.clone().sub(m),y=t.clone().sub(_);this._properties.push({name:h,initialOffset:m,deltaOffset:v,initialScale:_,deltaScale:y})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add($y.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add($y.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};yM._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var ex=yM,JL=new Set(["1.0","1.0-beta"]),MM=class SM{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Nt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Nt(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return Nt(this,null,function*(){var t,i;const a=this.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const c=(i=a.extensions)==null?void 0:i.VRMC_vrm;if(!c)return null;const h=c.specVersion;if(!JL.has(h))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const f=c.expressions;if(!f)return null;const d=new Set(Object.values(hm)),m=new Map;f.preset!=null&&Object.entries(f.preset).forEach(([v,y])=>{if(y!=null){if(!d.has(v)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${v}" detected. Ignoring the expression`);return}m.set(v,y)}}),f.custom!=null&&Object.entries(f.custom).forEach(([v,y])=>{if(d.has(v)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${v}". Ignoring the expression`);return}m.set(v,y)});const _=new Ky;return yield Promise.all(Array.from(m.entries()).map(v=>Nt(this,[v],function*([y,S]){var T,M,x,P,D,w,O;const F=new qy(y);if(e.scene.add(F),F.isBinary=(T=S.isBinary)!=null?T:!1,F.overrideBlink=(M=S.overrideBlink)!=null?M:"none",F.overrideLookAt=(x=S.overrideLookAt)!=null?x:"none",F.overrideMouth=(P=S.overrideMouth)!=null?P:"none",(D=S.morphTargetBinds)==null||D.forEach(U=>Nt(this,null,function*(){var G;if(U.node===void 0||U.index===void 0)return;const L=yield jy(e,U.node),A=U.index;if(!L.every(k=>Array.isArray(k.morphTargetInfluences)&&A<k.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${S.name} attempts to index morph #${A} but not found.`);return}F.addBind(new Jy({primitives:L,index:A,weight:(G=U.weight)!=null?G:1}))})),S.materialColorBinds||S.textureTransformBinds){const U=[];e.scene.traverse(G=>{const L=G.material;L&&(Array.isArray(L)?U.push(...L):U.push(L))}),(w=S.materialColorBinds)==null||w.forEach(G=>Nt(this,null,function*(){U.filter(A=>{var k;const se=(k=this.parser.associations.get(A))==null?void 0:k.materials;return G.material===se}).forEach(A=>{F.addBind(new Qy({material:A,type:G.type,targetValue:new Qe().fromArray(G.targetValue),targetAlpha:G.targetValue[3]}))})})),(O=S.textureTransformBinds)==null||O.forEach(G=>Nt(this,null,function*(){U.filter(A=>{var k;const se=(k=this.parser.associations.get(A))==null?void 0:k.materials;return G.material===se}).forEach(A=>{var k,se;F.addBind(new ex({material:A,offset:new tt().fromArray((k=G.offset)!=null?k:[0,0]),scale:new tt().fromArray((se=G.scale)!=null?se:[1,1])}))})}))}_.registerExpression(F)}))),_})}_v0Import(e){return Nt(this,null,function*(){var t;const i=this.parser.json,a=(t=i.extensions)==null?void 0:t.VRM;if(!a)return null;const l=a.blendShapeMaster;if(!l)return null;const c=new Ky,h=l.blendShapeGroups;if(!h)return c;const f=new Set;return yield Promise.all(h.map(d=>Nt(this,null,function*(){var m;const _=d.presetName,v=_!=null&&SM.v0v1PresetNameMap[_]||null,y=v??d.name;if(y==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(f.has(y)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${_} has duplicated entries. Ignoring the expression`);return}f.add(y);const S=new qy(y);e.scene.add(S),S.isBinary=(m=d.isBinary)!=null?m:!1,d.binds&&d.binds.forEach(M=>Nt(this,null,function*(){var x;if(M.mesh===void 0||M.index===void 0)return;const P=[];(x=i.nodes)==null||x.forEach((w,O)=>{w.mesh===M.mesh&&P.push(O)});const D=M.index;yield Promise.all(P.map(w=>Nt(this,null,function*(){var O;const F=yield jy(e,w);if(!F.every(U=>Array.isArray(U.morphTargetInfluences)&&D<U.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${d.name} attempts to index ${D}th morph but not found.`);return}S.addBind(new Jy({primitives:F,index:D,weight:.01*((O=M.weight)!=null?O:100)}))})))}));const T=d.materialValues;T&&T.length!==0&&T.forEach(M=>{if(M.materialName===void 0||M.propertyName===void 0||M.targetValue===void 0)return;const x=[];e.scene.traverse(D=>{if(D.material){const w=D.material;Array.isArray(w)?x.push(...w.filter(O=>(O.name===M.materialName||O.name===M.materialName+" (Outline)")&&x.indexOf(O)===-1)):w.name===M.materialName&&x.indexOf(w)===-1&&x.push(w)}});const P=M.propertyName;x.forEach(D=>{if(P==="_MainTex_ST"){const O=new tt(M.targetValue[0],M.targetValue[1]),F=new tt(M.targetValue[2],M.targetValue[3]);F.y=1-F.y-O.y,S.addBind(new ex({material:D,scale:O,offset:F}));return}const w=KL[P];if(w){S.addBind(new Qy({material:D,type:w,targetValue:new Qe().fromArray(M.targetValue),targetAlpha:M.targetValue[3]}));return}console.warn(P+" is not supported")})}),c.registerExpression(S)}))),c})}};MM.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var $L=MM,Im=class uo{constructor(e,t){this._firstPersonOnlyLayer=uo.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=uo.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new uo(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=uo.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=uo.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(a=>{i.type==="firstPersonOnly"?(a.layers.set(this._firstPersonOnlyLayer),a.traverse(l=>l.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(a.layers.set(this._thirdPersonOnlyLayer),a.traverse(l=>l.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(a)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,a){let l=0;if(t!=null&&t.length>0)for(let c=0;c<e.length;c+=3){const h=e[c],f=e[c+1],d=e[c+2],m=t[h],_=i[h];if(m[0]>0&&a.includes(_[0])||m[1]>0&&a.includes(_[1])||m[2]>0&&a.includes(_[2])||m[3]>0&&a.includes(_[3]))continue;const v=t[f],y=i[f];if(v[0]>0&&a.includes(y[0])||v[1]>0&&a.includes(y[1])||v[2]>0&&a.includes(y[2])||v[3]>0&&a.includes(y[3]))continue;const S=t[d],T=i[d];S[0]>0&&a.includes(T[0])||S[1]>0&&a.includes(T[1])||S[2]>0&&a.includes(T[2])||S[3]>0&&a.includes(T[3])||(e[l++]=h,e[l++]=f,e[l++]=d)}return l}_createErasedMesh(e,t){const i=new Kx(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const a=i.geometry,l=a.getAttribute("skinIndex"),c=l instanceof cy?[]:l.array,h=[];for(let T=0;T<c.length;T+=4)h.push([c[T],c[T+1],c[T+2],c[T+3]]);const f=a.getAttribute("skinWeight"),d=f instanceof cy?[]:f.array,m=[];for(let T=0;T<d.length;T+=4)m.push([d[T],d[T+1],d[T+2],d[T+3]]);const _=a.getIndex();if(!_)throw new Error("The geometry doesn't have an index buffer");const v=Array.from(_.array),y=this._excludeTriangles(v,m,h,t),S=[];for(let T=0;T<y;T++)S[T]=v[T];return a.setIndex(S),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new ch(e.skeleton.bones,e.skeleton.boneInverses),new ot),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((l,c)=>{this._isEraseTarget(l)&&i.push(c)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const a=this._createErasedMesh(t,i);e.add(a)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new ui;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const a=i;this._createHeadlessModelForSkinnedMesh(t,a)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};Im.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;Im.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var tx=Im,eD=new Set(["1.0","1.0-beta"]),tD=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(s){this.parser=s}afterRoot(s){return Nt(this,null,function*(){const e=s.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");s.userData.vrmFirstPerson=yield this._import(s,e)}})}_import(s,e){return Nt(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(s,e);if(t)return t;const i=yield this._v0Import(s,e);return i||null})}_v1Import(s,e){return Nt(this,null,function*(){var t,i;const a=this.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const c=(i=a.extensions)==null?void 0:i.VRMC_vrm;if(!c)return null;const h=c.specVersion;if(!eD.has(h))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const f=c.firstPerson,d=[],m=yield Zy(s);return Array.from(m.entries()).forEach(([_,v])=>{var y,S;const T=(y=f?.meshAnnotations)==null?void 0:y.find(M=>M.node===_);d.push({meshes:v,type:(S=T?.type)!=null?S:"auto"})}),new tx(e,d)})}_v0Import(s,e){return Nt(this,null,function*(){var t;const i=this.parser.json,a=(t=i.extensions)==null?void 0:t.VRM;if(!a)return null;const l=a.firstPerson;if(!l)return null;const c=[],h=yield Zy(s);return Array.from(h.entries()).forEach(([f,d])=>{const m=i.nodes[f],_=l.meshAnnotations?l.meshAnnotations.find(v=>v.mesh===m.mesh):void 0;c.push({meshes:d,type:this._convertV0FlagToV1Type(_?.firstPersonFlag)})}),new tx(e,c)})}_convertV0FlagToV1Type(s){return s==="FirstPersonOnly"?"firstPersonOnly":s==="ThirdPersonOnly"?"thirdPersonOnly":s==="Both"?"both":"auto"}},nx=new B,ix=new B,nD=new ut,rx=class extends ui{constructor(s){super(),this.vrmHumanoid=s,this._boneAxesMap=new Map,Object.values(s.humanBones).forEach(e=>{const t=new Mb(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(s=>{s.geometry.dispose(),s.material.dispose()})}updateMatrixWorld(s){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(nx,nD,ix);const i=nx.set(.1,.1,.1).divide(ix);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(s)}},op=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],iD={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function EM(s){return s.invert?s.invert():s.inverse(),s}var Zs=new B,Ks=new ut,fm=class{constructor(s){this.humanBones=s,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const s={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(Zs.copy(i.position),Ks.copy(i.quaternion),s[t]={position:Zs.toArray(),rotation:Ks.toArray()})}),s}getPose(){const s={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;Zs.set(0,0,0),Ks.identity();const a=this.restPose[t];a?.position&&Zs.fromArray(a.position).negate(),a?.rotation&&EM(Ks.fromArray(a.rotation)),Zs.add(i.position),Ks.premultiply(i.quaternion),s[t]={position:Zs.toArray(),rotation:Ks.toArray()}}),s}setPose(s){Object.entries(s).forEach(([e,t])=>{const i=e,a=this.getBoneNode(i);if(!a)return;const l=this.restPose[i];l&&(t?.position&&(a.position.fromArray(t.position),l.position&&a.position.add(Zs.fromArray(l.position))),t?.rotation&&(a.quaternion.fromArray(t.rotation),l.rotation&&a.quaternion.multiply(Ks.fromArray(l.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([s,e])=>{const t=this.getBoneNode(s);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(s){var e;return(e=this.humanBones[s])!=null?e:void 0}getBoneNode(s){var e,t;return(t=(e=this.humanBones[s])==null?void 0:e.node)!=null?t:null}},lp=new B,rD=new ut,sD=new B,sx=class TM extends fm{static _setupTransforms(e){const t=new Kt;t.name="VRMHumanoidRig";const i={},a={},l={};op.forEach(h=>{var f;const d=e.getBoneNode(h);if(d){const m=new B,_=new ut;d.updateWorldMatrix(!0,!1),d.matrixWorld.decompose(m,_,lp),i[h]=m,a[h]=d.quaternion.clone();const v=new ut;(f=d.parent)==null||f.matrixWorld.decompose(lp,v,lp),l[h]=v}});const c={};return op.forEach(h=>{var f;const d=e.getBoneNode(h);if(d){const m=i[h];let _=h,v;for(;v==null&&(_=iD[_],_!=null);)v=i[_];const y=new Kt;y.name="Normalized_"+d.name,(_?(f=c[_])==null?void 0:f.node:t).add(y),y.position.copy(m),v&&y.position.sub(v),c[h]={node:y}}}),{rigBones:c,root:t,parentWorldRotations:l,boneRotations:a}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:a,boneRotations:l}=TM._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=a,this._boneRotations=l}update(){op.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),a=this._parentWorldRotations[e],l=rD.copy(a).invert(),c=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(a).premultiply(l).multiply(c),e==="hips"){const h=i.getWorldPosition(sD);t.parent.updateWorldMatrix(!0,!1);const f=t.parent.matrixWorld,d=h.applyMatrix4(f.invert());t.position.copy(d)}}})}},ax=class AM{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t?.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new fm(e),this._normalizedHumanBones=new sx(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new fm(e.humanBones),this._normalizedHumanBones=new sx(this._rawHumanBones),this}clone(){return new AM(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},aD={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},oD=new Set(["1.0","1.0-beta"]),ox={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},lD=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(s){return Nt(this,null,function*(){s.userData.vrmHumanoid=yield this._import(s)})}_import(s){return Nt(this,null,function*(){const e=yield this._v1Import(s);if(e)return e;const t=yield this._v0Import(s);return t||null})}_v1Import(s){return Nt(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const l=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!oD.has(c))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const h=l.humanoid;if(!h)return null;const f=h.humanBones.leftThumbIntermediate!=null||h.humanBones.rightThumbIntermediate!=null,d={};h.humanBones!=null&&(yield Promise.all(Object.entries(h.humanBones).map(_=>Nt(this,[_],function*([v,y]){let S=v;const T=y.node;if(f){const x=ox[S];x!=null&&(S=x)}const M=yield this.parser.getDependency("node",T);if(M==null){console.warn(`A glTF node bound to the humanoid bone ${S} (index = ${T}) does not exist`);return}d[S]={node:M}}))));const m=new ax(this._ensureRequiredBonesExist(d),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(m.normalizedHumanBonesRoot),this.helperRoot){const _=new rx(m);this.helperRoot.add(_),_.renderOrder=this.helperRoot.renderOrder}return m})}_v0Import(s){return Nt(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const a=i.humanoid;if(!a)return null;const l={};a.humanBones!=null&&(yield Promise.all(a.humanBones.map(h=>Nt(this,null,function*(){const f=h.bone,d=h.node;if(f==null||d==null)return;const m=yield this.parser.getDependency("node",d);if(m==null){console.warn(`A glTF node bound to the humanoid bone ${f} (index = ${d}) does not exist`);return}const _=ox[f],v=_??f;if(l[v]!=null){console.warn(`Multiple bone entries for ${v} detected (index = ${d}), ignoring duplicated entries.`);return}l[v]={node:m}}))));const c=new ax(this._ensureRequiredBonesExist(l),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(c.normalizedHumanBonesRoot),this.helperRoot){const h=new rx(c);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return c})}_ensureRequiredBonesExist(s){const e=Object.values(aD).filter(t=>s[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return s}},lx=class extends Dn{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new qt(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,s=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let s=0;s<64;s++){const e=s/63*this._currentTheta;this._attrPos.setXYZ(s+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<63;s++)this._attrIndex.setXYZ(s*3,0,s+1,s+2);this._attrIndex.needsUpdate=!0}},uD=class extends Dn{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new B,this._currentTail=new B,this._attrPos=new qt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Gc=new ut,ux=new ut,Fl=new B,cx=new B,hx=Math.sqrt(2)/2,cD=new ut(0,0,-hx,hx),hD=new B(0,1,0),fD=class extends ui{constructor(s){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=s;{const e=new lx;e.radius=.5;const t=new Pr({color:65280,transparent:!0,opacity:.5,side:Si,depthTest:!1,depthWrite:!1});this._meshPitch=new Gn(e,t),this.add(this._meshPitch)}{const e=new lx;e.radius=.5;const t=new Pr({color:16711680,transparent:!0,opacity:.5,side:Si,depthTest:!1,depthWrite:!1});this._meshYaw=new Gn(e,t),this.add(this._meshYaw)}{const e=new uD;e.radius=.1;const t=new oa({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new ru(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(s){const e=cn.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=cn.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Fl),this.vrmLookAt.getLookAtWorldQuaternion(Gc),Gc.multiply(this.vrmLookAt.getFaceFrontQuaternion(ux)),this._meshYaw.position.copy(Fl),this._meshYaw.quaternion.copy(Gc),this._meshPitch.position.copy(Fl),this._meshPitch.quaternion.copy(Gc),this._meshPitch.quaternion.multiply(ux.setFromAxisAngle(hD,e)),this._meshPitch.quaternion.multiply(cD);const{target:i,autoUpdate:a}=this.vrmLookAt;i!=null&&a&&(i.getWorldPosition(cx).sub(Fl),this._lineTarget.geometry.tail.copy(cx),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Fl)),super.updateMatrixWorld(s)}},dD=new B,pD=new B;function dm(s,e){return s.matrixWorld.decompose(dD,e,pD),e}function Jc(s){return[Math.atan2(-s.z,s.x),Math.atan2(s.y,Math.sqrt(s.x*s.x+s.z*s.z))]}function fx(s){const e=Math.round(s/2/Math.PI);return s-2*Math.PI*e}var dx=new B(0,0,1),mD=new B,gD=new B,_D=new B,vD=new ut,up=new ut,px=new ut,yD=new ut,cp=new jn,bM=class RM{constructor(e,t){this.offsetFromHeadBone=new B,this.autoUpdate=!0,this.faceFront=new B(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new ut)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new jn)}getEuler(e){return e.set(cn.DEG2RAD*this._pitch,cn.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new RM(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return dm(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(dx)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=Jc(this.faceFront);return cp.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(cp).premultiply(yD.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(up),this.getFaceFrontQuaternion(px),e.copy(dx).applyQuaternion(up).applyQuaternion(px).applyEuler(this.getEuler(cp))}lookAt(e){const t=vD.copy(this._restHeadWorldQuaternion).multiply(EM(this.getLookAtWorldQuaternion(up))),i=this.getLookAtWorldPosition(gD),a=_D.copy(e).sub(i).applyQuaternion(t).normalize(),[l,c]=Jc(this.faceFront),[h,f]=Jc(a),d=fx(h-l),m=fx(c-f);this._yaw=cn.RAD2DEG*d,this._pitch=cn.RAD2DEG*m,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(mD)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};bM.EULER_ORDER="YXZ";var xD=bM,MD=new B(0,0,1),Qi=new ut,ao=new ut,vi=new jn(0,0,0,"YXZ"),$c=class{constructor(s,e,t,i,a){this.humanoid=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=a,this.faceFront=new B(0,0,1),this._restQuatLeftEye=new ut,this._restQuatRightEye=new ut,this._restLeftEyeParentWorldQuat=new ut,this._restRightEyeParentWorldQuat=new ut;const l=this.humanoid.getRawBoneNode("leftEye"),c=this.humanoid.getRawBoneNode("rightEye");l&&(this._restQuatLeftEye.copy(l.quaternion),dm(l.parent,this._restLeftEyeParentWorldQuat)),c&&(this._restQuatRightEye.copy(c.quaternion),dm(c.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(s,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),a=this.humanoid.getNormalizedBoneNode("leftEye"),l=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?vi.x=-cn.DEG2RAD*this.rangeMapVerticalDown.map(-e):vi.x=cn.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?vi.y=-cn.DEG2RAD*this.rangeMapHorizontalInner.map(-s):vi.y=cn.DEG2RAD*this.rangeMapHorizontalOuter.map(s),Qi.setFromEuler(vi),this._getWorldFaceFrontQuat(ao),a.quaternion.copy(ao).multiply(Qi).multiply(ao.invert()),Qi.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(a.quaternion).multiply(Qi).premultiply(Qi.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?vi.x=-cn.DEG2RAD*this.rangeMapVerticalDown.map(-e):vi.x=cn.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?vi.y=-cn.DEG2RAD*this.rangeMapHorizontalOuter.map(-s):vi.y=cn.DEG2RAD*this.rangeMapHorizontalInner.map(s),Qi.setFromEuler(vi),this._getWorldFaceFrontQuat(ao),l.quaternion.copy(ao).multiply(Qi).multiply(ao.invert()),Qi.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(l.quaternion).multiply(Qi).premultiply(Qi.invert()).multiply(this._restQuatRightEye))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=cn.RAD2DEG*s.y,t=cn.RAD2DEG*s.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(s){if(this.faceFront.distanceToSquared(MD)<.01)return s.identity();const[e,t]=Jc(this.faceFront);return vi.set(0,.5*Math.PI+e,t,"YZX"),s.setFromEuler(vi)}};$c.type="bone";var pm=class{constructor(s,e,t,i,a){this.expressions=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=a}applyYawPitch(s,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),s<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-s))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(s)))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=cn.RAD2DEG*s.y,t=cn.RAD2DEG*s.x;this.applyYawPitch(e,t)}};pm.type="expression";var mx=class{constructor(s,e){this.inputMaxValue=s,this.outputScale=e}map(s){return this.outputScale*mM(s/this.inputMaxValue)}},SD=new Set(["1.0","1.0-beta"]),kc=.01,ED=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e?.helperRoot}afterRoot(s){return Nt(this,null,function*(){const e=s.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=s.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");s.userData.vrmLookAt=yield this._import(s,e,t)}})}_import(s,e,t){return Nt(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(s,e,t);if(i)return i;const a=yield this._v0Import(s,e,t);return a||null})}_v1Import(s,e,t){return Nt(this,null,function*(){var i,a,l;const c=this.parser.json;if(!(((i=c.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const f=(a=c.extensions)==null?void 0:a.VRMC_vrm;if(!f)return null;const d=f.specVersion;if(!SD.has(d))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${d}"`),null;const m=f.lookAt;if(!m)return null;const _=m.type==="expression"?1:10,v=this._v1ImportRangeMap(m.rangeMapHorizontalInner,_),y=this._v1ImportRangeMap(m.rangeMapHorizontalOuter,_),S=this._v1ImportRangeMap(m.rangeMapVerticalDown,_),T=this._v1ImportRangeMap(m.rangeMapVerticalUp,_);let M;m.type==="expression"?M=new pm(t,v,y,S,T):M=new $c(e,v,y,S,T);const x=this._importLookAt(e,M);return x.offsetFromHeadBone.fromArray((l=m.offsetFromHeadBone)!=null?l:[0,.06,0]),x})}_v1ImportRangeMap(s,e){var t,i;let a=(t=s?.inputMaxValue)!=null?t:90;const l=(i=s?.outputScale)!=null?i:e;return a<kc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),a=kc),new mx(a,l)}_v0Import(s,e,t){return Nt(this,null,function*(){var i,a,l,c;const f=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!f)return null;const d=f.firstPerson;if(!d)return null;const m=d.lookAtTypeName==="BlendShape"?1:10,_=this._v0ImportDegreeMap(d.lookAtHorizontalInner,m),v=this._v0ImportDegreeMap(d.lookAtHorizontalOuter,m),y=this._v0ImportDegreeMap(d.lookAtVerticalDown,m),S=this._v0ImportDegreeMap(d.lookAtVerticalUp,m);let T;d.lookAtTypeName==="BlendShape"?T=new pm(t,_,v,y,S):T=new $c(e,_,v,y,S);const M=this._importLookAt(e,T);return d.firstPersonBoneOffset?M.offsetFromHeadBone.set((a=d.firstPersonBoneOffset.x)!=null?a:0,(l=d.firstPersonBoneOffset.y)!=null?l:.06,-((c=d.firstPersonBoneOffset.z)!=null?c:0)):M.offsetFromHeadBone.set(0,.06,0),M.faceFront.set(0,0,-1),T instanceof $c&&T.faceFront.set(0,0,-1),M})}_v0ImportDegreeMap(s,e){var t,i;const a=s?.curve;JSON.stringify(a)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let l=(t=s?.xRange)!=null?t:90;const c=(i=s?.yRange)!=null?i:e;return l<kc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),l=kc),new mx(l,c)}_importLookAt(s,e){const t=new xD(s,e);if(this.helperRoot){const i=new fD(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function TD(s,e){return typeof s!="string"||s===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(s)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(s)||/^data:.*,.*$/i.test(s)||/^blob:.*$/i.test(s)?s:e+s)}var AD=new Set(["1.0","1.0-beta"]),bD=class{get name(){return"VRMMetaLoaderPlugin"}constructor(s,e){var t,i,a;this.parser=s,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e?.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(a=e?.acceptV0Meta)!=null?a:!0}afterRoot(s){return Nt(this,null,function*(){s.userData.vrmMeta=yield this._import(s)})}_import(s){return Nt(this,null,function*(){const e=yield this._v1Import(s);if(e!=null)return e;const t=yield this._v0Import(s);return t??null})}_v1Import(s){return Nt(this,null,function*(){var e,t,i;const a=this.parser.json;if(!(((e=a.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const c=(t=a.extensions)==null?void 0:t.VRMC_vrm;if(c==null)return null;const h=c.specVersion;if(!AD.has(h))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${h}"`),null;const f=c.meta;if(!f)return null;const d=f.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(d))throw new Error(`VRMMetaLoaderPlugin: The license url "${d}" is not accepted`);let _;return this.needThumbnailImage&&f.thumbnailImage!=null&&(_=(i=yield this._extractGLTFImage(f.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:f.name,version:f.version,authors:f.authors,copyrightInformation:f.copyrightInformation,contactInformation:f.contactInformation,references:f.references,thirdPartyLicenses:f.thirdPartyLicenses,thumbnailImage:_,licenseUrl:f.licenseUrl,avatarPermission:f.avatarPermission,allowExcessivelyViolentUsage:f.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:f.allowExcessivelySexualUsage,commercialUsage:f.commercialUsage,allowPoliticalOrReligiousUsage:f.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:f.allowAntisocialOrHateUsage,creditNotation:f.creditNotation,allowRedistribution:f.allowRedistribution,modification:f.modification,otherLicenseUrl:f.otherLicenseUrl}})}_v0Import(s){return Nt(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const a=i.meta;if(!a)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let l;return this.needThumbnailImage&&a.texture!=null&&a.texture!==-1&&(l=yield this.parser.getDependency("texture",a.texture)),{metaVersion:"0",allowedUserName:a.allowedUserName,author:a.author,commercialUssageName:a.commercialUssageName,contactInformation:a.contactInformation,licenseName:a.licenseName,otherLicenseUrl:a.otherLicenseUrl,otherPermissionUrl:a.otherPermissionUrl,reference:a.reference,sexualUssageName:a.sexualUssageName,texture:l??void 0,title:a.title,version:a.version,violentUssageName:a.violentUssageName}})}_extractGLTFImage(s){return Nt(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[s];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image doesn't exist`),null;let a=i.uri;if(i.bufferView!=null){const c=yield this.parser.getDependency("bufferView",i.bufferView),h=new Blob([c],{type:i.mimeType});a=URL.createObjectURL(h)}return a==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new sM().loadAsync(TD(a,this.parser.options.path)).catch(c=>(console.error(c),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},RD=class{constructor(s){this.scene=s.scene,this.meta=s.meta,this.humanoid=s.humanoid,this.expressionManager=s.expressionManager,this.firstPerson=s.firstPerson,this.lookAt=s.lookAt}update(s){this.humanoid.update(),this.lookAt&&this.lookAt.update(s),this.expressionManager&&this.expressionManager.update()}},wD=class extends RD{constructor(s){super(s),this.materials=s.materials,this.springBoneManager=s.springBoneManager,this.nodeConstraintManager=s.nodeConstraintManager}update(s){super.update(s),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(s),this.materials&&this.materials.forEach(e=>{e.update&&e.update(s)})}},CD=Object.defineProperty,gx=Object.getOwnPropertySymbols,LD=Object.prototype.hasOwnProperty,DD=Object.prototype.propertyIsEnumerable,_x=(s,e,t)=>e in s?CD(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,vx=(s,e)=>{for(var t in e||(e={}))LD.call(e,t)&&_x(s,t,e[t]);if(gx)for(var t of gx(e))DD.call(e,t)&&_x(s,t,e[t]);return s},na=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),UD={"":3e3,srgb:3001};function ND(s,e){parseInt(As,10)>=152?s.colorSpace=e:s.encoding=UD[e]}var PD=class{get pending(){return Promise.all(this._pendings)}constructor(s,e){this._parser=s,this._materialParams=e,this._pendings=[]}assignPrimitive(s,e){e!=null&&(this._materialParams[s]=e)}assignColor(s,e,t){if(e!=null){const i=new Qe().fromArray(e);t&&i.convertSRGBToLinear(),this._materialParams[s]=i}}assignTexture(s,e,t){return na(this,null,function*(){const i=na(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,s,e),t&&ND(this._materialParams[s],"srgb"))});return this._pendings.push(i),i})}assignTextureByIndex(s,e,t){return na(this,null,function*(){return this.assignTexture(s,e!=null?{index:e}:void 0,t)})}},OD=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,ID=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,BD={None:"none"},yx={None:"none",ScreenCoordinates:"screenCoordinates"},FD={3e3:"",3001:"srgb"};function hp(s){return parseInt(As,10)>=152?s.colorSpace:FD[s.encoding]}var zD=class extends zr{constructor(s={}){var e;super({vertexShader:OD,fragmentShader:ID}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=bm,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=BD.None,this._outlineWidthMode=yx.None,this._isOutline=!1,s.transparentWithZWrite&&(s.depthWrite=!0),delete s.transparentWithZWrite,s.fog=!0,s.lights=!0,s.clipping=!0,this.uniforms=qx.merge([Pe.common,Pe.normalmap,Pe.emissivemap,Pe.fog,Pe.lights,{litFactor:{value:new Qe(1,1,1)},mapUvTransform:{value:new it},colorAlpha:{value:1},normalMapUvTransform:{value:new it},shadeColorFactor:{value:new Qe(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new it},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new it},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Qe(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new it},parametricRimColorFactor:{value:new Qe(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new it},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Qe(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new it},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new it},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Qe(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new it},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=s.uniforms)!=null?e:{}]),this.setValues(s),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${hp(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${hp(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${hp(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(As,10),a=Object.entries(vx(vx({},this._generateDefines()),this.defines)).filter(([l,c])=>!!c).map(([l,c])=>`#define ${l} ${c}`).join(`
`)+`
`;t.vertexShader=a+t.vertexShader,t.fragmentShader=a+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(s){this.uniforms.litFactor.value=s}get map(){return this.uniforms.map.value}set map(s){this.uniforms.map.value=s}get normalMap(){return this.uniforms.normalMap.value}set normalMap(s){this.uniforms.normalMap.value=s}get normalScale(){return this.uniforms.normalScale.value}set normalScale(s){this.uniforms.normalScale.value=s}get emissive(){return this.uniforms.emissive.value}set emissive(s){this.uniforms.emissive.value=s}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(s){this.uniforms.emissiveIntensity.value=s}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(s){this.uniforms.emissiveMap.value=s}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(s){this.uniforms.shadeColorFactor.value=s}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(s){this.uniforms.shadeMultiplyTexture.value=s}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(s){this.uniforms.shadingShiftFactor.value=s}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(s){this.uniforms.shadingShiftTexture.value=s}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(s){this.uniforms.shadingShiftTextureScale.value=s}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(s){this.uniforms.shadingToonyFactor.value=s}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(s){this.uniforms.giEqualizationFactor.value=s}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(s){this.uniforms.matcapFactor.value=s}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(s){this.uniforms.matcapTexture.value=s}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(s){this.uniforms.parametricRimColorFactor.value=s}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(s){this.uniforms.rimMultiplyTexture.value=s}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(s){this.uniforms.rimLightingMixFactor.value=s}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(s){this.uniforms.parametricRimFresnelPowerFactor.value=s}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(s){this.uniforms.parametricRimLiftFactor.value=s}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(s){this.uniforms.outlineWidthMultiplyTexture.value=s}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(s){this.uniforms.outlineWidthFactor.value=s}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(s){this.uniforms.outlineColorFactor.value=s}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(s){this.uniforms.outlineLightingMixFactor.value=s}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(s){this.uniforms.uvAnimationMaskTexture.value=s}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(s){this.uniforms.uvAnimationScrollXOffset.value=s}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(s){this.uniforms.uvAnimationScrollYOffset.value=s}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(s){this.uniforms.uvAnimationRotationPhase.value=s}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(s){this._ignoreVertexColor=s,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(s){this._v0CompatShade=s,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(s){this._debugMode=s,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(s){this._outlineWidthMode=s,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(s){this._isOutline=s,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(s){this._uploadUniformsWorkaround(),this._updateUVAnimation(s)}copy(s){return super.copy(s),this.map=s.map,this.normalMap=s.normalMap,this.emissiveMap=s.emissiveMap,this.shadeMultiplyTexture=s.shadeMultiplyTexture,this.shadingShiftTexture=s.shadingShiftTexture,this.matcapTexture=s.matcapTexture,this.rimMultiplyTexture=s.rimMultiplyTexture,this.outlineWidthMultiplyTexture=s.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=s.uvAnimationMaskTexture,this.normalMapType=s.normalMapType,this.uvAnimationScrollXSpeedFactor=s.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=s.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=s.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=s.ignoreVertexColor,this.v0CompatShade=s.v0CompatShade,this.debugMode=s.debugMode,this.outlineWidthMode=s.outlineWidthMode,this.isOutline=s.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(s){this.uniforms.uvAnimationScrollXOffset.value+=s*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=s*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=s*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const s=parseInt(As,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:s,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===yx.ScreenCoordinates}}_updateTextureMatrix(s,e){s.value&&(s.value.matrixAutoUpdate&&s.value.updateMatrix(),e.value.copy(s.value.matrix))}},HD=new Set(["1.0","1.0-beta"]),wM=class eh{get name(){return eh.EXTENSION_NAME}constructor(e,t={}){var i,a,l,c;this.parser=e,this.materialType=(i=t.materialType)!=null?i:zD,this.renderOrderOffset=(a=t.renderOrderOffset)!=null?a:0,this.v0CompatShade=(l=t.v0CompatShade)!=null?l:!1,this.debugMode=(c=t.debugMode)!=null?c:"none",this._mToonMaterialSet=new Set}beforeRoot(){return na(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return na(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return na(this,null,function*(){var t;const i=this.parser,l=(t=i.json.meshes)==null?void 0:t[e];if(l==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const c=l.primitives,h=yield i.loadMesh(e);if(c.length===1){const f=h,d=c[0].material;d!=null&&this._setupPrimitive(f,d)}else{const f=h;for(let d=0;d<c.length;d++){const m=f.children[d],_=c[d].material;_!=null&&this._setupPrimitive(m,_)}}return h})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i?.map((a,l)=>{var c;this._getMToonExtension(l)&&((c=a.extensions)!=null&&c.KHR_materials_unlit)&&delete a.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const c=(t=this.parser.json.materials)==null?void 0:t[e];if(c==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const h=(i=c.extensions)==null?void 0:i[eh.EXTENSION_NAME];if(h==null)return;const f=h.specVersion;if(!HD.has(f)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${eh.EXTENSION_NAME} specVersion "${f}"`);return}return h}_extendMaterialParams(e,t){return na(this,null,function*(){var i;delete t.metalness,delete t.roughness;const a=new PD(this.parser,t);a.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),a.assignColor("shadeColorFactor",e.shadeColorFactor),a.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),a.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),a.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),a.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),a.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),a.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),a.assignColor("matcapFactor",e.matcapFactor),a.assignTexture("matcapTexture",e.matcapTexture,!0),a.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),a.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),a.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),a.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),a.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),a.assignPrimitive("outlineWidthMode",e.outlineWidthMode),a.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),a.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),a.assignColor("outlineColorFactor",e.outlineColorFactor),a.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),a.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),a.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),a.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),a.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),a.assignPrimitive("v0CompatShade",this.v0CompatShade),a.assignPrimitive("debugMode",this.debugMode),yield a.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const a=this._parseRenderOrder(i);e.renderOrder=a+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Hi)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=qn,e.material.push(i);const a=e.geometry,l=a.index?a.index.count:a.attributes.position.count/3;a.addGroup(0,l,0),a.addGroup(0,l,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(a=>i.add(a)):i.add(t);for(const a of i)this._mToonMaterialSet.add(a)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};wM.EXTENSION_NAME="VRMC_materials_mtoon";var VD=wM,GD=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),CM=class mm{get name(){return mm.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return GD(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const a=i.emissiveMultiplier;t.emissiveIntensity=a})}_getHDREmissiveMultiplierExtension(e){var t,i;const c=(t=this.parser.json.materials)==null?void 0:t[e];if(c==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const h=(i=c.extensions)==null?void 0:i[mm.EXTENSION_NAME];if(h!=null)return h}};CM.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var kD=CM,WD=Object.defineProperty,XD=Object.defineProperties,YD=Object.getOwnPropertyDescriptors,xx=Object.getOwnPropertySymbols,qD=Object.prototype.hasOwnProperty,jD=Object.prototype.propertyIsEnumerable,Mx=(s,e,t)=>e in s?WD(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ji=(s,e)=>{for(var t in e||(e={}))qD.call(e,t)&&Mx(s,t,e[t]);if(xx)for(var t of xx(e))jD.call(e,t)&&Mx(s,t,e[t]);return s},Sx=(s,e)=>XD(s,YD(e)),ZD=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())});function oo(s){return Math.pow(s,2.2)}var KD=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(s){var e;this.parser=s,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return ZD(this,null,function*(){var s;const e=this.parser.json,t=(s=e.extensions)==null?void 0:s.VRM,i=t?.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((a,l)=>{var c,h;const f=(c=e.materials)==null?void 0:c[l];if(f==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${l}] of glTF but the material doesn't exist`);return}if(a.shader==="VRM/MToon"){const d=this._parseV0MToonProperties(a,f);e.materials[l]=d}else if((h=a.shader)!=null&&h.startsWith("VRM/Unlit")){const d=this._parseV0UnlitProperties(a,f);e.materials[l]=d}else a.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${a.shader}`)}))})}_parseV0MToonProperties(s,e){var t,i,a,l,c,h,f,d,m,_,v,y,S,T,M,x,P,D,w,O,F,U,G,L,A,k,se,re,me,he,z,j,q,Se,N,ee,Me,Ee,J,_e,Ae,Le,Ue,ct,Ke,Ct,Lt,ft,X,sn,Mt,ht,Ge,dt,Ye;const rt=(i=(t=s.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,I=((a=s.floatProperties)==null?void 0:a._ZWrite)===1&&rt,b=this._v0ParseRenderQueue(s),ie=(c=(l=s.keywordMap)==null?void 0:l._ALPHATEST_ON)!=null?c:!1,fe=rt?"BLEND":ie?"MASK":"OPAQUE",pe=ie?(f=(h=s.floatProperties)==null?void 0:h._Cutoff)!=null?f:.5:void 0,Fe=((m=(d=s.floatProperties)==null?void 0:d._CullMode)!=null?m:2)===0,De=this._portTextureTransform(s),Ve=((v=(_=s.vectorProperties)==null?void 0:_._Color)!=null?v:[1,1,1,1]).map((Z,le)=>le===3?Z:oo(Z)),We=(y=s.textureProperties)==null?void 0:y._MainTex,Te=We!=null?{index:We,extensions:Ji({},De)}:void 0,Be=(T=(S=s.floatProperties)==null?void 0:S._BumpScale)!=null?T:1,Xe=(M=s.textureProperties)==null?void 0:M._BumpMap,W=Xe!=null?{index:Xe,scale:Be,extensions:Ji({},De)}:void 0,te=((P=(x=s.vectorProperties)==null?void 0:x._EmissionColor)!=null?P:[0,0,0,1]).map(oo),Re=(D=s.textureProperties)==null?void 0:D._EmissionMap,V=Re!=null?{index:Re,extensions:Ji({},De)}:void 0,we=((O=(w=s.vectorProperties)==null?void 0:w._ShadeColor)!=null?O:[.97,.81,.86,1]).map(oo),ye=(F=s.textureProperties)==null?void 0:F._ShadeTexture,Ne=ye!=null?{index:ye,extensions:Ji({},De)}:void 0;let be=(G=(U=s.floatProperties)==null?void 0:U._ShadeShift)!=null?G:0,ge=(A=(L=s.floatProperties)==null?void 0:L._ShadeToony)!=null?A:.9;ge=cn.lerp(ge,1,.5+.5*be),be=-be-(1-ge);const Oe=(se=(k=s.floatProperties)==null?void 0:k._IndirectLightIntensity)!=null?se:.1,qe=Oe?1-Oe:void 0,vt=(re=s.textureProperties)==null?void 0:re._SphereAdd,mt=vt!=null?[1,1,1]:void 0,hn=vt!=null?{index:vt}:void 0,en=(he=(me=s.floatProperties)==null?void 0:me._RimLightingMix)!=null?he:0,an=(z=s.textureProperties)==null?void 0:z._RimTexture,_n=an!=null?{index:an,extensions:Ji({},De)}:void 0,In=((q=(j=s.vectorProperties)==null?void 0:j._RimColor)!=null?q:[0,0,0,1]).map(oo),sr=(N=(Se=s.floatProperties)==null?void 0:Se._RimFresnelPower)!=null?N:1,la=(Me=(ee=s.floatProperties)==null?void 0:ee._RimLift)!=null?Me:0,ua=["none","worldCoordinates","screenCoordinates"][(J=(Ee=s.floatProperties)==null?void 0:Ee._OutlineWidthMode)!=null?J:0];let Ai=(Ae=(_e=s.floatProperties)==null?void 0:_e._OutlineWidth)!=null?Ae:0;Ai=.01*Ai;const bi=(Le=s.textureProperties)==null?void 0:Le._OutlineWidthTexture,ki=bi!=null?{index:bi,extensions:Ji({},De)}:void 0,Ri=((ct=(Ue=s.vectorProperties)==null?void 0:Ue._OutlineColor)!=null?ct:[0,0,0]).map(oo),ar=((Ct=(Ke=s.floatProperties)==null?void 0:Ke._OutlineColorMode)!=null?Ct:0)===1?(ft=(Lt=s.floatProperties)==null?void 0:Lt._OutlineLightingMix)!=null?ft:1:0,wi=(X=s.textureProperties)==null?void 0:X._UvAnimMaskTexture,on=wi!=null?{index:wi,extensions:Ji({},De)}:void 0,ca=(Mt=(sn=s.floatProperties)==null?void 0:sn._UvAnimScrollX)!=null?Mt:0;let or=(Ge=(ht=s.floatProperties)==null?void 0:ht._UvAnimScrollY)!=null?Ge:0;or!=null&&(or=-or);const Ci=(Ye=(dt=s.floatProperties)==null?void 0:dt._UvAnimRotation)!=null?Ye:0,C={specVersion:"1.0",transparentWithZWrite:I,renderQueueOffsetNumber:b,shadeColorFactor:we,shadeMultiplyTexture:Ne,shadingShiftFactor:be,shadingToonyFactor:ge,giEqualizationFactor:qe,matcapFactor:mt,matcapTexture:hn,rimLightingMixFactor:en,rimMultiplyTexture:_n,parametricRimColorFactor:In,parametricRimFresnelPowerFactor:sr,parametricRimLiftFactor:la,outlineWidthMode:ua,outlineWidthFactor:Ai,outlineWidthMultiplyTexture:ki,outlineColorFactor:Ri,outlineLightingMixFactor:ar,uvAnimationMaskTexture:on,uvAnimationScrollXSpeedFactor:ca,uvAnimationScrollYSpeedFactor:or,uvAnimationRotationSpeedFactor:Ci};return Sx(Ji({},e),{pbrMetallicRoughness:{baseColorFactor:Ve,baseColorTexture:Te},normalTexture:W,emissiveTexture:V,emissiveFactor:te,alphaMode:fe,alphaCutoff:pe,doubleSided:Fe,extensions:{VRMC_materials_mtoon:C}})}_parseV0UnlitProperties(s,e){var t,i,a,l,c;const h=s.shader==="VRM/UnlitTransparentZWrite",f=s.shader==="VRM/UnlitTransparent"||h,d=this._v0ParseRenderQueue(s),m=s.shader==="VRM/UnlitCutout",_=f?"BLEND":m?"MASK":"OPAQUE",v=m?(i=(t=s.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,y=this._portTextureTransform(s),S=((l=(a=s.vectorProperties)==null?void 0:a._Color)!=null?l:[1,1,1,1]).map(oo),T=(c=s.textureProperties)==null?void 0:c._MainTex,M=T!=null?{index:T,extensions:Ji({},y)}:void 0,x={specVersion:"1.0",transparentWithZWrite:h,renderQueueOffsetNumber:d,shadeColorFactor:S,shadeMultiplyTexture:M};return Sx(Ji({},e),{pbrMetallicRoughness:{baseColorFactor:S,baseColorTexture:M},alphaMode:_,alphaCutoff:v,extensions:{VRMC_materials_mtoon:x}})}_portTextureTransform(s){var e,t,i,a,l;const c=(e=s.vectorProperties)==null?void 0:e._MainTex;if(c==null)return{};const h=[(t=c?.[0])!=null?t:0,(i=c?.[1])!=null?i:0],f=[(a=c?.[2])!=null?a:1,(l=c?.[3])!=null?l:1];return h[1]=1-f[1]-h[1],{KHR_texture_transform:{offset:h,scale:f}}}_v0ParseRenderQueue(s){var e,t;const i=s.shader==="VRM/UnlitTransparentZWrite",a=((e=s.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||s.shader==="VRM/UnlitTransparent"||i,l=((t=s.floatProperties)==null?void 0:t._ZWrite)===1||i;let c=0;if(a){const h=s.renderQueue;h!=null&&(l?c=this._renderQueueMapTransparentZWrite.get(h):c=this._renderQueueMapTransparent.get(h))}return c}_populateRenderQueueMap(s){const e=new Set,t=new Set;s.forEach(i=>{var a,l;const c=i.shader==="VRM/UnlitTransparentZWrite",h=((a=i.keywordMap)==null?void 0:a._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||c,f=((l=i.floatProperties)==null?void 0:l._ZWrite)===1||c;if(h){const d=i.renderQueue;d!=null&&(f?t.add(d):e.add(d))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,a)=>{const l=Math.min(Math.max(a-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,l)}),Array.from(t).sort().forEach((i,a)=>{const l=Math.min(Math.max(a,0),9);this._renderQueueMapTransparentZWrite.set(i,l)})}},Ex=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),_s=new B,fp=class extends ui{constructor(s){super(),this._attrPosition=new qt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(FT);const e=new Dn;e.setAttribute("position",this._attrPosition);const t=new oa({color:16711935,depthTest:!1,depthWrite:!1});this._line=new hh(e,t),this.add(this._line),this.constraint=s}updateMatrixWorld(s){_s.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,_s.x,_s.y,_s.z),this.constraint.source&&_s.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,_s.x,_s.y,_s.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(s)}};function Tx(s,e){return e.set(s.elements[12],s.elements[13],s.elements[14])}var QD=new B,JD=new B;function $D(s,e){return s.decompose(QD,e,JD),e}function lh(s){return s.invert?s.invert():s.inverse(),s}var Bm=class{constructor(s,e){this.destination=s,this.source=e,this.weight=1}},e2=new B,t2=new B,n2=new B,i2=new ut,r2=new ut,s2=new ut,a2=class extends Bm{get aimAxis(){return this._aimAxis}set aimAxis(s){this._aimAxis=s,this._v3AimAxis.set(s==="PositiveX"?1:s==="NegativeX"?-1:0,s==="PositiveY"?1:s==="NegativeY"?-1:0,s==="PositiveZ"?1:s==="NegativeZ"?-1:0)}get dependencies(){const s=new Set([this.source]);return this.destination.parent&&s.add(this.destination.parent),s}constructor(s,e){super(s,e),this._aimAxis="PositiveX",this._v3AimAxis=new B(1,0,0),this._dstRestQuat=new ut}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const s=i2.identity(),e=r2.identity();this.destination.parent&&($D(this.destination.parent.matrixWorld,s),lh(e.copy(s)));const t=e2.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(s),i=Tx(this.source.matrixWorld,t2).sub(Tx(this.destination.matrixWorld,n2)).normalize(),a=s2.setFromUnitVectors(t,i).premultiply(e).multiply(s).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(a,this.weight)}};function o2(s,e){const t=[s];let i=s.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(a=>{e(a)})}var l2=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(s){this._constraints.add(s);let e=this._objectConstraintsMap.get(s.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(s.destination,e)),e.add(s)}deleteConstraint(s){this._constraints.delete(s),this._objectConstraintsMap.get(s.destination).delete(s)}setInitState(){const s=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,s,e,i=>i.setInitState())}update(){const s=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,s,e,i=>i.update())}_processConstraint(s,e,t,i){if(t.has(s))return;if(e.has(s))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(s);const a=s.dependencies;for(const l of a)o2(l,c=>{const h=this._objectConstraintsMap.get(c);if(h)for(const f of h)this._processConstraint(f,e,t,i)});i(s),t.add(s)}},u2=new ut,c2=new ut,h2=class extends Bm{get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._dstRestQuat=new ut,this._invSrcRestQuat=new ut}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lh(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const s=u2.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=c2.copy(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},f2=new B,d2=new ut,p2=new ut,m2=class extends Bm{get rollAxis(){return this._rollAxis}set rollAxis(s){this._rollAxis=s,this._v3RollAxis.set(s==="X"?1:0,s==="Y"?1:0,s==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._rollAxis="X",this._v3RollAxis=new B(1,0,0),this._dstRestQuat=new ut,this._invDstRestQuat=new ut,this._invSrcRestQuatMulDstRestQuat=new ut}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),lh(this._invDstRestQuat.copy(this._dstRestQuat)),lh(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const s=d2.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=f2.copy(this._v3RollAxis).applyQuaternion(s),i=p2.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},g2=new Set(["1.0","1.0-beta"]),LM=class Wl{get name(){return Wl.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return Ex(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return Ex(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(Wl.EXTENSION_NAME))!==-1))return null;const l=new l2,c=yield this.parser.getDependencies("node");return c.forEach((h,f)=>{var d;const m=i.nodes[f],_=(d=m?.extensions)==null?void 0:d[Wl.EXTENSION_NAME];if(_==null)return;const v=_.specVersion;if(!g2.has(v)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Wl.EXTENSION_NAME} specVersion "${v}"`);return}const y=_.constraint;if(y.roll!=null){const S=this._importRollConstraint(h,c,y.roll);l.addConstraint(S)}else if(y.aim!=null){const S=this._importAimConstraint(h,c,y.aim);l.addConstraint(S)}else if(y.rotation!=null){const S=this._importRotationConstraint(h,c,y.rotation);l.addConstraint(S)}}),e.scene.updateMatrixWorld(),l.setInitState(),l})}_importRollConstraint(e,t,i){const{source:a,rollAxis:l,weight:c}=i,h=t[a],f=new m2(e,h);if(l!=null&&(f.rollAxis=l),c!=null&&(f.weight=c),this.helperRoot){const d=new fp(f);this.helperRoot.add(d)}return f}_importAimConstraint(e,t,i){const{source:a,aimAxis:l,weight:c}=i,h=t[a],f=new a2(e,h);if(l!=null&&(f.aimAxis=l),c!=null&&(f.weight=c),this.helperRoot){const d=new fp(f);this.helperRoot.add(d)}return f}_importRotationConstraint(e,t,i){const{source:a,weight:l}=i,c=t[a],h=new h2(e,c);if(l!=null&&(h.weight=l),this.helperRoot){const f=new fp(h);this.helperRoot.add(f)}return h}};LM.EXTENSION_NAME="VRMC_node_constraint";var _2=LM,Wc=(s,e,t)=>new Promise((i,a)=>{var l=f=>{try{h(t.next(f))}catch(d){a(d)}},c=f=>{try{h(t.throw(f))}catch(d){a(d)}},h=f=>f.done?i(f.value):Promise.resolve(f.value).then(l,c);h((t=t.apply(s,e)).next())}),Fm=class{},dp=new B,Qs=new B,DM=class extends Fm{get type(){return"capsule"}constructor(s){var e,t,i,a;super(),this.offset=(e=s?.offset)!=null?e:new B(0,0,0),this.tail=(t=s?.tail)!=null?t:new B(0,0,0),this.radius=(i=s?.radius)!=null?i:0,this.inside=(a=s?.inside)!=null?a:!1}calculateCollision(s,e,t,i){dp.setFromMatrixPosition(s),Qs.subVectors(this.tail,this.offset).applyMatrix4(s),Qs.sub(dp);const a=Qs.lengthSq();i.copy(e).sub(dp);const l=Qs.dot(i);l<=0||(a<=l||Qs.multiplyScalar(l/a),i.sub(Qs));const c=i.length(),h=this.inside?this.radius-t-c:c-t-this.radius;return h<0&&(i.multiplyScalar(1/c),this.inside&&i.negate()),h}},pp=new B,Ax=new it,UM=class extends Fm{get type(){return"plane"}constructor(s){var e,t;super(),this.offset=(e=s?.offset)!=null?e:new B(0,0,0),this.normal=(t=s?.normal)!=null?t:new B(0,0,1)}calculateCollision(s,e,t,i){i.setFromMatrixPosition(s),i.negate().add(e),Ax.getNormalMatrix(s),pp.copy(this.normal).applyNormalMatrix(Ax).normalize();const a=i.dot(pp)-t;return i.copy(pp),a}},v2=new B,NM=class extends Fm{get type(){return"sphere"}constructor(s){var e,t,i;super(),this.offset=(e=s?.offset)!=null?e:new B(0,0,0),this.radius=(t=s?.radius)!=null?t:0,this.inside=(i=s?.inside)!=null?i:!1}calculateCollision(s,e,t,i){i.subVectors(e,v2.setFromMatrixPosition(s));const a=i.length(),l=this.inside?this.radius-t-a:a-t-this.radius;return l<0&&(i.multiplyScalar(1/a),this.inside&&i.negate()),l}},$i=new B,y2=class extends Dn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new B,this._currentTail=new B,this._shape=s,this._attrPos=new qt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0);const t=$i.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),s=!0),s&&this._buildPosition()}_buildPosition(){$i.copy(this._currentTail).sub(this._currentOffset);const s=$i.length()/this._currentRadius;for(let i=0;i<=16;i++){const a=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(a),-Math.cos(a),0),this._attrPos.setXYZ(17+i,s+Math.sin(a),Math.cos(a),0),this._attrPos.setXYZ(34+i,-Math.sin(a),0,-Math.cos(a)),this._attrPos.setXYZ(51+i,s+Math.sin(a),0,Math.cos(a))}for(let i=0;i<32;i++){const a=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(a),Math.cos(a)),this._attrPos.setXYZ(100+i,s,Math.sin(a),Math.cos(a))}const e=Math.atan2($i.y,Math.sqrt($i.x*$i.x+$i.z*$i.z)),t=-Math.atan2($i.z,$i.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<34;s++){const e=(s+1)%34;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(68+s*2,34+s,34+e)}for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(136+s*2,68+s,68+e),this._attrIndex.setXY(200+s*2,100+s,100+e)}this._attrIndex.needsUpdate=!0}},x2=class extends Dn{constructor(s){super(),this.worldScale=1,this._currentOffset=new B,this._currentNormal=new B,this._shape=s,this._attrPos=new qt(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},M2=class extends Dn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new B,this._shape=s,this._attrPos=new qt(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.needsUpdate=!0}},S2=new B,mp=class extends ui{constructor(s){if(super(),this.matrixAutoUpdate=!1,this.collider=s,this.collider.shape instanceof NM)this._geometry=new M2(this.collider.shape);else if(this.collider.shape instanceof DM)this._geometry=new y2(this.collider.shape);else if(this.collider.shape instanceof UM)this._geometry=new x2(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new oa({color:16711935,depthTest:!1,depthWrite:!1});this._line=new ru(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=S2.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},E2=class extends Dn{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new B,this._springBone=s,this._attrPos=new qt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new qt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){const e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){const e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},T2=new B,A2=class extends ui{constructor(s){super(),this.matrixAutoUpdate=!1,this.springBone=s,this._geometry=new E2(this.springBone);const e=new oa({color:16776960,depthTest:!1,depthWrite:!1});this._line=new ru(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=T2.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},gp=class extends Kt{constructor(s){super(),this.colliderMatrix=new ot,this.shape=s}updateWorldMatrix(s,e){super.updateWorldMatrix(s,e),b2(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function b2(s,e,t){const i=e.elements;s.copy(e),t&&(s.elements[12]=i[0]*t.x+i[4]*t.y+i[8]*t.z+i[12],s.elements[13]=i[1]*t.x+i[5]*t.y+i[9]*t.z+i[13],s.elements[14]=i[2]*t.x+i[6]*t.y+i[10]*t.z+i[14])}var R2=new ot;function w2(s){return s.invert?s.invert():s.getInverse(R2.copy(s)),s}var C2=class{constructor(s){this._inverseCache=new ot,this._shouldUpdateInverse=!0,this.matrix=s;const e={set:(t,i,a)=>(this._shouldUpdateInverse=!0,t[i]=a,!0)};this._originalElements=s.elements,s.elements=new Proxy(s.elements,e)}get inverse(){return this._shouldUpdateInverse&&(w2(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},_p=new ot,lo=new B,zl=new B,Hl=new B,Vl=new B,L2=new ot,D2=class{constructor(s,e,t={},i=[]){this._currentTail=new B,this._prevTail=new B,this._boneAxis=new B,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new ot,this._initialLocalRotation=new ut,this._initialLocalChildPosition=new B;var a,l,c,h,f,d;this.bone=s,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(a=t.hitRadius)!=null?a:0,stiffness:(l=t.stiffness)!=null?l:1,gravityPower:(c=t.gravityPower)!=null?c:0,gravityDir:(f=(h=t.gravityDir)==null?void 0:h.clone())!=null?f:new B(0,-1,0),dragForce:(d=t.dragForce)!=null?d:.4},this.colliderGroups=i}get dependencies(){const s=new Set,e=this.bone.parent;e&&s.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let i=0;i<this.colliderGroups[t].colliders.length;i++)s.add(this.colliderGroups[t].colliders[i]);return s}get center(){return this._center}set center(s){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=s,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new C2(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:_p}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail)}update(s){if(s<=0)return;this._calcWorldSpaceBoneLength();const e=zl.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Vl.copy(this._currentTail).add(lo.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*s).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*s),Hl.setFromMatrixPosition(this.bone.matrixWorld),Vl.sub(Hl).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Hl),this._collision(Vl),this._prevTail.copy(this._currentTail),this._currentTail.copy(Vl).applyMatrix4(this._getMatrixWorldToCenter());const t=L2.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,lo.copy(Vl).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(s){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){const i=this.colliderGroups[e].colliders[t],a=i.shape.calculateCollision(i.colliderMatrix,s,this.settings.hitRadius,lo);if(a<0){s.addScaledVector(lo,-a),s.sub(Hl);const l=s.length();s.multiplyScalar(this._worldSpaceBoneLength/l).add(Hl)}}}_calcWorldSpaceBoneLength(){lo.setFromMatrixPosition(this.bone.matrixWorld),this.child?zl.setFromMatrixPosition(this.child.matrixWorld):(zl.copy(this._initialLocalChildPosition),zl.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=lo.sub(zl).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:_p}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:_p}};function U2(s,e){const t=[];let i=s;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(a=>{e(a)})}function gm(s,e){s.children.forEach(t=>{e(t)||gm(t,e)})}function N2(s){var e;const t=new Map;for(const i of s){let a=i;do{const l=((e=t.get(a))!=null?e:0)+1;if(l===s.size)return a;t.set(a,l),a=a.parent}while(a!==null)}return null}var bx=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const s=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{s.add(t)})}),Array.from(s)}get colliders(){const s=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{s.add(t)})}),Array.from(s)}addJoint(s){this._joints.add(s);let e=this._objectSpringBonesMap.get(s.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(s.bone,e)),e.add(s),this._isSortedJointsDirty=!0}addSpringBone(s){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(s)}deleteJoint(s){this._joints.delete(s),this._objectSpringBonesMap.get(s.bone).delete(s),this._isSortedJointsDirty=!0}deleteSpringBone(s){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(s)}setInitState(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){const e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){const e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(s){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(s),gm(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const s=[],e=new Set,t=new Set,i=new Set;for(const l of this._joints)this._insertJointSort(l,e,t,s,i);this._sortedJoints=s;const a=N2(i);this._ancestors=[],a&&(this._ancestors.push(a),gm(a,l=>{var c,h;return((h=(c=this._objectSpringBonesMap.get(l))==null?void 0:c.size)!=null?h:0)>0?!0:(this._ancestors.push(l),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(s,e,t,i,a){if(t.has(s))return;if(e.has(s)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(s);const l=s.dependencies;for(const c of l){let h=!1,f=null;U2(c,d=>{const m=this._objectSpringBonesMap.get(d);if(m)for(const _ of m)h=!0,this._insertJointSort(_,e,t,i,a);else h||(f=d)}),f&&a.add(f)}i.push(s),t.add(s)}_relevantChildrenUpdated(s){var e,t;return((t=(e=this._objectSpringBonesMap.get(s))==null?void 0:e.size)!=null?t:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)}},Rx="VRMC_springBone_extended_collider",P2=new Set(["1.0","1.0-beta"]),O2=new Set(["1.0"]),PM=class co{get name(){return co.EXTENSION_NAME}constructor(e,t){var i;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(i=t?.useExtendedColliders)!=null?i:!0}afterRoot(e){return Wc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Wc(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return Wc(this,null,function*(){var t,i,a,l,c;const h=e.parser.json;if(!(((t=h.extensionsUsed)==null?void 0:t.indexOf(co.EXTENSION_NAME))!==-1))return null;const d=new bx,m=yield e.parser.getDependencies("node"),_=(i=h.extensions)==null?void 0:i[co.EXTENSION_NAME];if(!_)return null;const v=_.specVersion;if(!P2.has(v))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${co.EXTENSION_NAME} specVersion "${v}"`),null;const y=(a=_.colliders)==null?void 0:a.map((T,M)=>{var x,P,D,w,O,F,U,G,L,A,k,se,re,me,he;const z=m[T.node];if(z==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${M} attempted to use the node #${T.node} but not found`),null;const j=T.shape,q=(x=T.extensions)==null?void 0:x[Rx];if(this.useExtendedColliders&&q!=null){const Se=q.specVersion;if(!O2.has(Se))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Rx} specVersion "${Se}". Fallbacking to the ${co.EXTENSION_NAME} definition`);else{const N=q.shape;if(N.sphere)return this._importSphereCollider(z,{offset:new B().fromArray((P=N.sphere.offset)!=null?P:[0,0,0]),radius:(D=N.sphere.radius)!=null?D:0,inside:(w=N.sphere.inside)!=null?w:!1});if(N.capsule)return this._importCapsuleCollider(z,{offset:new B().fromArray((O=N.capsule.offset)!=null?O:[0,0,0]),radius:(F=N.capsule.radius)!=null?F:0,tail:new B().fromArray((U=N.capsule.tail)!=null?U:[0,0,0]),inside:(G=N.capsule.inside)!=null?G:!1});if(N.plane)return this._importPlaneCollider(z,{offset:new B().fromArray((L=N.plane.offset)!=null?L:[0,0,0]),normal:new B().fromArray((A=N.plane.normal)!=null?A:[0,0,1])})}}if(j.sphere)return this._importSphereCollider(z,{offset:new B().fromArray((k=j.sphere.offset)!=null?k:[0,0,0]),radius:(se=j.sphere.radius)!=null?se:0,inside:!1});if(j.capsule)return this._importCapsuleCollider(z,{offset:new B().fromArray((re=j.capsule.offset)!=null?re:[0,0,0]),radius:(me=j.capsule.radius)!=null?me:0,tail:new B().fromArray((he=j.capsule.tail)!=null?he:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${M} has no valid shape`)}),S=(l=_.colliderGroups)==null?void 0:l.map((T,M)=>{var x;return{colliders:((x=T.colliders)!=null?x:[]).flatMap(D=>{const w=y?.[D];return w??(console.warn(`VRMSpringBoneLoaderPlugin: The colliderGroup #${M} attempted to use a collider #${D} but not found`),[])}),name:T.name}});return(c=_.springs)==null||c.forEach((T,M)=>{var x;const P=T.joints,D=(x=T.colliderGroups)==null?void 0:x.map(F=>{const U=S?.[F];if(U==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${M} attempted to use a colliderGroup ${F} but not found`);return U}),w=T.center!=null?m[T.center]:void 0;let O;P.forEach(F=>{if(O){const U=O.node,G=m[U],L=F.node,A=m[L],k={hitRadius:O.hitRadius,dragForce:O.dragForce,gravityPower:O.gravityPower,stiffness:O.stiffness,gravityDir:O.gravityDir!=null?new B().fromArray(O.gravityDir):void 0},se=this._importJoint(G,A,k,D);w&&(se.center=w),d.addJoint(se)}O=F})}),d.setInitState(),d})}_v0Import(e){return Wc(this,null,function*(){var t,i,a;const l=e.parser.json;if(!(((t=l.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const h=(i=l.extensions)==null?void 0:i.VRM,f=h?.secondaryAnimation;if(!f)return null;const d=f?.boneGroups;if(!d)return null;const m=new bx,_=yield e.parser.getDependencies("node"),v=(a=f.colliderGroups)==null?void 0:a.map(y=>{var S;const T=_[y.node];return{colliders:((S=y.colliders)!=null?S:[]).map((x,P)=>{var D,w,O;const F=new B(0,0,0);return x.offset&&F.set((D=x.offset.x)!=null?D:0,(w=x.offset.y)!=null?w:0,x.offset.z?-x.offset.z:0),this._importSphereCollider(T,{offset:F,radius:(O=x.radius)!=null?O:0,inside:!1})})}});return d?.forEach((y,S)=>{const T=y.bones;T&&T.forEach(M=>{var x,P,D,w;const O=_[M],F=new B;y.gravityDir?F.set((x=y.gravityDir.x)!=null?x:0,(P=y.gravityDir.y)!=null?P:0,(D=y.gravityDir.z)!=null?D:0):F.set(0,-1,0);const U=y.center!=null?_[y.center]:void 0,G={hitRadius:y.hitRadius,dragForce:y.dragForce,gravityPower:y.gravityPower,stiffness:y.stiffiness,gravityDir:F},L=(w=y.colliderGroups)==null?void 0:w.map(A=>{const k=v?.[A];if(k==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${S} attempted to use a colliderGroup ${A} but not found`);return k});O.traverse(A=>{var k;const se=(k=A.children[0])!=null?k:null,re=this._importJoint(A,se,G,L);U&&(re.center=U),m.addJoint(re)})})}),e.scene.updateMatrixWorld(),m.setInitState(),m})}_importJoint(e,t,i,a){const l=new D2(e,t,i,a);if(this.jointHelperRoot){const c=new A2(l);this.jointHelperRoot.add(c),c.renderOrder=this.jointHelperRoot.renderOrder}return l}_importSphereCollider(e,t){const i=new NM(t),a=new gp(i);if(e.add(a),this.colliderHelperRoot){const l=new mp(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}_importCapsuleCollider(e,t){const i=new DM(t),a=new gp(i);if(e.add(a),this.colliderHelperRoot){const l=new mp(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}_importPlaneCollider(e,t){const i=new UM(t),a=new gp(i);if(e.add(a),this.colliderHelperRoot){const l=new mp(a);this.colliderHelperRoot.add(l),l.renderOrder=this.colliderHelperRoot.renderOrder}return a}};PM.EXTENSION_NAME="VRMC_springBone";var I2=PM,B2=class{get name(){return"VRMLoaderPlugin"}constructor(s,e){var t,i,a,l,c,h,f,d,m,_;this.parser=s;const v=e?.helperRoot,y=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new $L(s),this.firstPersonPlugin=(i=e?.firstPersonPlugin)!=null?i:new tD(s),this.humanoidPlugin=(a=e?.humanoidPlugin)!=null?a:new lD(s,{helperRoot:v,autoUpdateHumanBones:y}),this.lookAtPlugin=(l=e?.lookAtPlugin)!=null?l:new ED(s,{helperRoot:v}),this.metaPlugin=(c=e?.metaPlugin)!=null?c:new bD(s),this.mtoonMaterialPlugin=(h=e?.mtoonMaterialPlugin)!=null?h:new VD(s),this.materialsHDREmissiveMultiplierPlugin=(f=e?.materialsHDREmissiveMultiplierPlugin)!=null?f:new kD(s),this.materialsV0CompatPlugin=(d=e?.materialsV0CompatPlugin)!=null?d:new KD(s),this.springBonePlugin=(m=e?.springBonePlugin)!=null?m:new I2(s,{colliderHelperRoot:v,jointHelperRoot:v}),this.nodeConstraintPlugin=(_=e?.nodeConstraintPlugin)!=null?_:new _2(s,{helperRoot:v})}beforeRoot(){return Vc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(s){return Vc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(s)})}getMaterialType(s){const e=this.mtoonMaterialPlugin.getMaterialType(s);return e??null}extendMaterialParams(s,e){return Vc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(s,e),yield this.mtoonMaterialPlugin.extendMaterialParams(s,e)})}afterRoot(s){return Vc(this,null,function*(){yield this.metaPlugin.afterRoot(s),yield this.humanoidPlugin.afterRoot(s),yield this.expressionPlugin.afterRoot(s),yield this.lookAtPlugin.afterRoot(s),yield this.firstPersonPlugin.afterRoot(s),yield this.springBonePlugin.afterRoot(s),yield this.nodeConstraintPlugin.afterRoot(s),yield this.mtoonMaterialPlugin.afterRoot(s);const e=s.userData.vrmMeta,t=s.userData.vrmHumanoid;if(e&&t){const i=new wD({scene:s.scene,expressionManager:s.userData.vrmExpressionManager,firstPerson:s.userData.vrmFirstPerson,humanoid:t,lookAt:s.userData.vrmLookAt,meta:e,materials:s.userData.vrmMToonMaterials,springBoneManager:s.userData.vrmSpringBoneManager,nodeConstraintManager:s.userData.vrmNodeConstraintManager});s.userData.vrm=i}})}};/*!
 * @pixiv/three-vrm-core v3.4.4
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.4.4
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.4.4
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.4.4
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.4.4
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.4.4
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2025 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */let ia=null,Ms={},tr=null;const F2=s=>{const e=s.humanoid?.getBoneNode("leftUpperArm"),t=s.humanoid?.getBoneNode("leftLowerArm"),i=s.humanoid?.getBoneNode("leftHand"),a=s.humanoid?.getBoneNode("leftUpperLeg"),l=s.humanoid?.getBoneNode("leftLowerLeg"),c=s.humanoid?.getBoneNode("head");if(!e||!t||!i||!a||!l||!c)return null;const h=[0,.5,1,1.5,2],f=U=>cn.degToRad(U),d=(U=0,G=0,L=0)=>new ut().setFromEuler(new jn(f(U),f(G),f(L))),_=[d(-30,0,0),d(-20,15,0),d(-15,30,0),d(-20,15,0),d(-30,0,0)].flatMap(U=>[U.x,U.y,U.z,U.w]),y=[d(10,-30,0),d(20,-40,0),d(25,-60,0),d(20,-40,0),d(10,-30,0)].flatMap(U=>[U.x,U.y,U.z,U.w]),T=[d(0,-30,0),d(0,-45,15),d(0,-60,-15),d(0,-45,15),d(0,-30,0)].flatMap(U=>[U.x,U.y,U.z,U.w]),x=[d(0,0,0),d(-5,5,0),d(5,0,0),d(-5,5,0),d(0,0,0)].flatMap(U=>[U.x,U.y,U.z,U.w]),D=[d(0,0,0),d(5,0,0),d(-5,0,0),d(5,0,0),d(0,0,0)].flatMap(U=>[U.x,U.y,U.z,U.w]),O=[d(0,30,-5),d(0,45,-3),d(0,30,-0),d(0,45,-3),d(0,30,-5)].flatMap(U=>[U.x,U.y,U.z,U.w]),F=[new Yn(`${e.name}.quaternion`,h,_),new Yn(`${t.name}.quaternion`,h,y),new Yn(`${i.name}.quaternion`,h,T),new Yn(`${a.name}.quaternion`,h,x),new Yn(`${l.name}.quaternion`,h,D),new Yn(`${c.name}.quaternion`,h,O)];return new tu("LeftWaveFrontWithHeadTilt",-1,F)},z2=s=>{const e=s.humanoid?.getBoneNode("rightUpperArm"),t=s.humanoid?.getBoneNode("rightLowerArm"),i=s.humanoid?.getBoneNode("rightHand");if(!e||!t||!i)return null;const a=[0,.5,1,1.5,2],l=S=>cn.degToRad(S),c=(S=0,T=0,M=0)=>new ut().setFromEuler(new jn(l(S),l(T),l(M))),f=[c(-30,30,0),c(-20,45,0),c(-30,60,0),c(-20,45,0),c(-30,30,0)].flatMap(S=>[S.x,S.y,S.z,S.w]),m=[c(-30,30,0),c(-20,45,0),c(-30,60,0),c(-20,45,0),c(-30,30,0)].flatMap(S=>[S.x,S.y,S.z,S.w]),v=[c(0,0,0),c(10,0,0),c(-10,0,0),c(10,0,0),c(0,0,0)].flatMap(S=>[S.x,S.y,S.z,S.w]),y=[new Yn(`${e.name}.quaternion`,a,f),new Yn(`${t.name}.quaternion`,a,m),new Yn(`${i.name}.quaternion`,a,v)];return new tu("Wave",-1,y)},H2=(s,e)=>{ia=new yb(s.scene),Ms={};const t=F2(s);if(t){const a=ia.clipAction(t);a.setLoop(nm,1/0),Ms.Idle=a}e?.forEach(a=>{const l=ia.clipAction(a);l.setLoop(nm,1/0),Ms[a.name]=l});const i=Object.keys(Ms)[0];i&&(tr=Ms[i],tr.play())},vp=s=>{!ia||!Ms[s]||(tr&&tr.stop(),tr=Ms[s],tr.play())},V2=s=>{ia?.update(s)},G2=s=>{tr&&(s?tr.play():tr.stop())},k2=()=>{ia?.stopAllAction(),ia=null,Ms={},tr=null};function W2(){const s=yi.useRef(null),e=yi.useRef(null),t=yi.useRef(null),i=yi.useRef(null),a=yi.useRef(new ab),l=yi.useRef(new xb),c=yi.useRef(new tt),[h,f]=yi.useState(null),[d,m]=yi.useState(!0),[_,v]=yi.useState(!1);return yi.useEffect(()=>{if(!s.current)return;const y=new wA;y.background=new Qe(15134454);const S=new Cn(45,window.innerWidth/window.innerHeight,.1,100);if(S.position.set(0,3.6,-4.5),t.current=S,!e.current){const G=new rL({antialias:!0});G.setSize(window.innerWidth,window.innerHeight),G.shadowMap.enabled=!0,s.current.appendChild(G.domElement),e.current=G}const T=new dL(S,e.current.domElement);T.target.set(0,1.2,0),T.enableDamping=!0,i.current=T,y.add(new ib(16777215,.45));const M=new aM(16777215,1);M.position.set(2.5,5,2.5),M.castShadow=!0,y.add(M);const x=new Gn(new su(20,20),new fh({color:8978176}));x.rotation.x=-Math.PI/2,x.receiveShadow=!0,y.add(x);const P=new mL;P.register(G=>new B2(G)),P.load("/src/assets/Sample_Female.vrm",G=>{const L=G.userData.vrm;if(!L||h)return;L.scene.traverse(se=>{se.isMesh&&(se.castShadow=!0,se.receiveShadow=!0)}),y.add(L.scene),f(L);const A=z2(L);H2(L,A?[A]:[]),vp("Idle"),m(!0)});const D=l.current,w=G=>{const L=e.current.domElement.getBoundingClientRect();c.current.x=(G.clientX-L.left)/L.width*2-1,c.current.y=-((G.clientY-L.top)/L.height)*2+1},O=()=>{if(!h)return;D.setFromCamera(c.current,S),D.intersectObject(h.scene,!0).length>0&&(G2(!d),m(!d))},F=()=>{S.aspect=window.innerWidth/window.innerHeight,S.updateProjectionMatrix(),e.current.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("pointermove",w),window.addEventListener("click",O),window.addEventListener("resize",F);const U=()=>{const G=a.current.getDelta();if(V2(G),h){D.setFromCamera(c.current,S);const L=D.intersectObject(h.scene,!0);v(L.length>0)}T.update(),e.current.render(y,S),requestAnimationFrame(U)};return U(),()=>{k2(),e.current?.dispose(),s.current&&(s.current.innerHTML=""),window.removeEventListener("pointermove",w),window.removeEventListener("click",O),window.removeEventListener("resize",F)}},[]),vs.jsxs(vs.Fragment,{children:[vs.jsx("div",{ref:s,style:{width:"100vw",height:"100vh"}}),vs.jsxs("div",{style:{position:"absolute",top:20,left:20,display:"flex",gap:"12px",zIndex:200},children:[vs.jsx("button",{onClick:()=>{h&&vp("Idle"),m(!0)},style:{padding:"10px 16px",borderRadius:6,background:"#ffffff",fontWeight:"bold",cursor:"pointer",border:d?"3px solid #00ffff":"2px solid #cccccc",boxShadow:d?"0 0 12px #00ffff":"none"},children:"dance with left"}),vs.jsx("button",{onClick:()=>{h&&vp("Wave"),m(!1)},style:{padding:"10px 16px",borderRadius:6,background:"#ffffff",fontWeight:"bold",cursor:"pointer",border:d?"2px solid #cccccc":"3px solid #00ffff",boxShadow:d?"none":"0 0 12px #00ffff"},children:"righthand move"})]})]})}YE.createRoot(document.getElementById("root")).render(vs.jsx(yi.StrictMode,{children:vs.jsx(W2,{})}));
