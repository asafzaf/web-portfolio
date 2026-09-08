import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { InstallConfigProvider } from "./config/InstallConfigProvider";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <InstallConfigProvider>
        <BrowserRouter basename="/InvenStory">
          <App />
        </BrowserRouter>
      </InstallConfigProvider>
    </LanguageProvider>
  </StrictMode>,
);
