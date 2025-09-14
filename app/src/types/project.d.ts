import type { Picture } from "./language";

export interface ProjectCardProps {
  name: string;
  shortDesc: string;
  picture: Picture;
  onClick: () => void;
}
