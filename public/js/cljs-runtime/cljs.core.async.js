goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32459 = arguments.length;
switch (G__32459) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32460 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32460 = (function (f,blockable,meta32461){
this.f = f;
this.blockable = blockable;
this.meta32461 = meta32461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32462,meta32461__$1){
var self__ = this;
var _32462__$1 = this;
return (new cljs.core.async.t_cljs$core$async32460(self__.f,self__.blockable,meta32461__$1));
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32462){
var self__ = this;
var _32462__$1 = this;
return self__.meta32461;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32461","meta32461",365758644,null)], null);
}));

(cljs.core.async.t_cljs$core$async32460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32460");

(cljs.core.async.t_cljs$core$async32460.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32460.
 */
cljs.core.async.__GT_t_cljs$core$async32460 = (function cljs$core$async$__GT_t_cljs$core$async32460(f__$1,blockable__$1,meta32461){
return (new cljs.core.async.t_cljs$core$async32460(f__$1,blockable__$1,meta32461));
});

}

return (new cljs.core.async.t_cljs$core$async32460(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32465 = arguments.length;
switch (G__32465) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32467 = arguments.length;
switch (G__32467) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32470 = arguments.length;
switch (G__32470) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34739 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34739) : fn1.call(null,val_34739));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34739) : fn1.call(null,val_34739));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32477 = arguments.length;
switch (G__32477) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34745 = n;
var x_34746 = (0);
while(true){
if((x_34746 < n__4741__auto___34745)){
(a[x_34746] = x_34746);

var G__34747 = (x_34746 + (1));
x_34746 = G__34747;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32481 = (function (flag,meta32482){
this.flag = flag;
this.meta32482 = meta32482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32483,meta32482__$1){
var self__ = this;
var _32483__$1 = this;
return (new cljs.core.async.t_cljs$core$async32481(self__.flag,meta32482__$1));
}));

(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32483){
var self__ = this;
var _32483__$1 = this;
return self__.meta32482;
}));

(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32482","meta32482",1843600255,null)], null);
}));

(cljs.core.async.t_cljs$core$async32481.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32481");

(cljs.core.async.t_cljs$core$async32481.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32481");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32481.
 */
cljs.core.async.__GT_t_cljs$core$async32481 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32481(flag__$1,meta32482){
return (new cljs.core.async.t_cljs$core$async32481(flag__$1,meta32482));
});

}

return (new cljs.core.async.t_cljs$core$async32481(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32490 = (function (flag,cb,meta32491){
this.flag = flag;
this.cb = cb;
this.meta32491 = meta32491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32492,meta32491__$1){
var self__ = this;
var _32492__$1 = this;
return (new cljs.core.async.t_cljs$core$async32490(self__.flag,self__.cb,meta32491__$1));
}));

(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32492){
var self__ = this;
var _32492__$1 = this;
return self__.meta32491;
}));

(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32491","meta32491",725367387,null)], null);
}));

(cljs.core.async.t_cljs$core$async32490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32490");

(cljs.core.async.t_cljs$core$async32490.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32490.
 */
cljs.core.async.__GT_t_cljs$core$async32490 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32490(flag__$1,cb__$1,meta32491){
return (new cljs.core.async.t_cljs$core$async32490(flag__$1,cb__$1,meta32491));
});

}

