// types/language.d.ts
export type SupportedLang = "en" | "he";

export interface NavItem {
  label: string;
  id: string;
}
[];

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

interface Project {
  name: string;
  shortDesc: string;
  description: string;
  gitRepo: string;
  jiraLink: string;
  serviceUrl: string;
  screenshots: string[];
  thumbnail: string;
  tech: string[];
}

export interface LanguageData {
  lang: SupportedLang;
  direction: "ltr" | "rtl";
  navItems: navItem[];
  hero: HeroContent;
  skills: SkillsContent;
  links: LinksData;
}
