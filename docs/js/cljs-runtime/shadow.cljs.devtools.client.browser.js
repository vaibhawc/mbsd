goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___37570 = arguments.length;
var i__4865__auto___37571 = (0);
while(true){
if((i__4865__auto___37571 < len__4864__auto___37570)){
args__4870__auto__.push((arguments[i__4865__auto___37571]));

var G__37572 = (i__4865__auto___37571 + (1));
i__4865__auto___37571 = G__37572;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37413){
var G__37414 = cljs.core.first(seq37413);
var seq37413__$1 = cljs.core.next(seq37413);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37414,seq37413__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37415 = cljs.core.seq(sources);
var chunk__37416 = null;
var count__37417 = (0);
var i__37418 = (0);
while(true){
if((i__37418 < count__37417)){
var map__37429 = chunk__37416.cljs$core$IIndexed$_nth$arity$2(null,i__37418);
var map__37429__$1 = cljs.core.__destructure_map(map__37429);
var src = map__37429__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37429__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37430){var e_37575 = e37430;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37575);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37575.message)].join('')));
}

var G__37576 = seq__37415;
var G__37577 = chunk__37416;
var G__37578 = count__37417;
var G__37579 = (i__37418 + (1));
seq__37415 = G__37576;
chunk__37416 = G__37577;
count__37417 = G__37578;
i__37418 = G__37579;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37415);
if(temp__5753__auto__){
var seq__37415__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37415__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37415__$1);
var G__37581 = cljs.core.chunk_rest(seq__37415__$1);
var G__37582 = c__4679__auto__;
var G__37583 = cljs.core.count(c__4679__auto__);
var G__37584 = (0);
seq__37415 = G__37581;
chunk__37416 = G__37582;
count__37417 = G__37583;
i__37418 = G__37584;
continue;
} else {
var map__37431 = cljs.core.first(seq__37415__$1);
var map__37431__$1 = cljs.core.__destructure_map(map__37431);
var src = map__37431__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37432){var e_37586 = e37432;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37586);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37586.message)].join('')));
}

var G__37587 = cljs.core.next(seq__37415__$1);
var G__37588 = null;
var G__37589 = (0);
var G__37590 = (0);
seq__37415 = G__37587;
chunk__37416 = G__37588;
count__37417 = G__37589;
i__37418 = G__37590;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37433 = cljs.core.seq(js_requires);
var chunk__37434 = null;
var count__37435 = (0);
var i__37436 = (0);
while(true){
if((i__37436 < count__37435)){
var js_ns = chunk__37434.cljs$core$IIndexed$_nth$arity$2(null,i__37436);
var require_str_37591 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37591);


var G__37592 = seq__37433;
var G__37593 = chunk__37434;
var G__37594 = count__37435;
var G__37595 = (i__37436 + (1));
seq__37433 = G__37592;
chunk__37434 = G__37593;
count__37435 = G__37594;
i__37436 = G__37595;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37433);
if(temp__5753__auto__){
var seq__37433__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37433__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37433__$1);
var G__37596 = cljs.core.chunk_rest(seq__37433__$1);
var G__37597 = c__4679__auto__;
var G__37598 = cljs.core.count(c__4679__auto__);
var G__37599 = (0);
seq__37433 = G__37596;
chunk__37434 = G__37597;
count__37435 = G__37598;
i__37436 = G__37599;
continue;
} else {
var js_ns = cljs.core.first(seq__37433__$1);
var require_str_37600 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37600);


