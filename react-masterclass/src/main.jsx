import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Hello from "./components/Hello";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Hello name={"Cockburn"} message="Hello from prop by " />
    <Hello name={"Pierce"} message="Hello from prop by " />
  </React.StrictMode>
);
