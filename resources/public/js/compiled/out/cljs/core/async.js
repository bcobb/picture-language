// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18608 = (function (f,fn_handler,meta18609){
this.f = f;
this.fn_handler = fn_handler;
this.meta18609 = meta18609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18608.cljs$lang$type = true;
cljs.core.async.t18608.cljs$lang$ctorStr = "cljs.core.async/t18608";
cljs.core.async.t18608.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t18608");
});
cljs.core.async.t18608.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18610){var self__ = this;
var _18610__$1 = this;return self__.meta18609;
});
cljs.core.async.t18608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18610,meta18609__$1){var self__ = this;
var _18610__$1 = this;return (new cljs.core.async.t18608(self__.f,self__.fn_handler,meta18609__$1));
});
cljs.core.async.__GT_t18608 = (function __GT_t18608(f__$1,fn_handler__$1,meta18609){return (new cljs.core.async.t18608(f__$1,fn_handler__$1,meta18609));
});
}
return (new cljs.core.async.t18608(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18612 = buff;if(G__18612)
{var bit__12193__auto__ = null;if(cljs.core.truth_((function (){var or__11529__auto__ = bit__12193__auto__;if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{return G__18612.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18612.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18612);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18613 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18613);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18613,ret){
return (function (){return fn1.call(null,val_18613);
});})(val_18613,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12399__auto___18614 = n;var x_18615 = (0);while(true){
if((x_18615 < n__12399__auto___18614))
{(a[x_18615] = (0));
{
var G__18616 = (x_18615 + (1));
x_18615 = G__18616;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18617 = (i + (1));
i = G__18617;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18621 = (function (flag,alt_flag,meta18622){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18622 = meta18622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18621.cljs$lang$type = true;
cljs.core.async.t18621.cljs$lang$ctorStr = "cljs.core.async/t18621";
cljs.core.async.t18621.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t18621");
});})(flag))
;
cljs.core.async.t18621.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18623){var self__ = this;
var _18623__$1 = this;return self__.meta18622;
});})(flag))
;
cljs.core.async.t18621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18623,meta18622__$1){var self__ = this;
var _18623__$1 = this;return (new cljs.core.async.t18621(self__.flag,self__.alt_flag,meta18622__$1));
});})(flag))
;
cljs.core.async.__GT_t18621 = ((function (flag){
return (function __GT_t18621(flag__$1,alt_flag__$1,meta18622){return (new cljs.core.async.t18621(flag__$1,alt_flag__$1,meta18622));
});})(flag))
;
}
return (new cljs.core.async.t18621(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18627 = (function (cb,flag,alt_handler,meta18628){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18628 = meta18628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18627.cljs$lang$type = true;
cljs.core.async.t18627.cljs$lang$ctorStr = "cljs.core.async/t18627";
cljs.core.async.t18627.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t18627");
});
cljs.core.async.t18627.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18629){var self__ = this;
var _18629__$1 = this;return self__.meta18628;
});
cljs.core.async.t18627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18629,meta18628__$1){var self__ = this;
var _18629__$1 = this;return (new cljs.core.async.t18627(self__.cb,self__.flag,self__.alt_handler,meta18628__$1));
});
cljs.core.async.__GT_t18627 = (function __GT_t18627(cb__$1,flag__$1,alt_handler__$1,meta18628){return (new cljs.core.async.t18627(cb__$1,flag__$1,alt_handler__$1,meta18628));
});
}
return (new cljs.core.async.t18627(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18630_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18630_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18631_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18631_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11529__auto__ = wport;if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18632 = (i + (1));
i = G__18632;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11529__auto__ = ret;if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11517__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11517__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11517__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18633){var map__18635 = p__18633;var map__18635__$1 = ((cljs.core.seq_QMARK_.call(null,map__18635))?cljs.core.apply.call(null,cljs.core.hash_map,map__18635):map__18635);var opts = map__18635__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18633 = null;if (arguments.length > 1) {
  p__18633 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18633);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18636){
var ports = cljs.core.first(arglist__18636);
var p__18633 = cljs.core.rest(arglist__18636);
return alts_BANG___delegate(ports,p__18633);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13980__auto___18731 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___18731){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___18731){
return (function (state_18707){var state_val_18708 = (state_18707[(1)]);if((state_val_18708 === (7)))
{var inst_18703 = (state_18707[(2)]);var state_18707__$1 = state_18707;var statearr_18709_18732 = state_18707__$1;(statearr_18709_18732[(2)] = inst_18703);
(statearr_18709_18732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (1)))
{var state_18707__$1 = state_18707;var statearr_18710_18733 = state_18707__$1;(statearr_18710_18733[(2)] = null);
(statearr_18710_18733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (4)))
{var inst_18686 = (state_18707[(7)]);var inst_18686__$1 = (state_18707[(2)]);var inst_18687 = (inst_18686__$1 == null);var state_18707__$1 = (function (){var statearr_18711 = state_18707;(statearr_18711[(7)] = inst_18686__$1);
return statearr_18711;
})();if(cljs.core.truth_(inst_18687))
{var statearr_18712_18734 = state_18707__$1;(statearr_18712_18734[(1)] = (5));
} else
{var statearr_18713_18735 = state_18707__$1;(statearr_18713_18735[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (13)))
{var state_18707__$1 = state_18707;var statearr_18714_18736 = state_18707__$1;(statearr_18714_18736[(2)] = null);
(statearr_18714_18736[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (6)))
{var inst_18686 = (state_18707[(7)]);var state_18707__$1 = state_18707;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18707__$1,(11),to,inst_18686);
} else
{if((state_val_18708 === (3)))
{var inst_18705 = (state_18707[(2)]);var state_18707__$1 = state_18707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18707__$1,inst_18705);
} else
{if((state_val_18708 === (12)))
{var state_18707__$1 = state_18707;var statearr_18715_18737 = state_18707__$1;(statearr_18715_18737[(2)] = null);
(statearr_18715_18737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (2)))
{var state_18707__$1 = state_18707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18707__$1,(4),from);
} else
{if((state_val_18708 === (11)))
{var inst_18696 = (state_18707[(2)]);var state_18707__$1 = state_18707;if(cljs.core.truth_(inst_18696))
{var statearr_18716_18738 = state_18707__$1;(statearr_18716_18738[(1)] = (12));
} else
{var statearr_18717_18739 = state_18707__$1;(statearr_18717_18739[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (9)))
{var state_18707__$1 = state_18707;var statearr_18718_18740 = state_18707__$1;(statearr_18718_18740[(2)] = null);
(statearr_18718_18740[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (5)))
{var state_18707__$1 = state_18707;if(cljs.core.truth_(close_QMARK_))
{var statearr_18719_18741 = state_18707__$1;(statearr_18719_18741[(1)] = (8));
} else
{var statearr_18720_18742 = state_18707__$1;(statearr_18720_18742[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (14)))
{var inst_18701 = (state_18707[(2)]);var state_18707__$1 = state_18707;var statearr_18721_18743 = state_18707__$1;(statearr_18721_18743[(2)] = inst_18701);
(statearr_18721_18743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (10)))
{var inst_18693 = (state_18707[(2)]);var state_18707__$1 = state_18707;var statearr_18722_18744 = state_18707__$1;(statearr_18722_18744[(2)] = inst_18693);
(statearr_18722_18744[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18708 === (8)))
{var inst_18690 = cljs.core.async.close_BANG_.call(null,to);var state_18707__$1 = state_18707;var statearr_18723_18745 = state_18707__$1;(statearr_18723_18745[(2)] = inst_18690);
(statearr_18723_18745[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___18731))
;return ((function (switch__13924__auto__,c__13980__auto___18731){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18727 = [null,null,null,null,null,null,null,null];(statearr_18727[(0)] = state_machine__13925__auto__);
(statearr_18727[(1)] = (1));
return statearr_18727;
});
var state_machine__13925__auto____1 = (function (state_18707){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18707);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18728){if((e18728 instanceof Object))
{var ex__13928__auto__ = e18728;var statearr_18729_18746 = state_18707;(statearr_18729_18746[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18707);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18728;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18747 = state_18707;
state_18707 = G__18747;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18707){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___18731))
})();var state__13982__auto__ = (function (){var statearr_18730 = f__13981__auto__.call(null);(statearr_18730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___18731);
return statearr_18730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___18731))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__18931){var vec__18932 = p__18931;var v = cljs.core.nth.call(null,vec__18932,(0),null);var p = cljs.core.nth.call(null,vec__18932,(1),null);var job = vec__18932;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__13980__auto___19114 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results){
return (function (state_18937){var state_val_18938 = (state_18937[(1)]);if((state_val_18938 === (2)))
{var inst_18934 = (state_18937[(2)]);var inst_18935 = cljs.core.async.close_BANG_.call(null,res);var state_18937__$1 = (function (){var statearr_18939 = state_18937;(statearr_18939[(7)] = inst_18934);
return statearr_18939;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18937__$1,inst_18935);
} else
{if((state_val_18938 === (1)))
{var state_18937__$1 = state_18937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18937__$1,(2),res,v);
} else
{return null;
}
}
});})(c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results))
;return ((function (switch__13924__auto__,c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18943 = [null,null,null,null,null,null,null,null];(statearr_18943[(0)] = state_machine__13925__auto__);
(statearr_18943[(1)] = (1));
return statearr_18943;
});
var state_machine__13925__auto____1 = (function (state_18937){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18937);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18944){if((e18944 instanceof Object))
{var ex__13928__auto__ = e18944;var statearr_18945_19115 = state_18937;(statearr_18945_19115[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19116 = state_18937;
state_18937 = G__19116;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18937){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results))
})();var state__13982__auto__ = (function (){var statearr_18946 = f__13981__auto__.call(null);(statearr_18946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19114);
return statearr_18946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___19114,res,vec__18932,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__18947){var vec__18948 = p__18947;var v = cljs.core.nth.call(null,vec__18948,(0),null);var p = cljs.core.nth.call(null,vec__18948,(1),null);var job = vec__18948;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12399__auto___19117 = n;var __19118 = (0);while(true){
if((__19118 < n__12399__auto___19117))
{var G__18949_19119 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__18949_19119) {
case "async":
var c__13980__auto___19121 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19118,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (__19118,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function (state_18962){var state_val_18963 = (state_18962[(1)]);if((state_val_18963 === (7)))
{var inst_18958 = (state_18962[(2)]);var state_18962__$1 = state_18962;var statearr_18964_19122 = state_18962__$1;(statearr_18964_19122[(2)] = inst_18958);
(statearr_18964_19122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18963 === (6)))
{var state_18962__$1 = state_18962;var statearr_18965_19123 = state_18962__$1;(statearr_18965_19123[(2)] = null);
(statearr_18965_19123[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18963 === (5)))
{var state_18962__$1 = state_18962;var statearr_18966_19124 = state_18962__$1;(statearr_18966_19124[(2)] = null);
(statearr_18966_19124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18963 === (4)))
{var inst_18952 = (state_18962[(2)]);var inst_18953 = async.call(null,inst_18952);var state_18962__$1 = state_18962;if(cljs.core.truth_(inst_18953))
{var statearr_18967_19125 = state_18962__$1;(statearr_18967_19125[(1)] = (5));
} else
{var statearr_18968_19126 = state_18962__$1;(statearr_18968_19126[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18963 === (3)))
{var inst_18960 = (state_18962[(2)]);var state_18962__$1 = state_18962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18962__$1,inst_18960);
} else
{if((state_val_18963 === (2)))
{var state_18962__$1 = state_18962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18962__$1,(4),jobs);
} else
{if((state_val_18963 === (1)))
{var state_18962__$1 = state_18962;var statearr_18969_19127 = state_18962__$1;(statearr_18969_19127[(2)] = null);
(statearr_18969_19127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19118,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
;return ((function (__19118,switch__13924__auto__,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18973 = [null,null,null,null,null,null,null];(statearr_18973[(0)] = state_machine__13925__auto__);
(statearr_18973[(1)] = (1));
return statearr_18973;
});
var state_machine__13925__auto____1 = (function (state_18962){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18962);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18974){if((e18974 instanceof Object))
{var ex__13928__auto__ = e18974;var statearr_18975_19128 = state_18962;(statearr_18975_19128[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18962);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19129 = state_18962;
state_18962 = G__19129;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18962){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(__19118,switch__13924__auto__,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
})();var state__13982__auto__ = (function (){var statearr_18976 = f__13981__auto__.call(null);(statearr_18976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19121);
return statearr_18976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(__19118,c__13980__auto___19121,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
);

break;
case "compute":
var c__13980__auto___19130 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19118,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (__19118,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function (state_18989){var state_val_18990 = (state_18989[(1)]);if((state_val_18990 === (7)))
{var inst_18985 = (state_18989[(2)]);var state_18989__$1 = state_18989;var statearr_18991_19131 = state_18989__$1;(statearr_18991_19131[(2)] = inst_18985);
(statearr_18991_19131[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (6)))
{var state_18989__$1 = state_18989;var statearr_18992_19132 = state_18989__$1;(statearr_18992_19132[(2)] = null);
(statearr_18992_19132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (5)))
{var state_18989__$1 = state_18989;var statearr_18993_19133 = state_18989__$1;(statearr_18993_19133[(2)] = null);
(statearr_18993_19133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (4)))
{var inst_18979 = (state_18989[(2)]);var inst_18980 = process.call(null,inst_18979);var state_18989__$1 = state_18989;if(cljs.core.truth_(inst_18980))
{var statearr_18994_19134 = state_18989__$1;(statearr_18994_19134[(1)] = (5));
} else
{var statearr_18995_19135 = state_18989__$1;(statearr_18995_19135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18990 === (3)))
{var inst_18987 = (state_18989[(2)]);var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18989__$1,inst_18987);
} else
{if((state_val_18990 === (2)))
{var state_18989__$1 = state_18989;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18989__$1,(4),jobs);
} else
{if((state_val_18990 === (1)))
{var state_18989__$1 = state_18989;var statearr_18996_19136 = state_18989__$1;(statearr_18996_19136[(2)] = null);
(statearr_18996_19136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__19118,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
;return ((function (__19118,switch__13924__auto__,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19000 = [null,null,null,null,null,null,null];(statearr_19000[(0)] = state_machine__13925__auto__);
(statearr_19000[(1)] = (1));
return statearr_19000;
});
var state_machine__13925__auto____1 = (function (state_18989){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18989);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19001){if((e19001 instanceof Object))
{var ex__13928__auto__ = e19001;var statearr_19002_19137 = state_18989;(statearr_19002_19137[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18989);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19001;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19138 = state_18989;
state_18989 = G__19138;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18989){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(__19118,switch__13924__auto__,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
})();var state__13982__auto__ = (function (){var statearr_19003 = f__13981__auto__.call(null);(statearr_19003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19130);
return statearr_19003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(__19118,c__13980__auto___19130,G__18949_19119,n__12399__auto___19117,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19139 = (__19118 + (1));
__19118 = G__19139;
continue;
}
} else
{}
break;
}
var c__13980__auto___19140 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___19140,jobs,results,process,async){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___19140,jobs,results,process,async){
return (function (state_19025){var state_val_19026 = (state_19025[(1)]);if((state_val_19026 === (9)))
{var inst_19018 = (state_19025[(2)]);var state_19025__$1 = (function (){var statearr_19027 = state_19025;(statearr_19027[(7)] = inst_19018);
return statearr_19027;
})();var statearr_19028_19141 = state_19025__$1;(statearr_19028_19141[(2)] = null);
(statearr_19028_19141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19026 === (8)))
{var inst_19011 = (state_19025[(8)]);var inst_19016 = (state_19025[(2)]);var state_19025__$1 = (function (){var statearr_19029 = state_19025;(statearr_19029[(9)] = inst_19016);
return statearr_19029;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19025__$1,(9),results,inst_19011);
} else
{if((state_val_19026 === (7)))
{var inst_19021 = (state_19025[(2)]);var state_19025__$1 = state_19025;var statearr_19030_19142 = state_19025__$1;(statearr_19030_19142[(2)] = inst_19021);
(statearr_19030_19142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19026 === (6)))
{var inst_19011 = (state_19025[(8)]);var inst_19006 = (state_19025[(10)]);var inst_19011__$1 = cljs.core.async.chan.call(null,(1));var inst_19012 = cljs.core.PersistentVector.EMPTY_NODE;var inst_19013 = [inst_19006,inst_19011__$1];var inst_19014 = (new cljs.core.PersistentVector(null,2,(5),inst_19012,inst_19013,null));var state_19025__$1 = (function (){var statearr_19031 = state_19025;(statearr_19031[(8)] = inst_19011__$1);
return statearr_19031;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19025__$1,(8),jobs,inst_19014);
} else
{if((state_val_19026 === (5)))
{var inst_19009 = cljs.core.async.close_BANG_.call(null,jobs);var state_19025__$1 = state_19025;var statearr_19032_19143 = state_19025__$1;(statearr_19032_19143[(2)] = inst_19009);
(statearr_19032_19143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19026 === (4)))
{var inst_19006 = (state_19025[(10)]);var inst_19006__$1 = (state_19025[(2)]);var inst_19007 = (inst_19006__$1 == null);var state_19025__$1 = (function (){var statearr_19033 = state_19025;(statearr_19033[(10)] = inst_19006__$1);
return statearr_19033;
})();if(cljs.core.truth_(inst_19007))
{var statearr_19034_19144 = state_19025__$1;(statearr_19034_19144[(1)] = (5));
} else
{var statearr_19035_19145 = state_19025__$1;(statearr_19035_19145[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19026 === (3)))
{var inst_19023 = (state_19025[(2)]);var state_19025__$1 = state_19025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19025__$1,inst_19023);
} else
{if((state_val_19026 === (2)))
{var state_19025__$1 = state_19025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19025__$1,(4),from);
} else
{if((state_val_19026 === (1)))
{var state_19025__$1 = state_19025;var statearr_19036_19146 = state_19025__$1;(statearr_19036_19146[(2)] = null);
(statearr_19036_19146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__13980__auto___19140,jobs,results,process,async))
;return ((function (switch__13924__auto__,c__13980__auto___19140,jobs,results,process,async){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19040 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19040[(0)] = state_machine__13925__auto__);
(statearr_19040[(1)] = (1));
return statearr_19040;
});
var state_machine__13925__auto____1 = (function (state_19025){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19025);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19041){if((e19041 instanceof Object))
{var ex__13928__auto__ = e19041;var statearr_19042_19147 = state_19025;(statearr_19042_19147[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19148 = state_19025;
state_19025 = G__19148;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19025){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___19140,jobs,results,process,async))
})();var state__13982__auto__ = (function (){var statearr_19043 = f__13981__auto__.call(null);(statearr_19043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19140);
return statearr_19043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___19140,jobs,results,process,async))
);
var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__,jobs,results,process,async){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__,jobs,results,process,async){
return (function (state_19081){var state_val_19082 = (state_19081[(1)]);if((state_val_19082 === (7)))
{var inst_19077 = (state_19081[(2)]);var state_19081__$1 = state_19081;var statearr_19083_19149 = state_19081__$1;(statearr_19083_19149[(2)] = inst_19077);
(statearr_19083_19149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (20)))
{var state_19081__$1 = state_19081;var statearr_19084_19150 = state_19081__$1;(statearr_19084_19150[(2)] = null);
(statearr_19084_19150[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (1)))
{var state_19081__$1 = state_19081;var statearr_19085_19151 = state_19081__$1;(statearr_19085_19151[(2)] = null);
(statearr_19085_19151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (4)))
{var inst_19046 = (state_19081[(7)]);var inst_19046__$1 = (state_19081[(2)]);var inst_19047 = (inst_19046__$1 == null);var state_19081__$1 = (function (){var statearr_19086 = state_19081;(statearr_19086[(7)] = inst_19046__$1);
return statearr_19086;
})();if(cljs.core.truth_(inst_19047))
{var statearr_19087_19152 = state_19081__$1;(statearr_19087_19152[(1)] = (5));
} else
{var statearr_19088_19153 = state_19081__$1;(statearr_19088_19153[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (15)))
{var inst_19059 = (state_19081[(8)]);var state_19081__$1 = state_19081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19081__$1,(18),to,inst_19059);
} else
{if((state_val_19082 === (21)))
{var inst_19072 = (state_19081[(2)]);var state_19081__$1 = state_19081;var statearr_19089_19154 = state_19081__$1;(statearr_19089_19154[(2)] = inst_19072);
(statearr_19089_19154[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (13)))
{var inst_19074 = (state_19081[(2)]);var state_19081__$1 = (function (){var statearr_19090 = state_19081;(statearr_19090[(9)] = inst_19074);
return statearr_19090;
})();var statearr_19091_19155 = state_19081__$1;(statearr_19091_19155[(2)] = null);
(statearr_19091_19155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (6)))
{var inst_19046 = (state_19081[(7)]);var state_19081__$1 = state_19081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19081__$1,(11),inst_19046);
} else
{if((state_val_19082 === (17)))
{var inst_19067 = (state_19081[(2)]);var state_19081__$1 = state_19081;if(cljs.core.truth_(inst_19067))
{var statearr_19092_19156 = state_19081__$1;(statearr_19092_19156[(1)] = (19));
} else
{var statearr_19093_19157 = state_19081__$1;(statearr_19093_19157[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (3)))
{var inst_19079 = (state_19081[(2)]);var state_19081__$1 = state_19081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19081__$1,inst_19079);
} else
{if((state_val_19082 === (12)))
{var inst_19056 = (state_19081[(10)]);var state_19081__$1 = state_19081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19081__$1,(14),inst_19056);
} else
{if((state_val_19082 === (2)))
{var state_19081__$1 = state_19081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19081__$1,(4),results);
} else
{if((state_val_19082 === (19)))
{var state_19081__$1 = state_19081;var statearr_19094_19158 = state_19081__$1;(statearr_19094_19158[(2)] = null);
(statearr_19094_19158[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (11)))
{var inst_19056 = (state_19081[(2)]);var state_19081__$1 = (function (){var statearr_19095 = state_19081;(statearr_19095[(10)] = inst_19056);
return statearr_19095;
})();var statearr_19096_19159 = state_19081__$1;(statearr_19096_19159[(2)] = null);
(statearr_19096_19159[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (9)))
{var state_19081__$1 = state_19081;var statearr_19097_19160 = state_19081__$1;(statearr_19097_19160[(2)] = null);
(statearr_19097_19160[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (5)))
{var state_19081__$1 = state_19081;if(cljs.core.truth_(close_QMARK_))
{var statearr_19098_19161 = state_19081__$1;(statearr_19098_19161[(1)] = (8));
} else
{var statearr_19099_19162 = state_19081__$1;(statearr_19099_19162[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (14)))
{var inst_19061 = (state_19081[(11)]);var inst_19059 = (state_19081[(8)]);var inst_19059__$1 = (state_19081[(2)]);var inst_19060 = (inst_19059__$1 == null);var inst_19061__$1 = cljs.core.not.call(null,inst_19060);var state_19081__$1 = (function (){var statearr_19100 = state_19081;(statearr_19100[(11)] = inst_19061__$1);
(statearr_19100[(8)] = inst_19059__$1);
return statearr_19100;
})();if(inst_19061__$1)
{var statearr_19101_19163 = state_19081__$1;(statearr_19101_19163[(1)] = (15));
} else
{var statearr_19102_19164 = state_19081__$1;(statearr_19102_19164[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (16)))
{var inst_19061 = (state_19081[(11)]);var state_19081__$1 = state_19081;var statearr_19103_19165 = state_19081__$1;(statearr_19103_19165[(2)] = inst_19061);
(statearr_19103_19165[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (10)))
{var inst_19053 = (state_19081[(2)]);var state_19081__$1 = state_19081;var statearr_19104_19166 = state_19081__$1;(statearr_19104_19166[(2)] = inst_19053);
(statearr_19104_19166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (18)))
{var inst_19064 = (state_19081[(2)]);var state_19081__$1 = state_19081;var statearr_19105_19167 = state_19081__$1;(statearr_19105_19167[(2)] = inst_19064);
(statearr_19105_19167[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19082 === (8)))
{var inst_19050 = cljs.core.async.close_BANG_.call(null,to);var state_19081__$1 = state_19081;var statearr_19106_19168 = state_19081__$1;(statearr_19106_19168[(2)] = inst_19050);
(statearr_19106_19168[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto__,jobs,results,process,async))
;return ((function (switch__13924__auto__,c__13980__auto__,jobs,results,process,async){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19110 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19110[(0)] = state_machine__13925__auto__);
(statearr_19110[(1)] = (1));
return statearr_19110;
});
var state_machine__13925__auto____1 = (function (state_19081){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19081);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19111){if((e19111 instanceof Object))
{var ex__13928__auto__ = e19111;var statearr_19112_19169 = state_19081;(statearr_19112_19169[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19111;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19170 = state_19081;
state_19081 = G__19170;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19081){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__,jobs,results,process,async))
})();var state__13982__auto__ = (function (){var statearr_19113 = f__13981__auto__.call(null);(statearr_19113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_19113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__,jobs,results,process,async))
);
return c__13980__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13980__auto___19271 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___19271,tc,fc){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___19271,tc,fc){
return (function (state_19246){var state_val_19247 = (state_19246[(1)]);if((state_val_19247 === (7)))
{var inst_19242 = (state_19246[(2)]);var state_19246__$1 = state_19246;var statearr_19248_19272 = state_19246__$1;(statearr_19248_19272[(2)] = inst_19242);
(statearr_19248_19272[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (1)))
{var state_19246__$1 = state_19246;var statearr_19249_19273 = state_19246__$1;(statearr_19249_19273[(2)] = null);
(statearr_19249_19273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (4)))
{var inst_19223 = (state_19246[(7)]);var inst_19223__$1 = (state_19246[(2)]);var inst_19224 = (inst_19223__$1 == null);var state_19246__$1 = (function (){var statearr_19250 = state_19246;(statearr_19250[(7)] = inst_19223__$1);
return statearr_19250;
})();if(cljs.core.truth_(inst_19224))
{var statearr_19251_19274 = state_19246__$1;(statearr_19251_19274[(1)] = (5));
} else
{var statearr_19252_19275 = state_19246__$1;(statearr_19252_19275[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (13)))
{var state_19246__$1 = state_19246;var statearr_19253_19276 = state_19246__$1;(statearr_19253_19276[(2)] = null);
(statearr_19253_19276[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (6)))
{var inst_19223 = (state_19246[(7)]);var inst_19229 = p.call(null,inst_19223);var state_19246__$1 = state_19246;if(cljs.core.truth_(inst_19229))
{var statearr_19254_19277 = state_19246__$1;(statearr_19254_19277[(1)] = (9));
} else
{var statearr_19255_19278 = state_19246__$1;(statearr_19255_19278[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (3)))
{var inst_19244 = (state_19246[(2)]);var state_19246__$1 = state_19246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19246__$1,inst_19244);
} else
{if((state_val_19247 === (12)))
{var state_19246__$1 = state_19246;var statearr_19256_19279 = state_19246__$1;(statearr_19256_19279[(2)] = null);
(statearr_19256_19279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (2)))
{var state_19246__$1 = state_19246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19246__$1,(4),ch);
} else
{if((state_val_19247 === (11)))
{var inst_19223 = (state_19246[(7)]);var inst_19233 = (state_19246[(2)]);var state_19246__$1 = state_19246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19246__$1,(8),inst_19233,inst_19223);
} else
{if((state_val_19247 === (9)))
{var state_19246__$1 = state_19246;var statearr_19257_19280 = state_19246__$1;(statearr_19257_19280[(2)] = tc);
(statearr_19257_19280[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (5)))
{var inst_19226 = cljs.core.async.close_BANG_.call(null,tc);var inst_19227 = cljs.core.async.close_BANG_.call(null,fc);var state_19246__$1 = (function (){var statearr_19258 = state_19246;(statearr_19258[(8)] = inst_19226);
return statearr_19258;
})();var statearr_19259_19281 = state_19246__$1;(statearr_19259_19281[(2)] = inst_19227);
(statearr_19259_19281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (14)))
{var inst_19240 = (state_19246[(2)]);var state_19246__$1 = state_19246;var statearr_19260_19282 = state_19246__$1;(statearr_19260_19282[(2)] = inst_19240);
(statearr_19260_19282[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (10)))
{var state_19246__$1 = state_19246;var statearr_19261_19283 = state_19246__$1;(statearr_19261_19283[(2)] = fc);
(statearr_19261_19283[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19247 === (8)))
{var inst_19235 = (state_19246[(2)]);var state_19246__$1 = state_19246;if(cljs.core.truth_(inst_19235))
{var statearr_19262_19284 = state_19246__$1;(statearr_19262_19284[(1)] = (12));
} else
{var statearr_19263_19285 = state_19246__$1;(statearr_19263_19285[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___19271,tc,fc))
;return ((function (switch__13924__auto__,c__13980__auto___19271,tc,fc){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19267 = [null,null,null,null,null,null,null,null,null];(statearr_19267[(0)] = state_machine__13925__auto__);
(statearr_19267[(1)] = (1));
return statearr_19267;
});
var state_machine__13925__auto____1 = (function (state_19246){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19246);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object))
{var ex__13928__auto__ = e19268;var statearr_19269_19286 = state_19246;(statearr_19269_19286[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19268;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19287 = state_19246;
state_19246 = G__19287;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19246){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___19271,tc,fc))
})();var state__13982__auto__ = (function (){var statearr_19270 = f__13981__auto__.call(null);(statearr_19270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19271);
return statearr_19270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___19271,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__){
return (function (state_19334){var state_val_19335 = (state_19334[(1)]);if((state_val_19335 === (7)))
{var inst_19330 = (state_19334[(2)]);var state_19334__$1 = state_19334;var statearr_19336_19352 = state_19334__$1;(statearr_19336_19352[(2)] = inst_19330);
(statearr_19336_19352[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19335 === (6)))
{var inst_19323 = (state_19334[(7)]);var inst_19320 = (state_19334[(8)]);var inst_19327 = f.call(null,inst_19320,inst_19323);var inst_19320__$1 = inst_19327;var state_19334__$1 = (function (){var statearr_19337 = state_19334;(statearr_19337[(8)] = inst_19320__$1);
return statearr_19337;
})();var statearr_19338_19353 = state_19334__$1;(statearr_19338_19353[(2)] = null);
(statearr_19338_19353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19335 === (5)))
{var inst_19320 = (state_19334[(8)]);var state_19334__$1 = state_19334;var statearr_19339_19354 = state_19334__$1;(statearr_19339_19354[(2)] = inst_19320);
(statearr_19339_19354[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19335 === (4)))
{var inst_19323 = (state_19334[(7)]);var inst_19323__$1 = (state_19334[(2)]);var inst_19324 = (inst_19323__$1 == null);var state_19334__$1 = (function (){var statearr_19340 = state_19334;(statearr_19340[(7)] = inst_19323__$1);
return statearr_19340;
})();if(cljs.core.truth_(inst_19324))
{var statearr_19341_19355 = state_19334__$1;(statearr_19341_19355[(1)] = (5));
} else
{var statearr_19342_19356 = state_19334__$1;(statearr_19342_19356[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19335 === (3)))
{var inst_19332 = (state_19334[(2)]);var state_19334__$1 = state_19334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19334__$1,inst_19332);
} else
{if((state_val_19335 === (2)))
{var state_19334__$1 = state_19334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19334__$1,(4),ch);
} else
{if((state_val_19335 === (1)))
{var inst_19320 = init;var state_19334__$1 = (function (){var statearr_19343 = state_19334;(statearr_19343[(8)] = inst_19320);
return statearr_19343;
})();var statearr_19344_19357 = state_19334__$1;(statearr_19344_19357[(2)] = null);
(statearr_19344_19357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__13980__auto__))
;return ((function (switch__13924__auto__,c__13980__auto__){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19348 = [null,null,null,null,null,null,null,null,null];(statearr_19348[(0)] = state_machine__13925__auto__);
(statearr_19348[(1)] = (1));
return statearr_19348;
});
var state_machine__13925__auto____1 = (function (state_19334){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19334);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19349){if((e19349 instanceof Object))
{var ex__13928__auto__ = e19349;var statearr_19350_19358 = state_19334;(statearr_19350_19358[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19359 = state_19334;
state_19334 = G__19359;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19334){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__))
})();var state__13982__auto__ = (function (){var statearr_19351 = f__13981__auto__.call(null);(statearr_19351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_19351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__))
);
return c__13980__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__){
return (function (state_19433){var state_val_19434 = (state_19433[(1)]);if((state_val_19434 === (7)))
{var inst_19415 = (state_19433[(2)]);var state_19433__$1 = state_19433;var statearr_19435_19458 = state_19433__$1;(statearr_19435_19458[(2)] = inst_19415);
(statearr_19435_19458[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (1)))
{var inst_19409 = cljs.core.seq.call(null,coll);var inst_19410 = inst_19409;var state_19433__$1 = (function (){var statearr_19436 = state_19433;(statearr_19436[(7)] = inst_19410);
return statearr_19436;
})();var statearr_19437_19459 = state_19433__$1;(statearr_19437_19459[(2)] = null);
(statearr_19437_19459[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (4)))
{var inst_19410 = (state_19433[(7)]);var inst_19413 = cljs.core.first.call(null,inst_19410);var state_19433__$1 = state_19433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19433__$1,(7),ch,inst_19413);
} else
{if((state_val_19434 === (13)))
{var inst_19427 = (state_19433[(2)]);var state_19433__$1 = state_19433;var statearr_19438_19460 = state_19433__$1;(statearr_19438_19460[(2)] = inst_19427);
(statearr_19438_19460[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (6)))
{var inst_19418 = (state_19433[(2)]);var state_19433__$1 = state_19433;if(cljs.core.truth_(inst_19418))
{var statearr_19439_19461 = state_19433__$1;(statearr_19439_19461[(1)] = (8));
} else
{var statearr_19440_19462 = state_19433__$1;(statearr_19440_19462[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (3)))
{var inst_19431 = (state_19433[(2)]);var state_19433__$1 = state_19433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19433__$1,inst_19431);
} else
{if((state_val_19434 === (12)))
{var state_19433__$1 = state_19433;var statearr_19441_19463 = state_19433__$1;(statearr_19441_19463[(2)] = null);
(statearr_19441_19463[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (2)))
{var inst_19410 = (state_19433[(7)]);var state_19433__$1 = state_19433;if(cljs.core.truth_(inst_19410))
{var statearr_19442_19464 = state_19433__$1;(statearr_19442_19464[(1)] = (4));
} else
{var statearr_19443_19465 = state_19433__$1;(statearr_19443_19465[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (11)))
{var inst_19424 = cljs.core.async.close_BANG_.call(null,ch);var state_19433__$1 = state_19433;var statearr_19444_19466 = state_19433__$1;(statearr_19444_19466[(2)] = inst_19424);
(statearr_19444_19466[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (9)))
{var state_19433__$1 = state_19433;if(cljs.core.truth_(close_QMARK_))
{var statearr_19445_19467 = state_19433__$1;(statearr_19445_19467[(1)] = (11));
} else
{var statearr_19446_19468 = state_19433__$1;(statearr_19446_19468[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (5)))
{var inst_19410 = (state_19433[(7)]);var state_19433__$1 = state_19433;var statearr_19447_19469 = state_19433__$1;(statearr_19447_19469[(2)] = inst_19410);
(statearr_19447_19469[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (10)))
{var inst_19429 = (state_19433[(2)]);var state_19433__$1 = state_19433;var statearr_19448_19470 = state_19433__$1;(statearr_19448_19470[(2)] = inst_19429);
(statearr_19448_19470[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19434 === (8)))
{var inst_19410 = (state_19433[(7)]);var inst_19420 = cljs.core.next.call(null,inst_19410);var inst_19410__$1 = inst_19420;var state_19433__$1 = (function (){var statearr_19449 = state_19433;(statearr_19449[(7)] = inst_19410__$1);
return statearr_19449;
})();var statearr_19450_19471 = state_19433__$1;(statearr_19450_19471[(2)] = null);
(statearr_19450_19471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto__))
;return ((function (switch__13924__auto__,c__13980__auto__){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19454 = [null,null,null,null,null,null,null,null];(statearr_19454[(0)] = state_machine__13925__auto__);
(statearr_19454[(1)] = (1));
return statearr_19454;
});
var state_machine__13925__auto____1 = (function (state_19433){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19433);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19455){if((e19455 instanceof Object))
{var ex__13928__auto__ = e19455;var statearr_19456_19472 = state_19433;(statearr_19456_19472[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19455;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19473 = state_19433;
state_19433 = G__19473;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19433){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__))
})();var state__13982__auto__ = (function (){var statearr_19457 = f__13981__auto__.call(null);(statearr_19457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_19457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__))
);
return c__13980__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19475 = {};return obj19475;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11517__auto__ = _;if(and__11517__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11517__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12166__auto__ = (((_ == null))?null:_);return (function (){var or__11529__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19477 = {};return obj19477;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19699 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19699 = (function (cs,ch,mult,meta19700){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19700 = meta19700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19699.cljs$lang$type = true;
cljs.core.async.t19699.cljs$lang$ctorStr = "cljs.core.async/t19699";
cljs.core.async.t19699.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t19699");
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19699.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19701){var self__ = this;
var _19701__$1 = this;return self__.meta19700;
});})(cs))
;
cljs.core.async.t19699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19701,meta19700__$1){var self__ = this;
var _19701__$1 = this;return (new cljs.core.async.t19699(self__.cs,self__.ch,self__.mult,meta19700__$1));
});})(cs))
;
cljs.core.async.__GT_t19699 = ((function (cs){
return (function __GT_t19699(cs__$1,ch__$1,mult__$1,meta19700){return (new cljs.core.async.t19699(cs__$1,ch__$1,mult__$1,meta19700));
});})(cs))
;
}
return (new cljs.core.async.t19699(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13980__auto___19920 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___19920,cs,m,dchan,dctr,done){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___19920,cs,m,dchan,dctr,done){
return (function (state_19832){var state_val_19833 = (state_19832[(1)]);if((state_val_19833 === (7)))
{var inst_19828 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19834_19921 = state_19832__$1;(statearr_19834_19921[(2)] = inst_19828);
(statearr_19834_19921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (20)))
{var inst_19733 = (state_19832[(7)]);var inst_19743 = cljs.core.first.call(null,inst_19733);var inst_19744 = cljs.core.nth.call(null,inst_19743,(0),null);var inst_19745 = cljs.core.nth.call(null,inst_19743,(1),null);var state_19832__$1 = (function (){var statearr_19835 = state_19832;(statearr_19835[(8)] = inst_19744);
return statearr_19835;
})();if(cljs.core.truth_(inst_19745))
{var statearr_19836_19922 = state_19832__$1;(statearr_19836_19922[(1)] = (22));
} else
{var statearr_19837_19923 = state_19832__$1;(statearr_19837_19923[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (27)))
{var inst_19780 = (state_19832[(9)]);var inst_19704 = (state_19832[(10)]);var inst_19773 = (state_19832[(11)]);var inst_19775 = (state_19832[(12)]);var inst_19780__$1 = cljs.core._nth.call(null,inst_19773,inst_19775);var inst_19781 = cljs.core.async.put_BANG_.call(null,inst_19780__$1,inst_19704,done);var state_19832__$1 = (function (){var statearr_19838 = state_19832;(statearr_19838[(9)] = inst_19780__$1);
return statearr_19838;
})();if(cljs.core.truth_(inst_19781))
{var statearr_19839_19924 = state_19832__$1;(statearr_19839_19924[(1)] = (30));
} else
{var statearr_19840_19925 = state_19832__$1;(statearr_19840_19925[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (1)))
{var state_19832__$1 = state_19832;var statearr_19841_19926 = state_19832__$1;(statearr_19841_19926[(2)] = null);
(statearr_19841_19926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (24)))
{var inst_19733 = (state_19832[(7)]);var inst_19750 = (state_19832[(2)]);var inst_19751 = cljs.core.next.call(null,inst_19733);var inst_19713 = inst_19751;var inst_19714 = null;var inst_19715 = (0);var inst_19716 = (0);var state_19832__$1 = (function (){var statearr_19842 = state_19832;(statearr_19842[(13)] = inst_19713);
(statearr_19842[(14)] = inst_19715);
(statearr_19842[(15)] = inst_19750);
(statearr_19842[(16)] = inst_19716);
(statearr_19842[(17)] = inst_19714);
return statearr_19842;
})();var statearr_19843_19927 = state_19832__$1;(statearr_19843_19927[(2)] = null);
(statearr_19843_19927[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (39)))
{var state_19832__$1 = state_19832;var statearr_19847_19928 = state_19832__$1;(statearr_19847_19928[(2)] = null);
(statearr_19847_19928[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (4)))
{var inst_19704 = (state_19832[(10)]);var inst_19704__$1 = (state_19832[(2)]);var inst_19705 = (inst_19704__$1 == null);var state_19832__$1 = (function (){var statearr_19848 = state_19832;(statearr_19848[(10)] = inst_19704__$1);
return statearr_19848;
})();if(cljs.core.truth_(inst_19705))
{var statearr_19849_19929 = state_19832__$1;(statearr_19849_19929[(1)] = (5));
} else
{var statearr_19850_19930 = state_19832__$1;(statearr_19850_19930[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (15)))
{var inst_19713 = (state_19832[(13)]);var inst_19715 = (state_19832[(14)]);var inst_19716 = (state_19832[(16)]);var inst_19714 = (state_19832[(17)]);var inst_19729 = (state_19832[(2)]);var inst_19730 = (inst_19716 + (1));var tmp19844 = inst_19713;var tmp19845 = inst_19715;var tmp19846 = inst_19714;var inst_19713__$1 = tmp19844;var inst_19714__$1 = tmp19846;var inst_19715__$1 = tmp19845;var inst_19716__$1 = inst_19730;var state_19832__$1 = (function (){var statearr_19851 = state_19832;(statearr_19851[(13)] = inst_19713__$1);
(statearr_19851[(14)] = inst_19715__$1);
(statearr_19851[(16)] = inst_19716__$1);
(statearr_19851[(18)] = inst_19729);
(statearr_19851[(17)] = inst_19714__$1);
return statearr_19851;
})();var statearr_19852_19931 = state_19832__$1;(statearr_19852_19931[(2)] = null);
(statearr_19852_19931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (21)))
{var inst_19754 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19856_19932 = state_19832__$1;(statearr_19856_19932[(2)] = inst_19754);
(statearr_19856_19932[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (31)))
{var inst_19780 = (state_19832[(9)]);var inst_19784 = done.call(null,null);var inst_19785 = cljs.core.async.untap_STAR_.call(null,m,inst_19780);var state_19832__$1 = (function (){var statearr_19857 = state_19832;(statearr_19857[(19)] = inst_19784);
return statearr_19857;
})();var statearr_19858_19933 = state_19832__$1;(statearr_19858_19933[(2)] = inst_19785);
(statearr_19858_19933[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (32)))
{var inst_19772 = (state_19832[(20)]);var inst_19773 = (state_19832[(11)]);var inst_19775 = (state_19832[(12)]);var inst_19774 = (state_19832[(21)]);var inst_19787 = (state_19832[(2)]);var inst_19788 = (inst_19775 + (1));var tmp19853 = inst_19772;var tmp19854 = inst_19773;var tmp19855 = inst_19774;var inst_19772__$1 = tmp19853;var inst_19773__$1 = tmp19854;var inst_19774__$1 = tmp19855;var inst_19775__$1 = inst_19788;var state_19832__$1 = (function (){var statearr_19859 = state_19832;(statearr_19859[(22)] = inst_19787);
(statearr_19859[(20)] = inst_19772__$1);
(statearr_19859[(11)] = inst_19773__$1);
(statearr_19859[(12)] = inst_19775__$1);
(statearr_19859[(21)] = inst_19774__$1);
return statearr_19859;
})();var statearr_19860_19934 = state_19832__$1;(statearr_19860_19934[(2)] = null);
(statearr_19860_19934[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (40)))
{var inst_19800 = (state_19832[(23)]);var inst_19804 = done.call(null,null);var inst_19805 = cljs.core.async.untap_STAR_.call(null,m,inst_19800);var state_19832__$1 = (function (){var statearr_19861 = state_19832;(statearr_19861[(24)] = inst_19804);
return statearr_19861;
})();var statearr_19862_19935 = state_19832__$1;(statearr_19862_19935[(2)] = inst_19805);
(statearr_19862_19935[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (33)))
{var inst_19791 = (state_19832[(25)]);var inst_19793 = cljs.core.chunked_seq_QMARK_.call(null,inst_19791);var state_19832__$1 = state_19832;if(inst_19793)
{var statearr_19863_19936 = state_19832__$1;(statearr_19863_19936[(1)] = (36));
} else
{var statearr_19864_19937 = state_19832__$1;(statearr_19864_19937[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (13)))
{var inst_19723 = (state_19832[(26)]);var inst_19726 = cljs.core.async.close_BANG_.call(null,inst_19723);var state_19832__$1 = state_19832;var statearr_19865_19938 = state_19832__$1;(statearr_19865_19938[(2)] = inst_19726);
(statearr_19865_19938[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (22)))
{var inst_19744 = (state_19832[(8)]);var inst_19747 = cljs.core.async.close_BANG_.call(null,inst_19744);var state_19832__$1 = state_19832;var statearr_19866_19939 = state_19832__$1;(statearr_19866_19939[(2)] = inst_19747);
(statearr_19866_19939[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (36)))
{var inst_19791 = (state_19832[(25)]);var inst_19795 = cljs.core.chunk_first.call(null,inst_19791);var inst_19796 = cljs.core.chunk_rest.call(null,inst_19791);var inst_19797 = cljs.core.count.call(null,inst_19795);var inst_19772 = inst_19796;var inst_19773 = inst_19795;var inst_19774 = inst_19797;var inst_19775 = (0);var state_19832__$1 = (function (){var statearr_19867 = state_19832;(statearr_19867[(20)] = inst_19772);
(statearr_19867[(11)] = inst_19773);
(statearr_19867[(12)] = inst_19775);
(statearr_19867[(21)] = inst_19774);
return statearr_19867;
})();var statearr_19868_19940 = state_19832__$1;(statearr_19868_19940[(2)] = null);
(statearr_19868_19940[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (41)))
{var inst_19791 = (state_19832[(25)]);var inst_19807 = (state_19832[(2)]);var inst_19808 = cljs.core.next.call(null,inst_19791);var inst_19772 = inst_19808;var inst_19773 = null;var inst_19774 = (0);var inst_19775 = (0);var state_19832__$1 = (function (){var statearr_19869 = state_19832;(statearr_19869[(27)] = inst_19807);
(statearr_19869[(20)] = inst_19772);
(statearr_19869[(11)] = inst_19773);
(statearr_19869[(12)] = inst_19775);
(statearr_19869[(21)] = inst_19774);
return statearr_19869;
})();var statearr_19870_19941 = state_19832__$1;(statearr_19870_19941[(2)] = null);
(statearr_19870_19941[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (43)))
{var state_19832__$1 = state_19832;var statearr_19871_19942 = state_19832__$1;(statearr_19871_19942[(2)] = null);
(statearr_19871_19942[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (29)))
{var inst_19816 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19872_19943 = state_19832__$1;(statearr_19872_19943[(2)] = inst_19816);
(statearr_19872_19943[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (44)))
{var inst_19825 = (state_19832[(2)]);var state_19832__$1 = (function (){var statearr_19873 = state_19832;(statearr_19873[(28)] = inst_19825);
return statearr_19873;
})();var statearr_19874_19944 = state_19832__$1;(statearr_19874_19944[(2)] = null);
(statearr_19874_19944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (6)))
{var inst_19764 = (state_19832[(29)]);var inst_19763 = cljs.core.deref.call(null,cs);var inst_19764__$1 = cljs.core.keys.call(null,inst_19763);var inst_19765 = cljs.core.count.call(null,inst_19764__$1);var inst_19766 = cljs.core.reset_BANG_.call(null,dctr,inst_19765);var inst_19771 = cljs.core.seq.call(null,inst_19764__$1);var inst_19772 = inst_19771;var inst_19773 = null;var inst_19774 = (0);var inst_19775 = (0);var state_19832__$1 = (function (){var statearr_19875 = state_19832;(statearr_19875[(29)] = inst_19764__$1);
(statearr_19875[(30)] = inst_19766);
(statearr_19875[(20)] = inst_19772);
(statearr_19875[(11)] = inst_19773);
(statearr_19875[(12)] = inst_19775);
(statearr_19875[(21)] = inst_19774);
return statearr_19875;
})();var statearr_19876_19945 = state_19832__$1;(statearr_19876_19945[(2)] = null);
(statearr_19876_19945[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (28)))
{var inst_19791 = (state_19832[(25)]);var inst_19772 = (state_19832[(20)]);var inst_19791__$1 = cljs.core.seq.call(null,inst_19772);var state_19832__$1 = (function (){var statearr_19877 = state_19832;(statearr_19877[(25)] = inst_19791__$1);
return statearr_19877;
})();if(inst_19791__$1)
{var statearr_19878_19946 = state_19832__$1;(statearr_19878_19946[(1)] = (33));
} else
{var statearr_19879_19947 = state_19832__$1;(statearr_19879_19947[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (25)))
{var inst_19775 = (state_19832[(12)]);var inst_19774 = (state_19832[(21)]);var inst_19777 = (inst_19775 < inst_19774);var inst_19778 = inst_19777;var state_19832__$1 = state_19832;if(cljs.core.truth_(inst_19778))
{var statearr_19880_19948 = state_19832__$1;(statearr_19880_19948[(1)] = (27));
} else
{var statearr_19881_19949 = state_19832__$1;(statearr_19881_19949[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (34)))
{var state_19832__$1 = state_19832;var statearr_19882_19950 = state_19832__$1;(statearr_19882_19950[(2)] = null);
(statearr_19882_19950[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (17)))
{var state_19832__$1 = state_19832;var statearr_19883_19951 = state_19832__$1;(statearr_19883_19951[(2)] = null);
(statearr_19883_19951[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (3)))
{var inst_19830 = (state_19832[(2)]);var state_19832__$1 = state_19832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19832__$1,inst_19830);
} else
{if((state_val_19833 === (12)))
{var inst_19759 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19884_19952 = state_19832__$1;(statearr_19884_19952[(2)] = inst_19759);
(statearr_19884_19952[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (2)))
{var state_19832__$1 = state_19832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19832__$1,(4),ch);
} else
{if((state_val_19833 === (23)))
{var state_19832__$1 = state_19832;var statearr_19885_19953 = state_19832__$1;(statearr_19885_19953[(2)] = null);
(statearr_19885_19953[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (35)))
{var inst_19814 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19886_19954 = state_19832__$1;(statearr_19886_19954[(2)] = inst_19814);
(statearr_19886_19954[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (19)))
{var inst_19733 = (state_19832[(7)]);var inst_19737 = cljs.core.chunk_first.call(null,inst_19733);var inst_19738 = cljs.core.chunk_rest.call(null,inst_19733);var inst_19739 = cljs.core.count.call(null,inst_19737);var inst_19713 = inst_19738;var inst_19714 = inst_19737;var inst_19715 = inst_19739;var inst_19716 = (0);var state_19832__$1 = (function (){var statearr_19887 = state_19832;(statearr_19887[(13)] = inst_19713);
(statearr_19887[(14)] = inst_19715);
(statearr_19887[(16)] = inst_19716);
(statearr_19887[(17)] = inst_19714);
return statearr_19887;
})();var statearr_19888_19955 = state_19832__$1;(statearr_19888_19955[(2)] = null);
(statearr_19888_19955[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (11)))
{var inst_19713 = (state_19832[(13)]);var inst_19733 = (state_19832[(7)]);var inst_19733__$1 = cljs.core.seq.call(null,inst_19713);var state_19832__$1 = (function (){var statearr_19889 = state_19832;(statearr_19889[(7)] = inst_19733__$1);
return statearr_19889;
})();if(inst_19733__$1)
{var statearr_19890_19956 = state_19832__$1;(statearr_19890_19956[(1)] = (16));
} else
{var statearr_19891_19957 = state_19832__$1;(statearr_19891_19957[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (9)))
{var inst_19761 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19892_19958 = state_19832__$1;(statearr_19892_19958[(2)] = inst_19761);
(statearr_19892_19958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (5)))
{var inst_19711 = cljs.core.deref.call(null,cs);var inst_19712 = cljs.core.seq.call(null,inst_19711);var inst_19713 = inst_19712;var inst_19714 = null;var inst_19715 = (0);var inst_19716 = (0);var state_19832__$1 = (function (){var statearr_19893 = state_19832;(statearr_19893[(13)] = inst_19713);
(statearr_19893[(14)] = inst_19715);
(statearr_19893[(16)] = inst_19716);
(statearr_19893[(17)] = inst_19714);
return statearr_19893;
})();var statearr_19894_19959 = state_19832__$1;(statearr_19894_19959[(2)] = null);
(statearr_19894_19959[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (14)))
{var state_19832__$1 = state_19832;var statearr_19895_19960 = state_19832__$1;(statearr_19895_19960[(2)] = null);
(statearr_19895_19960[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (45)))
{var inst_19822 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19896_19961 = state_19832__$1;(statearr_19896_19961[(2)] = inst_19822);
(statearr_19896_19961[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (26)))
{var inst_19764 = (state_19832[(29)]);var inst_19818 = (state_19832[(2)]);var inst_19819 = cljs.core.seq.call(null,inst_19764);var state_19832__$1 = (function (){var statearr_19897 = state_19832;(statearr_19897[(31)] = inst_19818);
return statearr_19897;
})();if(inst_19819)
{var statearr_19898_19962 = state_19832__$1;(statearr_19898_19962[(1)] = (42));
} else
{var statearr_19899_19963 = state_19832__$1;(statearr_19899_19963[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (16)))
{var inst_19733 = (state_19832[(7)]);var inst_19735 = cljs.core.chunked_seq_QMARK_.call(null,inst_19733);var state_19832__$1 = state_19832;if(inst_19735)
{var statearr_19900_19964 = state_19832__$1;(statearr_19900_19964[(1)] = (19));
} else
{var statearr_19901_19965 = state_19832__$1;(statearr_19901_19965[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (38)))
{var inst_19811 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19902_19966 = state_19832__$1;(statearr_19902_19966[(2)] = inst_19811);
(statearr_19902_19966[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (30)))
{var state_19832__$1 = state_19832;var statearr_19903_19967 = state_19832__$1;(statearr_19903_19967[(2)] = null);
(statearr_19903_19967[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (10)))
{var inst_19716 = (state_19832[(16)]);var inst_19714 = (state_19832[(17)]);var inst_19722 = cljs.core._nth.call(null,inst_19714,inst_19716);var inst_19723 = cljs.core.nth.call(null,inst_19722,(0),null);var inst_19724 = cljs.core.nth.call(null,inst_19722,(1),null);var state_19832__$1 = (function (){var statearr_19904 = state_19832;(statearr_19904[(26)] = inst_19723);
return statearr_19904;
})();if(cljs.core.truth_(inst_19724))
{var statearr_19905_19968 = state_19832__$1;(statearr_19905_19968[(1)] = (13));
} else
{var statearr_19906_19969 = state_19832__$1;(statearr_19906_19969[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (18)))
{var inst_19757 = (state_19832[(2)]);var state_19832__$1 = state_19832;var statearr_19907_19970 = state_19832__$1;(statearr_19907_19970[(2)] = inst_19757);
(statearr_19907_19970[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (42)))
{var state_19832__$1 = state_19832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19832__$1,(45),dchan);
} else
{if((state_val_19833 === (37)))
{var inst_19800 = (state_19832[(23)]);var inst_19704 = (state_19832[(10)]);var inst_19791 = (state_19832[(25)]);var inst_19800__$1 = cljs.core.first.call(null,inst_19791);var inst_19801 = cljs.core.async.put_BANG_.call(null,inst_19800__$1,inst_19704,done);var state_19832__$1 = (function (){var statearr_19908 = state_19832;(statearr_19908[(23)] = inst_19800__$1);
return statearr_19908;
})();if(cljs.core.truth_(inst_19801))
{var statearr_19909_19971 = state_19832__$1;(statearr_19909_19971[(1)] = (39));
} else
{var statearr_19910_19972 = state_19832__$1;(statearr_19910_19972[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19833 === (8)))
{var inst_19715 = (state_19832[(14)]);var inst_19716 = (state_19832[(16)]);var inst_19718 = (inst_19716 < inst_19715);var inst_19719 = inst_19718;var state_19832__$1 = state_19832;if(cljs.core.truth_(inst_19719))
{var statearr_19911_19973 = state_19832__$1;(statearr_19911_19973[(1)] = (10));
} else
{var statearr_19912_19974 = state_19832__$1;(statearr_19912_19974[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___19920,cs,m,dchan,dctr,done))
;return ((function (switch__13924__auto__,c__13980__auto___19920,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_19916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19916[(0)] = state_machine__13925__auto__);
(statearr_19916[(1)] = (1));
return statearr_19916;
});
var state_machine__13925__auto____1 = (function (state_19832){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_19832);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e19917){if((e19917 instanceof Object))
{var ex__13928__auto__ = e19917;var statearr_19918_19975 = state_19832;(statearr_19918_19975[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19917;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19976 = state_19832;
state_19832 = G__19976;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_19832){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_19832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___19920,cs,m,dchan,dctr,done))
})();var state__13982__auto__ = (function (){var statearr_19919 = f__13981__auto__.call(null);(statearr_19919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___19920);
return statearr_19919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___19920,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj19978 = {};return obj19978;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11517__auto__ = m;if(and__11517__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12166__auto__ = (((m == null))?null:m);return (function (){var or__11529__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19979){var map__19984 = p__19979;var map__19984__$1 = ((cljs.core.seq_QMARK_.call(null,map__19984))?cljs.core.apply.call(null,cljs.core.hash_map,map__19984):map__19984);var opts = map__19984__$1;var statearr_19985_19988 = state;(statearr_19985_19988[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__19984,map__19984__$1,opts){
return (function (val){var statearr_19986_19989 = state;(statearr_19986_19989[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19984,map__19984__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_19987_19990 = state;(statearr_19987_19990[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19979 = null;if (arguments.length > 3) {
  p__19979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19979);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19991){
var state = cljs.core.first(arglist__19991);
arglist__19991 = cljs.core.next(arglist__19991);
var cont_block = cljs.core.first(arglist__19991);
arglist__19991 = cljs.core.next(arglist__19991);
var ports = cljs.core.first(arglist__19991);
var p__19979 = cljs.core.rest(arglist__19991);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19979);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20111 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20112){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20112 = meta20112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20111.cljs$lang$type = true;
cljs.core.async.t20111.cljs$lang$ctorStr = "cljs.core.async/t20111";
cljs.core.async.t20111.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20111");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20113){var self__ = this;
var _20113__$1 = this;return self__.meta20112;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20113,meta20112__$1){var self__ = this;
var _20113__$1 = this;return (new cljs.core.async.t20111(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20112__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20111 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20111(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20112){return (new cljs.core.async.t20111(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20112));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20111(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13980__auto___20230 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20183){var state_val_20184 = (state_20183[(1)]);if((state_val_20184 === (7)))
{var inst_20127 = (state_20183[(7)]);var inst_20132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20127);var state_20183__$1 = state_20183;var statearr_20185_20231 = state_20183__$1;(statearr_20185_20231[(2)] = inst_20132);
(statearr_20185_20231[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (20)))
{var inst_20142 = (state_20183[(8)]);var state_20183__$1 = state_20183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20183__$1,(23),out,inst_20142);
} else
{if((state_val_20184 === (1)))
{var inst_20117 = (state_20183[(9)]);var inst_20117__$1 = calc_state.call(null);var inst_20118 = cljs.core.seq_QMARK_.call(null,inst_20117__$1);var state_20183__$1 = (function (){var statearr_20186 = state_20183;(statearr_20186[(9)] = inst_20117__$1);
return statearr_20186;
})();if(inst_20118)
{var statearr_20187_20232 = state_20183__$1;(statearr_20187_20232[(1)] = (2));
} else
{var statearr_20188_20233 = state_20183__$1;(statearr_20188_20233[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (24)))
{var inst_20135 = (state_20183[(10)]);var inst_20127 = inst_20135;var state_20183__$1 = (function (){var statearr_20189 = state_20183;(statearr_20189[(7)] = inst_20127);
return statearr_20189;
})();var statearr_20190_20234 = state_20183__$1;(statearr_20190_20234[(2)] = null);
(statearr_20190_20234[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (4)))
{var inst_20117 = (state_20183[(9)]);var inst_20123 = (state_20183[(2)]);var inst_20124 = cljs.core.get.call(null,inst_20123,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20125 = cljs.core.get.call(null,inst_20123,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20126 = cljs.core.get.call(null,inst_20123,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20127 = inst_20117;var state_20183__$1 = (function (){var statearr_20191 = state_20183;(statearr_20191[(11)] = inst_20126);
(statearr_20191[(12)] = inst_20125);
(statearr_20191[(13)] = inst_20124);
(statearr_20191[(7)] = inst_20127);
return statearr_20191;
})();var statearr_20192_20235 = state_20183__$1;(statearr_20192_20235[(2)] = null);
(statearr_20192_20235[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (15)))
{var state_20183__$1 = state_20183;var statearr_20193_20236 = state_20183__$1;(statearr_20193_20236[(2)] = null);
(statearr_20193_20236[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (21)))
{var inst_20135 = (state_20183[(10)]);var inst_20127 = inst_20135;var state_20183__$1 = (function (){var statearr_20194 = state_20183;(statearr_20194[(7)] = inst_20127);
return statearr_20194;
})();var statearr_20195_20237 = state_20183__$1;(statearr_20195_20237[(2)] = null);
(statearr_20195_20237[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (13)))
{var inst_20179 = (state_20183[(2)]);var state_20183__$1 = state_20183;var statearr_20196_20238 = state_20183__$1;(statearr_20196_20238[(2)] = inst_20179);
(statearr_20196_20238[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (22)))
{var inst_20177 = (state_20183[(2)]);var state_20183__$1 = state_20183;var statearr_20197_20239 = state_20183__$1;(statearr_20197_20239[(2)] = inst_20177);
(statearr_20197_20239[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (6)))
{var inst_20181 = (state_20183[(2)]);var state_20183__$1 = state_20183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20183__$1,inst_20181);
} else
{if((state_val_20184 === (25)))
{var state_20183__$1 = state_20183;var statearr_20198_20240 = state_20183__$1;(statearr_20198_20240[(2)] = null);
(statearr_20198_20240[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (17)))
{var inst_20157 = (state_20183[(14)]);var state_20183__$1 = state_20183;var statearr_20199_20241 = state_20183__$1;(statearr_20199_20241[(2)] = inst_20157);
(statearr_20199_20241[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (3)))
{var inst_20117 = (state_20183[(9)]);var state_20183__$1 = state_20183;var statearr_20200_20242 = state_20183__$1;(statearr_20200_20242[(2)] = inst_20117);
(statearr_20200_20242[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (12)))
{var inst_20138 = (state_20183[(15)]);var inst_20157 = (state_20183[(14)]);var inst_20143 = (state_20183[(16)]);var inst_20157__$1 = inst_20138.call(null,inst_20143);var state_20183__$1 = (function (){var statearr_20201 = state_20183;(statearr_20201[(14)] = inst_20157__$1);
return statearr_20201;
})();if(cljs.core.truth_(inst_20157__$1))
{var statearr_20202_20243 = state_20183__$1;(statearr_20202_20243[(1)] = (17));
} else
{var statearr_20203_20244 = state_20183__$1;(statearr_20203_20244[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (2)))
{var inst_20117 = (state_20183[(9)]);var inst_20120 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20117);var state_20183__$1 = state_20183;var statearr_20204_20245 = state_20183__$1;(statearr_20204_20245[(2)] = inst_20120);
(statearr_20204_20245[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (23)))
{var inst_20168 = (state_20183[(2)]);var state_20183__$1 = state_20183;if(cljs.core.truth_(inst_20168))
{var statearr_20205_20246 = state_20183__$1;(statearr_20205_20246[(1)] = (24));
} else
{var statearr_20206_20247 = state_20183__$1;(statearr_20206_20247[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (19)))
{var inst_20165 = (state_20183[(2)]);var state_20183__$1 = state_20183;if(cljs.core.truth_(inst_20165))
{var statearr_20207_20248 = state_20183__$1;(statearr_20207_20248[(1)] = (20));
} else
{var statearr_20208_20249 = state_20183__$1;(statearr_20208_20249[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (11)))
{var inst_20142 = (state_20183[(8)]);var inst_20148 = (inst_20142 == null);var state_20183__$1 = state_20183;if(cljs.core.truth_(inst_20148))
{var statearr_20209_20250 = state_20183__$1;(statearr_20209_20250[(1)] = (14));
} else
{var statearr_20210_20251 = state_20183__$1;(statearr_20210_20251[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (9)))
{var inst_20135 = (state_20183[(10)]);var inst_20135__$1 = (state_20183[(2)]);var inst_20136 = cljs.core.get.call(null,inst_20135__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20137 = cljs.core.get.call(null,inst_20135__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20138 = cljs.core.get.call(null,inst_20135__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20183__$1 = (function (){var statearr_20211 = state_20183;(statearr_20211[(15)] = inst_20138);
(statearr_20211[(17)] = inst_20137);
(statearr_20211[(10)] = inst_20135__$1);
return statearr_20211;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20183__$1,(10),inst_20136);
} else
{if((state_val_20184 === (5)))
{var inst_20127 = (state_20183[(7)]);var inst_20130 = cljs.core.seq_QMARK_.call(null,inst_20127);var state_20183__$1 = state_20183;if(inst_20130)
{var statearr_20212_20252 = state_20183__$1;(statearr_20212_20252[(1)] = (7));
} else
{var statearr_20213_20253 = state_20183__$1;(statearr_20213_20253[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (14)))
{var inst_20143 = (state_20183[(16)]);var inst_20150 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20143);var state_20183__$1 = state_20183;var statearr_20214_20254 = state_20183__$1;(statearr_20214_20254[(2)] = inst_20150);
(statearr_20214_20254[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (26)))
{var inst_20173 = (state_20183[(2)]);var state_20183__$1 = state_20183;var statearr_20215_20255 = state_20183__$1;(statearr_20215_20255[(2)] = inst_20173);
(statearr_20215_20255[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (16)))
{var inst_20153 = (state_20183[(2)]);var inst_20154 = calc_state.call(null);var inst_20127 = inst_20154;var state_20183__$1 = (function (){var statearr_20216 = state_20183;(statearr_20216[(18)] = inst_20153);
(statearr_20216[(7)] = inst_20127);
return statearr_20216;
})();var statearr_20217_20256 = state_20183__$1;(statearr_20217_20256[(2)] = null);
(statearr_20217_20256[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (10)))
{var inst_20143 = (state_20183[(16)]);var inst_20142 = (state_20183[(8)]);var inst_20141 = (state_20183[(2)]);var inst_20142__$1 = cljs.core.nth.call(null,inst_20141,(0),null);var inst_20143__$1 = cljs.core.nth.call(null,inst_20141,(1),null);var inst_20144 = (inst_20142__$1 == null);var inst_20145 = cljs.core._EQ_.call(null,inst_20143__$1,change);var inst_20146 = (inst_20144) || (inst_20145);var state_20183__$1 = (function (){var statearr_20218 = state_20183;(statearr_20218[(16)] = inst_20143__$1);
(statearr_20218[(8)] = inst_20142__$1);
return statearr_20218;
})();if(cljs.core.truth_(inst_20146))
{var statearr_20219_20257 = state_20183__$1;(statearr_20219_20257[(1)] = (11));
} else
{var statearr_20220_20258 = state_20183__$1;(statearr_20220_20258[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (18)))
{var inst_20138 = (state_20183[(15)]);var inst_20143 = (state_20183[(16)]);var inst_20137 = (state_20183[(17)]);var inst_20160 = cljs.core.empty_QMARK_.call(null,inst_20138);var inst_20161 = inst_20137.call(null,inst_20143);var inst_20162 = cljs.core.not.call(null,inst_20161);var inst_20163 = (inst_20160) && (inst_20162);var state_20183__$1 = state_20183;var statearr_20221_20259 = state_20183__$1;(statearr_20221_20259[(2)] = inst_20163);
(statearr_20221_20259[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20184 === (8)))
{var inst_20127 = (state_20183[(7)]);var state_20183__$1 = state_20183;var statearr_20222_20260 = state_20183__$1;(statearr_20222_20260[(2)] = inst_20127);
(statearr_20222_20260[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13924__auto__,c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_20226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20226[(0)] = state_machine__13925__auto__);
(statearr_20226[(1)] = (1));
return statearr_20226;
});
var state_machine__13925__auto____1 = (function (state_20183){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_20183);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e20227){if((e20227 instanceof Object))
{var ex__13928__auto__ = e20227;var statearr_20228_20261 = state_20183;(statearr_20228_20261[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20227;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20262 = state_20183;
state_20183 = G__20262;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_20183){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_20183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13982__auto__ = (function (){var statearr_20229 = f__13981__auto__.call(null);(statearr_20229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___20230);
return statearr_20229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___20230,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20264 = {};return obj20264;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11517__auto__ = p;if(and__11517__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11517__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12166__auto__ = (((p == null))?null:p);return (function (){var or__11529__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11517__auto__ = p;if(and__11517__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11517__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12166__auto__ = (((p == null))?null:p);return (function (){var or__11529__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11517__auto__ = p;if(and__11517__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11517__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12166__auto__ = (((p == null))?null:p);return (function (){var or__11529__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11517__auto__ = p;if(and__11517__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11517__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12166__auto__ = (((p == null))?null:p);return (function (){var or__11529__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12166__auto__)]);if(or__11529__auto__)
{return or__11529__auto__;
} else
{var or__11529__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11529__auto____$1)
{return or__11529__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11529__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11529__auto__,mults){
return (function (p1__20265_SHARP_){if(cljs.core.truth_(p1__20265_SHARP_.call(null,topic)))
{return p1__20265_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20265_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11529__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20388 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20389){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20389 = meta20389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20388.cljs$lang$type = true;
cljs.core.async.t20388.cljs$lang$ctorStr = "cljs.core.async/t20388";
cljs.core.async.t20388.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20388");
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20388.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20390){var self__ = this;
var _20390__$1 = this;return self__.meta20389;
});})(mults,ensure_mult))
;
cljs.core.async.t20388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20390,meta20389__$1){var self__ = this;
var _20390__$1 = this;return (new cljs.core.async.t20388(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20389__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20388 = ((function (mults,ensure_mult){
return (function __GT_t20388(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20389){return (new cljs.core.async.t20388(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20389));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20388(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13980__auto___20510 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___20510,mults,ensure_mult,p){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___20510,mults,ensure_mult,p){
return (function (state_20462){var state_val_20463 = (state_20462[(1)]);if((state_val_20463 === (7)))
{var inst_20458 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20464_20511 = state_20462__$1;(statearr_20464_20511[(2)] = inst_20458);
(statearr_20464_20511[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (20)))
{var state_20462__$1 = state_20462;var statearr_20465_20512 = state_20462__$1;(statearr_20465_20512[(2)] = null);
(statearr_20465_20512[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (1)))
{var state_20462__$1 = state_20462;var statearr_20466_20513 = state_20462__$1;(statearr_20466_20513[(2)] = null);
(statearr_20466_20513[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (24)))
{var inst_20441 = (state_20462[(7)]);var inst_20450 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20441);var state_20462__$1 = state_20462;var statearr_20467_20514 = state_20462__$1;(statearr_20467_20514[(2)] = inst_20450);
(statearr_20467_20514[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (4)))
{var inst_20393 = (state_20462[(8)]);var inst_20393__$1 = (state_20462[(2)]);var inst_20394 = (inst_20393__$1 == null);var state_20462__$1 = (function (){var statearr_20468 = state_20462;(statearr_20468[(8)] = inst_20393__$1);
return statearr_20468;
})();if(cljs.core.truth_(inst_20394))
{var statearr_20469_20515 = state_20462__$1;(statearr_20469_20515[(1)] = (5));
} else
{var statearr_20470_20516 = state_20462__$1;(statearr_20470_20516[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (15)))
{var inst_20435 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20471_20517 = state_20462__$1;(statearr_20471_20517[(2)] = inst_20435);
(statearr_20471_20517[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (21)))
{var inst_20455 = (state_20462[(2)]);var state_20462__$1 = (function (){var statearr_20472 = state_20462;(statearr_20472[(9)] = inst_20455);
return statearr_20472;
})();var statearr_20473_20518 = state_20462__$1;(statearr_20473_20518[(2)] = null);
(statearr_20473_20518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (13)))
{var inst_20417 = (state_20462[(10)]);var inst_20419 = cljs.core.chunked_seq_QMARK_.call(null,inst_20417);var state_20462__$1 = state_20462;if(inst_20419)
{var statearr_20474_20519 = state_20462__$1;(statearr_20474_20519[(1)] = (16));
} else
{var statearr_20475_20520 = state_20462__$1;(statearr_20475_20520[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (22)))
{var inst_20447 = (state_20462[(2)]);var state_20462__$1 = state_20462;if(cljs.core.truth_(inst_20447))
{var statearr_20476_20521 = state_20462__$1;(statearr_20476_20521[(1)] = (23));
} else
{var statearr_20477_20522 = state_20462__$1;(statearr_20477_20522[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (6)))
{var inst_20393 = (state_20462[(8)]);var inst_20443 = (state_20462[(11)]);var inst_20441 = (state_20462[(7)]);var inst_20441__$1 = topic_fn.call(null,inst_20393);var inst_20442 = cljs.core.deref.call(null,mults);var inst_20443__$1 = cljs.core.get.call(null,inst_20442,inst_20441__$1);var state_20462__$1 = (function (){var statearr_20478 = state_20462;(statearr_20478[(11)] = inst_20443__$1);
(statearr_20478[(7)] = inst_20441__$1);
return statearr_20478;
})();if(cljs.core.truth_(inst_20443__$1))
{var statearr_20479_20523 = state_20462__$1;(statearr_20479_20523[(1)] = (19));
} else
{var statearr_20480_20524 = state_20462__$1;(statearr_20480_20524[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (25)))
{var inst_20452 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20481_20525 = state_20462__$1;(statearr_20481_20525[(2)] = inst_20452);
(statearr_20481_20525[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (17)))
{var inst_20417 = (state_20462[(10)]);var inst_20426 = cljs.core.first.call(null,inst_20417);var inst_20427 = cljs.core.async.muxch_STAR_.call(null,inst_20426);var inst_20428 = cljs.core.async.close_BANG_.call(null,inst_20427);var inst_20429 = cljs.core.next.call(null,inst_20417);var inst_20403 = inst_20429;var inst_20404 = null;var inst_20405 = (0);var inst_20406 = (0);var state_20462__$1 = (function (){var statearr_20482 = state_20462;(statearr_20482[(12)] = inst_20404);
(statearr_20482[(13)] = inst_20403);
(statearr_20482[(14)] = inst_20406);
(statearr_20482[(15)] = inst_20405);
(statearr_20482[(16)] = inst_20428);
return statearr_20482;
})();var statearr_20483_20526 = state_20462__$1;(statearr_20483_20526[(2)] = null);
(statearr_20483_20526[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (3)))
{var inst_20460 = (state_20462[(2)]);var state_20462__$1 = state_20462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20462__$1,inst_20460);
} else
{if((state_val_20463 === (12)))
{var inst_20437 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20484_20527 = state_20462__$1;(statearr_20484_20527[(2)] = inst_20437);
(statearr_20484_20527[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (2)))
{var state_20462__$1 = state_20462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20462__$1,(4),ch);
} else
{if((state_val_20463 === (23)))
{var state_20462__$1 = state_20462;var statearr_20485_20528 = state_20462__$1;(statearr_20485_20528[(2)] = null);
(statearr_20485_20528[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (19)))
{var inst_20393 = (state_20462[(8)]);var inst_20443 = (state_20462[(11)]);var inst_20445 = cljs.core.async.muxch_STAR_.call(null,inst_20443);var state_20462__$1 = state_20462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20462__$1,(22),inst_20445,inst_20393);
} else
{if((state_val_20463 === (11)))
{var inst_20417 = (state_20462[(10)]);var inst_20403 = (state_20462[(13)]);var inst_20417__$1 = cljs.core.seq.call(null,inst_20403);var state_20462__$1 = (function (){var statearr_20486 = state_20462;(statearr_20486[(10)] = inst_20417__$1);
return statearr_20486;
})();if(inst_20417__$1)
{var statearr_20487_20529 = state_20462__$1;(statearr_20487_20529[(1)] = (13));
} else
{var statearr_20488_20530 = state_20462__$1;(statearr_20488_20530[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (9)))
{var inst_20439 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20489_20531 = state_20462__$1;(statearr_20489_20531[(2)] = inst_20439);
(statearr_20489_20531[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (5)))
{var inst_20400 = cljs.core.deref.call(null,mults);var inst_20401 = cljs.core.vals.call(null,inst_20400);var inst_20402 = cljs.core.seq.call(null,inst_20401);var inst_20403 = inst_20402;var inst_20404 = null;var inst_20405 = (0);var inst_20406 = (0);var state_20462__$1 = (function (){var statearr_20490 = state_20462;(statearr_20490[(12)] = inst_20404);
(statearr_20490[(13)] = inst_20403);
(statearr_20490[(14)] = inst_20406);
(statearr_20490[(15)] = inst_20405);
return statearr_20490;
})();var statearr_20491_20532 = state_20462__$1;(statearr_20491_20532[(2)] = null);
(statearr_20491_20532[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (14)))
{var state_20462__$1 = state_20462;var statearr_20495_20533 = state_20462__$1;(statearr_20495_20533[(2)] = null);
(statearr_20495_20533[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (16)))
{var inst_20417 = (state_20462[(10)]);var inst_20421 = cljs.core.chunk_first.call(null,inst_20417);var inst_20422 = cljs.core.chunk_rest.call(null,inst_20417);var inst_20423 = cljs.core.count.call(null,inst_20421);var inst_20403 = inst_20422;var inst_20404 = inst_20421;var inst_20405 = inst_20423;var inst_20406 = (0);var state_20462__$1 = (function (){var statearr_20496 = state_20462;(statearr_20496[(12)] = inst_20404);
(statearr_20496[(13)] = inst_20403);
(statearr_20496[(14)] = inst_20406);
(statearr_20496[(15)] = inst_20405);
return statearr_20496;
})();var statearr_20497_20534 = state_20462__$1;(statearr_20497_20534[(2)] = null);
(statearr_20497_20534[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (10)))
{var inst_20404 = (state_20462[(12)]);var inst_20403 = (state_20462[(13)]);var inst_20406 = (state_20462[(14)]);var inst_20405 = (state_20462[(15)]);var inst_20411 = cljs.core._nth.call(null,inst_20404,inst_20406);var inst_20412 = cljs.core.async.muxch_STAR_.call(null,inst_20411);var inst_20413 = cljs.core.async.close_BANG_.call(null,inst_20412);var inst_20414 = (inst_20406 + (1));var tmp20492 = inst_20404;var tmp20493 = inst_20403;var tmp20494 = inst_20405;var inst_20403__$1 = tmp20493;var inst_20404__$1 = tmp20492;var inst_20405__$1 = tmp20494;var inst_20406__$1 = inst_20414;var state_20462__$1 = (function (){var statearr_20498 = state_20462;(statearr_20498[(12)] = inst_20404__$1);
(statearr_20498[(13)] = inst_20403__$1);
(statearr_20498[(14)] = inst_20406__$1);
(statearr_20498[(15)] = inst_20405__$1);
(statearr_20498[(17)] = inst_20413);
return statearr_20498;
})();var statearr_20499_20535 = state_20462__$1;(statearr_20499_20535[(2)] = null);
(statearr_20499_20535[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (18)))
{var inst_20432 = (state_20462[(2)]);var state_20462__$1 = state_20462;var statearr_20500_20536 = state_20462__$1;(statearr_20500_20536[(2)] = inst_20432);
(statearr_20500_20536[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20463 === (8)))
{var inst_20406 = (state_20462[(14)]);var inst_20405 = (state_20462[(15)]);var inst_20408 = (inst_20406 < inst_20405);var inst_20409 = inst_20408;var state_20462__$1 = state_20462;if(cljs.core.truth_(inst_20409))
{var statearr_20501_20537 = state_20462__$1;(statearr_20501_20537[(1)] = (10));
} else
{var statearr_20502_20538 = state_20462__$1;(statearr_20502_20538[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___20510,mults,ensure_mult,p))
;return ((function (switch__13924__auto__,c__13980__auto___20510,mults,ensure_mult,p){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_20506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20506[(0)] = state_machine__13925__auto__);
(statearr_20506[(1)] = (1));
return statearr_20506;
});
var state_machine__13925__auto____1 = (function (state_20462){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_20462);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e20507){if((e20507 instanceof Object))
{var ex__13928__auto__ = e20507;var statearr_20508_20539 = state_20462;(statearr_20508_20539[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20507;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20540 = state_20462;
state_20462 = G__20540;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_20462){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_20462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___20510,mults,ensure_mult,p))
})();var state__13982__auto__ = (function (){var statearr_20509 = f__13981__auto__.call(null);(statearr_20509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___20510);
return statearr_20509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___20510,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13980__auto___20677 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20647){var state_val_20648 = (state_20647[(1)]);if((state_val_20648 === (7)))
{var state_20647__$1 = state_20647;var statearr_20649_20678 = state_20647__$1;(statearr_20649_20678[(2)] = null);
(statearr_20649_20678[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (1)))
{var state_20647__$1 = state_20647;var statearr_20650_20679 = state_20647__$1;(statearr_20650_20679[(2)] = null);
(statearr_20650_20679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (4)))
{var inst_20611 = (state_20647[(7)]);var inst_20613 = (inst_20611 < cnt);var state_20647__$1 = state_20647;if(cljs.core.truth_(inst_20613))
{var statearr_20651_20680 = state_20647__$1;(statearr_20651_20680[(1)] = (6));
} else
{var statearr_20652_20681 = state_20647__$1;(statearr_20652_20681[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (15)))
{var inst_20643 = (state_20647[(2)]);var state_20647__$1 = state_20647;var statearr_20653_20682 = state_20647__$1;(statearr_20653_20682[(2)] = inst_20643);
(statearr_20653_20682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (13)))
{var inst_20636 = cljs.core.async.close_BANG_.call(null,out);var state_20647__$1 = state_20647;var statearr_20654_20683 = state_20647__$1;(statearr_20654_20683[(2)] = inst_20636);
(statearr_20654_20683[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (6)))
{var state_20647__$1 = state_20647;var statearr_20655_20684 = state_20647__$1;(statearr_20655_20684[(2)] = null);
(statearr_20655_20684[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (3)))
{var inst_20645 = (state_20647[(2)]);var state_20647__$1 = state_20647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20647__$1,inst_20645);
} else
{if((state_val_20648 === (12)))
{var inst_20633 = (state_20647[(8)]);var inst_20633__$1 = (state_20647[(2)]);var inst_20634 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20633__$1);var state_20647__$1 = (function (){var statearr_20656 = state_20647;(statearr_20656[(8)] = inst_20633__$1);
return statearr_20656;
})();if(cljs.core.truth_(inst_20634))
{var statearr_20657_20685 = state_20647__$1;(statearr_20657_20685[(1)] = (13));
} else
{var statearr_20658_20686 = state_20647__$1;(statearr_20658_20686[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (2)))
{var inst_20610 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20611 = (0);var state_20647__$1 = (function (){var statearr_20659 = state_20647;(statearr_20659[(9)] = inst_20610);
(statearr_20659[(7)] = inst_20611);
return statearr_20659;
})();var statearr_20660_20687 = state_20647__$1;(statearr_20660_20687[(2)] = null);
(statearr_20660_20687[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (11)))
{var inst_20611 = (state_20647[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20647,(10),Object,null,(9));var inst_20620 = chs__$1.call(null,inst_20611);var inst_20621 = done.call(null,inst_20611);var inst_20622 = cljs.core.async.take_BANG_.call(null,inst_20620,inst_20621);var state_20647__$1 = state_20647;var statearr_20661_20688 = state_20647__$1;(statearr_20661_20688[(2)] = inst_20622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20647__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (9)))
{var inst_20611 = (state_20647[(7)]);var inst_20624 = (state_20647[(2)]);var inst_20625 = (inst_20611 + (1));var inst_20611__$1 = inst_20625;var state_20647__$1 = (function (){var statearr_20662 = state_20647;(statearr_20662[(10)] = inst_20624);
(statearr_20662[(7)] = inst_20611__$1);
return statearr_20662;
})();var statearr_20663_20689 = state_20647__$1;(statearr_20663_20689[(2)] = null);
(statearr_20663_20689[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (5)))
{var inst_20631 = (state_20647[(2)]);var state_20647__$1 = (function (){var statearr_20664 = state_20647;(statearr_20664[(11)] = inst_20631);
return statearr_20664;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20647__$1,(12),dchan);
} else
{if((state_val_20648 === (14)))
{var inst_20633 = (state_20647[(8)]);var inst_20638 = cljs.core.apply.call(null,f,inst_20633);var state_20647__$1 = state_20647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20647__$1,(16),out,inst_20638);
} else
{if((state_val_20648 === (16)))
{var inst_20640 = (state_20647[(2)]);var state_20647__$1 = (function (){var statearr_20665 = state_20647;(statearr_20665[(12)] = inst_20640);
return statearr_20665;
})();var statearr_20666_20690 = state_20647__$1;(statearr_20666_20690[(2)] = null);
(statearr_20666_20690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (10)))
{var inst_20615 = (state_20647[(2)]);var inst_20616 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20647__$1 = (function (){var statearr_20667 = state_20647;(statearr_20667[(13)] = inst_20615);
return statearr_20667;
})();var statearr_20668_20691 = state_20647__$1;(statearr_20668_20691[(2)] = inst_20616);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20647__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20648 === (8)))
{var inst_20629 = (state_20647[(2)]);var state_20647__$1 = state_20647;var statearr_20669_20692 = state_20647__$1;(statearr_20669_20692[(2)] = inst_20629);
(statearr_20669_20692[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13924__auto__,c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_20673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20673[(0)] = state_machine__13925__auto__);
(statearr_20673[(1)] = (1));
return statearr_20673;
});
var state_machine__13925__auto____1 = (function (state_20647){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_20647);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e20674){if((e20674 instanceof Object))
{var ex__13928__auto__ = e20674;var statearr_20675_20693 = state_20647;(statearr_20675_20693[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20647);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20674;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20694 = state_20647;
state_20647 = G__20694;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_20647){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_20647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13982__auto__ = (function (){var statearr_20676 = f__13981__auto__.call(null);(statearr_20676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___20677);
return statearr_20676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___20677,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___20802 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___20802,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___20802,out){
return (function (state_20778){var state_val_20779 = (state_20778[(1)]);if((state_val_20779 === (7)))
{var inst_20757 = (state_20778[(7)]);var inst_20758 = (state_20778[(8)]);var inst_20757__$1 = (state_20778[(2)]);var inst_20758__$1 = cljs.core.nth.call(null,inst_20757__$1,(0),null);var inst_20759 = cljs.core.nth.call(null,inst_20757__$1,(1),null);var inst_20760 = (inst_20758__$1 == null);var state_20778__$1 = (function (){var statearr_20780 = state_20778;(statearr_20780[(9)] = inst_20759);
(statearr_20780[(7)] = inst_20757__$1);
(statearr_20780[(8)] = inst_20758__$1);
return statearr_20780;
})();if(cljs.core.truth_(inst_20760))
{var statearr_20781_20803 = state_20778__$1;(statearr_20781_20803[(1)] = (8));
} else
{var statearr_20782_20804 = state_20778__$1;(statearr_20782_20804[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (1)))
{var inst_20749 = cljs.core.vec.call(null,chs);var inst_20750 = inst_20749;var state_20778__$1 = (function (){var statearr_20783 = state_20778;(statearr_20783[(10)] = inst_20750);
return statearr_20783;
})();var statearr_20784_20805 = state_20778__$1;(statearr_20784_20805[(2)] = null);
(statearr_20784_20805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (4)))
{var inst_20750 = (state_20778[(10)]);var state_20778__$1 = state_20778;return cljs.core.async.ioc_alts_BANG_.call(null,state_20778__$1,(7),inst_20750);
} else
{if((state_val_20779 === (6)))
{var inst_20774 = (state_20778[(2)]);var state_20778__$1 = state_20778;var statearr_20785_20806 = state_20778__$1;(statearr_20785_20806[(2)] = inst_20774);
(statearr_20785_20806[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (3)))
{var inst_20776 = (state_20778[(2)]);var state_20778__$1 = state_20778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20778__$1,inst_20776);
} else
{if((state_val_20779 === (2)))
{var inst_20750 = (state_20778[(10)]);var inst_20752 = cljs.core.count.call(null,inst_20750);var inst_20753 = (inst_20752 > (0));var state_20778__$1 = state_20778;if(cljs.core.truth_(inst_20753))
{var statearr_20787_20807 = state_20778__$1;(statearr_20787_20807[(1)] = (4));
} else
{var statearr_20788_20808 = state_20778__$1;(statearr_20788_20808[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (11)))
{var inst_20750 = (state_20778[(10)]);var inst_20767 = (state_20778[(2)]);var tmp20786 = inst_20750;var inst_20750__$1 = tmp20786;var state_20778__$1 = (function (){var statearr_20789 = state_20778;(statearr_20789[(11)] = inst_20767);
(statearr_20789[(10)] = inst_20750__$1);
return statearr_20789;
})();var statearr_20790_20809 = state_20778__$1;(statearr_20790_20809[(2)] = null);
(statearr_20790_20809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (9)))
{var inst_20758 = (state_20778[(8)]);var state_20778__$1 = state_20778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20778__$1,(11),out,inst_20758);
} else
{if((state_val_20779 === (5)))
{var inst_20772 = cljs.core.async.close_BANG_.call(null,out);var state_20778__$1 = state_20778;var statearr_20791_20810 = state_20778__$1;(statearr_20791_20810[(2)] = inst_20772);
(statearr_20791_20810[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (10)))
{var inst_20770 = (state_20778[(2)]);var state_20778__$1 = state_20778;var statearr_20792_20811 = state_20778__$1;(statearr_20792_20811[(2)] = inst_20770);
(statearr_20792_20811[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20779 === (8)))
{var inst_20759 = (state_20778[(9)]);var inst_20757 = (state_20778[(7)]);var inst_20758 = (state_20778[(8)]);var inst_20750 = (state_20778[(10)]);var inst_20762 = (function (){var c = inst_20759;var v = inst_20758;var vec__20755 = inst_20757;var cs = inst_20750;return ((function (c,v,vec__20755,cs,inst_20759,inst_20757,inst_20758,inst_20750,state_val_20779,c__13980__auto___20802,out){
return (function (p1__20695_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20695_SHARP_);
});
;})(c,v,vec__20755,cs,inst_20759,inst_20757,inst_20758,inst_20750,state_val_20779,c__13980__auto___20802,out))
})();var inst_20763 = cljs.core.filterv.call(null,inst_20762,inst_20750);var inst_20750__$1 = inst_20763;var state_20778__$1 = (function (){var statearr_20793 = state_20778;(statearr_20793[(10)] = inst_20750__$1);
return statearr_20793;
})();var statearr_20794_20812 = state_20778__$1;(statearr_20794_20812[(2)] = null);
(statearr_20794_20812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___20802,out))
;return ((function (switch__13924__auto__,c__13980__auto___20802,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_20798 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20798[(0)] = state_machine__13925__auto__);
(statearr_20798[(1)] = (1));
return statearr_20798;
});
var state_machine__13925__auto____1 = (function (state_20778){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_20778);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e20799){if((e20799 instanceof Object))
{var ex__13928__auto__ = e20799;var statearr_20800_20813 = state_20778;(statearr_20800_20813[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20778);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20799;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20814 = state_20778;
state_20778 = G__20814;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_20778){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_20778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___20802,out))
})();var state__13982__auto__ = (function (){var statearr_20801 = f__13981__auto__.call(null);(statearr_20801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___20802);
return statearr_20801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___20802,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___20907 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___20907,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___20907,out){
return (function (state_20884){var state_val_20885 = (state_20884[(1)]);if((state_val_20885 === (7)))
{var inst_20866 = (state_20884[(7)]);var inst_20866__$1 = (state_20884[(2)]);var inst_20867 = (inst_20866__$1 == null);var inst_20868 = cljs.core.not.call(null,inst_20867);var state_20884__$1 = (function (){var statearr_20886 = state_20884;(statearr_20886[(7)] = inst_20866__$1);
return statearr_20886;
})();if(inst_20868)
{var statearr_20887_20908 = state_20884__$1;(statearr_20887_20908[(1)] = (8));
} else
{var statearr_20888_20909 = state_20884__$1;(statearr_20888_20909[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (1)))
{var inst_20861 = (0);var state_20884__$1 = (function (){var statearr_20889 = state_20884;(statearr_20889[(8)] = inst_20861);
return statearr_20889;
})();var statearr_20890_20910 = state_20884__$1;(statearr_20890_20910[(2)] = null);
(statearr_20890_20910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (4)))
{var state_20884__$1 = state_20884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20884__$1,(7),ch);
} else
{if((state_val_20885 === (6)))
{var inst_20879 = (state_20884[(2)]);var state_20884__$1 = state_20884;var statearr_20891_20911 = state_20884__$1;(statearr_20891_20911[(2)] = inst_20879);
(statearr_20891_20911[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (3)))
{var inst_20881 = (state_20884[(2)]);var inst_20882 = cljs.core.async.close_BANG_.call(null,out);var state_20884__$1 = (function (){var statearr_20892 = state_20884;(statearr_20892[(9)] = inst_20881);
return statearr_20892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20884__$1,inst_20882);
} else
{if((state_val_20885 === (2)))
{var inst_20861 = (state_20884[(8)]);var inst_20863 = (inst_20861 < n);var state_20884__$1 = state_20884;if(cljs.core.truth_(inst_20863))
{var statearr_20893_20912 = state_20884__$1;(statearr_20893_20912[(1)] = (4));
} else
{var statearr_20894_20913 = state_20884__$1;(statearr_20894_20913[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (11)))
{var inst_20861 = (state_20884[(8)]);var inst_20871 = (state_20884[(2)]);var inst_20872 = (inst_20861 + (1));var inst_20861__$1 = inst_20872;var state_20884__$1 = (function (){var statearr_20895 = state_20884;(statearr_20895[(8)] = inst_20861__$1);
(statearr_20895[(10)] = inst_20871);
return statearr_20895;
})();var statearr_20896_20914 = state_20884__$1;(statearr_20896_20914[(2)] = null);
(statearr_20896_20914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (9)))
{var state_20884__$1 = state_20884;var statearr_20897_20915 = state_20884__$1;(statearr_20897_20915[(2)] = null);
(statearr_20897_20915[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (5)))
{var state_20884__$1 = state_20884;var statearr_20898_20916 = state_20884__$1;(statearr_20898_20916[(2)] = null);
(statearr_20898_20916[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (10)))
{var inst_20876 = (state_20884[(2)]);var state_20884__$1 = state_20884;var statearr_20899_20917 = state_20884__$1;(statearr_20899_20917[(2)] = inst_20876);
(statearr_20899_20917[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20885 === (8)))
{var inst_20866 = (state_20884[(7)]);var state_20884__$1 = state_20884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20884__$1,(11),out,inst_20866);
} else
{return null;
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
});})(c__13980__auto___20907,out))
;return ((function (switch__13924__auto__,c__13980__auto___20907,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_20903 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20903[(0)] = state_machine__13925__auto__);
(statearr_20903[(1)] = (1));
return statearr_20903;
});
var state_machine__13925__auto____1 = (function (state_20884){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_20884);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e20904){if((e20904 instanceof Object))
{var ex__13928__auto__ = e20904;var statearr_20905_20918 = state_20884;(statearr_20905_20918[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20904;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20919 = state_20884;
state_20884 = G__20919;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_20884){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_20884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___20907,out))
})();var state__13982__auto__ = (function (){var statearr_20906 = f__13981__auto__.call(null);(statearr_20906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___20907);
return statearr_20906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___20907,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20927 = (function (ch,f,map_LT_,meta20928){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20928 = meta20928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20927.cljs$lang$type = true;
cljs.core.async.t20927.cljs$lang$ctorStr = "cljs.core.async/t20927";
cljs.core.async.t20927.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20927");
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20930 = (function (fn1,_,meta20928,ch,f,map_LT_,meta20931){
this.fn1 = fn1;
this._ = _;
this.meta20928 = meta20928;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20931 = meta20931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20930.cljs$lang$type = true;
cljs.core.async.t20930.cljs$lang$ctorStr = "cljs.core.async/t20930";
cljs.core.async.t20930.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20930");
});})(___$1))
;
cljs.core.async.t20930.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20920_SHARP_){return f1.call(null,(((p1__20920_SHARP_ == null))?null:self__.f.call(null,p1__20920_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20932){var self__ = this;
var _20932__$1 = this;return self__.meta20931;
});})(___$1))
;
cljs.core.async.t20930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20932,meta20931__$1){var self__ = this;
var _20932__$1 = this;return (new cljs.core.async.t20930(self__.fn1,self__._,self__.meta20928,self__.ch,self__.f,self__.map_LT_,meta20931__$1));
});})(___$1))
;
cljs.core.async.__GT_t20930 = ((function (___$1){
return (function __GT_t20930(fn1__$1,___$2,meta20928__$1,ch__$2,f__$2,map_LT___$2,meta20931){return (new cljs.core.async.t20930(fn1__$1,___$2,meta20928__$1,ch__$2,f__$2,map_LT___$2,meta20931));
});})(___$1))
;
}
return (new cljs.core.async.t20930(fn1,___$1,self__.meta20928,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11517__auto__ = ret;if(cljs.core.truth_(and__11517__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11517__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20927.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20929){var self__ = this;
var _20929__$1 = this;return self__.meta20928;
});
cljs.core.async.t20927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20929,meta20928__$1){var self__ = this;
var _20929__$1 = this;return (new cljs.core.async.t20927(self__.ch,self__.f,self__.map_LT_,meta20928__$1));
});
cljs.core.async.__GT_t20927 = (function __GT_t20927(ch__$1,f__$1,map_LT___$1,meta20928){return (new cljs.core.async.t20927(ch__$1,f__$1,map_LT___$1,meta20928));
});
}
return (new cljs.core.async.t20927(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20936 = (function (ch,f,map_GT_,meta20937){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20937 = meta20937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20936.cljs$lang$type = true;
cljs.core.async.t20936.cljs$lang$ctorStr = "cljs.core.async/t20936";
cljs.core.async.t20936.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20936");
});
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20938){var self__ = this;
var _20938__$1 = this;return self__.meta20937;
});
cljs.core.async.t20936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20938,meta20937__$1){var self__ = this;
var _20938__$1 = this;return (new cljs.core.async.t20936(self__.ch,self__.f,self__.map_GT_,meta20937__$1));
});
cljs.core.async.__GT_t20936 = (function __GT_t20936(ch__$1,f__$1,map_GT___$1,meta20937){return (new cljs.core.async.t20936(ch__$1,f__$1,map_GT___$1,meta20937));
});
}
return (new cljs.core.async.t20936(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20942 = (function (ch,p,filter_GT_,meta20943){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20943 = meta20943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20942.cljs$lang$type = true;
cljs.core.async.t20942.cljs$lang$ctorStr = "cljs.core.async/t20942";
cljs.core.async.t20942.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"cljs.core.async/t20942");
});
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20942.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20944){var self__ = this;
var _20944__$1 = this;return self__.meta20943;
});
cljs.core.async.t20942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20944,meta20943__$1){var self__ = this;
var _20944__$1 = this;return (new cljs.core.async.t20942(self__.ch,self__.p,self__.filter_GT_,meta20943__$1));
});
cljs.core.async.__GT_t20942 = (function __GT_t20942(ch__$1,p__$1,filter_GT___$1,meta20943){return (new cljs.core.async.t20942(ch__$1,p__$1,filter_GT___$1,meta20943));
});
}
return (new cljs.core.async.t20942(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___21027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___21027,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___21027,out){
return (function (state_21006){var state_val_21007 = (state_21006[(1)]);if((state_val_21007 === (7)))
{var inst_21002 = (state_21006[(2)]);var state_21006__$1 = state_21006;var statearr_21008_21028 = state_21006__$1;(statearr_21008_21028[(2)] = inst_21002);
(statearr_21008_21028[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (1)))
{var state_21006__$1 = state_21006;var statearr_21009_21029 = state_21006__$1;(statearr_21009_21029[(2)] = null);
(statearr_21009_21029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (4)))
{var inst_20988 = (state_21006[(7)]);var inst_20988__$1 = (state_21006[(2)]);var inst_20989 = (inst_20988__$1 == null);var state_21006__$1 = (function (){var statearr_21010 = state_21006;(statearr_21010[(7)] = inst_20988__$1);
return statearr_21010;
})();if(cljs.core.truth_(inst_20989))
{var statearr_21011_21030 = state_21006__$1;(statearr_21011_21030[(1)] = (5));
} else
{var statearr_21012_21031 = state_21006__$1;(statearr_21012_21031[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (6)))
{var inst_20988 = (state_21006[(7)]);var inst_20993 = p.call(null,inst_20988);var state_21006__$1 = state_21006;if(cljs.core.truth_(inst_20993))
{var statearr_21013_21032 = state_21006__$1;(statearr_21013_21032[(1)] = (8));
} else
{var statearr_21014_21033 = state_21006__$1;(statearr_21014_21033[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (3)))
{var inst_21004 = (state_21006[(2)]);var state_21006__$1 = state_21006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21006__$1,inst_21004);
} else
{if((state_val_21007 === (2)))
{var state_21006__$1 = state_21006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(4),ch);
} else
{if((state_val_21007 === (11)))
{var inst_20996 = (state_21006[(2)]);var state_21006__$1 = state_21006;var statearr_21015_21034 = state_21006__$1;(statearr_21015_21034[(2)] = inst_20996);
(statearr_21015_21034[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (9)))
{var state_21006__$1 = state_21006;var statearr_21016_21035 = state_21006__$1;(statearr_21016_21035[(2)] = null);
(statearr_21016_21035[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (5)))
{var inst_20991 = cljs.core.async.close_BANG_.call(null,out);var state_21006__$1 = state_21006;var statearr_21017_21036 = state_21006__$1;(statearr_21017_21036[(2)] = inst_20991);
(statearr_21017_21036[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (10)))
{var inst_20999 = (state_21006[(2)]);var state_21006__$1 = (function (){var statearr_21018 = state_21006;(statearr_21018[(8)] = inst_20999);
return statearr_21018;
})();var statearr_21019_21037 = state_21006__$1;(statearr_21019_21037[(2)] = null);
(statearr_21019_21037[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21007 === (8)))
{var inst_20988 = (state_21006[(7)]);var state_21006__$1 = state_21006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(11),out,inst_20988);
} else
{return null;
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
});})(c__13980__auto___21027,out))
;return ((function (switch__13924__auto__,c__13980__auto___21027,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_21023 = [null,null,null,null,null,null,null,null,null];(statearr_21023[(0)] = state_machine__13925__auto__);
(statearr_21023[(1)] = (1));
return statearr_21023;
});
var state_machine__13925__auto____1 = (function (state_21006){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_21006);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e21024){if((e21024 instanceof Object))
{var ex__13928__auto__ = e21024;var statearr_21025_21038 = state_21006;(statearr_21025_21038[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21006);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21024;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21039 = state_21006;
state_21006 = G__21039;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___21027,out))
})();var state__13982__auto__ = (function (){var statearr_21026 = f__13981__auto__.call(null);(statearr_21026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___21027);
return statearr_21026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___21027,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__){
return (function (state_21205){var state_val_21206 = (state_21205[(1)]);if((state_val_21206 === (7)))
{var inst_21201 = (state_21205[(2)]);var state_21205__$1 = state_21205;var statearr_21207_21248 = state_21205__$1;(statearr_21207_21248[(2)] = inst_21201);
(statearr_21207_21248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (20)))
{var inst_21171 = (state_21205[(7)]);var inst_21182 = (state_21205[(2)]);var inst_21183 = cljs.core.next.call(null,inst_21171);var inst_21157 = inst_21183;var inst_21158 = null;var inst_21159 = (0);var inst_21160 = (0);var state_21205__$1 = (function (){var statearr_21208 = state_21205;(statearr_21208[(8)] = inst_21159);
(statearr_21208[(9)] = inst_21182);
(statearr_21208[(10)] = inst_21160);
(statearr_21208[(11)] = inst_21157);
(statearr_21208[(12)] = inst_21158);
return statearr_21208;
})();var statearr_21209_21249 = state_21205__$1;(statearr_21209_21249[(2)] = null);
(statearr_21209_21249[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (1)))
{var state_21205__$1 = state_21205;var statearr_21210_21250 = state_21205__$1;(statearr_21210_21250[(2)] = null);
(statearr_21210_21250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (4)))
{var inst_21146 = (state_21205[(13)]);var inst_21146__$1 = (state_21205[(2)]);var inst_21147 = (inst_21146__$1 == null);var state_21205__$1 = (function (){var statearr_21211 = state_21205;(statearr_21211[(13)] = inst_21146__$1);
return statearr_21211;
})();if(cljs.core.truth_(inst_21147))
{var statearr_21212_21251 = state_21205__$1;(statearr_21212_21251[(1)] = (5));
} else
{var statearr_21213_21252 = state_21205__$1;(statearr_21213_21252[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (15)))
{var state_21205__$1 = state_21205;var statearr_21217_21253 = state_21205__$1;(statearr_21217_21253[(2)] = null);
(statearr_21217_21253[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (21)))
{var state_21205__$1 = state_21205;var statearr_21218_21254 = state_21205__$1;(statearr_21218_21254[(2)] = null);
(statearr_21218_21254[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (13)))
{var inst_21159 = (state_21205[(8)]);var inst_21160 = (state_21205[(10)]);var inst_21157 = (state_21205[(11)]);var inst_21158 = (state_21205[(12)]);var inst_21167 = (state_21205[(2)]);var inst_21168 = (inst_21160 + (1));var tmp21214 = inst_21159;var tmp21215 = inst_21157;var tmp21216 = inst_21158;var inst_21157__$1 = tmp21215;var inst_21158__$1 = tmp21216;var inst_21159__$1 = tmp21214;var inst_21160__$1 = inst_21168;var state_21205__$1 = (function (){var statearr_21219 = state_21205;(statearr_21219[(8)] = inst_21159__$1);
(statearr_21219[(14)] = inst_21167);
(statearr_21219[(10)] = inst_21160__$1);
(statearr_21219[(11)] = inst_21157__$1);
(statearr_21219[(12)] = inst_21158__$1);
return statearr_21219;
})();var statearr_21220_21255 = state_21205__$1;(statearr_21220_21255[(2)] = null);
(statearr_21220_21255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (22)))
{var state_21205__$1 = state_21205;var statearr_21221_21256 = state_21205__$1;(statearr_21221_21256[(2)] = null);
(statearr_21221_21256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (6)))
{var inst_21146 = (state_21205[(13)]);var inst_21155 = f.call(null,inst_21146);var inst_21156 = cljs.core.seq.call(null,inst_21155);var inst_21157 = inst_21156;var inst_21158 = null;var inst_21159 = (0);var inst_21160 = (0);var state_21205__$1 = (function (){var statearr_21222 = state_21205;(statearr_21222[(8)] = inst_21159);
(statearr_21222[(10)] = inst_21160);
(statearr_21222[(11)] = inst_21157);
(statearr_21222[(12)] = inst_21158);
return statearr_21222;
})();var statearr_21223_21257 = state_21205__$1;(statearr_21223_21257[(2)] = null);
(statearr_21223_21257[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (17)))
{var inst_21171 = (state_21205[(7)]);var inst_21175 = cljs.core.chunk_first.call(null,inst_21171);var inst_21176 = cljs.core.chunk_rest.call(null,inst_21171);var inst_21177 = cljs.core.count.call(null,inst_21175);var inst_21157 = inst_21176;var inst_21158 = inst_21175;var inst_21159 = inst_21177;var inst_21160 = (0);var state_21205__$1 = (function (){var statearr_21224 = state_21205;(statearr_21224[(8)] = inst_21159);
(statearr_21224[(10)] = inst_21160);
(statearr_21224[(11)] = inst_21157);
(statearr_21224[(12)] = inst_21158);
return statearr_21224;
})();var statearr_21225_21258 = state_21205__$1;(statearr_21225_21258[(2)] = null);
(statearr_21225_21258[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (3)))
{var inst_21203 = (state_21205[(2)]);var state_21205__$1 = state_21205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21205__$1,inst_21203);
} else
{if((state_val_21206 === (12)))
{var inst_21191 = (state_21205[(2)]);var state_21205__$1 = state_21205;var statearr_21226_21259 = state_21205__$1;(statearr_21226_21259[(2)] = inst_21191);
(statearr_21226_21259[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (2)))
{var state_21205__$1 = state_21205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21205__$1,(4),in$);
} else
{if((state_val_21206 === (23)))
{var inst_21199 = (state_21205[(2)]);var state_21205__$1 = state_21205;var statearr_21227_21260 = state_21205__$1;(statearr_21227_21260[(2)] = inst_21199);
(statearr_21227_21260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (19)))
{var inst_21186 = (state_21205[(2)]);var state_21205__$1 = state_21205;var statearr_21228_21261 = state_21205__$1;(statearr_21228_21261[(2)] = inst_21186);
(statearr_21228_21261[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (11)))
{var inst_21157 = (state_21205[(11)]);var inst_21171 = (state_21205[(7)]);var inst_21171__$1 = cljs.core.seq.call(null,inst_21157);var state_21205__$1 = (function (){var statearr_21229 = state_21205;(statearr_21229[(7)] = inst_21171__$1);
return statearr_21229;
})();if(inst_21171__$1)
{var statearr_21230_21262 = state_21205__$1;(statearr_21230_21262[(1)] = (14));
} else
{var statearr_21231_21263 = state_21205__$1;(statearr_21231_21263[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (9)))
{var inst_21193 = (state_21205[(2)]);var inst_21194 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21205__$1 = (function (){var statearr_21232 = state_21205;(statearr_21232[(15)] = inst_21193);
return statearr_21232;
})();if(cljs.core.truth_(inst_21194))
{var statearr_21233_21264 = state_21205__$1;(statearr_21233_21264[(1)] = (21));
} else
{var statearr_21234_21265 = state_21205__$1;(statearr_21234_21265[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (5)))
{var inst_21149 = cljs.core.async.close_BANG_.call(null,out);var state_21205__$1 = state_21205;var statearr_21235_21266 = state_21205__$1;(statearr_21235_21266[(2)] = inst_21149);
(statearr_21235_21266[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (14)))
{var inst_21171 = (state_21205[(7)]);var inst_21173 = cljs.core.chunked_seq_QMARK_.call(null,inst_21171);var state_21205__$1 = state_21205;if(inst_21173)
{var statearr_21236_21267 = state_21205__$1;(statearr_21236_21267[(1)] = (17));
} else
{var statearr_21237_21268 = state_21205__$1;(statearr_21237_21268[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (16)))
{var inst_21189 = (state_21205[(2)]);var state_21205__$1 = state_21205;var statearr_21238_21269 = state_21205__$1;(statearr_21238_21269[(2)] = inst_21189);
(statearr_21238_21269[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21206 === (10)))
{var inst_21160 = (state_21205[(10)]);var inst_21158 = (state_21205[(12)]);var inst_21165 = cljs.core._nth.call(null,inst_21158,inst_21160);var state_21205__$1 = state_21205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21205__$1,(13),out,inst_21165);
} else
{if((state_val_21206 === (18)))
{var inst_21171 = (state_21205[(7)]);var inst_21180 = cljs.core.first.call(null,inst_21171);var state_21205__$1 = state_21205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21205__$1,(20),out,inst_21180);
} else
{if((state_val_21206 === (8)))
{var inst_21159 = (state_21205[(8)]);var inst_21160 = (state_21205[(10)]);var inst_21162 = (inst_21160 < inst_21159);var inst_21163 = inst_21162;var state_21205__$1 = state_21205;if(cljs.core.truth_(inst_21163))
{var statearr_21239_21270 = state_21205__$1;(statearr_21239_21270[(1)] = (10));
} else
{var statearr_21240_21271 = state_21205__$1;(statearr_21240_21271[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto__))
;return ((function (switch__13924__auto__,c__13980__auto__){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_21244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21244[(0)] = state_machine__13925__auto__);
(statearr_21244[(1)] = (1));
return statearr_21244;
});
var state_machine__13925__auto____1 = (function (state_21205){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_21205);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e21245){if((e21245 instanceof Object))
{var ex__13928__auto__ = e21245;var statearr_21246_21272 = state_21205;(statearr_21246_21272[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21245;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21273 = state_21205;
state_21205 = G__21273;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_21205){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_21205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__))
})();var state__13982__auto__ = (function (){var statearr_21247 = f__13981__auto__.call(null);(statearr_21247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_21247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__))
);
return c__13980__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___21370 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___21370,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___21370,out){
return (function (state_21345){var state_val_21346 = (state_21345[(1)]);if((state_val_21346 === (7)))
{var inst_21340 = (state_21345[(2)]);var state_21345__$1 = state_21345;var statearr_21347_21371 = state_21345__$1;(statearr_21347_21371[(2)] = inst_21340);
(statearr_21347_21371[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (1)))
{var inst_21322 = null;var state_21345__$1 = (function (){var statearr_21348 = state_21345;(statearr_21348[(7)] = inst_21322);
return statearr_21348;
})();var statearr_21349_21372 = state_21345__$1;(statearr_21349_21372[(2)] = null);
(statearr_21349_21372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (4)))
{var inst_21325 = (state_21345[(8)]);var inst_21325__$1 = (state_21345[(2)]);var inst_21326 = (inst_21325__$1 == null);var inst_21327 = cljs.core.not.call(null,inst_21326);var state_21345__$1 = (function (){var statearr_21350 = state_21345;(statearr_21350[(8)] = inst_21325__$1);
return statearr_21350;
})();if(inst_21327)
{var statearr_21351_21373 = state_21345__$1;(statearr_21351_21373[(1)] = (5));
} else
{var statearr_21352_21374 = state_21345__$1;(statearr_21352_21374[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (6)))
{var state_21345__$1 = state_21345;var statearr_21353_21375 = state_21345__$1;(statearr_21353_21375[(2)] = null);
(statearr_21353_21375[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (3)))
{var inst_21342 = (state_21345[(2)]);var inst_21343 = cljs.core.async.close_BANG_.call(null,out);var state_21345__$1 = (function (){var statearr_21354 = state_21345;(statearr_21354[(9)] = inst_21342);
return statearr_21354;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21345__$1,inst_21343);
} else
{if((state_val_21346 === (2)))
{var state_21345__$1 = state_21345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21345__$1,(4),ch);
} else
{if((state_val_21346 === (11)))
{var inst_21325 = (state_21345[(8)]);var inst_21334 = (state_21345[(2)]);var inst_21322 = inst_21325;var state_21345__$1 = (function (){var statearr_21355 = state_21345;(statearr_21355[(7)] = inst_21322);
(statearr_21355[(10)] = inst_21334);
return statearr_21355;
})();var statearr_21356_21376 = state_21345__$1;(statearr_21356_21376[(2)] = null);
(statearr_21356_21376[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (9)))
{var inst_21325 = (state_21345[(8)]);var state_21345__$1 = state_21345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21345__$1,(11),out,inst_21325);
} else
{if((state_val_21346 === (5)))
{var inst_21322 = (state_21345[(7)]);var inst_21325 = (state_21345[(8)]);var inst_21329 = cljs.core._EQ_.call(null,inst_21325,inst_21322);var state_21345__$1 = state_21345;if(inst_21329)
{var statearr_21358_21377 = state_21345__$1;(statearr_21358_21377[(1)] = (8));
} else
{var statearr_21359_21378 = state_21345__$1;(statearr_21359_21378[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (10)))
{var inst_21337 = (state_21345[(2)]);var state_21345__$1 = state_21345;var statearr_21360_21379 = state_21345__$1;(statearr_21360_21379[(2)] = inst_21337);
(statearr_21360_21379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21346 === (8)))
{var inst_21322 = (state_21345[(7)]);var tmp21357 = inst_21322;var inst_21322__$1 = tmp21357;var state_21345__$1 = (function (){var statearr_21361 = state_21345;(statearr_21361[(7)] = inst_21322__$1);
return statearr_21361;
})();var statearr_21362_21380 = state_21345__$1;(statearr_21362_21380[(2)] = null);
(statearr_21362_21380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___21370,out))
;return ((function (switch__13924__auto__,c__13980__auto___21370,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_21366 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21366[(0)] = state_machine__13925__auto__);
(statearr_21366[(1)] = (1));
return statearr_21366;
});
var state_machine__13925__auto____1 = (function (state_21345){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_21345);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e21367){if((e21367 instanceof Object))
{var ex__13928__auto__ = e21367;var statearr_21368_21381 = state_21345;(statearr_21368_21381[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21367;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21382 = state_21345;
state_21345 = G__21382;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_21345){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_21345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___21370,out))
})();var state__13982__auto__ = (function (){var statearr_21369 = f__13981__auto__.call(null);(statearr_21369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___21370);
return statearr_21369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___21370,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___21517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___21517,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___21517,out){
return (function (state_21487){var state_val_21488 = (state_21487[(1)]);if((state_val_21488 === (7)))
{var inst_21483 = (state_21487[(2)]);var state_21487__$1 = state_21487;var statearr_21489_21518 = state_21487__$1;(statearr_21489_21518[(2)] = inst_21483);
(statearr_21489_21518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (1)))
{var inst_21450 = (new Array(n));var inst_21451 = inst_21450;var inst_21452 = (0);var state_21487__$1 = (function (){var statearr_21490 = state_21487;(statearr_21490[(7)] = inst_21451);
(statearr_21490[(8)] = inst_21452);
return statearr_21490;
})();var statearr_21491_21519 = state_21487__$1;(statearr_21491_21519[(2)] = null);
(statearr_21491_21519[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (4)))
{var inst_21455 = (state_21487[(9)]);var inst_21455__$1 = (state_21487[(2)]);var inst_21456 = (inst_21455__$1 == null);var inst_21457 = cljs.core.not.call(null,inst_21456);var state_21487__$1 = (function (){var statearr_21492 = state_21487;(statearr_21492[(9)] = inst_21455__$1);
return statearr_21492;
})();if(inst_21457)
{var statearr_21493_21520 = state_21487__$1;(statearr_21493_21520[(1)] = (5));
} else
{var statearr_21494_21521 = state_21487__$1;(statearr_21494_21521[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (15)))
{var inst_21477 = (state_21487[(2)]);var state_21487__$1 = state_21487;var statearr_21495_21522 = state_21487__$1;(statearr_21495_21522[(2)] = inst_21477);
(statearr_21495_21522[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (13)))
{var state_21487__$1 = state_21487;var statearr_21496_21523 = state_21487__$1;(statearr_21496_21523[(2)] = null);
(statearr_21496_21523[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (6)))
{var inst_21452 = (state_21487[(8)]);var inst_21473 = (inst_21452 > (0));var state_21487__$1 = state_21487;if(cljs.core.truth_(inst_21473))
{var statearr_21497_21524 = state_21487__$1;(statearr_21497_21524[(1)] = (12));
} else
{var statearr_21498_21525 = state_21487__$1;(statearr_21498_21525[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (3)))
{var inst_21485 = (state_21487[(2)]);var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21487__$1,inst_21485);
} else
{if((state_val_21488 === (12)))
{var inst_21451 = (state_21487[(7)]);var inst_21475 = cljs.core.vec.call(null,inst_21451);var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21487__$1,(15),out,inst_21475);
} else
{if((state_val_21488 === (2)))
{var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21487__$1,(4),ch);
} else
{if((state_val_21488 === (11)))
{var inst_21467 = (state_21487[(2)]);var inst_21468 = (new Array(n));var inst_21451 = inst_21468;var inst_21452 = (0);var state_21487__$1 = (function (){var statearr_21499 = state_21487;(statearr_21499[(10)] = inst_21467);
(statearr_21499[(7)] = inst_21451);
(statearr_21499[(8)] = inst_21452);
return statearr_21499;
})();var statearr_21500_21526 = state_21487__$1;(statearr_21500_21526[(2)] = null);
(statearr_21500_21526[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (9)))
{var inst_21451 = (state_21487[(7)]);var inst_21465 = cljs.core.vec.call(null,inst_21451);var state_21487__$1 = state_21487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21487__$1,(11),out,inst_21465);
} else
{if((state_val_21488 === (5)))
{var inst_21460 = (state_21487[(11)]);var inst_21455 = (state_21487[(9)]);var inst_21451 = (state_21487[(7)]);var inst_21452 = (state_21487[(8)]);var inst_21459 = (inst_21451[inst_21452] = inst_21455);var inst_21460__$1 = (inst_21452 + (1));var inst_21461 = (inst_21460__$1 < n);var state_21487__$1 = (function (){var statearr_21501 = state_21487;(statearr_21501[(11)] = inst_21460__$1);
(statearr_21501[(12)] = inst_21459);
return statearr_21501;
})();if(cljs.core.truth_(inst_21461))
{var statearr_21502_21527 = state_21487__$1;(statearr_21502_21527[(1)] = (8));
} else
{var statearr_21503_21528 = state_21487__$1;(statearr_21503_21528[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (14)))
{var inst_21480 = (state_21487[(2)]);var inst_21481 = cljs.core.async.close_BANG_.call(null,out);var state_21487__$1 = (function (){var statearr_21505 = state_21487;(statearr_21505[(13)] = inst_21480);
return statearr_21505;
})();var statearr_21506_21529 = state_21487__$1;(statearr_21506_21529[(2)] = inst_21481);
(statearr_21506_21529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (10)))
{var inst_21471 = (state_21487[(2)]);var state_21487__$1 = state_21487;var statearr_21507_21530 = state_21487__$1;(statearr_21507_21530[(2)] = inst_21471);
(statearr_21507_21530[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21488 === (8)))
{var inst_21460 = (state_21487[(11)]);var inst_21451 = (state_21487[(7)]);var tmp21504 = inst_21451;var inst_21451__$1 = tmp21504;var inst_21452 = inst_21460;var state_21487__$1 = (function (){var statearr_21508 = state_21487;(statearr_21508[(7)] = inst_21451__$1);
(statearr_21508[(8)] = inst_21452);
return statearr_21508;
})();var statearr_21509_21531 = state_21487__$1;(statearr_21509_21531[(2)] = null);
(statearr_21509_21531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___21517,out))
;return ((function (switch__13924__auto__,c__13980__auto___21517,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_21513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21513[(0)] = state_machine__13925__auto__);
(statearr_21513[(1)] = (1));
return statearr_21513;
});
var state_machine__13925__auto____1 = (function (state_21487){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_21487);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e21514){if((e21514 instanceof Object))
{var ex__13928__auto__ = e21514;var statearr_21515_21532 = state_21487;(statearr_21515_21532[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21487);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21514;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21533 = state_21487;
state_21487 = G__21533;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_21487){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_21487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___21517,out))
})();var state__13982__auto__ = (function (){var statearr_21516 = f__13981__auto__.call(null);(statearr_21516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___21517);
return statearr_21516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___21517,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13980__auto___21676 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto___21676,out){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto___21676,out){
return (function (state_21646){var state_val_21647 = (state_21646[(1)]);if((state_val_21647 === (7)))
{var inst_21642 = (state_21646[(2)]);var state_21646__$1 = state_21646;var statearr_21648_21677 = state_21646__$1;(statearr_21648_21677[(2)] = inst_21642);
(statearr_21648_21677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (1)))
{var inst_21605 = [];var inst_21606 = inst_21605;var inst_21607 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21646__$1 = (function (){var statearr_21649 = state_21646;(statearr_21649[(7)] = inst_21607);
(statearr_21649[(8)] = inst_21606);
return statearr_21649;
})();var statearr_21650_21678 = state_21646__$1;(statearr_21650_21678[(2)] = null);
(statearr_21650_21678[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (4)))
{var inst_21610 = (state_21646[(9)]);var inst_21610__$1 = (state_21646[(2)]);var inst_21611 = (inst_21610__$1 == null);var inst_21612 = cljs.core.not.call(null,inst_21611);var state_21646__$1 = (function (){var statearr_21651 = state_21646;(statearr_21651[(9)] = inst_21610__$1);
return statearr_21651;
})();if(inst_21612)
{var statearr_21652_21679 = state_21646__$1;(statearr_21652_21679[(1)] = (5));
} else
{var statearr_21653_21680 = state_21646__$1;(statearr_21653_21680[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (15)))
{var inst_21636 = (state_21646[(2)]);var state_21646__$1 = state_21646;var statearr_21654_21681 = state_21646__$1;(statearr_21654_21681[(2)] = inst_21636);
(statearr_21654_21681[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (13)))
{var state_21646__$1 = state_21646;var statearr_21655_21682 = state_21646__$1;(statearr_21655_21682[(2)] = null);
(statearr_21655_21682[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (6)))
{var inst_21606 = (state_21646[(8)]);var inst_21631 = inst_21606.length;var inst_21632 = (inst_21631 > (0));var state_21646__$1 = state_21646;if(cljs.core.truth_(inst_21632))
{var statearr_21656_21683 = state_21646__$1;(statearr_21656_21683[(1)] = (12));
} else
{var statearr_21657_21684 = state_21646__$1;(statearr_21657_21684[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (3)))
{var inst_21644 = (state_21646[(2)]);var state_21646__$1 = state_21646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21646__$1,inst_21644);
} else
{if((state_val_21647 === (12)))
{var inst_21606 = (state_21646[(8)]);var inst_21634 = cljs.core.vec.call(null,inst_21606);var state_21646__$1 = state_21646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21646__$1,(15),out,inst_21634);
} else
{if((state_val_21647 === (2)))
{var state_21646__$1 = state_21646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21646__$1,(4),ch);
} else
{if((state_val_21647 === (11)))
{var inst_21610 = (state_21646[(9)]);var inst_21614 = (state_21646[(10)]);var inst_21624 = (state_21646[(2)]);var inst_21625 = [];var inst_21626 = inst_21625.push(inst_21610);var inst_21606 = inst_21625;var inst_21607 = inst_21614;var state_21646__$1 = (function (){var statearr_21658 = state_21646;(statearr_21658[(7)] = inst_21607);
(statearr_21658[(8)] = inst_21606);
(statearr_21658[(11)] = inst_21624);
(statearr_21658[(12)] = inst_21626);
return statearr_21658;
})();var statearr_21659_21685 = state_21646__$1;(statearr_21659_21685[(2)] = null);
(statearr_21659_21685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (9)))
{var inst_21606 = (state_21646[(8)]);var inst_21622 = cljs.core.vec.call(null,inst_21606);var state_21646__$1 = state_21646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21646__$1,(11),out,inst_21622);
} else
{if((state_val_21647 === (5)))
{var inst_21607 = (state_21646[(7)]);var inst_21610 = (state_21646[(9)]);var inst_21614 = (state_21646[(10)]);var inst_21614__$1 = f.call(null,inst_21610);var inst_21615 = cljs.core._EQ_.call(null,inst_21614__$1,inst_21607);var inst_21616 = cljs.core.keyword_identical_QMARK_.call(null,inst_21607,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21617 = (inst_21615) || (inst_21616);var state_21646__$1 = (function (){var statearr_21660 = state_21646;(statearr_21660[(10)] = inst_21614__$1);
return statearr_21660;
})();if(cljs.core.truth_(inst_21617))
{var statearr_21661_21686 = state_21646__$1;(statearr_21661_21686[(1)] = (8));
} else
{var statearr_21662_21687 = state_21646__$1;(statearr_21662_21687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (14)))
{var inst_21639 = (state_21646[(2)]);var inst_21640 = cljs.core.async.close_BANG_.call(null,out);var state_21646__$1 = (function (){var statearr_21664 = state_21646;(statearr_21664[(13)] = inst_21639);
return statearr_21664;
})();var statearr_21665_21688 = state_21646__$1;(statearr_21665_21688[(2)] = inst_21640);
(statearr_21665_21688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (10)))
{var inst_21629 = (state_21646[(2)]);var state_21646__$1 = state_21646;var statearr_21666_21689 = state_21646__$1;(statearr_21666_21689[(2)] = inst_21629);
(statearr_21666_21689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21647 === (8)))
{var inst_21606 = (state_21646[(8)]);var inst_21610 = (state_21646[(9)]);var inst_21614 = (state_21646[(10)]);var inst_21619 = inst_21606.push(inst_21610);var tmp21663 = inst_21606;var inst_21606__$1 = tmp21663;var inst_21607 = inst_21614;var state_21646__$1 = (function (){var statearr_21667 = state_21646;(statearr_21667[(7)] = inst_21607);
(statearr_21667[(8)] = inst_21606__$1);
(statearr_21667[(14)] = inst_21619);
return statearr_21667;
})();var statearr_21668_21690 = state_21646__$1;(statearr_21668_21690[(2)] = null);
(statearr_21668_21690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__13980__auto___21676,out))
;return ((function (switch__13924__auto__,c__13980__auto___21676,out){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_21672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21672[(0)] = state_machine__13925__auto__);
(statearr_21672[(1)] = (1));
return statearr_21672;
});
var state_machine__13925__auto____1 = (function (state_21646){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_21646);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e21673){if((e21673 instanceof Object))
{var ex__13928__auto__ = e21673;var statearr_21674_21691 = state_21646;(statearr_21674_21691[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21646);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21673;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21692 = state_21646;
state_21646 = G__21692;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_21646){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_21646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto___21676,out))
})();var state__13982__auto__ = (function (){var statearr_21675 = f__13981__auto__.call(null);(statearr_21675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto___21676);
return statearr_21675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto___21676,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map