var G__37601 = cljs.core.next(seq__37433__$1);
var G__37602 = null;
var G__37603 = (0);
var G__37604 = (0);
seq__37433 = G__37601;
chunk__37434 = G__37602;
count__37435 = G__37603;
i__37436 = G__37604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37438){
var map__37439 = p__37438;
var map__37439__$1 = cljs.core.__destructure_map(map__37439);
var msg = map__37439__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37439__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37440(s__37441){
return (new cljs.core.LazySeq(null,(function (){
var s__37441__$1 = s__37441;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37441__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37446 = cljs.core.first(xs__6308__auto__);
var map__37446__$1 = cljs.core.__destructure_map(map__37446);
var src = map__37446__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37446__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37446__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37441__$1,map__37446,map__37446__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37439,map__37439__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37440_$_iter__37442(s__37443){
return (new cljs.core.LazySeq(null,((function (s__37441__$1,map__37446,map__37446__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37439,map__37439__$1,msg,info,reload_info){
return (function (){
var s__37443__$1 = s__37443;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37443__$1);
if(temp__5753__auto____$1){
var s__37443__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37443__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37443__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37445 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37444 = (0);
while(true){
if((i__37444 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37444);
cljs.core.chunk_append(b__37445,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37611 = (i__37444 + (1));
i__37444 = G__37611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37445),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37440_$_iter__37442(cljs.core.chunk_rest(s__37443__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37445),null);
}
} else {
var warning = cljs.core.first(s__37443__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37440_$_iter__37442(cljs.core.rest(s__37443__$2)));
}
} else {
return null;
}
break;
}
});})(s__37441__$1,map__37446,map__37446__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37439,map__37439__$1,msg,info,reload_info))
,null,null));
});})(s__37441__$1,map__37446,map__37446__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37439,map__37439__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37440(cljs.core.rest(s__37441__$1)));
} else {
var G__37612 = cljs.core.rest(s__37441__$1);
s__37441__$1 = G__37612;
continue;
}
} else {
var G__37613 = cljs.core.rest(s__37441__$1);
s__37441__$1 = G__37613;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37448_37614 = cljs.core.seq(warnings);
var chunk__37449_37615 = null;
var count__37450_37616 = (0);
var i__37451_37617 = (0);
while(true){
if((i__37451_37617 < count__37450_37616)){
var map__37454_37619 = chunk__37449_37615.cljs$core$IIndexed$_nth$arity$2(null,i__37451_37617);
var map__37454_37620__$1 = cljs.core.__destructure_map(map__37454_37619);
var w_37621 = map__37454_37620__$1;
var msg_37622__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454_37620__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454_37620__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454_37620__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454_37620__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37625)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37623),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37624),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37622__$1)].join(''));


var G__37626 = seq__37448_37614;
var G__37627 = chunk__37449_37615;
var G__37628 = count__37450_37616;
var G__37629 = (i__37451_37617 + (1));
seq__37448_37614 = G__37626;
chunk__37449_37615 = G__37627;
count__37450_37616 = G__37628;
i__37451_37617 = G__37629;
continue;
} else {
var temp__5753__auto___37630 = cljs.core.seq(seq__37448_37614);
if(temp__5753__auto___37630){
var seq__37448_37631__$1 = temp__5753__auto___37630;
if(cljs.core.chunked_seq_QMARK_(seq__37448_37631__$1)){
var c__4679__auto___37632 = cljs.core.chunk_first(seq__37448_37631__$1);
var G__37633 = cljs.core.chunk_rest(seq__37448_37631__$1);
var G__37634 = c__4679__auto___37632;
var G__37635 = cljs.core.count(c__4679__auto___37632);
var G__37636 = (0);
seq__37448_37614 = G__37633;
chunk__37449_37615 = G__37634;
count__37450_37616 = G__37635;
i__37451_37617 = G__37636;
continue;
} else {
var map__37455_37637 = cljs.core.first(seq__37448_37631__$1);
var map__37455_37638__$1 = cljs.core.__destructure_map(map__37455_37637);
var w_37639 = map__37455_37638__$1;
var msg_37640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37455_37638__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37455_37638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37455_37638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37455_37638__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37643)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37641),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37642),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37640__$1)].join(''));


