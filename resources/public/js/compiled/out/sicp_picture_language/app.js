// Compiled by ClojureScript 0.0-2371
goog.provide('sicp_picture_language.app');
goog.require('cljs.core');
goog.require('sicp_picture_language.core');
goog.require('sicp_picture_language.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
sicp_picture_language.app.svg_frame = sicp_picture_language.core.make_frame.call(null,sicp_picture_language.core.make_vect.call(null,(0),(0)),sicp_picture_language.core.make_vect.call(null,(800),(0)),sicp_picture_language.core.make_vect.call(null,(0),(600)));
sicp_picture_language.app.triangle_segments = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicp_picture_language.core.make_segment.call(null,sicp_picture_language.core.make_vect.call(null,(0),(0)),sicp_picture_language.core.make_vect.call(null,(1),(0))),sicp_picture_language.core.make_segment.call(null,sicp_picture_language.core.make_vect.call(null,(1),(0)),sicp_picture_language.core.make_vect.call(null,0.5,(1))),sicp_picture_language.core.make_segment.call(null,sicp_picture_language.core.make_vect.call(null,0.5,(1)),sicp_picture_language.core.make_vect.call(null,(0),(0)))], null);
if(typeof sicp_picture_language.app.scene !== 'undefined')
{} else
{sicp_picture_language.app.scene = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),sicp_picture_language.app.triangle_segments], null));
}
sicp_picture_language.app.segment_drawing = (function segment_drawing(segment,owner){if(typeof sicp_picture_language.app.t19179 !== 'undefined')
{} else
{
/**
* @constructor
*/
sicp_picture_language.app.t19179 = (function (owner,segment,segment_drawing,meta19180){
this.owner = owner;
this.segment = segment;
this.segment_drawing = segment_drawing;
this.meta19180 = meta19180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sicp_picture_language.app.t19179.cljs$lang$type = true;
sicp_picture_language.app.t19179.cljs$lang$ctorStr = "sicp-picture-language.app/t19179";
sicp_picture_language.app.t19179.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"sicp-picture-language.app/t19179");
});
sicp_picture_language.app.t19179.prototype.om$core$IRender$ = true;
sicp_picture_language.app.t19179.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var x1 = sicp_picture_language.core.xcor_vect.call(null,sicp_picture_language.core.start_segment.call(null,self__.segment));var y1 = sicp_picture_language.core.ycor_vect.call(null,sicp_picture_language.core.start_segment.call(null,self__.segment));var x2 = sicp_picture_language.core.xcor_vect.call(null,sicp_picture_language.core.end_segment.call(null,self__.segment));var y2 = sicp_picture_language.core.ycor_vect.call(null,sicp_picture_language.core.end_segment.call(null,self__.segment));var start = ("M "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1));var stop = ("L "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2));var drawing = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(stop));return React.DOM.path({"stroke": "black", "d": drawing},null);
});
sicp_picture_language.app.t19179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19181){var self__ = this;
var _19181__$1 = this;return self__.meta19180;
});
sicp_picture_language.app.t19179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19181,meta19180__$1){var self__ = this;
var _19181__$1 = this;return (new sicp_picture_language.app.t19179(self__.owner,self__.segment,self__.segment_drawing,meta19180__$1));
});
sicp_picture_language.app.__GT_t19179 = (function __GT_t19179(owner__$1,segment__$1,segment_drawing__$1,meta19180){return (new sicp_picture_language.app.t19179(owner__$1,segment__$1,segment_drawing__$1,meta19180));
});
}
return (new sicp_picture_language.app.t19179(owner,segment,segment_drawing,null));
});
sicp_picture_language.app.scene_drawing = (function scene_drawing(data,owner){if(typeof sicp_picture_language.app.t19185 !== 'undefined')
{} else
{
/**
* @constructor
*/
sicp_picture_language.app.t19185 = (function (owner,data,scene_drawing,meta19186){
this.owner = owner;
this.data = data;
this.scene_drawing = scene_drawing;
this.meta19186 = meta19186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
sicp_picture_language.app.t19185.cljs$lang$type = true;
sicp_picture_language.app.t19185.cljs$lang$ctorStr = "sicp-picture-language.app/t19185";
sicp_picture_language.app.t19185.cljs$lang$ctorPrWriter = (function (this__12106__auto__,writer__12107__auto__,opt__12108__auto__){return cljs.core._write.call(null,writer__12107__auto__,"sicp-picture-language.app/t19185");
});
sicp_picture_language.app.t19185.prototype.om$core$IRender$ = true;
sicp_picture_language.app.t19185.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var painter = sicp_picture_language.core.shrink_to_upper_right.call(null,sicp_picture_language.core.shrink_to_upper_right.call(null,sicp_picture_language.core.segments_painter.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(self__.data))));return cljs.core.apply.call(null,om.dom.svg,{"height": "600px", "width": "800px", "xmlns": "http://www.w3.org/2000/svg", "version": "1.1"},cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build_all.call(null,sicp_picture_language.app.segment_drawing,sicp_picture_language.core.flip_horiz.call(null,sicp_picture_language.core.rotate180.call(null,painter)).call(null,sicp_picture_language.app.svg_frame)),om.core.build_all.call(null,sicp_picture_language.app.segment_drawing,sicp_picture_language.core.rotate180.call(null,painter).call(null,sicp_picture_language.app.svg_frame)),om.core.build_all.call(null,sicp_picture_language.app.segment_drawing,sicp_picture_language.core.frame_outline_painter.call(null,sicp_picture_language.app.svg_frame))], null)));
});
sicp_picture_language.app.t19185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19187){var self__ = this;
var _19187__$1 = this;return self__.meta19186;
});
sicp_picture_language.app.t19185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19187,meta19186__$1){var self__ = this;
var _19187__$1 = this;return (new sicp_picture_language.app.t19185(self__.owner,self__.data,self__.scene_drawing,meta19186__$1));
});
sicp_picture_language.app.__GT_t19185 = (function __GT_t19185(owner__$1,data__$1,scene_drawing__$1,meta19186){return (new sicp_picture_language.app.t19185(owner__$1,data__$1,scene_drawing__$1,meta19186));
});
}
return (new sicp_picture_language.app.t19185(owner,data,scene_drawing,null));
});
om.core.root.call(null,sicp_picture_language.app.scene_drawing,sicp_picture_language.app.scene,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
figwheel.client.watch_and_reload.call(null);

//# sourceMappingURL=app.js.map