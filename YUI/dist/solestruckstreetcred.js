/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/*
 * jQuery Carousel Plugin v1.0
 * http://richardscarrott.co.uk/posts/view/jquery-carousel-plugin
 *
 * Copyright (c) 2010 Richard Scarrott
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Requires jQuery v1.4+
 *
 */

// prototypal inheritance
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

(function($) {
	// ie alias
	var headache = $.browser.msie && $.browser.version.substr(0,1)<9;

	// carousel
	var Carousel = {
		settings: {
			itemsPerPage: 1,
			itemsPerTransition: 1,
			noOfRows: 1,
			pagination: true,
			nextPrevLinks: true,
			speed: 'normal',
			easing: 'swing'
		},
		init: function(el, options) {
			if (!el.length) {return false;}
			this.options = $.extend({}, this.settings, options);
			this.itemIndex = 0;	
			this.container = el;
			this.runner = this.container.find('ul :first');
			this.items = this.runner.children('li');
			this.noOfItems = this.items.length;
			this.setRunnerWidth();
			if (this.noOfItems <= this.options.itemsPerPage) {return false;} // bail if there are too few items to paginate
			this.insertMask();
			this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;
			if (this.options.pagination) {this.insertPagination();}
			if (this.options.nextPrevLinks) {this.insertNextPrevLinks();}
			this.updateBtnStyles();
		},
		insertMask: function() {
			this.runner.wrap('<div class="mask" />');
			this.mask = this.container.find('div.mask');

			// set mask height so items can be of varying height
			var maskHeight = this.runner.outerHeight(true);
			this.mask = this.container.find('div.mask');
			this.mask.height(maskHeight);
		},
		setRunnerWidth: function() {
			this.noOfItems = Math.round(this.noOfItems / this.options.noOfRows);
			var width =  this.items.outerWidth(true) * this.noOfItems;
			this.runner.width(width);
		},
		insertPagination: function() {
			var i, links = [];
			this.paginationLinks = $('<ol class="pagination-links" />');
			for (i = 0; i < this.noOfPages; i++) {
				links[i] = '<li><a href="#item-' + i + '">' + (i + 1) + '</a></li>';
			}
			this.paginationLinks
				.append(links.join(''))
				.appendTo(this.container)
				.find('a')
					.bind('click.carousel', $.proxy(this, 'paginationHandler'));
		},
		paginationHandler: function(e) {
			this.itemIndex = e.target.hash.substr(1).split('-')[1] * this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		insertNextPrevLinks: function() {
			this.prevLink = $('<a href="#" class="prev">PREV</a>')
								.bind('click.carousel', $.proxy(this, 'prevItem'))
								.appendTo(this.container);
			this.nextLink = $('<a href="#" class="next">NEXT</a>')
								.bind('click.carousel', $.proxy(this, 'nextItem'))
								.appendTo(this.container);
		},
		nextItem: function() {
			this.itemIndex = this.itemIndex + this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		prevItem: function() {
			this.itemIndex = this.itemIndex - this.options.itemsPerTransition;
			this.animate();
			return false;
		},
		updateBtnStyles: function() {
			if (this.options.pagination) {
				this.paginationLinks
					.children('li')
						.removeClass('current')
						.eq(Math.ceil(this.itemIndex / this.options.itemsPerTransition))
							.addClass('current');
			}

			if (this.options.nextPrevLinks) {
				this.nextLink
					.add(this.prevLink)
						.removeClass('disabled');
				if (this.itemIndex === (this.noOfItems -5)) {
					this.nextLink.addClass('disabled');
				} 
				else if (this.itemIndex === 0) {
					this.prevLink.addClass('disabled');
				}
			}
		},
		animate: function() {
			var nextItem, pos;
			// check whether there are enough items to animate to
			if (this.itemIndex > (this.noOfItems - 5)) {
				this.itemIndex = this.noOfItems - 5; // go to last panel - items per transition
			}
			if (this.itemIndex < 0) {
				this.itemIndex = 0; // go to first
			}
			nextItem = this.items.eq(this.itemIndex);
			pos = nextItem.position();
			
			if (headache) {
				this.runner
					.stop()
					.animate({left: -pos.left}, this.options.speed, this.options.easing);
			}
			else {
				this.mask
					.stop()
					.animate({scrollLeft: pos.left}, this.options.speed, this.options.easing);
			}
			this.updateBtnStyles();
		}
	};

	// bridge
	$.fn.carousel = function(options) {
		return this.each(function() {
			var obj = Object.create(Carousel);
			obj.init($(this), options);
			$.data(this, 'carousel', obj);
		});
	};
})(jQuery);var inventory=new Object();
//var imageServer="http://images2.solestruck.com";
var imageServer="http://commondatastorage.googleapis.com/images2.solestruck.com";
var appId="https://live-solestruck.appspot.com";
var discountAmountForSubtotal = 0.00;
$(document).ready(function(){
	//////console.log("Inside the document ready");
	loadSearchKeyWords();
	loadShoppingCart(false);
	$("#contn_shpbtn_wishlist").click(function(){
		$(".wish_list_popup").hide();
		$('#backgroundPopup').hide();
	});
	$("#contn_shpbtn").click(function(){
		hideCartPopUp();
	});
	var csvi=false;	
	$('.custom_dropdown').live('click',function() {
		if(csvi){
		$(this).children('ul').hide();
		csvi=false;
		}
		else {
		$(this).children('ul').show();
		csvi=true;
		}	
		if($(this).hasClass('color_select_popup')){
			var max_length = 0;
			$(this).find('ul li').each(function() {
 				var li_length = $(this).text().length;
			//	alert(li_length);
					if (li_length > max_length) {
 						 max_length = li_length;
					}
				
            });
			
			$(this).find('ul').width(max_length*7);
 		}
     });
	
	$(".custom_dropdown").mouseout(function () {
		$('#wrapper').addClass('wrappflag');
    });
	
	$('.custom_dropdown ul').find('li').live('click',function() {
		 var field_value = $(this).text();
		$(this).parent().parent().children('input').val(field_value);
		$(this).parent().hide();
	});
	
	$(".custom_select cart_cus_select select custom_select_value_act").change(function() {
		
		 $(this).closest('div').find('p').html($(this).find("option:selected").text());
	});
	
	$('.cart_paypal').click(redirectToPaypal);
	
	/*$(".facebookPopupCart_act .facebookPopupCart_act_close").click(function(){
		$(".facebookPopupCart_act").hide().parent().hide();
		setTimeout(function(){$("#backgroundPopup").show();},500);
		return false;
	});*/
	
});



var searchObj	=	{};
var mainObject 	= 	{};
var localStorageTime = new Date();
function loadSearchKeyWords()
{
	var date  		= 	new Date();
	
	console.log("get current time in hours--->"+date.getHours());
	
	if(window.localStorage && window.localStorage.hasOwnProperty("searchKeyWords"))
	{
		var keywords = JSON.parse(window.localStorage.getItem("searchKeyWords"))
		
		console.log(keywords["KeyWords"]);
		console.log(keywords["LSTime"]);
		console.log("The subtraction--->"+(date-(keywords["LSTime"])));
		
		if(date.getHours() - (keywords["LSTime"]) === 5)
		{
			console.log("inside the if time set for ajax call");
			localStorage.clear();
			$.ajax({
				url:'/getSearchKeyWords.htm',
				cache:false,
				dataType:'json',
				success:function(json)
				{
					$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});	
					var localStorageTime = new Date();
					
					console.log("the time in hours-->"+localStorageTime.getHours());
					
					searchObj["LSTime"] 	= 	localStorageTime.getHours();
					searchObj["KeyWords"]	=   JSON.stringify(json);
					
					if(window.localStorage)
					{
						console.log("the search object-->"+JSON.stringify(searchObj));
						localStorage.setItem("searchKeyWords",JSON.stringify(searchObj));	
					}
					
				}
			});		
		}
		else
		{
			console.log("inside the else part for get from local storage");
			
			$('#searchText').kgautocomplete({width:390,height:200,words:JSON.parse(window.localStorage.getItem(keywords["KeyWords"])),leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});
		}
	
	}
	else
	{
		console.log("this will execute only if we clear the local storage for one time")
		
		$.ajax({
			url:'/getSearchKeyWords.htm',
			cache:false,
			dataType:'json',
			success:function(json)
			{
				$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});	
				console.log("the time in hours-->"+localStorageTime.getHours())
				searchObj["LSTime"] 	= 	localStorageTime.getHours();
				searchObj["KeyWords"]	=   JSON.stringify(json);
				
				if(window.localStorage)
					localStorage.setItem("searchKeyWords",JSON.stringify(searchObj));
			}
		});		
	}
}

//function loadSearchKeyWords()
//{
//	$.ajax({
//		url:'/getSearchKeyWords.htm',
//		cache:false,
//		dataType:'json',
//		success:function(json)
//		{
//			$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});
//		}
//		
//	});
//}


function loadShoppingCart(toShow)
{
	//console.log("coming load shopping cart");
	if(readCookie('orderid')!=null)
	{
		if(readCookie('isCartEmpty')=='false' || readCookie('isCartEmpty')==null)
		{
			
			$.ajax({url:'/loadShoppingCart.htm',
				dataType:'json',
				cache:false,
				success:function(data){
					//console.log('Load ShoppingCart '+data.shoppingCart);
					if(data.shoppingCart===null)
					{
						$('#cartCount').html('(0) CART');
						return;
					}
					else
					{	
						inventory=data.inventory;
					    //console.log("line items length is "+data.shoppingCart.lineItems.length);
						if(data.shoppingCart.lineItems.length==0||data.shoppingCart.lineItems==null)
						{
							//$('.cart_popup_holder').html(populateEmptyCartHTML()); 
							$('#cartCount').html('('+data.shoppingCart.lineItems.length+') CART');
							$('#cartCount_popUp').html('('+data.shoppingCart.lineItems.length+')');
						}
						else
						{
							//$('.cart_popup_holder').html(populateItemCartHtml());
							populateCompleteCart(data.shoppingCart.lineItems);
							$('#cartCount_popUp').html('('+data.shoppingCart.lineItems.length+')');
							//$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
							if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
								savingsForDiscountProgram();
							}
							else
						    {
					    		$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
					    		if(data.shoppingCart.savings!='0.0'){
					    			$('#cartsavings').show();
					    			$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
					    		}
					    		else
					    		{
					    			$('#cartsavings').hide();
					    		}
						    }
						}	
						if($('#source').val()=='mail'||toShow==true||toShow=='true')
						{
							showShoppingCart();
						}
					}
				}
				});
		}
		else
		{
			$('#cartCount').html('(0) CART');
			return;
		}
	}
	else
	{
	  //console.log('orderiD is  Null');
	  $('#cartCount').html('(0) CART');
		return;
	}
	
}


function populateCompleteCart(lineItems)
{
	var index=0;
	//console.log("LineItems size is "+lineItems.length); 
	$('#cartCount').html('('+lineItems.length+') CART');
	$('#cartCount_popUp').html('('+lineItems.length+')');
	
	$("#cartItems").html('');//added to avoid item duplication when unload idp
		for(index=0;index<lineItems.length;index++)
		{
			var lineItem=lineItems[index];
			//////console.log("productId is "+lineItem.productId);
			var colorList=inventory[lineItem.productId];
			
			populateColorAndSizesForProduct(colorList,lineItem);
			$('#quantity_'+lineItem.sequenceId).val(lineItem.quantity);		
		}
}

function addItem(lineItem,toShow,callback)
{
//	console.log(" login isLoggedInNotify status "+$('#isLoggedInNotify').val());
		
		if($('#isLoggedInNotify').val() == 'true'){
			 $('.notify').show();
		}
		else{
			 $('.notify').hide();
		}
	
	var retval=0;
	var inventoryDetail=0;
	if(inventory[lineItem.productId]==undefined)
		inventoryDetail=1;
	////console.log("AddItem.Size :"+lineItem.size+" inventoryDetail "+inventoryDetail);
	var quantityInCart=getQuantityInCart(lineItem.productVariantId);
	var quantityAvl;
	var sequenceId=getSequenceIdOfItem(lineItem.productVariantId);
	var proceed=true;
	if(inventoryDetail==0)
	{
		var colorList=inventory[lineItem.productId];
		var sizeVariants;
		for(index=0;index<colorList.length;index++)
		{
			if(lineItem.colorId==colorList[index].colorId)
			{
				sizeVariants=colorList[index].sizeVariants;
				break;
			}
			
		}
		for(index=0;index<sizeVariants.length;index++)
		{
			if(lineItem.productVariantId==sizeVariants[index].productVariantId)
			{
				quantityAvl=sizeVariants[index].quantity;
				break;
			}
		}
		if(quantityAvl>=(parseInt(quantityInCart)+1))
		{
			proceed=true;
		}
		else
		{
			$('#message_'+sequenceId).show();
			if(toShow==true)
			{
				showShoppingCart();	
			}
			proceed=false;
		}
		/////console.log("quantity in cart is "+quantityInCart+" and quantity in inventory map is "+quantityAvl)
	}
		
	if(proceed==true)
	{
		//////console.log("quantity avl is "+quantityAvl+" and quantity is cart is "+quantityInCart);
		$('#message_'+sequenceId).hide();
		$.ajax({url:'/addItemToCart.htm?detailLevel='+inventoryDetail,
			async:'true',
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'POST',
			data:$.toJSON(lineItem),
			success:function(res){
				if(res.responseCode>0){		
					if(inventoryDetail==1){
						inventory[lineItem.productId]=res.inventory[lineItem.productId];
					}
					lineItem.sequenceId=res.responseCode;
					var colorList=inventory[lineItem.productId];
					var carItems=res.shoppingCart.lineItems;
					var index=0;
					var cartItem=null;
					for(index=0;index<carItems.length;index++){
						if(carItems[index].productVariantId==lineItem.productVariantId){
							cartItem=carItems[index];
							break;
						}					
					}
					loadShoppingCart(toShow); 
					$('#cartCount').html('('+res.shoppingCart.lineItems.length+') CART');
					$('#cartCount_popUp').html('('+res.shoppingCart.lineItems.length+')');
					if(readCookie('Facebook')==null)
						{
							$('#cartSubtotal').text(res.shoppingCart.subTotal.toFixed(2));
						}
					
					//changeCurrency(currencyType);
					//$(".custom_dropdown").kgcustomdropdown();
					//console.log("response code is "+res.responseCode);
					retval=res.responseCode;
					//_gaq.push(['_trackEvent', 'ShoppingCart', 'addItem', 'ShoppingCartPopup',lineItem.quantity]);
				}
				else{
					//console.log("return val is -1");
					//async need to handle
					retval= -1;
					//Error while adding to cart
				}
				
			}
			});
		retval=1;
		createCookie("isCartEmpty","false");
	}
	else
	{
		retval=0;
		showShoppingCart();
	}
	
//	$('.loading_page').hide();
	//console.log("retval is "+retval);
	if(callback!=undefined)
		callback(retval);
	return retval;
}

function removeItem(sequenceId)
{
	var myVariantId=$("#variant_"+sequenceId).val();
	$.ajax({url:'/deleteItems.htm',
		dataType:'json',
		cache:false,
		type:'GET',
		data:{variantId:myVariantId},
		success:function(res){
			
			if(res.responseCode>0){
				
				$("#message_"+sequenceId).hide();
				$("#item_"+sequenceId).remove();  
				$('#cartCount').html('('+res.shoppingCart.lineItems.length+') CART');
				$('#cartCount_popUp').html('('+res.shoppingCart.lineItems.length+')');
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					savingsForDiscountProgram();

					/*	if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}*/
		    		
				}
		       else
			   {
			    	//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
		    		else
		    			{
		    			$('#cartsavings').css('display','none');
		    			}
		    		
			   }
				
				
				if(res.shoppingCart.lineItems.length==0||res.shoppingCart.lineItems==null)
				{
					//$("#cartWithoutContent").show();
					//$("#cartWithContent").hide();
				}
				//UI Refresh
				if($("#cartItems li[id^='item_']").length==0){
					createCookie('isCartEmpty', 'true');
					//console.log("cart empty cookie value after removing the cart items is :: "+readCookie('isCartEmpty'));
					$("#cartWithoutContent").show();
					$("#cartWithContent").hide();
				}
				
			}
			else
			{
				//console.log(" some error ");
			}
			
		}
	});
}

function updateLineItemInCart(colorList,lineItem,wishlist)
{
	var sequenceId=lineItem.sequenceId;
	var element=$("#item_"+sequenceId);
	////console.log("Item Found or NOT : "+element.length);
	////console.log("ColorList "+colorList);
	if(element.length==0){
		populateColorAndSizesForProduct(colorList,lineItem);
	}
	else{
		$("#price_"+sequenceId).text('$'+lineItem.price.toFixed(2));
		$("#quantity_"+sequenceId).val(lineItem.quantity);
		if(isMobileDevice())
			$('#quantities_'+sequenceId).val(lineItem.quantity);
	}
	
	if(wishlist=="true")
	{
		showShoppingCart();	
	}
	
}

function onColorChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#colors_'+sequenceId+' option:selected').attr('id');
	$('#color_'+sequenceId).text($('#colors_'+sequenceId+' option:selected').text());
	
	$("#message_"+sequenceId).hide();
	////console.log("COLOR CHANGE "+sequenceId+" ColorID "+element.id+" ColorName :"+$("#color_"+sequenceId).val());
	var colorId=elementId;
	var oldColorId=$("#colorId_"+sequenceId).val();
	if(oldColorId==colorId)
		return;
	
	var productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split('-');
	var isSale=false;
	var isPreOrder=false;
	var colorName=$('#colors_'+sequenceId+' option:selected').attr('name');
	
	
	var imageUrl=getImageUrl(vendorName[0],productName,colorName);
	$("#image_"+sequenceId).attr("src",imageUrl);
	var productId=$("#product_"+sequenceId).val();
	var oldVariant=$("#variant_"+sequenceId).val();
	//console.log("Oldvariant id is "+oldVariant);
	var newVariant=null;
	var firstVariant=null;
	
	var size=$("#size_"+sequenceId).text();
	////console.log("SIZE IN CHANGE COLOR "+size);
	var colorList=inventory[productId];
	var colorIndex=0,quantityInCart=0;
	var retailprice="";
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++){
		var colorVariant=colorList[colorIndex];
		if(colorVariant.colorId==colorId){			
			var sizeList=colorVariant.sizeVariants;
			var sizeHTML='',qtyHTML='';
			var sizeIndex=0,firstSize;		
			var qtyAvailable=0,unitprice=0.0;
			for(sizeIndex=0;sizeIndex<sizeList.length;sizeIndex++){
				var sizeVariant=sizeList[sizeIndex];
				if(sizeIndex==0){
					qtyAvailable=sizeVariant.quantity;
					firstVariant=sizeVariant.productVariantId;
					//console.log("firstVariant is "+firstVariant);
					firstSize=sizeVariant.size;
					unitprice=sizeVariant.salePrice>0.0?sizeVariant.salePrice:sizeVariant.retailPrice;
					retailprice=sizeVariant.retailPrice;
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					
				}
				if(!isMobileDevice()){
					if(parseFloat(sizeVariant.size)==parseFloat(size))
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				}
				else{
					if(parseFloat(sizeVariant.size)==parseFloat(size))
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				}
				if(parseFloat(sizeVariant.size)==parseFloat(size)){
					newVariant=sizeVariant.productVariantId;
					//console.log("matched variant is "+newVariant);
					unitprice=sizeVariant.salePrice>0.0?sizeVariant.salePrice:sizeVariant.retailPrice;
					retailprice=sizeVariant.retailPrice;
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					qtyAvailable=sizeVariant.quantity;
					quantityInCart=getQuantityInCart(newVariant);
				}		
			}
			var count=1;
			//if(qtyAvailable<$("#quantity_"+sequenceId).val())
				//$("#quantity_"+sequenceId).val(1);
			
			while(count<=qtyAvailable)
			{
				if(!isMobileDevice()){
					if($("#quantity_"+sequenceId).text()==count)
						qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
					else
						qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				else{
					if($("#quantity_"+sequenceId).text()==count)
						qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
					else
						qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						
				}
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHTML);
		
			$("#sizes_"+sequenceId).html(sizeHTML);
			////console.log("COLOR CHANGE : "+sizeHTML);
			//$(".custom_dropdown").kgcustomdropdown();
			break;
		}
	}
	var totalQty=parseInt(quantityInCart,10)+parseInt($("#quantity_"+sequenceId).text(),10);
	var lineItem=getLineItem(sequenceId);
	
	//console.log(" retail price "+retailprice);
	
	if(newVariant==null||totalQty>qtyAvailable){
		if(totalQty>qtyAvailable&&$("li[id^='item_']").length>1)
		{
		removeItem(sequenceId);
		$(".loading_page").css('display','none');
		return;
		}
		$("#size_"+sequenceId).text(firstSize.replace(".0",""));
		lineItem.size=firstSize;
		lineItem.productVariantId=firstVariant;
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.quantity=1;
		lineItem.colorId=colorId;
		lineItem.retailPrice=retailprice;
		$("#quantity_"+sequenceId).text(1);
		$("#variant_"+sequenceId).val(firstVariant);
		$("#colorId_"+sequenceId).val(colorId);
		//console.log("Oldvariant id is "+oldVariant);
		//newVariant=oldVariant;
		//$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		////console.log("Inventory NOT AVAILABLE");
		$("#sizes_"+sequenceId).val(firstSize.replace(".0",""));
		$("#quantities_"+sequenceId).val(1);
	}
	else{
		////console.log("Inventory AVAILABLE "+newVariant);
		//$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$("#variant_"+sequenceId).val(newVariant);
		$("#colorId_"+sequenceId).val(colorId);
		$("#size_"+sequenceId).text(size.replace(".0",""));
		//console.log("new variant is "+newVariant)
		lineItem.size=size;
		lineItem.productVariantId=newVariant;
		lineItem.colorId=colorId;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		
		if(qtyAvailable<$("#quantity_"+sequenceId).text())
		{
			$("#quantity_"+sequenceId).text(1);
			lineItem.quantity=1;
		}
		else
			lineItem.quantity=$("#quantity_"+sequenceId).text();
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.retailPrice=retailprice;
		$("#sizes_"+sequenceId).val(size.replace(".0",""));
		$("#quantities_"+sequenceId).val(lineItem.quantity);
	}
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariant,
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'POST',
			data:$.toJSON(lineItem),
			success:function(res){
				if(res.responseCode<0){
					////console.log("Error while updating Item");
					$(".loading_page").css('display','none');
					return;
				}
				var index=0,cartItem;
				var cartItems=res.shoppingCart.lineItems;
				for(index=0;index<cartItems.length;index++){
					cartItem=cartItems[index];
					if(res.responseCode==cartItem.sequenceId){
						break;
					}		
				}
				//It means that the item need to be merged with other item in the cart and the quantity also need to be updated.
				if(res.responseCode!=sequenceId){
					////console.log("Remove the Item and Added Qty : "+cartItem.quantity);
					$("#quantity_"+res.responseCode).text(cartItem.quantity);
					//if(isMobileDevice())
						$("#quantities_"+res.responseCode).val(cartItem.quantity);
					$("#item_"+sequenceId).remove();
					if(cartItem.isSale==true)
					{
						//console.log(" cart item is sale ");
						//$("#sale_"+sequenceId).removeClass("dn");
						$('#cartsavings').show();
						$('#cart_price_'+res.responseCode).html('<strike id="strike_retailPrice_'+res.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+res.responseCode+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
					}
					else
					{
						//console.log(" cart item is non sale ");
						if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
						{
							var single_Price = cartItem.price/cartItem.quantity;
							var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
							$("#real_price_"+res.responseCode).val((parseFloat(cartItem.price)).toFixed(2));
							$('#cart_price_'+res.responseCode).html('<strike id="strike_retailPrice_'+res.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+res.responseCode+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
						}
						else
						{
							$("#sale_"+res.responseCode).addClass("dn");
							$('#cartsavings').hide();
							$('#cart_price_'+res.responseCode).html('<b id="price_'+res.responseCode+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
						}
					}
				}
				
				if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					$("#real_price_"+res.responseCode).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#price_"+res.responseCode).text('$'+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#strike_retailPrice_"+res.responseCode).text('$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2));
				}
				
				
				$("#colorId_"+sequenceId).val(colorId);
				if(cartItem.isPreOrder==true)
				{
					$("#preOrder_"+cartItem.sequenceId).removeClass("dn");
				}
				
				//console.log(" sale "+cartItem.isSale);
				
				
				if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
					{
						//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.toFixed(2));
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
					{
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else if(cartItem.isSale==true)
					{
						//$("#sale_"+sequenceId).removeClass("dn");
						//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.strike_salePrice_toFixed(2));
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
				}
				else if(cartItem.isSale==true)
				{
					//console.log(" cart item is sale ");
					//$("#sale_"+sequenceId).removeClass("dn");
					//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.strike_salePrice_toFixed(2));
					$('#cartsavings').show();
					$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
				}
				else
				{
					if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
					{
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)).toFixed(2));
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else
					{
						//console.log(" cart item is non sale ");
						$("#sale_"+sequenceId).addClass("dn");     
						$('#cartsavings').hide();
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)).toFixed(2));
						$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
				}
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					savingsForDiscountProgram();
				}
				else
			    {
					//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0'){
		    			$('#cartsavings').css('display','block');
		    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
			    }
				
				//console.log(" rp"+'$'+res.shoppingCart.totalRetialPrice.toFixed(2)+" total "+'$'+res.shoppingCart.subTotal.toFixed(2)+" saving "+'-$'+res.shoppingCart.savings.toFixed(2));
				
				$('#color_'+sequenceId).text($('#colors_'+sequenceId+' option:selected').text());//custom dropdown fix needed
			//	$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	    		/*$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
	    		if(res.shoppingCart.savings!='0.0'){
	    			$('#cartsavings').css('display','block');
	    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
	    		}*/
	    		$(".loading_page").css('display','none');
			}
		
		});
		
		

}

function onSizeChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#sizes_'+sequenceId+' option:selected').attr('id');
	$('#size_'+sequenceId).text($('#sizes_'+sequenceId+' option:selected').text());
	
	//console.log("original text is --------->"+$(element.text()));
	//console.log("Selected value is "+parseFloat($(element).text())+' and oldvalue '+$('#size_'+sequenceId).val());
	//console.log('On Size Change SequenceID '+sequenceId);
	$("#message_"+sequenceId).hide();
	//if(parseFloat($(element).text())==$('#size_'+sequenceId).val())
		//return;
	//console.log('Calling');
	var unitPrice=0.0;
	var sizeExists=false;
	var qtyHtml='';
	var sizeVariants;
	var isSale=false;
	var isPreOrder=false;
	var oldQty=$("#quantity_"+sequenceId).val();
	var lineItem=getLineItem(sequenceId);
	var quantityInCart=getQuantityInCart(elementId);
	lineItem.productVariantId=elementId;
	//console.log("pv id is "+element.id);
	lineItem.size=parseFloat($('#sizes_'+sequenceId+' option:selected').text());
	var productId=lineItem.productId;
	var quantityAvl=0;
	var colorId=$('#colorId_'+sequenceId).val();
	var oldVariantId=$('#variant_'+sequenceId).val();
	var colorList=inventory[productId];
	//alert(colorList);
	var colorIndex=0;
	var variantIndex=0;
	var proceed=false;
	var retialprice;
	
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++)
	{
		if(colorList[colorIndex].colorId==colorId)
		{
			sizeVariants=colorList[colorIndex].sizeVariants;
		}
		
	}
	
	//console.log('11111111111111');
	
	
	
	for(variantIndex=0;variantIndex<sizeVariants.length;variantIndex++)
	{
		//console.log('222222222222');
		
		if(sizeVariants[variantIndex].productVariantId==elementId)
		{
			sizeExists=true;
			quantityAvl=sizeVariants[variantIndex].quantity;
			if(quantityAvl<(parseInt(quantityInCart,10)+1)&&$("li[id^='item_']").length>1)
			{
				removeItem(sequenceId);
				$(".loading_page").css('display','none');
				return;
			}
			$("#quantity_"+sequenceId).text(1);
			$("#quantities_"+sequenceId).val(1);
			lineItem.quantity=1;
			//console.log('----salePrice is '+sizeVariants[variantIndex].salePrice);
			unitPrice=sizeVariants[variantIndex].salePrice>0.0?sizeVariants[variantIndex].salePrice:sizeVariants[variantIndex].retailPrice;
			lineItem.unitPrice=unitPrice;
			//console.log('----lineItem.unitPrice is '+lineItem.unitPrice);
			if(sizeVariants[variantIndex].salePrice>0.0)
				isSale=true;
			if(sizeVariants[variantIndex].isPreOrder==true)
				isPreOrder=true;
			lineItem.isSale=isSale;
			lineItem.isPreOrder=isPreOrder;
			lineItem.retailPrice=sizeVariants[variantIndex].retailPrice;
			//console.log('sizeVariants[variantIndex].retailPrice is ----> is '+sizeVariants[variantIndex].retailPrice+' and lineItem.retailPrice is ----> '+lineItem.retailPrice);
			
			var count=1;
			while(count<=quantityAvl)
			{
				if(!isMobileDevice()){
					if(oldQty==count)
						qtyHtml+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					else
						qtyHtml+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				else{
					if(oldQty==count)
						qtyHtml+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					else
						qtyHtml+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHtml);
			break;
		}
		
	}
	
	//console.log('333333333333');
	
	if(sizeExists==true)
	{
		//$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		
		
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariantId,
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'post',
			data:$.toJSON(lineItem),
			success:function(data)
			{
				//console.log('44444444444444444');		
				if(data.responseCode>0)
				{
					//console.log('5555555555555555555    ------> '+data.responseCode);
					
					//$("#message_"+sequenceId).hide();
					$('#variant_'+data.responseCode).val(elementId);
					var cartItems=data.shoppingCart.lineItems;
					var lineIndex=0;
					for(lineIndex=0;lineIndex<cartItems.length;lineIndex++)
					{
						//console.log('666666666666');
						
						if(sequenceId==cartItems[lineIndex].sequenceId)
						{
							
							//console.log('77777777777777777');
							
							$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							if(cartItems[lineIndex].isPreOrder==true)
							{
								$("#preOrder_"+sequenceId).removeClass("dn");
							}
							
							if(cartItems[lineIndex].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
								if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
								{
									$("#sale_"+sequenceId).text('FINAL SALE');
									//console.log('SalePrice  is --->'+cartItems[lineIndex].price.toFixed(2));
									//console.log('SalePrice for SingleQuantity is --->'+(cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
									//console.log('Retail Price  is --->'+cartItems[lineIndex].retailPrice);
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									//$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$('#cartsavings').show();
								}
								else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									$('#cartsavings').show();
								}
								else if(cartItems[lineIndex].isSale==true)
								{
									$("#sale_"+sequenceId).text('SALE');
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItems[lineIndex].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)).toFixed(2));
									//$("#price_"+lineItem.sequenceId).css({'color':'red'});
								}
							}
							
							else if(cartItems[lineIndex].isSale==true)
							{
								//console.log('88888888888888888');
								
								$("#sale_"+sequenceId).text('SALE');
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItems[lineIndex].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)).toFixed(2));
								//$("#price_"+lineItem.sequenceId).css({'color':'red'});
							}
							else
							{
								if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									//console.log("price :: "+cartItems[lineIndex].price);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								}
								else
								{
									//console.log('999999999999999');
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$('.cart_price'+lineItem.sequenceId).html('<b id="price_'+lineItem.sequenceId+'">$'+cartItems[lineIndex].retailPrice.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								}
								
							}
							
							
							/*if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
							{
								
								//console.log('10101010101010101010');
								
								$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#price_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else
								{
								
								//console.log('11-11-111-111111');
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
								}*/
							$("#size_"+sequenceId).val(cartItems[lineIndex].size);
							$("#sizes_"+sequenceId).val(cartItems[lineIndex].size.replace(".0",""));
							break;
						}
						if(data.responseCode!=sequenceId){
							//console.log("Remove the Item and Added Qty : "+cartItem.quantity);  // Something Grouping
							$("#quantity_"+data.responseCode).text(cartItems[lineIndex].quantity);
							if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
                                //console.log('SalePrice  is --->'+cartItems[lineIndex].price.toFixed(2));
								//console.log('SalePrice for SingleQuantity is --->'+(cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity);
								var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
								var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
								//console.log('Retail Price  is --->'+cartItems[lineIndex].retailPrice);
								$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike><b id="price_'+data.responseCode+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
								$("#real_price_"+data.responseCode).val((DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2));
								//$("#real_price_"+data.responseCode).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								//$("#price_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else if(lineItem.isSale==true)
							{
								$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike><b id="price_'+data.responseCode+'">$'+(cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+data.responseCode).val(parseFloat((cartItems[lineIndex].quantity).toFixed(2)));
							}
							
							else
							{
								if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									//console.log("price :: "+cartItems[lineIndex].price);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$("#real_price_"+data.responseCode).val(cartItems[lineIndex].price.toFixed(2));
									$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+data.responseCode+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								}
								else
								{
									$('#cart_price_'+data.responseCode).html('<b id="price_'+data.responseCode+'">$'+(cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
									$("#real_price_"+data.responseCode).val(parseFloat(cartItems[lineIndex].price.toFixed(2)));
									$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2));
								}
							}
							//$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2));
							$("#item_"+sequenceId).remove();
							//if(isMobileDevice())
								$("#quantities_"+data.responseCode).val(cartItems[lineIndex].quantity);
						}
					}
					if(readCookie('Facebook')!=null  && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
					{
						savingsForDiscountProgram();
					}
					else
				    {
						//$('#subTotal_Price').text('$'+data.shoppingCart.totalRetialPrice.toFixed(2));
			    		$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
			    		if(data.shoppingCart.savings!='0.0')
			    		{
			    			$('#cartsavings').css('display','block');
				    		$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
			    		}
				    }
					
//					console.log("sb"+'$'+data.shoppingCart.totalRetialPrice.toFixed(2));
//					console.log("sv"+'-$'+data.shoppingCart.savings.toFixed(2))
//					console.log("sb"+'$'+data.shoppingCart.subTotal.toFixed(2))
					
					
				//	$('#subTotal_Price').text('$'+data.shoppingCart.totalRetialPrice.toFixed(2));
		    	//	$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));//Commented by m5k
		    		/*if(data.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
		    		}*/
		    		$(".loading_page").css('display','none');
					
				}
				
			}
		
			});
	}
	else
	{
		$("#quantity_"+sequenceId).text(oldQty);
		$("#quantities_"+sequenceId).val(oldQty);
		$(".loading_page").css('display','none');
		//$('#size_'+sequenceId).val(oldSize);
		//$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		//console.log("Inventory NOT AVAILABLE");
	}
	//changeCurrency(currencyType);
	//$(".custom_dropdown").kgcustomdropdown();
}

function onQuantityChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#quantities_'+sequenceId+' option:selected').attr('id');
	$('#quantity_'+sequenceId).text($('#quantities_'+sequenceId+' option:selected').text());
	
	$("#message_"+sequenceId).hide();
	var oldQuantity=$("#quantity_"+sequenceId).text();
	var newQuantity=elementId;
	var myVariantId=$("#variant_"+sequenceId).val();
