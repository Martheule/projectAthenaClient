import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AnimatePresence } from "framer-motion";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimatePresence mode="wait">
      <AuthProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthProvider>
    </AnimatePresence>
  </BrowserRouter>
);
