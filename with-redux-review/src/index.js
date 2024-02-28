import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Wrap the App component with the Provider component, and transfer the store to the Provider component as a prop.
  <Provider store={store}>
    <App />
  </Provider>
);
