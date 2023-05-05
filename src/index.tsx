import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";

const rootNode = document.getElementById("app");
if (!rootNode) throw new Error("root node not found!");
const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