//	if(oldQuantity==newQuantity)
//		return;
	$.ajax({url:'/updateQuantity.htm',
		dataType:'json',
		cache:false,
		data:{variantId:myVariantId,quantity:newQuantity},
		success:function(res){
			if(res.responseCode>0){
				////console.log('success in updating quantity');
				var index=0;
				var carItems=res.shoppingCart.lineItems;
				for(index=0;index<carItems.length;index++){
					if(carItems[index].sequenceId==sequenceId){
						
						
						if(carItems[index].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
						{
							if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
							{
								$("#sale_"+sequenceId).text('FINAL SALE');
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
								$("#price_"+sequenceId).text('$'+(parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+sequenceId).val((parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
							}
							else if(carItems[index].isSale==true)
							{
								$("#sale_"+sequenceId).text('SALE');
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val(parseFloat(carItems[index].retailPrice).toFixed(2));
							}
						}
						else if(carItems[index].isSale==true)
						{
							$("#sale_"+sequenceId).text('SALE');
							$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
							$("#real_price_"+sequenceId).val(parseFloat(carItems[index].retailPrice).toFixed(2));
						}
						else
						{
							//console.log("coming into non-sale condition");
							if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								console.log("coming to correct condition");
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								console.log("price:: "+tempSalePrice+" && discount sale price :: "+DiscountedSalePrice);
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
							}
							else
							{
								$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val(parseFloat(carItems[index].price).toFixed(2));
							}
						}
							
						break;
					}	
				}
				$("#quantity_"+sequenceId).text(newQuantity);
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
					{
						savingsForDiscountProgram();
					}
				else {
					//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
		    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
				}
				
				//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	    		//$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));//Chithra commented
	    		/*if(res.shoppingCart.savings!='0.0')
	    		{
	    			$('#cartsavings').css('display','block');
	    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
	    		}*/
	    		$(".loading_page").css('display','none');
			}
			else{
				//error;
				$("#quantity_"+sequenceId).text(oldQuantity);
				$("#quantities_"+sequenceId).val(oldQuantity);
				$(".loading_page").css('display','none');
			}
			//$(".loading_page").css('display','none');
		}
	});
}

function fetchInventoryForProduct(lineItem)
{
	$.ajax({url:'/getInventoryForProduct.htm',
			dataType:'json',
			cache:false,
			data:{productId:lineItem.productId},
			success:function(data){
				//alert("Inventory GOT : "+data);
				inventory[lineItem.productId]=data;
				populateColorAndSizesForProduct(data,lineItem);
			}
		});
}

function populateColorAndSizesForProduct(colorList,lineItem)
{
	var sizeHTML='';
	var qtyHTML='';	
	var myHTML= '<li id="item_'+lineItem.sequenceId+'" >';
	myHTML+='<div class="cart_shoe_list">';
	myHTML+='<a class="cart_shoe_thumb" href=\"/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html\">';
	myHTML+='<img id="image_'+lineItem.sequenceId+'" width="120" height="90" src="'+getImageUrl(lineItem.vendorName,lineItem.productName,lineItem.colorName)+'"  /></a>';
	myHTML+='<a href=\"/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html\">';
	myHTML+='<div class="cart_shoe_dts">';
	myHTML+='<b id="productName_'+lineItem.sequenceId+'" >'+lineItem.productName+'</b><br/>';
	myHTML+='<span id="vendorName_'+lineItem.sequenceId+'"  >'+lineItem.vendorName+'</span>';
	myHTML+='<input type="hidden" name="product" id="product_'+lineItem.sequenceId+'" value="'+lineItem.productId+'"/>';
	myHTML+='<input type="hidden" name="variant" id="variant_'+lineItem.sequenceId+'" value="'+lineItem.productVariantId+'"/>';
	myHTML+='<input type="hidden" name="colorId" id="colorId_'+lineItem.sequenceId+'" value="'+lineItem.colorId+'"/>';
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Final Sale</h1> <h1 id="sale_'+lineItem.sequenceId+'">Final Sale</h1>';
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
		}
		else if(lineItem.isSale==true)
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" >Sale</h1>';
		}
		
		else
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
		}
	}
	
	else if(lineItem.isSale==true)
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" >Sale</h1>';
	}
	
	else
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
	}
	
	
	/*
	if(lineItem.isSale==true)
	{
		myHTML+='<h1 id="sale_'+lineItem.sequenceId+'">Sale</h1>';
	}
	if(lineItem.isPreOrder==true)
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'">PREORDER</h1>';/
	}*/
	
	myHTML+=' </div></a>';
	
	
	myHTML+='<div class=cart_price id=cart_price_'+lineItem.sequenceId+'>';
	
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			var flag_Single = lineItem.price/lineItem.quantity;
			//console.log("lineItem price is :: "+lineItem.price);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			//console.log("coming to brand sale");
			var flag_Single = lineItem.price/lineItem.quantity;
			//console.log("lineItem price duplicate is :: "+lineItem.price);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else if(lineItem.isSale==true)
		{
			//console.log("populate sale shoe not to real sale");
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
		}
		else
		{
			myHTML+='<b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
		}
	}
	
	else if(lineItem.isSale==true)
	{
		myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
	}
	else
	{
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			//console.log("populate line item price is :: "+lineItem.retailPrice);
			//myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
			var flag_Single = lineItem.retailPrice;
			//console.log("lineItem price duplicate is :: "+lineItem.price);
			//console.log("quantity value :: "+lineItem.quantity);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else
			myHTML+='<b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
	}
	
	myHTML+=' <code onclick="removeItem('+lineItem.sequenceId+');"  class="close_cart_shoe"></code>';
	myHTML+='</div>';
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			//console.log("8");
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>";
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>";
		}
		else if(lineItem.isSale==true)
		{
			
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.price).toFixed(2)+"\"/>";
		}
		
		else
		{
		myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.retailPrice).toFixed(2)+"\"/>";
		}
	}
	
	else if(lineItem.isSale==true)
	{
		
		myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.price).toFixed(2)+"\"/>";
	}
	
	else
	{
	myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.retailPrice).toFixed(2)+"\"/>";
	}
	
	
	myHTML+=' <div class="clearall"></div>';
	myHTML+='</div><!--cart_shoe_list-->';
	myHTML+='<div class="cart_popup_details">';
	myHTML+=' <div class="size_color_labels">';
	myHTML+='  <label class="color">COLOR:</label>';
	myHTML+=' <label>U.S. SIZE:</label>';
	myHTML+=' <label>QTY:</label>';
	myHTML+=' </div>';
	
	var colorHTML='';
	if(!isMobileDevice()){
		colorHTML+='<div class="custom_select cus_select color_select_dd">';
		colorHTML+=' <div class="select">';
		colorHTML+='       <p class="country" id="color_'+lineItem.sequenceId+'" name="'+lineItem.colorName+'" >'+lineItem.colorName.toUpperCase()+'</p>';
//		colorHTML+='     <span class="custom_drop_nav"></span>';
		colorHTML+=' </div>';
		colorHTML+='<select name="color" data-default="3"  class="custom_select_value_act"  onchange="onColorChange(\''+lineItem.sequenceId+'\')" id="colors_'+lineItem.sequenceId+'">';	
	}
	else{
		colorHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.colorName+'" class="select_fields" id="color_'+lineItem.sequenceId+'" name="color">';
		colorHTML+='<select name="color" data-default="3"  class="custom_select_value_act" onchange="onColorChange(\''+lineItem.sequenceId+'\')" id="colors_'+lineItem.sequenceId+'">';		
	}
	
	var colorIndex=0;
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++){
		var color=colorList[colorIndex];
		if(!isMobileDevice()){
			if(lineItem.colorName==color.colorName)
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'" selected="selected">'+color.colorName.toUpperCase()+'</option>';
			else
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'">'+color.colorName.toUpperCase()+'</option>';
		}
		else{
			if(lineItem.colorName==color.colorName)
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'" selected="selected">'+color.colorName.toUpperCase()+'</option>';
			else
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'">'+color.colorName.toUpperCase()+'</option>';
		}
	
		if(color.colorId==lineItem.colorId)
		{
			var sizeList=color.sizeVariants;
			sizeHTML='';
			if(!isMobileDevice()){
				sizeHTML+='<div class="custom_select cart_cus_select cus_select">';
				sizeHTML+=' <div class="select">';
				sizeHTML+=' <p class="country" id="size_'+lineItem.sequenceId+'"  >'+lineItem.size.replace(".0","")+'</p>';
//				sizeHTML+=' <span class="custom_drop_nav"></span>';
				sizeHTML+=' </div>';
				sizeHTML+=' <select name="size" data-default="3" class="custom_select_value_act"  onchange="onSizeChange(\''+lineItem.sequenceId+'\')" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML+='  <div class="custom_select cart_cus_select cus_select">';
				qtyHTML+=' <div class="select">';
				qtyHTML+=' <p class="country" id="quantity_'+lineItem.sequenceId+'" >'+lineItem.quantity+'</p>';
//				qtyHTML+=' <span class="custom_drop_nav"></span>';
				qtyHTML+=' </div>';
				qtyHTML+='<select  name="size" data-default="3" class="custom_select_value_act" onchange="onQuantityChange(\''+lineItem.sequenceId+'\')" id="quantities_'+lineItem.sequenceId+'">';
			}
			else
			{
				sizeHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.size+'" class="select_fields" id="size_'+lineItem.sequenceId+'"  name="size">';
				sizeHTML+='<select name="size" class="size_Cart_mob" data-default="3" class="custom_select_value_act"  onchange="onSizeChange(\''+lineItem.sequenceId+'\')" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.quantity+'" class="select_fields" id="quantity_'+lineItem.sequenceId+'"  name="quantity">';
				qtyHTML+='<select  name="size" data-default="3" class="qty_Cart_mob" class="custom_select_value_act" onchange="onQuantityChange(\''+lineItem.sequenceId+'\')" id="quantities_'+lineItem.sequenceId+'">';				
			}
			
			var sizeIndex=0;

			for(sizeIndex=0;sizeIndex<sizeList.length;sizeIndex++){
				var sizeVariant=sizeList[sizeIndex];
				if(!isMobileDevice()){
					if(parseFloat(lineItem.size)==sizeVariant.size)
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				}
				else{
					if(parseFloat(lineItem.size)==sizeVariant.size)
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				}
					
				
				if(sizeVariant.productVariantId==lineItem.productVariantId){
					var count=1;
					while(count<=sizeVariant.quantity){
						if(!isMobileDevice()){
							if(lineItem.quantity==count)
								qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
							else
								qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						}
						else{
							if(lineItem.quantity==count)
								qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
							else
								qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						}
						count++;
					}			
				}
				
			}//End of Size loop
			if(!isMobileDevice()){
				sizeHTML+='</select></div>';
				qtyHTML+='</select></div>';			
			}
			else{
				sizeHTML+='</select></div>';
				qtyHTML+='</select></div>';			

			}
			//break;
		}
	}
	
	if(!isMobileDevice()){
		colorHTML+='</select>';
		colorHTML+='</div><!-- custome_select--->';
	}
	else{
		colorHTML+='</select>';
		colorHTML+='</div><!-- custome_select--->';
	}
	
	myHTML+=colorHTML;
	myHTML+=sizeHTML;
	myHTML+=qtyHTML;
	myHTML+='</div>';
	myHTML+='<div class="clearall"></div>';
	myHTML+='</li>';
	myHTML+='<li style="display: none;" id="message_'+lineItem.sequenceId+'">';
		myHTML+='<div class="error_oh_snap_holder error_cart">';
			myHTML+='	<img width="120" border="0" height="90" src="'+getImageUrl(lineItem.vendorName,lineItem.productName,lineItem.colorName)+'"  id="outofstockimage_'+lineItem.sequenceId+'">';
				myHTML+='<h3> OH SNAP. THESE ARE OUT OF STOCK.</h3>';
				myHTML+='<div class="clearall"></div>';
					myHTML+='<font id="notify_'+lineItem.sequenceId+'" >DO YOU WANT US TO EMAIL YOU WHEN WE GOT MORE IN-STOCK?</font>';
					myHTML+='<span class="notify" id="outofstocknotify_'+lineItem.sequenceId+'" onclick="sendNotifyRequest('+lineItem.sequenceId+')">NOTIFY ME</span>';
					myHTML+='<font id="thanks_'+lineItem.sequenceId+'" style="display:none">THANKS! WE\'L\L GIVE YOU A HEADS UP WHEN WE GET MORE IN-STOCK.</font>';
						myHTML+='	</div>';
							myHTML+='</li>';
	$("#cartItems").append(myHTML);

}


function showidp(lineItem)
{
	window.location.href='\'/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html';
}

function populateSizesForColor(productId,colorId)
{
	var colorList=inventory[productId];
	if(colorList==undefined)
		return;
	$(colorList).each(function(index,color){
		if(color.colorId==colorId)
		{
			var sizeList=color.sizeVariants;
			$(sizeList).each(function(index,sizeVariant){
				//sizeVariant.size,colorVariant.quantity,sizeVariant.retailPrice;
				return false;
			});
			return false;
		}
	});
}

function showShoppingCart()
{
	_gaq.push(['_trackPageview', '/shoppingCart']);
	$(".loading_page").hide();
	$('code.processing_icon').css('display:none');
	if($("#cartItems li[id^='item_']").length==0){
		$("#cartWithoutContent").show();
		$("#cartWithContent").hide();
	}
	else{
		$("#cartWithoutContent").hide();
		$("#cartWithContent").show();
	}

	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px');
	$('.cart_popup').fadeIn();
	$('.cart_popup_holder').fadeIn();
	//checkForSaleShoesForFBLogin();
	//changeCurrency(currencyType);
	//$(".custom_dropdown").kgcustomdropdown();
}

function getLineItem(sequenceId)
{
	var lineItem=new Object();
	lineItem.productId=$('#product_'+sequenceId).val();
	lineItem.productVariantId=$("#variant_"+sequenceId).val();
	lineItem.colorName=$('#colors_'+sequenceId+' option:selected').attr('name');
	lineItem.size=$('#size_'+sequenceId).text();
	lineItem.quantity=$('#quantity_'+sequenceId).text();
	lineItem.productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split('-');
	lineItem.vendorName=$.trim(vendorName[0]);
	lineItem.colorId=$('#colorId_'+sequenceId).val();
	lineItem.retailPrice=$('#real_price_'+sequenceId).val();
	lineItem.sequenceId=sequenceId;
	if($("#saleprice_div").text().indexOf('Final Sale')!=-1)
	{
		if($.trim($('#saleprice_div').text().replace('Final Sale $',''))!="")
			lineItem.price=$.trim($('#saleprice_div').text().replace('Final Sale $',''));	
	}
	else
	{
		if($.trim($('#saleprice_div').text().replace('$',''))!="")
			lineItem.price=$.trim($('#saleprice_div').text().replace('$',''));
	}
	
	return lineItem;
}

function getImageUrl(vendorName,productName,colorName)
{
	vendorName=vendorName==null?'':$.trim(vendorName);
	colorName=colorName==null?'':$.trim(colorName);
	productName=productName==null?'':$.trim(productName);
	var imageUrl=imageServer+"/"+vendorName.replace(/ /g,"-").toLowerCase()+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+productName.replace(/ /g,"-")+"-"+"("+colorName.replace(/ /g,"-")+")-010307.jpg";
	
	return imageUrl;
}

function getQuantityInCart(productVariantId)
{
	var liObjects=$('input[name="variant"]');
	var sequenceId;
	var quantity=0;
	for(index=0;index<liObjects.length;index++)
	{
		var obj=liObjects[index];
		if(obj.value==productVariantId)
		{
			var ids=obj.id.split("_");
			var sequenceId=ids[1];
			quantity=$('#quantity_'+sequenceId).text();
			break;
		}
	}
	
	return quantity;
}


function getSequenceIdOfItem(productVariantId)
{
	var liObjects=$('input[name="variant"]');
	var sequenceId=null;
	for(index=0;index<liObjects.length;index++)
	{
		var obj=liObjects[index];
		if(obj.value==productVariantId)
		{
			////console.log("id is "+obj.id);
			var ids=obj.id.split("_");
			sequenceId=ids[1];
			////console.log("sequeceId is "+ids);
			////console.log("sequeceId is "+sequenceId);
			break;
		}
	}
	return sequenceId;
}
function redirectToCheckout()
{
   // $(".popup_processing_icon").addClass('popup_processing_btn');
	$('.cart_credit').addClass('brwn_btn_active');
    $('.popup_processing_icon_credit').css('display','block');
    
	if( $("#cartItems").children("li").length==0){
		$("#cartWithoutContent").show();
		$("#cartWithContent").hide();
		return;
	}
	$("#cartWithoutContent").hide();
	$("#cartWithContent").show();
	
	//document.forms["popupForm"].submit();
	/*var cookieVal=readCookie('orderid');
	var utma=readCookie('__utma');
	var utmb=readCookie('__utmb');
	var utmc=readCookie('__utmc');
	var utmz=readCookie('__utmz');*/
	//window.location='/checkout/sign-in.htm';
	
	if(location.host.indexOf("localhost")!=-1)
	{
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Local SignIn ---->>>>');
			window.location='/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Local AccountInfo ---->>>>');
			window.location='/checkout/account-info.htm';
		}
			//window.location='/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//_gaq.push(['_link', '/checkout/sign-in.htm?orderid='+cookieVal]);
	}
	else
	{
		if(location.host.indexOf("www.solestruck.com")!=-1||location.host.indexOf("beta.solestruck.com")!=-1)
		{
			//location='https://www.solestruck.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://www.solestruck.com/checkout/sign-in.htm?orderid='+cookieVal;
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Live SignIn ---->>>>');
			window.location='https://www.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Live AccountInfo ---->>>>');
			window.location='https://www.solestruck.com/checkout/account-info.htm';
		}
			
			//_gaq.push(['_link', 'https://www.solestruck.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://beta.solestruck.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("live-solestruck.appspot.com")!=-1)
		{
			//location='https://live-solestruck.appspot.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://live-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://www.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Live appspot SignIn ---->>>>');
			window.location='https://www.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Live appspot AccountInfo ---->>>>');
			window.location='https://www.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://live-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://beta.solestruck.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("testing.solestruck.com")!=-1)
		{
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Testing SignIn ---->>>>');
			window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Testing AccountInfo ---->>>>');
			window.location='https://testing.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://testing-solestruck.a-cti.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("testing-solestruck.appspot.com")!=-1 ||location.host.indexOf("gae.solestruck.com")!=-1) 
		{
			//location='https://testing-solestruck.appspot.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://testing-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Testing appspot SignIn ---->>>>');
			window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Testing appspot AccountInfo ---->>>>');
			window.location='https://testing.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://testing-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("development-solestruck.appspot.com")!=-1 ||location.host.indexOf("gae.solestruck.com")!=-1) 
		{
			//window.location='https://development-solestruck.appspot.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Development SignIn ---->>>>');
			window.location='https://development-solestruck.appspot.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Development AccountInfo ---->>>>');
			window.location='https://development-solestruck.appspot.com/checkout/account-info.htm';
		}
			
		}
		/*
		else if(location.host.indexOf("appspot.com")!=-1)
		{
			location='/checkout/sign-in.htm';
		}*/
	}
}


function goToPreviousPage()
{
	history.go(0);	 
	/*//console.log("--------->>>>>>>IN SIDE  goToPreviousPage()");
	 closeCartPopup();
	 closeWishList();
	 close_dontseeyoursize_success_actPopup();*/
}
function hideCartPopUp(){
	$('.cart_popup').hide();
	$('#backgroundPopup').hide();
}
function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}

function redirectToPaypal()
{
	$('.cart_paypal').addClass('pay_btn_active');
	$('.popup_processing_icon_paypal').css('display','block');
	window.location='/redirectToPaypalExpress.htm';
	$('#cartItems ul').unbind('click');
	
}

function sendNotifyRequest(sequenceId)
{
	
	var vendorName = $('#vendorName_'+sequenceId).text();
	var productName = $('#productName_'+sequenceId).text();
	var productID=$('#product_'+sequenceId).val();
	var colorSelID=$('#colors_'+sequenceId+' option:selected').attr('id');
	var colorSelName = $('#color_'+sequenceId).attr('name');
	var size = $('#size_'+sequenceId).text();
	var emailid="";
	
	
//	console.log(" vendorName "+vendorName+" productName  "+productName+" productID "+productID+" colorSelID  "+colorSelID+" colorSelName "+colorSelName+"  size "+size+" emailid "+emailid);
	
	$('.loading_page').show();
	//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajaxSetup({cache:false});
	$.getJSON("/dontSeeYourSizeRegister.htm",{"vendorName":vendorName,"productName":productName,"colorName":colorSelName,"productID":productID,"colorID":colorSelID,"size":size,"emailid":emailid,"alertCheck":true},function(data){
		
		$.ajaxSetup({cache:false});
		$('#outofstocknotify_'+sequenceId).hide();
		$('#inStock_'+sequenceId).hide();
		$('#notify_'+sequenceId).hide();
		$('#thanks_'+sequenceId).show();
		$('.loading_page').hide();
		
		 
	});
	
}

function savingsForDiscountProgram()
{
	//console.log("coming inside the savingsForDiscountProgram function");
	var realTotal=0.0;
	$("b[id^='price_']").each(function(){
		var price = $.trim($(this).text().replace("$",""));
		realTotal+=parseFloat(price);
	});
//	$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
	//console.log("real total value is :: "+realTotal);
	
	var realSubTotal=0.0;
	$("b[id^='price_']").each(function(index,element){
		var price = $.trim($(this).text().replace("$",""));
		ind=index+1;
		var seqId = $(this).attr("id");
		seqId = seqId.substring(seqId.lastIndexOf('_')+1,seqId.length);
		
		//alert($("#strike_retailPrice_"+ind).text());
		if($("#strike_retailPrice_"+seqId).text()!='')
			realSubTotal+=parseFloat(price);
	});
	
	var retailPriceSum=0.0;
	$("strike[id^='strike_retailPrice_']").each(function(){
		retailPriceSum+=parseFloat($.trim($(this).text().replace('$','')));
	});
	if((retailPriceSum-realSubTotal)>0){
		$("#savings_Price").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
		$("#cartsavings").show();
	}
	else
		$("#cartsavings").hide();
	//console.log("retail price sum is :: "+retailPriceSum);
	//console.log("real subtotal value is :: "+realTotal);
	
	if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Order')
	{
		var subTotal = realTotal.toFixed(2);
		var conditionSatisfied = false;
		//console.log("sub total value after to fixed is :: "+subTotal);
		for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
		{
			if(subTotal>=parseFloat($('#minLimits_'+i).val()) && subTotal<parseFloat($('#maxLimits_'+i).val()) && conditionSatisfied==false)
			{
				conditionSatisfied = true;
				discountAmountForSubtotal = $('#discountValues_'+i).val();
				discountAmountForSubtotal = parseFloat(discountAmountForSubtotal).toFixed(2);
				subTotal = subTotal-discountAmountForSubtotal;
				$('#facebook_bonus').text('-$'+discountAmountForSubtotal);
				$('#facebookbonus').show();
				//console.log("coming inside the condition and the subtotal is :: "+subTotal);
				$('#subTotal_Price').text('$'+subTotal.toFixed(2));
			}
		}
		if(conditionSatisfied!=true && conditionSatisfied==false)
		{
			//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
			discountAmountForSubtotal = 0.00;
			subTotal = subTotal-discountAmountForSubtotal;
			$('#facebookbonus').hide();
			//console.log("subtotal after calculation is :: "+subTotal);
			$('#subTotal_Price').text('$'+subTotal.toFixed(2));
		}
		
	}
	else
	{
		discountAmountForSubtotal = 0;
		$('#facebookbonus').hide();
	}
	
//	if((retailPriceSum-realSubTotal)>0)
//	{
//		if(discountAmountForSubtotal!=0 && discountAmountForSubtotal>0)
//		{
//			//console.log("coming inside the discountAmountForSubtotal condition 1");
//			var savingsPrice = (retailPriceSum-realSubTotal).toFixed(2);
//			savingsPrice = parseFloat(savingsPrice)+parseFloat(discountAmountForSubtotal);
//			$("#savings_Price").text('-$'+savingsPrice.toFixed(2));
//			$("#cartsavings").show();
//		}
//		else
//		{
//			$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
//			//console.log("coming to the discountAmountForSubtotal else condition");
//			$("#savings_Price").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
//			$("#cartsavings").show();
//		}
//	}
//	else
//	{
//		if(discountAmountForSubtotal!=0 && discountAmountForSubtotal>0)
//		{
//			var savingsPrice = (retailPriceSum-realSubTotal).toFixed(2);
//			savingsPrice = parseFloat(savingsPrice)+parseFloat(discountAmountForSubtotal);
//			$("#savings_Price").text('-$'+savingsPrice.toFixed(2));
//			$("#cartsavings").show();
//		}
//		else
//		{
//			$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
//			$("#cartsavings").hide();
//		}
//	}
}
/*
function getInventoryForProduct(lineItem)
{
	var colorList=inventory[lineItem.productId];
	if(colorList==undefined){
		fetchInventoryForProduct(lineItem);
		return;
	}
	////console.log("GetInventory "+colorList.length);
	populateColorAndSizesForProduct(colorList,lineItem)
}
*/


/*function checkForSaleShoesForFBLogin()
{

	//console.log('fb sale check');
	var saleFound=false;
	$("#cartItems li div.cart_shoe_prices").each(function(){
		
		
	if($(this).children("b[id^='sale_']:visible").length>0) 
	{

	saleFound=true;
	return false;

	}



	});
	
	
	if(saleFound==true && readCookie('Facebook')==null)
		{
			$(".facebookPopupCart_act").show().parent().show();
		}
}*/

(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var type=typeof o;if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return''+o;}
if(type==='string'){return $.quoteString(o);}
if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
return'['+ret.join(',')+']';}
var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
val=$.toJSON(o[k]);pairs.push(name+':'+val);}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};})(jQuery);


jQuery.fn.kgautocomplete=function(options){
		
		scrollOptions=jQuery.extend({words:[],width:0,height:0,leftAdj:0,topAdj:0,buttonClicked:''},options);
		var list1=scrollOptions.words;
		
		return this.each(function(){
			var id=$(this).attr("id");
			var htmlStrStart="<ul id=\""+id+"_auto\" style=\"background-color:#fff;z-index:8888;border:1px solid #ccc;display:none;position:absolute;padding:0px;margin:0px;overflow:auto;max-height:"+scrollOptions.height+"px;width:"+scrollOptions.width+"px;\">";
			var htmlStrEnd="</ul>";
			var top=$(this).offset().top;
			var left=$(this).offset().left;
			var height=$(this).height();
			
			var list=scrollOptions.words;
			var inter='';
			
			
			$(htmlStrStart+htmlStrEnd).appendTo("body");
		
			$("#"+id+"_auto").offset({top:(top+height+scrollOptions.topAdj),left:(left+scrollOptions.leftAdj)});
			
		
			
				$(this).focus(function(){
					var id=$(this).attr("id");	
			

				}).blur(function(){
						var id=$(this).attr("id");	
						$("#"+id+"_auto").hide();

					}).keyup(function(e){
						
						var code = (e.keyCode ? e.keyCode : e.which);
					    if (code === 27) {
					    	
					    	
					    	$("#"+id+"_auto").hide();
						}
					   
					    if(e.keyCode==8 || e.keyCode==46)
					    {

						var id=$(this).attr("id");	
						var interr='';
						var firstChar=$(this).val().toLowerCase();
						$("#"+id+"_auto").children('li').remove();
						if(firstChar.length>0)
						{
							for(i=0;i<list.length;i++)
							{
								if(list[i].toLowerCase().indexOf(firstChar)==0)
								interr+="<li class=\"results\">"+list[i]+"</li>";

							}
								$(interr).appendTo("#"+id+"_auto");
								
								$("#"+id+"_auto").children('.results').css("cursor","pointer").css("border-bottom","1px dotted #bbb").css("padding","5px").mouseenter(function(){
									$(this).addClass("result_hover");

								}).mouseout(function(){

								$(this).removeClass("result_hover");
								}).mousedown(function(){
								
									var textBoxId=$(this).parent().attr("id").substring(0,$(this).parent().attr("id").indexOf("_auto"));
							
							
									$("#"+textBoxId).val($(this).text());
										$(this).parent().hide();
									$(this).parent().children("li").show();
									$(scrollOptions.buttonClicked).click();

								});
								
								
								$("#"+id+"_auto").show();

							
						}
						else
						{
							$("#"+id+"_auto").hide();
						}
						
					}
					else if(e.keyCode==38)//up
						{
							var id=$(this).attr("id");	
							if($("#"+id+"_auto").children(".result_hover").length>0){
							$("#"+id+"_auto").children(".results").each(function(){

								if($(this).hasClass("result_hover"))
								{
									if($(this).prev().hasClass("results"))
									{
										$(this).prev().addClass("result_hover");
										$(this).removeClass("result_hover");
										return false;
									}
								}
							});
						}
						else
						{
							$($("#"+id+"_auto").children(".results")[0]).addClass("result_hover");
						
						}

						}

					else if(e.keyCode==40)//down
					{
						var id=$(this).attr("id");	
						if($("#"+id+"_auto").children(".result_hover").length>0){
						$("#"+id+"_auto").children(".results").each(function(){

							if($(this).hasClass("result_hover"))
							{
								if($(this).next().hasClass("results"))
								{
									$(this).next().addClass("result_hover");
									$(this).removeClass("result_hover");
									return false;
								}
							}
						});
					}
					else
					{
						$($("#"+id+"_auto").children(".results")[0]).addClass("result_hover");
					
					}
					}
					else if(e.keyCode==13)
					{


						var id=$(this).attr("id");	
						if($("#"+id+"_auto").is(":visible")){
								if($("#"+id+"_auto").children(".result_hover").length>0){
									$(this).val($("#"+id+"_auto").children('.result_hover').text());
									$("#"+id+"_auto").hide();
									$("#"+id+"_auto").children("li").show();
									$(scrollOptions.buttonClicked).click();
									$("#"+id).blur();
								}
								else
								{
							//	var firstChar=$(this).val();
							//	$(this).val($($("#"+id+"_auto").children('li:visible')[0]).text());
								$("#"+id+"_auto").hide();
							//	$("#"+id+"_auto").children("li").show();
								$(scrollOptions.buttonClicked).click();
							//	$("#"+id).blur();
								}
						}
						else
						{
								$(scrollOptions.buttonClicked).click();
									$("#"+id+"_auto").hide();
						}
					
					}
					else
					{ 

							var id=$(this).attr("id");	
							var interr='';
							var firstChar=$(this).val().toLowerCase();
							$("#"+id+"_auto").children('li').remove();
							if(firstChar.length>0)
							{
								for(i=0;i<list.length;i++)
								{
									if(list[i].toLowerCase().indexOf(firstChar)==0)
									interr+="<li class=\"results\">"+list[i]+"</li>";

								}
									$(interr).appendTo("#"+id+"_auto");
									
									$("#"+id+"_auto").children('.results').css("cursor","pointer").css("border-bottom","1px dotted #bbb").css("padding","5px").mouseenter(function(){
										$(this).addClass("result_hover");

									}).mouseout(function(){

									$(this).removeClass("result_hover");
									}).mousedown(function(){
								
										var textBoxId=$(this).parent().attr("id").substring(0,$(this).parent().attr("id").indexOf("_auto"));
									
										$("#"+textBoxId).val($(this).text());
											$(this).parent().hide();
										$(this).parent().children("li").show();
										$(scrollOptions.buttonClicked).click();

									});
									
									
										$("#"+id+"_auto").show();

							}
							else
							{
								$("#"+id+"_auto").hide();
							}
					}



				});
			
			
			
		
			});
		
			
			
			
		
};
	
