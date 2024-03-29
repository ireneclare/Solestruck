
(function(a,b){function ci(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cf(a){if(!b_[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";b_[a]=c}return b_[a]}function ce(a,b){var c={};d.each(cd.concat.apply([],cd.slice(0,b)),function(){c[this]=a});return c}function b$(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bZ(){try{return new a.XMLHttpRequest}catch(b){}}function bY(){d(a).unload(function(){for(var a in bW)bW[a](0,1)})}function bS(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bR(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bQ(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bs.test(a)?e(a,f):bQ(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bQ(a+"["+f+"]",b[f],c,e)}function bP(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bJ,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bP(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bP(a,c,d,e,"*",g));return l}function bO(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bD),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bq(a,b,c){var e=b==="width"?bk:bl,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function bc(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function bb(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function ba(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function _(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function $(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Q(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(L.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function P(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function H(a,b){return(a&&a!=="*"?a+".":"")+b.replace(t,"`").replace(u,"&")}function G(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p=[],q=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(r,"")===a.type?q.push(g.selector):t.splice(i--,1);f=d(a.target).closest(q,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){f=p[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function E(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function y(){return!0}function x(){return!1}function i(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function h(a,c,e){if(e===b&&a.nodeType===1){e=a.getAttribute("data-"+c);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:d.isNaN(e)?g.test(e)?d.parseJSON(e):e:parseFloat(e)}catch(f){}d.data(a,c,e)}else e=b}return e}var c=a.document,d=function(){function G(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(G,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x,y,z=Object.prototype.toString,A=Object.prototype.hasOwnProperty,B=Array.prototype.push,C=Array.prototype.slice,D=String.prototype.trim,E=Array.prototype.indexOf,F={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.2",length:0,size:function(){return this.length},toArray:function(){return C.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?B.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),x.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(C.apply(this,arguments),"slice",C.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;x.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=d._Deferred();if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",y,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",y),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&G()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):F[z.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!A.call(a,"constructor")&&!A.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||A.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:D?function(a){return a==null?"":D.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?B.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){F["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),E&&(d.inArray=function(a,b){return E.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?y=function(){c.removeEventListener("DOMContentLoaded",y,!1),d.ready()}:c.attachEvent&&(y=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",y),d.ready())});return d}(),e="then done fail isResolved isRejected promise".split(" "),f=[].slice;d.extend({_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),f;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(f)return f;f=a={}}var c=e.length;while(c--)a[e[c]]=b[e[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?f.call(arguments,0):c,--g||h.resolveWith(h,f.call(b,0))}}var b=arguments,c=0,e=b.length,g=e,h=e<=1&&a&&d.isFunction(a.promise)?a:d.Deferred();if(e>1){for(;c<e;c++)b[c]&&d.isFunction(b[c].promise)?b[c].promise().then(i(c),h.reject):--g;g||h.resolveWith(h,b)}else h!==a&&h.resolveWith(h,e?[a]:[]);return h.promise()}}),function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0,reliableMarginRight:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e)}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(a.style.width="1px",a.style.marginRight="0",d.support.reliableMarginRight=(parseInt(c.defaultView.getComputedStyle(a,null).marginRight,10)||0)===0),b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function");return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}}();var g=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!i(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,j=g?b[d.expando]:d.expando;if(!h[j])return;if(c){var k=e?h[j][f]:h[j];if(k){delete k[c];if(!i(k))return}}if(e){delete h[j][f];if(!i(h[j]))return}var l=h[j][f];d.support.deleteExpando||h!=a?delete h[j]:h[j]=null,l?(h[j]={},g||(h[j].toJSON=d.noop),h[j][f]=l):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var f=this[0].attributes,g;for(var i=0,j=f.length;i<j;i++)g=f[i].name,g.indexOf("data-")===0&&(g=g.substr(5),h(this[0],g,e[g]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=h(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var j=/[\n\t\r]/g,k=/\s+/,l=/\r/g,m=/^(?:href|src|style)$/,n=/^(?:button|input)$/i,o=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,q=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(k);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(k);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(j," ");for(var i=0,l=c.length;i<l;i++)h=h.replace(" "+c[i]+" "," ");g.className=d.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),i=b,j=a.split(k);while(f=j[g++])i=e?i:!h.hasClass(f),h[i?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(j," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var j=i?f:0,k=i?f+1:h.length;j<k;j++){var m=h[j];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(q.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(l,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&q.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=m.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&n.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var k=a.getAttributeNode("tabIndex");return k&&k.specified?k.value:o.test(a.nodeName)||p.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var l=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return l===null?b:l}h&&(a[c]=e);return a[c]}});var r=/\.(.*)$/,s=/^(?:textarea|input|select)$/i,t=/\./g,u=/ /g,v=/[^\w\s.|`]/g,w=function(a){return a.replace(v,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=x;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(a){return typeof d!=="undefined"&&d.event.triggered!==a.type?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=x);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),w).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(r,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=a.type,l[m]())}catch(p){}k&&(l["on"+m]=k),d.event.triggered=b}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,H(a.origType,a.selector),d.extend({},a,{handler:G,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,H(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?y:x):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=y;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=y;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=y,this.stopPropagation()},isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x};var z=function(a){var b=a.relatedTarget;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},A=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?A:z,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?A:z)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&E("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&E("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var B,C=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},D=function D(a){var c=a.target,e,f;if(s.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=C(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:D,beforedeactivate:D,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&D.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&D.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",C(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in B)d.event.add(this,c+".specialChange",B[c]);return s.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return s.test(this.nodeName)}},B=d.event.special.change.filters,B.focus=B.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function f(a){var c=d.event.fix(a);c.type=b,c.originalEvent={},d.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var e=0;d.event.special[b]={setup:function(){e++===0&&c.addEventListener(a,f,!0)},teardown:function(){--e===0&&c.removeEventListener(a,f,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var F={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=r.exec(h),k="",j&&(k=j[0],h=h.replace(r,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(F[h]+k),h=h+k):h=(F[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)d.event.add(n[p],"live."+H(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+H(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"text"===c&&(b===c||b===null)},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var I=/Until$/,J=/^(?:parents|prevUntil|prevAll)/,K=/,/,L=/^.[^:#\[\.,]*$/,M=Array.prototype.slice,N=d.expr.match.POS,O={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(Q(this,a,!1),"not",a)},filter:function(a){return this.pushStack(Q(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=N.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(P(c[0])||P(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=M.call(arguments);I.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!O[a]?d.unique(f):f,(this.length>1||K.test(e))&&J.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var R=/ jQuery\d+="(?:\d+|null)"/g,S=/^\s+/,T=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,U=/<([\w:]+)/,V=/<tbody/i,W=/<|&#?\w+;/,X=/<(?:script|object|embed|option|style)/i,Y=/checked\s*(?:[^=]|=\s*.checked.)/i,Z={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};Z.optgroup=Z.option,Z.tbody=Z.tfoot=Z.colgroup=Z.caption=Z.thead,Z.th=Z.td,d.support.htmlSerialize||(Z._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(R,""):null;if(typeof a!=="string"||X.test(a)||!d.support.leadingWhitespace&&S.test(a)||Z[(U.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(T,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.length?this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&Y.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?$(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,bc)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!X.test(a[0])&&(d.support.checkClone||!Y.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){ba(a,e),f=bb(a),g=bb(e);for(h=0;f[h];++h)ba(f[h],g[h])}if(b){_(a,e);if(c){f=bb(a),g=bb(e);for(h=0;f[h];++h)_(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||W.test(i)){if(typeof i==="string"){i=i.replace(T,"<$1></$2>");var j=(U.exec(i)||["",""])[1].toLowerCase(),k=Z[j]||Z._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=V.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&S.test(i)&&m.insertBefore(b.createTextNode(S.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bd=/alpha\([^)]*\)/i,be=/opacity=([^)]*)/,bf=/-([a-z])/ig,bg=/([A-Z]|^ms)/g,bh=/^-?\d+(?:px)?$/i,bi=/^-?\d/,bj={position:"absolute",visibility:"hidden",display:"block"},bk=["Left","Right"],bl=["Top","Bottom"],bm,bn,bo,bp=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bm(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bm)return bm(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bf,bp)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bq(a,b,e):d.swap(a,bj,function(){f=bq(a,b,e)});if(f<=0){f=bm(a,b,b),f==="0px"&&bo&&(f=bo(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bh.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return be.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bd.test(f)?f.replace(bd,e):c.filter+" "+e}}),d(function(){d.support.reliableMarginRight||(d.cssHooks.marginRight={get:function(a,b){var c;d.swap(a,{display:"inline-block"},function(){b?c=bm(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bn=function(a,c,e){var f,g,h;e=e.replace(bg,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bo=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bh.test(d)&&bi.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bm=bn||bo,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var br=/%20/g,bs=/\[\]$/,bt=/\r?\n/g,bu=/#.*$/,bv=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bw=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bx=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,by=/^(?:GET|HEAD)$/,bz=/^\/\//,bA=/\?/,bB=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bC=/^(?:select|textarea)/i,bD=/\s+/,bE=/([?&])_=[^&]*/,bF=/(^|\-)([a-z])/g,bG=function(a,b,c){return b+c.toUpperCase()},bH=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bI=d.fn.load,bJ={},bK={},bL,bM;try{bL=c.location.href}catch(bN){bL=c.createElement("a"),bL.href="",bL=bL.href}bM=bH.exec(bL.toLowerCase())||[],d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bI)return bI.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bB,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bC.test(this.nodeName)||bw.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bt,"\r\n")}}):{name:b.name,value:c.replace(bt,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bL,isLocal:bx.test(bM[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bO(bJ),ajaxTransport:bO(bK),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bR(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bS(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bF,bG)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bv.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bu,"").replace(bz,bM[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bD),e.crossDomain==null&&(q=bH.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bM[1]||q[2]!=bM[2]||(q[3]||(q[1]==="http:"?80:443))!=(bM[3]||(bM[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bP(bJ,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!by.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bA.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bE,"$1_="+w);e.url=x+(x===e.url?(bA.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bP(bK,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bQ(g,a[g],c,f);return e.join("&").replace(br,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bT=d.now(),bU=/(\=)\?(&|$)|\?\?/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bT++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bU.test(b.url)||f&&bU.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bU,l),b.url===j&&(f&&(k=k.replace(bU,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bV=d.now(),bW,bX;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bZ()||b$()}:bZ,bX=d.ajaxSettings.xhr(),d.support.ajax=!!bX,d.support.cors=bX&&"withCredentials"in bX,bX=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),!a.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bW[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bW||(bW={},bY()),h=bV++,g.onreadystatechange=bW[h]=c):c()},abort:function(){c&&c(0,1)}}}});var b_={},ca=/^(?:toggle|show|hide)$/,cb=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cc,cd=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(ce("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cf(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ce("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(ce("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cf(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(ca.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=cb.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:ce("show",1),slideUp:ce("hide",1),slideToggle:ce("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!cc&&(cc=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(cc),cc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var cg=/^t(?:able|d|h)$/i,ch=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=ci(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!cg.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=(e==="absolute"||e==="fixed")&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=ch.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!ch.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=ci(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=ci(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);var scrollBarsForFilters;
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
var inventory=new Object();
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
return'"'+string+'"';};})(jQuery);var fileName;
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
}/*!
 * jQuery Form Plugin
 * version: 2.64 (25-FEB-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}
		
		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 50;

		function cb() {
			doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				
				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}
			
			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
			
			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			
			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};
		
		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);
/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function( $, undefined ) {

// prevent duplicate loading
// this is only a problem because we proxy existing functions
// and we don't want to double proxy them
$.ui = $.ui || {};
if ( $.ui.version ) {
	return;
}

$.extend( $.ui, {
	version: "1.8.16",

	keyCode: {
		ALT: 18,
		BACKSPACE: 8,
		CAPS_LOCK: 20,
		COMMA: 188,
		COMMAND: 91,
		COMMAND_LEFT: 91, // COMMAND
		COMMAND_RIGHT: 93,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		MENU: 93, // COMMAND_RIGHT
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38,
		WINDOWS: 91 // COMMAND
	}
});

// plugins
$.fn.extend({
	propAttr: $.fn.prop || $.fn.attr,

	_focus: $.fn.focus,
	focus: function( delay, fn ) {
		return typeof delay === "number" ?
			this.each(function() {
				var elem = this;
				setTimeout(function() {
					$( elem ).focus();
					if ( fn ) {
						fn.call( elem );
					}
				}, delay );
			}) :
			this._focus.apply( this, arguments );
	},

	scrollParent: function() {
		var scrollParent;
		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.each( [ "Width", "Height" ], function( i, name ) {
	var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
		type = name.toLowerCase(),
		orig = {
			innerWidth: $.fn.innerWidth,
			innerHeight: $.fn.innerHeight,
			outerWidth: $.fn.outerWidth,
			outerHeight: $.fn.outerHeight
		};

	function reduce( elem, size, border, margin ) {
		$.each( side, function() {
			size -= parseFloat( $.curCSS( elem, "padding" + this, true) ) || 0;
			if ( border ) {
				size -= parseFloat( $.curCSS( elem, "border" + this + "Width", true) ) || 0;
			}
			if ( margin ) {
				size -= parseFloat( $.curCSS( elem, "margin" + this, true) ) || 0;
			}
		});
		return size;
	}

	$.fn[ "inner" + name ] = function( size ) {
		if ( size === undefined ) {
			return orig[ "inner" + name ].call( this );
		}

		return this.each(function() {
			$( this ).css( type, reduce( this, size ) + "px" );
		});
	};

	$.fn[ "outer" + name] = function( size, margin ) {
		if ( typeof size !== "number" ) {
			return orig[ "outer" + name ].call( this, size );
		}

		return this.each(function() {
			$( this).css( type, reduce( this, size, true, margin ) + "px" );
		});
	};
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		var map = element.parentNode,
			mapName = map.name,
			img;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName )
		? !element.disabled
		: "a" == nodeName
			? element.href || isTabIndexNotNaN
			: isTabIndexNotNaN)
		// the element and all of its ancestors must be visible
		&& visible( element );
}

function visible( element ) {
	return !$( element ).parents().andSelf().filter(function() {
		return $.curCSS( this, "visibility" ) === "hidden" ||
			$.expr.filters.hidden( this );
	}).length;
}

$.extend( $.expr[ ":" ], {
	data: function( elem, i, match ) {
		return !!$.data( elem, match[ 3 ] );
	},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support
$(function() {
	var body = document.body,
		div = body.appendChild( div = document.createElement( "div" ) );

	$.extend( div.style, {
		minHeight: "100px",
		height: "auto",
		padding: 0,
		borderWidth: 0
	});

	$.support.minHeight = div.offsetHeight === 100;
	$.support.selectstart = "onselectstart" in div;

	// set display to none to avoid a layout bug in IE
	// http://dev.jquery.com/ticket/4014
	body.removeChild( div ).style.display = "none";
});





// deprecated
$.extend( $.ui, {
	// $.ui.plugin is deprecated.  Use the proxy pattern instead.
	plugin: {
		add: function( module, option, set ) {
			var proto = $.ui[ module ].prototype;
			for ( var i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode ) {
				return;
			}
	
			for ( var i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},
	
	// will be deprecated when we switch to jQuery 1.4 - use jQuery.contains()
	contains: function( a, b ) {
		return document.compareDocumentPosition ?
			a.compareDocumentPosition( b ) & 16 :
			a !== b && a.contains( b );
	},
	
	// only used by resizable
	hasScroll: function( el, a ) {
	
		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}
	
		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;
	
		if ( el[ scroll ] > 0 ) {
			return true;
		}
	
		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},
	
	// these are odd functions, fix the API or move into individual plugins
	isOverAxis: function( x, reference, size ) {
		//Determines when x coordinate is over "b" element axis
		return ( x > reference ) && ( x < ( reference + size ) );
	},
	isOver: function( y, x, top, left, height, width ) {
		//Determines when x, y coordinates is over "b" element
		return $.ui.isOverAxis( y, top, height ) && $.ui.isOverAxis( x, left, width );
	}
});

})( jQuery );
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						try {
							$( this ).triggerHandler( "remove" );
						// http://bugs.jquery.com/ticket/8235
						} catch( e ) {}
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				// TODO: add this back in 1.9 and use $.error() (see #5972)
//				if ( !instance ) {
//					throw "cannot call methods on " + name + " prior to initialization; " +
//						"attempted to call method '" + options + "'";
//				}
//				if ( !$.isFunction( instance[options] ) ) {
//					throw "no such method '" + options + "' for " + name + " widget instance";
//				}
//				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var callback = this.options[ type ];

		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		data = data || {};

		// copy original event properties over to the new event
		// this would happen if we could call $.event.fix instead of $.Event
		// but we don't have a way to force an event to be fixed multiple times
		if ( event.originalEvent ) {
			for ( var i = $.event.props.length, prop; i; ) {
				prop = $.event.props[ --i ];
				event[ prop ] = event.originalEvent[ prop ];
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );
/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var mouseHandled = false;
$( document ).mouseup( function( e ) {
	mouseHandled = false;
});

$.widget("ui.mouse", {
	options: {
		cancel: ':input,option',
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var self = this;

		this.element
			.bind('mousedown.'+this.widgetName, function(event) {
				return self._mouseDown(event);
			})
			.bind('click.'+this.widgetName, function(event) {
				if (true === $.data(event.target, self.widgetName + '.preventClickEvent')) {
				    $.removeData(event.target, self.widgetName + '.preventClickEvent');
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind('.'+this.widgetName);
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if( mouseHandled ) { return };

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var self = this,
			btnIsLeft = (event.which == 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel == "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				self.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
			$.removeData(event.target, this.widgetName + '.preventClickEvent');
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return self._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return self._mouseUp(event);
		};
		$(document)
			.bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		event.preventDefault();
		
		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// IE mouseup check - mouseup happened when mouse was out of window
		if ($.browser.msie && !(document.documentMode >= 9) && !event.button) {
			return this._mouseUp(event);
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		$(document)
			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target == this._mouseDownEvent.target) {
			    $.data(event.target, this.widgetName + '.preventClickEvent', true);
			}

			this._mouseStop(event);
		}

		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(event) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(event) {},
	_mouseDrag: function(event) {},
	_mouseStop: function(event) {},
	_mouseCapture: function(event) { return true; }
});

})(jQuery);
/*
 * jQuery UI Slider 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var numPages = 5;

$.widget( "ui.slider", $.ui.mouse, {

	widgetEventPrefix: "slide",

	options: {
		animate: false,
		distance: 0,
		max: 400,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null
	},

	_create: function() {
		var self = this,
			o = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
			handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
			handleCount = ( o.values && o.values.length ) || 1,
			handles = [];

		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();

		this.element
			.addClass( "ui-slider" +
				" ui-slider-" + this.orientation +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all" +
				( o.disabled ? " ui-slider-disabled ui-disabled" : "" ) );

		this.range = $([]);

		if ( o.range ) {
			if ( o.range === true ) {
				if ( !o.values ) {
					o.values = [ this._valueMin(), this._valueMin() ];
				}
				if ( o.values.length && o.values.length !== 2 ) {
					o.values = [ o.values[0], o.values[0] ];
				}
			}

			this.range = $( "<div></div>" )
				.appendTo( this.element )
				.addClass( "ui-slider-range" +
				// note: this isn't the most fittingly semantic framework class for this element,
				// but worked best visually with a variety of themes
				" ui-widget-header" + 
				( ( o.range === "min" || o.range === "max" ) ? " ui-slider-range-" + o.range : "" ) );
		}

		for ( var i = existingHandles.length; i < handleCount; i += 1 ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( self.element ) );

		this.handle = this.handles.eq( 0 );

		this.handles.add( this.range ).filter( "a" )
			.click(function( event ) {
				event.preventDefault();
			})
			.hover(function() {
				if ( !o.disabled ) {
					$( this ).addClass( "ui-state-hover" );
				}
			}, function() {
				$( this ).removeClass( "ui-state-hover" );
			})
			.focus(function() {
				if ( !o.disabled ) {
					$( ".ui-slider .ui-state-focus" ).removeClass( "ui-state-focus" );
					$( this ).addClass( "ui-state-focus" );
				} else {
					$( this ).blur();
				}
			})
			.blur(function() {
				$( this ).removeClass( "ui-state-focus" );
			});

		this.handles.each(function( i ) {
			$( this ).data( "index.ui-slider-handle", i );
		});

		this.handles
			.keydown(function( event ) {
				var ret = true,
					index = $( this ).data( "index.ui-slider-handle" ),
					allowed,
					curVal,
					newVal,
					step;
	
				if ( self.options.disabled ) {
					return;
				}
	
				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						ret = false;
						if ( !self._keySliding ) {
							self._keySliding = true;
							$( this ).addClass( "ui-state-active" );
							allowed = self._start( event, index );
							if ( allowed === false ) {
								return;
							}
						}
						break;
				}
	
				step = self.options.step;
				if ( self.options.values && self.options.values.length ) {
					curVal = newVal = self.values( index );
				} else {
					curVal = newVal = self.value();
				}
	
				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
						newVal = self._valueMin();
						break;
					case $.ui.keyCode.END:
						newVal = self._valueMax();
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = self._trimAlignValue( curVal + ( (self._valueMax() - self._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = self._trimAlignValue( curVal - ( (self._valueMax() - self._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if ( curVal === self._valueMax() ) {
							return;
						}
						newVal = self._trimAlignValue( curVal + step );
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if ( curVal === self._valueMin() ) {
							return;
						}
						newVal = self._trimAlignValue( curVal - step );
						break;
				}
	
				self._slide( event, index, newVal );
	
				return ret;
	
			})
			.keyup(function( event ) {
				var index = $( this ).data( "index.ui-slider-handle" );
	
				if ( self._keySliding ) {
					self._keySliding = false;
					self._stop( event, index );
					self._change( event, index );
					$( this ).removeClass( "ui-state-active" );
				}
	
			});

		this._refreshValue();

		this._animateOff = false;
	},

	destroy: function() {
		this.handles.remove();
		this.range.remove();

		this.element
			.removeClass( "ui-slider" +
				" ui-slider-horizontal" +
				" ui-slider-vertical" +
				" ui-slider-disabled" +
				" ui-widget" +
				" ui-widget-content" +
				" ui-corner-all" )
			.removeData( "slider" )
			.unbind( ".slider" );

		this._mouseDestroy();

		return this;
	},

	_mouseCapture: function( event ) {
		var o = this.options,
			position,
			normValue,
			distance,
			closestHandle,
			self,
			index,
			allowed,
			offset,
			mouseOverHandle;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		self = this;
		this.handles.each(function( i ) {
			var thisDistance = Math.abs( normValue - self.values(i) );
			if ( distance > thisDistance ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		});

		// workaround for bug #3736 (if both handles of a range are at 0,
		// the first is always used as the one with least distance,
		// and moving it is obviously prevented by preventing negative ranges)
		if( o.range === true && this.values(1) === o.min ) {
			index += 1;
			closestHandle = $( this.handles[index] );
		}

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		self._handleIndex = index;

		closestHandle
			.addClass( "ui-state-active" )
			.focus();
		
		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().andSelf().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
				( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
				( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function( event ) {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );
		
		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this.handles.removeClass( "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},
	
	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_start: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}
		return this._trigger( "start", event, uiHash );
	},

	_slide: function( event, index, newVal ) {
		var otherVal,
			newValues,
			allowed;

		if ( this.options.values && this.options.values.length ) {
			otherVal = this.values( index ? 0 : 1 );

			if ( ( this.options.values.length === 2 && this.options.range === true ) && 
					( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
				) {
				newVal = otherVal;
			}

			if ( newVal !== this.values( index ) ) {
				newValues = this.values();
				newValues[ index ] = newVal;
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal,
					values: newValues
				} );
				otherVal = this.values( index ? 0 : 1 );
				if ( allowed !== false ) {
					this.values( index, newVal, true );
				}
			}
		} else {
			if ( newVal !== this.value() ) {
				// A slide can be canceled by returning false from the slide callback
				allowed = this._trigger( "slide", event, {
					handle: this.handles[ index ],
					value: newVal
				} );
				if ( allowed !== false ) {
					this.value( newVal );
				}
			}
		}
	},

	_stop: function( event, index ) {
		var uiHash = {
			handle: this.handles[ index ],
			value: this.value()
		};
		if ( this.options.values && this.options.values.length ) {
			uiHash.value = this.values( index );
			uiHash.values = this.values();
		}

		this._trigger( "stop", event, uiHash );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			this._trigger( "change", event, uiHash );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this.options.values && this.options.values.length ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		$.Widget.prototype._setOption.apply( this, arguments );

		switch ( key ) {
			case "disabled":
				if ( value ) {
					this.handles.filter( ".ui-state-focus" ).blur();
					this.handles.removeClass( "ui-state-hover" );
					this.handles.propAttr( "disabled", true );
					this.element.addClass( "ui-disabled" );
				} else {
					this.handles.propAttr( "disabled", false );
					this.element.removeClass( "ui-disabled" );
				}
				break;
			case "orientation":
				this._detectOrientation();
				this.element
					.removeClass( "ui-slider-horizontal ui-slider-vertical" )
					.addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();
				for ( i = 0; i < valsLength; i += 1 ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
		}
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else {
			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i+= 1) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		}
	},
	
	// returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = (val - this._valueMin()) % step,
			alignValue = val - valModStep;

		if ( Math.abs(valModStep) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed(5) );
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.options.max;
	},
	
	_refreshValue: function() {
		var oRange = this.options.range,
			o = this.options,
			self = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			valPercent,
			_set = {},
			lastValPercent,
			value,
			valueMin,
			valueMax;

		if ( this.options.values && this.options.values.length ) {
			this.handles.each(function( i, j ) {
				valPercent = ( self.values(i) - self._valueMin() ) / ( self._valueMax() - self._valueMin() ) * 92;
				_set[ self.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( self.options.range === true ) {
					if ( self.orientation === "horizontal" ) {
						if ( i === 0 ) {
							self.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
						}
						if ( i === 1 ) {
							self.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					} else {
						if ( i === 0 ) {
							self.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
						}
						if ( i === 1 ) {
							self.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
						}
					}
				}
				lastValPercent = valPercent;
			});
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 92 :
					0;
			_set[ self.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
			}
		}
	}

});

$.extend( $.ui.slider, {
	version: "1.8.18"
});

}(jQuery));
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
/*!
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element
      .bind('touchstart', $.proxy(self, '_touchStart'))
      .bind('touchmove', $.proxy(self, '_touchMove'))
      .bind('touchend', $.proxy(self, '_touchEnd'));

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

})(jQuery);$(document).ready(function() {
	
      
	  $(function() {
		$( ".slider-vertical" ).slider({
			orientation: "horizontal",
			range: true,
			min: 10,
			max: 1000,
			step: 10,
			values:[ 10, 1000 ],
			slide: function( event, ui ) {
				//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				if(ui.values[ 1 ]==1000)
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
				else
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
				//console.log(" For slide minAmount is..........  :  " +ui.values[ 0 ]);
				//console.log(" For slide maxAmount is..........  :  " +ui.values[ 1 ]);
				$("#minAmount").val(ui.values[ 0 ]);
				$("#maxAmount").val(ui.values[ 1 ]);
				$('#hiddenMinPrice').val(ui.values[0]);
				$('#hiddenMaxPrice').val(ui.values[1]);
				
			},
		
		change: function( event, ui ) {
				//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				if(ui.values[ 1 ]==1000)
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
				else
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
				//console.log(" For slide minAmount is..........  :  " +ui.values[ 0 ]);
				//console.log(" For slide maxAmount is..........  :  " +ui.values[ 1 ]);
				$("#minAmount").val(ui.values[ 0 ]);
				$("#maxAmount").val(ui.values[ 1 ]);
				$('#hiddenMinPrice').val(ui.values[0]);
				$('#hiddenMaxPrice').val(ui.values[1]);
				//getFilteredProducts();
				//console.log("***************    retainingPriceFilterSelected is    ****************   :   " + retainingPriceFilterSelected);
				if(retainingPriceFilterSelected==false)
				{
					//console.log("********************   priceFilter is changed  **********************");
					displayCheckedNames();
					getFilteredProducts();
					
				}
				else
				{
					//console.log("----->>>>>>>>> for retainingFilter results Price Filter is selected  ");
					displayCheckedNames();
					retainingFilteredProducts();
				}
				
					
			
			}
		});
		
		//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
		if($( ".slider-vertical" ).slider( "values", 1 )==1000)
		$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
		else
		$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
		$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
		$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
		$('#hiddenMinPrice').val($( ".slider-vertical" ).slider( "values", 0 ));
		$('#hiddenMaxPrice').val($( ".slider-vertical" ).slider( "values", 1 ));
		
	});
	  
	   $(function() {
		$( ".slider-vertical1" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: 70,
			slide: function( event, ui ) {
				$( ".amount1" ).val( ui.value );
			}
		});
		$( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
	});
	   
	   
	
	$(function() {
//change the main div to overflow-hidden as we can use the slider now
$('#scroll-pane').css('overflow','hidden');

//compare the width of the scroll content to the scroll pane to see if we need a scrollbar
var difference = $('#scroll-content').width()-$('#scroll-pane').width();//eg it's 200px longer 

if(difference>0)//if the scrollbar is needed, set it up...
{
   var proportion = difference / $('#scroll-content').width();//eg 200px/500px
   var handlewidth = Math.round((1-proportion)*$('#scroll-pane').width());//set the proportional width - round it to make sure everything adds up correctly later on
   handlewidth -= handlewidth%2; 

   $("#scroll-pane").after('<\div id="slider-wrap"><\div id="slider-vertical"><\/div><\/div>');//append the necessary divs so they're only there if needed
   $("#slider-wrap").width($("#scroll-pane").width());//set the width of the slider bar to that of the scroll pane


   //set up the slider 
   $('#slider-vertical').slider({
      orientation: 'vertical',
      min: 0,
      max: 100,
      value: 100,
      slide: function(event, ui) {//used so the content scrolls when the slider is dragged
         var topValue = -((100-ui.value)*difference/100);
         $('#scroll-content').css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in width
      },
      change: function(event, ui) {//used so the content scrolls when the slider is changed by a click outside the handle or by the mousewheel
         var topValue = -((100-ui.value)*difference/100);
         $('#scroll-content').css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in width
      }
   });

   //set the handle width and bottom margin so the middle of the handle is in line with the slider
   $(".ui-slider-handle").css({width:handlewidth,'margin-left':-0.0*handlewidth});
	
   var origSliderwidth = $("#slider-vertical").width();//read the original slider width
   var sliderwidth = origSliderwidth - handlewidth ;//the width through which the handle can move needs to be the original width minus the handle width
   var sliderMargin =  (origSliderwidth - sliderwidth)*0.0;//so the slider needs to have both top and bottom margins equal to half the difference
   $(".ui-slider").css({width:sliderwidth,'margin-top':sliderMargin});//set the slider width and margins
   
}//end if

//code to handle clicks outside the slider handle
$(".ui-slider").click(function(event){//stop any clicks on the slider propagating through to the code below
   	event.stopPropagation();
   });
   
$("#slider-wrap").click(function(event){//clicks on the wrap outside the slider range
	  var offsetTop = $(this).offset().top;//read the offset of the scroll pane
	  var clickValue = (event.pageY-offsetTop)*100/$(this).width();//find the click point, subtract the offset, and calculate percentage of the slider clicked
	  $("#slider-vertical").slider("value", 100-clickValue);//set the new value of the slider
}); 
	 
//additional code for mousewheel
$("#scroll-pane,#slider-wrap").mousewheel(function(event, delta){
	var speed = 5;
	var sliderVal = $("#slider-vertical").slider("value");//read current value of the slider
	
	sliderVal += (delta*speed);//increment the current value

	$("#slider-vertical").slider("value", sliderVal);//and set the new value of the slider
	
	event.preventDefault();//stop any default behaviour
});

});

});

// JavaScript Document// tipsy, facebook style tooltips for jquery
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
var interval;
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
var currentpage='1';
var totalavailablepages=1;
var nextInitialPage=6;
var initialPrevPage=1
var selectedPage="";
var curPage="";
var retainingPriceFilterSelected=false;
var retscrollTop=$('#retaining_scroll_top').val();
$(document).ready(function()
{
	// This is for retaining Filter results when clicks browser back button (SSGA-59) by YES
		
		$(window).bind("scroll", function(e){
			var retainscrollTop=$(window).scrollTop();
			
			if(!(minAmount==10 && maxAmount==1000) || $('.item_selection_pannel').find('input[type=checkbox]:checked').length>0 || $('#hiddenLowHigh').val()=="true" || $('#hiddenHighLow').val()=="true")
			{
				//console.log("---->>>>>>> Present Page retainscrollTop  value is .....   :  " +retainscrollTop);
				$('#retaining_scroll_top').val(retainscrollTop);
			}
			
		});
		
		var curTime=new Date();
		//console.log(" curTime is " +curTime.getTime());
		if($('#sysTimeForBrowserBack').val()==null || $('#sysTimeForBrowserBack').val()=="")
		{
			//console.log("sysTimeForBrowserBack is Empty.. So browser Back button Not clicked");
			
				$('#sysTimeForBrowserBack').val(curTime.getTime());
				
		
		}
		else
		{
			if($('#FilterCheckedValue').val()==null || $('#FilterCheckedValue').val()=="")
			{
				//console.log('No Filter Checked');
				
			}
			else
			{
			//console.log("sysTimeForBrowserBack is Not Empty ...... So browser Back button clicked....");
			var minAmount=$('#hiddenMinPrice').val();
			var maxAmount=$('#hiddenMaxPrice').val();
			//console.log('Browser Back minAmount is .....   :  ' + minAmount);
			//console.log('Browser Back maxAmount is .....   :  ' + maxAmount);
			//console.log('Browser Back hiddenLowHigh is : ' + $('#hiddenLowHigh').val());
			//console.log('Browser Back hiddenHighLow is : ' + $('#hiddenHighLow').val());
				
			if(!(minAmount==10 && maxAmount==1000))
			{
				//console.log('Price Filter is Selected. so Browser Back Price Filter values preserving.....');
				retainingPriceFilterSelected=true;
				$(".loading_page").show();
				$("#filteredProducts").html("");
				
				if($('#hiddenLowHigh').val()=="true")
				{
					//console.log('$$$$$$$ 1  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
					$('#price_Low_High').addClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('true');
					$('#isPriceHighLow').val('false');
					//displayCheckedNames();
				}
				if($('#hiddenHighLow').val()=="true")
				{
					//console.log('%%%%%%%% 1  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
					$('#price_High_Low').addClass('selected');
					$('#price_Low_High').removeClass('selected');
					$('#isPriceHighLow').val('true');
					$('#isPriceLowHigh').val('false');
					//displayCheckedNames();
				}
				
				//if($('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
				//{
					//console.log('Price Filter is Selected. And retaining Gender,Size,Color,Style and Brand Results.....');
					//displayCheckedNames();
				//}	
					
				$(function() {
					$( ".slider-vertical" ).slider({
						orientation: "horizontal",
						range: true,
						min: 10,
						max: 1000,
						values:[ minAmount, maxAmount ],
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
			}
			else
			{
				//console.log("Inside Else....Price Filter is Not Selected.....");
				if($('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
				{
					//console.log("Inside Else....Price Filter is Not Selected........And retaining Gender,Size,Color,Style and Brand Results");
						$(".loading_page").show();
						$("#filteredProducts").html("");
						
						if($('#hiddenLowHigh').val()=="true")
						{
							//console.log('$$$$$$$ 1  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
							$('#price_Low_High').addClass('selected');
							$('#price_High_Low').removeClass('selected');
							$('#isPriceLowHigh').val('true');
							$('#isPriceHighLow').val('false');
						}
						if($('#hiddenHighLow').val()=="true")
						{
							//console.log('%%%%%%%% 1  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
							$('#price_High_Low').addClass('selected');
							$('#price_Low_High').removeClass('selected');
							$('#isPriceHighLow').val('true');
							$('#isPriceLowHigh').val('false');
						}
						
						displayCheckedNames();
						//getFilteredProducts();
						retainingFilteredProducts();
					
					
				}
				else
				{
					if($('#hiddenLowHigh').val()=="true")
					{
						//console.log('$$$$$$$ 3  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
						$('#price_Low_High').addClass('selected');
						$('#price_High_Low').removeClass('selected');
						$('#isPriceLowHigh').val('true');
						$('#isPriceHighLow').val('false');
						$(".loading_page").show();
						displayCheckedNames();
						retainingFilteredProducts();
					}
					if($('#hiddenHighLow').val()=="true")
					{
						//console.log('%%%%%%%% 3  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
						$('#price_High_Low').addClass('selected');
						$('#price_Low_High').removeClass('selected');
						$('#isPriceHighLow').val('true');
						$('#isPriceLowHigh').val('false');
						$(".loading_page").show();
						displayCheckedNames();
						retainingFilteredProducts();
					}
				}
			}
				
		}
	}
	
	// Upto here This is for retaining Filter results when clicks browser back button (SSGA-59) by YES
	
	totalavailablepages = $('#totavailpages').val();
	currentpage		    = $('#currentPage').val();
	selectedPage		= $('#currentPage').val();
	curPage				=$('#curPage').val();
	
	var ssize=$("#shoeCount").val();
	if(ssize<1)
		{
		$('.content_holder').hide();
		$('.sorry_no_items').show();
		}
	$(".item_selection_pannel").addClass("item_selection_pannel_s");
	$(".item_selection_pannel_s").removeClass("item_selection_pannel");
	//$('.global_topbtm_scroll').fadeIn();
	
	$('.previous_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/sale-shoes/');
		else
			loadPrevPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('.next_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			 loadNextPage('/sale-shoes/');
		else
			loadNextPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#prevMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/sale-shoes/');
		else
			loadPrevPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#nextMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadNextPage('/sale-shoes/');
		else
			loadNextPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$("[id^='pagecount_']").click(function(){
		if($("#paramAttID").val()!=null)
		window.location='/sale-shoes/size-'+$("#paramAttID").val()+'/Page-'+$(this).text();
		
	});
	
	/*$(".custom_dropdown ul li").live('click',function()
	{
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			{
					changeItemsPerPage('/sale-shoes/',$(this).attr('title'));
			}
		else
			{
					changeItemsPerPage('/sale-shoes/size-'+$("#paramAttID").val(),$(this).attr('title'));
			}
			
	});*/
	

	//  On Page Load displaying the Checked Filter by YES
	
	if(curPage=='SalePageBySize')
	{
		//console.log("------->>>>>>>>>>>>  we are inside SalePageBySize...");
		saleSize	=$('#saleSize').val();
		socialCat   =$('#socialCat').val();
		//console.log("------->>>>>>>>>>>>  saleSize is ..." +saleSize);
		//console.log("------->>>>>>>>>>>>  socialCat is ..." +socialCat);
		
		$.ajax({url:'/getAttributeIdForPageBySize.htm',data:({"size":saleSize}),success:function(saleSizeAttrId)
			{
				//console.log("------->>>>>>>>>>>>  saleSizeAttrId is ..." +saleSizeAttrId);
			if($('#filterby').val()==='sizeonly')
				{
				$('#sizeid_'+saleSizeAttrId).attr("checked", "checked");
				
				displayCheckedNames();
				getFilteredProducts();
				}
			else
				{
				$('#sizeid_'+saleSizeAttrId).attr("checked", "checked");
				$('#genderid_'+socialCat).attr("checked", "checked");
				displayCheckedNames();
				$(".loading_page").fadeOut();
				}
			
			}});
		
	}
	
	//	Upto here On Page Load displaying the Checked Filter by YES
	if($('#vendorId').val()!=null&&$('#vendorId').val()!="")
	{
	var vendorId=$('#vendorId').val();
	$('#brandid_'+vendorId).attr("checked", "checked");
	
	displayCheckedNames();
	getFilteredProducts();
	}

	
});


function changeItemsPerPage(url,itemsperpage)
{
	
	$.ajax({url:'/changeItemsPerPage.htm',data:({"itemsperpage":itemsperpage}),success:function(data)
		{
			window.location=url;
		}});
}

function loadPrevPage(url)
{
	var reqPage=$('#currentPage').val()-1;
	
	if(reqPage>0)
		{
			window.location=url+"Page-"+reqPage;
		}
}

function loadNextPage(url)
{
	var reqPage=parseInt($('#currentPage').val())+1;
	var availPaes=$('#totavailpages').val();
	
	if(reqPage<=availPaes)
		{
			window.location=url+"Page-"+reqPage;
		}
}
		
/*
 *   For Filtering the products in Sale Page like Style,Size,Color and Price by YES
 */
function getFilteredProducts()
{

	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form...");
	var filterPageNumber=1;
	retainingPriceFilterSelected=false;
	finished=false;
	$('#FilterCheckedValue').val(1);
	
	//$("#backgroundPopup").show();
	//console.log('------->>>>>>> *******  mySelectedFilters length is   *******  ----->>>>>>>> :' + $("#mySelectedFilters ul li").length);
	if($("#mySelectedFilters ul li").length==0)
	{
		//console.log('------->>>>>>> Filters @@@@@@  Not selected  @@@@@@@ ----->>>>>>>>');
		$('#pageloadProducts').show();
		$('#filteredProducts').hide();
		$("#filter_sorry_no_items").hide();
		$(".loading_page").hide();
	}
	else
	{
			
		
		//console.log('------->>>>>>> $$$$$   Filters selected  $$$$$$$ ----->>>>>>>>');
		
		/*setTimeout(function(){
			if(finished==false)	{
			$(".loading_page").show();}
			},1000);*/
		
		setTimeout(function(){$('#filterForm').ajaxSubmit(
				{
					//console.log("------>>>>>>> invoked for filterForm");
					url:"/getFilteredProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber),
					
					success:function(data){
						
							//console.log('Got filtered product for Sale Page Filter!');
							$('#retainfilterPageNumber').val(filterPageNumber);
							$('#pageloadProducts').hide();
							$('#filteredProducts').show();
							$("#filteredProducts").html(data);
							$("#filter_sorry_no_items").hide();
							var nextAvil=$('#nextAvil').val();
							//console.log('nextAvil is ----->>>>  : ' + nextAvil);
							if(nextAvil=='false')
								{
								//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
								 	$('#loadMoreFilteredResults').hide();
								}
							if($("#shoeCount").val()<1)
							{
								$("#filter_sorry_no_items").show();
								$("#filteredDynamicItems").hide();
								$("#loadMoreFilteredResults").hide();
							}
							else
							{
								$("#filter_sorry_no_items").hide();
							}
							finished=true;
							//$(".loading_page").hide();
							$(".loading_page").fadeOut();
							//$("#backgroundPopup").hide();
						}
				});},500);
	}
}

function retainingFilteredProducts()
{
	
	//console.log("------->>>>>>>>>>>>  Inside retainingFilteredProducts() ......... ");
	var filterPageNumber=parseInt($('#retainfilterPageNumber').val());
	//console.log("filterPageNumber...... is " + filterPageNumber);
	$(".loading_page").show();
	$('#filterForm').ajaxSubmit(
			{
				//console.log("------>>>>>>> invoked for filterForm");
				url:"/getFilteredProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber)+"&browserBackClicked=true",
				
				success:function(data){
					//console.log('Got filtered product for Sale Page Filter!');
					$("#filteredProducts").html(data);
					$("#filter_sorry_no_items").hide();
					var nextAvil=$('#nextAvil').val();
					//console.log('nextAvil is ----->>>>  : ' + nextAvil);
					if(nextAvil=='false')
						{
						//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
						 	$('#loadMoreFilteredResults').hide();
						}
					if($("#shoeCount").val()<1)
					{
						$("#filter_sorry_no_items").show();
						$("#filteredDynamicItems").hide();
						$("#loadMoreFilteredResults").hide();
					}
					else
					{
						$("#filter_sorry_no_items").hide();
					}
					finished=true;
					//console.log('Browser Back retscrollTop value  is .....   :  ' + retscrollTop);
					if(retscrollTop!=null)
					{
						//console.log("-------->>>>>>>>>> ......... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
						$('html, body').animate({scrollTop:retscrollTop}, 'fast');
					}
					$(".loading_page").hide();
					//$("#backgroundPopup").hide();
					retainingPriceFilterSelected=false;
				}
			});
}

function getLoadMoreFilteredProducts()
{
	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form For Load More Filtered Shoes   ---------->>>>>>>>>>>>  ");
	//var filterPageNumber=parseInt($('#filterPageNumber').val());
	var filterPageNumber=parseInt($('#retainfilterPageNumber').val());
		filterPageNumber=filterPageNumber+1;
		//console.log('filterPageNumber is ----->>>>  : ' + filterPageNumber);
		retainingPriceFilterSelected=false;
		$(".loading_list").css('display','block');
	 $(".loading_list code").css('display','block');
	 
	 setTimeout(function(){$('#filterForm').ajaxSubmit(
			{
				//console.log("------>>>>>>> invoked for filterForm");
				url:"/getFilteredLoadeMoreProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber),
				success:function(html){
					//console.log('Got filtered product for Sort Page Filter!');
					$('#filterPageNumber').val(filterPageNumber);
					$('#retainfilterPageNumber').val(filterPageNumber);
					$(html).appendTo("#filteredDynamicItems");
					$(".loading_list").css('display','none');
					$(".loading_list code").css('display','none');
					var nextAvailForMore=$("#nextAvailForMore_"+filterPageNumber).val();
					//console.log('nextAvailForMore is ----->>>>  : ' + nextAvailForMore);
					if(nextAvailForMore=='false')
						{
						//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
						 	$('#loadMoreFilteredResults').hide();
						}
				}
			});},1000);
	
}

//Upto here For Filtering the products in Sale Page like Style,Size,Color and Price by YES

/*Paginatin according to the new specification*/

function showNextMorePages()
{
	//console.log(" inside showNextMorePages function  new  ");
		var count          = 0;
		var pageshow       = "";
		var serverName     = $('#servername').val();
		startValue	       = parseInt(currentpage)+5;
		var socialCategory = $('#sc').val();
		var newsize        = $('#newsize').val();
		var salesize	   = "";
		//console.log("sc:"+sc+":newsize:"+newsize);
		
		if(socialCategory!='null' && newsize!=null && newsize!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes/size-'+newsize;
				
		}
		else if(socialCategory!='null' &&  socialCategory!='')
		{
			salesize='/sale-'+socialCategory+'s-shoes';
		}
		else
		{
			salesize='/sale-shoes';
		}
		
		if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		if(initialPrevPage>=1)
		{
			pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		
		//console.log("flag ::"+(startValue>parseInt(totalavailablepages))+" start value :"+startValue+" total pages :"+parseInt(totalavailablepages));
		if(startValue<=parseInt(totalavailablepages))
		{
			for( i=startValue ; i<=startValue+9&&i<=parseInt(totalavailablepages); i++)
			{
				pageshow=pageshow+'<a class="page_number"  id="pagecount_'+i+'" href="'+salesize+'/page-'+i+'/">'+i+'</a>';
				count=i;
			}
		
		
			currentpage=startValue;
		
			if(currentpage==6)
			{
				initialPrevPage=1;
			}
			else
			{
				initialPrevPage=parseInt(currentpage)-5;	
			}
			if( parseInt(count)==totalavailablepages)
			{
				pageshow=pageshow+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			else if(totalavailablepages>=15)
			{
				pageshow=pageshow+'<a class="more_page"  id="sns" onclick="showNextMorePages()"   >...</a>'+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/"></a>';
			} 
			else
			{
				pageshow=pageshow+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			$('.second').html(pageshow);
			$("#pagecount_"+selectedPage).addClass("page_number_selected");
		}
		
	
}
function showPrevMorePages()
{
		var pageshow="";
		initialPrevPage=parseInt(currentpage)-5;
		var serverName=$('#servername').val();
		var socialCategory=$('#sc').val();
		var newsize=$('#newsize').val();
		
		//console.log("sc:"+sc+":newsize:"+newsize);
		var salesize="";
		if(socialCategory!='null' && newsize!='null' && newsize!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes/size-'+newsize;
		}
		else if(socialCategory!='null' && socialCategory!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes';
		}
		else
		{
			salesize='/sale-shoes';
		}
		
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="'+salesize+'/page-'+i+'/">'+i+'</a>';
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
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page "  href="#" href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}

// Femi - FIX

/*Changed for Browser Back Issue*/
function getShoeListBySocialCategory()
{
	//console.log("It hits getShoeListBySocialCategory");
	socialCat   =$('#socialCatog').val();
	//console.log("CATEGORY:"+socialCat);
	
	$(".loading_page").show();
	$.ajax(
			{
				//console.log("------>>>>>>> invoked for browser Back AJAX function<<<<<<<-----------");
				url:"/getSaleItemsBySize.htm?socialCatagory="+(socialCat),
				method: 'post',
				success:function(data)
				{
					//console.log("Got productlist for Sale Page!");
					$(".loading_page").hide();
				}
			});
	
}
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
	
