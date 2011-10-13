/*Version:0.6.0*/
/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
(function(){var e=Math,s=(/webkit/i).test(navigator.appVersion)?"webkit":(/firefox/i).test(navigator.userAgent)?"Moz":"opera" in window?"O":"",n="WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix(),k="ontouchstart" in window,c=s+"Transform" in document.documentElement.style,p=(/android/gi).test(navigator.appVersion),r=(/iphone|ipad/gi).test(navigator.appVersion),a=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(m){window.setTimeout(m,17)}})(),o="onorientationchange" in window?"orientationchange":"resize",g=k?"touchstart":"mousedown",f=k?"touchmove":"mousemove",h=k?"touchend":"mouseup",d=k?"touchcancel":"mouseup",q=s=="Moz"?"DOMMouseScroll":"mousewheel",b="translate"+(n?"3d(":"("),j=n?",0)":")",t=function(v,m){var w=this,x=document,u;w.wrapper=typeof v=="object"?v:x.getElementById(v);w.wrapper.style.overflow="hidden";w.scroller=w.wrapper.children[0];w.options={hScroll:true,vScroll:true,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:p,hideScrollbar:r,fadeScrollbar:r&&n,scrollbarClass:"",zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(y){y.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(u in m){w.options[u]=m[u]}w.options.useTransform=c?w.options.useTransform:false;w.options.hScrollbar=w.options.hScroll&&w.options.hScrollbar;w.options.vScrollbar=w.options.vScroll&&w.options.vScrollbar;w.options.zoom=w.options.useTransform&&w.options.zoom;w.scroller.style[s+"TransitionProperty"]=w.options.useTransform?"-"+s.toLowerCase()+"-transform":"top left";w.scroller.style[s+"TransitionDuration"]="0";w.scroller.style[s+"TransformOrigin"]="0 0";if(w.options.useTransform){w.scroller.style[s+"Transform"]=b+"0,0"+j}else{w.scroller.style.cssText+=";top:0;left:0"}w.refresh();w._bind(o,window);if(!k){w._bind("mouseout",w.wrapper)}w._bind(g);w._bind(q)};t.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],handleEvent:function(u){var m=this;switch(u.type){case g:m._start(u);break;case f:m._move(u);break;case h:case d:m._end(u);break;case o:m._resize();break;case q:m._wheel(u);break;case"mouseout":m._mouseout(u);break}},_scrollbar:function(m){var v=this,w=document,u;if(!v[m+"Scrollbar"]){if(v[m+"ScrollbarWrapper"]){if(c){v[m+"ScrollbarIndicator"].style[s+"Transform"]=""}v[m+"ScrollbarWrapper"].parentNode.removeChild(v[m+"ScrollbarWrapper"]);v[m+"ScrollbarWrapper"]=null;v[m+"ScrollbarIndicator"]=null}return}if(!v[m+"ScrollbarWrapper"]){u=w.createElement("div");if(v.options.scrollbarClass){u.className=v.options.scrollbarClass+m.toUpperCase()}else{u.style.cssText="position:absolute;z-index:100;"+(m=="h"?"height:7px;bottom:1px;left:2px;right:"+(v.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(v.hScrollbar?"7":"2")+"px;top:2px;right:1px")}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:opacity;-"+s+"-transition-duration:"+(v.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(v.options.hideScrollbar?"0":"1");v.wrapper.appendChild(u);v[m+"ScrollbarWrapper"]=u;u=w.createElement("div");if(!v.options.scrollbarClass){u.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+s+"-background-clip:padding-box;-"+s+"-box-sizing:border-box;"+(m=="h"?"height:100%":"width:100%")+";-"+s+"-border-radius:3px;border-radius:3px"}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:-"+s+"-transform;-"+s+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+s+"-transition-duration:0;-"+s+"-transform:"+b+"0,0"+j;v[m+"ScrollbarWrapper"].appendChild(u);v[m+"ScrollbarIndicator"]=u}if(m=="h"){v.hScrollbarSize=v.hScrollbarWrapper.clientWidth;v.hScrollbarIndicatorSize=e.max(e.round(v.hScrollbarSize*v.hScrollbarSize/v.scrollerW),8);v.hScrollbarIndicator.style.width=v.hScrollbarIndicatorSize+"px";v.hScrollbarMaxScroll=v.hScrollbarSize-v.hScrollbarIndicatorSize;v.hScrollbarProp=v.hScrollbarMaxScroll/v.maxScrollX}else{v.vScrollbarSize=v.vScrollbarWrapper.clientHeight;v.vScrollbarIndicatorSize=e.max(e.round(v.vScrollbarSize*v.vScrollbarSize/v.scrollerH),8);v.vScrollbarIndicator.style.height=v.vScrollbarIndicatorSize+"px";v.vScrollbarMaxScroll=v.vScrollbarSize-v.vScrollbarIndicatorSize;v.vScrollbarProp=v.vScrollbarMaxScroll/v.maxScrollY}v._scrollbarPos(m,true)},_resize:function(){this.refresh()},_pos:function(m,u){m=this.hScroll?m:0;u=this.vScroll?u:0;if(this.options.useTransform){this.scroller.style[s+"Transform"]=b+m+"px,"+u+"px"+j+" scale("+this.scale+")"}else{m=e.round(m);u=e.round(u);this.scroller.style.left=m+"px";this.scroller.style.top=u+"px"}this.x=m;this.y=u;this._scrollbarPos("h");this._scrollbarPos("v")},_scrollbarPos:function(m,w){var v=this,x=m=="h"?v.x:v.y,u;if(!v[m+"Scrollbar"]){return}x=v[m+"ScrollbarProp"]*x;if(x<0){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]+e.round(x*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px"}x=0}else{if(x>v[m+"ScrollbarMaxScroll"]){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]-e.round((x-v[m+"ScrollbarMaxScroll"])*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px";x=v[m+"ScrollbarMaxScroll"]+(v[m+"ScrollbarIndicatorSize"]-u)}else{x=v[m+"ScrollbarMaxScroll"]}}}v[m+"ScrollbarWrapper"].style[s+"TransitionDelay"]="0";v[m+"ScrollbarWrapper"].style.opacity=w&&v.options.hideScrollbar?"0":"1";v[m+"ScrollbarIndicator"].style[s+"Transform"]=b+(m=="h"?x+"px,0":"0,"+x+"px")+j},_start:function(B){var A=this,u=k?B.touches[0]:B,v,m,C,z,w;if(!A.enabled){return}if(A.options.onBeforeScrollStart){A.options.onBeforeScrollStart.call(A,B)}A.moved=false;A.animating=false;A.zoomed=false;A.distX=0;A.distY=0;A.absDistX=0;A.absDistY=0;A.dirX=0;A.dirY=0;if(A.options.zoom&&k&&B.touches.length>1){z=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);A.touchesDistStart=e.sqrt(z*z+w*w);A.originX=e.abs(B.touches[0].pageX+B.touches[1].pageX-A.wrapperOffsetLeft*2)/2-A.x;A.originY=e.abs(B.touches[0].pageY+B.touches[1].pageY-A.wrapperOffsetTop*2)/2-A.y}if(A.options.momentum){if(A.options.useTransform){v=getComputedStyle(A.scroller,null)[s+"Transform"].replace(/[^0-9-.,]/g,"").split(",");m=v[4]*1;C=v[5]*1}else{m=getComputedStyle(A.scroller,null).left.replace(/[^0-9-]/g,"")*1;C=getComputedStyle(A.scroller,null).top.replace(/[^0-9-]/g,"")*1}if(m!=A.x||C!=A.y){A.steps=[];A._pos(m,C)}}A.absStartX=A.x;A.absStartY=A.y;A.startX=A.x;A.startY=A.y;A.pointX=u.pageX;A.pointY=u.pageY;A.startTime=B.timeStamp||(new Date()).getTime();if(A.options.onScrollStart){A.options.onScrollStart.call(A,B)}A._bind(f);A._bind(h);A._bind(d)},_move:function(B){var z=this,C=k?B.touches[0]:B,x=C.pageX-z.pointX,v=C.pageY-z.pointY,m=z.x+x,D=z.y+v,y,w,u,A=B.timeStamp||(new Date()).getTime();if(z.options.onBeforeScrollMove){z.options.onBeforeScrollMove.call(z,B)}if(z.options.zoom&&k&&B.touches.length>1){y=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);z.touchesDist=e.sqrt(y*y+w*w);z.zoomed=true;u=1/z.touchesDistStart*z.touchesDist*this.scale;if(u<0.5){u=0.5}else{if(u>z.options.zoomMax){u=z.options.zoomMax}}z.lastScale=u/this.scale;m=this.originX-this.originX*z.lastScale+this.x,D=this.originY-this.originY*z.lastScale+this.y;this.scroller.style[s+"Transform"]=b+m+"px,"+D+"px"+j+" scale("+u+")";return}z.pointX=C.pageX;z.pointY=C.pageY;if(m>0||m<z.maxScrollX){m=z.options.bounce?z.x+(x/2):m>=0||z.maxScrollX>=0?0:z.maxScrollX}if(D>0||D<z.maxScrollY){D=z.options.bounce?z.y+(v/2):D>=0||z.maxScrollY>=0?0:z.maxScrollY}if(z.absDistX<6&&z.absDistY<6){z.distX+=x;z.distY+=v;z.absDistX=e.abs(z.distX);z.absDistY=e.abs(z.distY);return}if(z.options.lockDirection){if(z.absDistX>z.absDistY+5){D=z.y;v=0}else{if(z.absDistY>z.absDistX+5){m=z.x;x=0}}}z.moved=true;z._pos(m,D);z.dirX=x>0?-1:x<0?1:0;z.dirY=v>0?-1:v<0?1:0;if(A-z.startTime>300){z.startTime=A;z.startX=z.x;z.startY=z.y}if(z.options.onScrollMove){z.options.onScrollMove.call(z,B)}},_end:function(z){if(k&&z.touches.length!=0){return}var x=this,F=k?z.changedTouches[0]:z,A,E,v={dist:0,time:0},m={dist:0,time:0},w=(z.timeStamp||(new Date()).getTime())-x.startTime,B=x.x,y=x.y,D,C,u;x._unbind(f);x._unbind(h);x._unbind(d);if(x.options.onBeforeTouchEnd){x.options.onBeforeTouchEnd.call(x,z)}if(x.zoomed){x.scale=x.scale*x.lastScale;x.x=x.originX-x.originX*x.lastScale+x.x;x.y=x.originY-x.originY*x.lastScale+x.y;x.scroller.style.webkitTransform=b+x.x+"px,"+x.y+"px"+j+" scale("+x.scale+")";x.refresh();return}if(!x.moved){if(k){if(x.doubleTapTimer&&x.options.zoom){clearTimeout(x.doubleTapTimer);x.doubleTapTimer=null;x.zoom(x.pointX,x.pointY,x.scale==1?x.options.doubleTapZoom:1)}else{x.doubleTapTimer=setTimeout(function(){x.doubleTapTimer=null;A=F.target;while(A.nodeType!=1){A=A.parentNode}if(A.tagName!="SELECT"&&A.tagName!="INPUT"&&A.tagName!="TEXTAREA"){E=document.createEvent("MouseEvents");E.initMouseEvent("click",true,true,z.view,1,F.screenX,F.screenY,F.clientX,F.clientY,z.ctrlKey,z.altKey,z.shiftKey,z.metaKey,0,null);E._fake=true;A.dispatchEvent(E)}},x.options.zoom?250:0)}}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(w<300&&x.options.momentum){v=B?x._momentum(B-x.startX,w,-x.x,x.scrollerW-x.wrapperW+x.x,x.options.bounce?x.wrapperW:0):v;m=y?x._momentum(y-x.startY,w,-x.y,(x.maxScrollY<0?x.scrollerH-x.wrapperH+x.y:0),x.options.bounce?x.wrapperH:0):m;B=x.x+v.dist;y=x.y+m.dist;if((x.x>0&&B>0)||(x.x<x.maxScrollX&&B<x.maxScrollX)){v={dist:0,time:0}}if((x.y>0&&y>0)||(x.y<x.maxScrollY&&y<x.maxScrollY)){m={dist:0,time:0}}}if(v.dist||m.dist){u=e.max(e.max(v.time,m.time),10);if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(B,y);B=snap.x;y=snap.y;u=e.max(snap.time,u)}}x.scrollTo(B,y,u);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(x.x,x.y);if(snap.x!=x.x||snap.y!=x.y){x.scrollTo(snap.x,snap.y,snap.time)}}if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}},_resetPos:function(v){var m=this,w=m.x>=0?0:m.x<m.maxScrollX?m.maxScrollX:m.x,u=m.y>=0||m.maxScrollY>0?0:m.y<m.maxScrollY?m.maxScrollY:m.y;if(w==m.x&&u==m.y){if(m.moved){if(m.options.onScrollEnd){m.options.onScrollEnd.call(m)}m.moved=false}if(m.hScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.hScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.hScrollbarWrapper.style.opacity="0"}if(m.vScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.vScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.vScrollbarWrapper.style.opacity="0"}return}m.scrollTo(w,u,v||0)},_wheel:function(w){var v=this,u,m;if("wheelDeltaX" in w){u=v.x+w.wheelDeltaX/12,m=v.y+w.wheelDeltaY/12}else{if("detail" in w){u=v.x-w.detail*3,m=v.y-w.detail*3}else{u=v.x-w.wheelDelta,m=v.y-w.wheelDelta}}if(u>0){u=0}else{if(u<v.maxScrollX){u=v.maxScrollX}}if(m>0){m=0}else{if(m<v.maxScrollY){m=v.maxScrollY}}v.scrollTo(u,m,0)},_mouseout:function(u){var m=u.relatedTarget;if(!m){this._end(u);return}while(m=m.parentNode){if(m==this.wrapper){return}}this._end(u)},_startAni:function(){var z=this,u=z.x,m=z.y,x=(new Date).getTime(),y,w;if(z.animating){return}if(!z.steps.length){z._resetPos(200);return}y=z.steps.shift();if(y.x==u&&y.y==m){y.time=0}z.animating=true;z.moved=true;(function v(){var A=(new Date).getTime(),C,B;if(A>=x+y.time){z._pos(y.x,y.y);z.animating=false;if(z.options.onAnimationEnd){z.options.onAnimationEnd.call(z)}z._startAni();return}A=(A-x)/y.time-1;w=e.sqrt(1-A*A);C=(y.x-u)*w+u;B=(y.y-m)*w+m;z._pos(C,B);if(z.animating){a(v)}})()},_momentum:function(A,u,y,m,C){var z=0.0006,v=e.abs(A)/u,w=(v*v)/(2*z),B=0,x=0;if(A>0&&w>y){x=C/(6/(w/v*z));y=y+x;v=v*y/w;w=y}else{if(A<0&&w>m){x=C/(6/(w/v*z));m=m+x;v=v*m/w;w=m}}w=w*(A<0?-1:1);B=v/z;return{dist:w,time:e.round(B)}},_offset:function(m){var v=-m.offsetLeft,u=-m.offsetTop;while(m=m.offsetParent){v-=m.offsetLeft;u-=m.offsetTop}return{left:v,top:u}},_snap:function(D,C){var A=this,z,w,B,v,u,m;B=A.pagesX.length-1;for(z=0,w=A.pagesX.length;z<w;z++){if(D>=A.pagesX[z]){B=z;break}}if(B==A.currPageX&&B>0&&A.dirX<0){B--}D=A.pagesX[B];u=e.abs(D-A.pagesX[A.currPageX]);u=u?e.abs(A.x-D)/u*500:0;A.currPageX=B;B=A.pagesY.length-1;for(z=0;z<B;z++){if(C>=A.pagesY[z]){B=z;break}}if(B==A.currPageY&&B>0&&A.dirY<0){B--}C=A.pagesY[B];m=e.abs(C-A.pagesY[A.currPageY]);m=m?e.abs(A.y-C)/m*500:0;A.currPageY=B;v=e.round(e.max(u,m))||200;return{x:D,y:C,time:v}},_bind:function(v,u,m){(u||this.scroller).addEventListener(v,this,!!m)},_unbind:function(v,u,m){(u||this.scroller).removeEventListener(v,this,!!m)},destroy:function(){var m=this;m.scroller.style[s+"Transform"]="";m.hScrollbar=false;m.vScrollbar=false;m._scrollbar("h");m._scrollbar("v");m._unbind(o);m._unbind(g);m._unbind(f);m._unbind(h);m._unbind(d);m._unbind("mouseout",m.wrapper);m._unbind(q);if(m.options.onDestroy){m.options.onDestroy.call(m)}},refresh:function(){var m=this,v,w=0,u=0;if(m.scale<m.options.zoomMin){m.scale=m.options.zoomMin}m.wrapperW=m.wrapper.clientWidth;m.wrapperH=m.wrapper.clientHeight;if(!m.wrapperW||!m.wrapperH){m.disable();return}m.scrollerW=e.round(m.scroller.offsetWidth*m.scale);m.scrollerH=e.round(m.scroller.offsetHeight*m.scale);m.maxScrollX=m.wrapperW-m.scrollerW;m.maxScrollY=m.wrapperH-m.scrollerH;m.dirX=0;m.dirY=0;m.hScroll=m.options.hScroll&&m.maxScrollX<0;m.vScroll=m.options.vScroll&&(!m.options.bounceLock&&!m.hScroll||m.scrollerH>m.wrapperH);m.hScrollbar=m.hScroll&&m.options.hScrollbar;m.vScrollbar=m.vScroll&&m.options.vScrollbar&&m.scrollerH>m.wrapperH;v=m._offset(m.wrapper);m.wrapperOffsetLeft=-v.left;m.wrapperOffsetTop=-v.top;if(typeof m.options.snap=="string"){m.pagesX=[];m.pagesY=[];els=m.scroller.querySelectorAll(m.options.snap);for(i=0,l=els.length;i<l;i++){w=m._offset(els[i]);w.left+=m.wrapperOffsetLeft;w.top+=m.wrapperOffsetTop;m.pagesX[i]=w.left<m.maxScrollX?m.maxScrollX:w.left*m.scale;m.pagesY[i]=w.top<m.maxScrollY?m.maxScrollY:w.top*m.scale}}else{if(m.options.snap){m.pagesX=[];while(w>=m.maxScrollX){m.pagesX[u]=w;w=w-m.wrapperW;u++}if(m.maxScrollX%m.wrapperW){m.pagesX[m.pagesX.length]=m.maxScrollX-m.pagesX[m.pagesX.length-1]+m.pagesX[m.pagesX.length-1]}w=0;u=0;m.pagesY=[];while(w>=m.maxScrollY){m.pagesY[u]=w;w=w-m.wrapperH;u++}if(m.maxScrollY%m.wrapperH){m.pagesY[m.pagesY.length]=m.maxScrollY-m.pagesY[m.pagesY.length-1]+m.pagesY[m.pagesY.length-1]}}}m._scrollbar("h");m._scrollbar("v");m.scroller.style[s+"TransitionDuration"]="0";m._resetPos(200)},scrollTo:function(m,C,B,A){var z=this,w=m,v,u;if(!w.length){w=[{x:m,y:C,time:B,relative:A}]}for(v=0,u=w.length;v<u;v++){if(w[v].relative){w[v].x=z.x-w[v].x;w[v].y=z.y-w[v].y}z.steps.push({x:w[v].x,y:w[v].y,time:w[v].time||0})}z._startAni()},scrollToElement:function(m,v){var u=this,w;m=m.nodeType?m:u.scroller.querySelector(m);if(!m){return}w=u._offset(m);w.left+=u.wrapperOffsetLeft;w.top+=u.wrapperOffsetTop;w.left=w.left>0?0:w.left<u.maxScrollX?u.maxScrollX:w.left;w.top=w.top>0?0:w.top<u.maxScrollY?u.maxScrollY:w.top;v=v===undefined?e.max(e.abs(w.x)*2,e.abs(w.y)*2):v;u.scrollTo(w.left,w.top,v)},scrollToPage:function(v,u,z){var w=this,m,A;if(w.options.snap){v=v=="next"?w.currPageX+1:v=="prev"?w.currPageX-1:v;u=u=="next"?w.currPageY+1:u=="prev"?w.currPageY-1:u;v=v<0?0:v>w.pagesX.length-1?w.pagesX.length-1:v;u=u<0?0:u>w.pagesY.length-1?w.pagesY.length-1:u;w.currPageX=v;w.currPageY=u;m=w.pagesX[v];A=w.pagesY[u]}else{m=-w.wrapperW*v;A=-w.wrapperH*u;if(m<w.maxScrollX){m=w.maxScrollX}if(A<w.maxScrollY){A=w.maxScrollY}}w.scrollTo(m,A,z||400)},disable:function(){this.enabled=false;this._unbind(f);this._unbind(h);this._unbind(d)},enable:function(){this.enabled=true},stop:function(){this.steps=[];this.moved=false;this.animating=false;this._resetPos(200)},zoom:function(m,A,z,w){var u=this,v=z/u.scale;if(!u.options.useTransform){return}w=(w||200)+"ms";m=m-u.wrapperOffsetLeft-u.x;A=A-u.wrapperOffsetTop-u.y;u.x=m-m*v+u.x;u.y=A-A*v+u.y;u.scale=z;u.scroller.style[s+"TransitionDuration"]=w;u.scroller.style[s+"Transform"]=b+u.x+"px,"+u.y+"px"+j+" scale("+z+")";u.refresh()}};if(typeof exports!=="undefined"){exports.iScroll=t}else{window.iScroll=t}})();/*
    http://www.JSON.org/json2.js
    2010-08-25

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
if (!this.JSON) {
  this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
  /*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/


/**
 * bc is the namespace for all of the functions, properties and events available through the Brightcove App Cloud SDK.
 * @namespace
 */
var bc = {};

/**
 * Brightcove core is responsible for communicating with the Brightcove App Cloud server, storing the responses from the server
 * and messaging the appropriate events.
 * @namespace
 * @requires jquery-1.5.min.js
 * @requires brightcove.mobile.utils.js  
 */
bc.core = {};

/**
 * Import required 3rd party libraries and namespace so as not to conflict with other versions
 */
bc.lib = {};

// namespace our version of jQuery and reset the global vars of $,jQuery back to what they were
( function() {
  bc.lib.jQuery = jQuery.noConflict(true);    
  if ( jQuery === undefined ) {
    jQuery = bc.lib.jQuery;
    $ = jQuery;    
  }
})();

( function( $, undefined ) {
  //tracks whether or not we have set ads yet.
  var _adsSet;
  
  /** The URL of the server that will supply the data.  This is the Brightcove URL */
  bc.SERVER_URL = ( "%SERVER_URL%".indexOf( "%" ) > -1 ) ? "http://read.appcloud.brightcove.com" : "%SERVER_URL%";
  
  /** The URL of the server we will send metrics to. */
  bc.METRICS_SERVER_URL = ( "%METRICS_SERVER_URL%".indexOf( "%" ) > -1 ) ? "http://192.168.242.60" : "%METRICS_SERVER_URL%";
  
  /** The ID of the current application.  This is a unique ID that was assigned at time of application creation inside the Brightcove App Cloud Studio. */
  bc.appID = null;
  
  /** The ID of the current view.  This is a unique ID that was assigned at time of application creation inside the Brightcove App Cloud Studio. */
  bc.viewID = null;
  
  /** @private The SQLite database that we use to track our localStorage usage.  See bc.core.cache and pruneCache to see how this is used. */
  bc.db = null;
  
    /**
   * Context object that exposes information related to the current state of the application.  The following properties exist
   * on the context object:
   * <ul>
   *   <li>viewOrientation: A string that will match either 'portrait' or 'landscape'.  Represents the orientation of the view on the phone.  NOTE:
   *       this is different from device orientation.  For example, the phone might actually be held in landscape mode but the view does not autorotate,
   *       in which case the view would still be in 'portrait' mode.</li>
   *   <li>os: A string that will match either "ios" or "android". </li>
   *   <li>isNative: A boolean value indicating whether or not we are running inside a native container on a device.</li>
   * </ul>
   * @namespace
   */
  bc.context = {}; 

  /** 
   * The different types of mode our application can be running in.
   * @namespace
   */
  bc.core.mode = {};

  /** An application is in development mode if it has not been ingested into the Brightcove App Cloud Studio. */
  bc.core.mode.DEVELOPMENT = "development";
  /** An application is in production mode once it has been ingested and published by the Brightcove App Cloud Studio. */
  bc.core.mode.PRODUCTION = "production";
  /** An application is in preview mode if it is either being previewed inside the Brightcove App Cloud Studio or inside the Brightcove extension toolkit.*/
  bc.core.mode.PREVIEW = "preview";
  /** The current mode that our application is running in. */
  bc.core.current_mode = bc.core.mode.DEVELOPMENT;
  
  /**
   * Depending on whether or not two values are passed into the cache function, it will either read values from or write 
   * values to the localStorage.  Note that there is a limit of 5MB that can be stored in this cache 
   * at any given time.  If this cache fills up then we will remove half the items from the cache.  We use a 
   * LRU (least recently used) cache algorithm to select what should be removed.
   *
   * @param key The key for where the value is stored.
   * @param value The value that should be stored in the localStorage.
   * @return If only a key is passed in then the value is returned or null if no value is found.
   * @example 
   //Note that the cache is persisted across startups.
   bc.core.cache( "whales" ); //returns null because it has never been set.  
   bc.core.cache( "whales", "a pod of whales" );
   bc.core.cache( "whales" ); //returns "a pod of whales"
   */
  bc.core.cache = function( key, value ) {
    var ret,
        parsedValue;
    try {
      if( value ){
        try {
          value = JSON.stringify( value );
          window.localStorage.setItem( key, value );
          updateDB( key );
        } catch( e ) {
          bc.utils.warn( "ERROR: we are assuming that our local storage is full and will now remove half of the existing cache:" + e.toString() );
          pruneCache();
        }        
      } else {
        ret = JSON.parse( window.localStorage.getItem( key ) );
        if( ret !== null ) {
          try {
            updateDB( key );
          } catch ( e ) {
            bc.utils.warn( 'ERROR: we were unable to updated the DB with this cache hit' );
          }
        }
        return ret;
      }
    } catch( e ) {
      bc.utils.warn( "Error storing and/or receiving values in local storage: " + e.toString() );
      return null;
    } 
  };

  /**
   * Fetches the data for this contentFeed.  This can take in a contentFeed ID or the name of a feed defined in the manifest.json file for this view.
   *
   * @param contentFeed The ID of the contentFeed or the name of the feed if configurations are defined in the manifest.json file.  The contentFeed ID can be found in the content section of the App Cloud studio.
   * @param successCallback The function to call once the data has been retrieved.
   * @param errorCallback The function to call if there is an error retrieving data.
   * @param options An object defining the options for this request.  Possible values are:
        <ul>
          <li> parameterizedFeedValues: The query params to pass to the contentFeed as parameters.  See contentFeeds for how parameterized feeds work.  Defaults to "".<li>
          <li> requestTimeout:  Number milliseconds before the request is timedout and the error callback is called.  By default it is 30000 ms.
        </ul>
   * @example 

    bc.core.getData( "xxxxxxxxxx", 
      successHandler, 
      errorHandler, 
      { "parameterizedFeedValues": 
        { "loc": "01950" } 
      }
    );
    
    function successHandler( data ) {
      //Do something with the data.
    }
    
    function errorHandler() {
      //Handle the error gracefully.
    }
   */
  bc.core.getData = function( contentFeed, successCallback, errorCallback, options ) {
    var data,
        url,
        settings,
        defaults = { 
          "parameterizedFeedValues": "",
          "requestTimeout": 30000
        };
    settings = $.extend( {}, defaults, options );
    $.ajax( 
      { 
        url: getContentFeedURL( contentFeed ),
        timeout: settings.requestTimeout,
        dataType: "jsonp",
        data: ( options && options.parameterizedFeedValues ) ? { "query_params": options.parameterizedFeedValues } : "",
        success: success,
        error: error
      }
    );
    
    function success( results ) {
      if( results.status !== undefined ) {
        
        if( results.status === "ok" && results.data !== undefined ) {
          successCallback && successCallback( results.data );
        } else {
          errorCallback && errorCallback();
        }
        
      } else {
        //The /named_feed/{id}/fetch does not return a status.
        successCallback && successCallback( results );
      }
    }

    function error() {
      console.warn( "There was an error fetching content for contentFeed: " + contentFeed );
      errorCallback && errorCallback();
    }
  };

  /**
   * Gets a configuration from the configurations defined in the manifest.js file.  All of the configurations for this view are 
   * available on the bc.configurations property.  Additionally, the entire manifest.js is available at the global variable of manifest.
   * @param options An object that specifies the configuration type to get and the property to find.  Possible values are:
     <ul>
      <li> type: The configuration type, which can be a data, style or setting. </li>
      <li> name: The name of the value to get for the configuration.</li>
    </ul>
    @return The corresponding value for the key inside the type that was passed in or null if no value was found.
    @private
   */
  bc.core.getManifestConfiguration = function( options ) {
    var data;
    if( bc.configurations && options !== undefined && bc.configurations[options.type] !== undefined ) {
      data = bc.configurations[options.type];

      for( var i = 0, len = data.length; i < len; i++ ) {
        if( data[i].name === options.name ) {
          return ( data[i].value !== undefined ? data[i].value : getFeedValue( data[i] ) );
        }
      }
    }
    return null;
    
    function getFeedValue( obj ) {
      return ( obj.contentFeed ) ? obj.contentFeed : obj.contentConnector;
    }
  };

  /**
   * Retrieves the styles from the cache for the current view.
   * 
   * @return It is expected that most developers will call applyStyles which both gets the styles and also renders them to the page.
   * This function will return an object that contains the styles for this particular view or an empty object if no styles are found.
   * @example 
   // Styles is an object.
   var styles = bc.core.getStyles();
   */
  bc.core.getStyles = function() {
    var styles = bc.core.cache( bc.viewID + "_styles" );
    
    if( styles === null && bc.configurations && bc.configurations.styles !== undefined ) {
      styles = bc.configurations.styles;
    }
    
    return ( styles === null ) ? {} : styles;
  };
  
  /**
   * Applies the styles that are set in the Brightcove App Cloud studio to the elements.
   *
   * @param styles A JSON object that are the styles for this view.  This object is passed as a data
   * parameter to the bc:newconfiguration event fired on the bc object.
   *
   @example 
   $( bc ).bind( "bc:newconfiguration", function( evt, data ) {
     bc.applyStyles( data.styles ); //The new styles, such as background colors are now applied.
   });
   */
  bc.core.applyStyles = function( styles ) {
    var $styleElement,
        cssString = "";
        
    styles = styles || bc.core.getStyles();

    for( var i = 0, len = styles.length; i < len; i++ ) {
      //We are setting the !important tag in order to override any specificity issues since we know this is the style we want.
      cssString += "." + styles[i].name + " { " + styles[i].attribute + ":" + styles[i].value + " !important; } \n";
    }

    //Remove any existing stylesheets we have injected
    $( ".injected-style" ).remove();

    $styleElement = $( "<style>" ).attr( "type", "text/css" )
                                  .addClass("injected-style" )
                                  .html( cssString )
                                  .appendTo( "head" );      
  };
  
  /**
   * Retrieves a specific style.  First looks to the cache to get the value, then the manifest and if not found in either of
   * places will return an empty object.
   *
   *@param nameOfStyle The name of the style to retrieved.  (name should correspond to the name in the manifest file.)
   *@return An object that has the css class name and the value.
   *@example
   var backgroundStyle = bc.core.getStyle( "background-page-color" ); //background-page-color is the name of the style defined in the manifest file.
   alert( backgroundStyle.cssClass ); //alerts "background-color"
   alert( backgroundStyle.value ); //alerts the value set by the server, for example "#FF00000" 
   */
  bc.core.getStyle = function( nameOfStyle) {
    return findValueInObject( bc.core.getStyles(), nameOfStyle );
  };

  /**
   * Retrieves the settings from the cache for the current view.
   * 
   * @return An object that contains the settings for this particular view or an empty object if no settings are found.
   * @example 
   // Settings is an object.
   var setting = bc.core.getSettings();
   if( bc.core.getSetting( "numberOfColumns" ) > 2 ) {
     //render grid layout.
   }
   */
  bc.core.getSettings = function() {
    var settings = bc.core.cache( bc.viewID + "_settings" );
    
    if( settings === null && bc.configurations && bc.configurations.settings ) {
      settings = bc.configurations.settings;
    }
    
    return ( settings === null ) ? {} : settings;
  };
  
  /**
   * bc.core.getSetting is a helper function to get the value of a particular setting.  The reason this is
   * helpful is that the settings for a view are stored as an Array.
   * @param nameOfSetting The name of the setting you would like the value for.  This should correspond to the name provided in
   * the manifest.json file.
   * @example
   var title = bc.core.getSetting( "titlOfPage" );
   alert( "The title of the page that was defined in the manifest.json and set in the studio: " + title );
   */
  bc.core.getSetting = function( nameOfSetting ) {
    return findValueInObject( bc.core.getSettings(), nameOfSetting ).value;
  };
  
  /**
   * <b>Deprecated: use getData</b>fetchContentFeed makes a request to the app cloud studio to get the data for a given content feed.
   * @param id The ID of the content feed that was setup in the app cloud studio.
   * @param successCallback The function to be called once the data has been retrieved.  This callback will be passed a data object containing the results of the request.
   * @param errorCallback The function to be called if an error occurs retrieving the data.  (Timeout is set to 30 seconds.)
   * @param options If the content feed has dynamic values they can be passed in via the options object.  
   */
  bc.core.fetchContentFeed = function( id, successCallback, errorCallback, options ) {
    var url = bc.SERVER_URL + "/named_feeds/" + id + "/fetch";
  
    $.ajax( { url: url,
              timeout: 30000,
              dataType: "jsonp",
              data: ( options ) ? { "query_params": options } : ""
            }
          ).success( successCallback )
           .error( errorCallback );
  }; 
  
  /** @private */
  bc.core.refreshConfigurationsForView = function() {
    var url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/configurations.json";
    
    $.ajax( 
      { 
        url: url,
        dataType: "jsonp"
      }
    ).success( bc.core.configurationsForViewSuccessHandler );
  };
  
  /**
   * @private
   */
  bc.core.configurationsForViewSuccessHandler = function( data ) {
    var newSettings,
        newStyles,
        newConfigurations;
    
    newSettings = storeSettings( data.settings );
    newStyles = storeStyles( data.styles );
    
    if( newSettings || newStyles ) {
      newConfigurations = {
        "settings": {
          "isNew": newSettings,
          "values": data.settings
        },
        "styles": {
          "isNew": newStyles,
          "values": data.styles
        }
      };

      $( bc ).trigger( "newconfigurations", newConfigurations );
      
      //If we are in preview mode then we want to refresh the page.
      if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
        bc.core.forceUpdate( newConfigurations );
      }
    }
    storeAdConfigurations( data.ads );
  };
  
  /**
   * @private
   */
  bc.core.forceUpdate = function( configs ) {
    if( configs.styles.isNew && !configs.settings.isNew ) {
      bc.core.applyStyles();
    } else {
      window.location.reload();
    }
  };
  
  /**
   * Checks to see whether or not we are in preview mode. (In the App Cloud Studio).
   *
   * @private
   * @return A boolean indicating whether or not we are in preview mode.    
   */
  bc.core.isPreview = function() {
    return ( window.location !== window.parent.location ) ? true : false;
  };

  /***************************************************************************************
   * Private helper functions
   ***************************************************************************************/
  
  function findValueInObject( object, name ) {
    if( $.isPlainObject( object ) ) {
      return object;
    }
    
    for( var i = 0, len = object.length; i < len; i++ ) {
      if( object[i].name === name ) {
        return object[i];
      }
    }
    return {};
  }
  
  /* Calculates the URL to be used to make the request to the appcloud server.*/
  function getContentFeedURL( contentFeed ) {
    var url,
       feedValueFromManifest = bc.core.getManifestConfiguration( { "type": "data", "name": contentFeed } );

    if( bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
     contentFeed = ( feedValueFromManifest === null ) ? contentFeed : feedValueFromManifest;
     url = bc.SERVER_URL + "/named_feeds/" + contentFeed + "/fetch";
    } else {
     if( feedValueFromManifest === null ) {
       url = bc.SERVER_URL + "/named_feeds/" + contentFeed + "/fetch";
     } else {
       url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/data.json?content_feed_name=" + contentFeed;
     }
    }

    return url;
  }

  function storeSettings( settings ) {
    //TODO - If the order isn't consistent this will return true.
    if( JSON.stringify( settings ) !== JSON.stringify( bc.core.cache( bc.viewID + "_settings" ) ) ) {
      bc.core.cache( bc.viewID + "_settings", settings );
      return true;
    }
    return false;
  }

  function storeStyles( styles ) {
    //TODO -f this order isn't consistent this will return true.
    if( JSON.stringify( styles ) !== JSON.stringify( bc.core.cache( bc.viewID + "_styles" ) ) ){
      bc.core.cache( bc.viewID + "_styles", styles );
      return true;
    }
    return false;
  }

  function storeAdConfigurations( adConfigsFromServer ) {
    var adConfigs,
        defaults = {
          "ad_code": undefined,
          "ad_position": "none",
          "ad_network": "admob"
        };
    
    adConfigs = $.extend( {}, defaults, adConfigsFromServer );
    
    adConfigs.should_show_ad = ( adConfigs.ad_code && adConfigs.ad_position !== "none" );
    
    bc.core.cache( bc.viewID + "_ad_settings", adConfigs );
    setAdPolicy( adConfigs );
  }

  function setGlobalIDValues() {
    bc.viewID = $( "body" ).data( "bc-view-id" ) || location.href;
    bc.appID = $( "body" ).data( "bc-app-id" );
    bc.accountID = $( "body" ).data( "bc-account-id" );
    
    if( bc.appID !== undefined) {
      if( bc.core.isPreview() ) {
        bc.core.current_mode = bc.core.mode.PREVIEW;
      } else {
        bc.core.current_mode = bc.core.mode.PRODUCTION;
      }
    }
    bcAppDB();
  }

  function bcAppDB() {
    if( typeof( window.openDatabase ) !== "function") {
      return null;
    }
    
    try {
      bc.db = window.openDatabase(bc.appID, "1.0", "BC_" + bc.appID, 1024*1024);  
      createTables();
    } catch(e) {
      bc.utils.warn("THERE WAS AN ERROR OPENING THE DB");
      bc.db = null;
    }
  }
  
  function createTables() {
    if( !bc.db ) {
      return;
    }
      
    bc.db.transaction(  
      function (transaction) {  
        transaction.executeSql( "CREATE TABLE IF NOT EXISTS components(id INTEGER NOT NULL PRIMARY KEY, component_id TEXT NOT NULL, modified TIMESTAMP NOT NULL);" );         
      }  
    );  
  }
  
  function pruneCache() {
    if( bc.db !== null ) {
      var ids_to_remove = "";
      bc.db.transaction(  
        function (transaction) {  
          transaction.executeSql( "SELECT component_id from components ORDER BY modified;", [], function( tx, results ) {
            //TODO - do we want a more robust decision maker for, perhaps sorting by payload?
            for ( var i = 0, len = results.rows.length; i < len/2; i++ ) {
              var item = results.rows.item( i ).component_id;
              window.localStorage.removeItem( item );
              ids_to_remove += "component_id = '" + item + "' OR ";
            }
            
            //Once we have cleaned up the local storage we should now clean up the DB.
            ids_to_remove = ids_to_remove.substring( 0, ( ids_to_remove.length - 4 ) );
            bc.db.transaction(
              function (transaction) { 
                transaction.executeSql( "DELETE FROM components WHERE " + ids_to_remove + ";", [] );          
              }
            );
          });         
        }  
      );
    }else {
      //If there is no DB then we do not have a more intelligent way to prune other then to remove 
      window.localStorage.clear();
    }
  }
  
  function updateDB(component_id) {
    if(bc.db === null) {
      return;
    }
    
    bc.db.transaction(  
      function (transaction) {
        transaction.executeSql( "SELECT component_id FROM components WHERE component_id ='" + component_id +"';", [], function( tx, results ) {
          if(results.rows.length === 0) {
            bc.db.transaction(  
              function ( transaction ) {  
                transaction.executeSql( "INSERT INTO components (component_id, modified) VALUES ('" + component_id + "', '" + Date() + "');" );         
              }  
            );
          } else {
            bc.db.transaction(
              function ( transaction ) { 
                transaction.executeSql( "UPDATE components SET modified = '" + Date() + "' WHERE component_id ='" + component_id + "';" );          
              }
            );
            
          }
        });                  
      }  
    );
  }
  
  function setAdPolicy( adConfigs ) {
    adConfigs = adConfigs || bc.core.cache( bc.viewID + "_ad_settings");
    //If we have already set an ad policy we do not want to do again.
    if ( _adsSet !== undefined ) {
      return;
    }
      
    if( adConfigs && bc.device !== undefined && bc.device.setAdPolicy !== undefined ) {
      bc.device.setAdPolicy( adConfigs );
      _adsSet = true;
    }
  }

/**
 * Public Events
 */
/**
 * The vieworientationchange event is fired anytime that the view itself rotates on the device.  The
 * event will contain three properties: orientation, width, and height. The orientation corresponds to [ landscape | portrait ]
 * and the width and height are the dimensions of the view in the new orientation.  This event is fired on the bc
 * object.
 *
 * @example
 * $( bc ).bind( "vieworientationchange", function( evt, rslt ) {
 *   alert("I'm " + rslt.orientation); 
 * });
 *
 * @name vieworientationchange
 * @event
 * @memberOf bc
 * @param event (type of vieworientationchange)
 * @param result object contains three properties; orientation, width, and height.  The
 * orientation will be the new orientation of the view ['portrait' | 'landscape'].  The width and
 * height will be the width and height of the view (window) in pixels.
 */
  $( window ).bind( "resize", function( evt, result ) {
    var newWidth = window.innerWidth,
        newHeight = window.innerHeight,
        orientation = ( newWidth > newHeight ) ? "landscape" : "portrait";

    if ( orientation !== bc.context.viewOrientation ) {
      bc.context.viewOrientation = orientation;
      $( bc ).trigger( "vieworientationchange", {
        "orientation": orientation,
        "width": newWidth,
        "height": newHeight
      });
    }
  });

  /**
   * The init event is triggered at the end of the initialization process.  At this point the bc.context object has been initialized,
   * views have been initialized and application logic can begin executing.
   * 
   * @example
   * $( bc ).bind( "init", function(evt) {
   *    alert("BC SDK is initialized.  Can access bc.context such as: "  + bc.context.vieworientation);
   * });
   * @name init
   * @event
   * @memberOf bc
   * @param event (type of init)
   */
  function triggerInitEvent() {
    bc.context.initialized = true;
    $( bc ).trigger( "init" );  
  }
  
  /**
   * The viewfocus event is triggered when a view gains focus.
   * 
   * @example
   * $( bc ).bind( "viewfocus", function( evt ) {
   *    alert( "I am the view that is current in focus.")
   * });
   * @name viewfocus
   * @event
   * @memberOf bc
   * @param event (type of viewfocus )
   */ 

   /**
    * The viewblur event is triggered when a view loses focus.
    * 
    * @example
    * $( bc ).bind( "viewblur", function( evt ) {
    *    alert( "I am the view that is current in focus.")
    * });
    * @name viewblur
    * @event
    * @memberOf bc
    * @param event (type of viewblur)
    */
    
  /**
   * The newconfigurations event is triggered when a configurations, styles or settings, are retrieved from the server.
   * The app cloud SDK checks the server for new configurations whenever the view gains focus.  If newconfigurations are found then the
   * then the event is triggered on the bc object and passed configurations as an object that has the values and a property indicating
   * whether or not those values are new.
   *
   * @example
   $( bc ).bind( "newconfigurations ", handleNewConfigurations );

   //Possible values for data are:  {
   //   "settings": {
   //     "isNew": newSettings,
   //     "values": data.settings
   //   },
   //   "styles": {
   //     "isNew": newStyles,
   //     "values": data.styles
   //   }
   function handleNewConfigurations( data ) {
      if( data.styles.isNew ) {
        bc.core.applyStyles();
      }
   }

   {
     "settings": {
       "isNew": newSettings,
       "values": data.settings
     },
     "styles": {
       "isNew": newStyles,
       "values": data.styles
     }
   */
   
  /**
   * End Events
   */
  
  /*
   * Initialize the metrics object and triggers events for install and session start where appropriate.
   */
  $( bc ).bind( "init", function() { 
    //TODO - deal with pendingMetrics.
    
    //Initialize the metrics object
    if( bc.metrics !== undefined ) {
      bc.metrics.init( {
          "domain": "appcloud",
          "uri": bc.METRICS_SERVER_URL,
          "interval": "5000"
        },
        {
          "account": bc.accountID,
          "application": bc.appID,
          "view": bc.viewID
        }
      );
    }
    
    //Check for flag to send install event.
    if( window.bc_firstRun && bc.metrics ) {
      bc.metrics.track( "installation" );
    }
    
    //Check for flag to send session events.
    if( window.bc_sessionStart && bc.metrics ) {
      bc.metrics.live( "session" );
    }
    
    //If the viewfocus event has already fired we need to now start tracking.
    if( window.bc_viewFocus && bc.metrics ) {
      bc.sessionEndCallback = bc.metrics.live( "view" );
    }
  });
  
  $( bc ).bind( "viewfocus", function() {
    //Should get the most recent settings and styles for this view.
    bc.core.refreshConfigurationsForView();
    
    if( bc.metrics && bc.metrics.isInitialized() ) {
      bc.sessionEndCallback = bc.metrics.live( "view" );
    } else {
      window.bc_viewFocus = true;
    }
  });
  
  $( bc ).bind( "viewblur", function() {
    if( typeof( bc.sessionEndCallback ) === "function" ) {
      bc.sessionEndCallback();
    }
  });

  /**
   * Set up our context object with any values that can be bootstrapped.
   */
  function initContextObject() {
    bc.context.viewOrientation = ( window.innerWidth > window.innerHeight ) ? "landscape" : "portrait";
    bc.context.os = ( navigator.userAgent.indexOf( "Mac OS X" ) > -1 ) ? "ios" : "android";
    bc.context.onLine = navigator.onLine;
    if( bc.device !== undefined ) {
      bc.device.setIsNative();
    }
  }
  
  /**
   * @private
   */
  bc.core.loadConfigurationsFromManifest = function() {
    var views,
        $manifest;

    if( window.bc_configurations !== undefined && window.bc_configurations.views !== undefined) {
      bc.core.setConfiguration( window.bc_configurations, true );
    } else {
     //check the cache to see if we have existing configurations.
     bc.configurations = bc.core.cache( bc.viewID + "_configurations" );
     if( bc.configurations === null ) {
       $manifest = $( '[type="text/manifest"]' );
       if( $manifest.length > 0 ) {
         bc.core.loadManifestFromScriptElement( $manifest );
       } else {
         bc.core.loadManifestViaAjax( 0 );
       }
     }
    }
  };
  
  /**
   * @private
   */
  bc.core.loadManifestFromScriptElement = function( $elem ) {
    var uri = $( '[type="text/manifest"]' ).attr( "src" );
    $.ajax( 
      {
        "url": uri,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function() 
      {
        console.error( "ERROR: Loading manifest.json.  Did you inlude in the a script tag on the page?" );
      }
    );
  };
  
  /**
   * @private
   */
  bc.core.loadManifestViaAjax = function( index ) {
    var directories,
        uri;
    
    index++;
    directories = location.href.split( "/" );
    
    if( index === ( directories.length - 1 ) ) {
      console.error( "ERROR: Did not find a manifest.json file." );
      return;
    }

    uri = directories.slice( 0, directories.length - index )
                      .join( "/" )
                      .concat( "/manifest.json" );
    $.ajax( 
      {
        "url": uri,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function() 
      {
        bc.core.loadManifestViaAjax( index );
      }
    );
  };
  
  /**
   * @private
   */
  bc.core.setConfiguration = function( manifest, cache ) {
    var views;
    manifest = ( typeof manifest === "string" ) ? JSON.parse( manifest ) : manifest;
    cache = ( typeof cache === "boolean") ? cache : false;
    
    views = manifest.views;
    for( var i = 0, len = views.length; i < len; i++ ) {
      if( location.href.indexOf( views[i].uri )  > -1 ) {
        bc.configurations = {
          "data":     views[i].data
        , "styles":   views[i].styles
        , "settings": views[i].settings
        };
        
        if( cache ) {
          bc.core.cache( bc.viewID + "_configurations", bc.configurations );
        }
        return;
      }
    }
  };

  $( document ).ready( function() {
    setGlobalIDValues();
    initContextObject();
    bc.core.loadConfigurationsFromManifest();
    setAdPolicy();    
    triggerInitEvent();    
  });
  
} )( bc.lib.jQuery );/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
* Brightcove Utils is a collection of helper functions.
* @namespace
* @requires jquery-1.5.min.js
* @requires brightcove.mobile.core.js
*/
bc.utils = {};

( function( $, undefined ) { 
  var _supportsTouch,
      DEBUG = true;
  
  /**
   * Detects for whether or not this particular device has support for touch events.  
   *
   * @return A boolean indicating whether or not touch events are currently supported.
   * @example  
    if ( bc.utils.hasTouchSupport() ) {
      alert("I support touch!");
    } else {
      alert("Touch is not supported.");
    }
   */
   bc.utils.hasTouchSupport = function() {
     var event;
     
     if( _supportsTouch !== undefined ) {
       return _supportsTouch;
     }

     if( "createTouch" in document ) { // True on the iPhone
       _supportsTouch = true;
       return _supportsTouch;
     }
     
     try {
       event = document.createEvent( "TouchEvent" ); // Should throw an error if not supported
       _supportsTouch = !!event.initTouchEvent; // Check for existence of initialization function
       return _supportsTouch;
     } catch( error ) {
       _supportsTouch = false;
       return _supportsTouch;
     }
   };   
  
  /**
   * Returns a number from a string that is passed in.  If the string ends in 'px' then it is stripped off and that
   * number is returned.  If a number cannot be parsed out, 0 is returned.
   *
   * @param number The string representation of a number that can end with a 'px'.
   * @returns Returns the a number for the string that is passed in.
   @example
   $( ".page" ).css( "top", "50px" );
   var top = bc.utils.getNum( $( ".page" ).css( "top" ) ); //top is 50.
   */

  bc.utils.getNum = function( number ) {
    var ret;
    if( typeof( number ) === "number" ) {
      return number;
    }

    ret = ( number.indexOf( "px" ) > -1 ) ? parseInt( number.substring( 0, number.indexOf( "px" ) ), 10 ) : parseInt( number, 10 );
    return (ret) ? ret : 0;
  };

  /**
   * Converts a number from hex to RGB. 
   *
   * @param hex A number in a hexadecimal format.  For example #ffffff.  (Either ffffff or #ffffff can be passed in.)
   * @returns The RGB value for the hex passed in.
   @example
   var rgb = bc.utils.hexToRGB( "#ffffff" ); //rbg is now { "red": 255, "green": 255, "blue": 255 }  
   */
  bc.utils.hexToRGB = function( hex ) {
    var red,
        green,
        blue;
    if( !hex ) {
      return;
    }

    if( hex.indexOf( "#" ) > -1 ) {
      hex = hex.replace( "#", "0x");
    }

    try {
      red = ( hex & 0xff0000 ) >> 16;
      green = ( hex & 0x00ff00 ) >> 8;
      blue = hex & 0x0000ff;

      return { "red": red, "green": green, "blue": blue };
    } catch (e) {
      bc.utils.warn( "Bad value passed into hexToRGB of: " + hex + ".  Threw error of: " + e.toString() );
    }
  };

  /**
   * Returns the WebKitCSSMatrix for this element or generates a new one if one does not exist.
   *
   * @private
   * @param node - The element to get / create the WebkitCSSMatrix from.
   * @return - A WebKitCSSMatrix for this element.
   */
  bc.utils.getMatrixFromNode = function( node ) {
    if( window.getComputedStyle( node ).webkitTransform === "none" ) {
      return new WebKitCSSMatrix(); 
    } else {
      return new WebKitCSSMatrix( window.getComputedStyle( node ).webkitTransform );
    }
  };
  
  /**
   * Returns the number of properties in a given object.
   *
   * @param obj The object to inspect.
   * @return The number of properties in the object.
   * @example
   var testObj = { "quiver": "cobras", "raft": "otters" };
   var length = bc.utils.numberOfProperties( testObj ); // length is equal to 2
   */
  bc.utils.numberOfProperties = function( obj ) {
    var count = 0;
    for( var prop in obj ) {
      if( obj.hasOwnProperty( prop ) ) {
        ++count;
      }
    }

    return count;
  };

  /**
   * Unescapes HTML from the given string.  This is handy if data returned to you that has escaped HTML in it that you now want
   * to render.
   * 
   * @param htmlString The string that contains escaped HTML.
   * @return A string with the HTML tags unescaped.
   @example
   var escapedHTML = "&amp;lt;h1&amp;gt;hello there avid reader&amp;lt;/h1&amp;gt;"
   var html = bc.util.unescapeHTML( escapedHTML ); //html is now &lt;h1&gt;hello there avid reader&lt;/h1&gt;
   */
  bc.utils.unescapeHTML = function( htmlString ) {
    return $( "<div>" ).html( htmlString ).text();
  };
  
  /**
   * Determines how many hours have passed since the date passed in and returns the results in as formatted string.
   * @private
   * @param pastDate - A JavaScript Date object representing the starting time that the calculation should be determined from.
   * @results - A String specifying how many hours, days, weeks or months have passed since the date passed in.
   */
  bc.utils.hoursAgoInWords = function( pastDate ){
    var now = new Date(),
        hoursAgo = Math.floor( ( ( now.getTime() - pastDate.getTime()) / 3600000) );
    if( hoursAgo === 0 ) {
      var minutesAgo = Math.floor( ( now.getTime() - pastDate.getTime() ) / 60000) ;
      return minutesAgo + " minute" + ( minutesAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 24 ) {
      return hoursAgo + " hour" + ( hoursAgo > 1 ? "s" : "" ) + " ago";
    } else if(hoursAgo < 168) {
      var daysAgo = Math.floor( hoursAgo / 24 );
      return daysAgo + " day" + ( daysAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 744 ) {
      var weeksAgo = Math.floor( hoursAgo / 168 );
      return  weeksAgo + " week" + ( weeksAgo > 1 ? "s" : "" ) + " ago";
    } else {
      var monthsAgo = Math.floor( hoursAgo / 744 );
      return monthsAgo + " month" + ( monthsAgo > 1 ? "s" : "" ) + " ago";
    }
  };

  /**
   * Removes any tags from a given string. Useful for when it is desired to remove any HTML tags from a string.
   *
   * @param string A String that should have its tags removed from.
   * @return A string with its HTML tags removed.
   @example
   var htmlString = "&lt;h1&gt;hello there avid reader&lt;/h1&gt;";
   var cleanString = bc.utils.stripTags( htmlString ); //cleanString is "Hello there avid reader"
   */
  bc.utils.stripTags = function(string) {
    if( string === undefined || string === null ) {
      return "";
    }
    return string.replace( /<\/?[^>]+>/gi, "" );
  };
  
  /**
   * Generates a unique ID.
   *
   * @return A unique number.
   * @example 
   var unique = bc.utils.uniqueID(); //unique is...wait for it...yup, a unique number
   @private
   */
  bc.utils.uniqueID = function() {
    return Math.floor(new Date().getTime() * Math.random());
  };

  /**
   * Determines whether or not a string is a valid URL.  ( Regex borrowed from http://snippets.dzone.com/posts/show/452 )
   * @param url The string that should be checked to see whether or not it is valid.
   * @return A boolean indicating whether or not a string is a valid URL. True if valid.
   @example
   var valid = bc.utils.validURL( "http://www.brightcove.com" ); //valid is true.
   @private
   */
  bc.utils.validURL = function( url ) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test( url );
  };
  
  /**
   * A wrapper for console.log  If debugging is turned off then no console.log messages will logged.
   * @param message The string that is logged out.
   */
  bc.utils.log = function ( message ) {
    if( DEBUG ) {
      console.log( message );
    }
  };
  
  /**
   * A wrapper for console.warn.  If debugging is turned off then no console.warn messages will logged.
   * @param message The string that is logged out as a warning.
   */
  bc.utils.warn = function( message ) {
    if( DEBUG ) {
      console.warn( message );
    }
  };
  
  /**
   * A wrapper for console.error.  If debugging is turned off then no console.error messages will logged.
   * @param message The string that is logged out as an error.
   */
  bc.utils.error = function( message ) {
    if( DEBUG ) {
      console.error( message );
    }
  };
})( bc.lib.jQuery );
/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
 * Brightcove device provides functions to interact with the native capabilities of a device.
 *
 * <b>Note:</b>All functions take in an optional success and error handler. 
 * 
 * @namespace
 * @requires jquery-1.5.min.js  
 * @requires core.js
 * @requires utils.js 
 */
bc.device = {};

( function( $ ) {
 
 /*****************************************
  * Universal callback methodology
  ****************************************/
  var _callbackFunctionMap = {},
      _callStack = [];
      
  /**
   * Possible codes returned the error callback functions.
   * 
   * @namespace
   */
  bc.device.codes = {};

  /** An error occured. */
  bc.device.codes.GENERAL = 100;

  /** The user canceled this action. */
  bc.device.codes.USER_CANCEL = 101;
  
  /** The device is not running in a native container */
  bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION = 102;
  
  /** The camera is not available on this device. */
  bc.device.codes.CAMERA_UNAVAILABLE = 103;
  
  /** Unable to fetch contents for URL via xhr request.  Possible cross domain issue? */
  bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER = 104;
 
  $( bc ).bind( "init", function() {
    createNativeCall( undefined, undefined, "bc:SetViewIsReady" );
  });    
  
  /**
   * @private
   */
   bc.device.callbackHandle = function( id, data ) {
     var associatedCallbackID,
         callbackData;
     
     if ( data ) {
       callbackData = JSON.parse( atob( data ) );
       callbackData = callbackData.result;
     }
    
     if( _callbackFunctionMap[id] ) {
       associatedCallbackID = _callbackFunctionMap[id].associatedCallbackID;
       _callbackFunctionMap[id].callback( callbackData ); 
       delete _callbackFunctionMap[id];
       if ( associatedCallbackID ) {
         delete _callbackFunctionMap[associatedCallbackID];   
       }
     } else {
       bc.utils.error( "The ID passed by the native container is not in the queue." );
     } 
   };
 
 /*****************************************
  * Native APIs
  ****************************************/
  
 /**
  * Determine whether we are running as a native application or as a web site.  If true, we are 
  * running as a native iPhone, Android  or other application.
  *
  * @return A boolean representing whether or not this is running as a native application.
  * @example
  *   if ( bc.device.isNative() ) {
         bc.device.takePhoto();
       } else {
         alert("No camera available when in a browser.");
       }
   }
  */
  bc.device.isNative = function() {
    if( bc.context !== undefined && bc.context.isNative !== undefined ) {
      return bc.context.isNative;
    } else {
      return bc.device.setIsNative();      
    }
  };
  
  /**
   * @private
   */
  bc.device.setIsNative = function() {
     var cachedValue = bc.core.cache( "isNative" );

     //Need to make sure that the context object is available.
     if( bc.context === undefined ) {
       bc.context = {};
     }
     //Our first time visiting this page.
     if( cachedValue === null ) {
       bc.context.isNative = window.bc_isNative === true;
       bc.core.cache( "isNative", bc.context.isNative );
     } else {
       bc.context.isNative = cachedValue;
     }
     return bc.context.isNative;
   };
   
  /**
   * @private
   */
  bc.device.playBCVideo = function( videoID, videoURL, successCallback, errorCallback ) {
    var query = "video_id=" + videoID + "&video_url=" + encodeURIComponent(videoURL);
    createNativeCall( successCallback, errorCallback, "bc:PlayVideo", query );
  };
  
 /**
  * Gets the current location of the user and calls into the success handler with the results.  What is
  * returned to the success handler is an object that looks like:
  * {"latitude":70.35, "longitude":40.34}
  * If this API is called in a browser and the browser supports geolocation then we will use the JavaScript API to get the user location.
  * @param successCallback A function to be called with the results of the location look up.  This includes properties, latitude and longitude, which have values that are of type floats.
  * @param errorCallback An optional function that will be called if there is an error getting the location.  This callback is passed
  an object containing the property "errorCode", which maps one of the values specified on bc.device.codes, and a property of "errorMessage", which provides
  additionallay information about this error.
  * @example
  
  bc.device.getLocation( function( locationInfo ) {
                          if ( locationInfo.latitude > 80 ) {
                            alert("Brrrrr...");
                          }
                        },
                        function( data ) {
                          bc.utils.warn( data.errorCode );
                        }
                      );
  */
  bc.device.getLocation = function( successCallback, errorCallback ) {
    if( !bc.context.isNative && navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( function( geolocation ) {
        successCallback( { "latitude": geolocation.coords.latitude, "longitude": geolocation.coords.longitude } );
      }, errorCallback );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:GetLocation" );
  };
 
 /**
  * Get an existing photo from the user's photo library.  When this function is called, the device will bring up the
  * photo gallery. After the user chooses an image, the success handler is called.  If you want the user to use the camera to take a picture 
  * instead, use the takePhoto function instead.  If getPhoto is called from the browser we will call the errorCallback with the errorCode: bc.device.codes.CAMERA_UNAVAILABLE.
  *
  * The success callback will be called with an object whose result value is a string pointing to the local path of the image.  Here is an
  * example of that object:<br/>
  * "/a/path/to/an/image.jpg"<br/>
  * 
  * <b>Note:</b> When using the Workshop application, the returned path will actually be a data-uri.  
  * In either case, you can set the resulting string to be the source of an image.
  *
  * @param successCallback A function to be called with the URL to the image.
  * @param errorCallback An optional function that will be called if an error is encountered, the device does not support getPhoto or the user cancels the action.  
    The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, and a property of "errorMessage", which provides
    additional information about this error.
  * @example  
  bc.device.getPhoto( function( data ) {
                        //data is the path to the image on the file system.
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
                    );
  *  
  */
  bc.device.getPhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      errorCallback( 
                      { "errorCode": bc.device.codes.CAMERA_UNAVAILABLE, 
                        "errorMessage": "There is no camera available to this device"
                      }
                   );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:GetPhoto" );
  };
 
 /**
  * Opens the camera and allows the user to take a picture.  Once the picture has been taken, the success handler is called.
  * If you want to access an image from the photo gallery, use the getPhoto function instead.
  * Here is an example of what the return object will look like:<br/>
  * "/a/path/to/an/image.jpg"
  *
  * <b>Note:</b> When using the Workshop application the returned path will actually be a data-uri.  
  * In either case, you can set the resulting string to be the source of an image.
  *
  * <b>Note:</b> If takePhoto is called from the browser we will call the errorCallback with the errorCode: bc.device.codes.CAMERA_UNAVAILABLE.
  *
  * @param successCallback The function to be called with the URL to the image the user just took with their camera.
  * @param errorCallback The function that is called if an error is encountered, the device does not support taking a picture or the user cancels the action.
    The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, and a property of "errorMessage", which provides
    additional information about this error.
  * @example  
    bc.device.takePhoto( function( data ) {
                          //my success handler
                         },
                         function( data ) {
                           if( data.errorCode === bc.device.codes.USER_CANCEL ) {
                             //Convince them not to cancel.
                           }
                          
                         }
                      );  
  */
  bc.device.takePhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      errorCallback( 
                      { "errorCode": bc.device.codes.CAMERA_UNAVAILABLE, 
                        "errorMessage": "There is no camera available to this device"
                      }
                   );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:TakePhoto" );
  };
 
 /**
  * Checks to see if this device has a camera available.  The
  * success handler will be called with an object that looks like:
  * 
  * true if the camera is available or false if it is not
  *
  * <b>Note</b> If this is called from within a browser we will call the success callback function and return false.
  *
  * @param successCallback The function to be called with a boolean specifying whether or not a camera is available.
  * @param errorCallback The function that is called if an error is encountered.  The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the
    codes defined on bc.device.codes, and a property of "errorMessage", which provides
    additionallay information about this error.
  * @example  
    bc.device.isCameraAvailable( function( data ) {
                                   alert( "Camera available? " + data );
                                   if( data ) {
                                     alert( "Camera is available!" );
                                   } else {
                                     alert( "No camera :( ");
                                   }
                                 },
                                 function( data ) {
                                   bc.utils.warn( data.errorCode );
                                 }
                              );
    
  */
  bc.device.isCameraAvailable = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      successCallback( false );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:IsCameraAvailable" );
  };
 
 /**
  * Take a picture with the device camera and then email that picture to the provided email address, along with the 
  * subject and message in the email.
  *
  * @param toAddress The email address that the photo should be sent to.
  * @param successCallback The function to be called after the user has sent the email.
  * @param errorCallback The function that is called if this is not supported, if there is an error, or if the user cancels out of the process.  The errorCallback function 
    is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, and a property of "errorMessage", which provides
    additional information about this error.
  * @param options Object of optional parameters that can be passed.  Options include
  * <ul>
  *   <li>subject: The subject used for the email.
  *   <li>body: The text used in the body of the email.
  * </ul>
  * 
  * @example  
    bc.device.takePhotoAndEmail( 'jobs@brightcove.com', 
                                 'Sweet picture',
                                 'Look at that!',
                                 function( data ) {
                                   //my success handler
                                 },
                                 function( data ) {
                                  bc.utils.warn( data.errorCode );
                                 },
                                 {
                                   "subject":"My Subject",
                                   "body":"Check out my sweet picture!"
                                 }
                              );
  * @private
  * 
  */
  bc.device.takePhotoAndEmail = function( toAddress, successCallback, errorCallback, options ) {
    var optionsAsParams,
        queryArgs;
        
    if( !bc.context.isNative ) {
      errorCallback( 
                      { "errorCode": bc.device.codes.CAMERA_UNAVAILABLE, 
                        "errorMessage": "There is no camera available to this device"
                      }
                   );
      return;
    }
    optionsAsParams = objectToQueryParams( options );    
    queryArgs = "toAddress=" + toAddress + "&" + optionsAsParams;
    createNativeCall( successCallback, errorCallback, "bc:TakePhotoAndEmail", queryArgs );
  };
 
 /**
  * Switches the current view that is in focus.  For views based upon a menu or tab bar navigation
  * controller, this will have the effect of switching both the visible view and the selected tab.
  *
  * If the success handler is called, no parameters are passed.
  * 
  * @param index The index of the page that should be brought into focus.
  * @param errorCallback An optional argument that is a function that will be called if there is an error trying to switch views.
    The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
    and a property of "errorMessage", which provides additionallay information about this error. 
  * @example 
    bc.device.navigateToIndex( function( data ) {
                                 //my success handler
                               },
                               function( data ) {
                                bc.utils.warn( data.errorCode );
                               }
                            );
  *  
  * @private
  */
  bc.device.navigateToIndex = function( index, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:NavigateToIndex", "index=" + index);
  };
  
  /**
   * Allows a developer to programmatically switch between views.  Just like web development the API allows a developer to navigate to a
   * URI and also provide a fragmentID to append to that URL.  (fragmentID is the technical term for a '#' in a URL.)  If a developer is using the fragmentID to pass contextual
   * data then they should simply register an event listener for on the hashchangeevent.  An example use case would be if you had a photo on your home page, and when the
    * user clicks a photo you would open the photo view and navigate to that particular photo.
   * @param uri The URI of the view to navigateTo.  This is the URI that was specified in the manifest.xml file.
   * @param successCallback The callback function that is called if the view is successfull navigated to.
   * @param errorCallback The callback function that is called if the container is unable to navigate to the view.
   * @param options An options object.  Currently we look for the fragmentID to see if the fragmentID of the URL should be set.
   *
   * @example
   //home.html
   bc.device.navigateToView( "photo.html", successCallback, errorCallback, { "fragmentID": "id-of-photo" } );
   
   //photo.html
   $( window ).bind( "hashchange", function( evt ) {
     var photoID = window.location.hash;
     //do something photoID.
   })
   */
  bc.device.navigateToView = function( uri, successCallback, errorCallback, options ) {
    var optionsAsParams = objectToQueryParams( options ),
        queryArgs = "uri=" + encodeURIComponent( uri ) + ( optionsAsParams !== "" ? ("&" + optionsAsParams ) : "" );
    
    if( !bc.context.isNative ) {
      successCallback && successCallback();
      window.open( uri + ( options && options.fragmentID ? "#" + options.fragmentID : "" ) );
      return;
    }    
    createNativeCall( successCallback, errorCallback, "bc:NavigateToView", queryArgs );
  };
  
 /**
  * Retrieves the information about the device that the application is running on.
  *
  * @example  
  bc.device.getDeviceInfo( function( data ) {
                             //my success handler
                           },
                           function( data ) {
                             bc.utils.warn( data.errorCode );
                           }
                        );
   * @param successCallback The function that is called by the container once the device has been retrieved.
   * @param errorCallback The function that is called if there is an error retrieving the device info.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
     and a property of "errorMessage", which provides additionallay information about this error.
   * @private
  */
  bc.device.getDeviceInfo = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:GetDeviceInfo");
  };
 
 /**
  * Fetches the content of a given URL and returns the contents as a string. Making a call to any domain is allowed.
  *  This is useful if you need to make calls that would normally not be allowed via an AJAX
  * call because of cross-domain policy.  If you are running a browser then the we will attempt to make the request via the
  * browser.  However, if this is a cross domain request then it is advised 
  *
  * Upon success, an object will be passed to the success handler that looks like: "URL contents"
  *
  * @example  
    bc.device.fetchContentsOfURL( 'http://my.sweet.feed/blob.xml',
                                  function( data ) {
                                    //data is equal to the contents of http://my.sweet.feed/blob.xml as a string.
                                  },
                                  function( data ) {
                                    bc.utils.warn( data.errorCode );
                                  }
                                );
   *
   * If fetchContentsOfURL is called from within the browser we will fallback using the browser XHR object to make the request.  This means that the request is now subject to cross domain restrictions.  To circumvent
   * this during development it is suggested to use the chrome browser and start it from the command line with the following command: chrome.exe --disable-web-security
   *
   * @param url The URL that the request should be made to.
   * @param successCallback The function that is called once the contents of the URL have been fetched.  The callback is passed a string which is the contents of the URL.
   * @param errorCallback The function that is called if there is an error fetching the contents of the URL.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
     and a property of "errorMessage", which provides additionallay information about this error.
  */
  bc.device.fetchContentsOfURL = function( url, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $.ajax( {
        url: url,
        success: successCallback,
        error: function( err ) {
                  errorCallback( { 
                    "errorCode": bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER,
                    "errorMessage": "It appears you are trying to use the fetchContentsOfURL request from within a browser.  However, there was an error fetching the contents of the URL via the browser xhr request.  Most likely this is due to a limitation of cross domain policies.  It is recommended that you use the Chrome browser and start the browser from the command line with the following command, 'chrome.exe --disable-web-security',  to circumvent this limitation during your development process.  NOTE you should only do this during developments."
                  });
                }
      });
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:FetchContentsOfURL", "url=" + encodeURIComponent( url ) );
  };
 
 /**
  * Vibrates the device if the current device supports it.
  *
  * @example  
    bc.device.vibrate( function( ) {
                         //my success handler
                       },
                       function( data ) {
                         bc.utils.warn( data.errorCode );
                       }
                     );
  *
  * @param successCallback The function to be called if the phone successfully vibrates.
  * @param errorCallback The function to be called if there is an error vibrating the phone.
    The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, and a property of "errorMessage", which provides
    additionallay information about this error.
  */
  bc.device.vibrate = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $( "body" ).addClass( "vibrate" );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      setTimeout( function() {
        $( "body" ).removeClass( "vibrate" );
      }, 1000 );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:Vibrate" );
  };

  
 /**
  * Specify which direction(s) the application can be rotated in.  The directions should be passed in as an array and can take in five different values of:
  * <ul>
  * <li> bc.ui.orientation.PORTRAIT </li>
  * <li> bc.ui.orientation.LANDSCAPE_LEFT </li>
  * <li> bc.ui.orientation.LANDSCAPE_RIGHT </li>
  * <li> bc.ui.orientation.PORTRAIT_UPSIDEDOWN </li>
  * <li> "all" </li>
  * </ul>  
  *
  * @example  
   bc.device.setAutoRotateDirections ( [bc.ui.orientation.PORTRAIT, bc.ui.orientation.LANDSCAPE_RIGHT],
                                       function() {
                                         //my success handler
                                       },
                                       function( data ) {
                                         bc.utils.warn( data.errorCode );
                                       }
                                     ); 
  
  * @param direction An array of direction that the device can rotate to.  Possible values are: bc.ui.orientation.PORTRAIT, bc.ui.orientation.LANDSCAPE_LEFT, bc.ui.orientation.LANDSCAPE_RIGHT, bc.ui.orientation.PORTRAIT_UPSIDEDOWN or simply 'all'.
  * 
  * @param successCallback The function to be called if this registration successfully happens.
  * @param errorCallback The function to be called if there is an error.
        The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
        and a property of "errorMessage", which provides additionallay information about this error.
  */
  bc.device.setAutoRotateDirections = function( directions, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:SetAutorotateOrientations", "directions=" + directions.join(",") );
  };

  /**
   * Make the application go full screen, hiding any other visible parts of the application except for the active view.  For example,
   * if running in the iOS container, this will hide the tab bar.
   * 
   * <b>Note</b> If called from the browser the successCallback is called.
   *
   * @param successCallback The function to be called once the application goes into full screen.
   * @param errorCallback The function to be called if there is an error going into full screen.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
     and a property of "errorMessage", which provides additionallay information about this error.
   * @param options An object with a set of optional parameters that can be passed in to control behavior.
   * <ul>
   *   <li>hideStatusBar: A boolean indicating whether on iOS devices the status bar should be hidden when going full screen. This defaults
   *    to false.
   * </ul>
   * @example 
    bc.device.enterFullScreen( 
                          function() {
                            alert("I'm fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          },
                          {
                            "hideStatusBar":"true"
                          }
              );
   */
  bc.device.enterFullScreen = function( successCallback, errorCallback, options ) {
    var hideStatusBar;
    
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    
    if ( options && options.hideStatusBar ) {
      hideStatusBar = options.hideStatusBar;
    } else {
      hideStatusBar = false;
    }
    createNativeCall( successCallback, errorCallback, "bc:EnterFullScreen", "hideStatusBar=" + hideStatusBar ); 
  };

  /**
   * Exit full screen of the application.
   *
   * <b>Note</b> If called from the browser the successCallback is called.
   *
   * @param successCallback The function that is called once we have exited full screen.
   * @param errorCallback The function that is called if we hit an issue exiting full screen.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, and a 
     property of "errorMessage", which provides additionallay information about this error.
   * @example
    bc.device.exitFullScreen( function() {
                            alert("I'm not fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          }
                        );   
   */
  bc.device.exitFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:ExitFullScreen" ); 
  };

  /**
   * Returns a boolean indicating whether or not the application is in full screen.  The returned
   * object is true if we are in full screen or false if not.
   *
   * <b>Note</b> If called from the browser the successCallback is called passing the value of true.
   *
   * @param successCallback The function to be called with data specifying whether or not the application is in full screen mode.
   * @param errorCallback The function to be called if there is an error.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
     and a property of "errorMessage", which provides additionallay information about this error.
   * @example bc.device.isFullScreen( function( data ) {
                                        if( data ) {
                                          alert( "I am in fullscreen" );
                                        } else {
                                          alert( "I am NOT in fullscreen" )
                                        }
                                     },
                                     function( data ) {
                                       bc.utils.warn( data.errorCode );
                                     }
               );
   */
  bc.device.isFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback( true );
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:IsFullScreen" ); 
  };

  /**
   * Shows an alert in a native dialog.  This is useful to use instead of a JavaScript alert function
   * call, because the JavaScript alert will show the name of the page (e.g., videos.html) which is
   * not always desirable.  The success handler will be called after the user has dismissed the 
   * alert.   
   *
   * <b>Note</b> If called from the browser then a default JavaScript alert will be used.  The successCallback is then called once the alert has been interactived with.
   *
   * @param message The message to show in the native alert dialog.
   * @param successCallback The function to be called after the dialog alert has been dismissed.
   * @param errorCallback The function to be called if an error occurs.
     The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the codes defined on bc.device.codes, 
     and a property of "errorMessage", which provides additionallay information about this error.
   * @example 
    bc.device.alert( "Many turkeys are a rafter",
                      function() {
                        // my success handler
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
              });
   */
  bc.device.alert = function( message, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      alert( message );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:Alert", "message=" + message );
  };

  /**
   *@private
   */
  bc.device.isViewShowing = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:IsViewShowing" );
  };
  
  /**
   *@private
   */
  bc.device.setAdPolicy = function( ad_policy, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:SetAdPolicy", objectToQueryParams( ad_policy ) );
  };
  
  /**
   * Brings up a native QR scanner to read 2D QR codes.  On success, this will call the successCallback passing the function the string that 
   * reflects the scanned QR code.
   *
   * <b>Note:</b> If takePhoto is called from the browser we will call the errorCallback with the errorCode: bc.device.codes.CAMERA_UNAVAILABLE.
   *
   * @param successCallback The function that is called once the QR code has been read.  The successCallback is passed a string that reflects the QR code.
   * @param errorCallback The function that is called if an error occurs.  The errorCallback function is passed an object that contains a property of "errorCode", which maps to one of the
     codes defined on bc.device.codes, and a property of "errorMessage", which provides additional information about this error.
   */
  bc.device.getQRCode = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      errorCallback( 
                      { "errorCode": bc.device.codes.CAMERA_UNAVAILABLE, 
                        "errorMessage": "There is no camera available to this device"
                      }
                   );
      return;
    }
    createNativeCall( successCallback, errorCallback, "bc:GetQRCode" );
  };
  
  /**
   * @private
   */
  bc.device.goBack = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "bc:GoBack" );
  };
  
  /**
   * Config for Facebook information.
   * @private
   */  
   bc.device.facebookConfig = function(configs, successCallback, errorCallback) {
     createNativeCall( successCallback, errorCallback, "bc:facebookLogin", objectToQueryParams(configs) );
   };
  
   /**
    * Prompt Facebook login dialog to let user login
    * @return basic Facebook user information
   * @private    
    */  
   bc.device.facebookLogin = function(successCallback, errorCallback) {
     createNativeCall( successCallback, errorCallback, "bc:facebookLogin" );
   };
  
   /**
    * Log out the current Facebook account. This will happen behind the scene. There is NO prompt dialog
    * for confirmation now. 
    * @private    
    */  
   bc.device.facebookLogout = function(successCallback, errorCallback) {
     createNativeCall( successCallback, errorCallback, "bc:facebookLogout" );
   };
  
   
   /**
    * Expose Facebook dialog APIs. (http://developers.facebook.com/docs/reference/dialogs/). Besides all the options 
    * described in Facebook documents, you need to have one more parameter, "action", to describe which dialog you want 
    * to use. 
    * 
    * For example, you need following options to post a feed to the wall:
    *  { "action": "feed", "link": "http://www.brightcove.com", "message": "check this out!"}
    * @private
    */  
   bc.device.facebookDialog = function(options, successCallback, errorCallback) {
     createNativeCall( successCallback, errorCallback, "bc:facebookDialog", objectToQueryParams(options) );
   };
   
   /**
    * Internal API for container to fire JavaScript event
    * @private
    */
   bc.device.trigger = function( eventType, eventData ) {
     if(eventData === undefined) {
       $( bc ).trigger( eventType );
     } else {
       $( bc ).trigger( eventType, [ JSON.parse( atob( eventData ) ).result ]);
     }
   };
  
 /*****************************************
  * Utility functions
  ****************************************/
  

  /**
   *@private
   */
  function createNativeCall( successCallback, errorCallback, command, queryArgs ) {
    if( successCallback === undefined ) {
      bc.utils.warn( "no success handler passed into native API call." );
      successCallback = function() {/*noop*/};
    }

    if( errorCallback === undefined ) {
      errorCallback = function() {/*noop*/};
    }
    
    if( !bc.device.isNative() ) {
      return errorCallback( { "errorCode": bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, 
                              "errorMessage": command + " is not available for non native applications"
                            }
                          );
    }

    var successCallbackID = bc.utils.uniqueID();
    var errorCallbackID = bc.utils.uniqueID();
        
    _callbackFunctionMap[successCallbackID] = { "associatedCallbackID": errorCallbackID, 
                                                "callback": successCallback };    

    _callbackFunctionMap[errorCallbackID] = { "associatedCallbackID": successCallbackID,
                                              "callback": errorCallback };

    command = command + "?successCallbackID=" + successCallbackID + "&errorCallbackID=" + errorCallbackID;
    if ( queryArgs ) {
      command += "&" + queryArgs;
    }
    
    bc.device.nativeCall( command );   
 }
 
 /*****************************************
  * Helper functions
  ****************************************/
 
  function objectToQueryParams( obj ) {
    if(obj === undefined) {
      return "";
    }

    var params = [];
    $.each( obj, function( key, value ) {
      params.push( key + "=" + encodeURIComponent( value ) );
    });
    
    return params.join( "&" );
  }
 
  function encodeObjectAsDictionary( a, objectCtxt ) {
    return encodeObject( a, objectCtxt );
  }

  function encodeObject( a, objectCtxt ) {
    var queryString = "",
        firstTime = true,
        ctxt,
        prop;

    for (prop in a) {
      if ( a.hasOwnProperty( prop ) ) {
        if ( firstTime ) {
          firstTime = false;
          ctxt = objectCtxt + "[" + i + "]";
          queryString = encodeValue( a[i], ctxt );
        } else {
          ctxt = objectCtxt + "[" + i + "]";
          queryString = queryString + "&" + encodeValue( a[i], ctxt );
        }
      }
    }

    return queryString;
  }

  function encodeValue( v, ctxt ) {
    var encodedValue = "";
    if ( typeof( v ) === "string" || typeof( v ) === "number" ) {
      encodedValue = ctxt + "=" + v;
    } else {
      encodedValue = encodeObject( v, ctxt );
    }
    return encodedValue;
  }
 
 
 /*****************************************
  * Internal use only
  ****************************************/
 /**
  * @private
  */
  bc.device.getCallbackFunctionMap = function() {
    return _callbackFunctionMap;
  };
 
 /**
  * @private
  */
  bc.device.clearCallbackFunctionMap = function() {
    _callbackFunctionMap = {};
  };
 
 /**
  * @private
  */
  bc.device.nativeCall = function( api ) {
   // window.androidCommandQueue is inject by the android container
   if( window.androidCommandQueue !== undefined ) {
     window.androidCommandQueue.enqueue( api );
   } else {
     _callStack.push( api );
    }
  };
 
 /**
  * @private
  */
  bc.device.popNativeCall = function() {
    return _callStack.pop();
  };
  
}( bc.lib.jQuery ));
/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
 * Brightcove UI provides functions that interact with the DOM.  This includes initializing and managing
 * elements for momentum scrolling, functions to help transition between pages, and helper functions to draw common UI 
 * elements (for example an AJAX loader).
 * @namespace
 * @requires jquery-1.5.min.js
 * @requires iscroll-min.js 
 * @requires brightcove.mobile.core.js
 * @requires brightcove.mobile.utils.js 
 * @requires brightcove.mobile.events.js  
 */
