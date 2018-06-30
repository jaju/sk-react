(defproject sk-react "0.1.0-SNAPSHOT"
  :description "Starter Kit: React"
  :url "https://msync.org/"
  :license {:name "Do What You Will"
            :url  ""}

  :min-lein-version "2.8.1"

  :dependencies [[org.clojure/clojure "1.10.0-alpha5"]
                 [org.clojure/clojurescript "1.10.339" :scope "provided" :exclusions [org.clojure/tools.reader]]
                 [reagent "0.8.1"]]

  :source-paths ["src/cljs"]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :cljsbuild {:builds {:app {:id           :app
                             :source-paths ["src/cljs"]
                             :compiler     {:source-map-timestamp true
                                            :main                 "sk-react.core"
                                            :verbose              true
                                            :output-to            "resources/public/js/app.js"
                                            :output-dir           "resources/public/js/out"
                                            :asset-path           "js/out"
                                            :closure-defines      {"goog.DEBUG" true}
                                            :optimizations        :none
                                            :pretty-print         true
                                            :cache-analysis       true
                                            :source-map           false}
                             :figwheel     true}}}

  :figwheel {:server-port 5309
             :css-dirs    ["resources/public/css"]}

  :clean-targets ^{:protect false} [:target-path
                                    :compile-path
                                    "resources/public/js/app.js"
                                    "resources/public/js/out"
                                    "figwheel_server.log"]

  :profiles {:dev {:source-paths     ["dev"]
                   :dependencies     [[cider/piggieback "0.3.6"]
                                      [org.clojure/tools.nrepl "0.2.13"]
                                      [figwheel-sidecar "0.5.17-SNAPSHOT" :exclusions [org.clojure/tools.reader]]]
                   :repl-options     {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   :cljsbuild-unused {:builds {:app {:compiler {:main "sk-react.core"}}}}}})
