// Compiled by ClojureScript 0.0-2371
goog.provide('sicp_picture_language.core');
goog.require('cljs.core');
/**
* Create a two-dimensional vector
*/
sicp_picture_language.core.make_vect = (function make_vect(x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
* Return the x-coordinate of the given vector
*/
sicp_picture_language.core.xcor_vect = (function xcor_vect(v){return cljs.core.first.call(null,v);
});
/**
* Return the y-coordinate of the given vector
*/
sicp_picture_language.core.ycor_vect = (function ycor_vect(v){return cljs.core.second.call(null,v);
});
/**
* The result of adding two vectors together
*/
sicp_picture_language.core.add_vect = (function add_vect(v,w){return sicp_picture_language.core.make_vect.call(null,(sicp_picture_language.core.xcor_vect.call(null,v) + sicp_picture_language.core.xcor_vect.call(null,w)),(sicp_picture_language.core.ycor_vect.call(null,v) + sicp_picture_language.core.ycor_vect.call(null,w)));
});
/**
* The result of subtracting the second vector from the first
*/
sicp_picture_language.core.sub_vect = (function sub_vect(v,w){return sicp_picture_language.core.make_vect.call(null,(sicp_picture_language.core.xcor_vect.call(null,v) - sicp_picture_language.core.xcor_vect.call(null,w)),(sicp_picture_language.core.ycor_vect.call(null,v) - sicp_picture_language.core.ycor_vect.call(null,w)));
});
/**
* The result of scaling the given vector by the given constant
*/
sicp_picture_language.core.scale_vect = (function scale_vect(c,v){return sicp_picture_language.core.make_vect.call(null,(sicp_picture_language.core.xcor_vect.call(null,v) * c),(sicp_picture_language.core.ycor_vect.call(null,v) * c));
});
/**
* Create a frame at the given origin with the given edges
*/
sicp_picture_language.core.make_frame = (function make_frame(origin,edge1,edge2){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin,edge1,edge2], null);
});
sicp_picture_language.core.third = (function third(v){return cljs.core.nth.call(null,v,(2));
});
/**
* Return the origin of the given frame
*/
sicp_picture_language.core.origin_frame = (function origin_frame(frame){return cljs.core.first.call(null,frame);
});
/**
* Return the first edge of the given frame
*/
sicp_picture_language.core.edge1_frame = (function edge1_frame(frame){return cljs.core.second.call(null,frame);
});
/**
* Return the second edge of the given frame
*/
sicp_picture_language.core.edge2_frame = (function edge2_frame(frame){return sicp_picture_language.core.third.call(null,frame);
});
/**
* Returns a procedure that maps a vector to the corresponding vector within
* the frame
*/
sicp_picture_language.core.frame_coord_map = (function frame_coord_map(frame){return (function (v){return sicp_picture_language.core.add_vect.call(null,sicp_picture_language.core.origin_frame.call(null,frame),sicp_picture_language.core.add_vect.call(null,sicp_picture_language.core.scale_vect.call(null,sicp_picture_language.core.xcor_vect.call(null,v),sicp_picture_language.core.edge1_frame.call(null,frame)),sicp_picture_language.core.scale_vect.call(null,sicp_picture_language.core.ycor_vect.call(null,v),sicp_picture_language.core.edge2_frame.call(null,frame))));
});
});
/**
* Creates a line segment from two vectors
*/
sicp_picture_language.core.make_segment = (function make_segment(v,w){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,w], null);
});
/**
* Returns the start of the given segment
*/
sicp_picture_language.core.start_segment = (function start_segment(segment){return cljs.core.first.call(null,segment);
});
/**
* Returns the end of the given segment
*/
sicp_picture_language.core.end_segment = (function end_segment(segment){return cljs.core.second.call(null,segment);
});
/**
* Returns a function that paints (in some sense) the given segments into the
* given frame
*/
sicp_picture_language.core.segments_painter = (function segments_painter(segments){return (function (frame){return cljs.core.map.call(null,(function (segment){return sicp_picture_language.core.make_segment.call(null,sicp_picture_language.core.frame_coord_map.call(null,frame).call(null,sicp_picture_language.core.start_segment.call(null,segment)),sicp_picture_language.core.frame_coord_map.call(null,frame).call(null,sicp_picture_language.core.end_segment.call(null,segment)));
}),segments);
});
});
sicp_picture_language.core.unit_square_vectors = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,sicp_picture_language.core.make_vect),(function (){var iter__12268__auto__ = (function iter__21843(s__21844){return (new cljs.core.LazySeq(null,(function (){var s__21844__$1 = s__21844;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21844__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__12264__auto__ = ((function (s__21844__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__21845(s__21846){return (new cljs.core.LazySeq(null,((function (s__21844__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__21846__$1 = s__21846;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21846__$1);if(temp__4126__auto____$1)
{var s__21846__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21846__$2))
{var c__12266__auto__ = cljs.core.chunk_first.call(null,s__21846__$2);var size__12267__auto__ = cljs.core.count.call(null,c__12266__auto__);var b__21848 = cljs.core.chunk_buffer.call(null,size__12267__auto__);if((function (){var i__21847 = (0);while(true){
if((i__21847 < size__12267__auto__))
{var y = cljs.core._nth.call(null,c__12266__auto__,i__21847);cljs.core.chunk_append.call(null,b__21848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__21849 = (i__21847 + (1));
i__21847 = G__21849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21848),iter__21845.call(null,cljs.core.chunk_rest.call(null,s__21846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21848),null);
}
} else
{var y = cljs.core.first.call(null,s__21846__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__21845.call(null,cljs.core.rest.call(null,s__21846__$2)));
}
} else
{return null;
}
break;
}
});})(s__21844__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__21844__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__12265__auto__ = cljs.core.seq.call(null,iterys__12264__auto__.call(null,cljs.core.range.call(null,(0),(2))));if(fs__12265__auto__)
{return cljs.core.concat.call(null,fs__12265__auto__,iter__21843.call(null,cljs.core.rest.call(null,s__21844__$1)));
} else
{{
var G__21850 = cljs.core.rest.call(null,s__21844__$1);
s__21844__$1 = G__21850;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12268__auto__.call(null,cljs.core.range.call(null,(0),(2)));
})());
sicp_picture_language.core.frame_outline_painter = (function (){var vec__21851 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21851,(0),null);var top_left = cljs.core.nth.call(null,vec__21851,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21851,(2),null);var top_right = cljs.core.nth.call(null,vec__21851,(3),null);return sicp_picture_language.core.segments_painter.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicp_picture_language.core.make_segment.call(null,bottom_left,bottom_right),sicp_picture_language.core.make_segment.call(null,bottom_right,top_right),sicp_picture_language.core.make_segment.call(null,top_right,top_left),sicp_picture_language.core.make_segment.call(null,top_left,bottom_left)], null));
})();
sicp_picture_language.core.frame_cross_painter = (function (){var vec__21852 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21852,(0),null);var top_left = cljs.core.nth.call(null,vec__21852,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21852,(2),null);var top_right = cljs.core.nth.call(null,vec__21852,(3),null);return sicp_picture_language.core.segments_painter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicp_picture_language.core.make_segment.call(null,bottom_left,top_right),sicp_picture_language.core.make_segment.call(null,top_left,bottom_right)], null));
})();
sicp_picture_language.core.frame_diamond_painter = (function (){var vec__21853 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21853,(0),null);var top_left = cljs.core.nth.call(null,vec__21853,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21853,(2),null);var top_right = cljs.core.nth.call(null,vec__21853,(3),null);return sicp_picture_language.core.segments_painter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sicp_picture_language.core.make_segment.call(null,bottom_left,top_right),sicp_picture_language.core.make_segment.call(null,top_left,bottom_right)], null));
})();
/**
* Transforms the given painter to paint in the given frame
*/
sicp_picture_language.core.transform_painter = (function transform_painter(painter,origin,corner1,corner2){return (function (frame){var m = sicp_picture_language.core.frame_coord_map.call(null,frame);var new_origin = m.call(null,origin);return painter.call(null,sicp_picture_language.core.make_frame.call(null,new_origin,sicp_picture_language.core.sub_vect.call(null,m.call(null,corner1),new_origin),sicp_picture_language.core.sub_vect.call(null,m.call(null,corner2),new_origin)));
});
});
/**
* Transforms the given painter to flip images vertically
*/
sicp_picture_language.core.flip_vert = (function flip_vert(painter){var vec__21855 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21855,(0),null);var top_left = cljs.core.nth.call(null,vec__21855,(1),null);var _ = cljs.core.nth.call(null,vec__21855,(2),null);var top_right = cljs.core.nth.call(null,vec__21855,(3),null);return sicp_picture_language.core.transform_painter.call(null,painter,top_left,top_right,bottom_left);
});
/**
* Returns a painter flipped horizontally
*/
sicp_picture_language.core.flip_horiz = (function flip_horiz(painter){var vec__21857 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21857,(0),null);var _ = cljs.core.nth.call(null,vec__21857,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21857,(2),null);var top_right = cljs.core.nth.call(null,vec__21857,(3),null);return sicp_picture_language.core.transform_painter.call(null,painter,bottom_right,bottom_left,top_right);
});
/**
* Transforms the given painter to paint images shrunk to the first quadrant of
* the original frame
*/
sicp_picture_language.core.shrink_to_upper_right = (function shrink_to_upper_right(painter){return sicp_picture_language.core.transform_painter.call(null,painter,sicp_picture_language.core.make_vect.call(null,0.5,0.5),sicp_picture_language.core.make_vect.call(null,1.0,0.5),sicp_picture_language.core.make_vect.call(null,0.5,1.0));
});
/**
* Transforms the given painter to paint images rotated 90-degrees
* counterclockwise
*/
sicp_picture_language.core.rotate90 = (function rotate90(painter){var vec__21859 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21859,(0),null);var _ = cljs.core.nth.call(null,vec__21859,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21859,(2),null);var top_right = cljs.core.nth.call(null,vec__21859,(3),null);return sicp_picture_language.core.transform_painter.call(null,painter,bottom_right,top_right,bottom_left);
});
/**
* Transforms the given painter to paint images rotated 180-degrees
* counterclockwise
*/
sicp_picture_language.core.rotate180 = (function rotate180(painter){return sicp_picture_language.core.rotate90.call(null,sicp_picture_language.core.rotate90.call(null,painter));
});
/**
* Transforms the given painter to paint images rotated 270-degrees
* counterclockwise
*/
sicp_picture_language.core.rotate270 = (function rotate270(painter){return sicp_picture_language.core.rotate90.call(null,sicp_picture_language.core.rotate180.call(null,painter));
});
/**
* Transforms the painter to paint in the middle-third of the original frame
*/
sicp_picture_language.core.squash_inwards = (function squash_inwards(painter){return sicp_picture_language.core.transform_painter.call(null,painter,sicp_picture_language.core.make_vect.call(null,(0),(0)),sicp_picture_language.core.make_vect.call(null,0.65,0.35),sicp_picture_language.core.make_vect.call(null,0.35,0.65));
});
/**
* Returns a compound painter which arranges two painters to paint beside each
* other
*/
sicp_picture_language.core.beside = (function beside(painter1,painter2){var split_point = sicp_picture_language.core.make_vect.call(null,0.5,(0));var vec__21861 = sicp_picture_language.core.unit_square_vectors;var bottom_left = cljs.core.nth.call(null,vec__21861,(0),null);var top_left = cljs.core.nth.call(null,vec__21861,(1),null);var bottom_right = cljs.core.nth.call(null,vec__21861,(2),null);var _ = cljs.core.nth.call(null,vec__21861,(3),null);var paint_left = sicp_picture_language.core.transform_painter.call(null,painter1,bottom_left,split_point,top_left);var paint_right = sicp_picture_language.core.transform_painter.call(null,painter2,split_point,bottom_right,sicp_picture_language.core.make_vect.call(null,0.5,(1)));return ((function (split_point,vec__21861,bottom_left,top_left,bottom_right,_,paint_left,paint_right){
return (function (frame){paint_left.call(null,frame);
return paint_right.call(null,frame);
});
;})(split_point,vec__21861,bottom_left,top_left,bottom_right,_,paint_left,paint_right))
});
/**
* Returns a compound painter which arranges two painters to paint one above
* the other
*/
sicp_picture_language.core.below = (function below(painter1,painter2){return sicp_picture_language.core.rotate90.call(null,sicp_picture_language.core.beside.call(null,painter1,painter2));
});

//# sourceMappingURL=core.js.map