import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import "material-symbols";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { CategoriesProvider } from "./context/CategoriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