var G__37644 = cljs.core.next(seq__37448_37631__$1);
var G__37645 = null;
var G__37646 = (0);
var G__37647 = (0);
seq__37448_37614 = G__37644;
chunk__37449_37615 = G__37645;
count__37450_37616 = G__37646;
i__37451_37617 = G__37647;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37437_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37437_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37456){
var map__37457 = p__37456;
var map__37457__$1 = cljs.core.__destructure_map(map__37457);
var msg = map__37457__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37457__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37458 = cljs.core.seq(updates);
var chunk__37460 = null;
var count__37461 = (0);
var i__37462 = (0);
while(true){
if((i__37462 < count__37461)){
var path = chunk__37460.cljs$core$IIndexed$_nth$arity$2(null,i__37462);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37500_37652 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37504_37653 = null;
var count__37505_37654 = (0);
var i__37506_37655 = (0);
while(true){
if((i__37506_37655 < count__37505_37654)){
var node_37656 = chunk__37504_37653.cljs$core$IIndexed$_nth$arity$2(null,i__37506_37655);
if(cljs.core.not(node_37656.shadow$old)){
var path_match_37657 = shadow.cljs.devtools.client.browser.match_paths(node_37656.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37657)){
var new_link_37658 = (function (){var G__37512 = node_37656.cloneNode(true);
G__37512.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37657),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37512;
})();
(node_37656.shadow$old = true);

(new_link_37658.onload = ((function (seq__37500_37652,chunk__37504_37653,count__37505_37654,i__37506_37655,seq__37458,chunk__37460,count__37461,i__37462,new_link_37658,path_match_37657,node_37656,path,map__37457,map__37457__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37656);
});})(seq__37500_37652,chunk__37504_37653,count__37505_37654,i__37506_37655,seq__37458,chunk__37460,count__37461,i__37462,new_link_37658,path_match_37657,node_37656,path,map__37457,map__37457__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37657], 0));

goog.dom.insertSiblingAfter(new_link_37658,node_37656);


var G__37659 = seq__37500_37652;
var G__37660 = chunk__37504_37653;
var G__37661 = count__37505_37654;
var G__37662 = (i__37506_37655 + (1));
seq__37500_37652 = G__37659;
chunk__37504_37653 = G__37660;
count__37505_37654 = G__37661;
i__37506_37655 = G__37662;
continue;
} else {
var G__37663 = seq__37500_37652;
var G__37664 = chunk__37504_37653;
var G__37665 = count__37505_37654;
var G__37666 = (i__37506_37655 + (1));
seq__37500_37652 = G__37663;
chunk__37504_37653 = G__37664;
count__37505_37654 = G__37665;
i__37506_37655 = G__37666;
continue;
}
} else {
var G__37667 = seq__37500_37652;
var G__37668 = chunk__37504_37653;
var G__37669 = count__37505_37654;
var G__37670 = (i__37506_37655 + (1));
seq__37500_37652 = G__37667;
chunk__37504_37653 = G__37668;
count__37505_37654 = G__37669;
i__37506_37655 = G__37670;
continue;
}
} else {
var temp__5753__auto___37671 = cljs.core.seq(seq__37500_37652);
if(temp__5753__auto___37671){
var seq__37500_37672__$1 = temp__5753__auto___37671;
if(cljs.core.chunked_seq_QMARK_(seq__37500_37672__$1)){
var c__4679__auto___37673 = cljs.core.chunk_first(seq__37500_37672__$1);
var G__37674 = cljs.core.chunk_rest(seq__37500_37672__$1);
var G__37675 = c__4679__auto___37673;
var G__37676 = cljs.core.count(c__4679__auto___37673);
var G__37677 = (0);
seq__37500_37652 = G__37674;
chunk__37504_37653 = G__37675;
count__37505_37654 = G__37676;
i__37506_37655 = G__37677;
continue;
} else {
var node_37678 = cljs.core.first(seq__37500_37672__$1);
if(cljs.core.not(node_37678.shadow$old)){
var path_match_37679 = shadow.cljs.devtools.client.browser.match_paths(node_37678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37679)){
var new_link_37680 = (function (){var G__37513 = node_37678.cloneNode(true);
G__37513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37513;
})();
(node_37678.shadow$old = true);

(new_link_37680.onload = ((function (seq__37500_37652,chunk__37504_37653,count__37505_37654,i__37506_37655,seq__37458,chunk__37460,count__37461,i__37462,new_link_37680,path_match_37679,node_37678,seq__37500_37672__$1,temp__5753__auto___37671,path,map__37457,map__37457__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37678);
});})(seq__37500_37652,chunk__37504_37653,count__37505_37654,i__37506_37655,seq__37458,chunk__37460,count__37461,i__37462,new_link_37680,path_match_37679,node_37678,seq__37500_37672__$1,temp__5753__auto___37671,path,map__37457,map__37457__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37679], 0));

goog.dom.insertSiblingAfter(new_link_37680,node_37678);


var G__37681 = cljs.core.next(seq__37500_37672__$1);
var G__37682 = null;
var G__37683 = (0);
var G__37684 = (0);
seq__37500_37652 = G__37681;
chunk__37504_37653 = G__37682;
count__37505_37654 = G__37683;
i__37506_37655 = G__37684;
continue;
} else {
var G__37685 = cljs.core.next(seq__37500_37672__$1);
var G__37686 = null;
var G__37687 = (0);
var G__37688 = (0);
seq__37500_37652 = G__37685;
chunk__37504_37653 = G__37686;
count__37505_37654 = G__37687;
i__37506_37655 = G__37688;
continue;
}
} else {
var G__37689 = cljs.core.next(seq__37500_37672__$1);
var G__37690 = null;
var G__37691 = (0);
var G__37692 = (0);
seq__37500_37652 = G__37689;
chunk__37504_37653 = G__37690;
count__37505_37654 = G__37691;
i__37506_37655 = G__37692;
continue;
}
}
} else {
}
}
break;
}


