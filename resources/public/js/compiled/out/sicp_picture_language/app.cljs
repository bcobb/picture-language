(ns sicp-picture-language.app
  (:require
    [figwheel.client :as fw :include-macros true]
    [sicp-picture-language.core :as pl]))

(enable-console-print!)

(fw/watch-and-reload)
