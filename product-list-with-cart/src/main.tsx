import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CartStateProvider from "./state/CartStateProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartStateProvider>
      <App />
    </CartStateProvider>
  </StrictMode>,
);
