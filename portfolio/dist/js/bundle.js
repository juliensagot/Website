"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function e(n){return void 0===this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(S=this,S.version="3.3.6",S.tools=new A,S.isSupported()?(S.tools.extend(S.defaults,n||{}),S.defaults.container=t(S.defaults),S.store={elements:{},containers:[]},S.sequences={},S.history=[],S.uid=0,S.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),S)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(S.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return S.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):S.tools.isNode(e)?[e]:S.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function i(){return++S.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=S.tools.extendClone(e.config,t):e.config=S.tools.extendClone(S.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&-1===S.store.containers.indexOf(t)&&S.store.containers.push(e.config.container),S.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};S.history.push(i)}function d(){if(S.isSupported()){y();for(var e=0;e<S.store.containers.length;e++)S.store.containers[e].addEventListener("scroll",u),S.store.containers[e].addEventListener("resize",u);S.initialized||(window.addEventListener("scroll",u),window.addEventListener("resize",u),S.initialized=!0)}return S}function u(){L(y)}function f(){var e,t,n,i;S.tools.forOwn(S.sequences,function(o){i=S.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],E(t=S.store.elements[n])&&!e&&(e=!0);i.active=e})}function y(){var e,t;f(),S.tools.forOwn(S.store.elements,function(n){t=S.store.elements[n],e=g(t),p(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),v("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):h(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),v("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=S.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,u()},Math.abs(o.interval)+i-n)}function v(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function p(e){if(e.sequence){var t=S.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return E(e)&&!e.revealing&&!e.disabled}function g(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!S.initialized||"once"===t&&!e.seen}function h(e){return e.sequence?!S.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled:!E(e)&&e.config.reset&&e.revealing&&!e.disabled}function w(e){return{width:e.clientWidth,height:e.clientHeight}}function b(e){if(e&&e!==window.document.documentElement){var t=z(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function z(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function E(e){var t=z(e.domEl),n=w(e.config.container),i=b(e.config.container),o=e.config.viewFactor,r=t.height,s=t.width,a=t.top,l=t.left,c=a+r,d=l+s;return function(){var t=a+r*o,u=l+s*o,f=c-r*o,y=d-s*o,m=i.y+e.config.viewOffset.top,v=i.x+e.config.viewOffset.left,p=i.y-e.config.viewOffset.bottom+n.height,g=i.x-e.config.viewOffset.right+n.width;return t<p&&f>m&&u<g&&y>v}()||"fixed"===window.getComputedStyle(e.domEl).position}function A(){}var S,L;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,u){var f,y,m,v,p,g;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),f=t(s),!(y=n(e,f)).length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),S;a&&"number"==typeof a&&(g=i(),p=S.sequences[g]={id:g,interval:a,elemIds:[],active:!1});for(var h=0;h<y.length;h++)(v=y[h].getAttribute("data-sr-id"))?m=S.store.elements[v]:(m={id:i(),domEl:y[h],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",m.id),p&&(m.sequence={id:p.id,index:p.elemIds.length},p.elemIds.push(m.id)),o(m,s,f),r(m),l(m),S.tools.isMobile()&&!m.config.mobile||!S.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!u&&S.isSupported()&&(c(e,s,a),S.initTimeout&&window.clearTimeout(S.initTimeout),S.initTimeout=window.setTimeout(d,0)),S},e.prototype.sync=function(){if(S.history.length&&S.isSupported()){for(var e=0;e<S.history.length;e++){var t=S.history[e];S.reveal(t.target,t.config,t.interval,!0)}d()}else console.log("ScrollReveal: sync failed, no reveals found.");return S},A.prototype.isObject=function(e){return null!==e&&"object"===(void 0===e?"undefined":_typeof(e))&&e.constructor===Object},A.prototype.isNode=function(e){return"object"===_typeof(window.Node)?e instanceof window.Node:e&&"object"===(void 0===e?"undefined":_typeof(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},A.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"===_typeof(window.NodeList)?e instanceof window.NodeList:e&&"object"===(void 0===e?"undefined":_typeof(e))&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},A.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+(void 0===e?"undefined":_typeof(e))+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},A.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},A.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},A.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"===_typeof(define.amd)&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}(),window.addEventListener("DOMContentLoaded",function(){function e(e,t,n){var i=e.querySelector(".js-"+n);e.classList.add(t),s(e,!0),e.dataset.device=t,i.classList.add("active"),i.play(),f=!0}function t(e,t,n){var i=e.querySelector(".js-"+t),o=new RegExp(n+".html","g"),r=window.location.href.replace(o,"");window.location.href=""+r+i.dataset.src}function n(e){s(e,!1),f=!1}function i(e,t){var n=e.querySelector("video.active");n.load(),n.classList.remove("active"),e.classList.remove(t),e.dataset.device=""}function o(e){return e.parentNode.dataset.device}function r(e){return e.dataset.video}function s(e,t){t?(e.classList.add("activated"),e.classList.remove("desactivated")):(e.classList.add("desactivated"),e.classList.remove("activated"))}function a(e,t,n,i){null!==t&&e.classList.remove(t),e.classList.add(n),e.classList.remove(i)}var l=Array.from(document.querySelectorAll(".js-cta")),c=document.querySelector(".animate-device"),d=document.querySelector(".overlay"),u=document.querySelector(".close-overlay"),f=!1;l.map(function(n){return n.addEventListener("click",function(){window.innerWidth>768?(e(c,o(this),r(this)),a(d,"off","active","inactive"),a(u,"off","activated","desactivated")):t(c,r(this),"index")})}),d.addEventListener("click",function(){n(c),a(u,null,"desactivated","activated"),a(this,null,"inactive","active")}),d.addEventListener("animationend",function(){f||this.classList.add("off")}),u.addEventListener("click",function(){n(c),a(u,null,"desactivated","activated"),a(d,null,"inactive","active")}),u.addEventListener("animationend",function(){f||this.classList.add("off")}),c.addEventListener("animationend",function(){f||i(this,this.dataset.device)})}),window.addEventListener("load",function(){Array.from(document.querySelectorAll(".lazy-image")).map(function(e){e.src=e.dataset.src,e.srcset=e.dataset.srcset})}),window.addEventListener("DOMContentLoaded",function(){window.innerWidth>768&&(window.sr=ScrollReveal({origin:"top",duration:600,easing:"ease-out",distance:"4%"}),sr.reveal(".js-sr"))});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=n)}(window,function(e,t){if(t.getElementsByClassName){var n,i,o=t.documentElement,r=e.Date,s=e.HTMLPictureElement,a="addEventListener",l="getAttribute",c=e[a],d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,y=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],v={},p=Array.prototype.forEach,g=function(e,t){return v[t]||(v[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),v[t].test(e[l]("class")||"")&&v[t]},h=function(e,t){g(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},w=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},b=function e(t,n,i){var o=i?a:"removeEventListener";i&&e(t,n),m.forEach(function(e){t[o](e,n)})},z=function(e,i,o,r,s){var a=t.createEvent("CustomEvent");return o||(o={}),o.instance=n,a.initCustomEvent(i,!r,!s,o),e.dispatchEvent(a),a},E=function(t,n){var o;!s&&(o=e.picturefill||i.pf)?o({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=function(){var e,n,i=[],o=[],r=i,s=function(){var t=r;for(r=i.length?o:i,e=!0,n=!1;t.length;)t.shift()();e=!1},a=function(i,o){e&&!o?i.apply(this,arguments):(r.push(i),n||(n=!0,(t.hidden?d:u)(s)))};return a._lsFlush=s,a}(),C=function(e,t){return t?function(){L(e)}:function(){var t=this,n=arguments;L(function(){e.apply(t,n)})}},x=function(e){var t,n=0,i=666,o=function(){t=!1,n=r.now(),e()},s=f?function(){f(o,{timeout:i}),666!==i&&(i=666)}:C(function(){d(o)},!0);return function(e){var o;(e=!0===e)&&(i=44),t||(t=!0,0>(o=125-(r.now()-n))&&(o=0),e||9>o&&f?s():d(s,o))}},q=function(e){var t,n,i=function(){t=null,e()},o=function e(){var t=r.now()-n;99>t?d(e,99-t):(f||i)(i)};return function(){n=r.now(),t||(t=d(o,99))}},N=function(){var s,u,f,m,v,S,N,k,M,R,_,T,j,W,D=/^img$/i,F=/^iframe$/i,P="onscroll"in e&&!/glebot/.test(navigator.userAgent),B=0,I=0,H=-1,$=function e(t){I--,t&&t.target&&b(t.target,e),(!t||0>I||!t.target)&&(I=0)},X=function(e,n){var i,r=e,s="hidden"==A(t.body,"visibility")||"hidden"!=A(e,"visibility");for(k-=n,_+=n,M-=n,R+=n;s&&(r=r.offsetParent)&&r!=t.body&&r!=o;)(s=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(i=r.getBoundingClientRect(),s=R>i.left&&M<i.right&&_>i.top-1&&k<i.bottom+1);return s},Y=function(){var e,r,a,c,d,f,y,v,p,g=n.elements;if((m=i.loadMode)&&8>I&&(e=g.length)){r=0,H++,null==j&&("expand"in i||(i.expand=o.clientHeight>500&&o.clientWidth>500?500:370),T=i.expand,j=T*i.expFactor),j>B&&1>I&&H>2&&m>2&&!t.hidden?(B=j,H=0):B=m>1&&H>1&&6>I?T:0;for(;e>r;r++)if(g[r]&&!g[r]._lazyRace)if(P)if((v=g[r][l]("data-expand"))&&(f=1*v)||(f=B),p!==f&&(S=innerWidth+f*W,N=innerHeight+f,y=-1*f,p=f),a=g[r].getBoundingClientRect(),(_=a.bottom)>=y&&(k=a.top)<=N&&(R=a.right)>=y*W&&(M=a.left)<=S&&(_||R||M||k)&&(i.loadHidden||"hidden"!=A(g[r],"visibility"))&&(u&&3>I&&!v&&(3>m||4>H)||X(g[r],f))){if(ee(g[r]),d=!0,I>9)break}else!d&&u&&!c&&4>I&&4>H&&m>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!v&&(_||R||M||k||"auto"!=g[r][l](i.sizesAttr)))&&(c=s[0]||g[r]);else ee(g[r]);c&&!d&&ee(c)}},Z=x(Y),G=function(e){h(e.target,i.loadedClass),w(e.target,i.loadingClass),b(e.target,K),z(e.target,"lazyloaded")},J=C(G),K=function(e){J({target:e.target})},Q=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},U=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},V=C(function(e,t,n,o,r){var s,a,c,u,m,v;(m=z(e,"lazybeforeunveil",t)).defaultPrevented||(o&&(n?h(e,i.autosizesClass):e.setAttribute("sizes",o)),a=e[l](i.srcsetAttr),s=e[l](i.srcAttr),r&&(c=e.parentNode,u=c&&y.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(a||s||u),m={target:e},v&&(b(e,$,!0),clearTimeout(f),f=d($,2500),h(e,i.loadingClass),b(e,K,!0)),u&&p.call(c.getElementsByTagName("source"),U),a?e.setAttribute("srcset",a):s&&!u&&(F.test(e.nodeName)?Q(e,s):e.src=s),r&&(a||u)&&E(e,{src:s})),e._lazyRace&&delete e._lazyRace,w(e,i.lazyClass),L(function(){(!v||e.complete&&e.naturalWidth>1)&&(v?$(m):I--,G(m))},!0)}),ee=function(e){var t,n=D.test(e.nodeName),o=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==o;(!r&&u||!n||!e[l]("src")&&!e.srcset||e.complete||g(e,i.errorClass))&&(t=z(e,"lazyunveilread").detail,r&&O.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,I++,V(e,t,r,o,n))},te=function e(){if(!u){if(r.now()-v<999)return void d(e,999);var t=q(function(){i.loadMode=3,Z()});u=!0,i.loadMode=3,Z(),c("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){v=r.now(),n.elements=t.getElementsByClassName(i.lazyClass),s=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),W=i.hFac,c("scroll",Z,!0),c("resize",Z,!0),e.MutationObserver?new MutationObserver(Z).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[a]("DOMNodeInserted",Z,!0),o[a]("DOMAttrModified",Z,!0),setInterval(Z,999)),c("hashchange",Z,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[a](e,Z,!0)}),/d$|^c/.test(t.readyState)?te():(c("load",te),t[a]("DOMContentLoaded",Z),d(te,2e4)),n.elements.length?(Y(),L._lsFlush()):Z()},checkElems:Z,unveil:ee}}(),O=function(){var e,n=C(function(e,t,n,i){var o,r,s;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),y.test(t.nodeName||""))for(o=t.getElementsByTagName("source"),r=0,s=o.length;s>r;r++)o[r].setAttribute("sizes",i);n.detail.dataAttr||E(e,n.detail)}),o=function(e,t,i){var o,r=e.parentNode;r&&(i=S(e,r,i),o=z(e,"lazybeforesizes",{width:i,dataAttr:!!t}),o.defaultPrevented||(i=o.detail.width)&&i!==e._lazysizesWidth&&n(e,r,o,i))},r=q(function(){var t,n=e.length;if(n)for(t=0;n>t;t++)o(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",r)},checkElems:r,updateElem:o}}(),k=function e(){e.i||(e.i=!0,O._(),N._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};i=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in i||(i[t]=n[t]);e.lazySizesConfig=i,d(function(){i.init&&k()})}(),n={cfg:i,autoSizer:O,loader:N,init:k,uP:E,aC:h,rC:w,hC:g,fire:z,gW:S,rAF:L}}});