$(document).ready(function(){
	$("[id^='bi_']").click(function(){
		////console.log("imageLink:"+$("#imageLink").val());
		var lbAlbumName = $("#albumName").val();
		var imageLink=$("#imageLink").val();
		var bid=$(this).attr("id");
		var bannerid=bid.substring(bid.indexOf('(')+1,bid.indexOf(')'));
		//console.log("bannerid:::"+bannerid);
		$.ajax({url:'/getLookBookById.htm',data:({"bannerid":bannerid}),success:function(lbBanner)
			{
				//console.log("banner:"+lbBanner.imageLink);
				var imgLink = lbBanner.imageLink.substring(lbBanner.imageLink.lastIndexOf('.')+5,lbBanner.imageLink.length-1);
				//console.log("flashplugin:"+lbBanner.htmlCodeForFlashPlugin);
				window.location=lbBanner.imageLink;
		}});
	});
	
	$("[id^='vi_']").click(function(){
		var bid=$(this).attr("id");
		var bannerid=bid.substring(bid.indexOf('(')+1,bid.indexOf(')'));
		//console.log("bannerid:::"+bannerid);
		$.ajax({url:'/getLookBookById.htm',data:({"bannerid":bannerid}),success:function(lbBanner)
			{
		var lbAlbumName = lbBanner.albumName;
		var videoCoverImageURL = lbBanner.videoCoverImage;
		//console.log("videoCoverImageURL:"+videoCoverImageURL);
		var youTubeURL=lbBanner.youtubeCode;
		//console.log("youTubeURL:"+youTubeURL);
		$("#backgroundPopup").show();
		//console.log('id="'+lbAlbumName+'_lbookvideoImg"');
		$('.vedio_holder').html('<img id="lbookvideoImg" src="'+ videoCoverImageURL+ '" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html(lbAlbumName);
		$("#lbookvideoImg").click(function(){
			//console.log("lbAlbumName:"+lbAlbumName);
	    	
	    	$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src="+youTubeURL+"></iframe>").appendTo($(this).parent());


			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
	    $("#lbookvideoImg").mouseover(function(){ $(this).attr("src",videoCoverImageURL);}).mouseout(function(){$(this).attr("src",videoCoverImageURL);});
	}});
		});
	$("#video_close_popup").click(function(){
		  $(".vedio_holder").html("<video preload='none'>");
		  //$("#player").stop();
	  });
	
	/*var lbid=$("[id^='_bi']").attr('id');
	//console.log("lbid:"+lbid);*/
	/*$("[id^='bi_']").click(function(){
		var imageLink=$("#imageLink").val();
		//console.log("imageLink:::"+imageLink);
		//console.log("inside book icon");
		var lbid=$(this ).attr('id');
		//console.log("lbid:"+lbid);
		lbid=lbid.substring(lbid.indexOf('_')+1,lbid.length);
		window.location=imageLink;
		////console.log("/"+lbid+"_LooKbook/"); 
	});*/
	/*$("#on_the_road_bi").click(function(){
		window.location="/on_the_road_LooKbook/";
	});
	
	$("#on_the_road_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="on_the_road_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner-hover.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("On The Road LookBook Video")
		$("#on_the_road_lbookvideoImg").click(function(){
			  
			   $("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/u69kTwNFPuc?rel=0&autoplay=1&autohide=1&loop=1&playlist=u69kTwNFPuc&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());

			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
			  $("#on_the_road_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner.jpg");});
	});*/
	
	/*$("#night_rider_bi").click(function(){
		window.location="/night_rider_LooKbook/";
	});
	
	$("#night_rider_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="night_rider_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider-hover.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("Night Rider LookBook Video")
		 $("#night_rider_lbookvideoImg").click(function(){
		    	
		    	$("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/6lewRND1wH4?rel=0&autoplay=1&autohide=1&loop=1&playlist=6lewRND1wH4&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());

				   $(this).fadeOut('fast',function(){$("#player").show();});

				 
				 });
				 
				  $("#night_rider_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider.jpg");});
	});
	
	$("#in_the_spirit_bi").click(function(){
		window.location="/in_the_spirit_LooKbook/";
	});
	
	$("#in_the_spirit_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="in_spirit_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("In The Spirit LookBook Video")
		$("#in_spirit_lbookvideoImg").click(function(){
	    	
	    	$("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/QxZpedtWCEA?rel=0&autoplay=1&autohide=1&loop=1&playlist=QxZpedtWCEA&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());


			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
	    $("#in_spirit_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit.jpg");});
	});
	$("#video_close_popup").click(function(){
		  $(".vedio_holder").html("<video preload='none'>");
		  //$("#player").stop();
	  });*/
	
	
});
/* ========================================================

Field Validator
Notes: Field Validator requires the jQuery plugin
Author: David Raffauf
Date: July 1st, 2010

===========================================================*/

function Field(id, type, displayLabel, isRequired) {
	this.id = id;
	this.type = type;
	this.displayLabel = displayLabel;
	this.isRequired = isRequired;
}


function FieldValidator(isSilent, errorClassInput, errorClassLabel, errorClassSelect, errorDisplayClass) {
	// Should we display an alert with all the errors?
	this.isSilent = isSilent;

	// These are the classes with which we are marking errors in the DOM
	this.errorClass = new Array();
	this.errorClass["text"]		= errorClassInput;
	this.errorClass["label"]	= errorClassLabel;
	this.errorClass["select"]	= errorClassSelect;	
	this.errorDisplayClass		= errorDisplayClass;

	// We need a way to store a bunch of fields
	this.formFields = new Array();

	// Create a place to store the errors
	this.errors = "";



	this.add = function(id, type, displayLabel, isRequired) {
		this.formFields[this.formFields.length] = new Field(id, type, displayLabel, isRequired);
	}

	this.print = function() {
		var message = "";

		for(var i in this.formFields) {
			var formField = this.formFields[i];

			message += "id: " + formField.id + ", ";
			message += "type: " + formField.type + ", ";
			message += "guideText: " + formField.displayLabel + ", ";
			message += "isRequired: " + formField.isRequired;

			window.alert(message);
		}				
	}

	this.validate = function() {
		// Reset the error messages
		this.resetErrors();

		// Let's check for valid fields
		for(var i in this.formFields) {			
			var formField = this.formFields[i];
			var element = jQuery("#" + formField.id);
			var value = element.val();

			// Is this field required and if so, does is it set to the guide text?
			if (formField.isRequired && value == "" && formField.type != "checkbox") {
				this.markField(element, this.errorClass["text"]);
				this.markEmptyRequiredField(formField);
			}
			else if (value == formField.displayLabel) {
				this.markField(element, this.errorClass["text"]);
				this.markEmptyRequiredField(formField);
			}
			// It's not required, it doesn't have the default text, and it may be a checkbox
			else {
				this.unMarkField(element, this.errorClass["text"]);
				
				// Check for valid formats
				if (formField.isRequired) {
					switch (formField.type) {
						case "checkbox" :
							this.validateCheckbox(formField);
							break;
						case "select" :
							this.validateSelect(formField);
							break;
						case "zip" :
							this.validateZipCode(formField);
							break;
						case "email" :
							this.validateEmail(formField);
							break;
						case "usPhone" :
							this.validateUSPhone(formField);
							break;
						case "date" :
							this.validateDate(formField);
							break;
						case "radio" :
							this.validateRadio(formField);
							break;
						default:								
					}
				}				
			}
		}

		// Do we have any error messages?
		if (this.hasErrors()) {
			if (!this.isSilent) { this.showErrors(); }
			return false;
		}
		else {
			return true;
		}
	}



	this.markEmptyRequiredField = function(formField) {
		this.addError(formField.displayLabel + " is a required field.");
	}			

	this.validateCheckbox = function(formField) {
		var element = jQuery("#" + formField.id);

		if (element.is(':checked')) {
			this.unMarkField(element.next(), this.errorClass["label"]);
		}
		else if(element.not(':checked')) {
			this.markField(element.next(), this.errorClass["label"]);
			this.addError(formField.displayLabel + ": checkbox must be checked.");
		}
	}


	this.validateSelect = function(formField) {
		var element = jQuery("#" + formField.id);

		if (element.attr("selectedIndex") == 0)  {
			this.markField(element, this.errorClass["select"]);
			this.addError(formField.displayLabel + ": Please choose a selection.");
		}
		else {
			this.unMarkField(element, this.errorClass["select"]);
		}
	}


	this.validateZipCode = function(formField) {
		var format=/^\d{5}$/;
		var element = jQuery("#" + formField.id);

		if (!format.test(element.val())) {
			// This doesn't have five characters
			element.val(formField.displayLabel);
			this.markField(element, this.errorClass["text"]);
			this.addError(formField.displayLabel + ": must contain 5 digits only.");
		}
		else {
			this.unMarkField(element, this.errorClass["text"]);
			element.removeClass(this.errorClass["text"]);
		}
	}


	this.validateRadio = function(formField) {
		var element = $('input:radio[name=' + formField.id + ']:checked');
		var value = element.val();

		if(!value) {
			element = $('input:radio[name=' + formField.id + ']'); 			
			this.markField($('label[for=' + formField.id + ']'), this.errorClass["label"]);
			this.addError(formField.displayLabel + ": an option must be selected.");
		}
		else {
			var displayLabel = $('label[for=' + formField.id + ']');
			this.unMarkField(displayLabel, this.errorClass["label"]);
		}		
	}


	this.validateEmail = function(formField) {
		var format=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var element = jQuery("#" + formField.id);

		if (!format.test(element.val())) {
			element.val(formField.displayLabel)
			this.markField(element, this.errorClass["text"]);
			this.addError("Please enter a valid email address.");
		}
		else {
			this.unMarkField(element, this.errorClass["text"]);				}
	}


	this.validateUSPhone = function(formField) {
		var element = jQuery("#" + formField.id);

		var format1=/^\d{10}$/;
		var format2=/^\d{3}\s\d{3}\s\d{4}$/;
		var format3=/^\(\d{3}\)\s*\d{3}-\d{4}$/;
		var format4=/^\d{3}\.\d{3}\.\d{4}$/;

		if (!format1.test(element.val()) &&
			!format2.test(element.val()) &&
			!format3.test(element.val()) &&
			!format4.test(element.val())) {
			element.val(formField.displayLabel)
			this.markField(element, this.errorClass["text"]);
			this.addError("Please enter a valid phone number.");
		}
		else {
			this.unMarkField(element, this.errorClass["text"]);					
		}
	}


	this.validateDate = function(formField) {
		var format=/^\d{2}\/\d{2}\/\d{4}$/;
		var element = jQuery("#" + formField.id);
		var value = element.val();

		if (!format.test(element.val())) {
			element.val("MM/DD/YYYY");
			this.markField(element, this.errorClass["text"]);
			this.addError("Dates must match this format: MM/DD/YYYY.");
		}
		else {
			// Type specific fields
			var monthfield	= value.split("/")[0]
			var dayfield	= value.split("/")[1]
			var yearfield	= value.split("/")[2]
			var dayobj 		= new Date(yearfield, monthfield-1, dayfield)

			// Check the month, day and year
			if ((dayobj.getMonth()+1!=monthfield) || 		
				(dayobj.getDate()!=dayfield) ||
				(dayobj.getFullYear()!=yearfield)) {
				this.markField(element, this.errorClass["text"]);
				element.val("MM/DD/YYYY");
				this.addError("The day, month or year provided is invalid.");
			}
		}
	}



	this.getElementById = function(id) {
		return jQuery("#" + id);
	}

	this.unMarkField = function(element, myClass) {
		element.removeClass(myClass);
	}

	this.markField = function(element, myClass) {
		element.addClass(myClass);				
	}



	this.addError = function(message) {			
		this.errors += message + "<br />";
	}

	this.hasErrors = function() {
		if (this.errors == "")
			return false;
		else
			return true;
	}

	this.showErrors = function() {
		if (this.hasErrors()) {
			element = jQuery("." + this.errorDisplayClass);
			element.html(this.errors);
			element.show();
		}
	}

	this.resetErrors = function() {
		element = jQuery("." + this.errorDisplayClass);
		element.html("");
		element.hide();
		this.errors = "";
	}
}var interval;
var shoeCount=0;
var i=0;
var loopVar=1;
var offSet=5;
var bannerCount=0;
var bannerInterval;
var imagePrefix='';
var myHTML="";
var retscrollTop=$('#retainingHP_scroll_top').val();
var isloadMoreHomeResultsClicked=$('#isloadMoreHPResultsClicked').val();
$(document).ready(function() 
{
	$("#mySlider").hide();
	/*if($('#video_url').val!='false' && $('#video_title')!='false' && $('#videoThumbNail_url').val()!='false')
	{
		
		//console.log("It has not video datails");
		if($('#video_url').val()!='#' && $('#video_url').val()!='false' )
			{
			    //console.log("$('#video_url').val()::"+"true")
				
				getHomePageVideo();
				$('.tooltip_b').tipsy({trigger: 'focus', gravity: 's'});
				$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
					
			}
		
	}*/
	
	

	// This is for retaining HomePage results and page position when clicks browser back button by YES
		$(window).bind("scroll", function(e){
			var retainscrollTop=$(window).scrollTop();
			
				//console.log("---->>>>>>> Present Page retainscrollTop  value is .....   :  " +retainscrollTop);
				$('#retainingHP_scroll_top').val(retainscrollTop);
			
		});
		
		var curTime=new Date();
		//console.log(" curTime is " +curTime.getTime());
		
		if($('#sysTimeForHPBrowserBack').val()==null || $('#sysTimeForHPBrowserBack').val()=="")
		{
			//console.log("sysTimeForHPBrowserBack is Empty.. So browser Back button Not clicked");
			
				$('#sysTimeForHPBrowserBack').val(curTime.getTime());
				
				
		}
		else
		{
			//console.log("sysTimeForBrowserBack is Not Empty ...... So browser Back button clicked....");
			//console.log("**********  isloadMoreHomeResultsClicked  is  **********    : " +isloadMoreHomeResultsClicked);
			if(isloadMoreHomeResultsClicked=="true")
			{
				$(".loading_list").css('display','block');
				 $(".loading_list code").css('display','block');
				
setTimeout(function(){  $.ajax({
					url:'/getRemainingNewArrivals.htm',
					dataType:'html',
					success:function(html)
					{
						$(html).appendTo("#dynamicHomeItems");
						if(retscrollTop!=null)
						{
							//console.log("-------->>>>>>>>>> ......... LodeMore is Clicked... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
							$('html, body').animate({scrollTop:retscrollTop}, 'fast');
						}
						$(".loading_list").css('display','none');
						$(".loading_list code").css('display','none');
						$("#loadMoreHomeResults").hide();
						//changeCurrency(currencyType);
					}
				 });},1000);
			}
			else
			{
				if(retscrollTop!=null)
				{
					//console.log("-------->>>>>>>>>> ......... LodeMore is Not Clicked... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
					$('html, body').animate({scrollTop:retscrollTop}, 'fast');
				}
			}
			
			 
		}
	// Upto here This is for retaining HomePage results and page position when clicks browser back button by YES
		
	//var hpbannerurlstr=$("#hpBannerUrl").val();
	//console.log("------------->>>>>>> hpbannerurlstr is : " +hpbannerurlstr);
	//$(".banner").css("background-image",'url("'+hpbannerurlstr+'")');
	$("#loadMoreHomeResults").show();
	////console.log("Inside setInterval"+loopVar);
	 //$(window).scroll(function(){
	shoeCount=parseInt($("#newShoeCount").val(),10);
	//console.log("1shoeCount is ------> " + shoeCount);
		
	 $("#loadMoreHomeResults").click(function(){
		
		 $(".loading_list").css('display','block');
		 $(".loading_list code").css('display','block');
		
	 setTimeout(function(){ $.ajax({
			url:'/getRemainingNewArrivals.htm',
			dataType:'html',
			success:function(html)
			{
				$(html).appendTo("#dynamicHomeItems");
				$('#isloadMoreHPResultsClicked').val("true");
				$(".loading_list").css('display','none');
				$(".loading_list code").css('display','none');
				$("#loadMoreHomeResults").hide();
				//changeCurrency(currencyType);
			}
		 });},1000);
			
	});
	 
	/* if($(".banner").length>0)
		 {
		 	changeHomePageBanners();
		 	$(window).resize(function(){
		 		
		 		$(".bannerAlias").css("position","absolute").offset({top:$(".banner").offset().top,left:0}).height($(".banner a").height()).width($(".banner").width());
		 		
		 	});
		 }*/
		if($('#source').val()!=null && $('#source').val()=='wishlistmail')
			showWishList();			 
		 /*if($("#holidayshipping_status").val()=="true")
		 {
			$('.nav_popup').css("position","fixed").fadeIn();
	        $(".nav_pops_holder").show();
	        $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		 }
		 
		 }*/
		
		$("#bannerForVideo").die("mouseenter").live("mouseenter",function(){
				$(".arrow_prev").css("display","block");
				$(".arrow_next").css("display","block");
		});
		
		$("#bannerForVideo").die("mouseleave").live("mouseleave",function(){
			
			$(".arrow_prev").hide();
			$(".arrow_next").hide();
		});
		 
//		if($(window).width()>='2000'){
//		    //console.log(body_win_width);
//		    $(".banner").addClass("width_banner");
//		    alert("2000 above");
//		   }
//		else if($(window).width()<='2000'){
//		    //console.log(body_win_width);
//		    $(".banner").removeClass("width_banner");
//		    alert("2000 below");
//		   }
		 
});
	function animate(dir,clicked)
	{
				
				////console.log("Inside the animate");
				var ot = t;				
				switch(dir){
					case "next":
						t = (ot>=totalSlides) ? totalSlides : t+1;						
						break; 
					case "prev":
						t = (t<=0) ? 0 : t-1;
						break; 
					
					default:
						break; 
				};	
				////console.log("T is "+t);
				var diff = Math.abs(ot-t);
				var speed = diff*900;						
				////console.log("Diff is "+diff);
					p = (t*slideWidth*-1);
					////console.log("Length to animate is "+p);
					$("#shoeSlider ul ").animate({ marginLeft: p }, speed);	
					if(t==totalSlides){
						//$("a","#"+options.nextId).hide();
						//////console.log("$$$$$$$$$$$$$$$$$$$$$$$Inside the nextId hide option");
						$("a","#nextBtn").addClass("right_arrow_disabled");
						
					} else {
						//$("a","#nextBtn").show();
						$("a","#nextBtn").removeClass("right_arrow_disabled");
										
					};
					if(t==0){
						//$("a","#"+options.prevId).hide();
						//////console.log("$$$$$$$$$$$$$$$$$$$$$$Inside the prevId hide option");
						$("a","#prevBtn").addClass("left_arrow_disabled");
						
					} else {
						//$("a","#prevBtn").show();
						$("a","#prevBtn").removeClass("left_arrow_disabled");
						
					};		
	};
	/*function invokeSlider()
	{
		$("#shoeSlider").easySlider({prevId:'prevBtn',nextId:'nextBtn',nextText:'',prevText:'',restart: '500'});
	}*/
	function removeSpan()
	{
		//if($(".new_shoes_gallery").children().next("span").length>2)
		{
			var obj=$(".new_shoes_gallery").children().next("span");
			//////console.log($(obj).length);
			obj=$(obj).next();
			
				$(obj).next().remove();
				$(" <div class=\"clear_both\"></div>").appendTo(".new_shoes_gallery");
		}
	}

	function getProductsListForCategory(category)
	{
		//alert("In getproductList"+category);
		
		var url="/getProductsForCategory.htm?category="+category;
		location.href=url;
	}
	function getProductListForVendor(attributeid,vendorName,socialcategory)
	{
		//alert("Inside getProductListForVendor "+attributeid);
		var url="/getProductListForVendor.htm?attributeid="+attributeid+"&vendorName="+vendorName+"&socialcategory="+socialcategory;
		location.href=url;
	}


	function getVintageItemsBySize(style,attId)
	{
		var url="/getVintageProductBySize.htm?style="+style+"&attId="+attId;
		location.href=url;
	}
	function getNewArrival()
	{
		var url="/getNewArrivalProduct.htm";
		location.href=url;
	}
	function getVintageProduct(style)
	{
		var url="/getVintageProduct.htm?style="+style;
		location.href=url;
	}
	function getSaleItems()
	{
		var url="/getSaleItems.htm";
			location.href=url;
	}
	function goToIdp(productid,vendorName,colorId)
	{
		//alert("Inside goToIDP"+productid);
		var url="/idp.htm?productId="+productid+"&vendorName="+vendorName+"&colorId="+colorId;
		location.href=url;
	}
	function getSaleItemsBySize(attId)
	{
		var url="/getSaleItemsBySize.htm?attId="+attId;
		location.href=url;
	}

	/*function subscribeEmailFunction()
	{
	var emailaddress = $("#subscribeEmail").val();
	if(validateEmail())
		{
			$.getJSON("/subscribeEmail.htm",{"emailaddress":emailaddress},function(data)
			{
				$("#subscribeEmail").val("");
				alert("Thanks for registering with Solestruck.");
			});
		}
	}
	function validateEmail()
	{

	try {
	 	if ($("#subscribeEmail").val() != ""){
	  			if(emailValidator(document.getElementById('subscribeEmail'), 'Not a Valid Email'))
	  			{
	  				return true;
	  			}	
	  			else
	  			{
	   				$("#subscribeEmail").val("");
	   				$('#subscribeEmail').focus();
	  				return false;
	  			}
	  		}
		  else {
		  alert("Please fill in any Email ID");
		  $('#subscribeEmail').focus();
		  return false;
		  }
	 	}
	 	catch( e )
	 	{
	 		alert(e);
	 	}

	}

	


	function emailValidator(elem, helperMsg){
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
		if(elem.value.match(emailExp)){
			return true;
		}else{
			alert(helperMsg);
			
			elem.focus();
			return false;
		}
	}
*/
	function getHomeNewArrivalItemsJSON(loopVar,offSet)
	{
		////console.log("Inside getSaleItemsJSON "+offSet+" "+loopVar);
		
		var imageUrl="http://commondatastorage.googleapis.com/images2.solestruck.com/";
		var retVal=new Boolean(true);
		var isAvailable;
		var w_space="";
			/*$.getJSON("/getSaleItemsJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productMap)
					{
						//console.log("*************productMap size is : "+productMap.length);
					}
				);*/
		$.getJSON("/getHomeNewArrivalProductJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productMap){
			 
			$(".loading_list").css("display","none");
			//alert(productMap);
			////console.log("*************productMap size is : "+productMap.length);
			$.each(productMap,function(key,value)
			{
				var vendorName=value.vendorName;
				var shoeName=value.productName;
				var vendorNameL;
				var vendorNameR;
				var shoeNameL=shoeName.toLowerCase();
				var shoeNameR=shoeNameL.replace(/ /g,"-");
				if(vendorName!=null)
				{
					 vendorNameL=vendorName.toLowerCase();
					 vendorNameR=vendorNameL.replace(/ /g,"-");
				}
				var retailPrice;
				////console.log("Inside forloop of proJSON"+vendorName);
				////console.log("Inside forloop of proJSON productName --------------------"+value.productName);
				////console.log("Inside forloop of proJSON--------------------------------"+value.nextAvailable);
				//alert(shoeName);
				if(value.nextAvailable)
				{
					retVal=true;
					//alert('inside If');
				}
				if(value.nextAvailable==false)
				{
					retVal=false;
					//alert('inside else for product '+value.productName);
				}
				
				////console.log("After setting retVal is "+retVal);
				for(var j=0;j<value.colors.length;j++)
				{
					////console.log("Inside color for loop for product "+value.productName+" and colorsize is "+value.colors.length);
					var colorName=value.colors[j].customColor;
					var colorNameL=colorName.toLowerCase();
					var colorNameR=colorNameL.replace(/ /g,"-");
					////console.log("Inside colors loop");
					//console.log("2shoeCount is ----------->  "  + shoeCount);
					shoeCount=shoeCount+1;
					 w_space="shoe_holder";
					if((shoeCount%3)!=1 && (shoeCount%3)!=0)
						{
							w_space+=" ";
							w_space+="white_space";
						}
					if(value.productVariants.length>0)
					{
						for(var k=0;k<value.productVariants.length;k++)
						{
							////console.log("Inside prodcutVariant for loop "+retVal);
							if(value.productVariants[k].colorkey.id == value.colors[j].key.id)
							{
								////console.log("Inside prodcutVariant if loop{{ "+value.productName+"for color "+value.colors[j].customColor);
								if(value.productVariants[k].productUnitLocations.length>0)
								{
									isAvailable=true;
								}
								if(value.productVariants[k].retailprice > 0.0 )
								{
									retailPrice=value.productVariants[k].retailprice;
									 //salePrice=value.productVariants[j].saleprice;
									 //discountPercent=Math.floor(((retailPrice-salePrice)/retailPrice)*100);
									////console.log("Inside setting retailprice block "+retailPrice);
									//alert("hai");
								}
							}
						}
						////console.log("outside prodcutVariant for looppppppppppppppppppppppppppppppppppppp "+retVal);
						var shoe_img;
						if(vendorNameR!=null && vendorName!=null)
						{
						 shoe_img="<span class=\"shoes_img\" ><img src="+imageUrl+vendorNameR+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+shoeName.replace(/ /g,"-")+"-("+colorName.replace(/ /g,"-")+")-010407.jpg></img></span>";
						}
						var shoe_brand="<span class=\"shoe_brand\">"+vendorName+"</span>";
		                var shoe_name="<span class=\"shoe_name\">"+shoeName+"</span>";
		                var new_lable="<span class=\"new_label\">New</span>"
		                var shoe_price="<span class=\"shoe_price\">$"+retailPrice+"</span>";
		                var myHTML="<a class='"+w_space+"' style='text-decoration:none;' href=/"+vendorNameR+"-"+shoeNameR+"-"+colorNameR+"/index.html><div id="+shoeCount+"><span></span> ";
		                
		                myHTML+=shoe_img;
						myHTML+=shoe_brand;
						myHTML+=shoe_name;
						myHTML+=new_lable;
						if(isAvailable==true)
						{
							myHTML+=shoe_price;
						}
						
						
						myHTML+='</div></a>';
						////console.log(myHTML);
						$("#dynamicHomeItems").append(myHTML);
						retailPrice="";
						
					}
					////console.log("outside color for looppppppppppppppppppppppppppppppppppppp "+retVal);
					isAvailable=false;
				}
				////console.log("Inside the loop and retVal is "+retVal);
				if(retVal==false || productMap.length==0)
				{
					////console.log("Inside the clearInterval");
					//clearInterval(interval);
					// $(".loading_list").css("display","none");
				}
			});
			
			
			
			if(jQuery.isEmptyObject(productMap))
			{
				////console.log("Inside the clearInterval out of loop");
				clearInterval(interval);
			}
			////console.log("Before returning the value of retVal---------------- "+retVal);
			
			////console.log("After reutrn statementttttttttttttttttttttttttttttttttttttttttt "+retVal);
		});
		
		/*finally
		 {
			//console.log("Inside theeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee finally block return value is "+retVal);
			return retVal;
		}*/
		
	}
	
	function isEmpty(obj) 
	{
	    for(var prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false;
	    }

	    return true;
	}
	/*function emailUsDetails()
	{
		var emailId=$("#emailUsId").val();
		var help=$("#help").val();
		var order_number=$("#order_number").val();
		
		if(validateEmail_emailUs())
		{
		if(help!="")
		{
			
		$.ajax({url:"/sendEmailToUs.htm?email="+emailId+"&help="+help+"&order_number="+order_number,success:function(){
				$("#emailUsDiv").hide();
				
				 For bring up login or wishlist popup if the user came from there(by ss2)
				 Starts
				if(cameFromLoginOrWishList=="false")this variable is there in customerServiceLink.js
				{
					$('#backgroundPopup').hide();
				
				}	
				else if(cameFromLoginOrWishList=="login")
				{
					$('.login_form').show();
				}
				else if(cameFromLoginOrWishList=="wishList")
				{
					$('.wish_list_form').show();
				}
				Ends
				 
				 $("#emailUsId").val("");
				 $("#help").val("");
				 $("#order_number").val("");
				 $('#alertHelp').text("");
				 $('#alert').text("");
			}
		});
		}
		else
		{
			$('#alertHelp').text("Please fill in some message");
		}
		
		}
	}

	function validateEmail_emailUs()
	{

	try {
	 	if ($("#emailUsId").val() != ""){
	  			if(emailValidatorEmailUs(document.getElementById('emailUsId'), 'Not a Valid Email'))
	  			{
	  				return true;
	  			}	
	  			else
	  			{
	   				$("#emailUsId").val("");
	   				$('#emailUsId').focus();
	   				$("#help").val("");
	   				$("#order_number").val("");
	   				$('#alert').text("Not a Valid Email");
	  				return false;
	  			}
	  		}
		  else {
		 // alert("Please fill in any Email ID");
		 $('#alert').text("Please fill in any Email ID");
		  $('#emailUsId').focus();
		  $("#help").val("");
	   	  $("#order_number").val("");
		  return false;
		  }
	 	}
	 	catch( e )
	 	{
	 		alert(e);
	 	}

	}

	function emailValidatorEmailUs(elem, helperMsg){
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
		if(elem.value.match(emailExp)){
			return true;
		}else{
			//alert(helperMsg);
			$('#alert').text("Not a Valid Email");
			$("#help").val("");
	   		$("#order_number").val("");
			elem.focus();
			return false;
		}
	}*/

	function showLiveHomePageBanner()
	{
		$.getJSON("/getHomePageBanner.htm",function(homepagebanner){
			
			
			
		});
	}
	

	
function changeHomePageBanners()
{
	
	
	
	var imagNameArr=$(".banner").css("background-image").replace('(','').replace(')','').split('/');
	var imgNumber=parseInt(imagNameArr[imagNameArr.length-1].substring(imagNameArr[imagNameArr.length-1].lastIndexOf("_")+1,imagNameArr[imagNameArr.length-1].lastIndexOf(".")));
	var shotName=imagNameArr[imagNameArr.length-1].substring(0,imagNameArr[imagNameArr.length-1].lastIndexOf("_"));
	bannerCount=imgNumber;
	imagePrefix=shotName;
	for(i=bannerCount;i>0;i--)
		{
			$("<div class=\"bannerAlias\" id=\"bannerImageTag_"+i+"\" style=\"background-image:url('http://commondatastorage.googleapis.com/images2.solestruck.com/gae/homePageBanner/"+imagePrefix+"_0"+i+".jpg\');display:none;border:1px solid #fff;\"></div>").appendTo(".banner a");
			
		}
	
	$(".bannerAlias").css("position","absolute").offset({top:$(".banner").offset().top,left:0}).height($(".banner a").height()).width($(".banner").width());
	$(".bannerAlias").css("background-repeat","no-repeat").css("background-size","auto").css("background-position","center");
	$("body").css("overflow-x","hidden");
	bannerInterval=setInterval(changeBannerImage,500);
}
	

function changeBannerImage()
{
	if(bannerCount==0)
		{
			clearInterval(bannerInterval);
		}
	else
		{
			//$(".bannerAlias").fadeOut();
			$("#bannerImageTag_"+bannerCount).show();
			if($("#bannerImageTag_"+(bannerCount+1)).length>0)
			$("#bannerImageTag_"+(bannerCount+1)).fadeOut("slow");
			
			bannerCount--;
		}
	
}
      
function showPrevMorePages()
{
		var pageshow="";
		initialPrevPage=parseInt(currentpage)-5;
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page" href="page-'+(parseInt(selectedPage)-1)+'"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page" href="page-'+(parseInt(selectedPage)-1)+'"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="page-'+i+'">'+i+'</a>';
		}
		
		if(initialPrevPage <=5)
		{
			initialPrevPage=1;
			currentpage=1;
		}
		else
		{
			initialPrevPage =parseInt(initialPrevPage)-5;
			currentpage		=parseInt(currentpage)-5;
		}
		if(totalavailablepages>=15)
		{
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page" href="page-'+(parseInt(selectedPage)+1)+'" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page"  href="#" href="page-'+(parseInt(selectedPage)+1)+'" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}	 

/*
 *   For Filtering the products in All Listing Pages like Gender,Style,Size,Color,Brand and Price by YES
 */
var filterInterval="";
var shoeCount=0;
var filterShoeCount=0;

$(document).ready(function()
{
	$('.item_selection_pannel').addClass('js_enabled');
	$('.your_selection').addClass('js_enabled');	
	$('#clearPrice').click(function(event){
		clearPriceSelection();
	});
	
	$('#clearAllSelection').click(function(event){
		
			
			var existingValues=$( ".slider-vertical" ).slider('values');
			//console.log("existing MinPrice is .....   : " +existingValues[0]);
			//console.log("existing MinPrice is .....   : " +existingValues[1]);
			if(!(existingValues[0]==10 && existingValues[1]==1000))
			{
				//console.log("Clear All is clicked. So.......Price Filter is cleared ");
				if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
		 		{
			 		$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
		 		}
				if($("#mySelectedFilters ul li").length>0)
				{
					 $('input[type=checkbox]').each(function() 
								{ 
								        this.checked = false; 
								});
						
						displayCheckedNames();
						$(".loading_page").fadeOut();
				}
				
				$(function() {
					$( ".slider-vertical" ).slider({
						orientation: "horizontal",
						range: true,
						min: 10,
						max: 1000,
						values:[ 10, 1000 ],
						slide: function( event, ui ) {
							//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
							if(ui.values[ 1 ]==1000)
							$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
							else
							$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
							$("#minAmount").val(ui.values[ 0 ]);
							$("#maxAmount").val(ui.values[ 1 ]);
						}
					});
					
					//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
					if($( ".slider-vertical" ).slider( "values", 1 )==1000)
					$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
					else
					$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
					$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
					$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
				});
				//$( ".slider-vertical" ).slider( "option", "min", 1 );
				//$( ".slider-vertical" ).slider( "option", "max", 5000 );			
				/*$( ".amount" ).html( "<div class='filterMinPrice fl'> $1 </div> <div class='filterMaxPrice fr'> $5000 </div> <div class='clear_both'></div>" );
				$("#minAmount").val(1);
				$("#maxAmount").val(5000);*/
			}
			else
			{
				//console.log("Clear All is clicked.And Price Filter is not selected. So.......All like Size,Color,Style,Brand Filters are cleared....... ");
				
				if($("#mySelectedFilters ul li").length>0)
				{
					 $('input[type=checkbox]').each(function() 
								{ 
								        this.checked = false; 
								});
					 
						
					 		
					 	if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
				 		{
					 		//console.log('-----^^^^^^^ price_Sort is  selected -----^^^^^^^');
					 		$('#price_Low_High').removeClass('selected');
							$('#price_High_Low').removeClass('selected');
							$('#isPriceLowHigh').val('false');
							$('#isPriceHighLow').val('false');
							$('#hiddenLowHigh').val('false');
							$('#hiddenHighLow').val('false');
				 		}
						 
						displayCheckedNames();
						getFilteredProducts();
						
				}
				else
				{
					//console.log('-----#####@@@ price_Sort is  selected -----#####@@@');
					$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
					getFilteredProducts();
				}
				
			}
			
				
				if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
		 		{
			 		//console.log('-----&&&&&&& price_Sort is  selected -----&&&&&&&&');
			 		$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
		 		}	
				
				$( ".slider-vertical1" ).slider('value',70);
				$( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
				 
			
		});
	
		$('#price_Low_High').click(function(){
			
			//console.log('----->>>>>>> price_Low_High is clicked ------->>>>>>>>> ');
			$(".loading_page").fadeIn();
			$('#price_Low_High').addClass('selected');
			$('#price_High_Low').removeClass('selected');
			$('#isPriceLowHigh').val('true');
			$('#isPriceHighLow').val('false');
			$('#hiddenLowHigh').val('true');
			$('#hiddenHighLow').val('false');
			displayCheckedNames();
			getFilteredProducts();
		});
		
		$('#price_High_Low').click(function(){
			
			//console.log('$$$$$$$$$----->>>>>>> price_High_Low is clicked ------->>>>>>>>>$$$$$$$$ ');
			$(".loading_page").fadeIn();
			$('#price_High_Low').addClass('selected');
			$('#price_Low_High').removeClass('selected');
			$('#isPriceHighLow').val('true');
			$('#isPriceLowHigh').val('false');
			$('#hiddenLowHigh').val('false');
			$('#hiddenHighLow').val('true');
			displayCheckedNames();
			getFilteredProducts();
		});
		
		
	$('#genderid_women').click(function(){
		
		getSizesForWomenCheckedOrUnChecked();
		
	});
		
	$('#genderid_unisex').click(function(){
		
		getSizesForUnisexCheckedOrUnChecked();
		
	});
		
	$('#genderid_men').click(function(){
		
		getSizesForMenCheckedOrUnChecked();
		
	});
		
		
});


/*function clearAllSelection()
{
	$('input[type=checkbox]').each(function() 
			{ 
			        this.checked = false; 
			});
	
	displayCheckedNames();
	getFilteredProducts();
	
}*/

function clearstyleSelection()
{
	if($('#checkedstyleids').find('input[type=checkbox]:checked').length>0){
	$('#checkedstyleids').find('input[type=checkbox]:checked').removeAttr('checked');
	
	displayCheckedNames();
	getFilteredProducts();
	}
	
}

function clearsizeSelection()
{
	if($('#checkedsizeids').find('input[type=checkbox]:checked').length>0){
		$('#checkedsizeids').find('input[type=checkbox]:checked').removeAttr('checked');
		
		displayCheckedNames();
		getFilteredProducts();
	}
	
	
}

function clearcolorSelection()
{
	
	if($('#checkedcolorids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedcolorids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function clearbrandSelection()
{
	if($('#checkedbrandids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedbrandids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function cleargenderSelection()
{
	if($('#checkedgenderids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedgenderids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function clearPriceSelection()
{

	/*$(".slider-vertical").slider('option','min',1);
	 $(".slider-vertical").slider('option','max',5000);
	 $(".filterMinPrice").val(1);
	 $(".filterMaxPrice").val(5000);*/
	var existingValues=$( ".slider-vertical" ).slider('values');
	//console.log("existing MinPrice is .....   : " +existingValues[0]);
	//console.log("existing MinPrice is .....   : " +existingValues[1]);
	if(!(existingValues[0]==10 && existingValues[1]==1000)){
		//console.log("Clear Price is clicked. So.......Price Filter is cleared ");
		$(function() {
			$( ".slider-vertical" ).slider({
				orientation: "horizontal",
				range: true,
				min: 10,
				max: 1000,
				values:[ 10, 1000 ],
				slide: function( event, ui ) {
					//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					if(ui.values[ 1 ]==1000)
					$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
					else
					$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
					$("#minAmount").val(ui.values[ 0 ]);
					$("#maxAmount").val(ui.values[ 1 ]);
				}
			});
			
			//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
			if($( ".slider-vertical" ).slider( "values", 1 )==1000)
			$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
			else
			$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
			$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
			$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
		});
		//$( ".slider-vertical" ).slider( "option", "min", 1 );
		//$( ".slider-vertical" ).slider( "option", "max", 5000 );
		/*$( ".amount" ).html( "<div class='filterMinPrice fl'> $1 </div> <div class='filterMaxPrice fr'> $5000 </div> <div class='clear_both'></div>" );
		$("#minAmount").val(1);
		$("#maxAmount").val(5000);*/
		
		 $( ".slider-vertical1" ).slider('value',70);
		 $( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
	}
}

function clearPriceSortSelection()
{
	$('#price_Low_High').removeClass('selected');
	$('#price_High_Low').removeClass('selected');
	$('#isPriceLowHigh').val('false');
	$('#isPriceHighLow').val('false');
	$('#hiddenLowHigh').val('false');
	$('#hiddenHighLow').val('false');
	displayCheckedNames();
	getFilteredProducts();
}

function displayCheckedNames()
{
	$(".loading_page").fadeIn();
	//$(".loading_page").show();
	var selectedFilter = new Array();
	var totalCount=0;
	var count=0;
	selectedFilter.push("<ul>");
	$("#checkedgenderids").find(':checkbox:checked').each(function(obj){
		var genderChkId="genderid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+genderChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#GenderCount').html("Gender ("+count+")");
	totalCount+=count;
	count=0;
	$("#checkedstyleids").find(':checkbox:checked').each(function(obj){
		var styleChkId="styleid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+styleChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#StyleCount').html("Style ("+count+")");
	totalCount+=count;
	count=0;
	$("#checkedsizeids").find(':checkbox:checked').each(function(obj){
		var sizeChkId="sizeid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+sizeChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#SizeCount').html("Size ("+count+")");
	
	totalCount+=count;
	count=0;
	$("#checkedbrandids").find(':checkbox:checked').each(function(obj){
		var brandChkId="brandid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+brandChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#BrandCount').html("Brand ("+count+")");
	
	totalCount+=count;
	count=0;
	$("#checkedcolorids").find(':checkbox:checked').each(function(obj){
		var colorChkId="colorid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+colorChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#ColorCount').html("Color ("+count+")");
	totalCount+=count;
	//console.log('------->>>>>>>>>> hiddenMinPrice is : ' + $("#hiddenMinPrice" ).val() + ' ------>>>>>>>> hiddenMaxPrice is : ' + $( "#hiddenMaxPrice" ).val() );
	if(($("#hiddenMinPrice" ).val()!="" && $( "#hiddenMaxPrice" ).val()!="") && ($("#hiddenMinPrice" ).val()!=null && $( "#hiddenMaxPrice" ).val()!=null) && ($("#hiddenMinPrice" ).val()!="10" || $( "#hiddenMaxPrice" ).val()!="1000"))
	{
		//console.log('------->>>>>>>>>>  Pushing Price details to Your Selection  ------>>>>>>>>>>' + $( "#hiddenMinPrice" ).val() + "  &&&  " + $( "#hiddenMaxPrice" ).val() );
		if($( "#hiddenMaxPrice" ).val()=="1000")
			selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSelection()\"><span>$"+$("#hiddenMinPrice").val()+"-$"+$("#hiddenMaxPrice").val()+"+</span><code class=\"your_selection_close\"></code></li>");
		else
			selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSelection()\"><span>$"+$("#hiddenMinPrice").val()+"-$"+$("#hiddenMaxPrice").val()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	if($('#hiddenLowHigh').val()=='true')
	{
		//console.log('----->>>>>> hiddenLowHigh is Checked------>>>>>>>>  ' );
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSortSelection()\"><span>"+$('#price_Low_High').text()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	if($('#hiddenHighLow').val()=='true')
	{
		//console.log('----->>>>>> hiddenHighLow is Checked------>>>>>>>>  ' );
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSortSelection()\"><span>"+$('#price_High_Low').text()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	$('#YourSelectionCount').html("Selections ("+totalCount+"):");
	selectedFilter.push("</ul>");
	$('#mySelectedFilters').html(selectedFilter.join(''));
	//console.log("selected : "+selected);
}

function unCheckSelection(chkid)
{
	//console.log("vendorName : " +vendorName+ "vendorid : " +vendorid);
	$("#"+chkid).removeAttr('checked');
	
	displayCheckedNames();
	
	if(chkid=="genderid_women")
	{
		getSizesForWomenCheckedOrUnChecked();
	}
	if (chkid=="genderid_unisex")
	{
		getSizesForUnisexCheckedOrUnChecked();
	}
	if (chkid=="genderid_men")
	{
		getSizesForMenCheckedOrUnChecked();
	}
		
	getFilteredProducts();
	
}

function getSizesBySocialCategory(SizesCategory)
{
	var sizeslist="";
	$("#sizeFilterList div.jspContainer div.jspPane").empty();
	$.ajax({
		datatype:"json",
		url     : "/getFrontEndDetails.htm",
		success : function(frontEndDTO){
		if(SizesCategory=="WomenSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.womensizeslist ----->>>>>>>**********' + frontEndDTO.womenSizes.length);
			for(var i=0;i<frontEndDTO.womenSizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.womenSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.womenSizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.womenSizes[i].key.id+'"/>'+frontEndDTO.womenSizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(SizesCategory=="MenSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.mensizeslist ----->>>>>>>**********' + frontEndDTO.menSizes.length);
			for(var i=0;i<frontEndDTO.menSizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.menSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.menSizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.menSizes[i].key.id+'"/>'+frontEndDTO.menSizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(SizesCategory=="UnisexSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.sizeslist ----->>>>>>>**********' + frontEndDTO.sizes.length);
			for(var i=0;i<frontEndDTO.sizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.sizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.sizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.sizes[i].key.id+'"/>'+frontEndDTO.sizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		
	
		//console.log('*********----->>>>>> sizeslist ----->>>>>>>**********' + sizeslist);
		$(sizeslist).appendTo("#sizeFilterList div.jspContainer div.jspPane");
		scrollBarsForFilters=$('.scroll-pane').jScrollPane();
		
		}
			
		});
}

function getStylesBySocialCategory(StylesCategory)
{
	var sizeslist="";
	$("#styleFilterList div.jspContainer div.jspPane").empty();
	$.ajax({
		datatype:"json",
		url     : "/getFrontEndDetails.htm",
		success : function(frontEndDTO){
		if(StylesCategory=="WomenStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.womenstyleslist ----->>>>>>>**********' + frontEndDTO.womenStyles.length);
			for(var i=0;i<frontEndDTO.womenStyles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.womenSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.womenStyles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="getFilteredProducts(),displayCheckedNames();" ';
				if(frontEndDTO.womenStyles[i].name=='Boots Ankle')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Ankle','(Ankle)')+'';
				}
				else if(frontEndDTO.womenStyles[i].name=='Boots Knee')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Knee','(Knee)')+'';
				}
				else
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name+'';
				}
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(StylesCategory=="MenStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.menstyleslist ----->>>>>>>**********' + frontEndDTO.menStyles.length);
			for(var i=0;i<frontEndDTO.menStyles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.menStyles[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.menStyles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.menStyles[i].key.id+'"/>'+frontEndDTO.menStyles[i].name+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(StylesCategory=="UnisexStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.styleslist ----->>>>>>>**********' + frontEndDTO.styles.length);
			for(var i=0;i<frontEndDTO.styles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.styles[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.styles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				if(frontEndDTO.womenStyles[i].name=='Boots Ankle')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Ankle','(Ankle)')+'';
				}
				else if(frontEndDTO.womenStyles[i].name=='Boots Knee')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Knee','(Knee)')+'';
				}
				else
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name+'';
				}
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		
	
		//console.log('*********----->>>>>> styleslist ----->>>>>>>**********' + sizeslist);
		$(sizeslist).appendTo("#styleFilterList div.jspContainer div.jspPane");
		scrollBarsForFilters=$('.scroll-pane').jScrollPane();
		
		}
			
		});
}

function getSizesForWomenCheckedOrUnChecked()
{

	
	//console.log('*********----->>>>>> genderid_women is clicked ----->>>>>>>**********');
	
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_women').attr('checked'))
	{
		//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
		if($('#genderid_men').attr('checked'))
		{
			//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
			
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
			
		}
		else
		{
			SizesCategory="WomenSizes";
			StylesCategory="WomenStyles";
		}
	}
	else 
	{
		//console.log('---->>>>> genderid_women is not checked ---->>>>>>>>>');
		
		if($('#genderid_men').attr('checked'))
		{
			//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
				
			}
			else
			{
				//$('#men_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="MenSizes";
				StylesCategory="MenStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);
	

}

function getSizesForUnisexCheckedOrUnChecked()
{

	//console.log('*********----->>>>>> genderid_unisex is clicked ----->>>>>>>**********');
	
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_unisex').attr('checked'))
	{
		//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
		//$('#unisex_select_pannel').show();
		//$('#women_select_pannel').hide();
		//$('#men_select_pannel').hide();
		
		SizesCategory="UnisexSizes";
		StylesCategory="UnisexStyles";
		
	}
	else 
	{
		//console.log('---->>>>> genderid_unisex is not checked ---->>>>>>>>>');
		
		if($('#genderid_women').attr('checked'))
		{
			if($('#genderid_men').attr('checked'))
			{
				//console.log('---->>>>> genderid_men and genderid_women are checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
				//$('#women_select_pannel').show();
				//$('#men_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="WomenSizes";
				StylesCategory="WomenStyles";
			}
			
		}
		else if($('#genderid_men').attr('checked'))
		{
			
			if($('#genderid_women').attr('checked'))
			{
				//console.log('---->>>>> $$$$ genderid_men and genderid_women are checked $$$$$ ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//console.log('---->>>>> $$$$ genderid_men is checked $$$$ ---->>>>>>>>>');
				//$('#men_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="MenSizes";
				StylesCategory="MenStyles";
			}
			
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);

}

function getSizesForMenCheckedOrUnChecked()
{

	//console.log('*********----->>>>>> genderid_men is clicked ----->>>>>>>**********');
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_men').attr('checked'))
	{
		//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
		if($('#genderid_women').attr('checked'))
		{
			//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//$('#men_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#unisex_select_pannel').hide();
			
			SizesCategory="MenSizes";
			StylesCategory="MenStyles";
		}
		
	}
	else 
	{
		//console.log('---->>>>> genderid_men is not checked ---->>>>>>>>>');
		
		if($('#genderid_women').attr('checked'))
		{
			//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//$('#women_select_pannel').show();
				//$('#men_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="WomenSizes";
				StylesCategory="WomenStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);

}

function getFilteredProductsForSortJSON(loopVar,offSet)
{
	//////console.log("Inside getFilteredProductsForSortJSON : "+loopVar+" "+offSet);
	
	var imageUrl="http://commondatastorage.googleapis.com/images2.solestruck.com/";
	var retVal=new Boolean(true);
	var isNew;
	var isSale;
	var isAvailable;
	var sold_out="<a class=\"sold_out\" >SOLD OUT</a>";
	var productVariantList=new Array();
	
	$('#filterFormsort').ajaxSubmit(
			{
				url:"/getFilteredProductsForSortJSON.htm",
				data:{loopVar:loopVar, offSet:offSet},
				dataType:'json',
				success:function(productdto){

			
	//$.getJSON("/getFilteredProductsForSortJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productdto){
		
		//////console.log(productdto);
		//////console.log("*************productdto size is : "+productdto.length);
		for(var i=0;i<productdto.length;i++)
		{
			var vendorName=productdto[i].vendorName;
			var shoeName=productdto[i].productName;
			var vendorNameL;
			var vendorNameR;
			if(vendorName!=null)
			{
				 vendorNameL=vendorName.toLowerCase();
				 vendorNameR=vendorNameL.replace(/ /g,"-");
			}
			//////console.log("Inside loop####################################################### "+vendorNameR);
			
			//////console.log("Inside forloop of proJSON"+vendorName);
			//////console.log("Inside forloop of proJSON productName --------------------"+productdto[i].productName);
			//////console.log("Inside forloop of proJSON--------------------------------"+productdto[i].nextAvailable);
			//alert(shoeName);
			if(productdto[i].nextAvailable)
			{
				retVal=true;
				//////console.log('inside If');
			}
			if(productdto[i].nextAvailable==false)
			{
				retVal=false;
				//////console.log('inside else for product '+productdto[i].productName);
			}
			
			//////console.log("After setting retVal is "+retVal);
			$.each(productdto[i].colorVariant,function(key,value)
				{
					$.each(value,function(index,item)
						{
							productVariantList.push(item);
						});
								
				});
		
				for(var j=0;j<productdto[i].colors.length;j++)
				{
					//////console.log("Inside color for loop for product "+productdto[i].productName+" and colorsize is "+key.length);
					var retailPrice;
					var salePrice;
					var discountPercent;
					
					var colorName=productdto[i].colors[j].customColor;
					//////console.log("Inside colors loop");
					filterShoeCount=filterShoeCount+1;
							//////console.log(productVariantList.length);
							for(var k=0;k<productVariantList.length;k++)
								{
						
									if(productVariantList[k].colorkey.id == productdto[i].colors[j].key.id)
									{
										//////console.log("Inside prodcutVariant if loop{{ "+productdto[i].productName+"for color "+productdto[i].colors[j].customColor);
										if(productVariantList[k].productUnitLocations.length>0)
										{
											isAvailable=true;
										}
										if(productVariantList[k].saleprice>0.0)
										{
											 isSale=true
											 retailPrice=productVariantList[k].retailprice;
											 salePrice=productVariantList[k].saleprice;
											 discountPercent=Math.floor(((retailPrice-salePrice)/retailPrice)*100);
										}
										else
										{
											if(productVariantList[k].recentArrival==true)
											{
												isNew=true
											}
											if(productVariantList[k].retailprice > 0.0)
											{
												retailPrice=productVariantList[k].retailprice;
												//////console.log("Inside setting retailprice block "+retailPrice);
											}
										}
									}
								}
							//////console.log("outside prodcutVariant for loop "+retVal);
							var shoe_img;
							if(vendorNameR!=null && vendorName!=null)
							{
							 shoe_img="<a class=\"shoes_img\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\"><img src="+imageUrl+vendorNameR+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+shoeName.replace(/ /g,"-")+"-("+colorName.replace(/ /g,"-")+")-010507.jpg></img></a>";
							}
							var shoe_brand="<a class=\"shoe_brand\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">"+vendorName+"</a>";
			                var shoe_name="<a class=\"shoe_name\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">"+shoeName+"</a>";
			                var shoe_priceR;
			                var shoe_priceS;
			                var dis_percent;
			                if(isSale==true && isAvailable==true)
			                {
			                	shoe_priceR="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\"><del>$"+retailPrice+"</del></a>";
			                	shoe_priceS="<a class=\"shoe_price\" style=\"color:red;\" onclick=\"goToIdp('"+productdto.productId+"','"+productdto.vendorName+"','"+productdto[i].colors[j].key.id+"')\">Sale $"+salePrice+"</a>";
			                	dis_percent="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">("+discountPercent+"%OFF)</a>";
			                }
			                else
			                {
			                	shoe_priceR="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">$"+retailPrice+"</a>";
			                }
			                
			                var myHTML;
			                if(isNew==true)
			                {
			                	myHTML="<li><div style=\"display:none;\" id="+filterShoeCount+"> <span class=\"new_lable\"></span>";
			                }
			                else
			                {
			                	myHTML="<li><div style=\"display:none;\" id="+filterShoeCount+"> <span></span>";
			                }
							myHTML+=shoe_img;
							myHTML+=shoe_brand;
							myHTML+=shoe_name;
							if(isAvailable==false)
							{
								myHTML+=sold_out;
							}
							else
							{
								if(isSale==true && isAvailable==true)
								{
									myHTML+=shoe_priceR;
									myHTML+=shoe_priceS;
									myHTML+=dis_percent;
								}
								else
								{
									myHTML+=shoe_priceR;
								}
							
							}
							
							myHTML+='</div></li>';
							//////console.log(myHTML);
							$("#filteredDynamicItems ul").append(myHTML);
						 retailPrice="";
						 salePrice="";
						 discountPercent="";
					
						 isNew=false;//////console.log("Inside color for loop "+retVal);
						 isSale=false;	 
						 isAvailable=false;
				}
			
			if(retVal==false || productdto.length==0)
			{
				//////console.log("Inside the clearInterval");
				clearInterval(filterInterval);
			}
		}

		if(productdto.length==0)
		{
			//////console.log("Inside the clearInterval  *******  No Products Available!  ********");
			clearInterval(filterInterval);
		}
		
		//////console.log("Before returning the value of retVal---------------- "+retVal);
		
		//////console.log("After reutrn statementttttttttttttttttttttttttttttttttttttttttt "+retVal);
	}//End of Success Funtion
	});
	
}


//Upto here For Filtering the products in All Listing Pages like Gender,Style,Size,Color,Brand and Price by YES
var scrollBarsForFilters;
var i ;

$(document).ready(function() {

	
	if(location.href.indexOf("solestruck-knows-you")!=-1)
	{
		//console.log("coming inside");
		$('#curator_banner').css('height', '650px');
		$('#curator_banner').hide();
		$('.curroted_text').hide();
		$('.custom_banner').show();
		$('#curator_banner').addClass('dn');
	}
	else
	{
		$('#curator_banner').css('height', '270px');
		$('.curroted_text').show();
		$('.custom_banner').hide();
		$('#curator_banner').removeClass('dn');
	}

	$('.check_faq_act').click(function()
	{
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.blackfriday_faq_chk').fadeIn();
 	 });
	
	
	$('#isTimeChanged').val(false);
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	$('.tooltip_input').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 'n',fade:true});
	
	$('#timmer_wrapper').tipsy();
	$('#sale_timmer_wrapper').tipsy();
	if($("#showTimer").val()=='true')
	{
		  var hrs_main =$("#hours").val();
		  var mins_main = $("#mins").val();
		  var secs_main = $("#secs").val();
		  var count=0;
		  var hrs =0;
		  var mins =0;
		  var secs =0;
		  //console.log("counter is "+count);
		  var clear=setInterval(function(){
			  //var now = new Date();
			  //var hrs_of_day = 24* 2;
			  //console.log("counter is "+count+" and hrs is "+hrs+" mins "+mins+" secs "+secs+"");
			  if(count==0)
			  {
				  //console.log("inside the loop hrs "+hrs+" mins "+mins+" secs "+secs);
				  hrs=hrs_main;
				  mins=mins_main;
				  secs=secs_main;
			  }      
			  secs=secs-1;
			  if(secs==-1)
			  {
				  //console.log("inside the secs==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  secs=59;
				  mins=mins-1;
			  }
			  if(mins==-1)
			  {
				  //console.log("inside the mins==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  mins=59;
				  hrs=hrs-1;
			  }
			  if(parseInt(hrs)==-1)
			  {
				  $("#timmer_wrapper").hide();
				  clearInterval(clear);
				  clearCache();
				  //console.log("inside all zero ");
			  }
			  if (hrs < 10)  hrs ="0" + hrs;  
			  if (mins < 10) mins ="0" + mins;
			  if (secs < 10) secs ="0" + secs; 
			  //console.log("Final the first mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  var hrs_c1 = hrs.toString().substring(0,1); var hrs_c2 = hrs.toString().substring((hrs.toString().length-1),hrs.toString().length);
			  var mins_c1 = mins.toString().substring(0,1); var mins_c2 = mins.toString().substring((mins.toString().length-1),mins.toString().length);
			  var secs_c1 = secs.toString().substring(0,1); var secs_c2 = secs.toString().substring(1,2);
			  //console.log("Final the mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  $('.hr_c1').html(hrs_c1); $('.hr_c2').html(hrs_c2);
			  $('.min_c1').html(mins_c1); $('.min_c2').html(mins_c2);
			  $('.sec_c1').html(secs_c1); $('.sec_c2').html(secs_c2);
			  count++;
		  }, 1000);
	}
	
	if($("#saleTimer").val()=='true')
	{
		getTimeStampForPreTimer();
		  var hrs_main =$("#salehours").val();
		  var mins_main = $("#salemins").val();
		  var secs_main = $("#salesecs").val();
		  var count=0;
		  var hrs =0;
		  var mins =0;
		  var secs =0;
		  //console.log("counter is "+count);
		  var clear=setInterval(function(){
			  var isTimeChanged= $('#isTimeChanged').val();
			  //var now = new Date();
			  //var hrs_of_day = 24* 2;
			  //console.log("counter is "+count+" and hrs is "+hrs+" mins "+mins+" secs "+secs+"");
			  if(count==0)
			  {
				  //console.log("inside the loop hrs "+hrs+" mins "+mins+" secs "+secs);
				  hrs=hrs_main;
				  mins=mins_main;
				  secs=secs_main;
			  }      
			  secs=secs-1;
			  if(secs==-1)
			  {
				  //console.log("inside the secs==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  secs=59;
				  mins=mins-1;
			  }
			  if(mins==-1)
			  {
				  //console.log("inside the mins==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  mins=59;
				  hrs=hrs-1;
			  }
			  if(parseInt(hrs)==0 && parseInt(mins)==0 && parseInt(secs)==0)
			  {
				  if(count!=0)
				  {
					  //$("#sale_timmer_wrapper").hide();
					  //clearInterval(clear);
					  //clearPreTimerCache();
					  console.log("inside all zero "); 
				  }
			  }
			  if (hrs < 10)  hrs ="0" + hrs;  
			  if (mins < 10) mins ="0" + mins;
			  if (secs < 10) secs ="0" + secs; 
			  //console.log("Final the first mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  var hrs_c1 = hrs.toString().substring(0,1); var hrs_c2 = hrs.toString().substring((hrs.toString().length-1),hrs.toString().length);
			  var mins_c1 = mins.toString().substring(0,1); var mins_c2 = mins.toString().substring((mins.toString().length-1),mins.toString().length);
			  var secs_c1 = secs.toString().substring(0,1); var secs_c2 = secs.toString().substring(1,2);
			  //console.log("Final the mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  $('.sale_hr_c1').html(hrs_c1); $('.sale_hr_c2').html(hrs_c2);
			  $('.sale_min_c1').html(mins_c1); $('.sale_min_c2').html(mins_c2);
			  $('.sale_sec_c1').html(secs_c1); $('.sale_sec_c2').html(secs_c2);
			  count++;
			  
			  if(isTimeChanged=='true')
			  {
				  getTimeStampForPreTimer();
				  hrs=$('#salehours').val();
				  mins=$('#salemins').val();
				  secs=$('#salesecs').val();
				  $('#isTimeChanged').val(false);
			  }
			  
		  }, 1000);
	}
	
	
	// This code is needed when we do any final sale - Viswanath.
//	$.ajax({url:'/currentPageStatus.htm',success:function(data)
//	{
//		//console.log('coming to the current page status in action.js 73'+$('#loginIn').val());
//		//console.log("check the condition :: "+data);
//		var logIn=$('#loginIn').val();
//		//console.log("value of the i before setting :: "+i);
//		if(logIn!='true')
//		{
//			i=0;
//			//console.log("value should be zero :: "+i);
//		}
//		if(data=="sale" && logIn=='true' && i == 0)
//		{
//			$('.black_fridaypopup_one').fadeIn();
//			$("#backgroundPopup").fadeIn('fast');
//			//console.log("value of the final i before setting:: "+i);
//			i=1
//			//console.log("value of the final i after setting:: "+i);
//		}
//	}});
	
	$('.loading_page').hide();
	$(window).unload(function(){
		//console.log("*****on unload******");
		if($("#thankyouPage").val()=='true')
		{
			//console.log("Inside the thank you");
			location.href='/redirectToNonSecurePage.htm?rdirectURL=/';
		}
		loadShoppingCart();
	});
	initialize();
	//console.log("It has not video datails");
	/*if(($('#video_url').val()!=false)&&($('#video_title').val()!=false))
		{
			//console.log("It has video details");
			
			//console.log("$('#video_url').val()::"+"true")
			getHomePageVideo();
			$('.tooltip_b').tipsy({trigger: 'focus', gravity: 's'});
			$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
				
		}*/
	$("img").error(function(){
		
		$(this).hide();
		/*var brokenImg =  $(this).attr("src");
		
			
			if(brokenImg!="/images/unavaliable_240_180.jpg"){
				//alert("src = " + $(this).attr("src")); 
					$(this).attr("src","/images/unavaliable_240_180.jpg");
					$(this).css("border","0");
					$(this).css("margin","0");
					$(this).css("padding","0");
					 //call for sending mail alerts for broken images - shp
					 brokenImagesAlert(brokenImg);
		
			}*/
		});
	
	$('#holiday_btn').click(function() {
		
	        //$('.nav_popup').css("position","fixed").fadeIn();
	        $(".NYE").show();
	        $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			//window.location='/holiday_ship=yes';
	        
	      });
	

  	$('#textSearchButton').click(function() {
  		if($("#searchText").val().length>0)
  			{
  				if(_gaq)
  				_gaq.push(['_trackEvent','SolestruckSearch',$("#searchText").val()]);
  				$(".loading_page").show();
  				var path=isWomenBrand($("#searchText").val());
  			
  					if(path!='')
  						{
	  						if(location.host.indexOf("localhost")!=-1)
	  	  					{
	  	  						location="http://"+location.hostname+":"+location.port+path;
	  	  					}
	  						else
	  	  					{
	  	  						location="http://"+location.hostname+path;
	  	  					}
  						
  						}
  					else
  						{
		  						if(location.host.indexOf("localhost")!=-1)
		  	  					{
		  	  						location="http://"+location.hostname+":"+location.port+'/search/'+$("#searchText").val();
		  	  					}
		  						else
		  	  					{
		  	  						location="http://"+location.hostname+'/search/'+$("#searchText").val();
		  	  					
		  	  					}
  						}
  				
  			}
  			
	});
	$('.shipping_tc').hide();
	
	$('#usps').hide();
	$('#fedex').hide();
	$('#stdUL').hide();
	$('#expUL').hide();
	$('#ovnUL').hide();
	//$("li[id^='state_']").click(getShippingServiceDetailsForUSState);
  	//$("li[id^='country_']").click(getShippingServiceDetailsForInternational);
  	$("li[id^='state_']").live("click", function(){
  		getShippingServiceDetailsForUSState(this);
  	});
  	$("li[id^='country_']").live("click", function(){
  		getShippingServiceDetailsForInternational(this);
  	});
  	
  	if(location.href.indexOf('showThankyou.htm')!=-1 && location.host.indexOf('beta.solestruck.com')!=-1)
  	{
  		showSurvey();
  	}
  	
  	showBOTBPopup();
  	
  	
  	$("#submitBotbData").click(function(){
  		
  		$("#botbFirstName").removeClass("boot_popup_error");
		$("#botbEmail").removeClass("boot_popup_error");
  		
  		if(isEmailId($("#botbEmail").val()) && $("#botbFirstName").val().length>0 && $("#botbFirstName").val().indexOf("Full Name")==-1 && trimString($("#botbFirstName").val()).length>0)
  			{
  			$(".clear").addClass("submit_btn_holder");
  			$.getJSON("/isEmailAvailableForContest.htm",{"emailaddress":$("#botbEmail").val(),"id":Math.random()},function(data){
  				
  				if(!data)
  					{
	  					$.getJSON("/subscribeEmailForContest.htm",{"emailaddress":$("#botbEmail").val(),'firstName':$("#botbFirstName").val(),"id":Math.random()},function(data)
	  	  	  					{
	  	  	  					$("#mc_embed_signup").addClass("dn");
	  	  	  					$(".boot_thankyou_msg").removeClass("dn");
	  	  	  					$(".clear").removeClass("submit_btn_holder");
	  	  	  						//location=$("#sourceURL").val();
	  	  			  				//$('#backgroundPopup').fadeOut("fast");
	  	  			  				//$(".boot_popup").fadeOut('slow');
	  	  			  				//$("#botbFirstName").removeClass("boot_popup_error");
	  	  			  				//$("#botbEmail").removeClass("boot_popup_error");
	  	  	  						//setTimeout(function(){location=$("#sourceURL").val();},2000);
	  	  	  					$(".give_away_close").show().click(function(){location=$("#sourceURL").val();});
	  	  	  						
	  	  	  					});
  	  				
  					}
  				else
  					{
  						$("#botbEmail").val("One entry per email please.");
						$("#botbEmail").focus().addClass("boot_popup_error");
						$(".clear").removeClass("submit_btn_holder");
  					
  					}
  				
  				
  				
  				
  				
  			});
  			
  			
  			}
  		else
  			{
  			
	  			if($("#botbFirstName").val().length<=0 || $("#botbFirstName").val().indexOf("Full Name")!=-1 ||trimString($("#botbFirstName").val()).length<=0)
				{
					$("#botbFirstName").val("Please enter your name");
					$("#botbFirstName").focus().addClass("boot_popup_error");
					return;
				}
  				if(!isEmailId($("#botbEmail").val()))
  					{
  						$("#botbEmail").val("Please enter your email");
  						$("#botbEmail").focus().addClass("boot_popup_error");
  						return;
  					}
  				
  				
  			}
  		
  	});
  	
	 // Resolved IE issue for Listing Page shoe image Onclick redirecting to IDP by YES
	 $('.shoes_img').live('click',function(){
	  		//console.log("idp url is ----->>>>> : " +$(this).parent().attr('href'));
	  		window.location=$(this).parent('a').attr('href');
	  		
	  	});
	 
	$(".custom_select_value_act").change(function() {
		 $(this).closest('div').find('p').html($(this).find("option:selected").text());
	});
	
	// This is added for Solestruck Single Sign-On by YES
	
		if(location.href.indexOf('assistance.do?page=OrderStatus')!=-1 || location.href.indexOf('loadCustomerServicePage.htm?page=Customer')!=-1 || location.href.indexOf('assistance.do?page=CustomerService')!=-1)
		{
			var custLoginIn=$('#customerloginIn').val();
			var custIdForCSPage=$('#custIdForCSPage').val();
			//console.log('*************    custLoginIn  **************' + custLoginIn );
			
			if(custLoginIn == 'true')
			{
				//console.log('*************    YOu are Logged in  **************');
				//console.log('*************    custIdForCSPage is   **************' + custIdForCSPage );
				$('.column2 a').attr('onclick','loadMyAccount('+custIdForCSPage+');');
				
			}
			//else
			//{
				//console.log('*************    YOu are NOT Logged in  **************');
			//}
			
		}
		
		if(location.href.indexOf('assistance.do?page=Returns')!=-1)
		{
			var custLoginIn=$('#customerloginIn').val();
			var custIdForCSPage=$('#custIdForCSPage').val();
			//console.log('*************    custLoginIn  **************' + custLoginIn );
			
			if(custLoginIn == 'true')
			{
				//console.log('*************    YOu are Logged in  **************');
				//console.log('*************    custIdForCSPage is   **************' + custIdForCSPage );
				$('.inner_content a:first').attr('onclick','loadMyAccount('+custIdForCSPage+');');
				
			}
			//else
			//{
				//console.log('*************    YOu are NOT Logged in  **************');
			//}
		}
		
	// Upto here This is added for Solestruck Single Sign-On by YES
	
		eraseCookie("analyticsSearchTerm"); // Added for Search Analytics by YES	
		
		
		$('#backgroundPopup').click(function(){
			
			// This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
			if($('.dnt_see_ursze_act').css('display')=='block')
	    	{
	    		$('#idp_selected_size').text("Please Select");
		    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
	    	}
				//console.log('@@@@@@@@@@@@  Background of the Popup is clicked  @@@@@@@@@@@@');
				if($('.cart_popup').css("display") == "block")
				{
					//console.log('^^^^^^^^^^^  Because of Background of Popup clicked ---->>>> Shopping Cart is Ready to Hide  ^^^^^^^^^^^^');
					var gAnalyticsId=$('#gAnalyticsID').val();
					//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
					ga('create', gAnalyticsId);
					ga('send', 'pageview');
				}
			
			// Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
				
			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
			   //alert("coming to the condition");
				$('.popup_pos').hide();
				$('#backgroundPopup').fadeOut('slow');
			}
			if(window.location.pathname=="/showThankyou.htm")
			{
				$('.blackfriday_faq_chk, .emailus_popup_act').hide();
				$('#backgroundPopup').fadeOut('slow');
			}
				
			//$('.popup_pos').hide();
			$(".vedio_holder").html("<video preload='none'>");
			//$('#backgroundPopup').fadeOut('slow');
			if($(".homepagevideo").find(".vedio_holder").attr("id")=="vedio_holder")
			{
				//console.log("inside the condn for rotating banner");
				$(".banner").find("#bannerForVideo").fadeOut('slow');
 				$(".banner").find("#mySlider").fadeIn('slow');
			}
			
			$('#fbErrorMsg').removeClass('fberror');
			$('#fbErrorMsg').hide();
		});
		
		
  	    /*var mouse_is_inside=false;
		$('.popup_pos').hover(function(){ 
	        mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.create_account').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.forgot_password_form').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.emailus_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.free_shipping_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.wish_list_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.cart_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.nav_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.wish_list_form').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.dnt_see_ursze_act').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.outof_stock_popup_act').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.return_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.lookbook_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		  
	    $("body").mouseup(function(){ 
	        if(! mouse_is_inside){
	        	$('.popup_pos').hide(); 
	        	$('.create_account').hide();
	        	$('.forgot_password_form').hide();
	        	$('.emailus_popup').hide();
	        	$('.free_shipping_popup').hide();
	        	$('.wish_list_popup').hide();
	        	$('.cart_popup').hide();
	        	$('.nav_popup').hide();
	        	$('.wish_list_form').hide();
	        	$('.dnt_see_ursze_act').hide();
	        	$('.outof_stock_popup_act').hide();
	        	$('.return_popup').hide();
	        	$('.lookbook_popup').hide();
	        	$("#backgroundPopup").fadeOut('slow');
	        }
	    });*/
		/*$('body').click(function(e){
			if(e.target.className!=="signin_form")
			{
				$('.signin_form').hide(); 
	        	$("#backgroundPopup").fadeOut('slow');
			}
		});*/
		
		$('.help_holder').click(function()
		{
			$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
			$('.emailus_popup_act').fadeIn();
			$("#emailUsId").focus();
			 //position_popup ();
	 	 });
		
		$('#thankyouLogo').click(function(){
			window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		});
		
		$('.loginMyAccount').click(function()
		{
			$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
				{
						if(customerid!=null&&customerid!='')	
							{
								window.location.href='/MyAccount.htm';
							}
						else
							{
								$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
								$('.signin_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
								$("#email_login").focus();
							}
				}});
			
		});
		
		
		//console.log("value of the hidden value of sale product :: "+$('#saleProduct').val());
		//console.log('discount program exists :: '+$('#finalSale').val());
//		if($('#finalSale').val()!='null' && $('#saleProduct').val() == 'true')
//		{
//			//alert("coming into the saleProduct true condition");
//			$("#saleGIF").show();
//		}
//		else if($('#finalSale').val()=='null' || $('#saleProduct').val() == 'false' || $('#saleProduct').val() == '')
//		{
//			//alert("coming into the saleProduct false condition");
//			$("#saleGIF").hide();
//		}
		
		if($.browser.msie)
		{
			if($.browser.version.indexOf('7.')!=-1 || $.browser.version.indexOf('8.')!=-1)
			{
				//console.log('----->>>>> INSIDE IE Version is   ------>>>>>> : '+$.browser.version);
				$('.global_nav ul li a').css({'background-repeat' : 'no-repeat'});
			}
		}
		if(location.pathname.match("index.html"))
    	{
			if($('#fbLoginErrorMessage').val()!=null && $('#fbLoginErrorMessage').val()!="" && $('#fbLoginErrorMessage').val()=="show")
			{
				$('#fbErrorMsg').show();
				
				$.ajax({url:'/clearfbLoginErrorMessageSession.htm',success:function(data)
				{	}
				});
				setTimeout(function(){
					$('#fbErrorMsg').hide();
				}, 10000);
			}
    	}
		else
		{
			if($('#fbLoginErrorMessage').val()!=null && $('#fbLoginErrorMessage').val()!="" && $('#fbLoginErrorMessage').val()=="show")
			{
				$('#backgroundPopup').show();
				$('.signin_form').fadeIn();
				$('#fbErrorMsg').addClass('fberror');
				$('#fbErrorMsg').show();
				
				$.ajax({url:'/clearfbLoginErrorMessageSession.htm',success:function(data)
				{	}
				});
			}
		}
		if($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="FF")
			$('#saleFAQPage').show();
		else
			$('#saleFAQPage').hide();
		
		if($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
		{
			$('#shipping').hide();
			$('#saleFAQ').show();
		}
		else
		{
			$('#shipping').show();
			$('#saleFAQ').hide();
		}
		$('#clickhere').click(function()
		{
			$('.fb_sale_question_popup').show();
			$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
		})
		$('#fb_sale').click(function()
		{
			$('.fb_sale_popup').show();
			$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
		});
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
		{
			$('#afterLogin').show();
			$('#beforeLogin').hide();
		}
		else if((readCookie('Facebook')==null || readCookie('Facebook')!='Facebook') && ($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order"))
		{
			$('#beforeLogin').show();
			$('#afterLogin').hide();
		}
		
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order" && window.location.pathname=='/showThankyou.htm')
		{
			//console.log("coming inside the show thank you page condition");
			var subTotal=$('#subTotal').val();
			var conditionSatisfied = false;
			var discountAmountForSubtotal = 0.00;
			//console.log("sub total value after to fixed is :: "+subTotal);
			for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
			{
				if(parseFloat(subTotal)>=$('#minLimits_'+i).val() && parseFloat(subTotal)<$('#maxLimits_'+i).val() && conditionSatisfied==false)
				{
					//console.log("the condition is success and the subtotal is :: "+subTotal);
					//console.log("the condition is success and the min threshold is :: "+$('#minLimits_'+i).val()+ " && max threshold is :: "+$('#maxLimits_'+i).val());
					conditionSatisfied = true;
					discountAmountForSubtotal = $('#discountValues_'+i).val();
					$('#facebookbonus').show();
					$('#bonus_price').text('-$'+discountAmountForSubtotal);
					
				}
			}
			if(conditionSatisfied!=true && conditionSatisfied==false)
			{
				//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
				discountAmountForSubtotal = 0.00;
				$('#facebookbonus').hide();
			}
		}
		//console.log("discount type name is :: "+$('#discountTypeName').val());
//		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
//		{
//			var subTotal=$('#grandTotal').val();
//			var totalPrice;
//			var conditionSatisfied = false;
//			var discountAmountForSubtotal = 0.00;
//			console.log("sub total value after to fixed is :: "+subTotal);
//			for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
//			{
//				if(subTotal>=$('#minLimits_'+i).val() && subTotal<$('#maxLimits_'+i).val() && conditionSatisfied==false)
//				{
//					conditionSatisfied = true;
//					discountAmountForSubtotal = $('#discountValues_'+i).val();
//					//subTotal = parseFloat(subTotal)+parseFloat(discountAmountForSubtotal);
//					console.log("coming inside the condition and the subtotal is :: "+subTotal);
//					var discountAmountForLineItem = discountAmountForSubtotal/$('#lineItemsSizes').val();
//					console.log("discount amount for line item is :: "+discountAmountForLineItem);
//					console.log("size of the line item is :: "+$('#lineItemsSizes').val());
//					$("#cart_subtotal").text('$'+subTotal);
//					subTotal = subTotal-discountAmountForSubtotal;
//					setTimeout(function(){
//						for(j=1; j<parseFloat($('#lineItemsSizes').val())+1; j++)
//						{
//							console.log('coming into the for loop of j');
//							var price = $('#price_'+j).text().replace('$','');
//							console.log("the price of the line item is :: "+price);
//							var updatedPrice = parseFloat(price)+parseFloat(discountAmountForLineItem);
//							console.log("the updated price of the line item is :: "+updatedPrice);
//							$('#price_'+j).text('$'+updatedPrice);
//							//console.log("the price to fixed price is :: "+price.toFixed(2));
//						}
//					},100);
//				}
//			}
//			if(discountAmountForSubtotal!=0.00 && discountAmountForSubtotal>0.00 && conditionSatisfied==true)
//			{
//				//console.log("coming inside the savings function and savings amount is :: "+Savings);
////				var Savings = $("#cart_savings").text().replace('$','');
////				Savings = Savings.replace('-','');
////				if(Savings=="" )
////				{
////					console.log("savings price not equal to 0 it is greater than 0 :: "+Savings);
////					Savings = discountAmountForSubtotal;
////					$('#cart_savings').text('-$'+Savings);
////				}
////				else
////				{
////					console.log("coming inside the else of the savings condition and the savings before calcualtion is :: "+Savings);
////					Savings = parseFloat(Savings)+parseFloat(discountAmountForSubtotal)
////					$('#cart_savings').text('-$'+Savings);
////				}
//				var ShippingPrice = $('#cart_shipping').text().replace('$','');
//				if(ShippingPrice!='FREE')
//				{
//					//console.log("coming inside the shipping price not free :: "+ShippingPrice);
//					totalPrice = parseFloat(subTotal)+parseFloat(ShippingPrice);
//				}
//				else
//					totalPrice = subTotal;
//				$(".total_price").text('$'+totalPrice.toFixed(2));
//			}
////			if(conditionSatisfied!=true && conditionSatisfied==false)
////			{
////				//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
////				discountAmountForSubtotal = 0.00;
////				subTotal = subTotal-discountAmountForSubtotal;
////				//console.log("subtotal after calculation is :: "+subTotal);
////				$("#finalTotal").text('$'+subTotal.toFixed(2));
////				$("#shipcartSubtotal").text('$'+subTotal.toFixed(2));
////				
////			}
//			
//			
////			console.log("coming inside the sale condition inside the action.js file :: "+$('#grandTotal').val());
////			var subTotal=$('#grandTotal').val();
////			if(subTotal>200.00 && subTotal<400.00)
////			{
////				console.log("coming into the grand total calculation function");
////				subTotal=subTotal-50.00;
////				$('.total_price').text(subTotal.toFixed(2));
////			}
//		}
		
		
		
});

jQuery(window).bind('load',function(){	
	  $('#isTimeChanged').val(true);
});

function getTimeStampForPreTimer()
{
	$.ajax({
		url:'/getTimeStampForPreTimer.htm',
		async:false,
		cache:false,
		success:function(json)
		{
			  $('#salehours').val(json.split('-')[0]);
			  $('#salemins').val(json.split('-')[1]);
			  $('#salesecs').val(json.split('-')[2]);
		}
	});
}

function clearCache()
{
	$.ajax({
		url:'/clearFinalSaleCache.htm',
		success:function(json)
		{
			
		}
	});
	$(".loading_page").show();
	location.reload();
}

function clearPreTimerCache()
{
	$.ajax({
		url:'/clearPreTimerCache.htm',
		success:function(json)
		{
			
		}
	});
	$(".loading_page").show();
	location.reload();
}

function showSurvey()
{
	$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
	$(".feedback_form").fadeIn('slow');
	$(".feedback_form .popup_close_act").click(function(){$(".feedback_form").fadeOut('fast');$("#backgroundPopup").fadeOut('slow');});
	
}

function getShippingServiceDetailsForInternational(element)
{
	var splittedCn = $(element).attr('id').split('_');
	var countryCode = splittedCn[1];
	var countryName = $('#countryName').val();
	
	$('#usps').hide();
	$('#fedex').hide();
	if(countryCode!="00"){
		
		$('#countrynm').text(countryName);
		
		$.ajax({
			url:'/getShippingServicesForCSPage.htm',
			dataType:'json',
			data:{'countryCode':countryCode,'stateCode':null},
			success:function(shippingServices){
				var html='';
				$(shippingServices).each(function(index,item){
					
					var shippingTypeId=item.zone.shippingServiceType.id;
					var serviceName=item.zone.shippingServiceName;
					var serviceTypeName=item.zone.shippingServiceTypeName;
					
					var shippingPrice='$'+item.zone.singleUnitRate.toFixed(2);
					var additionalPairPrice='$'+item.zone.unitIncrementRate.toFixed(2);
					//var deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					var deliveryDays="";
					 if(item.zone.deliveryDaysLowerLimit>0){
						 deliveryDays = item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business days';
					 }
					 else if(item.zone.deliveryDaysUpperLimit==1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business day';
						 }
					 else if(item.zone.deliveryDaysUpperLimit>1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business days';
						 }
					var priceDetail = shippingPrice + " and " + additionalPairPrice + " for additional pair";
					
					if(serviceTypeName=="Priority International"){
						$('#dayStdInt').text(deliveryDays);
						if(countryCode=='US' || countryCode =='CA'){
							$('#costStdInt').text("FREE");
						}
						else{
							$('#costStdInt').text(priceDetail);
						}
						$('#usps').show();
					}
					
					if(serviceTypeName=="International Economy"){
						$('#dayExpInt').text(deliveryDays);
						$('#costExpInt').text(priceDetail);
						$('#fedex').show();
					}
					
					
					if(item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
						shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';

				});

			}
		});
		$('.shipping_tc').show();
		
	}
	else{
		
		
		
	}
	
}

function getShippingServiceDetailsForUSState(elem)
{
	var countryName = "USA";
	var countryCode = "US";
	var stateName = $("#stateName").val();
	var splitted = $(elem).attr('id').split('_');
	var stateCode = splitted[1];
	
	$('#stdUL').hide();
	$('#expUL').hide();
	$('#ovnUL').hide();
	$('#stdUSPS').hide();
	$('#expUSPS').hide();
	
	//alert(countryName + "-" + countryCode);
	//alert(stateName + "-" + stateCode);
	if(stateCode!="00"){
		$("#statenm").text(stateName);
		
		$.ajax({
			url:'/getShippingServicesForCSPage.htm',
			dataType:'json',
			data:{'countryCode':countryCode,'stateCode':stateCode},
			success:function(shippingServices){
				var html='';
				$(shippingServices).each(function(index,item){
					
					var shippingTypeId=item.zone.shippingServiceType.id;
					var serviceName=item.zone.shippingServiceName;
					var serviceTypeName=item.zone.shippingServiceTypeName;
					
					var shippingPrice='$'+item.zone.singleUnitRate.toFixed(2);
					var additionalPairPrice='$'+item.zone.unitIncrementRate.toFixed(2);
					//var deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					
					var deliveryDays="";
					 if(item.zone.deliveryDaysLowerLimit>0){
						 deliveryDays = item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					 }
					 else if(item.zone.deliveryDaysUpperLimit==1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business Day';
						 }
					 else if(item.zone.deliveryDaysUpperLimit>1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business Days';
						 }
					 
					 
					var priceDetail = shippingPrice;
					
					if(serviceTypeName=="Standard Shipping"){
						$('#dayStd').text(deliveryDays);
						$('#costStd').text("FREE");
						$('#stdUL').show();
					}
					
					if(serviceTypeName=="Express Shipping"){
						$('#dayExp').text(deliveryDays);
						$('#costExp').text(priceDetail);
						$('#expUL').show();
					}
					
					if(serviceTypeName=="Overnight Shipping"){
						$('#dayOvn').text(deliveryDays);
						$('#costOvn').text(priceDetail);
						$('#ovnUL').show();
					}

					if(serviceTypeName=="Standard USPS"){
						$('#dayStdUSPS').text(deliveryDays);
						$('#costStdUSPS').text(priceDetail);
						$('#stdUSPS').show();
					}
					
					if(serviceTypeName=="Express USPS"){
						$('#dayExpUSPS').text(deliveryDays);
						$('#costExpUSPS').text(priceDetail);
						$('#expUSPS').show();
					}
					
					

					if(item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
						shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';

				});

			}
		});
		$('.shipping_tc').show();
		
	}
	
	else{
		//add error field to input box with msg "Please Select a State"
		$('.shipping_tc').hide();

	}
	
	
}

function initialize()
{

/************* global **************/

/************* tooltip ***********
	$(function() {
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 's'});
	 });
***/
	
	$("img").error(function(){
		
		$(this).hide();
		/*var brokenImg =  $(this).attr("src");
		if(brokenImg!="/images/unavaliable_240_180.jpg"){
			//alert("src = " + $(this).attr("src")); 
			$(this).attr("src","/images/unavaliable_240_180.jpg");
			$(this).css("border","0");
			$(this).css("margin","0");
			$(this).css("padding","0");
			 //call for sending mail alerts for broken images - shp
			 brokenImagesAlert(brokenImg);
		
		}*/
	});

//InputBox
	$('input.text_val_act, textarea').focus(function() { 
		  if( this.value == this.defaultValue ) {
			  this.value = "";
			  
		   
		  }
		  }).blur(function() {
		   if( !this.value.length ) {
			this.value = this.defaultValue;
		   }
		}); 

	$('input.text_title_act, textarea').focus(function() { 
		  if( this.value == $(this).attr('original-title')) {
			  this.value = "";
		  }
		  }).blur(function() {
		   if( !this.value.length ) {
			this.value = $(this).attr('original-title');
		   }
		}); 

 // black screen dynamic height on window resize	
	
  	$('.popup_close_act').click(function() {
  		if($('.dnt_see_ursze_act').css('display')=='block')
    	{
    		$('#idp_selected_size').text("Please Select");
	    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
    	}
  		$('#backgroundPopup').fadeOut();
		$(this).parent().hide();
				
	});
  	

  	
 // This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
  	
  	$('.shoping_cart_popup_close').click(function() {
  		//console.log('------>>>>>>>>>>>> Shopping Cart Popup is Closed  ------->>>>>>>>>');
  		var gAnalyticsId=$('#gAnalyticsID').val();
		//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', gAnalyticsId);
		ga('send', 'pageview');
				
	});
  	
 // Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
  	
  	$('.popup_reset_close_act').click(function() {
  		$('#backgroundPopup').fadeOut();
		$(this).parent().hide();
		window.location='/loadCustomerServicePage.htm?page=My Account';
				
	});
		
   var body_win_height = parseInt(document.body.clientHeight) ;
   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }

	$(window).resize(function(){
	   var body_win_height = parseInt(document.body.clientHeight) ;
	   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }
	}); 	

/******  black screen ends here********/ 
	
 	
	$(".load_act").click(function(){ 
		//$('.loading_list').fadeIn();
		//$('.load_review').hide();
		//$('.global_topbtm_scroll').fadeIn();
    });
 
 
/************* global scroll btn **************/
	

	$(".scroll_top_act").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
    });

	$(".scroll_btm_act").click(function(){ 
		$('html, body').animate({scrollTop: $(document).height()-$(window).height()}, "slow");
    });
 

	//$(".custom_dropdown").kgcustomdropdown();
	
	
	$('body, #wrapper, .black_screen').click(function(e){
		
		
		
		if ($('.custom_dropdown').children('ul:visible'))
			{
				$('.custom_dropdown').each(function(){
					
						if($(e.target).parent().attr("class")!=$(this).attr("class"))
							{
								$(this).find("ul").hide();
							}
				});
				
			}
		
		
		setTimeout(function(){
			
			
			$(".kgpopup_act:visible").each(function(){
				
				var wndHeight=$(window).height();
				var popupHeight=$(this).height();
				var tenPercentage=((wndHeight*10)/100);
				var onePercentage=((wndHeight*1)/100);
				
				//console.log(($(this).offset().top+popupHeight)>wndHeight);
				if(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight){
										
					
						$(this).css("position","absolute");
						//$(this).css("top",(onePercentage*5)+"px");
						//$(this).animate({top:(onePercentage*5)});
					
				}
				else
					{
						
							//$(this).css("position","fixed");
							//$(this).animate({top:(onePercentage*13)});
						
					}
				
				
			});
			
		},2000); 
		



	 });
	
	
	
/*$(window).resize(function(){
		

	$(".kgpopup_act:visible").each(function(){
		
		var wndHeight=$(window).height();
		var popupHeight=$(this).height();
		var tenPercentage=((wndHeight*10)/100);
		var onePercentage=((wndHeight*1)/100);
		
		//console.log(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight);
		if(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight){
			
				
				$(this).css("position","absolute");
				//$(this).css("top",(onePercentage*5)+"px");
				$(this).animate({top:(onePercentage*5)});
			
		}
		else
			{
				
						$(this).css("position","fixed");
						//$(this).animate({top:(onePercentage*13)});
					
				
			}
		
		
		
	});

	$("#backgroundPopup").height($(document).height()).width($(document).width());

		
	}); */
	
	
	/*$('body, #wrapper, .black_screen').click(function(){
		var wrappclass = $('#wrapper').attr("class");
		if ($('#wrapper').hasClass("wrappflag"))
			{
				$('.custom_dropdown').find('ul').hide();	
				$('#wrapper').removeClass('wrappflag');
			}
	 });*/
	 
	 
/********* Vintage Tab *********/
	$("#women_tab_act").click(function () {
		$('#women_tab_act').addClass('active_women');
		$('#men_tab_act').removeClass('active_men');
    });
	
	$("#men_tab_act").click(function () {
		$('#men_tab_act').addClass('active_men');
		$('#women_tab_act').removeClass('active_women');
    });
	 
/*********** Shipping Dropdown *****************/	
	 
	$('#box_popup_header_act').click(function() {
		$('.free_shipping_popup').fadeIn();
		//$('#backgroundPopup').fadeIn();
	 	//position_popup ();
 	 });
	   
	$('#brand_bio_act').click(function() {
		$('.brand_bio_popup').fadeIn();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		//$('#backgroundPopup').fadeIn();
	 	//position_popup ();
 	 });
 
/*********** Item detail page *****************/	
	/*$(".cl_glry_hver_act> span").click(function(){
		$(this).siblings('div:visible').hide();
		$(this).next().fadeIn('fast');
		return false;
		}, function(){
    });*/

 	$(".cl_glry_hver_act> span").hover(function(){
		$(this).addClass('color_tab_mouseover');
		$(this).tipsy();
		return false
		}, function(){
		$(this).removeClass('color_tab_mouseover');
    });
 	// This is for Lookbook Tool Tip by YES
 	$(".book_icon").hover(function(){
		$(this).tipsy();
		return false
    });
 	
 	$(".video_icon").hover(function(){
		$(this).tipsy();
		return false
    });
   // Upto here This is for Lookbook Tool Tip by YES

	/*$(".cl_glry_hver_act> span").click(function(){
		$('.view_glry_act> div').hide();
		$(this).addClass('color_tab_hover');
		$(this).siblings().removeClass('color_tab_hover');
		
    });*/
 	
	
	$(".view_glry_act> span").hover(function(){ 
		$('.cl_glry_hver_act> div').hide(); 
		$(this).addClass('view_glallery_opacity');
		$(this).siblings().removeClass('view_glallery_opacity');
		
    });
	
 	$(".view_glry_act> span").hover(function(){
		$(this).siblings('div:visible').hide();
	
		$(this).next().fadeIn();
		
		$('.zoomContainer').remove();
		$('.zoomWindowContainer').remove();
		
//		var isNew					= $.trim($('#isNew').val());
//		
//		if(isNew == "true")
//		{
			var origImage			= $(this).find('img').attr('src');
			var shotNum				= origImage.substring(origImage.lastIndexOf('-')+1,origImage.lastIndexOf('.'));
			var zoomShot			= '0108'+shotNum[4]+shotNum[5];
	
			var zoomImg				= origImage.substring(0,origImage.lastIndexOf('-'))+'-'+zoomShot+'.jpg';
			
			$("<img>", {
			    src: zoomImg,
			    error: function() { 
			    	$('.idp_zoomicon').hide(); 
			    	//$('.view_gallery').unbind('mouseenter mouseleave mousemove');
			    	$('view_gallery').find('div').css( 'cursor', 'default' );
			    },
			    load: function() { 
			    	$('.idp_zoomicon').show(); 
			    	
			    	$('.view_gallery').find('div').css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );

//			    	$(".view_gallery").bind("mouseenter",function(){
//			    		$('.idp_zoomcursor').show();
//			    	});
//			    	$(".view_gallery").bind("mouseleave",function(){
//			    		$('.idp_zoomcursor').hide();
//			    	});
//			    	$('.view_gallery').find('div').bind("mousemove",function(e){
//			    		   
////			    	    var left	= e.pageX-315;
////			    	    var top	 	= e.pageY-360;
//			    		var parentOffset = $(this).offset();
//			    	    var left 	= e.pageX-parentOffset.left-$('.idp_zoomcursor').width()/2;
//			    	    var top	 	= e.pageY-parentOffset.top-$('.idp_zoomcursor').height()/2;
//			    	    if(left > 328)
//			    	    {
//			    	    left	= 328;
//			    	    }
//			    	    if(left < 0)
//			    	    {
//			    	    left	= 0;
//			    	    }
//			    	    if(top > 239)
//			    	    {
//			    	    top = 239;
//			    	    }
//			    	    if(top < 0)
//			    	    {
//			    	    top	 = 0;
//			    	    }
//		    	        $('.idp_zoomcursor').css({
//		    	        	left:  left+"px",
//			    	   	    top:   top+"px"
//		    	        });
//		    	    });
			    }
		    });
			
			$(this).next().find('img').attr("data-zoom-image",zoomImg);
			$(this).next().find('img').elevateZoom({
				zoomWindowPosition: "idp_zoomedimage",
				zoomWindowHeight: 360, 
				zoomWindowWidth: 451, 
				borderSize: 0, 
				easing: true,
				lenszoom: false,
	    		lensFadeIn : 100000,
	    		zoomType : 'window',
	    		containLensZoom : false,
	    		onZoomedImageLoaded: function() {
	    			$('.zoomContainer').each(function(){
	    				if($(this).position().left == 0){
	    					$(this).next().remove();
	    					$(this).remove();
	    				}
	    			});
	    			$(".zoomLens").css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );
	    		}
//				cursor: "url(/images/zoom-icon.png), pointer"
			});
//		}
		
		return false
		}, function(){
    });
	
	/*$(".cl_glry_hver_act span").click(function () {
	//	   $("li.").effect("highlight", {color: 'grey'}, 3000);
		if(sizeSelected==""){
			//$(".cl_info_size_act").addClass("size_error_label");
		}
	//	$("li.cl_info_bg_act").css("background-color", "#ccc").fadeTo(700,1,function(){$("li.cl_info_bg_act").css("background-color", "#fff");});
 	});*/
 	
	
	$(".size_available_act").click(function () {
		   $(".cl_info_size_act span").html($(this).find('span').html());
		
 	});
	
	$(".size_available_act").click(function () {
		   //$("li.cl_info_size_act").effect("highlight", {color:'grey'}, 3000);
	       //$("li.cl_info_size_act").css("background-color", "#ccc").fadeTo(700,1,function(){$("li.cl_info_size_act").css("background-color", "#fff");});
		   $(".cl_info_size_act").removeClass("size_error_label");
		   $('.size_head_act').removeClass("error_label");
 	});

	$(".desc_expand_act").click(function () {
		   $(".desc_small_act").hide();
		   $(".desc_large_act").slideDown();
 	});

	$(".desc_minimize_act").click(function () {
		   $(".desc_large_act").slideUp();
		   $(".desc_small_act").slideDown();
 	});
	
	$('.size_available_act').live('click',function() {
			$(this).children().addClass("size_active");
			$(this).siblings().children().removeClass('size_active');
			
	});


	$(".rating_select_act code").toggle(function(){
		$(this).removeClass("default_rating");
		$(this).addClass("review_selected");
		$(this).prevAll().removeClass("default_rating");		
		$(this).prevAll().addClass("review_selected");
		$(this).nextAll().removeClass("review_selected");		
		$(this).nextAll().addClass("default_rating");
      },function(){		   
		$(this).nextAll().removeClass("review_selected");		
		$(this).nextAll().addClass("default_rating");
		
    });
	
/****************** Poupup ****************/
	$('.dont_see_size_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.dnt_see_ursze_act').fadeIn();		
		$("#sizeEmail").focus();
		$(".custom_dropdown").kgcustomdropdown();
   		//position_popup ();
 	 });
	
	$('.outof_stock_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.outof_stock_popup_act').fadeIn();	
		$("#sizeEmail1").focus();
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	
	$('.sendto_friend_click_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.sendto_friend_popup_act').fadeIn();		
		$("#custName").focus();
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	 	
	$('.acnepopup_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.acne_popup_act').fadeIn();	
		hideAcneErrors(); 
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	
	$('.emailuspopup_act').click(function() {
		console.log("inside")
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form input#emailUsId').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form textarea#help').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form input#order_number').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form div#show_selected_images').html("");
		mailDetials = {};
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.emailus_popup_act').fadeIn();
		$("#emailUsId").focus();
		 //position_popup ();
 	 });
	
/*********** brand view page *********************/	
		var slide_desc_ele = true;	
	$('.brand_desc_act').click(function() {
				$('.brand_information_view').slideToggle(500); 	
				$("a.brand_info_slide").text( "Close Brand Bio" );
				if (slide_desc_ele) 	{
					$('.scroll-pane-brand-act').jScrollPane();
					slide_desc_ele = false;
				}					
				
				});
	
	
	var slide_ele = true;	
	$('.show_drop_down_act').live('click', function() {
		//console.log("----->>>> show_drop_down_act is Clicked  ------>>>>>>>");
		$('.select_drop_down').slideToggle(500);
			if (slide_ele) 	{
				//console.log("----->>>> show_drop_down_act is  Opened ------>>>>>>>  : " + slide_ele);
				
				$('.style_selectpannel h2').addClass('drop_up_filter');
				$('.size_select_pannel h2').addClass('drop_up_filter');
				$('.color_select_pannel h2').addClass('drop_up_filter');
				$('.price_select_pannel h2').addClass('drop_up_filter');
				$('.brand_select_pannel h2').addClass('drop_up_filter');
				$('.gender_select_pannel h2').addClass('drop_up_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_up_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_up_filter');
				
				$('.style_selectpannel h2').removeClass('drop_down_filter');
				$('.size_select_pannel h2').removeClass('drop_down_filter');
				$('.color_select_pannel h2').removeClass('drop_down_filter');
				$('.price_select_pannel h2').removeClass('drop_down_filter');
				$('.brand_select_pannel h2').removeClass('drop_down_filter');
				$('.gender_select_pannel h2').removeClass('drop_down_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_down_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').removeClass('ispm_drop_down_filter');
				
				scrollBarsForFilters=$('.scroll-pane').jScrollPane();
				slide_ele = false;
			}
			else
			{
				//console.log("----->>>> show_drop_down_act is  Closed ------>>>>>>>  : " + slide_ele);
				
				$('.style_selectpannel h2').addClass('drop_down_filter');
				$('.size_select_pannel h2').addClass('drop_down_filter');
				$('.color_select_pannel h2').addClass('drop_down_filter');
				$('.price_select_pannel h2').addClass('drop_down_filter');
				$('.brand_select_pannel h2').addClass('drop_down_filter');
				$('.gender_select_pannel h2').addClass('drop_down_filter');
				
				
				$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_down_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_down_filter');
				
				
				
				$('.style_selectpannel h2').removeClass('drop_up_filter');
				$('.size_select_pannel h2').removeClass('drop_up_filter');
				$('.color_select_pannel h2').removeClass('drop_up_filter');
				$('.price_select_pannel h2').removeClass('drop_up_filter');
				$('.brand_select_pannel h2').removeClass('drop_up_filter');
				$('.gender_select_pannel h2').removeClass('drop_up_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_up_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').removeClass('ispm_drop_up_filter');
				
				
				slide_ele = true;	
			}
	});
	
	$('.hide_drop_down_act').live('click', function() {
		$('#wrapper').addClass('flag');					
	});
	
 	 
	$('.select_drop_down, .show_drop_down_act, .brand_desc_act, .brand_information_view').mouseout(function() {
		$('#wrapper').addClass('flag');
 	});
	$('.select_drop_down, .show_drop_down_act, .brand_desc_act, .brand_information_view, .your_selection').mouseover(function() {
		$('#wrapper').removeClass('flag');
 	});
	
	$('body').live('click', function() {
		//alert("sdafsda");
 		if ($('#wrapper').hasClass("flag")) {
			$('.select_drop_down').hide();
			$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_up_filter');
			
			$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_down_filter');
			
			$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_down_filter');
			
			$('.brand_information_view').hide();
			$('#wrapper').removeClass('flag');
		}
	});
	/************* New CheckoutPage *************/

	
		$('.chckout_cmplttitle_act').css('display', 'none');
		
		//$('.shipping_same_address_act').css('display', 'none');
		//$('.same_shpping_address_act').attr("checked", "checked");
		

	/*
	$('.same_shpping_address_act') .click( function() {
		if (jQuery(this).is(':checked'))
		$('.shipping_same_address_act').hide();
		else 
		$('.shipping_same_address_act').show();
	} );	
	
	$('.your_info_act').click (function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').show();
		$('.checkout_2_act').addClass('selected');
		$('.checkout_1_act').removeClass('selected')
			
	});
		
	$('.shipping_act').click(function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').show();
		$('.checkout_1_act').removeClass('selected');
		$('.checkout_2_act').removeClass('selected');
		$('.checkout_3_act').addClass('selected');
	});
	

	$('.shipping_back_act').click(function() {
		$('.chckout_yourinfo').show();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
				
		$('.checkout_1_act').addClass('selected');
		$('.checkout_2_act').removeClass('selected');
		$('.checkout_3_act').removeClass('selected');
		
	});
*/
	$('.gift_code_act').click(function() {
		$('.gift_code').hide();
		$('.discount_code').show();	
		$('.gcode_apply_act').show();		
	});
	
	
	$('.gcode_apply_act').click(function()
	{ 
		if( $('.discount_code input').val().length === 0 ) {
			$('.discount_code input').addClass('inputError');
			$('.ok_icon_act').text('Code Unrecognized');
			$('.ok_icon_act').show();	
			$('.ok_icon').addClass('ok_error');
			
		}
		else {
			$('.discount_code input').removeClass('inputError');
			$('.ok_icon').removeClass('ok_error');
			$('.ok_icon_act').show();
			$('.ok_icon_act').text('Code Applied');
			
			}
	});

/*	
	
	$('.payment_act').click(function() {
		$('.chckout_title_act').css('display', 'none');
		$('.chckout_cmplttitle_act').css('display', 'block');
		$('.chckout_tkstitle_act').css('display', 'none');
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
		$('.pay_method').hide();
		$('.complete_purchase').show();
		$('.checkout_pathway').hide();
		$('.thankyou').hide();
		
	});

	$('.payment_back_act').click (function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').show();
		$('.check_out_payment').hide();
		$('.checkout_2_act').addClass('selected');
		$('.checkout_1_act').removeClass('selected')
		$('.checkout_3_act').removeClass('selected')
			
	});	
	$('.cmplte_purchse_act').click(function() {
		$('.chckout_title_act').css('display', 'none');
		$('.chckout_cmplttitle_act').css('display', 'none');
		$('.chckout_tkstitle_act').css('display', 'block');
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
		$('.complete_purchase').hide();
		$('.need_help_bar').hide();
		$('.thankyou').show();
		$('.checkout_remove_shoes').hide();
		$('.cart_shoe_details').hide();
		$('.checkout_noshoe_error').hide();
		$('.final_ord_details').show();
		$('.checkout_pathway').hide();
		$('.checkout_shppingcart_header h3').text('Your Final Order');
		
	});
*/	
	
	$(".remove_shoe_act").click( function () {
            $(this).parent().parent().hide();
     });                

	
	$('.shipping_billing_edit_act').click (function() {
			$('.chckout_yourinfo').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.checkout_1_act').addClass('selected');
			
	});

	
	$('.pay_method_edit_act').click (function() {
			$('.check_out_payment').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.pay_method').show();
			$('.checkout_3_act').addClass('selected');
			
	});


	$('.shipp_method_edit_act').click (function() {
			$('.check_out_shipping').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.checkout_2_act').addClass('selected');
			
	});

	
	$(".scroll-pane li").toggle(function(){	
		$(this).children().attr('checked');
    });
	
	$("#myaccount").click(function()
	{
		if($('#myaccount').text()=='SIGN IN')
		{
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$('.signin_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$("#email_login").focus();
		}
						
	});
	
	$("#forgotPass").click(function(){
			
		$('.login_form').hide();$('.forgot_password_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#email_forgot").focus();
		});
	
	$(".noAccSign").click(function(){
		
		$('.login_form').hide();$('.create_account').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#emailid").focus();
		});
	
	
	$("#box_popup_header_act").click(function(){
		
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		});
	
	
	
	
	/**** sign in click***/
	
		/*$(".signin_act").click(function()
			{
				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				$('.signin_form').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				
			});*/
		$(".signin_create_ac_act").click(function()
		{	
			$('.signin_form').fadeOut();
			$('.signin_sale').fadeOut();
			$('.wish_list_form').fadeOut();
			$('.create_account').fadeIn();
			/*$('.inputbox_final').val('');
			$('.inputbox_final_pwd').val('');
			$('.inputspan_txt').show();
			$('.inputspan_pwd').show();*/
		});
		$(".signin_create_ac_act_sale").click(function()
		{	
			$('.signin_sale').fadeOut();
			$('.create_account_sale').fadeIn();
		});
		
		$(".signin_create_ac_act_wishlist").click(function()
		{	
			$('.wish_list_form').fadeOut();
			$('.create_account_wishlist').fadeIn();
		});
		
		$('#timmer_wrapper').click(function(){
			window.location.href="/solestruck-knows-you/"
		});
		
//		$(".timmer_wrapper_act").click(function()
//		{	
//			//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			//$('.cat_popup').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			var loginIn=$('#loginIn').val();
//			if(loginIn!='true')
//			{
//				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//				$('#extra_black_fridaypopup').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//			else
//			{
//				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//				$('#extra_black_fridaypopup_next').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//		}); 
		
		
		$(".sale_timmer_wrapper_act").click(function()
		{	
			
				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				//$('#pre_black_fridaypopup').fadeIn().css('padding-bottom', '15px');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				$('.PreiviewSITEPOPUP').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			
		}); 
		
//		$(".cat_need_it_act").click(function()
//		{
//			if(readCookie('Facebook')==null)
//			{
//				$('.cat_popup').fadeOut();
//				$('.signin_sale').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//			else
//			{
//				$('.cat_popup').fadeOut();
//				$('.black_fridaypopup_one').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//		});
		var discountExists=$('#discountExists').val();
		if(discountExists=="true")
			{
				if($("#showTimer").val()=='true')
				{
					if((window.location.pathname=='/sale-shoes/') || (window.location.pathname.indexOf("/sale-shoes/page-")!=-1) || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname.indexOf("/sale-womens-shoes/page-")!=-1)|| (window.location.pathname=='/sale-mens-shoes/') || (window.location.pathname.indexOf("/sale-mens-shoes/page-")!=-1)  || (window.location.pathname.indexOf("/sale-womens-shoes/")!=-1 && location.href.indexOf("size-")!=-1) || (window.location.pathname.indexOf("/sale-mens-shoes/")!=-1 && location.href.indexOf("size-")!=-1))
					{
						var logIn=$('#loginIn').val();
						if(logIn!='true')
						{
							$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
							$('#extra_black_fridaypopup').fadeIn();
							$("#pre_black_fridaypopup").css('display','none');
							//$("#extra_black_fridaypopup").css('display','none');
							//$("#extra_black_fridaypopup_next").css('display','none');
							$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px');
						}
					}
				}
			}
		
		$('.black_fridaycountdown').click(function(){
			$('.black_fridaypopup_next_act').hide();
			$('#extra_black_fridaypopup_next').hide();
			$('.black_fridaypopup_one').show();
		});
		
		
		$(".counter_signin_act").click(function()
		{	
			$('.black_fridaypopup').fadeOut();
			$('.signin_sale').fadeIn();
		});
		
		/*$(".signin_sale_act").click(function()
				{	
					$('.signin_sale').fadeOut().css('position','fixed');
					$('.black_fridaypopup_two').fadeIn().css('position','fixed');
				});*/
		$(".black_fridaypopup_twonext_act").click(function()
				{	
					/*$(".loading_page").show();*/
					$('.black_fridaypopup_two').fadeOut();
					$('.geton_two').fadeIn();
				});
		
		/*$(".counter_facebook_act").click(function()
				{	
					$('.black_fridaypopup').fadeOut().css('position','fixed');
					$('.black_fridaypopup_one').fadeIn().css('position','fixed');
				});*/
		
		$(".black_fridaypopup_onenext_act").click(function()
				{	
					$('.black_fridaypopup_one').fadeOut();
					$('.geton_one').fadeIn();
				});
		
		$(".shop_btn").click(function()
		{
			$(".loading_page").show();
			if(location.pathname.match("index.html"))
	    	{
		    	location.reload();
	    	}
//			else if((window.location.pathname=='/sale-shoes/') || (window.location.pathname.indexOf("/sale-shoes/page-")!=-1) || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname=='/sale-mens-shoes/')  || (window.location.pathname.indexOf("/sale-womens-shoes/")!=-1 && location.href.indexOf("size-")!=-1) || (window.location.pathname.indexOf("/sale-mens-shoes/")!=-1 && location.href.indexOf("size-")!=-1))
//			{
//				$('.popup_pos').hide();
//				$('#backgroundPopup').hide();
//				$(".loading_page").hide();
//			}
			else
			{
				window.location.href='/sale-shoes/';
			}
		});
		
		

		
	
	$(document).keydown(function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	    if (code === 27) {
	    	
	    	//console.log('---->> INSIDE ESCAP KEY --->>>');
	    	if($('.dnt_see_ursze_act').css('display')=='block')
	    	{
	    		$('#idp_selected_size').text("Please Select");
		    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
	    	}
	    	
	    	$(".kgpopup_act:visible").each(function(){
	    		
	    		if($(this).find(".custom_dropdown ul:visible").length>0)
	    			{
	    				//console.log('------ custom_dropdown class is hided ------');
	    				$(this).find(".custom_dropdown ul:visible").hide();
	    				return false;
	    			}
	    		else
	    			{
	    				// This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
	    			
		    				//console.log('$$$$$$   BackgroundPopup is hided   $$$$$$$');
		    				if($('.cart_popup').css("display") == "block")
		    				{
		    					//console.log('^^^^^^^^^^^  Because of Escap key Shopping Cart is Ready to Hide  ^^^^^^^^^^^^');
		    					var gAnalyticsId=$('#gAnalyticsID').val();
		    					//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
		    					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		    					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		    					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		    					})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
		    					ga('create', gAnalyticsId);
		    					ga('send', 'pageview');
	    				
		    				}
		    				
	    				// Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
		    			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
		    				//alert("coming 1");
		    				$(this).fadeOut('fast');
		    				$('#backgroundPopup').fadeOut('slow');
		    			}
	    				if($(".homepagevideo").find(".vedio_holder").attr("id")=="vedio_holder")
	    				{
	    					$(".homepagevideo").fadeOut('fast');
	    					//console.log("inside the condn for rotating banner");
	    					$(".banner").find("#bannerForVideo").fadeOut('slow');
	    	 				$(".banner").find("#mySlider").fadeIn('slow');
	    				}
	    				/*$('.inputbox_final').val('');
	    				$('.inputbox_final_pwd').val('');
	    				$('.inputspan_txt').show();
	    				$('.inputspan_pwd').show();*/
	    				return false;
	    			}
	    		$('#fbErrorMsg').removeClass('fberror');
				$('#fbErrorMsg').hide();
	    	});
	    	//$(".kgpopup_act:visible").fadeOut('fast');
	    	//$('#backgroundPopup').fadeOut('slow');
	    	//$(".custom_dropdown ul:visible").hide();
	    	//$("ul[id|='searchText_']:visible").hide();
		}
		
	});
	
	
	
	
};


function isWomenBrand(txt)
{
	var ret='';
	
	createCookie("analyticsSearchTerm",txt,1); // Added for Search Analytics by YES
	
	$(".global_nav div ul li a").each(function(){
		
		var com='/'+txt.toLowerCase().split(" ").join("-")+'-womens-shoes/';
		if($(this).attr("href")==com)
			{
				ret=$(this).attr("href");
				return false;
			}
	});
	
	if(ret=='')
		{
			$(".global_nav div ul li a").each(function(){
						
						var com='/mens-'+txt.toLowerCase().split(" ").join("-")+'/';
						if($(this).attr("href")==com)
							{
								ret=$(this).attr("href");
								return false;
							}
					});
		}
	
	
	
	return ret;
}


function brokenImagesAlert(brokenImgLink)
{
	//var imgLink = $(this).attr('src');
	//alert("imgLink  = " + imgLink + " sent through mail");
	//alert(">>>>>>>>>" + $('.shoes_img').find('img').attr('src'));
	//alert(window.parent.$(this).attr('class'));
	
	
	//var imageLink = $('.shoes_img').find('img').attr('src');
		//$.ajax({
			
			//url:'/sendBrokenImageAlert.htm',
			//data:{'imageLink':brokenImgLink},
			//dataType:'json',
			//success:function(states)
			//{
				//alert("imageLink  = " + imgLink + " sent through mail");
			//}
			
	//});
	
	//$('.shoes_img').find('img').attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/notavailableImages/unavaliable_240_180.jpg");
	
		


}



/*Contributor: K3G
 * This function creates a cookie for the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be created.
 * value(string) - This is the value of the cookie to be created.
 * days(integer) - This is the age of the cookie to be created.  
 * */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

/*Contributor: K3G
 * This function reads a cookie from the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be read.
 * This function return the value of the cookie.
 * */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


/*Contributor: K3G
 * This function erases a cookie from the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be erased.
 * */
function eraseCookie(name) {
	createCookie(name,"",-1);
}

var initJscrollpane=true;

function showBOTBPopup()
{
		
	 $('.show_contest_act').click(function() {
			$('.boot_form_holder').addClass("dn");
			$('.boot_contest_holder').removeClass("dn");
			
			if(initJscrollpane)
				{
				$('.boot-scroll-pan').jScrollPane();
				initJscrollpane=!initJscrollpane;
				}
			
		 });
		  $('.back_form_act').click(function() {
			$('.boot_form_holder').removeClass("dn");
			$('.boot_contest_holder').addClass("dn");
		
		 
			
		 });
		  
		  $("#botbFirstName").keydown(function(){
			  
			  if($(this).val().indexOf("Please enter your name")!=-1 )
				  {
				  	$(this).val("");
				  }
			  
		  });
		  
		  $("#botbEmail").keydown(function(){
			  
			  if($(this).val().indexOf("Please enter your email")!=-1 || $(this).val().indexOf("One entry per email please.")!=-1)
				  {
				  	$(this).val("");
				  }
			  
		  });
		  
		  
	if($("#botbpopup").length>0 && $("#botbpopup").val().indexOf("showPopup")!=-1)
		{
			//js for showing the popup
		$('#backgroundPopup').width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed').fadeIn("fast");
		$(".boot_popup").fadeIn('slow');
		}
}


function isEmailId(mailId)
{
	
		   var emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;		   
		   if(emailRegEx.test(mailId) == false)		      
		      return false;
		   else
			   return true;
			
}

function trimString(s)
{
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r-=1;	}
	return s.substring(l, r+1);
}



/*function getHomePageVideo()
{
	var img_src=$('#img_url').val();
	//console.log("Image URL:"+img_src);
	var video_title1=$('#video_title').val();
	var video_url1=$('#video_url').val();
	var videoThumbNail_url1=$('#videoThumbNail_url').val();
	//console.log("Video Title:"+video_title1+"::Video Image URL::"+videoThumbNail_url1+" ::Video URL::"+video_url1);
	//console.log("coming inside video part");
	//console.log("Received Details:"+video_title1+" ------ "+videoThumbNail_url1+" ------- "+video_url1)	
	if($(".banner a img").length>0)
	{
	if(($('#video_url').val()!=null) || ($('#videoThumbNail_url').val()!=null)||($('#video_title').val()!=null))
	{
		
		$(".banner a").attr("href","#").click(function(){
			$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
			$(".homepagevideo").fadeIn('fast');
		});

		
		var htmlStr="<div class=\"lookbook_popup popup_pos kgpopup_act homepagevideo\" style=\"display:none; position: fixed; \"><div class=\"login_popup_close popup_close_act\"id=\"video_close_popup_home\">";

		htmlStr+="</div><div class=\"vedio_holder\"><img id=\"homeVideoImage\" src="+videoThumbNail_url1+" width=\"650\" height=\"370\" border=\"0\"></div>";

		htmlStr+="<span id=\"lb_name\">"+video_title1+"</span><div class=\"clear_both\"></div></div>";


		$(htmlStr).appendTo("body");
		
		$("#homeVideoImage").click(function(){
			
			
			//$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/r7uAkyEbpzI\"></iframe>").appendTo($(this).parent());
			$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src="+video_url1+"></iframe>").appendTo($(this).parent());
					   $(this).fadeOut('fast');
					 });

		$("#video_close_popup_home").click(function(){
		$("#homeVideoImage").fadeIn("fast");
		$("#player").remove();
		$(".homepagevideo").fadeOut('fast');
		$("#backgroundPopup").fadeOut('fast');
		});
		}
	}*/
	/*if($(".banner a img").length>0)
	{
		$(".banner a").attr("href","#").click(function(){
			$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
			$(".homepagevideo").fadeIn('fast');
		});
		
	} */


///line 973

$(document).keydown(function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	    if (code === 27) {
	    	if($('.fb_sale_popup').css('display')=='block')
			{
				$('.fb_sale_popup').fadeOut('fast');
				$('#backgroundPopup').fadeOut('slow');
			}
	    	$(".kgpopup_act:visible").each(function(){
	    		if($(this).find(".custom_dropdown ul:visible").length>0)
    			{
    				$(this).find(".custom_dropdown ul:visible").hide();
    				return false;
    			}
	    		else
    			{
    			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
    				//alert("coming 2");
    				$(this).fadeOut('fast');
    				$('#backgroundPopup').fadeOut('slow');
    			}
				$(".vedio_holder").html("<video preload='none'>");
				if($(this).hasClass("homepagevideo"))
				{
					$("#homeVideoImage").fadeIn("fast");
					$("#player").remove();
				}
				
				return false;
    			}
	    		
	    		$('#fbErrorMsg').removeClass('fberror');
				$('#fbErrorMsg').hide();
	    	});
	    	$('.tipsy-inner, .tipsy-arrow').hide();
	    	
	    	//$(".kgpopup_act:visible").fadeOut('fast');
	    	//$('#backgroundPopup').fadeOut('slow');
	    	//$(".custom_dropdown ul:visible").hide();
	    	//$("ul[id|='searchText_']:visible").hide();
		}
	    if(code === 13)
	    	$('.tipsy-inner, .tipsy-arrow').hide();
		
	});
	
	/*$('.inputspan_txt').click(function() {
		console.info("hi coming");
		$('.inputspan_txt').hide();
		$('.inputbox_final').focus();
	});
	
	$('.inputspan_pwd').click(function() {
		console.info("hi coming pwd");
		$('.inputspan_pwd').hide();
		$('.inputbox_final_pwd').focus();
	});

	$('.inputbox_final').die('focus').live("focus",function()
			{
				$('.inputspan_txt').hide();
			});
	
	$('.inputbox_final_pwd').die('focus').live("focus",function()
			{
				$('.inputspan_pwd').hide();
			});
	$('.inputbox_final').die('blur').live("blur",function()
			{
				if(($('#email_login_new').val()=='')&&($('#create_email').val()=='')&&($('#email_login_sale').val()=='')&&($('#email_login_wishList').val()==''))
					{
						$('.inputspan_txt').show();
					}
				else if($('#create_email').val()=='')
					{
						$('.inputspan_txt').show();
					}
				else if($('#email_login_sale').val()=='')
					{
						$('.inputspan_txt').show();
					}
			});
	$('.inputbox_final_pwd').die('blur').live("blur",function()
			{
				if(($('#pass_new').val()=='')&&($('#create_pass').val()=='')&&($('#pass_sale').val()=='')&&($('#pass_wishList').val()==''))
					{
						$('.inputspan_pwd').show();
					}
			});*/
var addItemAndLoadWishList=false;
//var mailChimpServer="10.4.2.144:8889";
var mailChimpServer="10.staging-formcreator.appspot.com";
var mailChimpApiKey='5accd9d9265a53a18c35c649e7b5ab37-us4';
var myAccountBoolean=true;
$(document).ready(function()
{
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_f').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	
	$('#internationalShipAddr').show();
	var billCountryCodeOnLoad=$('#country_shipping').val();
	if(billCountryCodeOnLoad=="USA" || billCountryCodeOnLoad=="CA")
	{
		
		    //alert("-------->>>>>>>>>>>   Coming inside if part femi ------->>>>>>>>>>");
		    $('#div_province_for_shipping').hide();
		    $('#internationalShipAddr').hide();
			$('#div_state_for_shipping').show();
			$('#ship_state_for_holder').show();
		    $('#country_shipping').val('USA');
		    $('#div_province_for_billing').hide();
		    $('#bill_state_for_holder').show();
			$('#div_state_for_billing').show();
			getStatesForCountry("US", "bill");
			//getStatesForCountry("US", "ship");
	}
	else
	{
		    //alert("coming inside else part femi");
			$('#shippingAccountDiv').hide();
			$('#internationalShipAddr').show();
	}
	$('#showdropdown').mouseout(function()
	{
		if($('#myaccount').text()=='ACCOUNT')
		{
			$('#account').hide();
		}
		
	});

	$('#showdropdown').mouseover(function()
	{
		
		if($('#myaccount').text()=='ACCOUNT')
		{
			$('#account').show();
		}
		
		if($('#myaccount').text()=='SIGN IN')
		{
			$('#account').hide();
		}
		
	});

	$('.signin_forgot_pwd_act').click(function()
	{
		/*////alert("coming inside the forgot password");*/
		$('.signin_form').hide();
		$('.signin_sale').hide();
		$('.wish_list_form').hide();
		$('.forgot_password_form').show();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});

	$('.signin_forgot_pwd_act_sale').click(function()
	{
		/*//alert("coming inside the forgot password");*/
		$('.signin_sale').hide();
		$('.forgot_password_form_sale').show();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});

	//document.oncontextmenu=function(){return false;}
	
	function isMobileDevice()
	{
		return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
	}
	
	if(!isMobileDevice()){
		$(".order_history_table td.col1 span").css("top","7px");
	}
	else{
		$(".order_history_table td.col1 span").css("top","0px");
	}
	
	var country_code_bill = $('#country_billing').attr('titlevalue');
	if(country_code_bill=="US" || country_code_bill=="CA")
	{
		getStatesForCountry(country_code_bill, "bill");
		$("#div_state_for_billing").show();
		$('#bill_state_for_holder').show();
		$("#div_province_for_billing").hide();
		$('#province_billing').val('');

	}
	else
	{
		
		$('State_billing').attr('titlevalue','');
		$("#div_state_for_billing").hide();
		$("#div_province_for_billing").show();
		$('#bill_state_for_holder').hide();
	}
	
	
	var country_code_shipp = $('#country_shipping').val();
	if(country_code_shipp=="USA" || country_code_shipp=="CA")
	{
		getStatesForCountry(country_code_shipp, "ship");
		$("#div_state_for_shipping").show();
		$('#ship_state_for_holder').show();
		$("#div_province_for_shipping").hide();
		$('#province_shipping').val('');
		getStatesForCountry("US", "bill");
	}
	else
	{
		$('State_shipping').attr('titlevalue','');
		$("#div_state_for_shipping").hide();
		$("#div_province_for_shipping").show();
		$('#ship_state_for_holder').hide();
	}
	
	
	
	//console.log(" myaccount page is loading ");
	$('#invalid_label').hide();
	$('#invalid_label_wishList').hide();
	
	$("#continueShoppingForThankyou").click(function()
	{	
		location.href='/';
	});
	$('#updateAccountSettings').click(function()
	{
		//console.log("Test v1");
		
		updateaccountinfoservice();
		
	});

	/*$('.col5').click(function ()
	{
		$("html, body").animate({ scrollTop: 0 }, "slow");
		returnOrderpop_act();
		
	});*/
	
	$("#country").change(function(){
		
		if($(this).attr("titlevalue")=="US" ||$(this).attr("titlevalue")=="CA")
			{
				$("#div_state").show();
				$("#div_province").hide();
				$('#province').val('');
			}
		else
			{
				$('#hidden_state').val('');
				$("#div_state").hide();
				$("#div_province").show();				
			}		
	});
	
	$('#showPass').change(function(){
			var type=$('#password').attr('type');
			if(type=='password')
				type='text';
			else
				type='password';
			document.getElementById('password').setAttribute('type', type);
	})
	$('#showResetPass').change(function(){
			var type=$('#passwordfrommail').attr('type');
			if(type=='password')
				type='text';
			else
				type='password';
			document.getElementById('passwordfrommail').setAttribute('type', type);
	});

	$("#state_text").change(function(){
		var statecode=''+$(this).attr('titlevalue');
		////alert("Statecode"+statecode);
		$('#hidden_state').val(statecode);
		
	});
	
	$('#country_billing').change(function(){
	
		
		
		var country_code = $(this).attr('titlevalue');
		//console.log(" inside country billing "+$(this).attr('titlevalue'));
		
		if(country_code=="US" || country_code=="CA")
		{
			getStatesForCountry(country_code, "bill");
			$('#State_billing').val('PLEASE SELECT STATE');
			$('#State_shipping').val('PLEASE SELECT STATE');
			$('#State_billing').attr('titlevalue','');
			$('#State_shipping').attr('titlevalue','');
			$("#div_state_for_billing").show();
			$('#bill_state_for_holder').show();
			$("#div_province_for_billing").hide();
			$('#province_billing').val('');
		}
		else
		{
		
			$('State_billing').attr('titlevalue','');
			$("#div_state_for_billing").hide();
			$("#div_province_for_billing").show();
			$('#bill_state_for_holder').hide();
		}
		
	});
	
//	$('#country_shipping').change(function(){
//	
//		var country_code = $(this).val();
//		if(country_code=="USA" || country_code=="CA")
//		{
//			getStatesForCountry(country_code, "ship");
//			$("#div_state_for_shipping").show();
//			$('#ship_state_for_holder').show();
//			$("#div_province_for_shipping").hide();
//			$('#province_shipping').val('');
//			getStatesForCountry("US", "bill");
//		}
//		else
//		{
//			$('State_shipping').attr('titlevalue','');
//			$("#div_state_for_shipping").hide();
//			$("#div_province_for_shipping").show();
//			$('#ship_state_for_holder').hide();
//		}
//		
//		
//	});

	
	$('#State_billing').change(function(){
		
		////alert("sdfsdf");
		$('State_billing').attr('titlevalue','11');
		$('State_billing').attr('value','1111');
		
	});
	
	
	
	$('#resetpassword').click(function(){

		var email=$('#email_forgot').val();
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
		{
			$("#email_forgot").addClass("error_input_field");
			$("#email_forgot").attr('placeholder','Please enter your Mail Id to send your password');
			return false;
		}
		else if(email != '')
		{
			if(!email.match(emailRegex))
			{
				$("#email_forgot").addClass("error_input_field");
				$("#rqFld_login_email_forgotpwd").html("Enter valid emailId").show();
				//$("#email_forgot").attr('placeholder','Enter valid emailId');
				/*$('#email_forgot').val('');
				$('#email_forgot').focus();*/
				return false;
			}
			else
			{
				$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					//console.log("Result :: "+data);
					if(data=='true')
					{
						$("#email_forgot").removeClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").hide();
						$.ajax({url:'/resetPassword.htm',data:({"email":email}),cache:false,success:function(data){
							$(".forgot_password_form").hide();
							$('#backgroundPopup').hide();
						}});
					}
					else
					{
						$("#email_forgot").addClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
						//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
						/*$('#email_forgot').val('');
						$('#email_forgot').focus();*/
						return false;
					}
				}});
			}
		}
	});
	
	
	$('#resetpasswordsale').click(function(){

		var email=$('#email_forgot_sale').val();
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
		{
			$("#email_forgot_sale").addClass("error_input_field");
			$("#email_forgot_sale").attr('placeholder','Please enter your Mail Id to send your password');
			return false;
		}
		else if(email != '')
		{
			if(!email.match(emailRegex))
			{
				$("#email_forgot_sale").addClass("error_input_field");
				$("#rqFld_login_email_forgotpwd").html("Enter valid emailId").show();
				//$("#email_forgot").attr('placeholder','Enter valid emailId');
				/*$('#email_forgot').val('');
				$('#email_forgot').focus();*/
				return false;
			}
			else
			{
				$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					//console.log("Result :: "+data);
					if(data=='true')
					{
						$("#email_forgot_sale").removeClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").hide();
						$.ajax({url:'/resetPassword.htm',data:({"email":email}),cache:false,success:function(data){
							$(".forgot_password_form_sale").hide();
							$('#backgroundPopup').hide();
							//$('.black_fridaypopup_two').fadeIn();
						}});
					}
					else
					{
						$("#email_forgot_sale").addClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
						//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
						/*$('#email_forgot').val('');
						$('#email_forgot').focus();*/
						return false;
					}
				}});
			}
		}
	});
	
	$('#registerToChangePassword').click(function(){
		var email=$('#email').val();
		var pass=$.trim($('#passwordfrommail').val());
		var accsessString=parseInt($('#accsessString').val());
		//console.log("------------->>>>>>>>>>>> accsessString is   ------------>>>>>>>>>>>>>> " + accsessString);
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
			{
				$("#email").addClass("error_input_field");
				$("#email").attr('placeholder','Once again Try the link From Mail');
				return false;
			}
		else if(email != '')
			{
				if(!email.match(emailRegex))
				{
					//console.log("------------->>>>>>>>>>>> Email is InValid  ------------>>>>>>>>>>>>>>");
					$("#email").addClass("error_input_field");
					$("#rqFld_login_email_resetpwd").html("Give valid emailId").show();
					//$("#email_forgot").attr('placeholder','Enter valid emailId');
					/*$('#email_forgot').val('');
					$('#email_forgot').focus();*/
					return false;
				}
				else
					{
						
						$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
							{
								//console.log("Result :: "+data);
								if(data=='true')
									{
										//console.log("------------->>>>>>>>>>>> EmailAlreadyExists  ------------>>>>>>>>>>>>>>");
										$("#email").removeClass("error_input_field");
										$("#rqFld_login_email_resetpwd").hide();
										if(pass=="")
											{
												//console.log("------------->>>>>>>>>>>> Password is Empty  ------------>>>>>>>>>>>>>>");
												$("#passwordfrommail").addClass("error_input_field");
												$("#passwordfrommail").html("Enter Any Password").show();
											}
										else
										{
											$.ajax({url:'/getValidResetPasswordAccsessString.htm',cache:false,data:({"email":email}),success:function(data)
												{
													if(data==accsessString)
														{
															//console.log("------------->>>>>>>>>>>> accsessString is Valid  ------------>>>>>>>>>>>>>>");
																
															$.ajax({type:'POST',url:'/changePassword.htm',data:({"emailid":email,"password":pass}),cache:false,success:function(data)
																{
																	//console.log("------------->>>>>>>>>>>> Password is Changed  ------------>>>>>>>>>>>>>>");
																	
																	$(".reset_password_form").hide();
																	$('#backgroundPopup').hide();
																	window.location='/';
																}});
														}
													else
														{
														//console.log("------------->>>>>>>>>>>> accsessString is InValid  ------------>>>>>>>>>>>>>>");
														$('#passwordfrommail').val("");
														}
												}});
										}
									}
								else
									{
										//console.log("------------->>>>>>>>>>>> Email is Not Exists  ------------>>>>>>>>>>>>>>");
										$("#email").addClass("error_input_field");
										$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
										//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
										/*$('#email_forgot').val('');
										$('#email_forgot').focus();*/
										return false;
									}
							}});
					
						
					}
			}
	
		
	});
	
	/*if($(".account_info_col").length>0)
		{
			listSubScriptions();
		}*/
	$(".custom_dropdown").kgcustomdropdown();

	$('#login_signIn').click(function()
	{	
		loginValidate();
		
	});
	
	$('#login_instagram').click(function(){
		console.log("inside the click function");
		
		window.location.href="/instagram.htm";
		
		});
	
	$('#signin_act').click(function()
	{
		$('#signIn_form').show();
		$('.create_account').hide();
		
	});
	
	$('#signIn_wishlist').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('#wishlist_login_create').fadeOut();
				$('.wish_list_form').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_ac_signin_act_sale').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('.create_account_sale').fadeOut();
				$('.wish_list_form').fadeOut();
				$('.signin_sale').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_ac_signin_act_sale').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('.create_account_sale').fadeOut();
				$('.signin_sale').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('create_pass').setAttribute('type','password');
				document.getElementById('cr_pwd1').style.fontWeight = 'normal';
				document.getElementById('cr_pwd').style.fontWeight = 'bolder';
			});
	$('.create_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('create_pass').setAttribute('type','text');
				document.getElementById('cr_pwd').style.fontWeight = 'normal';
				document.getElementById('cr_pwd1').style.fontWeight = 'bolder';
			});
	$('.create_pwd_sale').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('create_pass_sale').setAttribute('type','password');
				document.getElementById('cr_pwd1_sale').style.fontWeight = 'normal';
				document.getElementById('cr_pwd_sale').style.fontWeight = 'bolder';
			});
	$('.create_pwd1_sale').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('create_pass_sale').setAttribute('type','text');
				document.getElementById('cr_pwd_sale').style.fontWeight = 'normal';
				document.getElementById('cr_pwd1_sale').style.fontWeight = 'bolder';
			});
	$('.pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_new').setAttribute('type','password');
				document.getElementById('signin_pwd1').style.fontWeight = 'normal';
				document.getElementById('signin_pwd').style.fontWeight = 'bolder';
			});
	$('.pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_new').setAttribute('type','text');
				document.getElementById('signin_pwd').style.fontWeight = 'normal';
				document.getElementById('signin_pwd1').style.fontWeight = 'bolder';
			});
	$('.signin_sale_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_sale').setAttribute('type','password');
				document.getElementById('sale_pwd1').style.fontWeight = 'normal';
				document.getElementById('sale_pwd').style.fontWeight = 'bolder';
			});
	$('.signin_sale_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_sale').setAttribute('type','text');
				document.getElementById('sale_pwd').style.fontWeight = 'normal';
				document.getElementById('sale_pwd1').style.fontWeight = 'bolder';
			});
	$('.wishlist_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_wishList').setAttribute('type','password');
				document.getElementById('wl_pwd1').style.fontWeight = 'normal';
				document.getElementById('wl_pwd').style.fontWeight = 'bolder';
			});
	$('.wishlist_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_wishList').setAttribute('type','text');
				document.getElementById('wl_pwd').style.fontWeight = 'normal';
				document.getElementById('wl_pwd1').style.fontWeight = 'bolder';
			});
	$('.signin_sale_act').click(function()
			{
				loginValidateSale();
			});
	$('.ac_create_act_sale').click(function(){
		validateSignUpSale();
	})
	
	
	
	$('#signUp_wishlist').click(function(){
		validateSignUpwishlist();
	})
	
	$("#create_pass_wishlist").keyup(function(event){
		if(event.keyCode==13)
		{
			validateSignUpwishlist();
		}
	});
	
	
	$("#email_login_new").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidate();
		}
	});
	
	$("#pass_new").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidate();
		}
	});
	
	$("#email_login_sale").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateSale();
		}
	});
	
	$("#pass_sale").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateSale();
		}
	});
	
	$('#popup_wishlist').click(function()
	{
		//console.log(" inside log in pop function ");
		loginValidateWishList()
		
	});
			
	$("#email_login_wishList").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateWishList()
		}
	});
	
	
	$("#pass_wishList").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateWishList()
		}
	});

	$('.popup_close_act').click(function(){
		$(".loading_page").fadeOut();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});
	
	//FAE Added for JIRA 127
	$('#country_billing').change(toggleCountryTask);
	
	function toggleCountryTask()
	{
			var billCountryCode=$('#country_billing').val();
			//alert('Value is:'+billCountryCode);
			if(billCountryCode=="USA" || billCountryCode=="CA")
			{
				    //alert("Coming inside if part femi");
				    $('#country_shipping').val('USA');
				    $("#div_state_for_shipping").show();
				    $('#ship_state_for_holder').show();
					$("#div_province_for_shipping").hide();
				    $('#shippingAccountDiv').show();
				    $('#internationalShipAddr').hide();
					getStatesForCountry("US", "bill");
			}
			else
			{
				    //alert("coming inside else part femi");
					$('#shippingAccountDiv').hide();
					$('#internationalShipAddr').show();
			}
	$('#billCountryCode').val(billCountryCode);
	$('#shipCountryCode').val(billCountryCode);
			
	}
	
	$(".black_faq_wrapper h2").click(function(){
		$(this).find('p').toggle();
		if($(this).find('p').is(':visible'))
		{
			$(this).addClass('active');
		}
		else
		{
			$(this).removeClass('active');
		}
	});
});