bc.ui = {};

( function( $, undefined ) {
  
  var _transitionTimeout,
      _pendingTransition,
      _currentTransitionDirection,
      TRANSITION_FORWARD = "forwardPage",
      TRANSITION_BACK = "backPage";
      _iScrollOptions = {
        "hideScrollbar": true
      };
  
  /** 
   * The type of transitions that we support.  
   * @namespace
   */
  bc.ui.transitions = {};
  /** Transition type of SLIDE_LEFT will slide the current page off the screen to the left. */
  bc.ui.transitions.SLIDE_LEFT = 0;
  /** Transition type of SLIDE_RIGHT will slide the current page off the screen to the right. */
  bc.ui.transitions.SLIDE_RIGHT = 1;
  
  /**
   * The possible orientation directions.
   * @namespace
   */
  bc.ui.orientation = {};
  /** The view is being displayed in the portrait mode. */
  bc.ui.orientation.PORTRAIT = "1";
  /** The view is being rendered as if it were rotated 180 degrees. */  
  bc.ui.orientation.PORTRAIT_UPSIDEDOWN = "2";
  /** The view is being rendered as if it were rotated 270 degrees clockwise. */  
  bc.ui.orientation.LANDSCAPE_LEFT = "3";
  /** The view is being rendered as if it were rotated 90 degrees clockwise. */  
  bc.ui.orientation.LANDSCAPE_RIGHT = "4";
  
  /** 
   * An array that keeps track of the page history.  For example if our first page is a list of videos and then when we click
   * on a item it transitions (using the bc.ui.forwardPage function) us to a video detail page, we would have two pages in our bc.ui.pageStack.
   * The first item being the original page and the second the new page we transitioned to, $detailsPage in this example.
   */
  bc.ui.pageStack = [];
  
  /**
   * Tracks whether or not the current view is in transition.
   */
  bc.ui.inTransition = false;
  
  /** The currently active page, meaning the page that is currently in view.*/
  bc.ui.currentPage = undefined;
  
  $( bc ).bind( "init", function() {
    bc.ui.init();
    registerEventListeners();
  });
  
  bc.ui.init = function() {
    if( bc.ui.pageStack.length !== 0 || $( ".page" ).length === 0 ) {
      return;
    }
    
    if( $( '.page-active' ).length === 0 ) {
      $( '.page:eq(0)' ).addClass( 'page-active' );
    }
    
    bc.ui.currentPage = $( '.page-active:eq(0)' );
    bc.ui.enableScrollers();
    bc.ui.pageStack.push( bc.ui.currentPage );
  };


  /**
   * Called to refresh all existing scrollers on the page.  The Brightcove App Cloud microframework
   * attempts to call this function for the template author autoamatically as appropariate.  For example,
   * when pages are first added to the DOM, a page is transitioned to or whenever the window size changes.  
   *
   * However, there are instances where the template author will need to call this function explicitly.  Most likely
   * is when changes are made to the contents of the active page that is affects its size.  For example,
   * if the active page is a list of entries and additional entries are injected.
   *
   * @param options The options object has the possible value of allPages, which is a boolean indicating whether or not to refresh
   *                scrollers on all of the pages or just the currently active page.  The default value is false as updating all of the pages
   *                is usually unnecessary and expensive.
   * @example 
   bc.ui.refreshScrollers( { "allPages": true } ); //Will refresh the scrollers for all pages on the view.
   */
  bc.ui.refreshScrollers = function( options ) {
    var settings = { "allPages": false };
    $.extend( settings, options );
    
    if( settings.allPages ) {
      for( var i=0, len=bc.ui.pageStack.length; i < len; i++ ) {
        refreshScrollerForPage( bc.ui.pageStack[i] );
      }
    } else {
      refreshScrollerForPage( bc.ui.currentPage );
    }   
  };
  
  /** 
   * Scroll to the top of the provided momentum scroller. 
   *
   * @param $scroller A jQuery object that represents the scroller element to scroll to the top of the provider scroller.
   * @example 
   bc.ui.scrollToTop( $( '.scroller' ) ); //Scrolls the page to the top of the page.
   */
  bc.ui.scrollToTop = function( $scroller ) {
    var aScroller = $scroller.data( 'bc-scroller' );
    if ( aScroller ) {
      aScroller.scrollTo( 0, 0, 0);
    }
  };
  
  /**
   * <b>Note</b> that the App Cloud library will automatically manage the construction and destruction of these scrollers for you. Therefore
   * by default you should not have to call enableScrollers. The App Cloud libraries will call enableScrollers when it first loads and anytime we 
   * transition to a new page.
   * 
   * This function can be called to enable momentum scrolling for any element with a class of 'scroller' that is a direct child of the page
   * that was passed in.  If no page is passed to the function, then it defaults to the currently active page.
   *
   * @param $page An optional jQuery object that either has a class of scroller on it or is a parent of an element(s) that has
   * the class 'scroller' on it.
   * @example
   bc.ui.enableScrollers(); //Will initialize momentum scrolling for this current page.
   */
  bc.ui.enableScrollers = function( $page ) {
    $page = $page || bc.ui.currentPage;
    if ( $page ) {
      $page.children( '.scroller' ).each( function( index, scroller ) {
        setTimeout( function() { addScroller( scroller ); }, 100 );
      });
      
      if( $page.hasClass( 'scroller' ) ) {
        setTimeout( function() { addScroller( $page[0] ); }, 100 );
      }      
    }    
  };
  
  /**
   * Transitions to the toPage parameter from the current page.  The type of transition to be applied can be passed as parameter otherwise it
   * defaults to SLIDE_LEFT.  The toPage can be passed as either a css selector, DOM Element or jQuery Object.  The passed toPage can already be part of the
   * Document or can be independent.  If it is independent then this function will dynamically insert the toPage into the DOM.  If this function
   * inserts the page into the Document then when the back function is called it will automatically remove the associated the page.  Generally speaking,
   * it is recommended to allow pages to be dynamically inserted/removed from the DOM so as to keep the DOM in-memory as small as possible.
   * 
   * Both the current page and the new page should have a CSS class of 'page' as defined in the theme file.
   * This function triggers a pageshow and a pagehide event once the transitions has completed.  The pageshow event passes the 
   * new page as data parameter, while the pagehide event passes the page we transitioned from as data parameter.
   *
   * bc.ui.forwardPage should be used when logically transitioning from one page to the next.  In addition to providing a visual
   * transition, it will add pages to the bc.ui.pageStack so that a history stack of pages can be maintained. To return to the original page (the from page)
   * call bc.ui.backPage().  
   *
   * @param toPage The page we would like to transition to.
   * @param options An object that overrides the default values of the forwardPage function.  The possible values are transitionType and injectPage.
   * "transitionType" specifies the direction that the type of transition to use during the transition, defaults to SLIDE_LEFT.
   * @example  
   $( bc ).bind( 'pageshow', function( $secondPage ) {
     //Got the pageshow event and the page we transitioned to.
   });
   
   $(bc ).bind( 'pagehide', function( $firstPage ) {
     //Got the pagehide event and the page we transition from.
   });
   
   bc.ui.forwardPage( $( '.second_page' )); //transitions to the new page
   */
  bc.ui.forwardPage = function( toPage, options ) {
    var $toPage,
        settings;
        
    //We want to protect against getting double transition events
    if( toPage === undefined || _pendingTransition !== undefined ) {
      return;
    }
    
    if( bc.ui.inTransition ) {
      if( _currentTransitionDirection !== TRANSITION_FORWARD ) {
        _pendingTransition = { 
                              "pendingFunction": "forwardPage", 
                              "page": toPage,
                              "options": options
                             };
        checkForPendingTransitions();
      }
      return;
    }
    
    // take either a string or jQuery object.  
    if ( typeof( toPage ) === "string" || toPage instanceof Element ) {
      $toPage = $( toPage );
    } else {
      $toPage = toPage;
    }

    // determine if we need to inject into the page
    if ( $toPage.parent().length === 0 ) {
      $toPage.appendTo( "body" );      
      $toPage.data( "bc-internal-injected", true );
    } else {
      $toPage.data( "bc-internal-injected", false );      
    }

    settings = { "transitionType": bc.ui.transitions.SLIDE_LEFT };
                       
    $.extend( settings, options );
    
    bc.ui.inTransition = true;  
    _currentTransitionDirection = TRANSITION_FORWARD;
    
    //register event listener for when the transition is complete so that we can clean things up and trigger events.
    bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
      clearTimeout( _transitionTimeout );
      forwardPageEnd( $toPage );
    });
    
    // iOS sometimes drops events on the floor so we protect against this by also scheduling a callback
    _transitionTimeout = setTimeout( function() {
      bc.ui.currentPage.unbind( 'webkitTransitionEnd' );
      forwardPageEnd( $toPage );
    }, 1000);    
    
    bc.ui.enableScrollers( $toPage );
    changePage( bc.ui.currentPage, $toPage, settings.transitionType );
  };
  
  /**
   * Transitions from the current page back to the previous page.  The type of transition can be specified, but by default the current page will 
   * slide off the page to the right.  Once the transition has completed, the previous page is removed from the DOM in order to keep it light.
   * This function triggers a pageshow event once the transition has completed and a pagehide once the current page has been hidden.  <b>Note</b>
   * that the pagehide event is only fired if the page was not removed.  (occurs if removePage is set to false)
   *
   * bc.ui.backPage() is associated with the bc.ui.forwardPage() function.  After a previous use of bc.ui.forwardPage() to transition to a page
   * call the bc.ui.backPage() function transition back to the original page.  A common use would be when a user taps on a back button.  You would
   * call bc.ui.backPage() to transition back to the original page.
   *
   * @param options An object that contains the options that can be provided to the transition function.  The optional value is transitionType.
   * "transitionType" defines the type of transition to use when moving back to the previous page and must correspond to a value defined in bc.ui.transitions.
   * The default value is bc.ui.transitions.SLIDE_RIGHT, which will slide the current page off to the right. 
   *
   * @example  
   $( bc ).bind( 'pageshow', function( $firstPage ) {
     //Got the pageshow event and the page we transitioned to.
     //In this example the first page we started on.
   });
   
   bc.ui.backPage(); //transitions back to the first page
   
   //The above line is equivalent to calling
   // bc.ui.backPage( { 
   //  "transitionType": bc.ui.transitions.SLIDE_RIGHT,
   //  "removePage": true
   // })
   */
  bc.ui.backPage = function( options ) {
    var settings,
        $toPage,
        $fromPage = bc.ui.currentPage;
    
    if( _pendingTransition !== undefined ) {
      return;
    }
    
    //We want to protect against getting double transition events
    if( bc.ui.inTransition ) {
      if( _currentTransitionDirection !== TRANSITION_BACK ) {
        _pendingTransition = { 
                              "pendingFunction": TRANSITION_BACK, 
                              "options": options
                             };
        checkForPendingTransitions();
      }
      return;
    }
     
    settings = { "transitionType": bc.ui.transitions.SLIDE_RIGHT };
    $.extend( settings, options );
    
    // set our down state for the back button
    $fromPage.find( '.header .back-button' )
                     .addClass( 'active' );
                     
    bc.ui.inTransition = true;
    _currentTransitionDirection = TRANSITION_BACK;

    if( bc.ui.pageStack.length === 1 || bc.ui.pageStack.length === 0 ) {
      bc.utils.warn( "ERROR: Calling transition back when there is only one page in the page stack" );
      return;
    }

    $toPage = bc.ui.pageStack[ bc.ui.pageStack.length - 2 ];    
    if( $toPage === undefined ) {
      bc.utils.warn( "There is no page to transition back to" );
      return;
    }

    bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
      clearTimeout( _transitionTimeout );
      transitionBackEnd( $toPage );
    });

    _transitionTimeout = setTimeout( function() {
      bc.ui.currentPage.unbind( "webkitTransitionEnd" );
      transitionBackEnd( $toPage );
    }, 1000);

    setTimeout( function() { changePage( bc.ui.currentPage, $toPage, settings.transitionType ); }, 100);
  };
  
  /**
   * Returns an HTML snippet that can be used to inject a CSS3 animated spinner into the DOM.  The size and color are controlled in the theme file.
   *
   * @return An HTML snippet that represents a CSS3 animates spinner.  (AJAX loader)
   * @example
   $( 'body' ).append( bc.ui.spinner() ); //Injects an HTML spinner into the body of the page.
   */
  bc.ui.spinner = function() {
    return '<div class="spinner ' + bc.context.os +'">' +
                  '<div class="bar1"></div>' +
                  '<div class="bar2"></div>' +
                  '<div class="bar3"></div>' +
                  '<div class="bar4"></div>' +
                  '<div class="bar5"></div>' +
                  '<div class="bar6"></div>' +
                  '<div class="bar7"></div>' +
                  '<div class="bar8"></div>' +
                  '<div class="bar9"></div>' +
                  '<div class="bar10"></div>' +
                  '<div class="bar11"></div>' +
                  '<div class="bar12"></div>' +
                '</div>';
  };

  /**
   * Generates the HTML snippet for the header. 
   * @param options An object that represents the settings that can be overridden for this HTML snippet.  Below are the default values.
   <pre>
   {
     "backButton": false, //A boolean for whether or not to show a back button.
     "refreshButton": false, //A boolean for whehter or not to show a refreshButton.
     "title": ""
   }
   </pre>
   @return A string that is the HTML snippet for the header.
   * @private
   */  
  bc.ui.headerHTML = function( options ) {
    var html = "",
        settings = {
          "backButton": false,
          "refreshButton": false,
          "title": ""
        };
    
    $.extend( settings, options );
    
    html = "<header class='header'>";
    
    if( settings.backButton ) {
      html += "<div class='back-button'></div>";
    }
    
    html += "<h1 class='header-a ellipsis'>" + settings.title + "</h1>";
    
    if( settings.refreshButton ) {
      html += "<div class='refresh-button'></div>";
    }
    
    return ( html += "</header>" );        
  };

  /**
    * Returns the current width of the viewport.
    * @return The width of the viewport as a number.
    * @example
    var width = bc.ui.width(); //sets width to the current width of the viewport.
    */
   bc.ui.width = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the width of the wrapper.
       return $( "#BCDeviceWrapper" ).width(); 
     } else {
       return $( window ).width();
     }
   };

   /**
    * Returns the current height of the viewport.
    * @return The height of the viewport as a number.
    @example
    var height = bc.ui.height(); //sets height to the current height of the viewport
    */
   bc.ui.height = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the height of the wrapper.
       return $( "#BCDeviceWrapper" ).height(); 
     } else {
       return $( window ).height();
     }
   };
   
  /**
   * @private
   * Should only be used by Jasmine tests to override private variables.
   */
  bc.ui.setPrivateVariables = function( options ) {
    for( var prop in options ) {
      if( typeof options[prop] === "string" ) {
        eval( prop + " = '" + options[prop] + "'");
      } else {
        eval( prop + " = " + options[prop] );
      }
    }
  };

  function forwardPageEnd( toPage ) {
    bc.ui.inTransition = false;
    bc.ui.currentPage.removeClass( 'page-active page-transition slide-left-out slide-right-out' );
    bc.ui.currentPage.find( '.bc-active' ).removeClass( 'bc-active' );
    $( bc ).trigger( "pagehide", bc.ui.currentPage );
    
    bc.ui.pageStack.push( toPage );
    bc.ui.currentPage = toPage;
    toPage.addClass( 'page-active' ).removeClass( 'page-transition' );
    $( bc ).trigger( "pageshow", toPage );
    setTimeout( function() { bc.ui.refreshScrollers( toPage ); }, 100);
  }
  
  function transitionBackEnd( toPage ) {
    var previousPage = bc.ui.pageStack.pop(),
        removePage = previousPage.data( "bc-internal-injected" );

    bc.ui.inTransition = false;
    bc.ui.currentPage.find( '.header .back' ).removeClass( 'active' );
    bc.ui.currentPage = toPage;
    previousPage.removeData( "bc-internal-injected" );
    //If we hit memory issues start by setting the transform to nothing here.
    if ( removePage ) {
      freeRAM( previousPage );
      previousPage.css( 'display', 'none' ).remove();      
    } else {
      previousPage.removeClass( 'page-active page-transition slide-right-out slide-left-out' );        
      $( bc ).trigger( "pagehide", previousPage );
    }
    bc.ui.currentPage.addClass( 'page-active' ).removeClass( 'page-transition' );
    $( bc ).trigger( "pageshow", bc.ui.currentPage );
    bc.ui.refreshScrollers();
  }
  
  function changePage( from, to, transitionType ) {
    
    //Hide the overflow to make the transition easier.
    $( from ).addClass( 'page-transition' );
    $( to ).addClass( 'page-transition' );
    
    if( bc.ui.currentPage !== from ) {
      bc.utils.warn('ERROR: trying to transition with a page that is not the currently displayed page.');
    }
    
    switch( transitionType ) {
      case bc.ui.transitions.SLIDE_LEFT:
        from.addClass( 'slide-left-out' )
            .data( 'bc-transition-type', bc.ui.transitions.SLIDE_LEFT );
        break;
      case bc.ui.transitions.SLIDE_RIGHT:
        from.addClass( 'slide-right-out' )
            .data( 'bc-transition-type', bc.ui.transitions.SLIDE_RIGHT );        
        break;
      default:                    
        from.addClass( 'slide-left-out' )
            .data( 'bc-transition-type', bc.ui.transitions.SLIDE_LEFT );        
    }        
  }
  
  function refreshScrollerForPage( $page ) {
     var $scrollers,
         $scroller;
      
      //Should never happen but...
      if( $page === undefined ) {
        return;
      }
      
      $scrollers = $page.children( '.scroller' );
      if ( $scrollers.length > 0 ) {
        $.each( $scrollers, function( idx, scroller) {
          $scroller = $( scroller );
          if ( $scroller.data( 'bc-scroller' ) ) {
            $scroller.data( 'bc-scroller' ).refresh();
          }
        });
      }

      if ( $page.data( 'bc-scroller' ) ) {
        $page.data( 'bc-scroller' ).refresh();
      }
  }
  
  function freeRAM( $page ) {
    destroyScrollers( $page );
    destroyVideos( $page );
    destroyImages( $page );
  }
  
  //When we remove a page from the DOM, we set the image src to an empty image to release them from RAM.  (just removing the image tag does not release it)
  function destroyImages( $page ) {
    $page.find( 'img' ).each( function() {
      this.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    });
  }

  function destroyScrollers( $page ) {
    var $scrollers = $page.children( '.scroller' ),
        aScroller;
    if ( $scrollers.length > 0 ) {
      $.each( $scrollers, function( idx, scroller ) {
        aScroller = $( scroller ).data( 'bc-scroller' );
        if ( aScroller ) {
          aScroller.destroy();
          aScroller = null;
          $( scroller ).data( 'bc-scroller', null );
        }
      });
    }
  }
  
  function destroyVideos( $page ) {
    $page.find( 'video' ).each( function() {
      this.pause();
      $( this ).remove();
    });
  }
  
  function addScroller( scroller ) {
    var $scroller = $( scroller );
    // only add a scroller if there is not already one
    if( typeof( iScroll ) !== "undefined" && $scroller.data( "bc-scroller" ) === undefined ) {
      $scroller.data( "bc-scroller", new iScroll( scroller, _iScrollOptions ) );
    }
  }
  
  function registerEventListeners() {
    $( bc ).bind( "vieworientationchange", function( evt, data ) {
      bc.ui.refreshScrollers();
    });
    
    $( bc ).bind( "backbuttonpressed", function( evt ) {
      if( bc.ui.inTransition ) {
        return;
      }
      
      if( bc.ui.pageStack.length > 1 ) {
        bc.ui.backPage();
      } else {
        bc.device.goBack();
      }
    });
  }
  
  function checkForPendingTransitions() {
    var pendingFunction,
        page,
        options;
        
    if( bc.ui.inTransition ) {
      setTimeout( checkForPendingTransitions, 100 );
      return;
    }
    
    pendingFunction = _pendingTransition.pendingFunction;
    page = _pendingTransition.page;
    options = _pendingTransition.options;
    _pendingTransition = undefined;
    if( page !== undefined ) {
      bc.ui[pendingFunction]( page, options );
    } else {
      bc.ui[pendingFunction]( options );
    }
  }
  
  //The browser is sporadically showing all white pages, do to rendering issues.  This addresses that.
  $( bc ).bind( "pageshow", function() {
    setTimeout( function() {
      document.body.style.display = "none";
      document.body.style.display = "block";
    }, 0 );
  });
  
})( bc.lib.jQuery );
/**
* Brightcove Metrics provides functions to measure interactions with applications.
*/
bc.metrics = {};

