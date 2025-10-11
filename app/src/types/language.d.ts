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

export interface Picture {
  name: string;
  ext: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LinksData {
  github: linkObject;
  linkedin: linkObject;
  instagram: linkObject;
  resume: string;
}

export interface ProjectsContent {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  shortDesc: string;
  description: string;
  date: string;
  image: Picture;
  gallery: Picture[];
  categories: string[];
  links: linkObject[];
}

export interface ContactForm {
  full_name: string;
  email: string;
  message: string;
  send: string;
  url: string;
  contactFormUrl: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
  emailButton: string;
  referToForm?: string;
  form?: ContactForm;
}

export interface InfoModalContent {
  close: string;
  title: string;
  content: string;
  linksTitle?: string;
  links?: infoModalLink[];
}

export interface infoModalLink {
  title: string;
  description: string;
  url: string;
}

export interface LanguageData {
  lang: SupportedLang;
  direction: "ltr" | "rtl";
  navItems: navItem[];
  hero: HeroContent;
  skills: SkillsContent;
  links: LinksData;
  projects: ProjectsContent;
  contact: ContactContent;
  infoModal: InfoModalContent;
}
