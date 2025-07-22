import "@fontsource-variable/roboto";
import "@fontsource-variable/geist";
import "@fontsource/lato";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
