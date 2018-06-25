(use 'figwheel-sidecar.repl-api)

(def project (->> "project.clj"
                  slurp
                  read-string
                  (drop 2)
                  (cons :version)
                  (apply hash-map)))

(def figwheel-options (:figwheel project))
(def all-builds (-> project :cljsbuild :builds vals))

(start-figwheel!
  {:figwheel-options figwheel-options
   :build-ids [:app]
   :all-builds all-builds})
(cljs-repl)