var G__37693 = seq__37458;
var G__37694 = chunk__37460;
var G__37695 = count__37461;
var G__37696 = (i__37462 + (1));
seq__37458 = G__37693;
chunk__37460 = G__37694;
count__37461 = G__37695;
i__37462 = G__37696;
continue;
} else {
var G__37697 = seq__37458;
var G__37698 = chunk__37460;
var G__37699 = count__37461;
var G__37700 = (i__37462 + (1));
seq__37458 = G__37697;
chunk__37460 = G__37698;
count__37461 = G__37699;
i__37462 = G__37700;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37458);
if(temp__5753__auto__){
var seq__37458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37458__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37458__$1);
var G__37701 = cljs.core.chunk_rest(seq__37458__$1);
var G__37702 = c__4679__auto__;
var G__37703 = cljs.core.count(c__4679__auto__);
var G__37704 = (0);
seq__37458 = G__37701;
chunk__37460 = G__37702;
count__37461 = G__37703;
i__37462 = G__37704;
continue;
} else {
var path = cljs.core.first(seq__37458__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37519_37705 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37523_37706 = null;
var count__37524_37707 = (0);
var i__37525_37708 = (0);
while(true){
if((i__37525_37708 < count__37524_37707)){
var node_37709 = chunk__37523_37706.cljs$core$IIndexed$_nth$arity$2(null,i__37525_37708);
if(cljs.core.not(node_37709.shadow$old)){
var path_match_37710 = shadow.cljs.devtools.client.browser.match_paths(node_37709.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37710)){
var new_link_37711 = (function (){var G__37533 = node_37709.cloneNode(true);
G__37533.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37710),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37533;
})();
(node_37709.shadow$old = true);

(new_link_37711.onload = ((function (seq__37519_37705,chunk__37523_37706,count__37524_37707,i__37525_37708,seq__37458,chunk__37460,count__37461,i__37462,new_link_37711,path_match_37710,node_37709,path,seq__37458__$1,temp__5753__auto__,map__37457,map__37457__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37709);
});})(seq__37519_37705,chunk__37523_37706,count__37524_37707,i__37525_37708,seq__37458,chunk__37460,count__37461,i__37462,new_link_37711,path_match_37710,node_37709,path,seq__37458__$1,temp__5753__auto__,map__37457,map__37457__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37710], 0));

goog.dom.insertSiblingAfter(new_link_37711,node_37709);


var G__37712 = seq__37519_37705;
var G__37713 = chunk__37523_37706;
var G__37714 = count__37524_37707;
var G__37715 = (i__37525_37708 + (1));
seq__37519_37705 = G__37712;
chunk__37523_37706 = G__37713;
count__37524_37707 = G__37714;
i__37525_37708 = G__37715;
continue;
} else {
var G__37716 = seq__37519_37705;
var G__37717 = chunk__37523_37706;
var G__37718 = count__37524_37707;
var G__37719 = (i__37525_37708 + (1));
seq__37519_37705 = G__37716;
chunk__37523_37706 = G__37717;
count__37524_37707 = G__37718;
i__37525_37708 = G__37719;
continue;
}
} else {
var G__37720 = seq__37519_37705;
var G__37721 = chunk__37523_37706;
var G__37722 = count__37524_37707;
var G__37723 = (i__37525_37708 + (1));
seq__37519_37705 = G__37720;
chunk__37523_37706 = G__37721;
count__37524_37707 = G__37722;
i__37525_37708 = G__37723;
continue;
}
} else {
var temp__5753__auto___37724__$1 = cljs.core.seq(seq__37519_37705);
if(temp__5753__auto___37724__$1){
var seq__37519_37725__$1 = temp__5753__auto___37724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37519_37725__$1)){
var c__4679__auto___37726 = cljs.core.chunk_first(seq__37519_37725__$1);
var G__37727 = cljs.core.chunk_rest(seq__37519_37725__$1);
var G__37728 = c__4679__auto___37726;
var G__37729 = cljs.core.count(c__4679__auto___37726);
var G__37730 = (0);
seq__37519_37705 = G__37727;
chunk__37523_37706 = G__37728;
count__37524_37707 = G__37729;
i__37525_37708 = G__37730;
continue;
} else {
var node_37731 = cljs.core.first(seq__37519_37725__$1);
if(cljs.core.not(node_37731.shadow$old)){
var path_match_37732 = shadow.cljs.devtools.client.browser.match_paths(node_37731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37732)){
var new_link_37733 = (function (){var G__37536 = node_37731.cloneNode(true);
G__37536.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37536;
})();
(node_37731.shadow$old = true);

(new_link_37733.onload = ((function (seq__37519_37705,chunk__37523_37706,count__37524_37707,i__37525_37708,seq__37458,chunk__37460,count__37461,i__37462,new_link_37733,path_match_37732,node_37731,seq__37519_37725__$1,temp__5753__auto___37724__$1,path,seq__37458__$1,temp__5753__auto__,map__37457,map__37457__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37731);
});})(seq__37519_37705,chunk__37523_37706,count__37524_37707,i__37525_37708,seq__37458,chunk__37460,count__37461,i__37462,new_link_37733,path_match_37732,node_37731,seq__37519_37725__$1,temp__5753__auto___37724__$1,path,seq__37458__$1,temp__5753__auto__,map__37457,map__37457__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37732], 0));

