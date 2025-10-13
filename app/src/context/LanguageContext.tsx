// context/LanguageContext.tsx
import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";
import enRaw from "../data/en/general.en.json";
import heRaw from "../data/he/general.he.json";
import type { LanguageData, SupportedLang } from "../types/language";

import experienceEnRaw from "../data/en/experience.en.json";
import experienceHeRaw from "../data/he/experience.he.json";

import projectEnRaw from "../data/en/projects.en.json";
import projectHeRaw from "../data/he/projects.he.json";

import skillsRaw from "../data/skills.json";

import jiraEnRaw from "../data/en/jira.en.json";
import jiraHeRaw from "../data/he/jira.he.json";

const en = enRaw as LanguageData;
const he = heRaw as LanguageData;

interface LanguageContextType {
  language: SupportedLang;
  direction: "ltr" | "rtl";
  data: LanguageData;
  experienceData: any;
  projectsData: any;
  skillsData: any;
  jiraData: any;
  switchLanguage: (lang: SupportedLang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<SupportedLang>("en");

  const translations: Record<SupportedLang, LanguageData> = { en, he };
  const experienceData: Record<SupportedLang, any> = {
    en: experienceEnRaw,
    he: experienceHeRaw,
  };
  const projectsData: Record<SupportedLang, any> = {
    en: projectEnRaw,
    he: projectHeRaw,
  };

  const jiraData: Record<SupportedLang, any> = {
    en: jiraEnRaw,
    he: jiraHeRaw,
  };

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
        experienceData: experienceData[lang],
        projectsData: projectsData[lang],
        skillsData: skillsRaw,
        jiraData: jiraData[lang],
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