//shp
function getStatesForCountry(country_code, address)
{
	var countryCode = country_code;
	
	$.ajax({
		
		url:'/getStatesForCountry.htm',
		data:{'countryCode':countryCode},
		dataType:'json',
		success:function(states)
		{
			////alert("states length = " + states.length);
			populateStateDetailsForAddress(country_code, states, address);
		}
		
	});

}

//shp
function populateStateDetailsForAddress(country_code, states, address)
{
	
	var htmlStr="<li title='00'>Please Select</li>";
	if(states!=null && states.length>0)
		{
			for(i=0;i<states.length;i++)
				{
					htmlStr+="<li title='"+states[i].stateCode+"'>"+states[i].stateName+"</li>";
				}
		}
	//console.log("Getting States:"+htmlStr);
	if(address=="bill"){
		$("#bill_state").html(htmlStr);
		$("#bill_state_for_holder").show();
		$("#div_state_for_billing").show();
		$("#ship_state").html(htmlStr);
		$("#ship_state_for_holder").show();
	}
	else if(address=="ship"){
		$("#ship_state").html(htmlStr);
		$("#ship_state_for_holder").show();
	}
	$(".custom_dropdown").kgcustomdropdown();
	return;
}


function loginValidateWishList()
{
	//console.log(" inside loginValidateWishList function ");
	var email=$.trim($('#email_login_wishList').val());
	if(email=='' || email=='Email')
	{
		$('#email_login_wishList').addClass('error_input_field');
		$('#rqFld_login_email_wishList').html('Enter a email id!').show();
		/*$('#email_login_wishList').attr('placeholder','Please Fill In Your Email ID');*/
		return false;
	}
	else
	{
		$('#email_login_wishList').removeClass('error_input_field');
		$('#rqFld_login_email_wishList').hide();
		//console.log("email is not null ");
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		$('.inputspan_txt').hide();
		$('#rqFld_login_email_wishList').html('The Email Id You Entered Is Not Valid!').show();
		$('#email_login_wishList').addClass('error_input_field');
		return false;
	}
	else
	{
		$('#rqFld_login_email_wishList').hide();
		$('#email_login_wishList').removeClass('error_input_field');
	}
	var pass=$.trim($('#pass_wishList').val());
	if(pass=='' || pass=='Password')
	{
		$('#pass_wishList').addClass('error_input_field');
		$('#rqFld_login_email_wishList').html('Please enter passoword!').show();
		/*$('#pass_wishList').attr('placeholder','Please Fill In Your Password');*/
		return false;
	}
	else
	{
		$('#pass_wishList').removeClass('error_input_field');
		$('#rqFld_login_email_wishList').hide();
		//console.log("email is not pass ");
	}
	//$("#popup_wishlist").addClass("popup_processing_btn");
	$.post('/login.htm',{"username":email,"password":pass},function(data){
		if(data.login=='success')
			{
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_wishList').val('');
			   $('#pass_wishList').val('');
			   $('.notify').show();
			   $('#isLoggedInNotify').val('true');
			   $('.wish_list_form').hide();
			   $('#backgroundPopup').fadeOut();
			   
				var myaccount='<ul>'+
         		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
         		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
         		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
         		 			'</ul>';
				$('#account').html(myaccount);
				
				if(addItemAndLoadWishList == true)
				{
					doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
				}
				
				$('.rating_form_holder').fadeIn();
				
			}
		else
			{
				$('#rqFld_login_email_wishList').html('Invalid username / password !').show();
				$("#rqFld_login_email_wishList").fadeOut(6000);
				$("#popup_wishlist").removeClass("popup_processing_btn");
				$('.rating_form_holder').hide();
				$('#isLoggedInNotify').val('');
				 $('.notify').hide();
			}
		
	},"json");
	return false;
	
}
/*function getWishList(customerid)
{
	$.ajax({url:'/getWishList.htm',cache: false,data:({"custId":customerid}),success:function(data)
		{
		console.log(data);
		//$('#wish_list_popup_content').html(data);
		setTimeout(function()
		{
			
			if(data==null&&data=='')
			{
			
				if($('#ul_wishlist li').size()<1)
					{
						populateEmptyWishListHTML();
					}
			}
		},2000);
	}});
}*/