( function( bc, undefined ) {

  var _settings = undefined,
      _transit = undefined,
      _poll_interval = undefined,
      _loader = undefined,
      _events = [],
      _liveEvents = [],
      _errors = 0;

  function Event(data) {
    this.getData = function() {
      return data;
    }
    
    this.isReady = function() {
      return true;
    }
    
    this.complete = function() {}
    
    this.error = function() {
      _events.push(this);
    }
  }
  
  function LiveEvent(data) {
    var last = new Date().getTime(),
        transit;

    this.getData = function() {
      transit = new Date().getTime();
      data.units = transit - last;
      return data;
    }
    
    this.isReady = function() {
      var d = new Date().getTime();
      var ready = transit === undefined &&      // only one at a time
        ( _settings.interval > 0 &&   // only if it hasn't been tracked recently
          d - last > _settings.interval )
      return ready;
    }
    
    this.complete = function() {
      last = transit
      transit = undefined
    }
    
    this.error = function() {
      transit = undefined
    }
  }
  
  function getEventData( event, eventData ) {
    return $.extend({
      event: event, 
      time:( new Date() ).getTime()
    }, eventData );
  }

  function flush( force ) {
    if( bc.metrics.isInitialized() ) {
      if( force || _settings.interval <= 0 ) {
        send();
      } else if( _poll_interval === undefined ) {
        _poll_interval = setInterval( function() {
          send();
        }, _settings.interval );
      }
    }
  }
  
  function send() {
    var url, data;
    if( !bc.metrics.isInitialized() || _transit !== undefined ){
      // not ready, event already in _transit or nothing to send
      return;
    }
    while( !_transit ) {
      if( _events.length != 0 ) {
        _transit = _events.shift();
      } else {
        for( var i=0, len=_liveEvents.length; i < len; i++ ) {
          if( _liveEvents[i].isReady() ) {
            _transit = _liveEvents[i];
            break;
          }
        }
        if( !_transit ) {
          return;
        }
      }
    }
    
    data = $.extend( _transit.getData(), _settings.data );
    url = _settings["uri"] + "?" + $.param( data );
    _loader.attr( "src",url );
  }

  function bind_loader() {
    _loader.bind( "load", function() {
      _errors = 0;
      _transit.complete();
      _transit = undefined;
      send();
    });
    
    _loader.bind( "error", function() {
      console.log( "ERROR: unable to send metrics to", _settings.uri );
      setTimeout( function(){
        if( _transit !== undefined ) {
          _transit.error();
          _transit=undefined;
        }
        send();
      }, _settings.interval * Math.log( ++_errors ) );
    });
  }
  
  /*
   * Initialize and bind the metrics runtime
   * 
   * @param options - an object containing the metrics options
   *    - uri - the url used to send metric events
   *    - interval - the millisecond interval between event polling 
   *        (zero or negative will cause all tracking events to fire immediately, 
   *        but will also mean that live tracking must be explicitly dispatched )
   * @param data - session wide metadata that will be included with each event
   */
  bc.metrics.init = function( options, data ) {
    $( function(){
      _settings = $.extend({}, bc.metrics.defaults, options );
      _settings.data = data || {};
      _settings.data.domain = _settings.domain;
      _settings.uri = ( _settings.uri.indexOf( "tracker" ) > -1 ) ? _settings.uri : _settings.uri + "/tracker";
      if( _settings.pendingMetrics ) {
        for( var i = 0, len = _settings.pendingMetrics.length; i < len; i++ ) {
          _events.push( new Event( _settings.pendingMetrics[i] ) )
        }
      }
      _loader = _settings.loader || $( "<img />" ).appendTo( $( "head" ) );
      bind_loader();
      flush();
    });
  }
  
  /*
   * Unloads the metrics context and returns any undelivered events
   */
  bc.metrics.unload = function() {
    var result = [];
    console.log("unload", _transit, _events, _liveEvents)
    _settings = undefined;

    if( _transit !== undefined ) {
      _transit.error();
      _transit = undefined;
    }

    if( _poll_interval !== undefined ){
      clearInterval( _poll_interval );
      _poll_interval = undefined;
    }

    for( var i = 0, len = _events.length; i < len; i++ ) {
      result.push( _events[i].getData() );
    }
    _events = [];

    for( var i = 0, len = _liveEvents.length; i < len; i++ ) {
      result.push( _liveEvents[i].getData() );
    }
    _liveEvents = [];

    if( _loader !== undefined ) {
      _loader.unbind();
      _loader = undefined;
    }

    return result;
  }

  /*
   * Send a tacking event
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   */
  bc.metrics.track = function( event, properties ) {
    _events.push( new Event( getEventData( event, properties ) ) );
    flush();
  }

  /*
   * Create a live tracking event which sends time delta information for each poll interval.
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   * @returnValue - a closure which can be used to cancel the tracking and flush the last time delta
   */
  bc.metrics.live = function( event, properties ) {
    var liveEvent = new LiveEvent( getEventData( event + "_usage", properties ) )

    bc.metrics.track( event + "_view" , properties);
    _liveEvents.push(liveEvent);
    
    liveEvent.die = function(){
      for( var i = 0, len = _liveEvents.length; i < len; i++ ) {
        if( _liveEvents[i] == liveEvent ) {
          _events.push( new Event( liveEvent.getData() ) );
          _liveEvents.splice( i, 1 );
          flush();
          return;
        }
      }
    }
    
    flush();
    return function() { liveEvent.die() }; 
  }
  
  bc.metrics.isInitialized = function() {
    return _settings !== undefined;
  }
  
  bc.metrics.defaults =  {
    uri:"http://localhost:44080/tracker", // the url of the event tracking service
    interval:5000 // the default poll interval
  };

})( bc );
/*global bc:true atob:false jQuery:false*/
/*jshint indent:2, browser: true, white: false devel:true*/
 
 /**
* Brightcove App Cloud events that are added to the jQuery object.  This enables you to
* use the jQuery event attachment functions (live, delegate, bind) with these set of events.
* These events will work across both desktops and mobile devices.
*
* @namespace
* @name Events
* @requires jquery-1.5.min.js
* @requires brightcove.mobile.core.js
* @requires brightcove.mobile.utils.js 
*/
bc.events = {};

