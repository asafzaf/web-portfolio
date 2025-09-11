// context/LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";
import enRaw from "../data/en.json";
import heRaw from "../data/he.json";
import type { LanguageData, SupportedLang } from "../types/language";

const en = enRaw as LanguageData;
const he = heRaw as LanguageData;

interface LanguageContextType {
  language: SupportedLang;
  direction: "ltr" | "rtl";
  data: LanguageData;
  switchLanguage: (lang: SupportedLang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<SupportedLang>("en");

  const translations: Record<SupportedLang, LanguageData> = { en, he };

  const switchLanguage = (newLang: SupportedLang) => {
    setLang(newLang);
    document.dir = translations[newLang].direction;
  };

  return (
    <LanguageContext.Provider
      value={{
        language: lang,
        direction: translations[lang].direction,
        data: translations[lang],
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
