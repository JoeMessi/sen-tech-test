import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootNode = document.getElementById("app");
if (!rootNode) throw new Error("root node not found!");
const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <>Build Me!</>
  </StrictMode>
);