( function( $, undefined ) {
  var MOVE_THRESHOLD = 20;
  var supportsTouch;
  
  if( bc.utils.hasTouchSupport() ) {
    bc.events.start = "touchstart";
    bc.events.move = "touchmove";
    bc.events.end = "touchend";
    bc.events.cancel = "touchcancel";
  } else {
    bc.events.start = "mousedown";
    bc.events.move = "mousemove";
    bc.events.end = "mouseup";
    bc.events.cancel = "touchcancel";
  }  
    
  /**
   * @event
   * @memberOf Events
   * @name tap
   *
   * @description Tap is an event that represents a user 'tapping' on an element.  It is recommended to use tap rather than click
   * as it eliminates 300ms of delay that binding to a 'click' event introduces on some platforms.  When running on non-touch 
   * devices, the tap event  will be equivalent to 'click'.  This means binding to tap will work across both 
   * touch and non-touch devices.
   *
   * @example $( '.cancel-button' ).bind( 'tap', function() {
      alert('Are you sure you want to cancel form submission?');
   });
   */
  $.event.special.tap = {
    setup: function( data ) {
      var $this = $( this );
      
      $this.bind( bc.events.start, function( event ) {
        var moved = false,
          touching = true,
          origTarget = event.target,
          origEvent = event.originalEvent,
          origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
          originalType,
          tapHoldTimer;
                    
        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.unbind( bc.events.end ).unbind( bc.events.move );
        }, 750);
          
        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.bind( bc.events.move, function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( ( Math.abs( origPos[0] - newPageXY.pageX ) > MOVE_THRESHOLD ) || ( Math.abs( origPos[1] - newPageXY.pageY ) > MOVE_THRESHOLD ) ) {
            moved = true;
          }
        });
        
        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, function( event ) {
          $this.unbind( bc.events.move );
          clearTimeout( tapHoldTimer );
          touching = false;
          
          /* ONLY trigger a 'tap' event if the start target is
           * the same as the stop target.
           */
          if ( !moved && ( origTarget === event.target ) ) {
              originalType = event.type;
              event.type = "tap";
              event.pageX = origPos[0];
              event.pageY = origPos[1];
              $.event.handle.call( $this[0], event );
              event.type = originalType;
          }
        });
      });
    }
  };
  
  /**
   * @event
   * @memberOf Events
   * @name swipe
   *
   * @description On touch platforms, users can provide input with a 'swipe' gesture.  For example, a user placing their finger on the screen
   * and dragging it.  When the swipe event is fired, the type of event will be 'swipe'.  An additional parameter will be passed to 
   * any bound functions which is either 'swipeRight' or 'swipeLeft'.  This additional parameter can be used to understand in which 
   * direction the user is swiping.
   *
   * @example  $('.image').bind( 'swipe', function(evt, direction) {
       if( direction === 'swipeRight' ) {
         handleSwipeRight( this );
       } else {
         handleSwipeLeft( this );
       }
    });
   *
   */  
 $.event.special.swipe = {
    setup: function( data ) {
      var $this = $( this );
      
      $this.bind( bc.events.start, function( event ) {
        var moved = false,
          touching = true,
          origTarget = event.target,
          origEvent = event.originalEvent,
          origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
          originalType,
          tapHoldTimer,
          $elem = $( event.target );
          
        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.unbind( bc.events.end ).unbind( bc.events.move );
        }, 750);
          
        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.bind( bc.events.move, function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( (Math.abs(origPos[0] - newPageXY.pageX) > MOVE_THRESHOLD) && (  Math.abs(origPos[1] - newPageXY.pageY) < MOVE_THRESHOLD ) ) {
             $this.unbind( bc.events.end );
             $this.unbind( bc.events.move );
             clearTimeout( tapHoldTimer );
             $elem.trigger( 'swipe', ( origPos[0] > newPageXY.pageX ) ? 'swipeLeft' : 'swipeRight' );
          }
        });
        
        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, function( event ) {
          $this.unbind( bc.events.move );
          clearTimeout( tapHoldTimer );
          touching = false;
        });
        
      });
    }
  };

})( bc.lib.jQuery );
