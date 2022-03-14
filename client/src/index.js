import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ConfigStore } from "./redux/Config";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import define from "./map.js";
import { Runtime, Library, Inspector } from "./runtime.js";
const runtime = new Runtime();
const main = runtime.module(define, Inspector.into(document.body));

ReactDOM.render(
  <Provider store={ConfigStore()}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
