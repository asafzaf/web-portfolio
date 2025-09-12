// types/language.d.ts
export type SupportedLang = "en" | "he";

export type navItems = string[];

export interface HeroContent {
  name: string;
  title: string;
  description: string;
}

export interface SkillsContent {
  title: string;
  description: string;
}

export interface linkObject {
  label: string;
  url: string;
}

export interface LinksData {
  github: linkObject;
  linkedin: linkObject;
  instagram: linkObject;
  resume: string;
}

export interface LanguageData {
  lang: SupportedLang;
  direction: "ltr" | "rtl";
  navItems: navItems;
  hero: HeroContent;
  skills: SkillsContent;
  links: LinksData;
}
