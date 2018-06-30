(ns user
  (:require [figwheel-sidecar.repl-api :refer :all]))

(def project (->> "project.clj"
                  slurp
                  read-string
                  (drop 2)
                  (cons :version)
                  (apply hash-map)))

(def figwheel-options (:figwheel project))
(def all-builds (-> project :cljsbuild :builds vals))

(defn start-cljs-compiler! []
  (start-figwheel!
    {:figwheel-options figwheel-options
     :build-ids [:app]
     :all-builds all-builds}))

(defn cljs-start [] (cljs-repl))
