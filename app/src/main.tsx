import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import { ThemeProvider } from "./theme/theme.context";
import { LanguageProvider } from "./context/LanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
