"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function e(n){return void 0===this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(S=this,S.version="3.3.6",S.tools=new q,S.isSupported()?(S.tools.extend(S.defaults,n||{}),S.defaults.container=t(S.defaults),S.store={elements:{},containers:[]},S.sequences={},S.history=[],S.uid=0,S.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),S)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(S.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return S.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):S.tools.isNode(e)?[e]:S.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function i(){return++S.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=S.tools.extendClone(e.config,t):e.config=S.tools.extendClone(S.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function s(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=r(e,0),e.styles.transition.delayed=r(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function r(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function c(e){var t=e.config.container;t&&-1===S.store.containers.indexOf(t)&&S.store.containers.push(e.config.container),S.store.elements[e.id]=e}function l(e,t,n){var i={target:e,config:t,interval:n};S.history.push(i)}function d(){if(S.isSupported()){y();for(var e=0;e<S.store.containers.length;e++)S.store.containers[e].addEventListener("scroll",f),S.store.containers[e].addEventListener("resize",f);S.initialized||(window.addEventListener("scroll",f),window.addEventListener("resize",f),S.initialized=!0)}return S}function f(){x(y)}function u(){var e,t,n,i;S.tools.forOwn(S.sequences,function(o){i=S.sequences[o],e=!1;for(var s=0;s<i.elemIds.length;s++)n=i.elemIds[s],E(t=S.store.elements[n])&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),S.tools.forOwn(S.store.elements,function(n){t=S.store.elements[n],e=g(t),p(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),v("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):w(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),v("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=S.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,f()},Math.abs(o.interval)+i-n)}function v(e,t,n){var i=0,o=0,s="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),s+="Reveal";break;case"reset":o=t.config.duration,s+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[s](t.domEl),t.timer=null},o-i)}function p(e){if(e.sequence){var t=S.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return E(e)&&!e.revealing&&!e.disabled}function g(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!S.initialized||"once"===t&&!e.seen}function w(e){return e.sequence?!S.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled:!E(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=L(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function L(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function E(e){var t=L(e.domEl),n=b(e.config.container),i=h(e.config.container),o=e.config.viewFactor,s=t.height,r=t.width,a=t.top,c=t.left,l=a+s,d=c+r;return function(){var t=a+s*o,f=c+r*o,u=l-s*o,y=d-r*o,m=i.y+e.config.viewOffset.top,v=i.x+e.config.viewOffset.left,p=i.y-e.config.viewOffset.bottom+n.height,g=i.x-e.config.viewOffset.right+n.width;return t<p&&u>m&&f<g&&y>v}()||"fixed"===window.getComputedStyle(e.domEl).position}function q(){}var S,x;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,r,a,f){var u,y,m,v,p,g;if(void 0!==r&&"number"==typeof r?(a=r,r={}):void 0!==r&&null!==r||(r={}),u=t(r),!(y=n(e,u)).length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),S;a&&"number"==typeof a&&(g=i(),p=S.sequences[g]={id:g,interval:a,elemIds:[],active:!1});for(var w=0;w<y.length;w++)(v=y[w].getAttribute("data-sr-id"))?m=S.store.elements[v]:(m={id:i(),domEl:y[w],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",m.id),p&&(m.sequence={id:p.id,index:p.elemIds.length},p.elemIds.push(m.id)),o(m,r,u),s(m),c(m),S.tools.isMobile()&&!m.config.mobile||!S.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!f&&S.isSupported()&&(l(e,r,a),S.initTimeout&&window.clearTimeout(S.initTimeout),S.initTimeout=window.setTimeout(d,0)),S},e.prototype.sync=function(){if(S.history.length&&S.isSupported()){for(var e=0;e<S.history.length;e++){var t=S.history[e];S.reveal(t.target,t.config,t.interval,!0)}d()}else console.log("ScrollReveal: sync failed, no reveals found.");return S},q.prototype.isObject=function(e){return null!==e&&"object"===(void 0===e?"undefined":_typeof(e))&&e.constructor===Object},q.prototype.isNode=function(e){return"object"===_typeof(window.Node)?e instanceof window.Node:e&&"object"===(void 0===e?"undefined":_typeof(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},q.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"===_typeof(window.NodeList)?e instanceof window.NodeList:e&&"object"===(void 0===e?"undefined":_typeof(e))&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},q.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+(void 0===e?"undefined":_typeof(e))+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},q.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},q.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},q.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"===_typeof(define.amd)&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}(),window.addEventListener("DOMContentLoaded",function(){function e(e,t,n){var i=e.querySelector(".js-"+n);e.classList.add(t),r(e,!0),e.dataset.device=t,i.classList.add("active"),i.play(),u=!0}function t(e,t,n){var i=e.querySelector(".js-"+t),o=new RegExp(n+".html","g"),s=window.location.href.replace(o,"");window.location.href=""+s+i.dataset.src}function n(e){r(e,!1),u=!1}function i(e,t){var n=e.querySelector("video.active");n.load(),n.classList.remove("active"),e.classList.remove(t),e.dataset.device=""}function o(e){return e.parentNode.dataset.device}function s(e){return e.dataset.video}function r(e,t){t?(e.classList.add("activated"),e.classList.remove("desactivated")):(e.classList.add("desactivated"),e.classList.remove("activated"))}function a(e,t,n,i){null!==t&&e.classList.remove(t),e.classList.add(n),e.classList.remove(i)}var c=Array.from(document.querySelectorAll(".js-cta")),l=document.querySelector(".animate-device"),d=document.querySelector(".overlay"),f=document.querySelector(".close-overlay"),u=!1;c.map(function(n){return n.addEventListener("click",function(){window.innerWidth>768?(e(l,o(this),s(this)),a(d,"off","active","inactive"),a(f,"off","activated","desactivated")):t(l,s(this),"index")})}),d.addEventListener("click",function(){n(l),a(f,null,"desactivated","activated"),a(this,null,"inactive","active")}),d.addEventListener("animationend",function(){u||this.classList.add("off")}),f.addEventListener("click",function(){n(l),a(f,null,"desactivated","activated"),a(d,null,"inactive","active")}),f.addEventListener("animationend",function(){u||this.classList.add("off")}),l.addEventListener("animationend",function(){u||i(this,this.dataset.device)})}),window.addEventListener("load",function(){Array.from(document.querySelectorAll(".lazy-image")).map(function(e){e.src=e.dataset.src,e.srcset=e.dataset.srcset})}),window.addEventListener("DOMContentLoaded",function(){window.innerWidth>768&&(window.sr=ScrollReveal({origin:"top",duration:600,easing:"ease-out",distance:"4%"}),sr.reveal(".js-sr"))});