(ns sk-react.core
  (:require [react]))

(.render js/ReactDOM (.render (js/App.)) (.getElementById js/document "app"))
