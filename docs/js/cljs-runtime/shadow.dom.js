goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35948 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35948(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35953 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35953(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34899 = coll;
var G__34900 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34899,G__34900) : shadow.dom.lazy_native_coll_seq.call(null,G__34899,G__34900));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34924 = arguments.length;
switch (G__34924) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34937 = arguments.length;
switch (G__34937) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34962 = arguments.length;
switch (G__34962) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34977 = arguments.length;
switch (G__34977) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35005 = arguments.length;
switch (G__35005) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35016 = arguments.length;
switch (G__35016) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35023){if((e35023 instanceof Object)){
var e = e35023;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35023;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35037 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35038 = null;
var count__35039 = (0);
var i__35040 = (0);
while(true){
if((i__35040 < count__35039)){
var el = chunk__35038.cljs$core$IIndexed$_nth$arity$2(null,i__35040);
var handler_35971__$1 = ((function (seq__35037,chunk__35038,count__35039,i__35040,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35037,chunk__35038,count__35039,i__35040,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35971__$1);


var G__35972 = seq__35037;
var G__35973 = chunk__35038;
var G__35974 = count__35039;
var G__35975 = (i__35040 + (1));
seq__35037 = G__35972;
chunk__35038 = G__35973;
count__35039 = G__35974;
i__35040 = G__35975;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35037);
if(temp__5753__auto__){
var seq__35037__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35037__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35037__$1);
var G__35976 = cljs.core.chunk_rest(seq__35037__$1);
var G__35977 = c__4679__auto__;
var G__35978 = cljs.core.count(c__4679__auto__);
var G__35979 = (0);
seq__35037 = G__35976;
chunk__35038 = G__35977;
count__35039 = G__35978;
i__35040 = G__35979;
continue;
} else {
var el = cljs.core.first(seq__35037__$1);
var handler_35980__$1 = ((function (seq__35037,chunk__35038,count__35039,i__35040,el,seq__35037__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35037,chunk__35038,count__35039,i__35040,el,seq__35037__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35980__$1);


var G__35982 = cljs.core.next(seq__35037__$1);
var G__35983 = null;
var G__35984 = (0);
var G__35985 = (0);
seq__35037 = G__35982;
chunk__35038 = G__35983;
count__35039 = G__35984;
i__35040 = G__35985;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35071 = arguments.length;
switch (G__35071) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35085 = cljs.core.seq(events);
var chunk__35086 = null;
var count__35087 = (0);
var i__35088 = (0);
while(true){
if((i__35088 < count__35087)){
var vec__35104 = chunk__35086.cljs$core$IIndexed$_nth$arity$2(null,i__35088);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35995 = seq__35085;
var G__35996 = chunk__35086;
var G__35997 = count__35087;
var G__35998 = (i__35088 + (1));
seq__35085 = G__35995;
chunk__35086 = G__35996;
count__35087 = G__35997;
i__35088 = G__35998;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35085);
if(temp__5753__auto__){
var seq__35085__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35085__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35085__$1);
var G__36001 = cljs.core.chunk_rest(seq__35085__$1);
var G__36002 = c__4679__auto__;
var G__36003 = cljs.core.count(c__4679__auto__);
var G__36004 = (0);
seq__35085 = G__36001;
chunk__35086 = G__36002;
count__35087 = G__36003;
i__35088 = G__36004;
continue;
} else {
var vec__35111 = cljs.core.first(seq__35085__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36009 = cljs.core.next(seq__35085__$1);
var G__36010 = null;
var G__36011 = (0);
var G__36012 = (0);
seq__35085 = G__36009;
chunk__35086 = G__36010;
count__35087 = G__36011;
i__35088 = G__36012;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35118 = cljs.core.seq(styles);
var chunk__35119 = null;
var count__35120 = (0);
var i__35121 = (0);
while(true){
if((i__35121 < count__35120)){
var vec__35133 = chunk__35119.cljs$core$IIndexed$_nth$arity$2(null,i__35121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36014 = seq__35118;
var G__36015 = chunk__35119;
var G__36016 = count__35120;
var G__36017 = (i__35121 + (1));
seq__35118 = G__36014;
chunk__35119 = G__36015;
count__35120 = G__36016;
i__35121 = G__36017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35118);
if(temp__5753__auto__){
var seq__35118__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35118__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35118__$1);
var G__36021 = cljs.core.chunk_rest(seq__35118__$1);
var G__36022 = c__4679__auto__;
var G__36023 = cljs.core.count(c__4679__auto__);
var G__36024 = (0);
seq__35118 = G__36021;
chunk__35119 = G__36022;
count__35120 = G__36023;
i__35121 = G__36024;
continue;
} else {
var vec__35138 = cljs.core.first(seq__35118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36027 = cljs.core.next(seq__35118__$1);
var G__36028 = null;
var G__36029 = (0);
var G__36030 = (0);
seq__35118 = G__36027;
chunk__35119 = G__36028;
count__35120 = G__36029;
i__35121 = G__36030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35144_36031 = key;
var G__35144_36032__$1 = (((G__35144_36031 instanceof cljs.core.Keyword))?G__35144_36031.fqn:null);
switch (G__35144_36032__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36039 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36039,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36039,"aria-");
}
})())){
el.setAttribute(ks_36039,value);
} else {
(el[ks_36039] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35166){
var map__35167 = p__35166;
var map__35167__$1 = cljs.core.__destructure_map(map__35167);
var props = map__35167__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35168 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35171 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35171,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35171;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35173 = arguments.length;
switch (G__35173) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35176){
var vec__35177 = p__35176;
var seq__35178 = cljs.core.seq(vec__35177);
var first__35179 = cljs.core.first(seq__35178);
var seq__35178__$1 = cljs.core.next(seq__35178);
var nn = first__35179;
var first__35179__$1 = cljs.core.first(seq__35178__$1);
var seq__35178__$2 = cljs.core.next(seq__35178__$1);
var np = first__35179__$1;
var nc = seq__35178__$2;
var node = vec__35177;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35180 = nn;
var G__35181 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35180,G__35181) : create_fn.call(null,G__35180,G__35181));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35182 = nn;
var G__35183 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35182,G__35183) : create_fn.call(null,G__35182,G__35183));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35184 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35184,(1),null);
var seq__35187_36050 = cljs.core.seq(node_children);
var chunk__35188_36051 = null;
var count__35189_36052 = (0);
var i__35190_36053 = (0);
while(true){
if((i__35190_36053 < count__35189_36052)){
var child_struct_36054 = chunk__35188_36051.cljs$core$IIndexed$_nth$arity$2(null,i__35190_36053);
var children_36055 = shadow.dom.dom_node(child_struct_36054);
if(cljs.core.seq_QMARK_(children_36055)){
var seq__35241_36056 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36055));
var chunk__35243_36057 = null;
var count__35244_36058 = (0);
var i__35245_36059 = (0);
while(true){
if((i__35245_36059 < count__35244_36058)){
var child_36060 = chunk__35243_36057.cljs$core$IIndexed$_nth$arity$2(null,i__35245_36059);
if(cljs.core.truth_(child_36060)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36060);


var G__36061 = seq__35241_36056;
var G__36062 = chunk__35243_36057;
var G__36063 = count__35244_36058;
var G__36064 = (i__35245_36059 + (1));
seq__35241_36056 = G__36061;
chunk__35243_36057 = G__36062;
count__35244_36058 = G__36063;
i__35245_36059 = G__36064;
continue;
} else {
var G__36065 = seq__35241_36056;
var G__36066 = chunk__35243_36057;
var G__36067 = count__35244_36058;
var G__36068 = (i__35245_36059 + (1));
seq__35241_36056 = G__36065;
chunk__35243_36057 = G__36066;
count__35244_36058 = G__36067;
i__35245_36059 = G__36068;
continue;
}
} else {
var temp__5753__auto___36069 = cljs.core.seq(seq__35241_36056);
if(temp__5753__auto___36069){
var seq__35241_36071__$1 = temp__5753__auto___36069;
if(cljs.core.chunked_seq_QMARK_(seq__35241_36071__$1)){
var c__4679__auto___36072 = cljs.core.chunk_first(seq__35241_36071__$1);
var G__36073 = cljs.core.chunk_rest(seq__35241_36071__$1);
var G__36074 = c__4679__auto___36072;
var G__36075 = cljs.core.count(c__4679__auto___36072);
var G__36076 = (0);
seq__35241_36056 = G__36073;
chunk__35243_36057 = G__36074;
count__35244_36058 = G__36075;
i__35245_36059 = G__36076;
continue;
} else {
var child_36077 = cljs.core.first(seq__35241_36071__$1);
if(cljs.core.truth_(child_36077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36077);


var G__36079 = cljs.core.next(seq__35241_36071__$1);
var G__36080 = null;
var G__36081 = (0);
var G__36082 = (0);
seq__35241_36056 = G__36079;
chunk__35243_36057 = G__36080;
count__35244_36058 = G__36081;
i__35245_36059 = G__36082;
continue;
} else {
var G__36083 = cljs.core.next(seq__35241_36071__$1);
var G__36084 = null;
var G__36085 = (0);
var G__36086 = (0);
seq__35241_36056 = G__36083;
chunk__35243_36057 = G__36084;
count__35244_36058 = G__36085;
i__35245_36059 = G__36086;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36055);
}


var G__36088 = seq__35187_36050;
var G__36089 = chunk__35188_36051;
var G__36090 = count__35189_36052;
var G__36091 = (i__35190_36053 + (1));
seq__35187_36050 = G__36088;
chunk__35188_36051 = G__36089;
count__35189_36052 = G__36090;
i__35190_36053 = G__36091;
continue;
} else {
var temp__5753__auto___36092 = cljs.core.seq(seq__35187_36050);
if(temp__5753__auto___36092){
var seq__35187_36093__$1 = temp__5753__auto___36092;
if(cljs.core.chunked_seq_QMARK_(seq__35187_36093__$1)){
var c__4679__auto___36094 = cljs.core.chunk_first(seq__35187_36093__$1);
var G__36096 = cljs.core.chunk_rest(seq__35187_36093__$1);
var G__36097 = c__4679__auto___36094;
var G__36098 = cljs.core.count(c__4679__auto___36094);
var G__36099 = (0);
seq__35187_36050 = G__36096;
chunk__35188_36051 = G__36097;
count__35189_36052 = G__36098;
i__35190_36053 = G__36099;
continue;
} else {
var child_struct_36100 = cljs.core.first(seq__35187_36093__$1);
var children_36101 = shadow.dom.dom_node(child_struct_36100);
if(cljs.core.seq_QMARK_(children_36101)){
var seq__35256_36102 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36101));
var chunk__35258_36103 = null;
var count__35259_36104 = (0);
var i__35260_36105 = (0);
while(true){
if((i__35260_36105 < count__35259_36104)){
var child_36106 = chunk__35258_36103.cljs$core$IIndexed$_nth$arity$2(null,i__35260_36105);
if(cljs.core.truth_(child_36106)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36106);


var G__36107 = seq__35256_36102;
var G__36108 = chunk__35258_36103;
var G__36109 = count__35259_36104;
var G__36110 = (i__35260_36105 + (1));
seq__35256_36102 = G__36107;
chunk__35258_36103 = G__36108;
count__35259_36104 = G__36109;
i__35260_36105 = G__36110;
continue;
} else {
var G__36111 = seq__35256_36102;
var G__36112 = chunk__35258_36103;
var G__36113 = count__35259_36104;
var G__36114 = (i__35260_36105 + (1));
seq__35256_36102 = G__36111;
chunk__35258_36103 = G__36112;
count__35259_36104 = G__36113;
i__35260_36105 = G__36114;
continue;
}
} else {
var temp__5753__auto___36115__$1 = cljs.core.seq(seq__35256_36102);
if(temp__5753__auto___36115__$1){
var seq__35256_36116__$1 = temp__5753__auto___36115__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35256_36116__$1)){
var c__4679__auto___36117 = cljs.core.chunk_first(seq__35256_36116__$1);
var G__36118 = cljs.core.chunk_rest(seq__35256_36116__$1);
var G__36119 = c__4679__auto___36117;
var G__36120 = cljs.core.count(c__4679__auto___36117);
var G__36121 = (0);
seq__35256_36102 = G__36118;
chunk__35258_36103 = G__36119;
count__35259_36104 = G__36120;
i__35260_36105 = G__36121;
continue;
} else {
var child_36122 = cljs.core.first(seq__35256_36116__$1);
if(cljs.core.truth_(child_36122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36122);


var G__36123 = cljs.core.next(seq__35256_36116__$1);
var G__36124 = null;
var G__36125 = (0);
var G__36126 = (0);
seq__35256_36102 = G__36123;
chunk__35258_36103 = G__36124;
count__35259_36104 = G__36125;
i__35260_36105 = G__36126;
continue;
} else {
var G__36127 = cljs.core.next(seq__35256_36116__$1);
var G__36128 = null;
var G__36129 = (0);
var G__36130 = (0);
seq__35256_36102 = G__36127;
chunk__35258_36103 = G__36128;
count__35259_36104 = G__36129;
i__35260_36105 = G__36130;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36101);
}


var G__36132 = cljs.core.next(seq__35187_36093__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__35187_36050 = G__36132;
chunk__35188_36051 = G__36133;
count__35189_36052 = G__36134;
i__35190_36053 = G__36135;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35299 = cljs.core.seq(node);
var chunk__35300 = null;
var count__35301 = (0);
var i__35302 = (0);
while(true){
if((i__35302 < count__35301)){
var n = chunk__35300.cljs$core$IIndexed$_nth$arity$2(null,i__35302);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36138 = seq__35299;
var G__36139 = chunk__35300;
var G__36140 = count__35301;
var G__36141 = (i__35302 + (1));
seq__35299 = G__36138;
chunk__35300 = G__36139;
count__35301 = G__36140;
i__35302 = G__36141;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35299);
if(temp__5753__auto__){
var seq__35299__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35299__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35299__$1);
var G__36143 = cljs.core.chunk_rest(seq__35299__$1);
var G__36144 = c__4679__auto__;
var G__36145 = cljs.core.count(c__4679__auto__);
var G__36146 = (0);
seq__35299 = G__36143;
chunk__35300 = G__36144;
count__35301 = G__36145;
i__35302 = G__36146;
continue;
} else {
var n = cljs.core.first(seq__35299__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36147 = cljs.core.next(seq__35299__$1);
var G__36148 = null;
var G__36149 = (0);
var G__36150 = (0);
seq__35299 = G__36147;
chunk__35300 = G__36148;
count__35301 = G__36149;
i__35302 = G__36150;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35317 = arguments.length;
switch (G__35317) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35325 = arguments.length;
switch (G__35325) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36165 = arguments.length;
var i__4865__auto___36166 = (0);
while(true){
if((i__4865__auto___36166 < len__4864__auto___36165)){
args__4870__auto__.push((arguments[i__4865__auto___36166]));

var G__36167 = (i__4865__auto___36166 + (1));
i__4865__auto___36166 = G__36167;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35364_36171 = cljs.core.seq(nodes);
var chunk__35365_36172 = null;
var count__35366_36173 = (0);
var i__35367_36174 = (0);
while(true){
if((i__35367_36174 < count__35366_36173)){
var node_36175 = chunk__35365_36172.cljs$core$IIndexed$_nth$arity$2(null,i__35367_36174);
fragment.appendChild(shadow.dom._to_dom(node_36175));


var G__36176 = seq__35364_36171;
var G__36177 = chunk__35365_36172;
var G__36178 = count__35366_36173;
var G__36179 = (i__35367_36174 + (1));
seq__35364_36171 = G__36176;
chunk__35365_36172 = G__36177;
count__35366_36173 = G__36178;
i__35367_36174 = G__36179;
continue;
} else {
var temp__5753__auto___36180 = cljs.core.seq(seq__35364_36171);
if(temp__5753__auto___36180){
var seq__35364_36181__$1 = temp__5753__auto___36180;
if(cljs.core.chunked_seq_QMARK_(seq__35364_36181__$1)){
var c__4679__auto___36182 = cljs.core.chunk_first(seq__35364_36181__$1);
var G__36183 = cljs.core.chunk_rest(seq__35364_36181__$1);
var G__36184 = c__4679__auto___36182;
var G__36185 = cljs.core.count(c__4679__auto___36182);
var G__36186 = (0);
seq__35364_36171 = G__36183;
chunk__35365_36172 = G__36184;
count__35366_36173 = G__36185;
i__35367_36174 = G__36186;
continue;
} else {
var node_36187 = cljs.core.first(seq__35364_36181__$1);
fragment.appendChild(shadow.dom._to_dom(node_36187));


var G__36188 = cljs.core.next(seq__35364_36181__$1);
var G__36189 = null;
var G__36190 = (0);
var G__36191 = (0);
seq__35364_36171 = G__36188;
chunk__35365_36172 = G__36189;
count__35366_36173 = G__36190;
i__35367_36174 = G__36191;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35360){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35360));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35371_36192 = cljs.core.seq(scripts);
var chunk__35372_36193 = null;
var count__35373_36194 = (0);
var i__35374_36195 = (0);
while(true){
if((i__35374_36195 < count__35373_36194)){
var vec__35383_36196 = chunk__35372_36193.cljs$core$IIndexed$_nth$arity$2(null,i__35374_36195);
var script_tag_36197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383_36196,(0),null);
var script_body_36198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383_36196,(1),null);
eval(script_body_36198);


var G__36199 = seq__35371_36192;
var G__36200 = chunk__35372_36193;
var G__36201 = count__35373_36194;
var G__36202 = (i__35374_36195 + (1));
seq__35371_36192 = G__36199;
chunk__35372_36193 = G__36200;
count__35373_36194 = G__36201;
i__35374_36195 = G__36202;
continue;
} else {
var temp__5753__auto___36203 = cljs.core.seq(seq__35371_36192);
if(temp__5753__auto___36203){
var seq__35371_36204__$1 = temp__5753__auto___36203;
if(cljs.core.chunked_seq_QMARK_(seq__35371_36204__$1)){
var c__4679__auto___36207 = cljs.core.chunk_first(seq__35371_36204__$1);
var G__36208 = cljs.core.chunk_rest(seq__35371_36204__$1);
var G__36209 = c__4679__auto___36207;
var G__36210 = cljs.core.count(c__4679__auto___36207);
var G__36211 = (0);
seq__35371_36192 = G__36208;
chunk__35372_36193 = G__36209;
count__35373_36194 = G__36210;
i__35374_36195 = G__36211;
continue;
} else {
var vec__35390_36212 = cljs.core.first(seq__35371_36204__$1);
var script_tag_36213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390_36212,(0),null);
var script_body_36214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390_36212,(1),null);
eval(script_body_36214);


var G__36220 = cljs.core.next(seq__35371_36204__$1);
var G__36221 = null;
var G__36222 = (0);
var G__36223 = (0);
seq__35371_36192 = G__36220;
chunk__35372_36193 = G__36221;
count__35373_36194 = G__36222;
i__35374_36195 = G__36223;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35396){
var vec__35398 = p__35396;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35398,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35414 = arguments.length;
switch (G__35414) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35440 = cljs.core.seq(style_keys);
var chunk__35441 = null;
var count__35442 = (0);
var i__35443 = (0);
while(true){
if((i__35443 < count__35442)){
var it = chunk__35441.cljs$core$IIndexed$_nth$arity$2(null,i__35443);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36235 = seq__35440;
var G__36236 = chunk__35441;
var G__36237 = count__35442;
var G__36238 = (i__35443 + (1));
seq__35440 = G__36235;
chunk__35441 = G__36236;
count__35442 = G__36237;
i__35443 = G__36238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35440);
if(temp__5753__auto__){
var seq__35440__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35440__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35440__$1);
var G__36240 = cljs.core.chunk_rest(seq__35440__$1);
var G__36241 = c__4679__auto__;
var G__36242 = cljs.core.count(c__4679__auto__);
var G__36243 = (0);
seq__35440 = G__36240;
chunk__35441 = G__36241;
count__35442 = G__36242;
i__35443 = G__36243;
continue;
} else {
var it = cljs.core.first(seq__35440__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36248 = cljs.core.next(seq__35440__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__35440 = G__36248;
chunk__35441 = G__36249;
count__35442 = G__36250;
i__35443 = G__36251;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35452,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35468 = k35452;
var G__35468__$1 = (((G__35468 instanceof cljs.core.Keyword))?G__35468.fqn:null);
switch (G__35468__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35452,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35475){
var vec__35477 = p__35475;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35451){
var self__ = this;
var G__35451__$1 = this;
return (new cljs.core.RecordIter((0),G__35451__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35454,other35455){
var self__ = this;
var this35454__$1 = this;
return (((!((other35455 == null)))) && ((((this35454__$1.constructor === other35455.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35454__$1.x,other35455.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35454__$1.y,other35455.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35454__$1.__extmap,other35455.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35452){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35511 = k35452;
var G__35511__$1 = (((G__35511 instanceof cljs.core.Keyword))?G__35511.fqn:null);
switch (G__35511__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35452);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35451){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35521 = cljs.core.keyword_identical_QMARK_;
var expr__35522 = k__4511__auto__;
if(cljs.core.truth_((pred__35521.cljs$core$IFn$_invoke$arity$2 ? pred__35521.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35522) : pred__35521.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35522)))){
return (new shadow.dom.Coordinate(G__35451,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35521.cljs$core$IFn$_invoke$arity$2 ? pred__35521.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35522) : pred__35521.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35522)))){
return (new shadow.dom.Coordinate(self__.x,G__35451,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35451),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35451){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35451,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35458){
var extmap__4542__auto__ = (function (){var G__35539 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35458,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35458)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35539);
} else {
return G__35539;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35458),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35458),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35565,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35607 = k35565;
var G__35607__$1 = (((G__35607 instanceof cljs.core.Keyword))?G__35607.fqn:null);
switch (G__35607__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35565,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35620){
var vec__35623 = p__35620;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35623,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35564){
var self__ = this;
var G__35564__$1 = this;
return (new cljs.core.RecordIter((0),G__35564__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35566,other35567){
var self__ = this;
var this35566__$1 = this;
return (((!((other35567 == null)))) && ((((this35566__$1.constructor === other35567.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35566__$1.w,other35567.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35566__$1.h,other35567.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35566__$1.__extmap,other35567.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35565){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35668 = k35565;
var G__35668__$1 = (((G__35668 instanceof cljs.core.Keyword))?G__35668.fqn:null);
switch (G__35668__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35565);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35564){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35674 = cljs.core.keyword_identical_QMARK_;
var expr__35675 = k__4511__auto__;
if(cljs.core.truth_((pred__35674.cljs$core$IFn$_invoke$arity$2 ? pred__35674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35675) : pred__35674.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35675)))){
return (new shadow.dom.Size(G__35564,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35674.cljs$core$IFn$_invoke$arity$2 ? pred__35674.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35675) : pred__35674.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35675)))){
return (new shadow.dom.Size(self__.w,G__35564,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35564),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35564){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35564,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35574){
var extmap__4542__auto__ = (function (){var G__35679 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35574,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35574)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35679);
} else {
return G__35679;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35574),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35574),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36284 = (i + (1));
var G__36285 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36284;
ret = G__36285;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35698){
var vec__35700 = p__35698;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35707 = arguments.length;
switch (G__35707) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36292 = ps;
var G__36293 = (i + (1));
el__$1 = G__36292;
i = G__36293;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35725 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35733_36300 = cljs.core.seq(props);
var chunk__35734_36301 = null;
var count__35735_36302 = (0);
var i__35736_36303 = (0);
while(true){
if((i__35736_36303 < count__35735_36302)){
var vec__35766_36304 = chunk__35734_36301.cljs$core$IIndexed$_nth$arity$2(null,i__35736_36303);
var k_36305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766_36304,(0),null);
var v_36306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35766_36304,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36305);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36305),v_36306);


var G__36307 = seq__35733_36300;
var G__36308 = chunk__35734_36301;
var G__36309 = count__35735_36302;
var G__36310 = (i__35736_36303 + (1));
seq__35733_36300 = G__36307;
chunk__35734_36301 = G__36308;
count__35735_36302 = G__36309;
i__35736_36303 = G__36310;
continue;
} else {
var temp__5753__auto___36311 = cljs.core.seq(seq__35733_36300);
if(temp__5753__auto___36311){
var seq__35733_36312__$1 = temp__5753__auto___36311;
if(cljs.core.chunked_seq_QMARK_(seq__35733_36312__$1)){
var c__4679__auto___36313 = cljs.core.chunk_first(seq__35733_36312__$1);
var G__36314 = cljs.core.chunk_rest(seq__35733_36312__$1);
var G__36315 = c__4679__auto___36313;
var G__36316 = cljs.core.count(c__4679__auto___36313);
var G__36317 = (0);
seq__35733_36300 = G__36314;
chunk__35734_36301 = G__36315;
count__35735_36302 = G__36316;
i__35736_36303 = G__36317;
continue;
} else {
var vec__35778_36318 = cljs.core.first(seq__35733_36312__$1);
var k_36319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778_36318,(0),null);
var v_36320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778_36318,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36319);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36319),v_36320);


var G__36321 = cljs.core.next(seq__35733_36312__$1);
var G__36322 = null;
var G__36323 = (0);
var G__36324 = (0);
seq__35733_36300 = G__36321;
chunk__35734_36301 = G__36322;
count__35735_36302 = G__36323;
i__35736_36303 = G__36324;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35782 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35782,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35782,(1),null);
var seq__35785_36326 = cljs.core.seq(node_children);
var chunk__35787_36327 = null;
var count__35788_36328 = (0);
var i__35789_36329 = (0);
while(true){
if((i__35789_36329 < count__35788_36328)){
var child_struct_36331 = chunk__35787_36327.cljs$core$IIndexed$_nth$arity$2(null,i__35789_36329);
if((!((child_struct_36331 == null)))){
if(typeof child_struct_36331 === 'string'){
var text_36332 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36332),child_struct_36331].join(''));
} else {
var children_36333 = shadow.dom.svg_node(child_struct_36331);
if(cljs.core.seq_QMARK_(children_36333)){
var seq__35879_36334 = cljs.core.seq(children_36333);
var chunk__35881_36335 = null;
var count__35882_36336 = (0);
var i__35883_36337 = (0);
while(true){
if((i__35883_36337 < count__35882_36336)){
var child_36338 = chunk__35881_36335.cljs$core$IIndexed$_nth$arity$2(null,i__35883_36337);
if(cljs.core.truth_(child_36338)){
node.appendChild(child_36338);


var G__36339 = seq__35879_36334;
var G__36340 = chunk__35881_36335;
var G__36341 = count__35882_36336;
var G__36342 = (i__35883_36337 + (1));
seq__35879_36334 = G__36339;
chunk__35881_36335 = G__36340;
count__35882_36336 = G__36341;
i__35883_36337 = G__36342;
continue;
} else {
var G__36343 = seq__35879_36334;
var G__36344 = chunk__35881_36335;
var G__36345 = count__35882_36336;
var G__36346 = (i__35883_36337 + (1));
seq__35879_36334 = G__36343;
chunk__35881_36335 = G__36344;
count__35882_36336 = G__36345;
i__35883_36337 = G__36346;
continue;
}
} else {
var temp__5753__auto___36347 = cljs.core.seq(seq__35879_36334);
if(temp__5753__auto___36347){
var seq__35879_36348__$1 = temp__5753__auto___36347;
if(cljs.core.chunked_seq_QMARK_(seq__35879_36348__$1)){
var c__4679__auto___36349 = cljs.core.chunk_first(seq__35879_36348__$1);
var G__36350 = cljs.core.chunk_rest(seq__35879_36348__$1);
var G__36351 = c__4679__auto___36349;
var G__36352 = cljs.core.count(c__4679__auto___36349);
var G__36353 = (0);
seq__35879_36334 = G__36350;
chunk__35881_36335 = G__36351;
count__35882_36336 = G__36352;
i__35883_36337 = G__36353;
continue;
} else {
var child_36354 = cljs.core.first(seq__35879_36348__$1);
if(cljs.core.truth_(child_36354)){
node.appendChild(child_36354);


var G__36355 = cljs.core.next(seq__35879_36348__$1);
var G__36356 = null;
var G__36357 = (0);
var G__36358 = (0);
seq__35879_36334 = G__36355;
chunk__35881_36335 = G__36356;
count__35882_36336 = G__36357;
i__35883_36337 = G__36358;
continue;
} else {
var G__36359 = cljs.core.next(seq__35879_36348__$1);
var G__36360 = null;
var G__36361 = (0);
var G__36362 = (0);
seq__35879_36334 = G__36359;
chunk__35881_36335 = G__36360;
count__35882_36336 = G__36361;
i__35883_36337 = G__36362;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36333);
}
}


var G__36363 = seq__35785_36326;
var G__36364 = chunk__35787_36327;
var G__36365 = count__35788_36328;
var G__36366 = (i__35789_36329 + (1));
seq__35785_36326 = G__36363;
chunk__35787_36327 = G__36364;
count__35788_36328 = G__36365;
i__35789_36329 = G__36366;
continue;
} else {
var G__36367 = seq__35785_36326;
var G__36368 = chunk__35787_36327;
var G__36369 = count__35788_36328;
var G__36370 = (i__35789_36329 + (1));
seq__35785_36326 = G__36367;
chunk__35787_36327 = G__36368;
count__35788_36328 = G__36369;
i__35789_36329 = G__36370;
continue;
}
} else {
var temp__5753__auto___36371 = cljs.core.seq(seq__35785_36326);
if(temp__5753__auto___36371){
var seq__35785_36372__$1 = temp__5753__auto___36371;
if(cljs.core.chunked_seq_QMARK_(seq__35785_36372__$1)){
var c__4679__auto___36373 = cljs.core.chunk_first(seq__35785_36372__$1);
var G__36374 = cljs.core.chunk_rest(seq__35785_36372__$1);
var G__36375 = c__4679__auto___36373;
var G__36376 = cljs.core.count(c__4679__auto___36373);
var G__36377 = (0);
seq__35785_36326 = G__36374;
chunk__35787_36327 = G__36375;
count__35788_36328 = G__36376;
i__35789_36329 = G__36377;
continue;
} else {
var child_struct_36378 = cljs.core.first(seq__35785_36372__$1);
if((!((child_struct_36378 == null)))){
if(typeof child_struct_36378 === 'string'){
var text_36379 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36379),child_struct_36378].join(''));
} else {
var children_36380 = shadow.dom.svg_node(child_struct_36378);
if(cljs.core.seq_QMARK_(children_36380)){
var seq__35887_36381 = cljs.core.seq(children_36380);
var chunk__35889_36382 = null;
var count__35890_36383 = (0);
var i__35891_36384 = (0);
while(true){
if((i__35891_36384 < count__35890_36383)){
var child_36385 = chunk__35889_36382.cljs$core$IIndexed$_nth$arity$2(null,i__35891_36384);
if(cljs.core.truth_(child_36385)){
node.appendChild(child_36385);


var G__36386 = seq__35887_36381;
var G__36387 = chunk__35889_36382;
var G__36388 = count__35890_36383;
var G__36389 = (i__35891_36384 + (1));
seq__35887_36381 = G__36386;
chunk__35889_36382 = G__36387;
count__35890_36383 = G__36388;
i__35891_36384 = G__36389;
continue;
} else {
var G__36390 = seq__35887_36381;
var G__36391 = chunk__35889_36382;
var G__36392 = count__35890_36383;
var G__36393 = (i__35891_36384 + (1));
seq__35887_36381 = G__36390;
chunk__35889_36382 = G__36391;
count__35890_36383 = G__36392;
i__35891_36384 = G__36393;
continue;
}
} else {
var temp__5753__auto___36394__$1 = cljs.core.seq(seq__35887_36381);
if(temp__5753__auto___36394__$1){
var seq__35887_36395__$1 = temp__5753__auto___36394__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35887_36395__$1)){
var c__4679__auto___36396 = cljs.core.chunk_first(seq__35887_36395__$1);
var G__36397 = cljs.core.chunk_rest(seq__35887_36395__$1);
var G__36398 = c__4679__auto___36396;
var G__36399 = cljs.core.count(c__4679__auto___36396);
var G__36400 = (0);
seq__35887_36381 = G__36397;
chunk__35889_36382 = G__36398;
count__35890_36383 = G__36399;
i__35891_36384 = G__36400;
continue;
} else {
var child_36401 = cljs.core.first(seq__35887_36395__$1);
if(cljs.core.truth_(child_36401)){
node.appendChild(child_36401);


var G__36402 = cljs.core.next(seq__35887_36395__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__35887_36381 = G__36402;
chunk__35889_36382 = G__36403;
count__35890_36383 = G__36404;
i__35891_36384 = G__36405;
continue;
} else {
var G__36406 = cljs.core.next(seq__35887_36395__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__35887_36381 = G__36406;
chunk__35889_36382 = G__36407;
count__35890_36383 = G__36408;
i__35891_36384 = G__36409;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36380);
}
}


var G__36410 = cljs.core.next(seq__35785_36372__$1);
var G__36411 = null;
var G__36412 = (0);
var G__36413 = (0);
seq__35785_36326 = G__36410;
chunk__35787_36327 = G__36411;
count__35788_36328 = G__36412;
i__35789_36329 = G__36413;
continue;
} else {
var G__36414 = cljs.core.next(seq__35785_36372__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__35785_36326 = G__36414;
chunk__35787_36327 = G__36415;
count__35788_36328 = G__36416;
i__35789_36329 = G__36417;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36418 = arguments.length;
var i__4865__auto___36419 = (0);
while(true){
if((i__4865__auto___36419 < len__4864__auto___36418)){
args__4870__auto__.push((arguments[i__4865__auto___36419]));

var G__36420 = (i__4865__auto___36419 + (1));
i__4865__auto___36419 = G__36420;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35902){
var G__35903 = cljs.core.first(seq35902);
var seq35902__$1 = cljs.core.next(seq35902);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35903,seq35902__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35907 = arguments.length;
switch (G__35907) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32401__auto___36425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_35916){
var state_val_35917 = (state_35916[(1)]);
if((state_val_35917 === (1))){
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35916__$1,(2),once_or_cleanup);
} else {
if((state_val_35917 === (2))){
var inst_35913 = (state_35916[(2)]);
var inst_35914 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35916__$1 = (function (){var statearr_35919 = state_35916;
(statearr_35919[(7)] = inst_35913);

return statearr_35919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35916__$1,inst_35914);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32107__auto__ = null;
var shadow$dom$state_machine__32107__auto____0 = (function (){
var statearr_35920 = [null,null,null,null,null,null,null,null];
(statearr_35920[(0)] = shadow$dom$state_machine__32107__auto__);

(statearr_35920[(1)] = (1));

return statearr_35920;
});
var shadow$dom$state_machine__32107__auto____1 = (function (state_35916){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_35916);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e35921){var ex__32110__auto__ = e35921;
var statearr_35922_36435 = state_35916;
(statearr_35922_36435[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_35916[(4)]))){
var statearr_35926_36436 = state_35916;
(statearr_35926_36436[(1)] = cljs.core.first((state_35916[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36437 = state_35916;
state_35916 = G__36437;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
shadow$dom$state_machine__32107__auto__ = function(state_35916){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32107__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32107__auto____1.call(this,state_35916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32107__auto____0;
shadow$dom$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32107__auto____1;
return shadow$dom$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_35928 = f__32402__auto__();
(statearr_35928[(6)] = c__32401__auto___36425);

return statearr_35928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
