// types/language.d.ts
export type SupportedLang = "en" | "he";

export interface HeroContent {
  name: string;
  title: string;
  description: string;
}

export interface LanguageData {
  lang: SupportedLang;
  direction: "ltr" | "rtl";
  resume: string;
  hero: HeroContent;
}
