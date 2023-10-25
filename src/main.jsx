/* eslint-disable prettier/prettier */
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
