type FilterCategory = "Full Stack" | "DevOps" | "Tools & Others" | "Hobbies";

export interface Skill {
  label: string;
  types: string[];
  avatar?: string; // Optional avatar property
}