goog.dom.insertSiblingAfter(new_link_37733,node_37731);


var G__37734 = cljs.core.next(seq__37519_37725__$1);
var G__37735 = null;
var G__37736 = (0);
var G__37737 = (0);
seq__37519_37705 = G__37734;
chunk__37523_37706 = G__37735;
count__37524_37707 = G__37736;
i__37525_37708 = G__37737;
continue;
} else {
var G__37738 = cljs.core.next(seq__37519_37725__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37519_37705 = G__37738;
chunk__37523_37706 = G__37739;
count__37524_37707 = G__37740;
i__37525_37708 = G__37741;
continue;
}
} else {
var G__37742 = cljs.core.next(seq__37519_37725__$1);
var G__37743 = null;
var G__37744 = (0);
var G__37745 = (0);
seq__37519_37705 = G__37742;
chunk__37523_37706 = G__37743;
count__37524_37707 = G__37744;
i__37525_37708 = G__37745;
continue;
}
}
} else {
}
}
break;
}


var G__37746 = cljs.core.next(seq__37458__$1);
var G__37747 = null;
var G__37748 = (0);
var G__37749 = (0);
seq__37458 = G__37746;
chunk__37460 = G__37747;
count__37461 = G__37748;
i__37462 = G__37749;
continue;
} else {
var G__37750 = cljs.core.next(seq__37458__$1);
var G__37751 = null;
var G__37752 = (0);
var G__37753 = (0);
seq__37458 = G__37750;
chunk__37460 = G__37751;
count__37461 = G__37752;
i__37462 = G__37753;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37539){
var map__37540 = p__37539;
var map__37540__$1 = cljs.core.__destructure_map(map__37540);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37540__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37548){
var map__37549 = p__37548;
var map__37549__$1 = cljs.core.__destructure_map(map__37549);
var _ = map__37549__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37550,done,error){
var map__37551 = p__37550;
var map__37551__$1 = cljs.core.__destructure_map(map__37551);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37553,done,error){
var map__37554 = p__37553;
var map__37554__$1 = cljs.core.__destructure_map(map__37554);
var msg = map__37554__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37555){
var map__37556 = p__37555;
var map__37556__$1 = cljs.core.__destructure_map(map__37556);
var src = map__37556__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37557 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37557) : done.call(null,G__37557));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37558){
var map__37559 = p__37558;
var map__37559__$1 = cljs.core.__destructure_map(map__37559);
var msg__$1 = map__37559__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37560){var ex = e37560;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37562){
var map__37563 = p__37562;
var map__37563__$1 = cljs.core.__destructure_map(map__37563);
var env = map__37563__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37563__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37564){
var map__37565 = p__37564;
var map__37565__$1 = cljs.core.__destructure_map(map__37565);
var msg = map__37565__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37566){
var map__37567 = p__37566;
var map__37567__$1 = cljs.core.__destructure_map(map__37567);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37568){
var map__37569 = p__37568;
var map__37569__$1 = cljs.core.__destructure_map(map__37569);
var svc = map__37569__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37569__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
