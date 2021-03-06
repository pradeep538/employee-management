import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ConfigureStore from "./store/store";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
//let {store} = ConfigureStore

ReactDOM.render(
  <Provider store={ConfigureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
