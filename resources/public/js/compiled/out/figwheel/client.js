// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__18218,args){var map__18220 = p__18218;var map__18220__$1 = ((cljs.core.seq_QMARK_.call(null,map__18220))?cljs.core.apply.call(null,cljs.core.hash_map,map__18220):map__18220);var debug = cljs.core.get.call(null,map__18220__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__18218,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__18218,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__18221){
var p__18218 = cljs.core.first(arglist__18221);
var args = cljs.core.rest(arglist__18221);
return log__delegate(p__18218,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__18222){var map__18224 = p__18222;var map__18224__$1 = ((cljs.core.seq_QMARK_.call(null,map__18224))?cljs.core.apply.call(null,cljs.core.hash_map,map__18224):map__18224);var websocket_url = cljs.core.get.call(null,map__18224__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__18225,callback){var map__18227 = p__18225;var map__18227__$1 = ((cljs.core.seq_QMARK_.call(null,map__18227))?cljs.core.apply.call(null,cljs.core.hash_map,map__18227):map__18227);var msg = map__18227__$1;var dependency_file = cljs.core.get.call(null,map__18227__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__18227__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__18227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11529__auto__ = dependency_file;if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__18227,map__18227__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__18227,map__18227__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__18228,p__18229){var map__18232 = p__18228;var map__18232__$1 = ((cljs.core.seq_QMARK_.call(null,map__18232))?cljs.core.apply.call(null,cljs.core.hash_map,map__18232):map__18232);var opts = map__18232__$1;var url_rewriter = cljs.core.get.call(null,map__18232__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__18233 = p__18229;var map__18233__$1 = ((cljs.core.seq_QMARK_.call(null,map__18233))?cljs.core.apply.call(null,cljs.core.hash_map,map__18233):map__18233);var d = map__18233__$1;var file = cljs.core.get.call(null,map__18233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__18234,p__18235){var map__18277 = p__18234;var map__18277__$1 = ((cljs.core.seq_QMARK_.call(null,map__18277))?cljs.core.apply.call(null,cljs.core.hash_map,map__18277):map__18277);var opts = map__18277__$1;var on_jsload = cljs.core.get.call(null,map__18277__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__18277__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__18278 = p__18235;var map__18278__$1 = ((cljs.core.seq_QMARK_.call(null,map__18278))?cljs.core.apply.call(null,cljs.core.hash_map,map__18278):map__18278);var files = cljs.core.get.call(null,map__18278__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files){
return (function (state_18301){var state_val_18302 = (state_18301[(1)]);if((state_val_18302 === (6)))
{var inst_18283 = (state_18301[(7)]);var inst_18292 = (state_18301[(2)]);var inst_18293 = cljs.core.PersistentVector.EMPTY_NODE;var inst_18294 = [inst_18283];var inst_18295 = (new cljs.core.PersistentVector(null,1,(5),inst_18293,inst_18294,null));var inst_18296 = cljs.core.apply.call(null,on_jsload,inst_18295);var state_18301__$1 = (function (){var statearr_18303 = state_18301;(statearr_18303[(8)] = inst_18292);
return statearr_18303;
})();var statearr_18304_18318 = state_18301__$1;(statearr_18304_18318[(2)] = inst_18296);
(statearr_18304_18318[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18302 === (5)))
{var inst_18299 = (state_18301[(2)]);var state_18301__$1 = state_18301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18301__$1,inst_18299);
} else
{if((state_val_18302 === (4)))
{var state_18301__$1 = state_18301;var statearr_18305_18319 = state_18301__$1;(statearr_18305_18319[(2)] = null);
(statearr_18305_18319[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18302 === (3)))
{var inst_18283 = (state_18301[(7)]);var inst_18286 = console.debug("Figwheel: loaded these files");var inst_18287 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18283);var inst_18288 = cljs.core.prn_str.call(null,inst_18287);var inst_18289 = console.log(inst_18288);var inst_18290 = cljs.core.async.timeout.call(null,(10));var state_18301__$1 = (function (){var statearr_18306 = state_18301;(statearr_18306[(9)] = inst_18286);
(statearr_18306[(10)] = inst_18289);
return statearr_18306;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18301__$1,(6),inst_18290);
} else
{if((state_val_18302 === (2)))
{var inst_18283 = (state_18301[(7)]);var inst_18283__$1 = (state_18301[(2)]);var inst_18284 = cljs.core.not_empty.call(null,inst_18283__$1);var state_18301__$1 = (function (){var statearr_18307 = state_18301;(statearr_18307[(7)] = inst_18283__$1);
return statearr_18307;
})();if(cljs.core.truth_(inst_18284))
{var statearr_18308_18320 = state_18301__$1;(statearr_18308_18320[(1)] = (3));
} else
{var statearr_18309_18321 = state_18301__$1;(statearr_18309_18321[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18302 === (1)))
{var inst_18279 = before_jsload.call(null,files);var inst_18280 = figwheel.client.add_request_urls.call(null,opts,files);var inst_18281 = figwheel.client.load_all_js_files.call(null,inst_18280);var state_18301__$1 = (function (){var statearr_18310 = state_18301;(statearr_18310[(11)] = inst_18279);
return statearr_18310;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18301__$1,(2),inst_18281);
} else
{return null;
}
}
}
}
}
}
});})(c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files))
;return ((function (switch__13924__auto__,c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18314[(0)] = state_machine__13925__auto__);
(statearr_18314[(1)] = (1));
return statearr_18314;
});
var state_machine__13925__auto____1 = (function (state_18301){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18301);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object))
{var ex__13928__auto__ = e18315;var statearr_18316_18322 = state_18301;(statearr_18316_18322[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18315;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18323 = state_18301;
state_18301 = G__18323;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18301){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files))
})();var state__13982__auto__ = (function (){var statearr_18317 = f__13981__auto__.call(null);(statearr_18317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_18317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__,map__18277,map__18277__$1,opts,on_jsload,before_jsload,map__18278,map__18278__$1,files))
);
return c__13980__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__18324,link_href){var map__18326 = p__18324;var map__18326__$1 = ((cljs.core.seq_QMARK_.call(null,map__18326))?cljs.core.apply.call(null,cljs.core.hash_map,map__18326):map__18326);var request_url = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__,parent){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__,parent){
return (function (state_18347){var state_val_18348 = (state_18347[(1)]);if((state_val_18348 === (2)))
{var inst_18344 = (state_18347[(2)]);var inst_18345 = parent.removeChild(orig_link);var state_18347__$1 = (function (){var statearr_18349 = state_18347;(statearr_18349[(7)] = inst_18344);
return statearr_18349;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18347__$1,inst_18345);
} else
{if((state_val_18348 === (1)))
{var inst_18342 = cljs.core.async.timeout.call(null,(200));var state_18347__$1 = state_18347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18347__$1,(2),inst_18342);
} else
{return null;
}
}
});})(c__13980__auto__,parent))
;return ((function (switch__13924__auto__,c__13980__auto__,parent){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18353 = [null,null,null,null,null,null,null,null];(statearr_18353[(0)] = state_machine__13925__auto__);
(statearr_18353[(1)] = (1));
return statearr_18353;
});
var state_machine__13925__auto____1 = (function (state_18347){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18347);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object))
{var ex__13928__auto__ = e18354;var statearr_18355_18357 = state_18347;(statearr_18355_18357[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18358 = state_18347;
state_18347 = G__18358;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18347){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__,parent))
})();var state__13982__auto__ = (function (){var statearr_18356 = f__13981__auto__.call(null);(statearr_18356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_18356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__,parent))
);
return c__13980__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__18359){var map__18361 = p__18359;var map__18361__$1 = ((cljs.core.seq_QMARK_.call(null,map__18361))?cljs.core.apply.call(null,cljs.core.hash_map,map__18361):map__18361);var f_data = map__18361__$1;var request_url = cljs.core.get.call(null,map__18361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__18361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__18362,files_msg){var map__18384 = p__18362;var map__18384__$1 = ((cljs.core.seq_QMARK_.call(null,map__18384))?cljs.core.apply.call(null,cljs.core.hash_map,map__18384):map__18384);var opts = map__18384__$1;var on_cssload = cljs.core.get.call(null,map__18384__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__18385_18405 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__18386_18406 = null;var count__18387_18407 = (0);var i__18388_18408 = (0);while(true){
if((i__18388_18408 < count__18387_18407))
{var f_18409 = cljs.core._nth.call(null,chunk__18386_18406,i__18388_18408);figwheel.client.reload_css_file.call(null,f_18409);
{
var G__18410 = seq__18385_18405;
var G__18411 = chunk__18386_18406;
var G__18412 = count__18387_18407;
var G__18413 = (i__18388_18408 + (1));
seq__18385_18405 = G__18410;
chunk__18386_18406 = G__18411;
count__18387_18407 = G__18412;
i__18388_18408 = G__18413;
continue;
}
} else
{var temp__4126__auto___18414 = cljs.core.seq.call(null,seq__18385_18405);if(temp__4126__auto___18414)
{var seq__18385_18415__$1 = temp__4126__auto___18414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18385_18415__$1))
{var c__12299__auto___18416 = cljs.core.chunk_first.call(null,seq__18385_18415__$1);{
var G__18417 = cljs.core.chunk_rest.call(null,seq__18385_18415__$1);
var G__18418 = c__12299__auto___18416;
var G__18419 = cljs.core.count.call(null,c__12299__auto___18416);
var G__18420 = (0);
seq__18385_18405 = G__18417;
chunk__18386_18406 = G__18418;
count__18387_18407 = G__18419;
i__18388_18408 = G__18420;
continue;
}
} else
{var f_18421 = cljs.core.first.call(null,seq__18385_18415__$1);figwheel.client.reload_css_file.call(null,f_18421);
{
var G__18422 = cljs.core.next.call(null,seq__18385_18415__$1);
var G__18423 = null;
var G__18424 = (0);
var G__18425 = (0);
seq__18385_18405 = G__18422;
chunk__18386_18406 = G__18423;
count__18387_18407 = G__18424;
i__18388_18408 = G__18425;
continue;
}
}
} else
{}
}
break;
}
var c__13980__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload){
return (function (){var f__13981__auto__ = (function (){var switch__13924__auto__ = ((function (c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload){
return (function (state_18395){var state_val_18396 = (state_18395[(1)]);if((state_val_18396 === (2)))
{var inst_18391 = (state_18395[(2)]);var inst_18392 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_18393 = on_cssload.call(null,inst_18392);var state_18395__$1 = (function (){var statearr_18397 = state_18395;(statearr_18397[(7)] = inst_18391);
return statearr_18397;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18395__$1,inst_18393);
} else
{if((state_val_18396 === (1)))
{var inst_18389 = cljs.core.async.timeout.call(null,(100));var state_18395__$1 = state_18395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18395__$1,(2),inst_18389);
} else
{return null;
}
}
});})(c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload))
;return ((function (switch__13924__auto__,c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload){
return (function() {
var state_machine__13925__auto__ = null;
var state_machine__13925__auto____0 = (function (){var statearr_18401 = [null,null,null,null,null,null,null,null];(statearr_18401[(0)] = state_machine__13925__auto__);
(statearr_18401[(1)] = (1));
return statearr_18401;
});
var state_machine__13925__auto____1 = (function (state_18395){while(true){
var ret_value__13926__auto__ = (function (){try{while(true){
var result__13927__auto__ = switch__13924__auto__.call(null,state_18395);if(cljs.core.keyword_identical_QMARK_.call(null,result__13927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13927__auto__;
}
break;
}
}catch (e18402){if((e18402 instanceof Object))
{var ex__13928__auto__ = e18402;var statearr_18403_18426 = state_18395;(statearr_18403_18426[(5)] = ex__13928__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18395);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18402;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18427 = state_18395;
state_18395 = G__18427;
continue;
}
} else
{return ret_value__13926__auto__;
}
break;
}
});
state_machine__13925__auto__ = function(state_18395){
switch(arguments.length){
case 0:
return state_machine__13925__auto____0.call(this);
case 1:
return state_machine__13925__auto____1.call(this,state_18395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13925__auto____0;
state_machine__13925__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13925__auto____1;
return state_machine__13925__auto__;
})()
;})(switch__13924__auto__,c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload))
})();var state__13982__auto__ = (function (){var statearr_18404 = f__13981__auto__.call(null);(statearr_18404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13980__auto__);
return statearr_18404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13982__auto__);
});})(c__13980__auto__,map__18384,map__18384__$1,opts,on_cssload))
);
return c__13980__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.have_websockets_QMARK_ = (function have_websockets_QMARK_(){return ("WebSocket" in window);
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__18428){var map__18433 = p__18428;var map__18433__$1 = ((cljs.core.seq_QMARK_.call(null,map__18433))?cljs.core.apply.call(null,cljs.core.hash_map,map__18433):map__18433);var opts = map__18433__$1;var on_compile_fail = cljs.core.get.call(null,map__18433__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__18433__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__18433__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__18433__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));if(cljs.core.not.call(null,figwheel.client.have_websockets_QMARK_.call(null)))
{return console.debug("Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets");
} else
{console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__18434 = cljs.core._EQ_;var expr__18435 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__18435)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__18435)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__18435)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__18433,map__18433__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
}
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj18440 = {"detail":url};return obj18440;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__18441){var map__18443 = p__18441;var map__18443__$1 = ((cljs.core.seq_QMARK_.call(null,map__18443))?cljs.core.apply.call(null,cljs.core.hash_map,map__18443):map__18443);var class$ = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__18443__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__18444){var map__18450 = p__18444;var map__18450__$1 = ((cljs.core.seq_QMARK_.call(null,map__18450))?cljs.core.apply.call(null,cljs.core.hash_map,map__18450):map__18450);var ed = map__18450__$1;var exception_data = cljs.core.get.call(null,map__18450__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__18450__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__18451_18455 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__18452_18456 = null;var count__18453_18457 = (0);var i__18454_18458 = (0);while(true){
if((i__18454_18458 < count__18453_18457))
{var msg_18459 = cljs.core._nth.call(null,chunk__18452_18456,i__18454_18458);console.log(msg_18459);
{
var G__18460 = seq__18451_18455;
var G__18461 = chunk__18452_18456;
var G__18462 = count__18453_18457;
var G__18463 = (i__18454_18458 + (1));
seq__18451_18455 = G__18460;
chunk__18452_18456 = G__18461;
count__18453_18457 = G__18462;
i__18454_18458 = G__18463;
continue;
}
} else
{var temp__4126__auto___18464 = cljs.core.seq.call(null,seq__18451_18455);if(temp__4126__auto___18464)
{var seq__18451_18465__$1 = temp__4126__auto___18464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18451_18465__$1))
{var c__12299__auto___18466 = cljs.core.chunk_first.call(null,seq__18451_18465__$1);{
var G__18467 = cljs.core.chunk_rest.call(null,seq__18451_18465__$1);
var G__18468 = c__12299__auto___18466;
var G__18469 = cljs.core.count.call(null,c__12299__auto___18466);
var G__18470 = (0);
seq__18451_18455 = G__18467;
chunk__18452_18456 = G__18468;
count__18453_18457 = G__18469;
i__18454_18458 = G__18470;
continue;
}
} else
{var msg_18471 = cljs.core.first.call(null,seq__18451_18465__$1);console.log(msg_18471);
{
var G__18472 = cljs.core.next.call(null,seq__18451_18465__$1);
var G__18473 = null;
var G__18474 = (0);
var G__18475 = (0);
seq__18451_18455 = G__18472;
chunk__18452_18456 = G__18473;
count__18453_18457 = G__18474;
i__18454_18458 = G__18475;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11529__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11529__auto__))
{return or__11529__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__18476){var map__18478 = p__18476;var map__18478__$1 = ((cljs.core.seq_QMARK_.call(null,map__18478))?cljs.core.apply.call(null,cljs.core.hash_map,map__18478):map__18478);var opts = map__18478__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__18476 = null;if (arguments.length > 0) {
  p__18476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__18476);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__18479){
var p__18476 = cljs.core.seq(arglist__18479);
return watch_and_reload__delegate(p__18476);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map