function validateSignUp()
{
	//console.log("coming inside validate signup");
	$('#rqFld_regis_email').css('color','red');
	$("#rqFld_login_email").hide();
    //console.log('*********  Inside validateSignUp()  **********');
	var email =$('#create_email').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email').val()=='' || $('#create_email').val()=='Email')
	{
		$('#create_email').addClass('error_input_field');
		$("#rqFld_login_email_create").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email').val()!='' && $('#create_email').val()!='Email')
	{
		$('#rqFld_login_email_create').hide();
		$("#create_email").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			$('.inputspan_txt').hide();
			$("#create_email").addClass("error_input_field");
		 	$("#rqFld_login_email_create").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('#rqFld_login_email_create').hide();
			$("#create_email").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email").addClass("error_input_field");
							$("#rqFld_login_email_create").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email").removeClass("error_input_field");	
							$("#rqFld_login_email_create").hide();
							$('#rqFld_login_email_create').css('color','green');
							$('#rqFld_login_email_create').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass").addClass("error_input_field");
				$("#rqFld_login_email_create").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass").removeClass("error_input_field");
				$("#rqFld_login_email_create").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email').val('');
						       $('#create_pass').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('.showlogin').css("display","none");
						       $('#backgroundPopup').fadeOut();
						       $('.create_account').fadeOut();
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
							
							if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
							{
								location.reload();
							}
							
						}
						else{
							$("#rqFld_login_email_create").html('Invalid username / password').show();
							$("#rqFld_login_email_create").fadeOut(6000);
							$('#create_pass').val('');
							$('#create_pass').focus();
							$("#create_pass").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}


function validateSignUpSale()
{
	/*$("#rqFld_login_email").hide();*/
    //console.log('*********  Inside validateSignUp()  **********');
	$('rqFld_login_email_create_sale').hide();
	var email =$('#create_email_sale').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email_sale').val()=='' || $('#create_email_sale').val()=='Email')
	{
		$('#create_email_sale').addClass('error_input_field');
		$("#rqFld_login_email_create_sale").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_sale').val()!='' && $('#create_email_sale').val()!='Email')
	{
		$('rqFld_login_email_create_sale').hide();
		$("#create_email_sale").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email_sale').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			/*$('.inputspan_txt').hide();*/
			$("#create_email_sale").addClass("error_input_field");
		 	$("rqFld_login_email_create_sale").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('rqFld_login_email_create_sale').hide();
			$("#create_email_sale").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email_sale").addClass("error_input_field");
							$("rqFld_login_email_create_sale").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email_sale").removeClass("error_input_field");	
							$("rqFld_login_email_create_sale").hide();
							$('rqFld_login_email_create_sale').css('color','green');
							$('rqFld_login_email_create_sale').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass_sale').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass_sale").addClass("error_input_field");
				$("rqFld_login_email_create_sale").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass_sale").removeClass("error_input_field");
				$("rqFld_login_email_create_sale").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email_sale').val('');
						       $('#create_pass_sale').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('.showlogin').css("display","none");
						       $('.create_account_sale').fadeOut();
						       $('.black_fridaypopup_two').fadeIn();
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a onclick="showWishList();" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
//							if((window.location.pathname=='/sale-shoes/') || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname=='/sale-mens-shoes/'))
//							{
//								location.reload();
//							}
							
						}
						else{
							$("rqFld_login_email_create_sale").html('Invalid username / password').show();
							$("rqFld_login_email_create_sale").fadeOut(6000);
							$('#create_pass_sale').val('');
							$('#create_pass_sale').focus();
							$("#create_pass_sale").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}

function validateSignUpwishlist()
{
	/*$("#rqFld_login_email").hide();*/
    //console.log('*********  Inside validateSignUp()  **********');
	$('#rqFld_login_email_create_wishlist').hide();
	var email =$('#create_email_wishlist').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email_wishlist').val()=='' || $('#create_email_wishlist').val()=='Email')
	{
		$('#create_email_wishlist').addClass('error_input_field');
		$("#rqFld_login_email_create_wishlist").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_wishlist').val()!='' && $('#create_email_wishlist').val()!='Email')
	{
		$('rqFld_login_email_create_wishlist').hide();
		$("#create_email_wishlist").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email_wishlist').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			/*$('.inputspan_txt').hide();*/
			$("#create_email_wishlist").addClass("error_input_field");
		 	$("rqFld_login_email_create_wishlist").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('rqFld_login_email_create_wishlist').hide();
			$("#create_email_wishlist").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email_wishlist").addClass("error_input_field");
							$("rqFld_login_email_create_wishlist").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email_wishlist").removeClass("error_input_field");	
							$("rqFld_login_email_create_wishlist").hide();
							$('rqFld_login_email_create_wishlist').css('color','green');
							$('rqFld_login_email_create_wishlist').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass_wishlist').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass_wishlist").addClass("error_input_field");
				$("rqFld_login_email_create_wishlist").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass_wishlist").removeClass("error_input_field");
				$("rqFld_login_email_create_wishlist").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email_wishlist').val('');
						       $('#create_pass_wishlist').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('#wishlist_login_create').css("display","none");
						       $('#backgroundPopup').fadeOut();
						    
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
							
							
							if(addItemAndLoadWishList == true)
							{
								doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
							}
							
							
						}
						else{
							$("rqFld_login_email_create_wishlist").html('Invalid username / password').show();
							$("rqFld_login_email_create_wishlist").fadeOut(6000);
							$('#create_pass_wishlist').val('');
							$('#create_pass_wishlist').focus();
							$("#create_pass_wishlist").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}


function loginValidate()
{
	//console.log("coming inside login validate");
	$("#invalid_label").hide();
	$("#fbErrorMsg").text("");
	var email=$.trim($('#email_login_new').val());
	//console.log("the value of the email:: " +email);
	if(email=='' || email=='Email')
	{
		//console.log("coming inside the condition");
		$("#email_login_new").addClass("error_input_field");
		$("#rqFld_login_email_new").html('Enter a email id!').show();
		/*$("#email_login_new").attr('placeholder','Please Enter Your Email !');*/
		return false;
	}
	else
	{
		$("#email_login_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		//console.log("coming inside 2 condition");
		/* $("#email_login").val("");
		 $("#email_login").text("");*/
		$('.inputspan_txt').hide();
		$("#email_login_new").addClass("error_input_field");
	 	$("#rqFld_login_email_new").html('Enter a valid email id!').show();
		return false;
	}
	else
	{
		$("#email_login_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
	}
	var pass=$.trim($('#pass_new').val());
	//console.log("the value of the password is :: "+pass);
	if(pass=='' || pass=='Password')
	{
		$("#pass_new").addClass("error_input_field");
		$("#rqFld_login_email_new").html('Please enter password!').show();
		/*$("#pass_new").attr('placeholder','Please Enter Your Password !');*/
		return false;
	}
	else
	{
		$("#pass_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
		//$('#rqFld_login_password').hide();
			}
	$("#login_popup").addClass("popup_processing_btn");
	$.ajax({type:'POST',url:'/login.htm',data:({"username":email,"password":pass}),success:function(data){
		//console.log('going to post');
		
		if(data.login=='success')
			{
				//console.log(" sucess ");
			   $('#isLoggedInNotify').val('true');
			   $('.notify').show();
			 //  console.log(" after setting "+ $('#isLoggedInNotify').val());
			   
			   $("#login_popup").removeClass("popup_processing_btn");
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_new').val('');
			   $('#pass_new').val('');
			  
			   
			   
			if($('#reviewfrom').val()=='mail')
				{
				window.location.reload(true);
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","block");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				}
			else
				{
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","none");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				
				
				
				var myaccount='<ul>'+
		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
		 			'</ul>';
				$('#account').html(myaccount);
				
				$(".help_typhoon").removeClass("for_typhoon");
				
				
				if((window.location.pathname=='/returns') || (window.location.pathname=='/orderstatus') || (window.location.pathname=='/customerservice') || (window.location.pathname=='/accountinfo'))
				{
					window.location.href="/MyAccount.htm";
				}
				//loadMyAccount(data.customerid);
				}
				
				//if((window.location.pathname!='/new-arrivals/') && (window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true' && (window.location.pathname=='/'))
			    if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
				{
					location.reload();
				}
			}
		else
			{
			$("#rqFld_login_email_new").html('Invalid username / password').show();
			$("#rqFld_login_email_new").fadeOut(6000);
			//$('#rqFld_login_email').html('invalid username / password');
			//$('#rqFld_login_password').html('invalid username / password');
			$('#pass_new').val('');
			$('#pass_new').focus();
			$("#pass_new").addClass("error_input_field");
				////console.log('invalid username');
			$("#login_popup").removeClass("popup_processing_btn");
			 $('#isLoggedInNotify').val('');
			 $('.notify').hide();
			}
		
		
		//var result=data['login'];
		////console.log("login result"+data.login);
		
	}});
	return false;
	
}

function loginValidateSale()
{
	//console.log("coming inside login validate Sale");
	$("#invalid_label").hide();
	var email=$.trim($('#email_login_sale').val());
	//console.log("the value of the email:: " +email);
	if(email=='' || email=='Email')
	{
		//console.log("coming inside the condition");
		$("#email_login_sale").addClass("error_input_field");
		$("#rqFld_login_email_sale").html('Enter a email id!').show();
		/*$("#email_login_sale").attr('placeholder','Please Enter Your Email !');*/
		return false;
	}
	else
	{
		$("#email_login_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		//console.log("coming inside 2 condition");
		/* $("#email_login").val("");
		 $("#email_login").text("");*/
		 $('.inputspan_txt').hide();
		 $("#email_login_sale").addClass("error_input_field");
		 $("#rqFld_login_email_sale").html('The Email Id You Entered Is Not Valid!').show();
		return false;
	}
	else
	{
		$("#email_login_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
	}
	var pass=$.trim($('#pass_sale').val());
	//console.log("the value of the password is :: "+pass);
	if(pass=='' || pass=='Password')
	{
		$("#pass_sale").addClass("error_input_field");
		$("#rqFld_login_email_sale").html('Please enter password!').show();
		/*$("#pass_sale").attr('placeholder','Please Enter Your Password !');*/
		return false;
	}
	else
	{
		$("#pass_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
		//$('#rqFld_login_password').hide();
			}
	$("#login_popup").addClass("popup_processing_btn");
	$.ajax({type:'POST',url:'/login.htm',data:({"username":email,"password":pass}),success:function(data){
		//console.log('going to post');
		
		if(data.login=='success')
			{
				//console.log("coming to 1 if condition");
			   $("#login_popup").removeClass("popup_processing_btn");
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_sale').val('');
			   $('#pass_sale').val('');
			   $('#isLoggedInNotify').val('true');
			   $('.notify').show();

			if($('#reviewfrom').val()=='mail')
				{
				window.location.reload(true);
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","block");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				}
			else
				{
				//console.log("coming to else of the condition");
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","none");
				$(".loading_page").show();
				$('.signin_sale').fadeOut();
				$('.black_fridaypopup_two').fadeIn();
				$('.loading_page').hide();
				
				var myaccount='<ul>'+
		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
		 			'</ul>';
				$('#account').html(myaccount);
				
				//loadMyAccount(data.customerid);
				}
			
			}
		else
			{
			$("#rqFld_login_email_sale").html('Invalid username / password').show();
			$("#rqFld_login_email_sale").fadeOut(6000);
			//$('#rqFld_login_email').html('invalid username / password');
			//$('#rqFld_login_password').html('invalid username / password');
			$('#pass_sale').val('');
			$('#pass_sale').focus();
			$("#pass_sale").addClass("error_input_field");
				////console.log('invalid username');
			$("#login_popup").removeClass("popup_processing_btn");
			 $('.notify').hide();
			 $('#isLoggedInNotify').val('');
			}
		
		//var result=data['login'];
		////console.log("login result"+data.login);
		
	}});
	return false;
	
}

function loadMyAccount(customerid)
{
	$('#customerid').val(customerid);
	window.location="/MyAccount.htm";

}

function updateaccountinfoservice()
{
	//console.log(" inside updateaccountinfoservice password!1");
	var mailid		 = $('#mailid_user').val();
	var phonenumber  = $('#phonenumber').val();
	var newpass		 = $.trim($('#new_password').val());
	var reenterpass	 = $.trim($('#re_enter_password').val());
	
	var bid			 = $('#idBA').val();
	var bfirstName	 = $('#first_name_billing').val();
	var blastName	 = $('#last_name_billing').val();
	var baddress1	 = $('#address1_billing').val();
	var baddress2	 = $('#address2_billing').val();
	var bcity		 = $('#city_billing').val();
	var bstate		 = $('#State_billing').attr('titlevalue');
	var bstateName	 = $('#State_billing').val();
	var bprovince	 = $('#province_billing').val();
	var bzipcode	 = $('#zipcode_billing').val();
	var bcountry	 = $('#country_billing').attr('titlevalue');
	var bcountryName = $('#country_billing').val();
	
	var sid			 = $('#idSA').val();
	var sfirstName   = $('#first_name_shipping').val();
	var slastName    = $('#last_name_shipping').val();
	var saddress1    = $('#address1_shipping').val();
	var saddress2    = $('#address2_shipping').val();
	var scity        = $('#city_shipping').val();
	var sstate       = $('#State_shipping').attr('titlevalue');
	var sstateName   = $('#State_shipping').val();
	var sprovince    = $('#province_shipping').val();
	var szipcode     = $('#zipcode_shipping').val();
	var scountry     = $('#country_shipping').attr('titlevalue');
	var scountryName = $('#country_shipping').val();
	myAccountBoolean = true; 
	
	if(newpass!=reenterpass)
		{
			//console.info(" new pass and reenterpass not equal ")
			$('#rqFld_edit_acc_reenter_password').html('Passwords not matching!');
			$('#rqFld_edit_acc_reenter_password').show();
			$('#rqFld_edit_acc_reenter_password').fadeOut(3000);
			$('#re_enter_password').focus();			
			myAccountBoolean=false;
		}
	else
		{
			$('#rqFld_edit_acc_reenter_password').hide();
		}
	
	if(phonenumber=='')
	{
		//console.info(" bfirstName=='' ")
		$('#phonenumber').addClass('error_input_field');
		$('#phonenumber').attr('placeholder','This field is required!');
		$('#phonenumber').show();
		$('#phonenumber').focus();
		myAccountBoolean=false; 
		//return;
	}
	else
	{
		$('#phonenumber').removeClass('error_input_field');
	}
	
	//console.log(" international ship addr "+$('#internationalShipAddr').attr('style'));
	
	
	if($('#internationalShipAddr').attr('style')=='display: block;')
	{
	//	console.log(" inside  international ship addr ");
		sfirstName            = bfirstName;
		slastName			  = blastName;
		saddress1             = baddress1;
		saddress2             = baddress2
		scity	              = bcity;
		scountry              = bcountry;
		scountryName          = bcountryName;
		sstate                = bstate;
		sstateName            = bstateName;
		sprovince             = bprovince;
		szipcode              = bzipcode;
	}

	if(validateAccountDetails())
	{
		var billinginfojson	  = {id:bid,firstName:bfirstName,lastName:blastName,street1:baddress1,street2:baddress2,street3:bcity,state:bstate,stateName:bstateName,province:bprovince,country:bcountry,countryName:bcountryName,zipCode:bzipcode};
		var shippinginfo	  = {id:sid,firstName:sfirstName,lastName:slastName,street1:saddress1,street2:saddress2,street3:scity,state:sstate,stateName:sstateName,province:sprovince,country:scountry,countryName:scountryName,zipCode:szipcode};
		var accountInfo		  ={mailId : mailid , password : newpass,phoneNumber:phonenumber,billingInfo:billinginfojson,shippingInfo:shippinginfo};
		$("#updateAccountSettings").addClass("popup_processing_btn");
		$.ajax({url:"/savemyaccountdetails.htm",type:'POST',data:JSON.stringify(accountInfo),success:function(data)
		{
			if(data=='success')
			{
				$('.save_success_msg').show();
				$('.save_success_msg').fadeOut(3000);
				$("#updateAccountSettings").removeClass("popup_processing_btn");
			}
		},contentType:'application/json',dataType:"text"});

	}
	
}
function validateAccountDetails()
{
	var myAccountBoolean=true;
	if($('#first_name_billing').val()=='')
	{
		$('#first_name_billing').addClass('error_input_field');
		$('#first_name_billing').attr('placeholder','This field is required!');
		$('#first_name_billing').show();
		$('#first_name_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#first_name_billing').removeClass('error_input_field');
	}
	
	if($('#last_name_billing').val()=='')
	{
		$('#last_name_billing').addClass('error_input_field');
		$('#last_name_billing').attr('placeholder','This field is required!');
		$('#last_name_billing').show();
		$('#last_name_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#last_name_billing').removeClass('error_input_field');
	}
	
	if($('#address1_billing').val()=='')
	{
		$('#address1_billing').addClass('error_input_field');
		$('#address1_billing').attr('placeholder','This field is required!');
		$('#address1_billing').show();
		$('#address1_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#address1_billing').removeClass("error_input_field");
	}
	
	if($('#country_billing').val()=='')
	{
		$('#country_billing').addClass('error_input_field');
		$('#country_billing').attr('placeholder','This field is required!');
		$('#country_billing').show();
		$('#country_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#country_billing').removeClass("error_input_field");
		if($('#country_billing').val()=='USA' || $('#country_billing').attr('titlevalue')=='CA')
			{
				if($('#State_billing').attr('titlevalue')=='')
				{
					$('#State_billing').addClass('error_input_field');
					$('#State_billing').attr('placeholder','This field is required!');
					$('#State_billing').show();
					$('#State_billing').focus();
					myAccountBoolean=false;
				}
				else
				{
					$('#State_billing').removeClass('error_input_field');
					$('#province_billing').val('');
					myAccountBoolean=true;
				}
				
			}
		else
		{
			$('#State_billing').attr('titlevalue','');
		}
		
	}
	
	if($('#city_billing').val()=='')
	{
		$('#city_billing').addClass('error_input_field');
		$('#city_billing').attr('placeholder','This field is required!');
		$('#city_billing').show();
		$('#city_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#city_billing').removeClass('error_input_field');
	}
		
	if($('#zipcode_billing').val()=='')
	{
		$('#zipcode_billing').addClass('error_input_field');
		$('#zipcode_billing').attr('placeholder','This field is required!');
		$('#zipcode_billing').show();
		$('#zipcode_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#zipcode_billing').removeClass("error_input_field");
	}
	
	if($('#internationalShipAddr').attr('style')=='display: none;')
	{

		if($('#first_name_shipping').val()=='')
		{
			$('#first_name_shipping').addClass('error_input_field');
			$('#first_name_shipping').attr('placeholder','This field is required!');
			$('#first_name_shipping').show();
			$('#first_name_shipping').focus();
			myAccountBoolean=false;
		}
		else
			{
				$('#first_name_shipping').removeClass("error_input_field");
			}
		
		if($('#last_name_shipping').val()=='')
		{
			$('#last_name_shipping').addClass('error_input_field');
			$('#last_name_shipping').attr('placeholder','This field is required!');
			$('#last_name_shipping').show();
			$('#last_name_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#last_name_shipping').removeClass("error_input_field");
		}
		
		if( $('#address1_shipping').val()=='')
		{
			$('#address1_shipping').addClass('error_input_field');
			$('#address1_shipping').attr('placeholder','This field is required!');
			$('#address1_shipping').show();
			$('#address1_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#address1_shipping').removeClass("error_input_field");
		}
		
		if($('#city_shipping').val()=='')
		{
			$('#city_shipping').addClass('error_input_field');
			$('#city_shipping').attr('placeholder','This field is required!');
			$('#city_shipping').show();
			$('#city_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#city_shipping').removeClass("error_input_field");
		}
		
		if($('#country_shipping').val()=='')
		{
			$('#country_shipping').addClass('error_input_field');
			$('#country_shipping').attr('placeholder','This field is required!');
			$('#country_shipping').show();
			$('#country_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#country_shipping').removeClass("error_input_field");
			if($('#country_shipping').val()=='US')
			{
				if($('#State_shipping').val()=='')
				{
					$('#State_shipping').addClass('error_input_field');
					$('#State_shipping').attr('placeholder','This field is required!');
					$('#State_shipping').show();
					$('#State_shipping').focus();
					myAccountBoolean=false;
				}
				else
				{
					$('#State_shipping').removeClass('error_input_field');
				}
			}
		}
		if($('#zipcode_shipping').val()=='')
		{
			$('#zipcode_shipping').addClass('error_input_field');
			$('#zipcode_shipping').attr('placeholder','This field is required!');
			$('#zipcode_shipping').show();
			$('#zipcode_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#zipcode_shipping').removeClass("error_input_field");
		}
	}
	return myAccountBoolean;
}

/*function getStateName(stateCode,addrType)
{
	var stateName='';
	if(addrType=='shipping'){
		$("#ship_stateList").each(function(index,item){
			if(item.attr('title')==stateCode){
				stateName=item.text();
				return;
			}
		});
	}
	else{

		$("#bill_stateList").each(function(index,item){
			if(item.attr('title')==stateCode){
				stateName=item.text();
				return;
			}
		});

	}
	
	return stateName;
}*/
function logout()
{
	$(".loading_page").fadeIn();
	eraseCookie('FBStartShoppingShown');
	//console.log("path "+window.location.pathname);
	if(window.location.pathname!='/MyAccount.htm' && window.location.pathname!='/wishlist/')
	{
		$.ajax({url:'/logout.htm',cache:false,success:function(data)
			{
				if(data==true)
					{
						$('#myaccount').text('SIGN IN');
						$(".help_typhoon").addClass("for_typhoon");
						$('#account').hide();
						$('#myaccount').addClass('no_background');
					    $('#myaccount').removeClass('drop_down');
					    $('#loginIn').val('');
					    $(".loading_page").fadeOut();
					    $('.notify').hide();
					    $('#isLoggedInNotify').val('');
					    if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
						{
							location.reload();
						}
					    if(location.pathname.match("index.html"))
				    	{
					    	location.reload();
				    	}
					}
				
			}});
	}
	else
	{
		window.location.href="/mylogout.htm";
	}
}

function viewInvoice(orderid)
{
	window.open("/getOrderInvoice.htm?orderId="+orderid);
}

function isEmailAreadyExists()
{
	$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();
	if($('#create_email').val()=='' || $('#create_email').val()=='Email')
	{
		$('#create_email').addClass('error_input_field');
		$("#rqFld_login_email_create").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email').val()!='' && $('#create_email').val()!='Email')
	{
		$("#create_email").removeClass("error_input_field");
		$("#rqFld_login_email_create").hide();
		var email=$('#create_email').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email").addClass("error_input_field");
			$("#rqFld_login_email_create").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email").removeClass("error_input_field");	
			$("#rqFld_login_email_create").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email").addClass("error_input_field");
						$("#rqFld_login_email_create").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email").removeClass("error_input_field");	
						$("#rqFld_login_email_create").hide();
						$('#rqFld_login_email_create').css('color','green');
						$('#rqFld_login_email_create').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}


function isEmailAreadyExistsSale()
{
	/*$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();*/
	if($('#create_email_sale').val()=='' || $('#create_email_sale').val()=='Email')
	{
		$('#create_email_sale').addClass('error_input_field');
		$("#rqFld_login_email_create_sale").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_sale').val()!='' && $('#create_email_sale').val()!='Email')
	{
		$("#create_email_sale").removeClass("error_input_field");
		$("#rqFld_login_email_create_sale").hide();
		var email=$('#create_email_sale').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email_sale").addClass("error_input_field");
			$("#rqFld_login_email_create_sale").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email_sale").removeClass("error_input_field");	
			$("#rqFld_login_email_create_sale").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email_sale").addClass("error_input_field");
						$("#rqFld_login_email_create_sale").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email_sale").removeClass("error_input_field");	
						$("#rqFld_login_email_create_sale").hide();
						$('#rqFld_login_email_create_sale').css('color','green');
						$('#rqFld_login_email_create_sale').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}

function isEmailAreadyExistswishlist()
{
	/*$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();*/
	if($('#create_email_wishlist').val()=='' || $('#create_email_wishlist').val()=='Email')
	{
		$('#create_email_wishlist').addClass('error_input_field');
		$("#rqFld_login_email_create_wishlist").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_wishlist').val()!='' && $('#create_email_wishlist').val()!='Email')
	{
		$("#create_email_wishlist").removeClass("error_input_field");
		$("#rqFld_login_email_create_wishlist").hide();
		var email=$('#create_email_wishlist').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email_wishlist").addClass("error_input_field");
			$("#rqFld_login_email_create_wishlist").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email_wishlist").removeClass("error_input_field");	
			$("#rqFld_login_email_create_wishlist").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email_wishlist").addClass("error_input_field");
						$("#rqFld_login_email_create_wishlist").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email_wishlist").removeClass("error_input_field");	
						$("#rqFld_login_email_create_wishlist").hide();
						$('#rqFld_login_email_create_wishlist').css('color','green');
						$('#rqFld_login_email_create_wishlist').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}


function returnOrderpop_act(orderId)
{
	//console.log("----------->>>>>>> IN SIDE returnOrderpop_act click function");
	
 	//position_popup (); 
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$('.loading_page').show();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$.ajax({url:'/getblobkey.htm',cache:false,data:({"orderId":orderId}),success:function(data)
	{
		$('.loading_page').hide();
		$('.return_popup').show();
		$('#returnLabel').attr('href',data);
		
	}});
		
}


function checkForMailSubscriptions()
{
	
	////alert("Its coming inside checkForMailSubscriptions");
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/getListMemberByEmailId.req',
		data: {apiKey:mailChimpApiKey,memberEmailId:$("#mailid_user").val()},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			
			//console.log(data);
					if(data!=null){
						for(i=0;i<data.length;i++){
							
							
							$(".campaignList").each(function(){
								
								if($(this).attr("value")==data[i].listId)
									{
										$(this).attr("checked","checked");
									}
							});
							
							
						
							}
					}
					
				
			
		}
		});
	
	
	
}

function listSubScriptions()
{
	////alert("Coming inside listSubScriptions ");
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/getCompaignList.req',
		data: {apiKey:mailChimpApiKey},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			if(data!=null)
				{
				var html="<h3>Subscriptions:</h3>";
				for(i=0;i<data.length;i++){
					
						html+="<div><input type=\"checkbox\" class=\"campaignList\" value=\""+data[i].ListId+"\"/><a style=\"color:#4d4d4d;margin-left:7px;font-size:12px;\">"+data[i].compaignTitle+"</a></div>";
					
				}
					$(html).appendTo($($(".account_info_col")[0]));
					
					$(".campaignList").click(function(){
						
						if($(this).attr("checked"))
							{
								subscribeTHis(true,$(this).attr("value"));
							}
						else
							{
								subscribeTHis(false,$(this).attr("value"));
							}
					});
					
					checkForMailSubscriptions();
				}
			
			
		}
		});
}

function registerForSubscription()
{
	
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/subscribeUser.req',
		data: {apiKey:mailChimpApiKey,email:$("#mailid_user").val(),firstName:$("#first_name_billing").val(),lastName:$("#last_name_billing").val()},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			
			if(data)
				{
					$("#subscribeSubscription").remove();
					listSubScriptions();
				}
			
		}
		});
}

function subscribeTHis(flag,val)
{
	
	if(flag)
		{
			$.ajax({url:'http://'+mailChimpServer+'/mailchimp/subscribeUser.req',
				data: {apiKey:mailChimpApiKey,listId:val,email:$("#mailid_user").val(),firstName:$("#first_name_billing").val(),lastName:$("#last_name_billing").val()},
				dataType:'jsonp',
				jsonp: 'callback',
				success:function(data)
				{
					
					
					
				}
				});
		}
	else
		{
		
		$.ajax({url:'http://'+mailChimpServer+'/mailchimp/unSubscribeUser.req',
			data: {apiKey:mailChimpApiKey,listId:val,email:$("#mailid_user").val()},
			dataType:'jsonp',
			jsonp: 'callback',
			success:function(data)
			{
				
				
				
			}
			});
		
		}
}

function loadingForFb(status){
	
	
	//console.info("this is inside loading popup");
	var locations = window.location.pathname;
	$(".loading_page").fadeIn();
	$.ajax({url:'/setFbStatusFrom.htm',data:({"status":status, "locations":locations}),success:function(data)
		{
			
		}
	});
}
var fileName;
var currentFileId;
var id;
$(document).ready(function()
{
	//console.log(" footer page is  loading .... ");
	$.ajaxSetup({async:false});
//	$.getJSON('http://graph.facebook.com/solestruck',
//	        function(data){
//	    $('#fb_like_count').text(addCommas(data.likes));
//	});
	
	var resetpasswordfrommail=$("#resetpasswordfrommail").val(); 
	var emailId=$("#emailId").val();
	var instantEmail=$('#instantEmail').val();
	var accountActivate=$('#accountAccount').val();
	//console.log(" instantEmail: "+instantEmail);
	var myaccount = $('#myaccount').val();
	//console.log("resetpasswordfrommail is --------->>>>>>>> " +resetpasswordfrommail);
	//console.log("emailId is --------->>>>>>>> " +emailId);
	//console.log("emailId "+emailId+" accountActivate "+accountActivate);
	//console.log(accountActivate=='ActivateAccount');
	 if(resetpasswordfrommail=="true")
	 	{	
		 	$.ajax({url:'/isresetPasswordFlag.htm',cache:false,data:({"email":emailId}),success:function(resetPasswordFlag)
				{
		 			if(resetPasswordFlag==true)
		 				{
			 				//console.log("Reset Password PopUp is Showing Now");
			 				$('#backgroundPopup').show();
							$('.reset_password_form').fadeIn();
							$('#email').val(emailId);
		 				
		 				}
		 			else
		 				{
		 					//console.log("You Allready Registered with Reset Password.Please Try Again to Reset!");
			 				$('#backgroundPopup').show();
							$('.reset_password_form').fadeIn();
		 					$('#regResetPass').hide();
		 					//$('#allreadyRegResetPass').show();
		 					$("#allreadyRegResetPass").removeClass("dn");
		 				}
					 	
				}});
		 }
		 else if(accountActivate=='ActivateAccount')
		 {
			    //console.log(' inside else condition ');
			    $('#backgroundPopup').show();
				$('.reset_password_form').fadeIn();
				$('#heading_popup').html('Activate Account');
				$('#registerToChangePassword').attr('value','Activate Account');
				$('#lbl_reset_pwd').text("Password:");
				$('#email').val(emailId);
		 }
	 
	 if(instantEmail=='true')
	 {
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$('.emailus_popup').fadeIn();
			instantEmail="false";
	 }
	 
	 if(myaccount=='true')
	 {
		 $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		 $('.login_form').fadeIn();
	 }
	 
	 
	 $("#subscribeEmail").keyup(function(e){
		 
		 var code = (e.keyCode ? e.keyCode : e.which);
		 
		 if (code === 13) {//this for enter key
		    	
			 subscribeEmailFunction();
		    	
			}
		 else
			 {
			
				 if($(".email_input_box").hasClass("email_input_box_error")){
					 $(".email_input_box").removeClass("email_input_box_error");
						$(".email_send_btn").removeClass("email_send_btn_error");
				 }
			 	
			 }
		 
		 
	 }); 
	 
	 
	 
	 //commented by iri
	//Upload Attachment

//	$("input[id^='file_']").unbind("change").bind('change',onEmailUsFileChange);
//	
	
//	$("code[id^='removefile_']").die("click").live("click",function(){
//		var htmlStr="";
//		currentFileId = $(this).attr("id").charAt($(this).attr("id").length-1);
//		var brwse_btn = $(this).parent().attr("class");
//		
//		$("#file_"+currentFileId).parent().remove();
//		
//		//deletedIds.push(currentFileId);
//		
//		if($(".browse_btn:last").find("span[class='image_file']").text()!='' && $(".browse_btn:last").find("span[class='image_file']").text()!='Click To Attach File')
//			$(".browse_btn:last").remove();
//		//alert("after if condn");
//		var bool=false;
//		for(var i=0;i<=5;i++)
//		{
//			if($(".image_file"+i).text()=='Click To Attach File')
//				bool=true;
//		}
//		if(!bool)
//			$("#emailUs_send").before("<div class='browse_btn'><input id='file_"+currentFileId+"' name='myFile"+currentFileId+"' type='file' value='Attach Files'/><span class='image_file"+currentFileId+"' onclick="+'$("#file_'+currentFileId+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//		$('#file_'+currentFileId).bind('change',onEmailUsFileChange);
//	});
	
	 
	 
	// Code For Email Us Feature by IRI

//	 if(navigator.appName == 'Microsoft Internet Explorer')
//	 {
//	 	console.log("inside for ie less than 10");
//	 	$('.browse_btn').show();
//	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').text("Click To Attach files");
//	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').show();
//	 }
//	 else
//	 {
	 	console.log("inside else");
	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn').show();
	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').text("Click to attach Files");
		$('.emailus_popup').find('#emailus_form_popup form div#multiple_select').show();
		$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').replaceWith("<input id=\"file_1\" style=\"display:block;\" name=\"myFile1\" type=\"file\" value=\"Attach Files\"  name=\"files[]\" multiple accept='image/*'/>");
//	 }

//	 if(navigator.appName != 'Microsoft Internet Explorer')
//	 {
		$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').die("change").live("change",function(event){
		 console.log("inside the the on change function");
			selectMultipleImages(event);
		});
		
		
		$(document).keyup(function(e){
			
			if($("#emailUs_send").is("focus"))
			{
				 var code	=	(e.keyCode ? e.keyCode : e.which);
				 
			     if(code === 13) 
			     {
			    	 $('#emailUs_send').trigger("click");
			     }
			}	
			
		});
		
//	 }
//	 else
//	 {
//		 $('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').die("change").live("change",function(event)
//				 {
//			 	console.log("inside the on change function for IE");
//			 	selectSingleImage(event);
//				 });
//	 }
	 
}); // Document.ready

// Email Us browser detection by IRI

var BrowserDetect = {

		init: function () {

		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";

		this.version = this.searchVersion(navigator.userAgent)

		|| this.searchVersion(navigator.appVersion)

		|| "an unknown version";

		this.OS = this.searchString(this.dataOS) || "an unknown OS";

		},

		searchString: function (data) {

		for (var i=0;i<data.length;i++)	{

		var dataString = data[i].string;

		var dataProp = data[i].prop;

		this.versionSearchString = data[i].versionSearch || data[i].identity;

		if (dataString) {

		if (dataString.indexOf(data[i].subString) != -1)

		return data[i].identity;

		}

		else if (dataProp)

		return data[i].identity;

		}

		},

		searchVersion: function (dataString) {

		var index = dataString.indexOf(this.versionSearchString);

		if (index == -1) return;

		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));

		},

		dataBrowser: [

		{

		string: navigator.userAgent,

		subString: "Chrome",

		identity: "Chrome"

		},

		{ string: navigator.userAgent,

		subString: "OmniWeb",

		versionSearch: "OmniWeb/",

		identity: "OmniWeb"

		},

		{

		string: navigator.vendor,

		subString: "Apple",

		identity: "Safari",

		versionSearch: "Version"

		},

		{

		prop: window.opera,

		identity: "Opera",

		versionSearch: "Version"

		},

		{

		string: navigator.vendor,

		subString: "iCab",

		identity: "iCab"

		},

		{

		string: navigator.vendor,

		subString: "KDE",

		identity: "Konqueror"

		},

		{

		string: navigator.userAgent,

		subString: "Firefox",

		identity: "Firefox"

		},

		{

		string: navigator.vendor,

		subString: "Camino",

		identity: "Camino"

		},

		{	 // for newer Netscapes (6+)

		string: navigator.userAgent,

		subString: "Netscape",

		identity: "Netscape"

		},

		{

		string: navigator.userAgent,

		subString: "MSIE",

		identity: "Explorer",

		versionSearch: "MSIE"

		},

		{

		string: navigator.userAgent,

		subString: "Gecko",

		identity: "Mozilla",

		versionSearch: "rv"

		},

		{ // for older Netscapes (4-)

		string: navigator.userAgent,

		subString: "Mozilla",

		identity: "Netscape",

		versionSearch: "Mozilla"

		}

		],

		dataOS : [

		{

		string: navigator.platform,

		subString: "Win",

		identity: "Windows"

		},

		{

		string: navigator.platform,

		subString: "Mac",

		identity: "Mac"

		},

		{

		  string: navigator.userAgent,

		  subString: "iPhone",

		  identity: "iPhone/iPod"

		    },

		{

		  string: navigator.userAgent,

		  subString: "iPad",

		  identity: "iPad"

		    },

		{

		string: navigator.platform,

		subString: "Linux",

		identity: "Linux"

		}

		]

		};

		BrowserDetect.init();

// Code for Bulk uploads - Email - Us by IRI

function selectMultipleImages(event)
{
	 $(".browse_btn").hide();
	 $("#emailUs_send").html('<code class="sender"></code> PLEASE WAIT');
	
	 $('.emailus_popup_act').find(".dont_see_your_size_popup_holder form i#alertForAttachment").text("");
	
	 $(".sender").show().queue(function(n){
		 
		 	var imageFiles				= event.target.files;
			
			var singleImage				= {};
			var singleImageDetails		= {};
			
			if($.isEmptyObject(imageObject))
				$('#show_selected_images').html("");
			
			console.log("inside the log --> "+imageFiles.length)
			
			if(imageFiles.length <= 5)
			{
				if(window.FileReader)
				{
					for (var i = 0, f; f = imageFiles[i]; i++) 
					{
						var reader 				=   new FileReader();
						
						reader.onloadend 		=	(function(theFile) {
							
														console.log(theFile);
														
														return function (e) {
															
															if(theFile.size <= 7054691)
															{
																jQuery._uuidlet	 = (((1+Math.random())*0x10000)|0).toString(16).substring(1)+Date.now();
																
																var key					=	jQuery._uuidlet;
																
																singleImage				=	{};
																singleImageDetails		=	{};
																
																singleImage["name"]		=	theFile.name;
																singleImage["size"]		=   theFile.size;
																singleImage["type"]		=   theFile.type;
																
																singleImageDetails["name"]		=	theFile.name;
																singleImageDetails["size"]		=   theFile.size;
																singleImageDetails["type"]		=   theFile.type;
																
																imageObject[key]		=	$.extend({},singleImageDetails);
																
																singleImage["data"]		=	e.target.result;
																
																$('#show_selected_images').append('<div class="attachments'+key+'" style="margin-top: 5px;margin-bottom: 5px;float: left;width:375px;"><img class="thumbnail_style" style="height: 40px;float: left;border-radius: 6px;padding: 4px;box-shadow: 0px 0px 3px 0px #0f0f0f;" src="" /><span style="margin-left: 10px;margin-top: 2px;float: left;position:absolute;">'+theFile.name+'</span><span style="margin-right: 5px;margin-top: 2px;color: #C6B8B8;font-weight: 900;font-size: 13px;cursor:pointer;float: right;margin-left: 383px;position:absolute;"" id="'+key+'" onclick="removeAttachment(this);">X</span></div>').queue(function(next){
																	
																$(".attachments"+key).find("img.thumbnail_style").attr("src",singleImage["data"]);
																	
																		$.ajax({
																	    	   url 		:	"http://12.solestruck-search.appspot.com/storeImage",
																	    	   type 	:	"POST",
																	    	   async	:	true,
																	    	   dataType	:	"json",
																	    	   crossDomain: true,
																	    	   data		:	{key:key,singleImage:JSON.stringify(singleImage),mode:"add"},
																	    	   success  :	function()
																				    	    {
																	    		   				console.log("inside the success function");
																								$(".browse_btn").show();
																								$("#emailUs_send").html('<code class="sender"></code> SEND');
																								$(".sender").hide();
																				    	    },
																			   error	:	function()
																			   				{
																								$(".browse_btn").show();
																								$("#emailUs_send").find('<code class="sender"></code> SEND');
																								$(".sender").hide();
																			   				}
																	    	   
																		});
																
																
//																		var fd = new FormData();
//																		fd.append('file',theFile);
//																		fd.append("key",key);
//																		fd.append("mode","add");
//																		var xhr = new XMLHttpRequest();
//																		xhr.open('POST', 'http://12.solestruck-search.appspot.com/storeImage', true);
//																		xhr.onreadystatechange=function()
//																		  {
//																		  if (xhr.readyState==4 && xhr.status==200)
//																		    {
//																			  $(".browse_btn").show();
//																				$("#emailUs_send").find('<code class="sender"></code> SEND');
//																				$(".sender").hide();
//																		    }
//																		  }
//																		
//																		xhr.send(fd);
//																		
//																		console.log(xhr)
																	
																	
																	next();	 
																	
																}); 
																	
															}
															else
															{
																console.log("inside the else part");
																$(".browse_btn").show();
																$("#emailUs_send").find('<code class="sender"></code> SEND');
																$(".sender").hide();
																$('.emailus_popup_act').find(".dont_see_your_size_popup_holder form i#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.")
															}
															
														};
							
														
														
												  	})(f);
					
						reader.readAsDataURL(f);
					}
				}
				else
				{
					console.log("Internet Explorer");
					
					singleImage["name"]		=	theFile.name;
					singleImage["size"]		=   theFile.size;
					singleImage["type"]		=   theFile.type;
					
					singleImage["data"]		=	e.target.files;
					
					
					$.ajax({
				    	   url 		:	"/storeImages.htm",
				    	   type 	:	"POST",
				    	   dataType	:	'jsonp',
				    	   data		:	{key:key,singleImage:JSON.stringify(singleImage),mode:"add"},
				    	   success  :	function()
							    	    {
				    		   				$(".popup_processing_icon").hide();
							    	    }
				    	   
					});
					
				}
				
					
						
					 
					
					$(".pro_mag").fadeIn();
			}
			else
			{
			     $(".loader").hide();
				 $("#alertForAttachment").text("Please attach only 5 files");
			}	
			
//			$(".loader").hide();
			
			
			n();
		 
	 });
	
	
	
}

// For removing email-Us attachments by IRI

function removeAttachment(obj)
{
	var index		=	$(obj).attr("id");
	
	$(".attachments"+index).remove();
	
	delete imageObject[index];
	
	$.ajax({
 	   url 		:	"http://12.solestruck-search.appspot.com/storeImage",
 	   type 	:	"POST",
 	  crossDomain: true,
 	   data		:	{key:index,mode:"remove"},
 	   success  :	function()
			    	    {
 		   
			    	    }
 	   
	});
}

// For sending email Us by IRI

$('#emailUs_send').click(function(){ 
	
	console.log("for clearing"); 
	
	$(".sender").show();
	
	if(validateEmail_emailUs()) 
	{ 
		var mailDetials				=	{};
		
		var prop 					= 	{};
		
		prop.OS     				= 	BrowserDetect.OS;
		prop.browser				=	BrowserDetect.browser;
		prop.version	 			=	BrowserDetect.version;
		
		mailDetials["sysProp"]		=	prop;
		
		prop						=	{};
		
		
		prop.emailID  	 			=   $('#emailUsId').val();
		prop.subject   				=	$('#help').val();
		prop.orderNO				=	$('#order_number').val();
		
		mailDetials["mailProp"]		=	prop;
		
		if(!$.isEmptyObject(imageObject))
		{
			console.log("inside if condtion")

			mailDetials["attachments"]	=	imageObject;
		}
		$('.emailus_popup_act').hide();
		$('.email_popup_success_act').show();

		$.ajax({ 
			
			url			:	"/sendEmailToUs.htm",
			type		:	"POST",
			cache       :   false,
			data		:	{mailDetials:JSON.stringify(mailDetials)},
			success		:	function()
			{
			
			}
		});
		
	}
	
	
	$(".sender").hide();
		
});


//function selectSingleImage(e)
//{
//	$("#alertForAttachment").text("");
//	var flag =false;
////	console.log("Target file: "+e.target.files);
////	console.log(navigator.appName);
////	console.log(e.target.value);
//	var files;
//	if(navigator.appName == 'Microsoft Internet Explorer')
//	{
//		files = e.target.files;
//		fileToUpload = files;
//	}
//	else
//	{
//		files = e.target.files || e.dataTransfer.files;
//		fileToUpload = files[0];
//		
//	}
//		
//		 id = (e.target.id).charAt((e.target.id).length-1);
//		 //if(id==undefined)
//			// fileName=$("input[id^='file_']").val();
//		 if(currentFileId!=undefined && currentFileId==id)
//		 {
//			 fileName=$("#file_"+currentFileId).val();
//			 flag = true;
//		 }
//		 else
//		 {
//			 fileName=$("#file_"+id).val();
//		 }	 
//		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
//		 //if(id==undefined)
//			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//		 if(currentFileId==undefined)
//			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//		 else
//			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//		 if(pattern.test(fileName))
//		 {
//			 if(!flag)
//			 {
//				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//				 {
//					 $(".image_file"+id).text(fileName);
//					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//					 id=parseInt(id)+1;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				else
//				{
//					$(".image_file"+id).text(fileName);
//				}		
//			 }
//			 else
//			 {
//				 $(".image_file"+currentFileId).text(fileName);
//				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//				 flag=false;
//				 var filesLen = $("input[name^='myFile']");
//				 id=filesLen.length;
//				 id=parseInt(id)+1;
//				 currentFileId = undefined;
//				 var filesLen = $("input[name^='myFile']");
//					if(filesLen.length<5)
//					{
//						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//					}
//			 }
//			
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Please upload Image Files");
//		 } 
//	 
//	
//	
//}
//commented by iri

//$(document).keydown(function(e){
//	if($(".emailus_popup_act").is(":visible") && !$("#help").is(":focus"))
//	{
//		//alert("popup is displaying");
//		var code = (e.keyCode ? e.keyCode : e.which);
//		if(code==13)
//		{
//			emailUsDetails();
//		}
//	}
//});

//commented by iri

//function onEmailUsFileChange(e)
//{
//	$("#alertForAttachment").text("");
//	var flag =false;
////	console.log("Target file: "+e.target.files);
////	console.log(navigator.appName);
////	console.log(e.target.value);
//	var files;
//	if(navigator.appName == 'Microsoft Internet Explorer')
//	{
//		files = e.target.files;
//		fileToUpload = files;
//	}
//	else
//	{
//		files = e.target.files || e.dataTransfer.files;
//		fileToUpload = files[0];
//		
//	}
//	 if(navigator.appName != 'Microsoft Internet Explorer')
//	 {
//		
//		 if(fileToUpload.size<=8388608)
//		 {
//			
//			 id = (e.target.id).charAt((e.target.id).length-1);
//			 //if(id==undefined)
//				// fileName=$("input[id^='file_']").val();
//			 if(currentFileId!=undefined && currentFileId==id)
//			 {
//				 fileName=$("#file_"+currentFileId).val();
//				 flag = true;
//			 }
//			 else
//			 {
//				 fileName=$("#file_"+id).val();
//			 }	 
//			 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//			
//			 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g; 
//			 //if(id==undefined)
//				// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//			 if(currentFileId==undefined)
//				 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//			 else
//				 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//			 if(pattern.test(fileName))
//			 {
//				 if(!flag)
//				 {
//					
//					 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//					 {
//						 
//						 $(".image_file"+id).text(fileName);
//						 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//						 id=parseInt(id)+1;
//						 var filesLen = $("input[name^='myFile']");
//							if(filesLen.length<5)
//							{
//								$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//								$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//							}
//					 }
//					else
//					{
//						
//						$(".image_file"+id).text(fileName);
//					}		
//				 }
//				 else
//				 {
//					
//					 $(".image_file"+currentFileId).text(fileName);
//					 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//					 flag=false;
//					 var filesLen = $("input[name^='myFile']");
//					 id=filesLen.length;
//					 id=parseInt(id)+1;
//					 currentFileId = undefined;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				
//			 }
//			 else
//			 {
//				 $("#alertForAttachment").text("Please upload Image Files");
//			 } 
//		 
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.");
//		 }
//	 }
//	 else
//	 {
//		
//		 id = (e.target.id).charAt((e.target.id).length-1);
//		 //if(id==undefined)
//			// fileName=$("input[id^='file_']").val();
//		 if(currentFileId!=undefined && currentFileId==id)
//		 {
//			 fileName=$("#file_"+currentFileId).val();
//			 flag = true;
//		 }
//		 else
//		 {
//			 fileName=$("#file_"+id).val();
//		 }	 
//		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
//		 //if(id==undefined)
//			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//		 if(currentFileId==undefined)
//			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//		 else
//			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//		 if(pattern.test(fileName))
//		 {
//			 if(!flag)
//			 {
//				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//				 {
//					 $(".image_file"+id).text(fileName);
//					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//					 id=parseInt(id)+1;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				else
//				{
//					$(".image_file"+id).text(fileName);
//				}		
//			 }
//			 else
//			 {
//				 $(".image_file"+currentFileId).text(fileName);
//				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//				 flag=false;
//				 var filesLen = $("input[name^='myFile']");
//				 id=filesLen.length;
//				 id=parseInt(id)+1;
//				 currentFileId = undefined;
//				 var filesLen = $("input[name^='myFile']");
//					if(filesLen.length<5)
//					{
//						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//					}
//			 }
//			
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Please upload Image Files");
//		 } 
//	 }
//	 
//	
//	
//}

var cameFromLoginOrWishList="false";/*This variable is to retain the login or wishlist popup if email us link is clicked from login popup*/
function loadContent(field)
{

  //var elem = $("'#"+field+"'").val($(this).html());
  //alert("elem chosen = " + field);
  var url="/loadCustomerServicePage.htm?page="+field;
  location.href=url;

}
function hideLoginAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="login";
	$('.login_form').hide();
	$("#emailUsDiv").fadeIn();
}
function hideWishListPopupAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="wishList";
	$('.wish_list_form').hide();
	$("#emailUsDiv").fadeIn();
}

function goToRegistration()
{
	var url="/loadRegistration.htm";
	location.href=url;
}

function validateEmail()
{

try {
 	if ($("#subscribeEmail").val() != ""){
  			if(emailValidator('#subscribeEmail', 'We Need A Valid Email Address'))
  			{
  				return true;
  			}	
  			else
  			{
   				$("#subscribeEmail").val("");
   				$('#subscribeEmail').focus();
  				return false;
  			}
  		}
	  else {
	 // alert("Please fill in any Email ID");
	  $('#subscribeEmail').focus();
	  return false;
	  }
 	}
 	catch( e )
 	{
 		$("#subscribeEmail").val(e);
 	}

}
function subscribeEmailFunction()
{
var emailaddress = $("#subscribeEmail").val();
if(validateEmail())
	{
		$.getJSON("/subscribeEmail.htm",{"emailaddress":emailaddress},function(data)
		{
			$("#subscribeEmail").val("");
			$(".email_input_container").hide();
			$(".email_recived_notification").show();
			setTimeout(function(){
				$(".email_recived_notification").hide();
				$(".email_input_container").show();
				$(".email_input_box").removeClass("email_input_box_error");
				$(".email_send_btn").removeClass("email_send_btn_error");
				$("#subscribeEmail").val("Your E-Mail Address");
			},2500);
		});
	}
else
	{
		$(".email_input_box").addClass("email_input_box_error");
		$(".email_send_btn").addClass("email_send_btn_error");
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if($(elem).val().match(emailExp)){
		return true;
	}else{
		$(elem).val(helperMsg);
		
		$(elem).focus();
		return false;
	}
}




function validateEmail_emailUs()
{

try {
 	if ($("#emailUsId").val() != ""){
  			if(emailValidatorEmailUs(document.getElementById('emailUsId'), 'Not a Valid Email'))
  			{
  				$('#alert').hide();
  				$("#emailUsId").removeClass("error_input_field");
  				return true;
  			}	
  			else
  			{
  				return false;
  			}
  		}
	  else {
	 //alert("Please fill in any Email ID");
	 $("#emailUsId").addClass("error_input_field");
	 $('#emailUsId').attr('placeholder','Please fill in any Email ID');
	 $(".popup_processing_icon").css("display","none");
	 /*$('#alert').text("Please fill in any Email ID");
	 $('#emailUsId').focus();
	 $('#alertHelp').text("");*/
   	 return false;
	  }
 	}
 	catch( e )
 	{
 		alert(e);
 	}

}


//commented by iri

//function emailUsDetails()
//{
//	//$("#emailUs_send").addClass('popup_processing_btn');
//	$(".popup_processing_icon").css('display','block');
//	var emailId=$("#emailUsId").val();
//	var help=$("#help").val().replace(/"/g, "\'");
//	var order_number=$("#order_number").val();
//	var nVer = navigator.appVersion;
//	var nAgt = navigator.userAgent;
//	var browserName  = '';
//	var fullVersion  = 0; 
//	var majorVersion = 0;
//
//	if ((verOffset=nAgt.indexOf("Trident"))!=-1) {
//		 browserName  = "Microsoft Internet Explorer";
//		 fullVersion  = jQuery.browser.version;
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	// In Internet Explorer, the true version is after "MSIE" in userAgent
//	if ((verOffset=nAgt.indexOf("MSIE/"))!=-1) {
//	 browserName  = "Microsoft Internet Explorer";
//	 fullVersion  = jQuery.browser.version;
//	 majorVersion = parseInt(''+fullVersion);
//	}
//
//	// In Opera, the true version is after "Opera" 
//	else if ((verOffset=nAgt.indexOf("Opera/"))!=-1) {
//	 browserName  = "Microsoft Internet Explorer";
//	 fullVersion  = jQuery.browser.version;
//	 majorVersion = parseInt(''+fullVersion);
//	}
//	
//	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
//		 browserName  = "Google Chrome";
//		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
//		 browserName  = "Safari";
//		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	// In most other browsers, "name/version" is at the end of userAgent 
//	else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
//	{
//	 browserName  = nAgt.substring(nameOffset,verOffset);
//	 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
//	 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
//	 else {fullVersion  = 0; majorVersion = 0;}
//	}
//
//	// Finally, if no name and/or no version detected from userAgent...
//	if (browserName.toLowerCase() == browserName.toUpperCase() || fullVersion==0 || majorVersion == 0 )
//	{
//	 browserName  = navigator.appName;
//	 fullVersion  = parseFloat(nVer);
//	 majorVersion = parseInt(nVer);
//	}
//	
//	var OSName="Unknown OS";
//	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
//	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
//	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
//	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
//	
//	//console.log("browserName: "+browserName+" fullVersion: "+fullVersion+" majorVersion: "+majorVersion+" os: "+OSName+" browser version: "+jQuery.browser.version);
//	var det="";
//	if(isMobileDevice())
//	{
//		//console.log("name of the device: "+navigator.userAgent);
////		if ((verOffset=nAgt.indexOf("AppleWebKit"))!=-1) {
////			 browserName  = "AppleWebKit";
////			 fullVersion  = parseFloat(nAgt.substring(verOffset+5));
////			 majorVersion = parseInt(''+fullVersion);
////			}
//
//			// In Opera, the true version is after "Opera" 
//			
//			if ((verOffset=nAgt.indexOf("CriOS"))!=-1) {
//				 browserName  = "Google Chrome";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			
//			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
//				 browserName  = "Safari";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			else if ((verOffset=nAgt.indexOf("Version"))!=-1) {
//				 browserName  = "Version";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+8));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			else if ((verOffset=nAgt.indexOf("Mobile"))!=-1) {
//				 browserName  = "Mobile";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//				
//
//			// In most other browsers, "name/version" is at the end of userAgent 
//			else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
//			{
//			 browserName  = nAgt.substring(nameOffset,verOffset);
//			 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
//			 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
//			 else {fullVersion  = 0; majorVersion = 0;}
//			}
//		var mobileName = "";
//		if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1)
//			mobileName = "iPad";
//		else if(navigator.userAgent.toLowerCase().indexOf("iphone")!=-1)
//			mobileName = "iPhone";
//		else if(navigator.userAgent.toLowerCase().indexOf("ipod"))
//			mobileName = "iPod";
//		else if(navigator.userAgent.toLowerCase().indexOf("android"))
//			mobileName = "Android";
//		else if(navigator.userAgent.toLowerCase().indexOf("mobile"))
//			mobileName = "Mobile";
//		det+="<br/><b>Name of the Mobile Device:</b> "+mobileName;
//		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
//	}
//	else
//	{
////		console.log("name of the browser: "+jQuery.browser);
////		console.log("version of the browser: "+jQuery.browser.version);
//		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
//	}
//	if(validateEmail_emailUs())
//	{
//		if(help!="" && help!="undefined")
//		{
//		//	console.log("coming into 3");
//			$('#emailUsId').attr('disabled','disabled');
//			$('#help').attr('disabled','disabled');
//			$('#order_number').attr('disabled','disabled');
//			$('#emailus_button').attr('disabled','disabled');
//			$('#alertHelp').text("");
//			var attachedFile = $("#file1").val();
//			
//			//console.log("attachedFile: "+attachedFile);
//			
//			
//			 var htmlStr="";
//				htmlStr+="<form action=\"/sendEmailToUs.htm\" method=\"post\" accept=\"image/*\" enctype=\"multipart/form-data\" encoding=\"multipart/form-data\">";
//				htmlStr+="<input type=\"text\" name=\"emailId\" value=\""+emailId+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"orderNumber\" value=\""+order_number+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"msg\" value=\""+help+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"sysdet\" value=\""+det+"\"/>";
//				htmlStr+="</form>";
//				$("#imageUploadIFrame").contents().find("body").html(htmlStr);
//				for(var i=0;i<id;i++)
//				{
//					var fileControl = $("#file_"+i);
//					$(fileControl).appendTo($("#imageUploadIFrame").contents().find("form"));
//				}	
//				
//				$("#imageUploadIFrame").contents().find("form").submit();
//			
//			
//				$('#emailUsId').removeAttr('disabled');
//				$('#help').removeAttr('disabled');
//				$('#order_number').removeAttr('disabled');
//				$('#emailus_button').removeAttr('disabled');
//				
//				//$("#login_popup_close").hide();
//				
//				setTimeout(function(){$(".email_popup_success_act").show().css('position','fixed');
//				$(".emailus_popup").hide();
//				$(".ppup_cont_holder").show();
//				//$("#emailUs_send").removeClass('popup_processing_btn');
//				},4000);
//				// For bring up login or wishlist popup if the user came from there(by ss2)
//				 //Starts
//				if(cameFromLoginOrWishList=="false")//this variable is there in customerServiceLink.js
//				{
//					//$('#backgroundPopup').hide();
//				
//				}	
//				else if(cameFromLoginOrWishList=="login")
//				{
//					$('.login_form').show();
//				}
//				else if(cameFromLoginOrWishList=="wishList")
//				{
//					$('.wish_list_form').show();
//				}
//			//	Ends
//				 
//				 $("#emailUsId").val("");
//				 $("#help").val("");
//				 $("#order_number").val("");
//				 $('#alertHelp').text("");
//				 $('#alert').text("");
//				 $(".browse_btn").remove();
//				 $("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1' onclick="+'$("#file_1").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//				 $("#file_1").unbind("change").bind("change",onEmailUsFileChange);
//				 id=undefined;
//				 $("#alertForAttachment").text("");
//	}
//	else
//	{
//		//$("#help").addClass("error_input_field");
//		 $('#help').val('');
//		// $('#help').attr('placeholder','Please fill in some message');
//		 //$("#emailUs_send").removeClass('popup_processing_btn');
//		$('#alertHelp').text("Please fill in some message");
//		$('#alert').text("");
//		$("#alertForAttachment").text("");
//		$(".popup_processing_icon").css('display','none');
//		//$("#file_1").val("");
//		//$("input[id^='file_']").remove();
///*		$(".browse_btn").remove();
//		$("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1'>Click To Attach File</span></div>");
//		$("#file_1").unbind("change").bind("change",onEmailUsFileChange);
//		id=undefined;*/
//	}
//  }
//	//$(".popup_processing_icon").css('display','none');
//}
function goToPreviousPage_frmemail()
{
	$(".popup_processing_icon").css('display','none');
	$(".email_popup_success_act").hide();
	$('#backgroundPopup').fadeOut();
	$(this).parent().hide();
	$(this).parent().css('top', 100 + 'px');	
	//goToPreviousPage();
}

function emailValidatorEmailUs(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		//alert(helperMsg);
		$('#alert').text("Not a Valid Email");
		$('#alert').show();
		$("#emailUsId").addClass("error_input_field");
		$(".popup_processing_icon").css('display','none');
		//$("#help").val("");
   		//$("#order_number").val("");
		elem.focus();
		return false;
	}
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license



(function($) {
	
    
    function fixTitle($ele) {
        if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    }
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
    }
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function')
                                ? this.options.gravity.call(this.$element[0])
                                : this.options.gravity;
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
		
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>');
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]();
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
	
	
    
})(jQuery);

jQuery.kgdropdowncount=0;

jQuery.fn.kgcustomdropdown=function(options){
		
		dropOptions=jQuery.extend({dummy1:''},options);
		
		return this.each(function(){
			
			var obj=$(this);
			if(obj.is(":visible")){
			
			if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1)
			{
				obj.hide();
			}
			
			var myCount=jQuery.kgdropdowncount;
				
			var sideButton=obj.find(".custom_drop_nav");
			
			var optionList=obj.find("ul");
			
			var maxWidth=0;
			
			if(obj.attr("class").indexOf("custom_id_")==-1)
				{
					obj.addClass("custom_id_"+myCount);
					obj.attr("name","custom_id_"+myCount);
					jQuery.kgdropdowncount++;
					//myCount=jQuery.kgdropdowncount;
				}
			else
				{
					myCount=parseInt(obj.attr("name").substring(obj.attr("name").lastIndexOf("_")+1,obj.attr("name").length));
				}
				
			obj.unbind();
			sideButton.unbind();
			optionList.children("li").unbind();
			
			obj.die();
			sideButton.die();
			optionList.children("li").die();
			
			//sideButton.css("border","1px solid red");
			
			optionList.children("li").each(function(){
				
				if($(this).text().length>maxWidth)
				{
					maxWidth=$(this).text().length;
				}
				
				
			});
			
			if(maxWidth>obj.width())
				optionList.width(maxWidth*8);
			else
				optionList.width(obj.width());
			
			if(optionList.children("li").length>10)
				{
					optionList.css("height","150px !important");
					optionList.css("max-height","150px !important");
				}
		
			
			sideButton.click(function(){
				
				if(optionList.is(":hidden"))
				{
					////console.log("is hidden");
					optionList.show();
					
				}
				else
				{
					////console.log("not hidden");
					optionList.hide();
					
				}
				
			
						var liHeight=30;
						var ulHeight=optionList.height();
						var selectedLi;
						var count=0;
						var indexLi=0;

						optionList.find('li').each(function(){

							if($(this).attr("class")=="customDropDownUpdate"){
								selectedLi=this;
								indexLi=count;
								return false;
							}

							count++;
						});

						var distanceSelectedLi=(indexLi+1)*liHeight;
						var difference=distanceSelectedLi-ulHeight;
						var scrollAmt=difference/liHeight;
						
						if(difference>=0)
						{
							optionList.scrollTop(scrollAmt*liHeight);
						}
				
				
			});
			
			obj.mouseenter(function(){
				//$('#wrapper').removeClass('wrappflag');
			}).mouseout(function () {
					//$('#wrapper').addClass('wrappflag');
			    });
			
			obj.find("input[type='text']").click(function(){
				
					if(optionList.is(":hidden"))
					{
						optionList.show();
					}
					else
					{
						optionList.hide();
					}
				
			}).keydown(function(e){
				
				var liHeight=30;
				var ulHeight=optionList.height();
				var selectedLi;
				var count=0;
				var indexLi=0;

				optionList.find('li').each(function(){
				
				
					if($(this).text().toLowerCase().indexOf(''+String.fromCharCode(e.keyCode).toLowerCase())==0 || $(this).text().toUpperCase().indexOf(''+String.fromCharCode(e.keyCode).toUpperCase())==0){

											indexLi=count;
											return false;
										}
				
					

					count++;
				});
			
				var distanceSelectedLi=(indexLi+1)*liHeight;
				var difference=distanceSelectedLi-ulHeight;
				var scrollAmt=difference/liHeight;
				
				if(difference>=0)
				{
					optionList.scrollTop(scrollAmt*liHeight);
				}
				
				return false;
			});
			
			optionList.children("li").click(function(){
				
				
			 var field_value = $(this).text();
			 $(this).parent().parent().children('input').val(field_value);
			 $(this).parent().hide();

			 if($(this).attr("value")!=null && $(this).attr("value")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("value"));
				$(this).addClass("customDropDownUpdate");

			 }
			 else if($(this).attr("id")!=null && $(this).attr("id")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("id"));
				$(this).addClass("customDropDownUpdate");
			 }
			 else if($(this).attr("title")!=null && $(this).attr("title")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("title"));
				$(this).addClass("customDropDownUpdate");
			 }
			 $(this).parent().parent().children('input').trigger('change');
				
			}).mouseover(function(){
				
				$(".customDropDownUpdate").removeClass("customDropDownUpdate");
			});
			
			
			if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1)
			{
				
				if(obj.next().hasClass("selectcustom_id_"+myCount))
					{
						var select=$(".selectcustom_id_"+myCount);
						//select.css("position","relative");
						//select.offset({top:obj.offset().top,left:obj.offset().left});
						//select.width(obj.width());
						//.css("position","absolute");
						select.children().remove();
						//console.log("removed");
						var optionList=obj.children("ul");
						optionList.children("li").each(function(){
							
							if($(this).attr("value")!=null && $(this).attr("value")!="")
							 {
								select.append("<option value=\""+$(this).attr("value")+"\">"+$(this).text()+"</option>");	
	
							 }
							 else if($(this).attr("id")!=null && $(this).attr("id")!="")
							 {
								 select.append("<option value=\""+$(this).attr("id")+"\">"+$(this).text()+"</option>");
								 
							 }
							 else if($(this).attr("title")!=null && $(this).attr("title")!="")
							 {
								 select.append("<option value=\""+$(this).attr("title")+"\">"+$(this).text()+"</option>");
								
							 }
							
							//console.log("adding");
							
							
						});
						
						select.children().each(function(){
							
							if($(this).text()==obj.find("input[type='text']").val())
							 {
								select.val($(this).attr("value"));	
								////console.log("got it");
								return false;
							 }
						
							
						});
						
						
						select.change(function(e){
							
							var selVal=$(this).val();
							obj.children("ul").children("li").each(function(){
								
								if($(this).attr("value")!=null && $(this).attr("value")==selVal)
								 {
									$(this).click();	
									return true;
								 }
								 else if($(this).attr("id")!=null && $(this).attr("id")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								 else if($(this).attr("title")!=null && $(this).attr("title")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								
							});
							return true;
							
						});
					}
				else
					{
					//console.log("coming here");
						$("<select name=\"selectcustom_id_"+myCount+"\" class=\"selectcustom_id_"+myCount+"\"></select>").insertAfter(obj);
						var select=$(".selectcustom_id_"+myCount);
						select.css("position","relative");
						//select.offset({top:obj.offset().top,left:obj.offset().left});
						select.width(obj.width());
						//.css("position","absolute");
						var optionList=obj.children("ul");
						optionList.children("li").each(function(){
							
							if($(this).attr("value")!=null && $(this).attr("value")!="")
							 {
								select.append("<option value=\""+$(this).attr("value")+"\">"+$(this).text()+"</option>");	
	
							 }
							 else if($(this).attr("id")!=null && $(this).attr("id")!="")
							 {
								 select.append("<option value=\""+$(this).attr("id")+"\">"+$(this).text()+"</option>");
								 
							 }
							 else if($(this).attr("title")!=null && $(this).attr("title")!="")
							 {
								 select.append("<option value=\""+$(this).attr("title")+"\">"+$(this).text()+"</option>");
								
							 }
							
							
						});
						
						select.children().each(function(){
							
							if($(this).text()==obj.find("input[type='text']").val())
							 {
								select.val($(this).attr("value"));	
								//console.log("got it");
								return false;
							 }
						
							
						});
						
						
						select.change(function(e){
							
							var selVal=$(this).val();
							obj.children("ul").children("li").each(function(){
								
								if($(this).attr("value")!=null && $(this).attr("value")==selVal)
								 {
									$(this).click();	
									return true;
								 }
								 else if($(this).attr("id")!=null && $(this).attr("id")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								 else if($(this).attr("title")!=null && $(this).attr("title")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								
							});
							return true;
							
						});
					
					}
				
				
			}
			
			
				
			}
			
			});
		
		
			
			
		
};
	
var scimages  				= 	{};
var ingindex				=	0;
var popupPosition			= 	0;
var brokenImageIndices		=	new Array();
var liveFEUrl				= 	"";
var strTablecarosel			=	"";
var prevIndex				=	0;
var popupSet 				= false;
$(document).ready(function() 
{
	liveFEUrl	=	$("#front_end_url").val();
	$('.contact_holder').find('.popup_processing_icon').css('display','block');
	
	$(document).keydown(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code === 27) {
			console.log("inside the street cred");
			$(window).scrollTop(popupPosition-($(window).height()/2))
	    	$('.popup_holder').hide();
	    	$('#backgroundPopup_street').fadeOut('slow');
	    	$('.contact_holder').find('.popup_processing_icon').hide();
	    	 prevIndex				= 0;
	   	   	 popupSet 				= false;
	    }
		
		if(e.keyCode == 37) 
	    {
	        $('.popup_holder ul').find('.prev').click();
	    }
	    else if(e.keyCode == 39)    
	    { 
	    	$('.popup_holder ul').find('.next').click();
	    }
		
	});

	$('.popup_close_act').click(function() {
  		$('#backgroundPopup_street').fadeOut();
		$(this).parent().hide();
		$('#idp_selected_size').text("Please Select");
		$('#size_selected').text("U.S. Women's Size: Please Select Size");
		
				
	});
	

    $('#backgroundPopup_street, .popup_close_act').live( "click",function() 
	 { 
		 $(window).scrollTop(popupPosition-($(window).height()/2))
		 $('.contact_holder').find('.popup_processing_icon').hide();
   	   	 $('.popup_holder').hide();
   	   	 $('#backgroundPopup_street').fadeOut('slow');
   	   	 
   	   	 prevIndex				= 0;
   	   	 popupSet 				= false;
    	   
    });
    
	 fetchInstagramDirectDetails(0,"");
	 
	 $('.street_loadmore').live('click',function()
		{
			var offsetValue		= $(this).attr('offset');
			
			$('.street_popup_processing_icon').show();
			$('.contact_holder').find('.popup_processing_icon').show();
			
			fetchInstagramDirectDetails(offsetValue,"",0);
		});
	 
	 
	 $('.imgpopup').live('click',function()
	 {
		 var id			=	"";
		 var clicked 	=	"";
		 
		 if($(this).hasClass('carouselimg') || $(this).hasClass('prev') || $(this).hasClass('next'))
		 {
			 id 		= $.trim($(this).attr('postid'));
			
			 if($(this).hasClass('carouselimg'))
			 {
				 clicked = "carosel";
			 }
			 else if($(this).hasClass('prev'))
			 {
				 clicked = "prev";
			 }
			 else if($(this).hasClass('next'))
			 {
				 clicked = "next";
			 }
		 }
		 else
		 {
				 id 		= $.trim($(this).attr('id'));
				 clicked 	= "small";
		 }
		 
		 if(scimages.hasOwnProperty(id))
		 {
			 $('#backgroundPopup_street').width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			 $('.contact_holder .popup_processing_icon').css('display','block');
		 	 $('.popup_holder').show();
		 	 $('#backgroundPopup_street').fadeIn('slow');
		 	 
		 	popupPosition 		=	$("#"+id).offset().top;
		 	 
		 	 
			 var keys 			= 	Object.keys(scimages),
			 	 index			= 	keys.indexOf(String(id));
			 
			 if(((keys.length)-(index)) <= 5)
			 {
				 var offsetValue		= $('.street_loadmore').attr('offset');
				 fetchInstagramDirectDetails(parseInt(offsetValue),"append",index);
			 }
			 
			 if(clicked)
			 {
				 var brandName		=	String(scimages[id].tags).split("ss_")[1];
				 
				 if(String(clicked) === "small")
				 {
					 if(!popupSet)
					 {
						 $(window).scrollTop(0);
						 
						 popupSet		= true;
					 }
					 
					 
					 var prevClass	=	"class=\"prev\"",
			 	 	 	 nextClass	=	"class=\"next\"",
			 	 	 	 prevStyle	=	"display:none",
			 	 	 	 nextStyle	=	"display:none";
			 	 	 		 
			 	 	 		 
				 	 if((index - 1) !== -1)
				 	 {
				 		prevClass		=	"class=\"prev imgpopup\" postid=\""+keys[index-1]+"\"";
				 		prevStyle		=	"display:block";
				 	 }	
				 	 
				 	 if((index + 1) < keys.length)
				 	 {
				 		nextClass		=	"class=\"next imgpopup\" postid=\""+keys[index+1]+"\"";
				 		nextStyle		=	"display:block";
				 	 }
				 	 
				 	 if(String(liveFEUrl) === "streetcredpage")
					 {
						 var popupbuild 	=	"<div class=\"clear_both\"></div><ul><li "+prevClass+" "+prevStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_prev.png'></li>"+ 
								 				"<li class=\"imgpop\"><a href='"+scimages[id].link+"'  target='_blank'><img src='"+scimages[id].image7+"' height='750' width='750'></a></li>" +
								 				"<li "+nextClass+" "+nextStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_next.png'></li>"+
								 				"</ul><div class=\"clear_both\"></div>"+
								 				"<h5 id='brandName'>#ss_"+brandName+" tagged by "+scimages[id].user+"</h5>" +
								 				"<a class=\"addCart\" target=\'_blank\'><div class=\"idp_add_to_cart_btn1\" >SHOP IT</div></a>"+
							 					"<div id=\"my-carousel-2\" class=\"carousel module\"></div>";
					 }
				 	 else 
					 {
				 		var popupbuild 		=	"<div class=\"clear_both\"></div><ul><li "+prevClass+" "+prevStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_prev.png'></li>"+ 
								 				"<li class=\"imgpop\"><a href='"+scimages[id].link+"'  target='_blank'><img src='"+scimages[id].image7+"' height='750' width='750'></a></li>" +
								 				"<li "+nextClass+" "+nextStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_next.png'></li>"+
								 				"</ul><div class=\"clear_both\"></div>"+
								 				"<h5 id='brandName'>#ss_"+brandName+" tagged by "+scimages[id].user+"</h5>" +
							 					"<div id=\"my-carousel-2\" class=\"carousel module\"></div>";
					 }
					 
					$('.popup_holder').html(popupbuild).delay(300).queue(function(next){
						
						toBuildShopItButton(brandName);
						
						next();
					});
					
//				 	 if(!popupSet)
//				 	 {
//				 		popupSet		= 	true;
//				 		
//				 		if(($(document).scrollTop()) === 0)
//				 		{
//				 			$('.popup_holder').css({"top":'55px'});
//				 		}	
//				 		else if($(document).scrollTop() == $(document).height())
//				 		{
//				 			$('.popup_holder').css({"top":($(document).scrollTop()-$(window).height()+55)});
//				 		}
//				 		else
//				 		{
//				 			$('.popup_holder').css({"top":($(document).scrollTop() - ($(document).scrollTop()%$(window).height()) + 55)});
//				 		}
//				 	 }
					
			        $("<ul>"+strTablecarosel+"</ul>").appendTo("#my-carousel-2");
					
					
					$('#my-carousel-2').carousel({
						 
						itemsPerPage: 1,
						itemsPerTransition: 1,
						speed: 300
						
					});
					 
					 
					if(index > 0)
			    	{
			    		var nextCount = index ;
			    		
			    		while(nextCount > 2)
			    		{
			    			$('#my-carousel-2').find('.next').click();
			    			nextCount--;
			    		}
			    	}
				 }
				 else
				 { 
					 $($('.popup_holder > ul li').get(1)).find("a").attr("href",scimages[id].link);
					 $($('.popup_holder > ul li').get(1)).find("img").attr("src",scimages[id].image7);
					 $('.popup_holder').find('h5').html('#ss_'+brandName+" tagged by "+scimages[id].user).delay(300).queue(function(next){
						 
						 toBuildShopItButton(brandName);
						 
						 next();
					 });
					 
					 
					 if((index - 1) !== -1)
				 	 {
				 		 $('.popup_holder > ul').find(".prev").addClass("imgpopup").attr("postid",keys[index-1]).show();
				 	 }
					 else
					 {
						 $('.popup_holder > ul').find(".prev").removeClass("imgpopup").removeAttr("postid").hide();
					 }	 
				 	 
				 	 if((index + 1) < keys.length)
				 	 {
				 		 $('.popup_holder > ul').find(".next").addClass("imgpopup").attr("postid",keys[index+1]).show();
				 	 }
					 else
					 {
						 $('.popup_holder > ul').find(".next").removeClass("imgpopup").removeAttr("postid").hide();
					 }
					 
				 	 
				 	 function moveNext(times)
				 	 {
				 		 for(var i = 0;i<times;i++)
				 		 {
				 			$('#my-carousel-2').find('.next').click();
				 		 }	 
				 	 }
				 	 
				 	 function movePrev(times)
				 	 {
				 		 for(var i = 0;i<times;i++)
				 		 {
				 			$('#my-carousel-2').find('.prev').click();
				 		 }	
				 	 }
					 if((index - 2) >= 0 && (index + 2) <= keys.length)
					 {
						 switch(clicked)
					 	 {
					 	 	case "carosel"	:  	 var movingIndex					=	index - prevIndex;
							 
												 switch(movingIndex)
												 {
												 	case -1	:	 movePrev(1);
												 	break;
												 	
												 	case -2	:	 movePrev(2);
												 	break;
												 	
												 	
												 	case 1	:	 moveNext(1);
												 	break;
												 	
												 	case 2	:	 moveNext(2);
												 	break;
												 	
												 }
												 
							break;
							
					 	 	case "prev"   : movePrev(1);
					 	 	break;
					 	 	
					 	 	case "next"   : moveNext(1);
					 	 	break;
					 	 }
					 }	 
				 }
				 
				 prevIndex		=	index;
				 
			 }	 
		 }	 
	 });
});

function toBuildShopItButton(brandName)
{
	 console.log("brandName::"+brandName)
	 brandName		=	brandName.toLowerCase();
	 brandName		=	brandName.charAt(0).toUpperCase()+brandName.substring(1);
	 
	 $.ajax({url:'/idpmapper.htm',data:({"productName":brandName}),success:function(data){
			
		 if( data =="nourl" || data =="")
         {
				$('.addCart').attr('href','/');
				$('.idp_add_to_cart_btn1').html("SHOP IT");	
				$('.addCart').hide();
        			 
         }
 		 else
 		 {
 			 	$('.addCart').show();
 			 	$('.idp_add_to_cart_btn1').html("SHOP IT");
	 			$('.addCart').attr('href','/'+data+'/index.html');
 		 }
		
		 $('.contact_holder').find('.popup_processing_icon').hide();
	}
	 	});
}

function fetchInstagramDirectDetails(offset,type,currentindex)
{
		var imageattr={};
		var productNamewithTrim="";
		if(String(liveFEUrl) != "streetcredpage")
		{
			var productNamewithTrimwithDot =  $('#productName').val().toLowerCase().replace(/\s/g, '');
			productNamewithTrim= productNamewithTrimwithDot.replace(".","");
		}
		
		$('.street_loadmore').hide();
		
		$('.street_popup_processing_icon').show();

		if(String(offset)==="0")
			$('ul#street_cred').html("");
		
		var count	 = 0;
		var sample   = "";
		
		liveFEUrl = liveFEUrl ? liveFEUrl : "idppage";
		
				$.ajax({
				url		 :	"/getAllApprovedImagesInStreetCredPage.htm",
				type	 :	"GET",
				data	 :	{offset:offset,liveFEUrl:liveFEUrl,productNamewithTrim:productNamewithTrim},
				dataType :   "json",
				async	 :   false,
				success	 :	function(data)
					    {
							if(data && data.length === 0 && String(liveFEUrl) !="streetcredpage" && String(offset) === "0") 
							{
								$('.no_tagged_images_text').css('display','block');
							}
							else
							{
								$('.street_popup_processing_icon').hide();
								
								var innerCarousel		= "";
								
								for (index in data) 
						        {
						        	count++;
						        	imageattr  	= {};
							       
						        	if(data[index] && data[index].tags && String(data[index].tags).indexOf("ss_") !== -1)
							        {
							        	    imageattr.tags 		   				= data[index].tags;
									        imageattr.image5 					= data[index].images_low_resolution.replace("_6.jpg","_5.jpg");
									        imageattr.image6 					= data[index].images_low_resolution;
									        imageattr.image7 					= data[index].images_standard_resolution;
									        imageattr.link						= data[index].link ;
									        imageattr.user	 					= data[index].userName;
									        imageattr.caption   				= data[index].caption.value;
									        
									        scimages[String(data[index].key.id)+String(data[index].key.id)] 		= imageattr;
									        
									        strTable			 				= "";
									        
									        $('.contact_holder').find('.popup_processing_icon').hide();
									        $('.no_tagged_images_text').hide();
									
									        strTablecarosel 					+=	"<li><img class=\" carouselimg imgpopup "+String(data[index].key.id)+String(data[index].key.id)+" \" postid="+String(data[index].key.id)+String(data[index].key.id)+"  src='"+(imageattr.image7).replace("6.jpg","8.jpg") +"'  height='150' width='150'>"+
									        										"</a></li>";
									        
									        innerCarousel						+=	"<li><img class=\" carouselimg imgpopup "+String(data[index].key.id)+String(data[index].key.id)+" \" postid="+String(data[index].key.id)+String(data[index].key.id)+"  src='"+(imageattr.image7).replace("6.jpg","8.jpg")+"'  height='150' width='150'>"+
    																				"</a></li>";
										
									        strTable 							+=	"<li class=\"tooltip_t\" title=\'"+imageattr.caption +"\' >" +
									        										"<img class=\"imgpopup imgpopupclick \" id="+String(data[index].key.id)+String(data[index].key.id)+" src='"+imageattr.image5 +"'  height='158' width='158'></li>";
									

										    $('ul#street_cred').append(strTable);
							        }
						        }
								
								if(type)
								{
									$('#my-carousel-2').find("ul").append(innerCarousel);
									
									$('#my-carousel-2').carousel({
										 
										itemsPerPage: 1,
										itemsPerTransition: 1,
										speed: 300
										
									});
									
									if(index > 0)
							    	{
							    		var nextCount = currentindex ;
							    		
							    		while(nextCount > 2)
							    		{
							    			$('#my-carousel-2').find('.next').click();
							    			nextCount--;
							    		}
							    	}
								}	
							}
					        
					        
					        if(String(liveFEUrl) === "streetcredpage")
					    	{
					        	if(count / 50 >=1)
						        {
							        $('.street_loadmore').attr('offset',parseInt(offset)+50).css({"display":"inline-block"});
						        }
					        	else
						        {
							        $('.street_loadmore').html("NO MORE PICS").delay(300).remove();
						        }
					    	}
					    	else
					    	{
					    		if(count / 25 >=1)
						        {
							        $('.street_loadmore').attr('offset',parseInt(offset)+25).css({"display":"inline-block"});
						        }
					    		else
						        {
							        $('.street_loadmore').html("NO MORE PICS").delay(300).remove();
						        }
					    	}
					        
		        }
		    });
}

function errorHandler(id)
{
	delete scimages[id];
	$(".carouselimg."+id).remove();
	
	$.ajax({
		url 		: "/removePrivateImages.htm",
		type		: "POST",
		data		: {id:id},
		sucesss		: function(){}
	});
}


