goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35485){
var map__35491 = p__35485;
var map__35491__$1 = cljs.core.__destructure_map(map__35491);
var m = map__35491__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35491__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35516_35791 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35518_35792 = null;
var count__35519_35793 = (0);
var i__35520_35794 = (0);
while(true){
if((i__35520_35794 < count__35519_35793)){
var f_35801 = chunk__35518_35792.cljs$core$IIndexed$_nth$arity$2(null,i__35520_35794);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35801], 0));


var G__35802 = seq__35516_35791;
var G__35803 = chunk__35518_35792;
var G__35804 = count__35519_35793;
var G__35805 = (i__35520_35794 + (1));
seq__35516_35791 = G__35802;
chunk__35518_35792 = G__35803;
count__35519_35793 = G__35804;
i__35520_35794 = G__35805;
continue;
} else {
var temp__5753__auto___35806 = cljs.core.seq(seq__35516_35791);
if(temp__5753__auto___35806){
var seq__35516_35807__$1 = temp__5753__auto___35806;
if(cljs.core.chunked_seq_QMARK_(seq__35516_35807__$1)){
var c__4679__auto___35808 = cljs.core.chunk_first(seq__35516_35807__$1);
var G__35809 = cljs.core.chunk_rest(seq__35516_35807__$1);
var G__35810 = c__4679__auto___35808;
var G__35811 = cljs.core.count(c__4679__auto___35808);
var G__35812 = (0);
seq__35516_35791 = G__35809;
chunk__35518_35792 = G__35810;
count__35519_35793 = G__35811;
i__35520_35794 = G__35812;
continue;
} else {
var f_35813 = cljs.core.first(seq__35516_35807__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35813], 0));


var G__35814 = cljs.core.next(seq__35516_35807__$1);
var G__35815 = null;
var G__35816 = (0);
var G__35817 = (0);
seq__35516_35791 = G__35814;
chunk__35518_35792 = G__35815;
count__35519_35793 = G__35816;
i__35520_35794 = G__35817;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35818 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35818], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35818)))?cljs.core.second(arglists_35818):arglists_35818)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35637_35819 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35638_35820 = null;
var count__35639_35821 = (0);
var i__35640_35822 = (0);
while(true){
if((i__35640_35822 < count__35639_35821)){
var vec__35659_35823 = chunk__35638_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35640_35822);
var name_35824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659_35823,(0),null);
var map__35662_35825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35659_35823,(1),null);
var map__35662_35826__$1 = cljs.core.__destructure_map(map__35662_35825);
var doc_35827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35826__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35662_35826__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35824], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35828], 0));

if(cljs.core.truth_(doc_35827)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35827], 0));
} else {
}


var G__35829 = seq__35637_35819;
var G__35830 = chunk__35638_35820;
var G__35831 = count__35639_35821;
var G__35832 = (i__35640_35822 + (1));
seq__35637_35819 = G__35829;
chunk__35638_35820 = G__35830;
count__35639_35821 = G__35831;
i__35640_35822 = G__35832;
continue;
} else {
var temp__5753__auto___35833 = cljs.core.seq(seq__35637_35819);
if(temp__5753__auto___35833){
var seq__35637_35834__$1 = temp__5753__auto___35833;
if(cljs.core.chunked_seq_QMARK_(seq__35637_35834__$1)){
var c__4679__auto___35835 = cljs.core.chunk_first(seq__35637_35834__$1);
var G__35836 = cljs.core.chunk_rest(seq__35637_35834__$1);
var G__35837 = c__4679__auto___35835;
var G__35838 = cljs.core.count(c__4679__auto___35835);
var G__35839 = (0);
seq__35637_35819 = G__35836;
chunk__35638_35820 = G__35837;
count__35639_35821 = G__35838;
i__35640_35822 = G__35839;
continue;
} else {
var vec__35663_35840 = cljs.core.first(seq__35637_35834__$1);
var name_35841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35663_35840,(0),null);
var map__35666_35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35663_35840,(1),null);
var map__35666_35843__$1 = cljs.core.__destructure_map(map__35666_35842);
var doc_35844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666_35843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35666_35843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35841], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35845], 0));

if(cljs.core.truth_(doc_35844)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35844], 0));
} else {
}


var G__35846 = cljs.core.next(seq__35637_35834__$1);
var G__35847 = null;
var G__35848 = (0);
var G__35849 = (0);
seq__35637_35819 = G__35846;
chunk__35638_35820 = G__35847;
count__35639_35821 = G__35848;
i__35640_35822 = G__35849;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35669 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35670 = null;
var count__35671 = (0);
var i__35672 = (0);
while(true){
if((i__35672 < count__35671)){
var role = chunk__35670.cljs$core$IIndexed$_nth$arity$2(null,i__35672);
var temp__5753__auto___35850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35850__$1)){
var spec_35857 = temp__5753__auto___35850__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35857)], 0));
} else {
}