return (new cljs.core.async.t_cljs$core$async32490(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32493_SHARP_){
var G__32498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32493_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32498) : fret.call(null,G__32498));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32494_SHARP_){
var G__32499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32494_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32499) : fret.call(null,G__32499));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34774 = (i + (1));
i = G__34774;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34782 = arguments.length;
var i__4865__auto___34783 = (0);
while(true){
if((i__4865__auto___34783 < len__4864__auto___34782)){
args__4870__auto__.push((arguments[i__4865__auto___34783]));

var G__34784 = (i__4865__auto___34783 + (1));
i__4865__auto___34783 = G__34784;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32502){
var map__32503 = p__32502;
var map__32503__$1 = cljs.core.__destructure_map(map__32503);
var opts = map__32503__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32500){
var G__32501 = cljs.core.first(seq32500);
var seq32500__$1 = cljs.core.next(seq32500);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32501,seq32500__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32513 = arguments.length;
switch (G__32513) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32401__auto___34787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_32565){
var state_val_32567 = (state_32565[(1)]);
if((state_val_32567 === (7))){
var inst_32559 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32572_34788 = state_32565__$1;
(statearr_32572_34788[(2)] = inst_32559);

(statearr_32572_34788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var state_32565__$1 = state_32565;
var statearr_32579_34791 = state_32565__$1;
(statearr_32579_34791[(2)] = null);

(statearr_32579_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32542 = (state_32565[(7)]);
var inst_32542__$1 = (state_32565[(2)]);
var inst_32543 = (inst_32542__$1 == null);
var state_32565__$1 = (function (){var statearr_32584 = state_32565;
(statearr_32584[(7)] = inst_32542__$1);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32543)){
var statearr_32588_34792 = state_32565__$1;
(statearr_32588_34792[(1)] = (5));

} else {
var statearr_32589_34794 = state_32565__$1;
(statearr_32589_34794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (13))){
var state_32565__$1 = state_32565;
var statearr_32597_34799 = state_32565__$1;
(statearr_32597_34799[(2)] = null);

(statearr_32597_34799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var inst_32542 = (state_32565[(7)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32565__$1,(11),to,inst_32542);
} else {
if((state_val_32567 === (3))){
var inst_32561 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32565__$1,inst_32561);
} else {
if((state_val_32567 === (12))){
var state_32565__$1 = state_32565;
var statearr_32604_34802 = state_32565__$1;
(statearr_32604_34802[(2)] = null);

(statearr_32604_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (2))){
var state_32565__$1 = state_32565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32565__$1,(4),from);
} else {
if((state_val_32567 === (11))){
var inst_32552 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
if(cljs.core.truth_(inst_32552)){
var statearr_32607_34806 = state_32565__$1;
(statearr_32607_34806[(1)] = (12));

} else {
var statearr_32611_34807 = state_32565__$1;
(statearr_32611_34807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (9))){
var state_32565__$1 = state_32565;
var statearr_32612_34808 = state_32565__$1;
(statearr_32612_34808[(2)] = null);

(statearr_32612_34808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (5))){
var state_32565__$1 = state_32565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32614_34809 = state_32565__$1;
(statearr_32614_34809[(1)] = (8));

} else {
var statearr_32615_34810 = state_32565__$1;
(statearr_32615_34810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (14))){
var inst_32557 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32621_34811 = state_32565__$1;
(statearr_32621_34811[(2)] = inst_32557);

(statearr_32621_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var inst_32549 = (state_32565[(2)]);
var state_32565__$1 = state_32565;
var statearr_32623_34812 = state_32565__$1;
(statearr_32623_34812[(2)] = inst_32549);

(statearr_32623_34812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (8))){
var inst_32546 = cljs.core.async.close_BANG_(to);
var state_32565__$1 = state_32565;
var statearr_32628_34813 = state_32565__$1;
(statearr_32628_34813[(2)] = inst_32546);

(statearr_32628_34813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_32565){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32565);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32631){var ex__32110__auto__ = e32631;
var statearr_32632_34814 = state_32565;
(statearr_32632_34814[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32565[(4)]))){
var statearr_32633_34815 = state_32565;
(statearr_32633_34815[(1)] = cljs.core.first((state_32565[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34816 = state_32565;
state_32565 = G__34816;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_32565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_32565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_32634 = f__32402__auto__();
(statearr_32634[(6)] = c__32401__auto___34787);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32645){
var vec__32646 = p__32645;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32646,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32646,(1),null);
var job = vec__32646;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32401__auto___34817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_32653){
var state_val_32654 = (state_32653[(1)]);
if((state_val_32654 === (1))){
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32653__$1,(2),res,v);
} else {
if((state_val_32654 === (2))){
var inst_32650 = (state_32653[(2)]);
var inst_32651 = cljs.core.async.close_BANG_(res);
var state_32653__$1 = (function (){var statearr_32660 = state_32653;
(statearr_32660[(7)] = inst_32650);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32653__$1,inst_32651);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_32661 = [null,null,null,null,null,null,null,null];
(statearr_32661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__);

(statearr_32661[(1)] = (1));

return statearr_32661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1 = (function (state_32653){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32653);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32662){var ex__32110__auto__ = e32662;
var statearr_32663_34818 = state_32653;
(statearr_32663_34818[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32653[(4)]))){
var statearr_32664_34819 = state_32653;
(statearr_32664_34819[(1)] = cljs.core.first((state_32653[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_32653;
state_32653 = G__34820;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_32672 = f__32402__auto__();
(statearr_32672[(6)] = c__32401__auto___34817);

return statearr_32672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32674){
var vec__32675 = p__32674;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32675,(1),null);
var job = vec__32675;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34821 = n;
var __34822 = (0);
while(true){
if((__34822 < n__4741__auto___34821)){
var G__32679_34823 = type;
var G__32679_34824__$1 = (((G__32679_34823 instanceof cljs.core.Keyword))?G__32679_34823.fqn:null);
switch (G__32679_34824__$1) {
case "compute":
var c__32401__auto___34826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34822,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = ((function (__34822,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function (state_32694){
var state_val_32695 = (state_32694[(1)]);
if((state_val_32695 === (1))){
var state_32694__$1 = state_32694;
var statearr_32697_34827 = state_32694__$1;
(statearr_32697_34827[(2)] = null);

(statearr_32697_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (2))){
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32694__$1,(4),jobs);
} else {
if((state_val_32695 === (3))){
var inst_32692 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32694__$1,inst_32692);
} else {
if((state_val_32695 === (4))){
var inst_32684 = (state_32694[(2)]);
var inst_32685 = process(inst_32684);
var state_32694__$1 = state_32694;
if(cljs.core.truth_(inst_32685)){
var statearr_32698_34828 = state_32694__$1;
(statearr_32698_34828[(1)] = (5));

} else {
var statearr_32700_34829 = state_32694__$1;
(statearr_32700_34829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (5))){
var state_32694__$1 = state_32694;
var statearr_32701_34833 = state_32694__$1;
(statearr_32701_34833[(2)] = null);

(statearr_32701_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (6))){
var state_32694__$1 = state_32694;
var statearr_32702_34834 = state_32694__$1;
(statearr_32702_34834[(2)] = null);

(statearr_32702_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (7))){
var inst_32690 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32703_34835 = state_32694__$1;
(statearr_32703_34835[(2)] = inst_32690);

(statearr_32703_34835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34822,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
;
return ((function (__34822,switch__32106__auto__,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_32705 = [null,null,null,null,null,null,null];
(statearr_32705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__);

(statearr_32705[(1)] = (1));

return statearr_32705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1 = (function (state_32694){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32694);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32706){var ex__32110__auto__ = e32706;
var statearr_32710_34837 = state_32694;
(statearr_32710_34837[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32694[(4)]))){
var statearr_32719_34838 = state_32694;
(statearr_32719_34838[(1)] = cljs.core.first((state_32694[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34839 = state_32694;
state_32694 = G__34839;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__;
})()
;})(__34822,switch__32106__auto__,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
})();
var state__32403__auto__ = (function (){var statearr_32733 = f__32402__auto__();
(statearr_32733[(6)] = c__32401__auto___34826);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
});})(__34822,c__32401__auto___34826,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
);


break;
case "async":
var c__32401__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34822,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = ((function (__34822,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function (state_32747){
var state_val_32748 = (state_32747[(1)]);
if((state_val_32748 === (1))){
var state_32747__$1 = state_32747;
var statearr_32769_34841 = state_32747__$1;
(statearr_32769_34841[(2)] = null);

(statearr_32769_34841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (2))){
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32747__$1,(4),jobs);
} else {
if((state_val_32748 === (3))){
var inst_32745 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32747__$1,inst_32745);
} else {
if((state_val_32748 === (4))){
var inst_32737 = (state_32747[(2)]);
var inst_32738 = async(inst_32737);
var state_32747__$1 = state_32747;
if(cljs.core.truth_(inst_32738)){
var statearr_32794_34842 = state_32747__$1;
(statearr_32794_34842[(1)] = (5));

} else {
var statearr_32795_34843 = state_32747__$1;
(statearr_32795_34843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (5))){
var state_32747__$1 = state_32747;
var statearr_32797_34844 = state_32747__$1;
(statearr_32797_34844[(2)] = null);

(statearr_32797_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (6))){
var state_32747__$1 = state_32747;
var statearr_32800_34845 = state_32747__$1;
(statearr_32800_34845[(2)] = null);

(statearr_32800_34845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32748 === (7))){
var inst_32743 = (state_32747[(2)]);
var state_32747__$1 = state_32747;
var statearr_32806_34846 = state_32747__$1;
(statearr_32806_34846[(2)] = inst_32743);

(statearr_32806_34846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34822,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
;
return ((function (__34822,switch__32106__auto__,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1 = (function (state_32747){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32747);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32857){var ex__32110__auto__ = e32857;
var statearr_32868_34848 = state_32747;
(statearr_32868_34848[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32747[(4)]))){
var statearr_32870_34849 = state_32747;
(statearr_32870_34849[(1)] = cljs.core.first((state_32747[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34850 = state_32747;
state_32747 = G__34850;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = function(state_32747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1.call(this,state_32747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__;
})()
;})(__34822,switch__32106__auto__,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
})();
var state__32403__auto__ = (function (){var statearr_32873 = f__32402__auto__();
(statearr_32873[(6)] = c__32401__auto___34840);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
});})(__34822,c__32401__auto___34840,G__32679_34823,G__32679_34824__$1,n__4741__auto___34821,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32679_34824__$1)].join('')));

}

var G__34851 = (__34822 + (1));
__34822 = G__34851;
continue;
} else {
}
break;
}

var c__32401__auto___34852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_32909){
var state_val_32910 = (state_32909[(1)]);
if((state_val_32910 === (7))){
var inst_32905 = (state_32909[(2)]);
var state_32909__$1 = state_32909;
var statearr_32912_34853 = state_32909__$1;
(statearr_32912_34853[(2)] = inst_32905);

(statearr_32912_34853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (1))){
var state_32909__$1 = state_32909;
var statearr_32913_34855 = state_32909__$1;
(statearr_32913_34855[(2)] = null);

(statearr_32913_34855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (4))){
var inst_32888 = (state_32909[(7)]);
var inst_32888__$1 = (state_32909[(2)]);
var inst_32889 = (inst_32888__$1 == null);
var state_32909__$1 = (function (){var statearr_32914 = state_32909;
(statearr_32914[(7)] = inst_32888__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32889)){
var statearr_32915_34862 = state_32909__$1;
(statearr_32915_34862[(1)] = (5));

} else {
var statearr_32916_34863 = state_32909__$1;
(statearr_32916_34863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (6))){
var inst_32894 = (state_32909[(8)]);
var inst_32888 = (state_32909[(7)]);
var inst_32894__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32896 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32897 = [inst_32888,inst_32894__$1];
var inst_32898 = (new cljs.core.PersistentVector(null,2,(5),inst_32896,inst_32897,null));
var state_32909__$1 = (function (){var statearr_32918 = state_32909;
(statearr_32918[(8)] = inst_32894__$1);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32909__$1,(8),jobs,inst_32898);
} else {
if((state_val_32910 === (3))){
var inst_32907 = (state_32909[(2)]);
var state_32909__$1 = state_32909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32909__$1,inst_32907);
} else {
if((state_val_32910 === (2))){
var state_32909__$1 = state_32909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32909__$1,(4),from);
} else {
if((state_val_32910 === (9))){
var inst_32902 = (state_32909[(2)]);
var state_32909__$1 = (function (){var statearr_32919 = state_32909;
(statearr_32919[(9)] = inst_32902);

return statearr_32919;
})();
var statearr_32920_34864 = state_32909__$1;
(statearr_32920_34864[(2)] = null);

(statearr_32920_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (5))){
var inst_32891 = cljs.core.async.close_BANG_(jobs);
var state_32909__$1 = state_32909;
var statearr_32921_34865 = state_32909__$1;
(statearr_32921_34865[(2)] = inst_32891);

(statearr_32921_34865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32910 === (8))){
var inst_32894 = (state_32909[(8)]);
var inst_32900 = (state_32909[(2)]);
var state_32909__$1 = (function (){var statearr_32922 = state_32909;
(statearr_32922[(10)] = inst_32900);

return statearr_32922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32909__$1,(9),results,inst_32894);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_32924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__);

(statearr_32924[(1)] = (1));

return statearr_32924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1 = (function (state_32909){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32909);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32925){var ex__32110__auto__ = e32925;
var statearr_32926_34866 = state_32909;
(statearr_32926_34866[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32909[(4)]))){
var statearr_32927_34867 = state_32909;
(statearr_32927_34867[(1)] = cljs.core.first((state_32909[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34868 = state_32909;
state_32909 = G__34868;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = function(state_32909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1.call(this,state_32909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_32928 = f__32402__auto__();
(statearr_32928[(6)] = c__32401__auto___34852);

return statearr_32928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


var c__32401__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_32966){
var state_val_32967 = (state_32966[(1)]);
if((state_val_32967 === (7))){
var inst_32962 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32968_34869 = state_32966__$1;
(statearr_32968_34869[(2)] = inst_32962);

(statearr_32968_34869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (20))){
var state_32966__$1 = state_32966;
var statearr_32969_34870 = state_32966__$1;
(statearr_32969_34870[(2)] = null);

(statearr_32969_34870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (1))){
var state_32966__$1 = state_32966;
var statearr_32970_34871 = state_32966__$1;
(statearr_32970_34871[(2)] = null);

(statearr_32970_34871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (4))){
var inst_32931 = (state_32966[(7)]);
var inst_32931__$1 = (state_32966[(2)]);
var inst_32932 = (inst_32931__$1 == null);
var state_32966__$1 = (function (){var statearr_32971 = state_32966;
(statearr_32971[(7)] = inst_32931__$1);

return statearr_32971;
})();
if(cljs.core.truth_(inst_32932)){
var statearr_32973_34872 = state_32966__$1;
(statearr_32973_34872[(1)] = (5));

} else {
var statearr_32974_34874 = state_32966__$1;
(statearr_32974_34874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (15))){
var inst_32944 = (state_32966[(8)]);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32966__$1,(18),to,inst_32944);
} else {
if((state_val_32967 === (21))){
var inst_32957 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32975_34875 = state_32966__$1;
(statearr_32975_34875[(2)] = inst_32957);

(statearr_32975_34875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (13))){
var inst_32959 = (state_32966[(2)]);
var state_32966__$1 = (function (){var statearr_32976 = state_32966;
(statearr_32976[(9)] = inst_32959);

return statearr_32976;
})();
var statearr_32977_34876 = state_32966__$1;
(statearr_32977_34876[(2)] = null);

(statearr_32977_34876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (6))){
var inst_32931 = (state_32966[(7)]);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32966__$1,(11),inst_32931);
} else {
if((state_val_32967 === (17))){
var inst_32952 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
if(cljs.core.truth_(inst_32952)){
var statearr_32978_34877 = state_32966__$1;
(statearr_32978_34877[(1)] = (19));

} else {
var statearr_32979_34878 = state_32966__$1;
(statearr_32979_34878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (3))){
var inst_32964 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32966__$1,inst_32964);
} else {
if((state_val_32967 === (12))){
var inst_32941 = (state_32966[(10)]);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32966__$1,(14),inst_32941);
} else {
if((state_val_32967 === (2))){
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32966__$1,(4),results);
} else {
if((state_val_32967 === (19))){
var state_32966__$1 = state_32966;
var statearr_32980_34879 = state_32966__$1;
(statearr_32980_34879[(2)] = null);

(statearr_32980_34879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (11))){
var inst_32941 = (state_32966[(2)]);
var state_32966__$1 = (function (){var statearr_32981 = state_32966;
(statearr_32981[(10)] = inst_32941);

return statearr_32981;
})();
var statearr_32982_34880 = state_32966__$1;
(statearr_32982_34880[(2)] = null);

(statearr_32982_34880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (9))){
var state_32966__$1 = state_32966;
var statearr_32983_34881 = state_32966__$1;
(statearr_32983_34881[(2)] = null);

(statearr_32983_34881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (5))){
var state_32966__$1 = state_32966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32984_34882 = state_32966__$1;
(statearr_32984_34882[(1)] = (8));

} else {
var statearr_32985_34883 = state_32966__$1;
(statearr_32985_34883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (14))){
var inst_32944 = (state_32966[(8)]);
var inst_32946 = (state_32966[(11)]);
var inst_32944__$1 = (state_32966[(2)]);
var inst_32945 = (inst_32944__$1 == null);
var inst_32946__$1 = cljs.core.not(inst_32945);
var state_32966__$1 = (function (){var statearr_32986 = state_32966;
(statearr_32986[(8)] = inst_32944__$1);

(statearr_32986[(11)] = inst_32946__$1);

return statearr_32986;
})();
if(inst_32946__$1){
var statearr_32987_34884 = state_32966__$1;
(statearr_32987_34884[(1)] = (15));

} else {
var statearr_32988_34885 = state_32966__$1;
(statearr_32988_34885[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (16))){
var inst_32946 = (state_32966[(11)]);
var state_32966__$1 = state_32966;
var statearr_32989_34886 = state_32966__$1;
(statearr_32989_34886[(2)] = inst_32946);

(statearr_32989_34886[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (10))){
var inst_32938 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32990_34887 = state_32966__$1;
(statearr_32990_34887[(2)] = inst_32938);

(statearr_32990_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (18))){
var inst_32949 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32991_34888 = state_32966__$1;
(statearr_32991_34888[(2)] = inst_32949);

(statearr_32991_34888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (8))){
var inst_32935 = cljs.core.async.close_BANG_(to);
var state_32966__$1 = state_32966;
var statearr_32992_34889 = state_32966__$1;
(statearr_32992_34889[(2)] = inst_32935);

(statearr_32992_34889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_32993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__);

(statearr_32993[(1)] = (1));

return statearr_32993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1 = (function (state_32966){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_32966);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e32994){var ex__32110__auto__ = e32994;
var statearr_32995_34895 = state_32966;
(statearr_32995_34895[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_32966[(4)]))){
var statearr_32996_34896 = state_32966;
(statearr_32996_34896[(1)] = cljs.core.first((state_32966[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34898 = state_32966;
state_32966 = G__34898;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__ = function(state_32966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1.call(this,state_32966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_32997 = f__32402__auto__();
(statearr_32997[(6)] = c__32401__auto__);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

return c__32401__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33000 = arguments.length;
switch (G__33000) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33003 = arguments.length;
switch (G__33003) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33006 = arguments.length;
switch (G__33006) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32401__auto___34916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33033){
var state_val_33034 = (state_33033[(1)]);
if((state_val_33034 === (7))){
var inst_33029 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33035_34917 = state_33033__$1;
(statearr_33035_34917[(2)] = inst_33029);

(statearr_33035_34917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (1))){
var state_33033__$1 = state_33033;
var statearr_33037_34918 = state_33033__$1;
(statearr_33037_34918[(2)] = null);

(statearr_33037_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (4))){
var inst_33010 = (state_33033[(7)]);
var inst_33010__$1 = (state_33033[(2)]);
var inst_33011 = (inst_33010__$1 == null);
var state_33033__$1 = (function (){var statearr_33038 = state_33033;
(statearr_33038[(7)] = inst_33010__$1);

return statearr_33038;
})();
if(cljs.core.truth_(inst_33011)){
var statearr_33039_34919 = state_33033__$1;
(statearr_33039_34919[(1)] = (5));

} else {
var statearr_33040_34920 = state_33033__$1;
(statearr_33040_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (13))){
var state_33033__$1 = state_33033;
var statearr_33041_34921 = state_33033__$1;
(statearr_33041_34921[(2)] = null);

(statearr_33041_34921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (6))){
var inst_33010 = (state_33033[(7)]);
var inst_33016 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33010) : p.call(null,inst_33010));
var state_33033__$1 = state_33033;
if(cljs.core.truth_(inst_33016)){
var statearr_33042_34923 = state_33033__$1;
(statearr_33042_34923[(1)] = (9));

} else {
var statearr_33043_34925 = state_33033__$1;
(statearr_33043_34925[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (3))){
var inst_33031 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33033__$1,inst_33031);
} else {
if((state_val_33034 === (12))){
var state_33033__$1 = state_33033;
var statearr_33044_34926 = state_33033__$1;
(statearr_33044_34926[(2)] = null);

(statearr_33044_34926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (2))){
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33033__$1,(4),ch);
} else {
if((state_val_33034 === (11))){
var inst_33010 = (state_33033[(7)]);
var inst_33020 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33033__$1,(8),inst_33020,inst_33010);
} else {
if((state_val_33034 === (9))){
var state_33033__$1 = state_33033;
var statearr_33046_34930 = state_33033__$1;
(statearr_33046_34930[(2)] = tc);

(statearr_33046_34930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (5))){
var inst_33013 = cljs.core.async.close_BANG_(tc);
var inst_33014 = cljs.core.async.close_BANG_(fc);
var state_33033__$1 = (function (){var statearr_33047 = state_33033;
(statearr_33047[(8)] = inst_33013);

return statearr_33047;
})();
var statearr_33048_34931 = state_33033__$1;
(statearr_33048_34931[(2)] = inst_33014);

(statearr_33048_34931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (14))){
var inst_33027 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
var statearr_33049_34932 = state_33033__$1;
(statearr_33049_34932[(2)] = inst_33027);

(statearr_33049_34932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (10))){
var state_33033__$1 = state_33033;
var statearr_33050_34933 = state_33033__$1;
(statearr_33050_34933[(2)] = fc);

(statearr_33050_34933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33034 === (8))){
var inst_33022 = (state_33033[(2)]);
var state_33033__$1 = state_33033;
if(cljs.core.truth_(inst_33022)){
var statearr_33051_34934 = state_33033__$1;
(statearr_33051_34934[(1)] = (12));

} else {
var statearr_33052_34935 = state_33033__$1;
(statearr_33052_34935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_33053 = [null,null,null,null,null,null,null,null,null];
(statearr_33053[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_33053[(1)] = (1));

return statearr_33053;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_33033){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33033);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33054){var ex__32110__auto__ = e33054;
var statearr_33055_34938 = state_33033;
(statearr_33055_34938[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33033[(4)]))){
var statearr_33056_34939 = state_33033;
(statearr_33056_34939[(1)] = cljs.core.first((state_33033[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34940 = state_33033;
state_33033 = G__34940;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_33033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_33033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33057 = f__32402__auto__();
(statearr_33057[(6)] = c__32401__auto___34916);

return statearr_33057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32401__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33081){
var state_val_33082 = (state_33081[(1)]);
if((state_val_33082 === (7))){
var inst_33076 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33083_34945 = state_33081__$1;
(statearr_33083_34945[(2)] = inst_33076);

(statearr_33083_34945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (1))){
var inst_33058 = init;
var inst_33060 = inst_33058;
var state_33081__$1 = (function (){var statearr_33084 = state_33081;
(statearr_33084[(7)] = inst_33060);

return statearr_33084;
})();
var statearr_33085_34946 = state_33081__$1;
(statearr_33085_34946[(2)] = null);

(statearr_33085_34946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (4))){
var inst_33063 = (state_33081[(8)]);
var inst_33063__$1 = (state_33081[(2)]);
var inst_33064 = (inst_33063__$1 == null);
var state_33081__$1 = (function (){var statearr_33086 = state_33081;
(statearr_33086[(8)] = inst_33063__$1);

return statearr_33086;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33087_34947 = state_33081__$1;
(statearr_33087_34947[(1)] = (5));

} else {
var statearr_33088_34948 = state_33081__$1;
(statearr_33088_34948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (6))){
var inst_33063 = (state_33081[(8)]);
var inst_33067 = (state_33081[(9)]);
var inst_33060 = (state_33081[(7)]);
var inst_33067__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33060,inst_33063) : f.call(null,inst_33060,inst_33063));
var inst_33068 = cljs.core.reduced_QMARK_(inst_33067__$1);
var state_33081__$1 = (function (){var statearr_33089 = state_33081;
(statearr_33089[(9)] = inst_33067__$1);

return statearr_33089;
})();
if(inst_33068){
var statearr_33090_34949 = state_33081__$1;
(statearr_33090_34949[(1)] = (8));

} else {
var statearr_33091_34950 = state_33081__$1;
(statearr_33091_34950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (3))){
var inst_33079 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33081__$1,inst_33079);
} else {
if((state_val_33082 === (2))){
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33081__$1,(4),ch);
} else {
if((state_val_33082 === (9))){
var inst_33067 = (state_33081[(9)]);
var inst_33060 = inst_33067;
var state_33081__$1 = (function (){var statearr_33093 = state_33081;
(statearr_33093[(7)] = inst_33060);

return statearr_33093;
})();
var statearr_33094_34951 = state_33081__$1;
(statearr_33094_34951[(2)] = null);

(statearr_33094_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (5))){
var inst_33060 = (state_33081[(7)]);
var state_33081__$1 = state_33081;
var statearr_33095_34952 = state_33081__$1;
(statearr_33095_34952[(2)] = inst_33060);

(statearr_33095_34952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (10))){
var inst_33074 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33096_34959 = state_33081__$1;
(statearr_33096_34959[(2)] = inst_33074);

(statearr_33096_34959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33082 === (8))){
var inst_33067 = (state_33081[(9)]);
var inst_33070 = cljs.core.deref(inst_33067);
var state_33081__$1 = state_33081;
var statearr_33097_34961 = state_33081__$1;
(statearr_33097_34961[(2)] = inst_33070);

(statearr_33097_34961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32107__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32107__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$reduce_$_state_machine__32107__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$reduce_$_state_machine__32107__auto____1 = (function (state_33081){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33081);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33099){var ex__32110__auto__ = e33099;
var statearr_33100_34963 = state_33081;
(statearr_33100_34963[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33081[(4)]))){
var statearr_33101_34964 = state_33081;
(statearr_33101_34964[(1)] = cljs.core.first((state_33081[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_33081;
state_33081 = G__34971;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32107__auto__ = function(state_33081){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32107__auto____1.call(this,state_33081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32107__auto____0;
cljs$core$async$reduce_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32107__auto____1;
return cljs$core$async$reduce_$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33102 = f__32402__auto__();
(statearr_33102[(6)] = c__32401__auto__);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

return c__32401__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32401__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33108){
var state_val_33109 = (state_33108[(1)]);
if((state_val_33109 === (1))){
var inst_33103 = cljs.core.async.reduce(f__$1,init,ch);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33108__$1,(2),inst_33103);
} else {
if((state_val_33109 === (2))){
var inst_33105 = (state_33108[(2)]);
var inst_33106 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33105) : f__$1.call(null,inst_33105));
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33108__$1,inst_33106);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32107__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32107__auto____0 = (function (){
var statearr_33110 = [null,null,null,null,null,null,null];
(statearr_33110[(0)] = cljs$core$async$transduce_$_state_machine__32107__auto__);

(statearr_33110[(1)] = (1));

return statearr_33110;
});
var cljs$core$async$transduce_$_state_machine__32107__auto____1 = (function (state_33108){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33108);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33111){var ex__32110__auto__ = e33111;
var statearr_33112_34972 = state_33108;
(statearr_33112_34972[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33108[(4)]))){
var statearr_33114_34973 = state_33108;
(statearr_33114_34973[(1)] = cljs.core.first((state_33108[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34976 = state_33108;
state_33108 = G__34976;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32107__auto__ = function(state_33108){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32107__auto____1.call(this,state_33108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32107__auto____0;
cljs$core$async$transduce_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32107__auto____1;
return cljs$core$async$transduce_$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33115 = f__32402__auto__();
(statearr_33115[(6)] = c__32401__auto__);

return statearr_33115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

return c__32401__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32401__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33143){
var state_val_33144 = (state_33143[(1)]);
if((state_val_33144 === (7))){
var inst_33125 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33146_34980 = state_33143__$1;
(statearr_33146_34980[(2)] = inst_33125);

(statearr_33146_34980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (1))){
var inst_33119 = cljs.core.seq(coll);
var inst_33120 = inst_33119;
var state_33143__$1 = (function (){var statearr_33147 = state_33143;
(statearr_33147[(7)] = inst_33120);

return statearr_33147;
})();
var statearr_33148_34981 = state_33143__$1;
(statearr_33148_34981[(2)] = null);

(statearr_33148_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (4))){
var inst_33120 = (state_33143[(7)]);
var inst_33123 = cljs.core.first(inst_33120);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33143__$1,(7),ch,inst_33123);
} else {
if((state_val_33144 === (13))){
var inst_33137 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33149_34982 = state_33143__$1;
(statearr_33149_34982[(2)] = inst_33137);

(statearr_33149_34982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (6))){
var inst_33128 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
if(cljs.core.truth_(inst_33128)){
var statearr_33150_34983 = state_33143__$1;
(statearr_33150_34983[(1)] = (8));

} else {
var statearr_33151_34984 = state_33143__$1;
(statearr_33151_34984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (3))){
var inst_33141 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33143__$1,inst_33141);
} else {
if((state_val_33144 === (12))){
var state_33143__$1 = state_33143;
var statearr_33152_34985 = state_33143__$1;
(statearr_33152_34985[(2)] = null);

(statearr_33152_34985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (2))){
var inst_33120 = (state_33143[(7)]);
var state_33143__$1 = state_33143;
if(cljs.core.truth_(inst_33120)){
var statearr_33153_34986 = state_33143__$1;
(statearr_33153_34986[(1)] = (4));

} else {
var statearr_33154_34987 = state_33143__$1;
(statearr_33154_34987[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (11))){
var inst_33134 = cljs.core.async.close_BANG_(ch);
var state_33143__$1 = state_33143;
var statearr_33156_34988 = state_33143__$1;
(statearr_33156_34988[(2)] = inst_33134);

(statearr_33156_34988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (9))){
var state_33143__$1 = state_33143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33157_34994 = state_33143__$1;
(statearr_33157_34994[(1)] = (11));

} else {
var statearr_33158_34995 = state_33143__$1;
(statearr_33158_34995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (5))){
var inst_33120 = (state_33143[(7)]);
var state_33143__$1 = state_33143;
var statearr_33159_34996 = state_33143__$1;
(statearr_33159_34996[(2)] = inst_33120);

(statearr_33159_34996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (10))){
var inst_33139 = (state_33143[(2)]);
var state_33143__$1 = state_33143;
var statearr_33160_34997 = state_33143__$1;
(statearr_33160_34997[(2)] = inst_33139);

(statearr_33160_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33144 === (8))){
var inst_33120 = (state_33143[(7)]);
var inst_33130 = cljs.core.next(inst_33120);
var inst_33120__$1 = inst_33130;
var state_33143__$1 = (function (){var statearr_33161 = state_33143;
(statearr_33161[(7)] = inst_33120__$1);

return statearr_33161;
})();
var statearr_33162_35004 = state_33143__$1;
(statearr_33162_35004[(2)] = null);

(statearr_33162_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_33163 = [null,null,null,null,null,null,null,null];
(statearr_33163[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_33163[(1)] = (1));

return statearr_33163;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_33143){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33143);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33164){var ex__32110__auto__ = e33164;
var statearr_33166_35006 = state_33143;
(statearr_33166_35006[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33143[(4)]))){
var statearr_33167_35007 = state_33143;
(statearr_33167_35007[(1)] = cljs.core.first((state_33143[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_33143;
state_33143 = G__35008;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_33143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_33143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33168 = f__32402__auto__();
(statearr_33168[(6)] = c__32401__auto__);

return statearr_33168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

return c__32401__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33171 = arguments.length;
switch (G__33171) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35011 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35011(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35013 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35013(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35015 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35015(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35022 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35022(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33176 = (function (ch,cs,meta33177){
this.ch = ch;
this.cs = cs;
this.meta33177 = meta33177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33178,meta33177__$1){
var self__ = this;
var _33178__$1 = this;
return (new cljs.core.async.t_cljs$core$async33176(self__.ch,self__.cs,meta33177__$1));
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33178){
var self__ = this;
var _33178__$1 = this;
return self__.meta33177;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33177","meta33177",509770629,null)], null);
}));

(cljs.core.async.t_cljs$core$async33176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33176");

(cljs.core.async.t_cljs$core$async33176.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33176.
 */
cljs.core.async.__GT_t_cljs$core$async33176 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33176(ch__$1,cs__$1,meta33177){
return (new cljs.core.async.t_cljs$core$async33176(ch__$1,cs__$1,meta33177));
});

}

return (new cljs.core.async.t_cljs$core$async33176(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32401__auto___35024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33317){
var state_val_33318 = (state_33317[(1)]);
if((state_val_33318 === (7))){
var inst_33313 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33319_35026 = state_33317__$1;
(statearr_33319_35026[(2)] = inst_33313);

(statearr_33319_35026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (20))){
var inst_33216 = (state_33317[(7)]);
var inst_33228 = cljs.core.first(inst_33216);
var inst_33229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33228,(0),null);
var inst_33230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33228,(1),null);
var state_33317__$1 = (function (){var statearr_33322 = state_33317;
(statearr_33322[(8)] = inst_33229);

return statearr_33322;
})();
if(cljs.core.truth_(inst_33230)){
var statearr_33323_35030 = state_33317__$1;
(statearr_33323_35030[(1)] = (22));

} else {
var statearr_33324_35031 = state_33317__$1;
(statearr_33324_35031[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (27))){
var inst_33267 = (state_33317[(9)]);
var inst_33260 = (state_33317[(10)]);
var inst_33262 = (state_33317[(11)]);
var inst_33185 = (state_33317[(12)]);
var inst_33267__$1 = cljs.core._nth(inst_33260,inst_33262);
var inst_33268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33267__$1,inst_33185,done);
var state_33317__$1 = (function (){var statearr_33325 = state_33317;
(statearr_33325[(9)] = inst_33267__$1);

return statearr_33325;
})();
if(cljs.core.truth_(inst_33268)){
var statearr_33326_35032 = state_33317__$1;
(statearr_33326_35032[(1)] = (30));

} else {
var statearr_33327_35033 = state_33317__$1;
(statearr_33327_35033[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (1))){
var state_33317__$1 = state_33317;
var statearr_33328_35034 = state_33317__$1;
(statearr_33328_35034[(2)] = null);

(statearr_33328_35034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (24))){
var inst_33216 = (state_33317[(7)]);
var inst_33236 = (state_33317[(2)]);
var inst_33238 = cljs.core.next(inst_33216);
var inst_33194 = inst_33238;
var inst_33195 = null;
var inst_33196 = (0);
var inst_33197 = (0);
var state_33317__$1 = (function (){var statearr_33329 = state_33317;
(statearr_33329[(13)] = inst_33236);

(statearr_33329[(14)] = inst_33197);

(statearr_33329[(15)] = inst_33196);

(statearr_33329[(16)] = inst_33195);

(statearr_33329[(17)] = inst_33194);

return statearr_33329;
})();
var statearr_33330_35035 = state_33317__$1;
(statearr_33330_35035[(2)] = null);

(statearr_33330_35035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (39))){
var state_33317__$1 = state_33317;
var statearr_33334_35036 = state_33317__$1;
(statearr_33334_35036[(2)] = null);

(statearr_33334_35036[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (4))){
var inst_33185 = (state_33317[(12)]);
var inst_33185__$1 = (state_33317[(2)]);
var inst_33186 = (inst_33185__$1 == null);
var state_33317__$1 = (function (){var statearr_33335 = state_33317;
(statearr_33335[(12)] = inst_33185__$1);

return statearr_33335;
})();
if(cljs.core.truth_(inst_33186)){
var statearr_33336_35041 = state_33317__$1;
(statearr_33336_35041[(1)] = (5));

} else {
var statearr_33337_35042 = state_33317__$1;
(statearr_33337_35042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (15))){
var inst_33197 = (state_33317[(14)]);
var inst_33196 = (state_33317[(15)]);
var inst_33195 = (state_33317[(16)]);
var inst_33194 = (state_33317[(17)]);
var inst_33212 = (state_33317[(2)]);
var inst_33213 = (inst_33197 + (1));
var tmp33331 = inst_33196;
var tmp33332 = inst_33195;
var tmp33333 = inst_33194;
var inst_33194__$1 = tmp33333;
var inst_33195__$1 = tmp33332;
var inst_33196__$1 = tmp33331;
var inst_33197__$1 = inst_33213;
var state_33317__$1 = (function (){var statearr_33338 = state_33317;
(statearr_33338[(14)] = inst_33197__$1);

(statearr_33338[(15)] = inst_33196__$1);

(statearr_33338[(18)] = inst_33212);

(statearr_33338[(16)] = inst_33195__$1);

(statearr_33338[(17)] = inst_33194__$1);

return statearr_33338;
})();
var statearr_33339_35050 = state_33317__$1;
(statearr_33339_35050[(2)] = null);

(statearr_33339_35050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (21))){
var inst_33241 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33343_35051 = state_33317__$1;
(statearr_33343_35051[(2)] = inst_33241);

(statearr_33343_35051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (31))){
var inst_33267 = (state_33317[(9)]);
var inst_33271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33267);
var state_33317__$1 = state_33317;
var statearr_33344_35055 = state_33317__$1;
(statearr_33344_35055[(2)] = inst_33271);

(statearr_33344_35055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (32))){
var inst_33259 = (state_33317[(19)]);
var inst_33260 = (state_33317[(10)]);
var inst_33262 = (state_33317[(11)]);
var inst_33261 = (state_33317[(20)]);
var inst_33273 = (state_33317[(2)]);
var inst_33274 = (inst_33262 + (1));
var tmp33340 = inst_33259;
var tmp33341 = inst_33260;
var tmp33342 = inst_33261;
var inst_33259__$1 = tmp33340;
var inst_33260__$1 = tmp33341;
var inst_33261__$1 = tmp33342;
var inst_33262__$1 = inst_33274;
var state_33317__$1 = (function (){var statearr_33347 = state_33317;
(statearr_33347[(21)] = inst_33273);

(statearr_33347[(19)] = inst_33259__$1);

(statearr_33347[(10)] = inst_33260__$1);

(statearr_33347[(11)] = inst_33262__$1);

(statearr_33347[(20)] = inst_33261__$1);

return statearr_33347;
})();
var statearr_33349_35056 = state_33317__$1;
(statearr_33349_35056[(2)] = null);

(statearr_33349_35056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (40))){
var inst_33286 = (state_33317[(22)]);
var inst_33290 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33286);
var state_33317__$1 = state_33317;
var statearr_33350_35057 = state_33317__$1;
(statearr_33350_35057[(2)] = inst_33290);

(statearr_33350_35057[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (33))){
var inst_33277 = (state_33317[(23)]);
var inst_33279 = cljs.core.chunked_seq_QMARK_(inst_33277);
var state_33317__$1 = state_33317;
if(inst_33279){
var statearr_33354_35058 = state_33317__$1;
(statearr_33354_35058[(1)] = (36));

} else {
var statearr_33355_35059 = state_33317__$1;
(statearr_33355_35059[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (13))){
var inst_33206 = (state_33317[(24)]);
var inst_33209 = cljs.core.async.close_BANG_(inst_33206);
var state_33317__$1 = state_33317;
var statearr_33359_35060 = state_33317__$1;
(statearr_33359_35060[(2)] = inst_33209);

(statearr_33359_35060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (22))){
var inst_33229 = (state_33317[(8)]);
var inst_33232 = cljs.core.async.close_BANG_(inst_33229);
var state_33317__$1 = state_33317;
var statearr_33360_35061 = state_33317__$1;
(statearr_33360_35061[(2)] = inst_33232);

(statearr_33360_35061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (36))){
var inst_33277 = (state_33317[(23)]);
var inst_33281 = cljs.core.chunk_first(inst_33277);
var inst_33282 = cljs.core.chunk_rest(inst_33277);
var inst_33283 = cljs.core.count(inst_33281);
var inst_33259 = inst_33282;
var inst_33260 = inst_33281;
var inst_33261 = inst_33283;
var inst_33262 = (0);
var state_33317__$1 = (function (){var statearr_33373 = state_33317;
(statearr_33373[(19)] = inst_33259);

(statearr_33373[(10)] = inst_33260);

(statearr_33373[(11)] = inst_33262);

(statearr_33373[(20)] = inst_33261);

return statearr_33373;
})();
var statearr_33377_35062 = state_33317__$1;
(statearr_33377_35062[(2)] = null);

(statearr_33377_35062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (41))){
var inst_33277 = (state_33317[(23)]);
var inst_33292 = (state_33317[(2)]);
var inst_33293 = cljs.core.next(inst_33277);
var inst_33259 = inst_33293;
var inst_33260 = null;
var inst_33261 = (0);
var inst_33262 = (0);
var state_33317__$1 = (function (){var statearr_33380 = state_33317;
(statearr_33380[(25)] = inst_33292);

(statearr_33380[(19)] = inst_33259);

(statearr_33380[(10)] = inst_33260);

(statearr_33380[(11)] = inst_33262);

(statearr_33380[(20)] = inst_33261);

return statearr_33380;
})();
var statearr_33384_35063 = state_33317__$1;
(statearr_33384_35063[(2)] = null);

(statearr_33384_35063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (43))){
var state_33317__$1 = state_33317;
var statearr_33386_35064 = state_33317__$1;
(statearr_33386_35064[(2)] = null);

(statearr_33386_35064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (29))){
var inst_33301 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33390_35065 = state_33317__$1;
(statearr_33390_35065[(2)] = inst_33301);

(statearr_33390_35065[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (44))){
var inst_33310 = (state_33317[(2)]);
var state_33317__$1 = (function (){var statearr_33392 = state_33317;
(statearr_33392[(26)] = inst_33310);

return statearr_33392;
})();
var statearr_33393_35069 = state_33317__$1;
(statearr_33393_35069[(2)] = null);

(statearr_33393_35069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (6))){
var inst_33251 = (state_33317[(27)]);
var inst_33250 = cljs.core.deref(cs);
var inst_33251__$1 = cljs.core.keys(inst_33250);
var inst_33252 = cljs.core.count(inst_33251__$1);
var inst_33253 = cljs.core.reset_BANG_(dctr,inst_33252);
var inst_33258 = cljs.core.seq(inst_33251__$1);
var inst_33259 = inst_33258;
var inst_33260 = null;
var inst_33261 = (0);
var inst_33262 = (0);
var state_33317__$1 = (function (){var statearr_33398 = state_33317;
(statearr_33398[(27)] = inst_33251__$1);

(statearr_33398[(19)] = inst_33259);

(statearr_33398[(10)] = inst_33260);

(statearr_33398[(11)] = inst_33262);

(statearr_33398[(20)] = inst_33261);

(statearr_33398[(28)] = inst_33253);

return statearr_33398;
})();
var statearr_33401_35072 = state_33317__$1;
(statearr_33401_35072[(2)] = null);

(statearr_33401_35072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (28))){
var inst_33277 = (state_33317[(23)]);
var inst_33259 = (state_33317[(19)]);
var inst_33277__$1 = cljs.core.seq(inst_33259);
var state_33317__$1 = (function (){var statearr_33403 = state_33317;
(statearr_33403[(23)] = inst_33277__$1);

return statearr_33403;
})();
if(inst_33277__$1){
var statearr_33405_35073 = state_33317__$1;
(statearr_33405_35073[(1)] = (33));

} else {
var statearr_33406_35074 = state_33317__$1;
(statearr_33406_35074[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (25))){
var inst_33262 = (state_33317[(11)]);
var inst_33261 = (state_33317[(20)]);
var inst_33264 = (inst_33262 < inst_33261);
var inst_33265 = inst_33264;
var state_33317__$1 = state_33317;
if(cljs.core.truth_(inst_33265)){
var statearr_33410_35075 = state_33317__$1;
(statearr_33410_35075[(1)] = (27));

} else {
var statearr_33411_35076 = state_33317__$1;
(statearr_33411_35076[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (34))){
var state_33317__$1 = state_33317;
var statearr_33413_35077 = state_33317__$1;
(statearr_33413_35077[(2)] = null);

(statearr_33413_35077[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (17))){
var state_33317__$1 = state_33317;
var statearr_33417_35078 = state_33317__$1;
(statearr_33417_35078[(2)] = null);

(statearr_33417_35078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (3))){
var inst_33315 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33317__$1,inst_33315);
} else {
if((state_val_33318 === (12))){
var inst_33246 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33419_35079 = state_33317__$1;
(statearr_33419_35079[(2)] = inst_33246);

(statearr_33419_35079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (2))){
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33317__$1,(4),ch);
} else {
if((state_val_33318 === (23))){
var state_33317__$1 = state_33317;
var statearr_33424_35080 = state_33317__$1;
(statearr_33424_35080[(2)] = null);

(statearr_33424_35080[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (35))){
var inst_33299 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33428_35081 = state_33317__$1;
(statearr_33428_35081[(2)] = inst_33299);

(statearr_33428_35081[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (19))){
var inst_33216 = (state_33317[(7)]);
var inst_33220 = cljs.core.chunk_first(inst_33216);
var inst_33221 = cljs.core.chunk_rest(inst_33216);
var inst_33222 = cljs.core.count(inst_33220);
var inst_33194 = inst_33221;
var inst_33195 = inst_33220;
var inst_33196 = inst_33222;
var inst_33197 = (0);
var state_33317__$1 = (function (){var statearr_33430 = state_33317;
(statearr_33430[(14)] = inst_33197);

(statearr_33430[(15)] = inst_33196);

(statearr_33430[(16)] = inst_33195);

(statearr_33430[(17)] = inst_33194);

return statearr_33430;
})();
var statearr_33434_35082 = state_33317__$1;
(statearr_33434_35082[(2)] = null);

(statearr_33434_35082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (11))){
var inst_33216 = (state_33317[(7)]);
var inst_33194 = (state_33317[(17)]);
var inst_33216__$1 = cljs.core.seq(inst_33194);
var state_33317__$1 = (function (){var statearr_33436 = state_33317;
(statearr_33436[(7)] = inst_33216__$1);

return statearr_33436;
})();
if(inst_33216__$1){
var statearr_33437_35083 = state_33317__$1;
(statearr_33437_35083[(1)] = (16));

} else {
var statearr_33439_35084 = state_33317__$1;
(statearr_33439_35084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (9))){
var inst_33248 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33441_35089 = state_33317__$1;
(statearr_33441_35089[(2)] = inst_33248);

(statearr_33441_35089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (5))){
var inst_33192 = cljs.core.deref(cs);
var inst_33193 = cljs.core.seq(inst_33192);
var inst_33194 = inst_33193;
var inst_33195 = null;
var inst_33196 = (0);
var inst_33197 = (0);
var state_33317__$1 = (function (){var statearr_33443 = state_33317;
(statearr_33443[(14)] = inst_33197);

(statearr_33443[(15)] = inst_33196);

(statearr_33443[(16)] = inst_33195);

(statearr_33443[(17)] = inst_33194);

return statearr_33443;
})();
var statearr_33444_35093 = state_33317__$1;
(statearr_33444_35093[(2)] = null);

(statearr_33444_35093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (14))){
var state_33317__$1 = state_33317;
var statearr_33446_35094 = state_33317__$1;
(statearr_33446_35094[(2)] = null);

(statearr_33446_35094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (45))){
var inst_33307 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33450_35095 = state_33317__$1;
(statearr_33450_35095[(2)] = inst_33307);

(statearr_33450_35095[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (26))){
var inst_33251 = (state_33317[(27)]);
var inst_33303 = (state_33317[(2)]);
var inst_33304 = cljs.core.seq(inst_33251);
var state_33317__$1 = (function (){var statearr_33452 = state_33317;
(statearr_33452[(29)] = inst_33303);

return statearr_33452;
})();
if(inst_33304){
var statearr_33453_35099 = state_33317__$1;
(statearr_33453_35099[(1)] = (42));

} else {
var statearr_33454_35100 = state_33317__$1;
(statearr_33454_35100[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (16))){
var inst_33216 = (state_33317[(7)]);
var inst_33218 = cljs.core.chunked_seq_QMARK_(inst_33216);
var state_33317__$1 = state_33317;
if(inst_33218){
var statearr_33458_35101 = state_33317__$1;
(statearr_33458_35101[(1)] = (19));

} else {
var statearr_33459_35102 = state_33317__$1;
(statearr_33459_35102[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (38))){
var inst_33296 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33461_35103 = state_33317__$1;
(statearr_33461_35103[(2)] = inst_33296);

(statearr_33461_35103[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (30))){
var state_33317__$1 = state_33317;
var statearr_33464_35107 = state_33317__$1;
(statearr_33464_35107[(2)] = null);

(statearr_33464_35107[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (10))){
var inst_33197 = (state_33317[(14)]);
var inst_33195 = (state_33317[(16)]);
var inst_33205 = cljs.core._nth(inst_33195,inst_33197);
var inst_33206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33205,(0),null);
var inst_33207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33205,(1),null);
var state_33317__$1 = (function (){var statearr_33467 = state_33317;
(statearr_33467[(24)] = inst_33206);

return statearr_33467;
})();
if(cljs.core.truth_(inst_33207)){
var statearr_33468_35108 = state_33317__$1;
(statearr_33468_35108[(1)] = (13));

} else {
var statearr_33471_35109 = state_33317__$1;
(statearr_33471_35109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (18))){
var inst_33244 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33473_35110 = state_33317__$1;
(statearr_33473_35110[(2)] = inst_33244);

(statearr_33473_35110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (42))){
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33317__$1,(45),dchan);
} else {
if((state_val_33318 === (37))){
var inst_33277 = (state_33317[(23)]);
var inst_33286 = (state_33317[(22)]);
var inst_33185 = (state_33317[(12)]);
var inst_33286__$1 = cljs.core.first(inst_33277);
var inst_33287 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33286__$1,inst_33185,done);
var state_33317__$1 = (function (){var statearr_33478 = state_33317;
(statearr_33478[(22)] = inst_33286__$1);

return statearr_33478;
})();
if(cljs.core.truth_(inst_33287)){
var statearr_33479_35114 = state_33317__$1;
(statearr_33479_35114[(1)] = (39));

} else {
var statearr_33480_35115 = state_33317__$1;
(statearr_33480_35115[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (8))){
var inst_33197 = (state_33317[(14)]);
var inst_33196 = (state_33317[(15)]);
var inst_33199 = (inst_33197 < inst_33196);
var inst_33200 = inst_33199;
var state_33317__$1 = state_33317;
if(cljs.core.truth_(inst_33200)){
var statearr_33485_35116 = state_33317__$1;
(statearr_33485_35116[(1)] = (10));

} else {
var statearr_33487_35117 = state_33317__$1;
(statearr_33487_35117[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32107__auto__ = null;
var cljs$core$async$mult_$_state_machine__32107__auto____0 = (function (){
var statearr_33492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33492[(0)] = cljs$core$async$mult_$_state_machine__32107__auto__);

(statearr_33492[(1)] = (1));

return statearr_33492;
});
var cljs$core$async$mult_$_state_machine__32107__auto____1 = (function (state_33317){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33317);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33494){var ex__32110__auto__ = e33494;
var statearr_33495_35125 = state_33317;
(statearr_33495_35125[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33317[(4)]))){
var statearr_33498_35126 = state_33317;
(statearr_33498_35126[(1)] = cljs.core.first((state_33317[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35127 = state_33317;
state_33317 = G__35127;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32107__auto__ = function(state_33317){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32107__auto____1.call(this,state_33317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32107__auto____0;
cljs$core$async$mult_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32107__auto____1;
return cljs$core$async$mult_$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33502 = f__32402__auto__();
(statearr_33502[(6)] = c__32401__auto___35024);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33509 = arguments.length;
switch (G__33509) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35132 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35132(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35136 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35136(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35137 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35137(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35142 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35142(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35143 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35143(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35148 = arguments.length;
var i__4865__auto___35149 = (0);
while(true){
if((i__4865__auto___35149 < len__4864__auto___35148)){
args__4870__auto__.push((arguments[i__4865__auto___35149]));

var G__35150 = (i__4865__auto___35149 + (1));
i__4865__auto___35149 = G__35150;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33580){
var map__33581 = p__33580;
var map__33581__$1 = cljs.core.__destructure_map(map__33581);
var opts = map__33581__$1;
var statearr_33584_35151 = state;
(statearr_33584_35151[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33587_35152 = state;
(statearr_33587_35152[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33590_35153 = state;
(statearr_33590_35153[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33570){
var G__33571 = cljs.core.first(seq33570);
var seq33570__$1 = cljs.core.next(seq33570);
var G__33572 = cljs.core.first(seq33570__$1);
var seq33570__$2 = cljs.core.next(seq33570__$1);
var G__33573 = cljs.core.first(seq33570__$2);
var seq33570__$3 = cljs.core.next(seq33570__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33571,G__33572,G__33573,seq33570__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33600 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33601){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33601 = meta33601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33602,meta33601__$1){
var self__ = this;
var _33602__$1 = this;
return (new cljs.core.async.t_cljs$core$async33600(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33601__$1));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33602){
var self__ = this;
var _33602__$1 = this;
return self__.meta33601;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33601","meta33601",1934242518,null)], null);
}));

(cljs.core.async.t_cljs$core$async33600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33600");

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33600.
 */
cljs.core.async.__GT_t_cljs$core$async33600 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33601){
return (new cljs.core.async.t_cljs$core$async33600(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33601));
});

}

return (new cljs.core.async.t_cljs$core$async33600(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32401__auto___35191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33671){
var state_val_33672 = (state_33671[(1)]);
if((state_val_33672 === (7))){
var inst_33631 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33631)){
var statearr_33675_35192 = state_33671__$1;
(statearr_33675_35192[(1)] = (8));

} else {
var statearr_33676_35193 = state_33671__$1;
(statearr_33676_35193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (20))){
var inst_33624 = (state_33671[(7)]);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33671__$1,(23),out,inst_33624);
} else {
if((state_val_33672 === (1))){
var inst_33607 = calc_state();
var inst_33608 = cljs.core.__destructure_map(inst_33607);
var inst_33609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33608,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33608,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33608,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33612 = inst_33607;
var state_33671__$1 = (function (){var statearr_33681 = state_33671;
(statearr_33681[(8)] = inst_33610);

(statearr_33681[(9)] = inst_33611);

(statearr_33681[(10)] = inst_33609);

(statearr_33681[(11)] = inst_33612);

return statearr_33681;
})();
var statearr_33686_35194 = state_33671__$1;
(statearr_33686_35194[(2)] = null);

(statearr_33686_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (24))){
var inst_33615 = (state_33671[(12)]);
var inst_33612 = inst_33615;
var state_33671__$1 = (function (){var statearr_33688 = state_33671;
(statearr_33688[(11)] = inst_33612);

return statearr_33688;
})();
var statearr_33689_35195 = state_33671__$1;
(statearr_33689_35195[(2)] = null);

(statearr_33689_35195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (4))){
var inst_33626 = (state_33671[(13)]);
var inst_33624 = (state_33671[(7)]);
var inst_33623 = (state_33671[(2)]);
var inst_33624__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33623,(0),null);
var inst_33625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33623,(1),null);
var inst_33626__$1 = (inst_33624__$1 == null);
var state_33671__$1 = (function (){var statearr_33690 = state_33671;
(statearr_33690[(13)] = inst_33626__$1);

(statearr_33690[(7)] = inst_33624__$1);

(statearr_33690[(14)] = inst_33625);

return statearr_33690;
})();
if(cljs.core.truth_(inst_33626__$1)){
var statearr_33691_35202 = state_33671__$1;
(statearr_33691_35202[(1)] = (5));

} else {
var statearr_33692_35203 = state_33671__$1;
(statearr_33692_35203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (15))){
var inst_33645 = (state_33671[(15)]);
var inst_33616 = (state_33671[(16)]);
var inst_33645__$1 = cljs.core.empty_QMARK_(inst_33616);
var state_33671__$1 = (function (){var statearr_33697 = state_33671;
(statearr_33697[(15)] = inst_33645__$1);

return statearr_33697;
})();
if(inst_33645__$1){
var statearr_33698_35204 = state_33671__$1;
(statearr_33698_35204[(1)] = (17));

} else {
var statearr_33702_35205 = state_33671__$1;
(statearr_33702_35205[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (21))){
var inst_33615 = (state_33671[(12)]);
var inst_33612 = inst_33615;
var state_33671__$1 = (function (){var statearr_33704 = state_33671;
(statearr_33704[(11)] = inst_33612);

return statearr_33704;
})();
var statearr_33705_35206 = state_33671__$1;
(statearr_33705_35206[(2)] = null);

(statearr_33705_35206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (13))){
var inst_33638 = (state_33671[(2)]);
var inst_33639 = calc_state();
var inst_33612 = inst_33639;
var state_33671__$1 = (function (){var statearr_33706 = state_33671;
(statearr_33706[(17)] = inst_33638);

(statearr_33706[(11)] = inst_33612);

return statearr_33706;
})();
var statearr_33707_35207 = state_33671__$1;
(statearr_33707_35207[(2)] = null);

(statearr_33707_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (22))){
var inst_33665 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33711_35208 = state_33671__$1;
(statearr_33711_35208[(2)] = inst_33665);

(statearr_33711_35208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (6))){
var inst_33625 = (state_33671[(14)]);
var inst_33629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33625,change);
var state_33671__$1 = state_33671;
var statearr_33713_35209 = state_33671__$1;
(statearr_33713_35209[(2)] = inst_33629);

(statearr_33713_35209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (25))){
var state_33671__$1 = state_33671;
var statearr_33714_35210 = state_33671__$1;
(statearr_33714_35210[(2)] = null);

(statearr_33714_35210[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (17))){
var inst_33617 = (state_33671[(18)]);
var inst_33625 = (state_33671[(14)]);
var inst_33647 = (inst_33617.cljs$core$IFn$_invoke$arity$1 ? inst_33617.cljs$core$IFn$_invoke$arity$1(inst_33625) : inst_33617.call(null,inst_33625));
var inst_33648 = cljs.core.not(inst_33647);
var state_33671__$1 = state_33671;
var statearr_33719_35211 = state_33671__$1;
(statearr_33719_35211[(2)] = inst_33648);

(statearr_33719_35211[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (3))){
var inst_33669 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33671__$1,inst_33669);
} else {
if((state_val_33672 === (12))){
var state_33671__$1 = state_33671;
var statearr_33720_35212 = state_33671__$1;
(statearr_33720_35212[(2)] = null);

(statearr_33720_35212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (2))){
var inst_33615 = (state_33671[(12)]);
var inst_33612 = (state_33671[(11)]);
var inst_33615__$1 = cljs.core.__destructure_map(inst_33612);
var inst_33616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33615__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33671__$1 = (function (){var statearr_33725 = state_33671;
(statearr_33725[(12)] = inst_33615__$1);

(statearr_33725[(18)] = inst_33617);

(statearr_33725[(16)] = inst_33616);

return statearr_33725;
})();
return cljs.core.async.ioc_alts_BANG_(state_33671__$1,(4),inst_33618);
} else {
if((state_val_33672 === (23))){
var inst_33656 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33656)){
var statearr_33726_35213 = state_33671__$1;
(statearr_33726_35213[(1)] = (24));

} else {
var statearr_33727_35214 = state_33671__$1;
(statearr_33727_35214[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (19))){
var inst_33651 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33728_35215 = state_33671__$1;
(statearr_33728_35215[(2)] = inst_33651);

(statearr_33728_35215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (11))){
var inst_33625 = (state_33671[(14)]);
var inst_33635 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33625);
var state_33671__$1 = state_33671;
var statearr_33729_35216 = state_33671__$1;
(statearr_33729_35216[(2)] = inst_33635);

(statearr_33729_35216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (9))){
var inst_33616 = (state_33671[(16)]);
var inst_33625 = (state_33671[(14)]);
var inst_33642 = (state_33671[(19)]);
var inst_33642__$1 = (inst_33616.cljs$core$IFn$_invoke$arity$1 ? inst_33616.cljs$core$IFn$_invoke$arity$1(inst_33625) : inst_33616.call(null,inst_33625));
var state_33671__$1 = (function (){var statearr_33730 = state_33671;
(statearr_33730[(19)] = inst_33642__$1);

return statearr_33730;
})();
if(cljs.core.truth_(inst_33642__$1)){
var statearr_33731_35217 = state_33671__$1;
(statearr_33731_35217[(1)] = (14));

} else {
var statearr_33732_35218 = state_33671__$1;
(statearr_33732_35218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (5))){
var inst_33626 = (state_33671[(13)]);
var state_33671__$1 = state_33671;
var statearr_33734_35219 = state_33671__$1;
(statearr_33734_35219[(2)] = inst_33626);

(statearr_33734_35219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (14))){
var inst_33642 = (state_33671[(19)]);
var state_33671__$1 = state_33671;
var statearr_33735_35220 = state_33671__$1;
(statearr_33735_35220[(2)] = inst_33642);

(statearr_33735_35220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (26))){
var inst_33661 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33736_35221 = state_33671__$1;
(statearr_33736_35221[(2)] = inst_33661);

(statearr_33736_35221[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (16))){
var inst_33653 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33653)){
var statearr_33737_35222 = state_33671__$1;
(statearr_33737_35222[(1)] = (20));

} else {
var statearr_33738_35223 = state_33671__$1;
(statearr_33738_35223[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (10))){
var inst_33667 = (state_33671[(2)]);
var state_33671__$1 = state_33671;
var statearr_33739_35224 = state_33671__$1;
(statearr_33739_35224[(2)] = inst_33667);

(statearr_33739_35224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (18))){
var inst_33645 = (state_33671[(15)]);
var state_33671__$1 = state_33671;
var statearr_33744_35225 = state_33671__$1;
(statearr_33744_35225[(2)] = inst_33645);

(statearr_33744_35225[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33672 === (8))){
var inst_33624 = (state_33671[(7)]);
var inst_33633 = (inst_33624 == null);
var state_33671__$1 = state_33671;
if(cljs.core.truth_(inst_33633)){
var statearr_33749_35226 = state_33671__$1;
(statearr_33749_35226[(1)] = (11));

} else {
var statearr_33750_35227 = state_33671__$1;
(statearr_33750_35227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32107__auto__ = null;
var cljs$core$async$mix_$_state_machine__32107__auto____0 = (function (){
var statearr_33754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33754[(0)] = cljs$core$async$mix_$_state_machine__32107__auto__);

(statearr_33754[(1)] = (1));

return statearr_33754;
});
var cljs$core$async$mix_$_state_machine__32107__auto____1 = (function (state_33671){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33671);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33756){var ex__32110__auto__ = e33756;
var statearr_33757_35234 = state_33671;
(statearr_33757_35234[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33671[(4)]))){
var statearr_33758_35235 = state_33671;
(statearr_33758_35235[(1)] = cljs.core.first((state_33671[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_33671;
state_33671 = G__35236;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32107__auto__ = function(state_33671){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32107__auto____1.call(this,state_33671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32107__auto____0;
cljs$core$async$mix_$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32107__auto____1;
return cljs$core$async$mix_$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33763 = f__32402__auto__();
(statearr_33763[(6)] = c__32401__auto___35191);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35237 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35237(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35238 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35238(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35239 = (function() {
var G__35240 = null;
var G__35240__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35240__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35240 = function(p,v){
switch(arguments.length){
case 1:
return G__35240__1.call(this,p);
case 2:
return G__35240__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35240.cljs$core$IFn$_invoke$arity$1 = G__35240__1;
G__35240.cljs$core$IFn$_invoke$arity$2 = G__35240__2;
return G__35240;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33791 = arguments.length;
switch (G__33791) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35239(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35239(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33810 = arguments.length;
switch (G__33810) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33803_SHARP_){
if(cljs.core.truth_((p1__33803_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33803_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33803_SHARP_.call(null,topic)))){
return p1__33803_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33803_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33815 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33816){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new cljs.core.async.t_cljs$core$async33815(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33816__$1));
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
}));

(cljs.core.async.t_cljs$core$async33815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33815");

(cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33815.
 */
cljs.core.async.__GT_t_cljs$core$async33815 = (function cljs$core$async$__GT_t_cljs$core$async33815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33816){
return (new cljs.core.async.t_cljs$core$async33815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33816));
});

}

return (new cljs.core.async.t_cljs$core$async33815(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32401__auto___35262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_33896){
var state_val_33897 = (state_33896[(1)]);
if((state_val_33897 === (7))){
var inst_33891 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33898_35263 = state_33896__$1;
(statearr_33898_35263[(2)] = inst_33891);

(statearr_33898_35263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (20))){
var state_33896__$1 = state_33896;
var statearr_33899_35264 = state_33896__$1;
(statearr_33899_35264[(2)] = null);

(statearr_33899_35264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (1))){
var state_33896__$1 = state_33896;
var statearr_33900_35265 = state_33896__$1;
(statearr_33900_35265[(2)] = null);

(statearr_33900_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (24))){
var inst_33873 = (state_33896[(7)]);
var inst_33882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33873);
var state_33896__$1 = state_33896;
var statearr_33901_35266 = state_33896__$1;
(statearr_33901_35266[(2)] = inst_33882);

(statearr_33901_35266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (4))){
var inst_33825 = (state_33896[(8)]);
var inst_33825__$1 = (state_33896[(2)]);
var inst_33826 = (inst_33825__$1 == null);
var state_33896__$1 = (function (){var statearr_33902 = state_33896;
(statearr_33902[(8)] = inst_33825__$1);

return statearr_33902;
})();
if(cljs.core.truth_(inst_33826)){
var statearr_33903_35267 = state_33896__$1;
(statearr_33903_35267[(1)] = (5));

} else {
var statearr_33904_35268 = state_33896__$1;
(statearr_33904_35268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (15))){
var inst_33867 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33905_35269 = state_33896__$1;
(statearr_33905_35269[(2)] = inst_33867);

(statearr_33905_35269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (21))){
var inst_33887 = (state_33896[(2)]);
var state_33896__$1 = (function (){var statearr_33906 = state_33896;
(statearr_33906[(9)] = inst_33887);

return statearr_33906;
})();
var statearr_33907_35270 = state_33896__$1;
(statearr_33907_35270[(2)] = null);

(statearr_33907_35270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (13))){
var inst_33849 = (state_33896[(10)]);
var inst_33851 = cljs.core.chunked_seq_QMARK_(inst_33849);
var state_33896__$1 = state_33896;
if(inst_33851){
var statearr_33908_35271 = state_33896__$1;
(statearr_33908_35271[(1)] = (16));

} else {
var statearr_33909_35272 = state_33896__$1;
(statearr_33909_35272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (22))){
var inst_33879 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
if(cljs.core.truth_(inst_33879)){
var statearr_33910_35273 = state_33896__$1;
(statearr_33910_35273[(1)] = (23));

} else {
var statearr_33911_35274 = state_33896__$1;
(statearr_33911_35274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (6))){
var inst_33873 = (state_33896[(7)]);
var inst_33875 = (state_33896[(11)]);
var inst_33825 = (state_33896[(8)]);
var inst_33873__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33825) : topic_fn.call(null,inst_33825));
var inst_33874 = cljs.core.deref(mults);
var inst_33875__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33874,inst_33873__$1);
var state_33896__$1 = (function (){var statearr_33912 = state_33896;
(statearr_33912[(7)] = inst_33873__$1);

(statearr_33912[(11)] = inst_33875__$1);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33875__$1)){
var statearr_33913_35275 = state_33896__$1;
(statearr_33913_35275[(1)] = (19));

} else {
var statearr_33914_35276 = state_33896__$1;
(statearr_33914_35276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (25))){
var inst_33884 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33915_35277 = state_33896__$1;
(statearr_33915_35277[(2)] = inst_33884);

(statearr_33915_35277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (17))){
var inst_33849 = (state_33896[(10)]);
var inst_33858 = cljs.core.first(inst_33849);
var inst_33859 = cljs.core.async.muxch_STAR_(inst_33858);
var inst_33860 = cljs.core.async.close_BANG_(inst_33859);
var inst_33861 = cljs.core.next(inst_33849);
var inst_33835 = inst_33861;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33896__$1 = (function (){var statearr_33916 = state_33896;
(statearr_33916[(12)] = inst_33860);

(statearr_33916[(13)] = inst_33837);

(statearr_33916[(14)] = inst_33836);

(statearr_33916[(15)] = inst_33838);

(statearr_33916[(16)] = inst_33835);

return statearr_33916;
})();
var statearr_33917_35278 = state_33896__$1;
(statearr_33917_35278[(2)] = null);

(statearr_33917_35278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (3))){
var inst_33893 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33896__$1,inst_33893);
} else {
if((state_val_33897 === (12))){
var inst_33869 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33919_35280 = state_33896__$1;
(statearr_33919_35280[(2)] = inst_33869);

(statearr_33919_35280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (2))){
var state_33896__$1 = state_33896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33896__$1,(4),ch);
} else {
if((state_val_33897 === (23))){
var state_33896__$1 = state_33896;
var statearr_33921_35281 = state_33896__$1;
(statearr_33921_35281[(2)] = null);

(statearr_33921_35281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (19))){
var inst_33875 = (state_33896[(11)]);
var inst_33825 = (state_33896[(8)]);
var inst_33877 = cljs.core.async.muxch_STAR_(inst_33875);
var state_33896__$1 = state_33896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33896__$1,(22),inst_33877,inst_33825);
} else {
if((state_val_33897 === (11))){
var inst_33849 = (state_33896[(10)]);
var inst_33835 = (state_33896[(16)]);
var inst_33849__$1 = cljs.core.seq(inst_33835);
var state_33896__$1 = (function (){var statearr_33922 = state_33896;
(statearr_33922[(10)] = inst_33849__$1);

return statearr_33922;
})();
if(inst_33849__$1){
var statearr_33923_35282 = state_33896__$1;
(statearr_33923_35282[(1)] = (13));

} else {
var statearr_33924_35283 = state_33896__$1;
(statearr_33924_35283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (9))){
var inst_33871 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33925_35284 = state_33896__$1;
(statearr_33925_35284[(2)] = inst_33871);

(statearr_33925_35284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (5))){
var inst_33832 = cljs.core.deref(mults);
var inst_33833 = cljs.core.vals(inst_33832);
var inst_33834 = cljs.core.seq(inst_33833);
var inst_33835 = inst_33834;
var inst_33836 = null;
var inst_33837 = (0);
var inst_33838 = (0);
var state_33896__$1 = (function (){var statearr_33926 = state_33896;
(statearr_33926[(13)] = inst_33837);

(statearr_33926[(14)] = inst_33836);

(statearr_33926[(15)] = inst_33838);

(statearr_33926[(16)] = inst_33835);

return statearr_33926;
})();
var statearr_33928_35285 = state_33896__$1;
(statearr_33928_35285[(2)] = null);

(statearr_33928_35285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (14))){
var state_33896__$1 = state_33896;
var statearr_33933_35286 = state_33896__$1;
(statearr_33933_35286[(2)] = null);

(statearr_33933_35286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (16))){
var inst_33849 = (state_33896[(10)]);
var inst_33853 = cljs.core.chunk_first(inst_33849);
var inst_33854 = cljs.core.chunk_rest(inst_33849);
var inst_33855 = cljs.core.count(inst_33853);
var inst_33835 = inst_33854;
var inst_33836 = inst_33853;
var inst_33837 = inst_33855;
var inst_33838 = (0);
var state_33896__$1 = (function (){var statearr_33934 = state_33896;
(statearr_33934[(13)] = inst_33837);

(statearr_33934[(14)] = inst_33836);

(statearr_33934[(15)] = inst_33838);

(statearr_33934[(16)] = inst_33835);

return statearr_33934;
})();
var statearr_33935_35287 = state_33896__$1;
(statearr_33935_35287[(2)] = null);

(statearr_33935_35287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (10))){
var inst_33837 = (state_33896[(13)]);
var inst_33836 = (state_33896[(14)]);
var inst_33838 = (state_33896[(15)]);
var inst_33835 = (state_33896[(16)]);
var inst_33843 = cljs.core._nth(inst_33836,inst_33838);
var inst_33844 = cljs.core.async.muxch_STAR_(inst_33843);
var inst_33845 = cljs.core.async.close_BANG_(inst_33844);
var inst_33846 = (inst_33838 + (1));
var tmp33929 = inst_33837;
var tmp33930 = inst_33836;
var tmp33931 = inst_33835;
var inst_33835__$1 = tmp33931;
var inst_33836__$1 = tmp33930;
var inst_33837__$1 = tmp33929;
var inst_33838__$1 = inst_33846;
var state_33896__$1 = (function (){var statearr_33936 = state_33896;
(statearr_33936[(13)] = inst_33837__$1);

(statearr_33936[(14)] = inst_33836__$1);

(statearr_33936[(17)] = inst_33845);

(statearr_33936[(15)] = inst_33838__$1);

(statearr_33936[(16)] = inst_33835__$1);

return statearr_33936;
})();
var statearr_33937_35288 = state_33896__$1;
(statearr_33937_35288[(2)] = null);

(statearr_33937_35288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (18))){
var inst_33864 = (state_33896[(2)]);
var state_33896__$1 = state_33896;
var statearr_33939_35289 = state_33896__$1;
(statearr_33939_35289[(2)] = inst_33864);

(statearr_33939_35289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33897 === (8))){
var inst_33837 = (state_33896[(13)]);
var inst_33838 = (state_33896[(15)]);
var inst_33840 = (inst_33838 < inst_33837);
var inst_33841 = inst_33840;
var state_33896__$1 = state_33896;
if(cljs.core.truth_(inst_33841)){
var statearr_33941_35290 = state_33896__$1;
(statearr_33941_35290[(1)] = (10));

} else {
var statearr_33942_35291 = state_33896__$1;
(statearr_33942_35291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_33943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33943[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_33943[(1)] = (1));

return statearr_33943;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_33896){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_33896);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e33944){var ex__32110__auto__ = e33944;
var statearr_33945_35295 = state_33896;
(statearr_33945_35295[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_33896[(4)]))){
var statearr_33946_35297 = state_33896;
(statearr_33946_35297[(1)] = cljs.core.first((state_33896[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35298 = state_33896;
state_33896 = G__35298;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_33896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_33896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_33947 = f__32402__auto__();
(statearr_33947[(6)] = c__32401__auto___35262);

return statearr_33947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33949 = arguments.length;
switch (G__33949) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33953 = arguments.length;
switch (G__33953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33959 = arguments.length;
switch (G__33959) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32401__auto___35306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34010){
var state_val_34011 = (state_34010[(1)]);
if((state_val_34011 === (7))){
var state_34010__$1 = state_34010;
var statearr_34019_35307 = state_34010__$1;
(statearr_34019_35307[(2)] = null);

(statearr_34019_35307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (1))){
var state_34010__$1 = state_34010;
var statearr_34026_35308 = state_34010__$1;
(statearr_34026_35308[(2)] = null);

(statearr_34026_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (4))){
var inst_33967 = (state_34010[(7)]);
var inst_33968 = (state_34010[(8)]);
var inst_33970 = (inst_33968 < inst_33967);
var state_34010__$1 = state_34010;
if(cljs.core.truth_(inst_33970)){
var statearr_34033_35309 = state_34010__$1;
(statearr_34033_35309[(1)] = (6));

} else {
var statearr_34034_35310 = state_34010__$1;
(statearr_34034_35310[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (15))){
var inst_33996 = (state_34010[(9)]);
var inst_34001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33996);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34010__$1,(17),out,inst_34001);
} else {
if((state_val_34011 === (13))){
var inst_33996 = (state_34010[(9)]);
var inst_33996__$1 = (state_34010[(2)]);
var inst_33997 = cljs.core.some(cljs.core.nil_QMARK_,inst_33996__$1);
var state_34010__$1 = (function (){var statearr_34035 = state_34010;
(statearr_34035[(9)] = inst_33996__$1);

return statearr_34035;
})();
if(cljs.core.truth_(inst_33997)){
var statearr_34036_35311 = state_34010__$1;
(statearr_34036_35311[(1)] = (14));

} else {
var statearr_34037_35312 = state_34010__$1;
(statearr_34037_35312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (6))){
var state_34010__$1 = state_34010;
var statearr_34038_35313 = state_34010__$1;
(statearr_34038_35313[(2)] = null);

(statearr_34038_35313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (17))){
var inst_34003 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34064 = state_34010;
(statearr_34064[(10)] = inst_34003);

return statearr_34064;
})();
var statearr_34066_35314 = state_34010__$1;
(statearr_34066_35314[(2)] = null);

(statearr_34066_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (3))){
var inst_34008 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34010__$1,inst_34008);
} else {
if((state_val_34011 === (12))){
var _ = (function (){var statearr_34067 = state_34010;
(statearr_34067[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34067;
})();
var state_34010__$1 = state_34010;
var ex34049 = (state_34010__$1[(2)]);
var statearr_34068_35316 = state_34010__$1;
(statearr_34068_35316[(5)] = ex34049);


if((ex34049 instanceof Object)){
var statearr_34069_35318 = state_34010__$1;
(statearr_34069_35318[(1)] = (11));

(statearr_34069_35318[(5)] = null);

} else {
throw ex34049;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (2))){
var inst_33966 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33967 = cnt;
var inst_33968 = (0);
var state_34010__$1 = (function (){var statearr_34072 = state_34010;
(statearr_34072[(7)] = inst_33967);

(statearr_34072[(11)] = inst_33966);

(statearr_34072[(8)] = inst_33968);

return statearr_34072;
})();
var statearr_34073_35319 = state_34010__$1;
(statearr_34073_35319[(2)] = null);

(statearr_34073_35319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (11))){
var inst_33975 = (state_34010[(2)]);
var inst_33976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34010__$1 = (function (){var statearr_34074 = state_34010;
(statearr_34074[(12)] = inst_33975);

return statearr_34074;
})();
var statearr_34075_35320 = state_34010__$1;
(statearr_34075_35320[(2)] = inst_33976);

(statearr_34075_35320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (9))){
var inst_33968 = (state_34010[(8)]);
var _ = (function (){var statearr_34076 = state_34010;
(statearr_34076[(4)] = cljs.core.cons((12),(state_34010[(4)])));

return statearr_34076;
})();
var inst_33982 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33968) : chs__$1.call(null,inst_33968));
var inst_33983 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33968) : done.call(null,inst_33968));
var inst_33984 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33982,inst_33983);
var ___$1 = (function (){var statearr_34078 = state_34010;
(statearr_34078[(4)] = cljs.core.rest((state_34010[(4)])));

return statearr_34078;
})();
var state_34010__$1 = state_34010;
var statearr_34079_35321 = state_34010__$1;
(statearr_34079_35321[(2)] = inst_33984);

(statearr_34079_35321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (5))){
var inst_33994 = (state_34010[(2)]);
var state_34010__$1 = (function (){var statearr_34084 = state_34010;
(statearr_34084[(13)] = inst_33994);

return statearr_34084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34010__$1,(13),dchan);
} else {
if((state_val_34011 === (14))){
var inst_33999 = cljs.core.async.close_BANG_(out);
var state_34010__$1 = state_34010;
var statearr_34085_35322 = state_34010__$1;
(statearr_34085_35322[(2)] = inst_33999);

(statearr_34085_35322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (16))){
var inst_34006 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34086_35324 = state_34010__$1;
(statearr_34086_35324[(2)] = inst_34006);

(statearr_34086_35324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (10))){
var inst_33968 = (state_34010[(8)]);
var inst_33987 = (state_34010[(2)]);
var inst_33988 = (inst_33968 + (1));
var inst_33968__$1 = inst_33988;
var state_34010__$1 = (function (){var statearr_34087 = state_34010;
(statearr_34087[(14)] = inst_33987);

(statearr_34087[(8)] = inst_33968__$1);

return statearr_34087;
})();
var statearr_34088_35326 = state_34010__$1;
(statearr_34088_35326[(2)] = null);

(statearr_34088_35326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34011 === (8))){
var inst_33992 = (state_34010[(2)]);
var state_34010__$1 = state_34010;
var statearr_34089_35327 = state_34010__$1;
(statearr_34089_35327[(2)] = inst_33992);

(statearr_34089_35327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34090[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34090[(1)] = (1));

return statearr_34090;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34010){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34010);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34091){var ex__32110__auto__ = e34091;
var statearr_34092_35328 = state_34010;
(statearr_34092_35328[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34010[(4)]))){
var statearr_34093_35329 = state_34010;
(statearr_34093_35329[(1)] = cljs.core.first((state_34010[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35330 = state_34010;
state_34010 = G__35330;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34094 = f__32402__auto__();
(statearr_34094[(6)] = c__32401__auto___35306);

return statearr_34094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34097 = arguments.length;
switch (G__34097) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34137){
var state_val_34138 = (state_34137[(1)]);
if((state_val_34138 === (7))){
var inst_34116 = (state_34137[(7)]);
var inst_34115 = (state_34137[(8)]);
var inst_34115__$1 = (state_34137[(2)]);
var inst_34116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34115__$1,(0),null);
var inst_34117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34115__$1,(1),null);
var inst_34118 = (inst_34116__$1 == null);
var state_34137__$1 = (function (){var statearr_34143 = state_34137;
(statearr_34143[(7)] = inst_34116__$1);

(statearr_34143[(8)] = inst_34115__$1);

(statearr_34143[(9)] = inst_34117);

return statearr_34143;
})();
if(cljs.core.truth_(inst_34118)){
var statearr_34144_35333 = state_34137__$1;
(statearr_34144_35333[(1)] = (8));

} else {
var statearr_34145_35334 = state_34137__$1;
(statearr_34145_35334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (1))){
var inst_34105 = cljs.core.vec(chs);
var inst_34106 = inst_34105;
var state_34137__$1 = (function (){var statearr_34146 = state_34137;
(statearr_34146[(10)] = inst_34106);

return statearr_34146;
})();
var statearr_34147_35335 = state_34137__$1;
(statearr_34147_35335[(2)] = null);

(statearr_34147_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (4))){
var inst_34106 = (state_34137[(10)]);
var state_34137__$1 = state_34137;
return cljs.core.async.ioc_alts_BANG_(state_34137__$1,(7),inst_34106);
} else {
if((state_val_34138 === (6))){
var inst_34132 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
var statearr_34148_35336 = state_34137__$1;
(statearr_34148_35336[(2)] = inst_34132);

(statearr_34148_35336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (3))){
var inst_34134 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34137__$1,inst_34134);
} else {
if((state_val_34138 === (2))){
var inst_34106 = (state_34137[(10)]);
var inst_34108 = cljs.core.count(inst_34106);
var inst_34109 = (inst_34108 > (0));
var state_34137__$1 = state_34137;
if(cljs.core.truth_(inst_34109)){
var statearr_34150_35337 = state_34137__$1;
(statearr_34150_35337[(1)] = (4));

} else {
var statearr_34151_35338 = state_34137__$1;
(statearr_34151_35338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (11))){
var inst_34106 = (state_34137[(10)]);
var inst_34125 = (state_34137[(2)]);
var tmp34149 = inst_34106;
var inst_34106__$1 = tmp34149;
var state_34137__$1 = (function (){var statearr_34152 = state_34137;
(statearr_34152[(10)] = inst_34106__$1);

(statearr_34152[(11)] = inst_34125);

return statearr_34152;
})();
var statearr_34153_35340 = state_34137__$1;
(statearr_34153_35340[(2)] = null);

(statearr_34153_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (9))){
var inst_34116 = (state_34137[(7)]);
var state_34137__$1 = state_34137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34137__$1,(11),out,inst_34116);
} else {
if((state_val_34138 === (5))){
var inst_34130 = cljs.core.async.close_BANG_(out);
var state_34137__$1 = state_34137;
var statearr_34158_35342 = state_34137__$1;
(statearr_34158_35342[(2)] = inst_34130);

(statearr_34158_35342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (10))){
var inst_34128 = (state_34137[(2)]);
var state_34137__$1 = state_34137;
var statearr_34159_35343 = state_34137__$1;
(statearr_34159_35343[(2)] = inst_34128);

(statearr_34159_35343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34138 === (8))){
var inst_34116 = (state_34137[(7)]);
var inst_34115 = (state_34137[(8)]);
var inst_34106 = (state_34137[(10)]);
var inst_34117 = (state_34137[(9)]);
var inst_34120 = (function (){var cs = inst_34106;
var vec__34111 = inst_34115;
var v = inst_34116;
var c = inst_34117;
return (function (p1__34095_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34095_SHARP_);
});
})();
var inst_34121 = cljs.core.filterv(inst_34120,inst_34106);
var inst_34106__$1 = inst_34121;
var state_34137__$1 = (function (){var statearr_34160 = state_34137;
(statearr_34160[(10)] = inst_34106__$1);

return statearr_34160;
})();
var statearr_34161_35344 = state_34137__$1;
(statearr_34161_35344[(2)] = null);

(statearr_34161_35344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34166[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34166[(1)] = (1));

return statearr_34166;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34137){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34137);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34167){var ex__32110__auto__ = e34167;
var statearr_34168_35345 = state_34137;
(statearr_34168_35345[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34137[(4)]))){
var statearr_34169_35346 = state_34137;
(statearr_34169_35346[(1)] = cljs.core.first((state_34137[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35347 = state_34137;
state_34137 = G__35347;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34170 = f__32402__auto__();
(statearr_34170[(6)] = c__32401__auto___35332);

return statearr_34170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34172 = arguments.length;
switch (G__34172) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34198){
var state_val_34199 = (state_34198[(1)]);
if((state_val_34199 === (7))){
var inst_34180 = (state_34198[(7)]);
var inst_34180__$1 = (state_34198[(2)]);
var inst_34181 = (inst_34180__$1 == null);
var inst_34182 = cljs.core.not(inst_34181);
var state_34198__$1 = (function (){var statearr_34203 = state_34198;
(statearr_34203[(7)] = inst_34180__$1);

return statearr_34203;
})();
if(inst_34182){
var statearr_34204_35350 = state_34198__$1;
(statearr_34204_35350[(1)] = (8));

} else {
var statearr_34205_35351 = state_34198__$1;
(statearr_34205_35351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (1))){
var inst_34175 = (0);
var state_34198__$1 = (function (){var statearr_34206 = state_34198;
(statearr_34206[(8)] = inst_34175);

return statearr_34206;
})();
var statearr_34207_35352 = state_34198__$1;
(statearr_34207_35352[(2)] = null);

(statearr_34207_35352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (4))){
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34198__$1,(7),ch);
} else {
if((state_val_34199 === (6))){
var inst_34193 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34208_35353 = state_34198__$1;
(statearr_34208_35353[(2)] = inst_34193);

(statearr_34208_35353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (3))){
var inst_34195 = (state_34198[(2)]);
var inst_34196 = cljs.core.async.close_BANG_(out);
var state_34198__$1 = (function (){var statearr_34209 = state_34198;
(statearr_34209[(9)] = inst_34195);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34198__$1,inst_34196);
} else {
if((state_val_34199 === (2))){
var inst_34175 = (state_34198[(8)]);
var inst_34177 = (inst_34175 < n);
var state_34198__$1 = state_34198;
if(cljs.core.truth_(inst_34177)){
var statearr_34210_35354 = state_34198__$1;
(statearr_34210_35354[(1)] = (4));

} else {
var statearr_34211_35355 = state_34198__$1;
(statearr_34211_35355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (11))){
var inst_34175 = (state_34198[(8)]);
var inst_34185 = (state_34198[(2)]);
var inst_34186 = (inst_34175 + (1));
var inst_34175__$1 = inst_34186;
var state_34198__$1 = (function (){var statearr_34212 = state_34198;
(statearr_34212[(8)] = inst_34175__$1);

(statearr_34212[(10)] = inst_34185);

return statearr_34212;
})();
var statearr_34213_35356 = state_34198__$1;
(statearr_34213_35356[(2)] = null);

(statearr_34213_35356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (9))){
var state_34198__$1 = state_34198;
var statearr_34214_35357 = state_34198__$1;
(statearr_34214_35357[(2)] = null);

(statearr_34214_35357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (5))){
var state_34198__$1 = state_34198;
var statearr_34215_35358 = state_34198__$1;
(statearr_34215_35358[(2)] = null);

(statearr_34215_35358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (10))){
var inst_34190 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34216_35359 = state_34198__$1;
(statearr_34216_35359[(2)] = inst_34190);

(statearr_34216_35359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (8))){
var inst_34180 = (state_34198[(7)]);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34198__$1,(11),out,inst_34180);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34217[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34217[(1)] = (1));

return statearr_34217;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34198){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34198);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34218){var ex__32110__auto__ = e34218;
var statearr_34219_35361 = state_34198;
(statearr_34219_35361[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34198[(4)]))){
var statearr_34220_35362 = state_34198;
(statearr_34220_35362[(1)] = cljs.core.first((state_34198[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_34198;
state_34198 = G__35363;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34221 = f__32402__auto__();
(statearr_34221[(6)] = c__32401__auto___35349);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34223 = (function (f,ch,meta34224){
this.f = f;
this.ch = ch;
this.meta34224 = meta34224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34225,meta34224__$1){
var self__ = this;
var _34225__$1 = this;
return (new cljs.core.async.t_cljs$core$async34223(self__.f,self__.ch,meta34224__$1));
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34225){
var self__ = this;
var _34225__$1 = this;
return self__.meta34224;
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34226 = (function (f,ch,meta34224,_,fn1,meta34227){
this.f = f;
this.ch = ch;
this.meta34224 = meta34224;
this._ = _;
this.fn1 = fn1;
this.meta34227 = meta34227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34228,meta34227__$1){
var self__ = this;
var _34228__$1 = this;
return (new cljs.core.async.t_cljs$core$async34226(self__.f,self__.ch,self__.meta34224,self__._,self__.fn1,meta34227__$1));
}));

(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34228){
var self__ = this;
var _34228__$1 = this;
return self__.meta34227;
}));

(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34222_SHARP_){
var G__34229 = (((p1__34222_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34222_SHARP_) : self__.f.call(null,p1__34222_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34229) : f1.call(null,G__34229));
});
}));

(cljs.core.async.t_cljs$core$async34226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34224","meta34224",-1889121205,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34223","cljs.core.async/t_cljs$core$async34223",1389636612,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34227","meta34227",-126598053,null)], null);
}));

(cljs.core.async.t_cljs$core$async34226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34226");

(cljs.core.async.t_cljs$core$async34226.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34226.
 */
cljs.core.async.__GT_t_cljs$core$async34226 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34226(f__$1,ch__$1,meta34224__$1,___$2,fn1__$1,meta34227){
return (new cljs.core.async.t_cljs$core$async34226(f__$1,ch__$1,meta34224__$1,___$2,fn1__$1,meta34227));
});

}

return (new cljs.core.async.t_cljs$core$async34226(self__.f,self__.ch,self__.meta34224,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34231 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34231) : self__.f.call(null,G__34231));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34224","meta34224",-1889121205,null)], null);
}));

(cljs.core.async.t_cljs$core$async34223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34223");

(cljs.core.async.t_cljs$core$async34223.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34223.
 */
cljs.core.async.__GT_t_cljs$core$async34223 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34223(f__$1,ch__$1,meta34224){
return (new cljs.core.async.t_cljs$core$async34223(f__$1,ch__$1,meta34224));
});

}

return (new cljs.core.async.t_cljs$core$async34223(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34235 = (function (f,ch,meta34236){
this.f = f;
this.ch = ch;
this.meta34236 = meta34236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34237,meta34236__$1){
var self__ = this;
var _34237__$1 = this;
return (new cljs.core.async.t_cljs$core$async34235(self__.f,self__.ch,meta34236__$1));
}));

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34237){
var self__ = this;
var _34237__$1 = this;
return self__.meta34236;
}));

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34236","meta34236",-1146356791,null)], null);
}));

(cljs.core.async.t_cljs$core$async34235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34235");

(cljs.core.async.t_cljs$core$async34235.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34235.
 */
cljs.core.async.__GT_t_cljs$core$async34235 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34235(f__$1,ch__$1,meta34236){
return (new cljs.core.async.t_cljs$core$async34235(f__$1,ch__$1,meta34236));
});

}

return (new cljs.core.async.t_cljs$core$async34235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34242 = (function (p,ch,meta34243){
this.p = p;
this.ch = ch;
this.meta34243 = meta34243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34244,meta34243__$1){
var self__ = this;
var _34244__$1 = this;
return (new cljs.core.async.t_cljs$core$async34242(self__.p,self__.ch,meta34243__$1));
}));

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34244){
var self__ = this;
var _34244__$1 = this;
return self__.meta34243;
}));

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34243","meta34243",1554277222,null)], null);
}));

(cljs.core.async.t_cljs$core$async34242.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34242");

(cljs.core.async.t_cljs$core$async34242.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34242");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34242.
 */
cljs.core.async.__GT_t_cljs$core$async34242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34242(p__$1,ch__$1,meta34243){
return (new cljs.core.async.t_cljs$core$async34242(p__$1,ch__$1,meta34243));
});

}

return (new cljs.core.async.t_cljs$core$async34242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34307){
var state_val_34308 = (state_34307[(1)]);
if((state_val_34308 === (7))){
var inst_34303 = (state_34307[(2)]);
var state_34307__$1 = state_34307;
var statearr_34311_35386 = state_34307__$1;
(statearr_34311_35386[(2)] = inst_34303);

(statearr_34311_35386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (1))){
var state_34307__$1 = state_34307;
var statearr_34312_35387 = state_34307__$1;
(statearr_34312_35387[(2)] = null);

(statearr_34312_35387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (4))){
var inst_34289 = (state_34307[(7)]);
var inst_34289__$1 = (state_34307[(2)]);
var inst_34290 = (inst_34289__$1 == null);
var state_34307__$1 = (function (){var statearr_34313 = state_34307;
(statearr_34313[(7)] = inst_34289__$1);

return statearr_34313;
})();
if(cljs.core.truth_(inst_34290)){
var statearr_34315_35388 = state_34307__$1;
(statearr_34315_35388[(1)] = (5));

} else {
var statearr_34316_35389 = state_34307__$1;
(statearr_34316_35389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (6))){
var inst_34289 = (state_34307[(7)]);
var inst_34294 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34289) : p.call(null,inst_34289));
var state_34307__$1 = state_34307;
if(cljs.core.truth_(inst_34294)){
var statearr_34317_35393 = state_34307__$1;
(statearr_34317_35393[(1)] = (8));

} else {
var statearr_34318_35394 = state_34307__$1;
(statearr_34318_35394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (3))){
var inst_34305 = (state_34307[(2)]);
var state_34307__$1 = state_34307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34307__$1,inst_34305);
} else {
if((state_val_34308 === (2))){
var state_34307__$1 = state_34307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34307__$1,(4),ch);
} else {
if((state_val_34308 === (11))){
var inst_34297 = (state_34307[(2)]);
var state_34307__$1 = state_34307;
var statearr_34319_35395 = state_34307__$1;
(statearr_34319_35395[(2)] = inst_34297);

(statearr_34319_35395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (9))){
var state_34307__$1 = state_34307;
var statearr_34320_35397 = state_34307__$1;
(statearr_34320_35397[(2)] = null);

(statearr_34320_35397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (5))){
var inst_34292 = cljs.core.async.close_BANG_(out);
var state_34307__$1 = state_34307;
var statearr_34324_35401 = state_34307__$1;
(statearr_34324_35401[(2)] = inst_34292);

(statearr_34324_35401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (10))){
var inst_34300 = (state_34307[(2)]);
var state_34307__$1 = (function (){var statearr_34325 = state_34307;
(statearr_34325[(8)] = inst_34300);

return statearr_34325;
})();
var statearr_34326_35402 = state_34307__$1;
(statearr_34326_35402[(2)] = null);

(statearr_34326_35402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34308 === (8))){
var inst_34289 = (state_34307[(7)]);
var state_34307__$1 = state_34307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34307__$1,(11),out,inst_34289);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34327 = [null,null,null,null,null,null,null,null,null];
(statearr_34327[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34327[(1)] = (1));

return statearr_34327;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34307){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34307);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34328){var ex__32110__auto__ = e34328;
var statearr_34329_35403 = state_34307;
(statearr_34329_35403[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34307[(4)]))){
var statearr_34330_35404 = state_34307;
(statearr_34330_35404[(1)] = cljs.core.first((state_34307[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35405 = state_34307;
state_34307 = G__35405;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34331 = f__32402__auto__();
(statearr_34331[(6)] = c__32401__auto___35382);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34333 = arguments.length;
switch (G__34333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32401__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34397_35411 = state_34395__$1;
(statearr_34397_35411[(2)] = inst_34391);

(statearr_34397_35411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (20))){
var inst_34361 = (state_34395[(7)]);
var inst_34372 = (state_34395[(2)]);
var inst_34373 = cljs.core.next(inst_34361);
var inst_34347 = inst_34373;
var inst_34348 = null;
var inst_34349 = (0);
var inst_34350 = (0);
var state_34395__$1 = (function (){var statearr_34398 = state_34395;
(statearr_34398[(8)] = inst_34372);

(statearr_34398[(9)] = inst_34349);

(statearr_34398[(10)] = inst_34347);

(statearr_34398[(11)] = inst_34348);

(statearr_34398[(12)] = inst_34350);

return statearr_34398;
})();
var statearr_34399_35413 = state_34395__$1;
(statearr_34399_35413[(2)] = null);

(statearr_34399_35413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (1))){
var state_34395__$1 = state_34395;
var statearr_34400_35419 = state_34395__$1;
(statearr_34400_35419[(2)] = null);

(statearr_34400_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var inst_34336 = (state_34395[(13)]);
var inst_34336__$1 = (state_34395[(2)]);
var inst_34337 = (inst_34336__$1 == null);
var state_34395__$1 = (function (){var statearr_34401 = state_34395;
(statearr_34401[(13)] = inst_34336__$1);

return statearr_34401;
})();
if(cljs.core.truth_(inst_34337)){
var statearr_34402_35420 = state_34395__$1;
(statearr_34402_35420[(1)] = (5));

} else {
var statearr_34403_35421 = state_34395__$1;
(statearr_34403_35421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (15))){
var state_34395__$1 = state_34395;
var statearr_34407_35422 = state_34395__$1;
(statearr_34407_35422[(2)] = null);

(statearr_34407_35422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (21))){
var state_34395__$1 = state_34395;
var statearr_34410_35423 = state_34395__$1;
(statearr_34410_35423[(2)] = null);

(statearr_34410_35423[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (13))){
var inst_34349 = (state_34395[(9)]);
var inst_34347 = (state_34395[(10)]);
var inst_34348 = (state_34395[(11)]);
var inst_34350 = (state_34395[(12)]);
var inst_34357 = (state_34395[(2)]);
var inst_34358 = (inst_34350 + (1));
var tmp34404 = inst_34349;
var tmp34405 = inst_34347;
var tmp34406 = inst_34348;
var inst_34347__$1 = tmp34405;
var inst_34348__$1 = tmp34406;
var inst_34349__$1 = tmp34404;
var inst_34350__$1 = inst_34358;
var state_34395__$1 = (function (){var statearr_34417 = state_34395;
(statearr_34417[(9)] = inst_34349__$1);

(statearr_34417[(10)] = inst_34347__$1);

(statearr_34417[(14)] = inst_34357);

(statearr_34417[(11)] = inst_34348__$1);

(statearr_34417[(12)] = inst_34350__$1);

return statearr_34417;
})();
var statearr_34418_35424 = state_34395__$1;
(statearr_34418_35424[(2)] = null);

(statearr_34418_35424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (22))){
var state_34395__$1 = state_34395;
var statearr_34422_35425 = state_34395__$1;
(statearr_34422_35425[(2)] = null);

(statearr_34422_35425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (6))){
var inst_34336 = (state_34395[(13)]);
var inst_34345 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34336) : f.call(null,inst_34336));
var inst_34346 = cljs.core.seq(inst_34345);
var inst_34347 = inst_34346;
var inst_34348 = null;
var inst_34349 = (0);
var inst_34350 = (0);
var state_34395__$1 = (function (){var statearr_34423 = state_34395;
(statearr_34423[(9)] = inst_34349);

(statearr_34423[(10)] = inst_34347);

(statearr_34423[(11)] = inst_34348);

(statearr_34423[(12)] = inst_34350);

return statearr_34423;
})();
var statearr_34424_35426 = state_34395__$1;
(statearr_34424_35426[(2)] = null);

(statearr_34424_35426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (17))){
var inst_34361 = (state_34395[(7)]);
var inst_34365 = cljs.core.chunk_first(inst_34361);
var inst_34366 = cljs.core.chunk_rest(inst_34361);
var inst_34367 = cljs.core.count(inst_34365);
var inst_34347 = inst_34366;
var inst_34348 = inst_34365;
var inst_34349 = inst_34367;
var inst_34350 = (0);
var state_34395__$1 = (function (){var statearr_34425 = state_34395;
(statearr_34425[(9)] = inst_34349);

(statearr_34425[(10)] = inst_34347);

(statearr_34425[(11)] = inst_34348);

(statearr_34425[(12)] = inst_34350);

return statearr_34425;
})();
var statearr_34426_35427 = state_34395__$1;
(statearr_34426_35427[(2)] = null);

(statearr_34426_35427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (12))){
var inst_34381 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34427_35428 = state_34395__$1;
(statearr_34427_35428[(2)] = inst_34381);

(statearr_34427_35428[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (2))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(4),in$);
} else {
if((state_val_34396 === (23))){
var inst_34389 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34428_35429 = state_34395__$1;
(statearr_34428_35429[(2)] = inst_34389);

(statearr_34428_35429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (19))){
var inst_34376 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34429_35430 = state_34395__$1;
(statearr_34429_35430[(2)] = inst_34376);

(statearr_34429_35430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (11))){
var inst_34347 = (state_34395[(10)]);
var inst_34361 = (state_34395[(7)]);
var inst_34361__$1 = cljs.core.seq(inst_34347);
var state_34395__$1 = (function (){var statearr_34430 = state_34395;
(statearr_34430[(7)] = inst_34361__$1);

return statearr_34430;
})();
if(inst_34361__$1){
var statearr_34431_35431 = state_34395__$1;
(statearr_34431_35431[(1)] = (14));

} else {
var statearr_34432_35432 = state_34395__$1;
(statearr_34432_35432[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (9))){
var inst_34383 = (state_34395[(2)]);
var inst_34384 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34395__$1 = (function (){var statearr_34433 = state_34395;
(statearr_34433[(15)] = inst_34383);

return statearr_34433;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34434_35433 = state_34395__$1;
(statearr_34434_35433[(1)] = (21));

} else {
var statearr_34435_35434 = state_34395__$1;
(statearr_34435_35434[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var inst_34339 = cljs.core.async.close_BANG_(out);
var state_34395__$1 = state_34395;
var statearr_34436_35435 = state_34395__$1;
(statearr_34436_35435[(2)] = inst_34339);

(statearr_34436_35435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (14))){
var inst_34361 = (state_34395[(7)]);
var inst_34363 = cljs.core.chunked_seq_QMARK_(inst_34361);
var state_34395__$1 = state_34395;
if(inst_34363){
var statearr_34437_35436 = state_34395__$1;
(statearr_34437_35436[(1)] = (17));

} else {
var statearr_34438_35437 = state_34395__$1;
(statearr_34438_35437[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (16))){
var inst_34379 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34439_35438 = state_34395__$1;
(statearr_34439_35438[(2)] = inst_34379);

(statearr_34439_35438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (10))){
var inst_34348 = (state_34395[(11)]);
var inst_34350 = (state_34395[(12)]);
var inst_34355 = cljs.core._nth(inst_34348,inst_34350);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(13),out,inst_34355);
} else {
if((state_val_34396 === (18))){
var inst_34361 = (state_34395[(7)]);
var inst_34370 = cljs.core.first(inst_34361);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(20),out,inst_34370);
} else {
if((state_val_34396 === (8))){
var inst_34349 = (state_34395[(9)]);
var inst_34350 = (state_34395[(12)]);
var inst_34352 = (inst_34350 < inst_34349);
var inst_34353 = inst_34352;
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34353)){
var statearr_34440_35439 = state_34395__$1;
(statearr_34440_35439[(1)] = (10));

} else {
var statearr_34441_35444 = state_34395__$1;
(statearr_34441_35444[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____0 = (function (){
var statearr_34442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34442[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__);

(statearr_34442[(1)] = (1));

return statearr_34442;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____1 = (function (state_34395){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34444){var ex__32110__auto__ = e34444;
var statearr_34445_35445 = state_34395;
(statearr_34445_35445[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34395[(4)]))){
var statearr_34446_35446 = state_34395;
(statearr_34446_35446[(1)] = cljs.core.first((state_34395[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35447 = state_34395;
state_34395 = G__35447;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32107__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34448 = f__32402__auto__();
(statearr_34448[(6)] = c__32401__auto__);

return statearr_34448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));

return c__32401__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34452 = arguments.length;
switch (G__34452) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34458 = arguments.length;
switch (G__34458) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34460 = arguments.length;
switch (G__34460) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34520){
var state_val_34521 = (state_34520[(1)]);
if((state_val_34521 === (7))){
var inst_34502 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34529_35456 = state_34520__$1;
(statearr_34529_35456[(2)] = inst_34502);

(statearr_34529_35456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (1))){
var inst_34464 = null;
var state_34520__$1 = (function (){var statearr_34532 = state_34520;
(statearr_34532[(7)] = inst_34464);

return statearr_34532;
})();
var statearr_34533_35457 = state_34520__$1;
(statearr_34533_35457[(2)] = null);

(statearr_34533_35457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (4))){
var inst_34480 = (state_34520[(8)]);
var inst_34480__$1 = (state_34520[(2)]);
var inst_34488 = (inst_34480__$1 == null);
var inst_34489 = cljs.core.not(inst_34488);
var state_34520__$1 = (function (){var statearr_34534 = state_34520;
(statearr_34534[(8)] = inst_34480__$1);

return statearr_34534;
})();
if(inst_34489){
var statearr_34535_35459 = state_34520__$1;
(statearr_34535_35459[(1)] = (5));

} else {
var statearr_34536_35460 = state_34520__$1;
(statearr_34536_35460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (6))){
var state_34520__$1 = state_34520;
var statearr_34537_35461 = state_34520__$1;
(statearr_34537_35461[(2)] = null);

(statearr_34537_35461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (3))){
var inst_34504 = (state_34520[(2)]);
var inst_34508 = cljs.core.async.close_BANG_(out);
var state_34520__$1 = (function (){var statearr_34538 = state_34520;
(statearr_34538[(9)] = inst_34504);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34520__$1,inst_34508);
} else {
if((state_val_34521 === (2))){
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34520__$1,(4),ch);
} else {
if((state_val_34521 === (11))){
var inst_34480 = (state_34520[(8)]);
var inst_34496 = (state_34520[(2)]);
var inst_34464 = inst_34480;
var state_34520__$1 = (function (){var statearr_34539 = state_34520;
(statearr_34539[(7)] = inst_34464);

(statearr_34539[(10)] = inst_34496);

return statearr_34539;
})();
var statearr_34540_35462 = state_34520__$1;
(statearr_34540_35462[(2)] = null);

(statearr_34540_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (9))){
var inst_34480 = (state_34520[(8)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34520__$1,(11),out,inst_34480);
} else {
if((state_val_34521 === (5))){
var inst_34464 = (state_34520[(7)]);
var inst_34480 = (state_34520[(8)]);
var inst_34491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34480,inst_34464);
var state_34520__$1 = state_34520;
if(inst_34491){
var statearr_34542_35463 = state_34520__$1;
(statearr_34542_35463[(1)] = (8));

} else {
var statearr_34543_35464 = state_34520__$1;
(statearr_34543_35464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (10))){
var inst_34499 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34544_35465 = state_34520__$1;
(statearr_34544_35465[(2)] = inst_34499);

(statearr_34544_35465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (8))){
var inst_34464 = (state_34520[(7)]);
var tmp34541 = inst_34464;
var inst_34464__$1 = tmp34541;
var state_34520__$1 = (function (){var statearr_34545 = state_34520;
(statearr_34545[(7)] = inst_34464__$1);

return statearr_34545;
})();
var statearr_34546_35466 = state_34520__$1;
(statearr_34546_35466[(2)] = null);

(statearr_34546_35466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34520){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34520);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34548){var ex__32110__auto__ = e34548;
var statearr_34549_35469 = state_34520;
(statearr_34549_35469[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34520[(4)]))){
var statearr_34550_35470 = state_34520;
(statearr_34550_35470[(1)] = cljs.core.first((state_34520[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35472 = state_34520;
state_34520 = G__35472;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34551 = f__32402__auto__();
(statearr_34551[(6)] = c__32401__auto___35453);

return statearr_34551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34604){
var state_val_34605 = (state_34604[(1)]);
if((state_val_34605 === (7))){
var inst_34600 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34608_35480 = state_34604__$1;
(statearr_34608_35480[(2)] = inst_34600);

(statearr_34608_35480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (1))){
var inst_34554 = (new Array(n));
var inst_34555 = inst_34554;
var inst_34556 = (0);
var state_34604__$1 = (function (){var statearr_34609 = state_34604;
(statearr_34609[(7)] = inst_34555);

(statearr_34609[(8)] = inst_34556);

return statearr_34609;
})();
var statearr_34610_35481 = state_34604__$1;
(statearr_34610_35481[(2)] = null);

(statearr_34610_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (4))){
var inst_34560 = (state_34604[(9)]);
var inst_34560__$1 = (state_34604[(2)]);
var inst_34562 = (inst_34560__$1 == null);
var inst_34563 = cljs.core.not(inst_34562);
var state_34604__$1 = (function (){var statearr_34611 = state_34604;
(statearr_34611[(9)] = inst_34560__$1);

return statearr_34611;
})();
if(inst_34563){
var statearr_34612_35483 = state_34604__$1;
(statearr_34612_35483[(1)] = (5));

} else {
var statearr_34613_35484 = state_34604__$1;
(statearr_34613_35484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (15))){
var inst_34583 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34614_35486 = state_34604__$1;
(statearr_34614_35486[(2)] = inst_34583);

(statearr_34614_35486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (13))){
var state_34604__$1 = state_34604;
var statearr_34615_35488 = state_34604__$1;
(statearr_34615_35488[(2)] = null);

(statearr_34615_35488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (6))){
var inst_34556 = (state_34604[(8)]);
var inst_34579 = (inst_34556 > (0));
var state_34604__$1 = state_34604;
if(cljs.core.truth_(inst_34579)){
var statearr_34616_35489 = state_34604__$1;
(statearr_34616_35489[(1)] = (12));

} else {
var statearr_34617_35490 = state_34604__$1;
(statearr_34617_35490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (3))){
var inst_34602 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34604__$1,inst_34602);
} else {
if((state_val_34605 === (12))){
var inst_34555 = (state_34604[(7)]);
var inst_34581 = cljs.core.vec(inst_34555);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34604__$1,(15),out,inst_34581);
} else {
if((state_val_34605 === (2))){
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34604__$1,(4),ch);
} else {
if((state_val_34605 === (11))){
var inst_34573 = (state_34604[(2)]);
var inst_34574 = (new Array(n));
var inst_34555 = inst_34574;
var inst_34556 = (0);
var state_34604__$1 = (function (){var statearr_34618 = state_34604;
(statearr_34618[(7)] = inst_34555);

(statearr_34618[(8)] = inst_34556);

(statearr_34618[(10)] = inst_34573);

return statearr_34618;
})();
var statearr_34619_35493 = state_34604__$1;
(statearr_34619_35493[(2)] = null);

(statearr_34619_35493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (9))){
var inst_34555 = (state_34604[(7)]);
var inst_34571 = cljs.core.vec(inst_34555);
var state_34604__$1 = state_34604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34604__$1,(11),out,inst_34571);
} else {
if((state_val_34605 === (5))){
var inst_34560 = (state_34604[(9)]);
var inst_34555 = (state_34604[(7)]);
var inst_34556 = (state_34604[(8)]);
var inst_34566 = (state_34604[(11)]);
var inst_34565 = (inst_34555[inst_34556] = inst_34560);
var inst_34566__$1 = (inst_34556 + (1));
var inst_34567 = (inst_34566__$1 < n);
var state_34604__$1 = (function (){var statearr_34620 = state_34604;
(statearr_34620[(12)] = inst_34565);

(statearr_34620[(11)] = inst_34566__$1);

return statearr_34620;
})();
if(cljs.core.truth_(inst_34567)){
var statearr_34621_35495 = state_34604__$1;
(statearr_34621_35495[(1)] = (8));

} else {
var statearr_34622_35496 = state_34604__$1;
(statearr_34622_35496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (14))){
var inst_34586 = (state_34604[(2)]);
var inst_34598 = cljs.core.async.close_BANG_(out);
var state_34604__$1 = (function (){var statearr_34624 = state_34604;
(statearr_34624[(13)] = inst_34586);

return statearr_34624;
})();
var statearr_34625_35497 = state_34604__$1;
(statearr_34625_35497[(2)] = inst_34598);

(statearr_34625_35497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (10))){
var inst_34577 = (state_34604[(2)]);
var state_34604__$1 = state_34604;
var statearr_34626_35498 = state_34604__$1;
(statearr_34626_35498[(2)] = inst_34577);

(statearr_34626_35498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34605 === (8))){
var inst_34555 = (state_34604[(7)]);
var inst_34566 = (state_34604[(11)]);
var tmp34623 = inst_34555;
var inst_34555__$1 = tmp34623;
var inst_34556 = inst_34566;
var state_34604__$1 = (function (){var statearr_34627 = state_34604;
(statearr_34627[(7)] = inst_34555__$1);

(statearr_34627[(8)] = inst_34556);

return statearr_34627;
})();
var statearr_34628_35499 = state_34604__$1;
(statearr_34628_35499[(2)] = null);

(statearr_34628_35499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34629[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34629[(1)] = (1));

return statearr_34629;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34604){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34604);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34630){var ex__32110__auto__ = e34630;
var statearr_34631_35500 = state_34604;
(statearr_34631_35500[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34604[(4)]))){
var statearr_34632_35501 = state_34604;
(statearr_34632_35501[(1)] = cljs.core.first((state_34604[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35502 = state_34604;
state_34604 = G__35502;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34633 = f__32402__auto__();
(statearr_34633[(6)] = c__32401__auto___35476);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34635 = arguments.length;
switch (G__34635) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32401__auto___35504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32402__auto__ = (function (){var switch__32106__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34679 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34695_35507 = state_34692__$1;
(statearr_34695_35507[(2)] = inst_34679);

(statearr_34695_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var inst_34639 = [];
var inst_34640 = inst_34639;
var inst_34641 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34692__$1 = (function (){var statearr_34696 = state_34692;
(statearr_34696[(7)] = inst_34641);

(statearr_34696[(8)] = inst_34640);

return statearr_34696;
})();
var statearr_34697_35508 = state_34692__$1;
(statearr_34697_35508[(2)] = null);

(statearr_34697_35508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (4))){
var inst_34644 = (state_34692[(9)]);
var inst_34644__$1 = (state_34692[(2)]);
var inst_34645 = (inst_34644__$1 == null);
var inst_34646 = cljs.core.not(inst_34645);
var state_34692__$1 = (function (){var statearr_34698 = state_34692;
(statearr_34698[(9)] = inst_34644__$1);

return statearr_34698;
})();
if(inst_34646){
var statearr_34699_35509 = state_34692__$1;
(statearr_34699_35509[(1)] = (5));

} else {
var statearr_34700_35510 = state_34692__$1;
(statearr_34700_35510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (15))){
var inst_34640 = (state_34692[(8)]);
var inst_34671 = cljs.core.vec(inst_34640);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(18),out,inst_34671);
} else {
if((state_val_34693 === (13))){
var inst_34666 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34701_35513 = state_34692__$1;
(statearr_34701_35513[(2)] = inst_34666);

(statearr_34701_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34640 = (state_34692[(8)]);
var inst_34668 = inst_34640.length;
var inst_34669 = (inst_34668 > (0));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34669)){
var statearr_34702_35514 = state_34692__$1;
(statearr_34702_35514[(1)] = (15));

} else {
var statearr_34703_35515 = state_34692__$1;
(statearr_34703_35515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (17))){
var inst_34676 = (state_34692[(2)]);
var inst_34677 = cljs.core.async.close_BANG_(out);
var state_34692__$1 = (function (){var statearr_34704 = state_34692;
(statearr_34704[(10)] = inst_34676);

return statearr_34704;
})();
var statearr_34705_35517 = state_34692__$1;
(statearr_34705_35517[(2)] = inst_34677);

(statearr_34705_35517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (3))){
var inst_34681 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34692__$1,inst_34681);
} else {
if((state_val_34693 === (12))){
var inst_34640 = (state_34692[(8)]);
var inst_34659 = cljs.core.vec(inst_34640);
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34692__$1,(14),out,inst_34659);
} else {
if((state_val_34693 === (2))){
var state_34692__$1 = state_34692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34692__$1,(4),ch);
} else {
if((state_val_34693 === (11))){
var inst_34644 = (state_34692[(9)]);
var inst_34648 = (state_34692[(11)]);
var inst_34640 = (state_34692[(8)]);
var inst_34656 = inst_34640.push(inst_34644);
var tmp34706 = inst_34640;
var inst_34640__$1 = tmp34706;
var inst_34641 = inst_34648;
var state_34692__$1 = (function (){var statearr_34707 = state_34692;
(statearr_34707[(7)] = inst_34641);

(statearr_34707[(12)] = inst_34656);

(statearr_34707[(8)] = inst_34640__$1);

return statearr_34707;
})();
var statearr_34708_35524 = state_34692__$1;
(statearr_34708_35524[(2)] = null);

(statearr_34708_35524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (9))){
var inst_34641 = (state_34692[(7)]);
var inst_34652 = cljs.core.keyword_identical_QMARK_(inst_34641,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34692__$1 = state_34692;
var statearr_34709_35526 = state_34692__$1;
(statearr_34709_35526[(2)] = inst_34652);

(statearr_34709_35526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34644 = (state_34692[(9)]);
var inst_34641 = (state_34692[(7)]);
var inst_34648 = (state_34692[(11)]);
var inst_34649 = (state_34692[(13)]);
var inst_34648__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34644) : f.call(null,inst_34644));
var inst_34649__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34648__$1,inst_34641);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(11)] = inst_34648__$1);

(statearr_34710[(13)] = inst_34649__$1);

return statearr_34710;
})();
if(inst_34649__$1){
var statearr_34711_35527 = state_34692__$1;
(statearr_34711_35527[(1)] = (8));

} else {
var statearr_34712_35529 = state_34692__$1;
(statearr_34712_35529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34644 = (state_34692[(9)]);
var inst_34648 = (state_34692[(11)]);
var inst_34661 = (state_34692[(2)]);
var inst_34662 = [];
var inst_34663 = inst_34662.push(inst_34644);
var inst_34640 = inst_34662;
var inst_34641 = inst_34648;
var state_34692__$1 = (function (){var statearr_34713 = state_34692;
(statearr_34713[(14)] = inst_34663);

(statearr_34713[(7)] = inst_34641);

(statearr_34713[(8)] = inst_34640);

(statearr_34713[(15)] = inst_34661);

return statearr_34713;
})();
var statearr_34714_35530 = state_34692__$1;
(statearr_34714_35530[(2)] = null);

(statearr_34714_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (16))){
var state_34692__$1 = state_34692;
var statearr_34715_35531 = state_34692__$1;
(statearr_34715_35531[(2)] = null);

(statearr_34715_35531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var inst_34654 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34654)){
var statearr_34716_35532 = state_34692__$1;
(statearr_34716_35532[(1)] = (11));

} else {
var statearr_34717_35533 = state_34692__$1;
(statearr_34717_35533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (18))){
var inst_34673 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34718_35534 = state_34692__$1;
(statearr_34718_35534[(2)] = inst_34673);

(statearr_34718_35534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34649 = (state_34692[(13)]);
var state_34692__$1 = state_34692;
var statearr_34719_35535 = state_34692__$1;
(statearr_34719_35535[(2)] = inst_34649);

(statearr_34719_35535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32107__auto__ = null;
var cljs$core$async$state_machine__32107__auto____0 = (function (){
var statearr_34720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34720[(0)] = cljs$core$async$state_machine__32107__auto__);

(statearr_34720[(1)] = (1));

return statearr_34720;
});
var cljs$core$async$state_machine__32107__auto____1 = (function (state_34692){
while(true){
var ret_value__32108__auto__ = (function (){try{while(true){
var result__32109__auto__ = switch__32106__auto__(state_34692);
if(cljs.core.keyword_identical_QMARK_(result__32109__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32109__auto__;
}
break;
}
}catch (e34723){var ex__32110__auto__ = e34723;
var statearr_34724_35536 = state_34692;
(statearr_34724_35536[(2)] = ex__32110__auto__);


if(cljs.core.seq((state_34692[(4)]))){
var statearr_34725_35537 = state_34692;
(statearr_34725_35537[(1)] = cljs.core.first((state_34692[(4)])));

} else {
throw ex__32110__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35538 = state_34692;
state_34692 = G__35538;
continue;
} else {
return ret_value__32108__auto__;
}
break;
}
});
cljs$core$async$state_machine__32107__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32107__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32107__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32107__auto____0;
cljs$core$async$state_machine__32107__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32107__auto____1;
return cljs$core$async$state_machine__32107__auto__;
})()
})();
var state__32403__auto__ = (function (){var statearr_34726 = f__32402__auto__();
(statearr_34726[(6)] = c__32401__auto___35504);

return statearr_34726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32403__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
