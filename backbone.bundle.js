// Underscore.js 1.1.4
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var q=this,C=q._,m={},j=Array.prototype,n=Object.prototype,i=j.slice,D=j.unshift,E=n.toString,o=n.hasOwnProperty,s=j.forEach,t=j.map,u=j.reduce,v=j.reduceRight,w=j.filter,x=j.every,y=j.some,p=j.indexOf,z=j.lastIndexOf;n=Array.isArray;var F=Object.keys,c=function(a){return new l(a)};if(typeof module!=="undefined"&&module.exports){module.exports=c;c._=c}else q._=c;c.VERSION="1.1.4";var k=c.each=c.forEach=function(a,b,d){if(a!=null)if(s&&a.forEach===s)a.forEach(b,d);else if(c.isNumber(a.length))for(var e=
0,f=a.length;e<f;e++){if(b.call(d,a[e],e,a)===m)break}else for(e in a)if(o.call(a,e))if(b.call(d,a[e],e,a)===m)break};c.map=function(a,b,d){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(b,d);k(a,function(f,g,h){e[e.length]=b.call(d,f,g,h)});return e};c.reduce=c.foldl=c.inject=function(a,b,d,e){var f=d!==void 0;if(a==null)a=[];if(u&&a.reduce===u){if(e)b=c.bind(b,e);return f?a.reduce(b,d):a.reduce(b)}k(a,function(g,h,G){if(!f&&h===0){d=g;f=true}else d=b.call(e,d,g,h,G)});if(!f)throw new TypeError("Reduce of empty array with no initial value");
return d};c.reduceRight=c.foldr=function(a,b,d,e){if(a==null)a=[];if(v&&a.reduceRight===v){if(e)b=c.bind(b,e);return d!==void 0?a.reduceRight(b,d):a.reduceRight(b)}a=(c.isArray(a)?a.slice():c.toArray(a)).reverse();return c.reduce(a,b,d,e)};c.find=c.detect=function(a,b,d){var e;A(a,function(f,g,h){if(b.call(d,f,g,h)){e=f;return true}});return e};c.filter=c.select=function(a,b,d){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(b,d);k(a,function(f,g,h){if(b.call(d,f,g,h))e[e.length]=
f});return e};c.reject=function(a,b,d){var e=[];if(a==null)return e;k(a,function(f,g,h){b.call(d,f,g,h)||(e[e.length]=f)});return e};c.every=c.all=function(a,b,d){b=b||c.identity;var e=true;if(a==null)return e;if(x&&a.every===x)return a.every(b,d);k(a,function(f,g,h){if(!(e=e&&b.call(d,f,g,h)))return m});return e};var A=c.some=c.any=function(a,b,d){b=b||c.identity;var e=false;if(a==null)return e;if(y&&a.some===y)return a.some(b,d);k(a,function(f,g,h){if(e=b.call(d,f,g,h))return m});return e};c.include=
c.contains=function(a,b){var d=false;if(a==null)return d;if(p&&a.indexOf===p)return a.indexOf(b)!=-1;A(a,function(e){if(d=e===b)return true});return d};c.invoke=function(a,b){var d=i.call(arguments,2);return c.map(a,function(e){return(b?e[b]:e).apply(e,d)})};c.pluck=function(a,b){return c.map(a,function(d){return d[b]})};c.max=function(a,b,d){if(!b&&c.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g>=e.computed&&(e={value:f,computed:g})});
return e.value};c.min=function(a,b,d){if(!b&&c.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g<e.computed&&(e={value:f,computed:g})});return e.value};c.sortBy=function(a,b,d){return c.pluck(c.map(a,function(e,f,g){return{value:e,criteria:b.call(d,e,f,g)}}).sort(function(e,f){var g=e.criteria,h=f.criteria;return g<h?-1:g>h?1:0}),"value")};c.sortedIndex=function(a,b,d){d=d||c.identity;for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(b)?
e=g+1:f=g}return e};c.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(c.isArray(a))return a;if(c.isArguments(a))return i.call(a);return c.values(a)};c.size=function(a){return c.toArray(a).length};c.first=c.head=function(a,b,d){return b&&!d?i.call(a,0,b):a[0]};c.rest=c.tail=function(a,b,d){return i.call(a,c.isUndefined(b)||d?1:b)};c.last=function(a){return a[a.length-1]};c.compact=function(a){return c.filter(a,function(b){return!!b})};c.flatten=function(a){return c.reduce(a,function(b,
d){if(c.isArray(d))return b.concat(c.flatten(d));b[b.length]=d;return b},[])};c.without=function(a){var b=i.call(arguments,1);return c.filter(a,function(d){return!c.include(b,d)})};c.uniq=c.unique=function(a,b){return c.reduce(a,function(d,e,f){if(0==f||(b===true?c.last(d)!=e:!c.include(d,e)))d[d.length]=e;return d},[])};c.intersect=function(a){var b=i.call(arguments,1);return c.filter(c.uniq(a),function(d){return c.every(b,function(e){return c.indexOf(e,d)>=0})})};c.zip=function(){for(var a=i.call(arguments),
b=c.max(c.pluck(a,"length")),d=Array(b),e=0;e<b;e++)d[e]=c.pluck(a,""+e);return d};c.indexOf=function(a,b,d){if(a==null)return-1;if(d){d=c.sortedIndex(a,b);return a[d]===b?d:-1}if(p&&a.indexOf===p)return a.indexOf(b);d=0;for(var e=a.length;d<e;d++)if(a[d]===b)return d;return-1};c.lastIndexOf=function(a,b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};c.range=function(a,b,d){var e=i.call(arguments),f=e.length<=1;a=f?0:e[0];
b=f?e[0]:e[1];d=e[2]||1;e=Math.max(Math.ceil((b-a)/d),0);f=0;for(var g=Array(e);f<e;){g[f++]=a;a+=d}return g};c.bind=function(a,b){var d=i.call(arguments,2);return function(){return a.apply(b||{},d.concat(i.call(arguments)))}};c.bindAll=function(a){var b=i.call(arguments,1);if(b.length==0)b=c.functions(a);k(b,function(d){a[d]=c.bind(a[d],a)});return a};c.memoize=function(a,b){var d={};b=b||c.identity;return function(){var e=b.apply(this,arguments);return e in d?d[e]:d[e]=a.apply(this,arguments)}};
c.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};c.defer=function(a){return c.delay.apply(c,[a,1].concat(i.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};c.throttle=function(a,b){return B(a,b,false)};c.debounce=function(a,b){return B(a,b,true)};c.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,
d)}};c.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};c.keys=F||function(a){if(c.isArray(a))return c.range(0,a.length);var b=[],d;for(d in a)if(o.call(a,d))b[b.length]=d;return b};c.values=function(a){return c.map(a,c.identity)};c.functions=c.methods=function(a){return c.filter(c.keys(a),function(b){return c.isFunction(a[b])}).sort()};c.extend=function(a){k(i.call(arguments,1),function(b){for(var d in b)a[d]=
b[d]});return a};c.clone=function(a){return c.isArray(a)?a.slice():c.extend({},a)};c.tap=function(a,b){b(a);return a};c.isEqual=function(a,b){if(a===b)return true;var d=typeof a;if(d!=typeof b)return false;if(a==b)return true;if(!a&&b||a&&!b)return false;if(a._chain)a=a._wrapped;if(b._chain)b=b._wrapped;if(a.isEqual)return a.isEqual(b);if(c.isDate(a)&&c.isDate(b))return a.getTime()===b.getTime();if(c.isNaN(a)&&c.isNaN(b))return false;if(c.isRegExp(a)&&c.isRegExp(b))return a.source===b.source&&a.global===
b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(d!=="object")return false;if(a.length&&a.length!==b.length)return false;d=c.keys(a);var e=c.keys(b);if(d.length!=e.length)return false;for(var f in a)if(!(f in b)||!c.isEqual(a[f],b[f]))return false;return true};c.isEmpty=function(a){if(c.isArray(a)||c.isString(a))return a.length===0;for(var b in a)if(o.call(a,b))return false;return true};c.isElement=function(a){return!!(a&&a.nodeType==1)};c.isArray=n||function(a){return E.call(a)===
"[object Array]"};c.isArguments=function(a){return!!(a&&o.call(a,"callee"))};c.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};c.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};c.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};c.isNaN=function(a){return a!==a};c.isBoolean=function(a){return a===true||a===false};c.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)};c.isRegExp=function(a){return!!(a&&a.test&&a.exec&&(a.ignoreCase||
a.ignoreCase===false))};c.isNull=function(a){return a===null};c.isUndefined=function(a){return a===void 0};c.noConflict=function(){q._=C;return this};c.identity=function(a){return a};c.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};c.mixin=function(a){k(c.functions(a),function(b){H(b,c[b]=a[b])})};var I=0;c.uniqueId=function(a){var b=I++;return a?a+b:b};c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};c.template=function(a,b){var d=c.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+
a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(e,f){return"',"+f.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(e,f){return"');"+f.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return b?d(b):d};var l=function(a){this._wrapped=a};c.prototype=l.prototype;var r=function(a,b){return b?c(a).chain():a},H=function(a,b){l.prototype[a]=function(){var d=
i.call(arguments);D.call(d,this._wrapped);return r(b.apply(c,d),this._chain)}};c.mixin(c);k(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=j[a];l.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});k(["concat","join","slice"],function(a){var b=j[a];l.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});l.prototype.chain=function(){this._chain=true;return this};l.prototype.value=function(){return this._wrapped}})();
// Backbone.js 0.3.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(){var e;e=typeof exports!=="undefined"?exports:this.Backbone={};e.VERSION="0.3.3";var f=this._;if(!f&&typeof require!=="undefined")f=require("underscore")._;var h=this.jQuery||this.Zepto;e.emulateHTTP=false;e.emulateJSON=false;e.Events={bind:function(a,b){this._callbacks||(this._callbacks={});(this._callbacks[a]||(this._callbacks[a]=[])).push(b);return this},unbind:function(a,b){var c;if(a){if(c=this._callbacks)if(b){c=c[a];if(!c)return this;for(var d=0,g=c.length;d<g;d++)if(b===c[d]){c.splice(d,
1);break}}else c[a]=[]}else this._callbacks={};return this},trigger:function(a){var b,c,d,g;if(!(c=this._callbacks))return this;if(b=c[a]){d=0;for(g=b.length;d<g;d++)b[d].apply(this,Array.prototype.slice.call(arguments,1))}if(b=c.all){d=0;for(g=b.length;d<g;d++)b[d].apply(this,arguments)}return this}};e.Model=function(a,b){a||(a={});if(this.defaults)a=f.extend({},this.defaults,a);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.set(a,{silent:true});this._previousAttributes=
f.clone(this.attributes);if(b&&b.collection)this.collection=b.collection;this.initialize(a,b)};f.extend(e.Model.prototype,e.Events,{_previousAttributes:null,_changed:false,initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.attributes[a];return this._escapedAttributes[a]=(b==null?"":b).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;")},set:function(a,b){b||(b={});if(!a)return this;if(a.attributes)a=a.attributes;var c=this.attributes,d=this._escapedAttributes;if(!b.silent&&this.validate&&!this._performValidation(a,b))return false;if("id"in a)this.id=a.id;for(var g in a){var i=a[g];if(!f.isEqual(c[g],i)){c[g]=i;delete d[g];if(!b.silent){this._changed=true;this.trigger("change:"+g,this,i,b)}}}!b.silent&&this._changed&&this.change(b);return this},unset:function(a,b){b||(b={});var c={};c[a]=void 0;if(!b.silent&&this.validate&&
!this._performValidation(c,b))return false;delete this.attributes[a];delete this._escapedAttributes[a];if(!b.silent){this._changed=true;this.trigger("change:"+a,this,void 0,b);this.change(b)}return this},clear:function(a){a||(a={});var b=this.attributes,c={};for(attr in b)c[attr]=void 0;if(!a.silent&&this.validate&&!this._performValidation(c,a))return false;this.attributes={};this._escapedAttributes={};if(!a.silent){this._changed=true;for(attr in b)this.trigger("change:"+attr,this,void 0,a);this.change(a)}return this},
fetch:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("read",this,function(d){if(!b.set(b.parse(d),a))return false;a.success&&a.success(b,d)},c);return this},save:function(a,b){b||(b={});if(a&&!this.set(a,b))return false;var c=this,d=j(b.error,c,b),g=this.isNew()?"create":"update";(this.sync||e.sync)(g,this,function(i){if(!c.set(c.parse(i),b))return false;b.success&&b.success(c,i)},d);return this},destroy:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("delete",
this,function(d){b.collection&&b.collection.remove(b);a.success&&a.success(b,d)},c);return this},url:function(){var a=k(this.collection);if(this.isNew())return a;return a+(a.charAt(a.length-1)=="/"?"":"/")+this.id},parse:function(a){return a},clone:function(){return new this.constructor(this)},isNew:function(){return!this.id},change:function(a){this.trigger("change",this,a);this._previousAttributes=f.clone(this.attributes);this._changed=false},hasChanged:function(a){if(a)return this._previousAttributes[a]!=
this.attributes[a];return this._changed},changedAttributes:function(a){a||(a=this.attributes);var b=this._previousAttributes,c=false,d;for(d in a)if(!f.isEqual(b[d],a[d])){c=c||{};c[d]=a[d]}return c},previous:function(a){if(!a||!this._previousAttributes)return null;return this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},_performValidation:function(a,b){var c=this.validate(a);if(c){b.error?b.error(this,c):this.trigger("error",this,c,b);return false}return true}});
e.Collection=function(a,b){b||(b={});if(b.comparator){this.comparator=b.comparator;delete b.comparator}this._boundOnModelEvent=f.bind(this._onModelEvent,this);this._reset();a&&this.refresh(a,{silent:true});this.initialize(a,b)};f.extend(e.Collection.prototype,e.Events,{model:e.Model,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._add(a[c],b);else this._add(a,b);return this},remove:function(a,
b){if(f.isArray(a))for(var c=0,d=a.length;c<d;c++)this._remove(a[c],b);else this._remove(a,b);return this},get:function(a){if(a==null)return null;return this._byId[a.id!=null?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");this.models=this.sortBy(this.comparator);a.silent||this.trigger("refresh",this,a);return this},pluck:function(a){return f.map(this.models,
function(b){return b.get(a)})},refresh:function(a,b){a||(a=[]);b||(b={});this._reset();this.add(a,{silent:true});b.silent||this.trigger("refresh",this,b);return this},fetch:function(a){a||(a={});var b=this,c=j(a.error,b,a);(this.sync||e.sync)("read",this,function(d){b.refresh(b.parse(d));a.success&&a.success(b,d)},c);return this},create:function(a,b){var c=this;b||(b={});if(a instanceof e.Model)a.collection=c;else a=new this.model(a,{collection:c});return a.save(null,{success:function(d,g){c.add(d);
b.success&&b.success(d,g)},error:b.error})},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId={};this._byCid={}},_add:function(a,b){b||(b={});a instanceof e.Model||(a=new this.model(a,{collection:this}));var c=this.getByCid(a);if(c)throw Error(["Can't add the same model to a set twice",c.id]);this._byId[a.id]=a;this._byCid[a.cid]=a;a.collection=this;this.models.splice(this.comparator?this.sortedIndex(a,this.comparator):
this.length,0,a);a.bind("all",this._boundOnModelEvent);this.length++;b.silent||a.trigger("add",a,this,b);return a},_remove:function(a,b){b||(b={});a=this.getByCid(a)||this.get(a);if(!a)return null;delete this._byId[a.id];delete this._byCid[a.cid];delete a.collection;this.models.splice(this.indexOf(a),1);this.length--;b.silent||a.trigger("remove",a,this,b);a.unbind("all",this._boundOnModelEvent);return a},_onModelEvent:function(a,b){if(a==="change:id"){delete this._byId[b.previous("id")];this._byId[b.id]=
b}this.trigger.apply(this,arguments)}});f.each(["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","invoke","max","min","sortBy","sortedIndex","toArray","size","first","rest","last","without","indexOf","lastIndexOf","isEmpty"],function(a){e.Collection.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});e.Controller=function(a){a||(a={});if(a.routes)this.routes=a.routes;this._bindRoutes();
this.initialize(a)};var o=/:([\w\d]+)/g,p=/\*([\w\d]+)/g;f.extend(e.Controller.prototype,e.Events,{initialize:function(){},route:function(a,b,c){e.history||(e.history=new e.History);f.isRegExp(a)||(a=this._routeToRegExp(a));e.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d))},this))},saveLocation:function(a){e.history.saveLocation(a)},_bindRoutes:function(){if(this.routes)for(var a in this.routes){var b=this.routes[a];
this.route(a,b,this[b])}},_routeToRegExp:function(a){a=a.replace(o,"([^/]*)").replace(p,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});e.History=function(){this.handlers=[];this.fragment=this.getFragment();f.bindAll(this,"checkUrl")};var l=/^#*/;f.extend(e.History.prototype,{interval:50,getFragment:function(a){return(a||window.location).hash.replace(l,"")},start:function(){var a=document.documentMode;if(a=h.browser.msie&&(!a||a<=7))this.iframe=h('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
"onhashchange"in window&&!a?h(window).bind("hashchange",this.checkUrl):setInterval(this.checkUrl,this.interval);return this.loadUrl()},route:function(a,b){this.handlers.push({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();if(a==this.fragment&&this.iframe)a=this.getFragment(this.iframe.location);if(a==this.fragment||a==decodeURIComponent(this.fragment))return false;if(this.iframe)window.location.hash=this.iframe.location.hash=a;this.loadUrl()},loadUrl:function(){var a=this.fragment=
this.getFragment();return f.any(this.handlers,function(b){if(b.route.test(a)){b.callback(a);return true}})},saveLocation:function(a){a=(a||"").replace(l,"");if(this.fragment!=a){window.location.hash=this.fragment=a;if(this.iframe&&a!=this.getFragment(this.iframe.location)){this.iframe.document.open().close();this.iframe.location.hash=a}}}});e.View=function(a){this._configure(a||{});this._ensureElement();this.delegateEvents();this.initialize(a)};var q=/^(\w+)\s*(.*)$/;f.extend(e.View.prototype,e.Events,
{tagName:"div",$:function(a){return h(a,this.el)},initialize:function(){},render:function(){return this},remove:function(){h(this.el).remove();return this},make:function(a,b,c){a=document.createElement(a);b&&h(a).attr(b);c&&h(a).html(c);return a},delegateEvents:function(a){if(a||(a=this.events)){h(this.el).unbind();for(var b in a){var c=a[b],d=b.match(q),g=d[1];d=d[2];c=f.bind(this[c],this);d===""?h(this.el).bind(g,c):h(this.el).delegate(d,g,c)}}},_configure:function(a){if(this.options)a=f.extend({},
this.options,a);if(a.model)this.model=a.model;if(a.collection)this.collection=a.collection;if(a.el)this.el=a.el;if(a.id)this.id=a.id;if(a.className)this.className=a.className;if(a.tagName)this.tagName=a.tagName;this.options=a},_ensureElement:function(){if(!this.el){var a={};if(this.id)a.id=this.id;if(this.className)a["class"]=this.className;this.el=this.make(this.tagName,a)}}});var m=function(a,b){var c=r(this,a,b);c.extend=m;return c};e.Model.extend=e.Collection.extend=e.Controller.extend=e.View.extend=
m;var s={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};e.sync=function(a,b,c,d){var g=s[a];a=a==="create"||a==="update"?JSON.stringify(b.toJSON()):null;b={url:k(b),type:g,contentType:"application/json",data:a,dataType:"json",processData:false,success:c,error:d};if(e.emulateJSON){b.contentType="application/x-www-form-urlencoded";b.processData=true;b.data=a?{model:a}:{}}if(e.emulateHTTP)if(g==="PUT"||g==="DELETE"){if(e.emulateJSON)b.data._method=g;b.type="POST";b.beforeSend=function(i){i.setRequestHeader("X-HTTP-Method-Override",
g)}}h.ajax(b)};var n=function(){},r=function(a,b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)};n.prototype=a.prototype;d.prototype=new n;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},k=function(a){if(!(a&&a.url))throw Error("A 'url' property or function must be specified");return f.isFunction(a.url)?a.url():a.url},j=function(a,b,c){return function(d){a?a(b,d):b.trigger("error",b,d,c)}}})();
/*
 The MIT License: Copyright (c) 2010 LiosK.
*/
function UUID(){}UUID.generate=function(){var a=UUID._getRandomInt,b=UUID._hexAligner;return b(a(32),8)+"-"+b(a(16),4)+"-"+b(16384|a(12),4)+"-"+b(32768|a(14),4)+"-"+b(a(48),12)};UUID._getRandomInt=function(a){if(a<0)return NaN;if(a<=30)return 0|Math.random()*(1<<a);if(a<=53)return(0|Math.random()*1073741824)+(0|Math.random()*(1<<a-30))*1073741824;return NaN};UUID._getIntAligner=function(a){return function(b,f){for(var c=b.toString(a),d=f-c.length,e="0";d>0;d>>>=1,e+=e)if(d&1)c=e+c;return c}};
UUID._hexAligner=UUID._getIntAligner(16);
// (c) 2011 Enginimation Studio (http://enginimation.com).
// porridge.js may be freely distributed under the MIT license.
"use strict";var global=this,indexedDB=global.indexedDB||global.webkitIndexedDB,IDBTransaction=global.IDBTransaction||global.webkitIDBTransaction,IDBKeyRange=global.IDBKeyRange||global.webkitIDBKeyRange,Porridge={version:"0.3",db:null,log:function(a){console.log(a)},info:function(a){console.info(a)},init:function(a,b,c){var d=indexedDB.open(a.dbName,a.dbDescription),e=a.dbVersion;d.onsuccess=function(d){var f=d.target.result;Porridge.db=f;if(e!=f.version){var g=f.setVersion(e);g.onfailure=c||Porridge.log,g.onsuccess=function(c){for(var d=0;d<a.stores.length;d++){var e=a.stores[d],g=f.createObjectStore(e.name,e.key,!0);if(e.indexes)for(var h=0;h<e.indexes.length;h++){var i=e.indexes[h];g.createIndex(i.name,i.field||i.name)}}Porridge.log("initialized db"),b()}}else b()},d.onfailure=c||this.log},all:function(a,b,c,d){var e=this.db.transaction([a],IDBTransaction.READ_WRITE,0),f=e.objectStore(a),g=f.openCursor();g.onsuccess=function(a){var d=a.result||a.target.result;if(!d)c&&c();else{var e=d.value;b(e),d.continue()}},g.onerror=d||this.log},save:function(a,b,c,d){var e=this.db.transaction([a],IDBTransaction.READ_WRITE,0),f=e.objectStore(a),g=f.put(b,c);g.onsuccess=Porridge.info,g.onerror=d||this.log},remove:function(a,b,c,d){var e=this.db.transaction([a],IDBTransaction.READ_WRITE,0),f=e.objectStore(a),g=f.delete(b);g.onsuccess=c,g.onerror=d||this.log},allByKey:function(a,b,c,d,e,f){var g=this.db.transaction([a],IDBTransaction.READ_WRITE,0),h=g.objectStore(a),i=h.index(b),j=new IDBKeyRange.only(c),k=i.openCursor(j);k.onsuccess=function(a){var b=a.result||a.target.result;if(!b)e&&e();else{var c=b.value;d(c),b.continue()}},k.onerror=f||this.log}}
// (c) 2011 Enginimation Studio (http://enginimation.com).
// backbone-indexdb.js may be freely distributed under the MIT license.
"use strict",Porridge.Model=Backbone.Model.extend({initialize:function(){this.get("id")||(this.id=UUID.generate(),this.set({id:this.id}))},save:function(){var a=this.constructor.definition.name;Porridge.save(a,this.toJSON(),this.id)},destroy:function(){var a=this.constructor.definition.name,b=this.constructor.definition.key||"id",c=this,d=function(){c.trigger("destroy",c,c.collection)};Porridge.remove(a,this.get(b),d)}},{definition:{}}),Porridge.Collection=Backbone.Collection.extend({fetch:function(a){a||(a={});var b=this,c=this.model.definition.name,d=function(a){b.add(new b.model({attributes:a}))};Porridge.all(c,d,function(){b.trigger("retrieved")},a.error)},fetchByKey:function(a,b){var c=this,d=this.model.definition.name,e=function(a){c.add(new c.model({attributes:a}))};Porridge.allByKey(d,a,b,e,function(){c.trigger("retrieved")})}})