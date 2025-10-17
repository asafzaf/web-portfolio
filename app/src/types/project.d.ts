import type { Picture, Project } from "./language";

export interface ProjectCardProps {
  name: string;
  shortDesc: string;
  image: Picture;
  onClick: () => void;
}

export interface ProjectModalProps {
  project: Project | null;
  savedWords: Record<string, string>;
  onClose: () => void;
}
