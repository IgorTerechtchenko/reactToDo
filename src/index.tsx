import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppConnect } from "./components/App/AppConnect";
import "./index.css";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
