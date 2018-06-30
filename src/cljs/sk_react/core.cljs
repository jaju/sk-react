(ns sk-react.core
  (:require [reagent.core :as r]))

(defn render-something [text]
  [:div
   (.render (js/App.))
   [:h1.center
    text]])

(r/render [render-something "I come from reagent"] (.getElementById js/document "app"))