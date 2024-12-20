import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
