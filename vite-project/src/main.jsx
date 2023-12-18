import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 위에서 import한 앱을 렌더링함 */}
    <App />
  </React.StrictMode>
);
