// index.js
// Entry point of the React application

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create root using React 18 syntax
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
