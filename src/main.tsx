import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// commerce state
import CommerceState from "./context/CommerceState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CommerceState>
      <App />
    </CommerceState>
  </React.StrictMode>
);
