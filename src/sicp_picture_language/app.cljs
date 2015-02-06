(ns sicp-picture-language.app
  (:require
    [figwheel.client :as fw :include-macros true]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [sicp-picture-language.core :as pl]))

(enable-console-print!)

(def svg-frame
  (pl/make-frame (pl/make-vect 0 0) (pl/make-vect 800 0) (pl/make-vect 0 600)))

(def triangle-segments
  [(pl/make-segment (pl/make-vect 0 0) (pl/make-vect 1 0))
   (pl/make-segment (pl/make-vect 1 0) (pl/make-vect 0.5 1))
   (pl/make-segment (pl/make-vect 0.5 1) (pl/make-vect 0 0))])

(defonce scene (atom {:segments triangle-segments}))

(defn segment-drawing [segment owner]
  (reify
    om/IRender
    (render [_]
      (let [x1 (-> segment pl/start-segment pl/xcor-vect)
            y1 (-> segment pl/start-segment pl/ycor-vect)
            x2 (-> segment pl/end-segment pl/xcor-vect)
            y2 (-> segment pl/end-segment pl/ycor-vect)
            start (str "M " x1 " " y1)
            stop (str "L " x2 " " y2)
            drawing (str start " " stop)]
        (dom/path #js {:d drawing :stroke "black"} nil)))))

(defn scene-drawing [data owner]
  (reify
    om/IRender
    (render [_]
      (let [painter (-> (pl/segments-painter (:segments data)) pl/shrink-to-upper-right pl/shrink-to-upper-right)]
        (apply dom/svg #js {:version "1.1"
                            :xmlns "http://www.w3.org/2000/svg"
                            :width "800px"
                            :height "600px"}
              (flatten
                [(om/build-all segment-drawing ((-> painter pl/rotate180 pl/flip-horiz) svg-frame))
                 (om/build-all segment-drawing ((-> painter pl/rotate180) svg-frame))
                 (om/build-all segment-drawing (pl/frame-outline-painter svg-frame))]))))))

(om/root scene-drawing scene
  {:target (. js/document (getElementById "main"))})

(fw/watch-and-reload)