var G__35858 = seq__35669;
var G__35859 = chunk__35670;
var G__35860 = count__35671;
var G__35861 = (i__35672 + (1));
seq__35669 = G__35858;
chunk__35670 = G__35859;
count__35671 = G__35860;
i__35672 = G__35861;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35669);
if(temp__5753__auto____$1){
var seq__35669__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35669__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35669__$1);
var G__35862 = cljs.core.chunk_rest(seq__35669__$1);
var G__35863 = c__4679__auto__;
var G__35864 = cljs.core.count(c__4679__auto__);
var G__35865 = (0);
seq__35669 = G__35862;
chunk__35670 = G__35863;
count__35671 = G__35864;
i__35672 = G__35865;
continue;
} else {
var role = cljs.core.first(seq__35669__$1);
var temp__5753__auto___35866__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35866__$2)){
var spec_35867 = temp__5753__auto___35866__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35867)], 0));
} else {
}


var G__35868 = cljs.core.next(seq__35669__$1);
var G__35869 = null;
var G__35870 = (0);
var G__35871 = (0);
seq__35669 = G__35868;
chunk__35670 = G__35869;
count__35671 = G__35870;
i__35672 = G__35871;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35872 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35873 = cljs.core.ex_cause(t);
via = G__35872;
t = G__35873;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35690 = datafied_throwable;
var map__35690__$1 = cljs.core.__destructure_map(map__35690);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35690__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35690__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35690__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35691 = cljs.core.last(via);
var map__35691__$1 = cljs.core.__destructure_map(map__35691);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35692 = data;
var map__35692__$1 = cljs.core.__destructure_map(map__35692);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35692__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35693 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35693__$1 = cljs.core.__destructure_map(map__35693);
var top_data = map__35693__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35693__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35699 = phase;
var G__35699__$1 = (((G__35699 instanceof cljs.core.Keyword))?G__35699.fqn:null);
switch (G__35699__$1) {
case "read-source":
var map__35703 = data;
var map__35703__$1 = cljs.core.__destructure_map(map__35703);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35703__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35703__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35704 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35704__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35704,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35704);
var G__35704__$2 = (cljs.core.truth_((function (){var fexpr__35706 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35706.cljs$core$IFn$_invoke$arity$1 ? fexpr__35706.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35706.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35704__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35704__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35704__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35708 = top_data;
var G__35708__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35708,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35708);
var G__35708__$2 = (cljs.core.truth_((function (){var fexpr__35709 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35709.cljs$core$IFn$_invoke$arity$1 ? fexpr__35709.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35709.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35708__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35708__$1);
var G__35708__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35708__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35708__$2);
var G__35708__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35708__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35708__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35708__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35708__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35711 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(3),null);
var G__35714 = top_data;
var G__35714__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35714,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35714);
var G__35714__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35714__$1);
var G__35714__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35714__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35714__$2);
var G__35714__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35714__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35714__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35714__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35714__$4;
}

break;
case "execution":
var vec__35715 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35715,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35689_SHARP_){
var or__4253__auto__ = (p1__35689_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35718.cljs$core$IFn$_invoke$arity$1 ? fexpr__35718.cljs$core$IFn$_invoke$arity$1(p1__35689_SHARP_) : fexpr__35718.call(null,p1__35689_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35719 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35719__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35719,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35719);
var G__35719__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35719__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35719__$1);
var G__35719__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35719__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35719__$2);
var G__35719__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35719__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35719__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35719__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35719__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35699__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35723){
var map__35724 = p__35723;
var map__35724__$1 = cljs.core.__destructure_map(map__35724);
var triage_data = map__35724__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35724__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35728 = phase;
var G__35728__$1 = (((G__35728 instanceof cljs.core.Keyword))?G__35728.fqn:null);
switch (G__35728__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35729 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35730 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35731 = loc;
var G__35732 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35737_35933 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35738_35934 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35739_35935 = true;
var _STAR_print_fn_STAR__temp_val__35740_35936 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35739_35935);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35740_35936);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35721_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35738_35934);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35737_35933);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35729,G__35730,G__35731,G__35732) : format.call(null,G__35729,G__35730,G__35731,G__35732));

break;
case "macroexpansion":
var G__35744 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35745 = cause_type;
var G__35746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35747 = loc;
var G__35748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35744,G__35745,G__35746,G__35747,G__35748) : format.call(null,G__35744,G__35745,G__35746,G__35747,G__35748));

break;
case "compile-syntax-check":
var G__35752 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35753 = cause_type;
var G__35754 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35755 = loc;
var G__35756 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35752,G__35753,G__35754,G__35755,G__35756) : format.call(null,G__35752,G__35753,G__35754,G__35755,G__35756));

break;
case "compilation":
var G__35757 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35758 = cause_type;
var G__35759 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35760 = loc;
var G__35761 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35757,G__35758,G__35759,G__35760,G__35761) : format.call(null,G__35757,G__35758,G__35759,G__35760,G__35761));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35762 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35763 = symbol;
var G__35764 = loc;
var G__35765 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35769_35949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35770_35950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35771_35951 = true;
var _STAR_print_fn_STAR__temp_val__35772_35952 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35771_35951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35772_35952);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35722_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35722_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35770_35950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35769_35949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35762,G__35763,G__35764,G__35765) : format.call(null,G__35762,G__35763,G__35764,G__35765));
} else {
var G__35773 = "Execution error%s at %s(%s).\n%s\n";
var G__35774 = cause_type;
var G__35775 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35776 = loc;
var G__35777 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35773,G__35774,G__35775,G__35776,G__35777) : format.call(null,G__35773,G__35774,G__35775,G__35776,G__35777));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35728__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
