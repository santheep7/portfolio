export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

export interface SkillCategories {
  [key: string]: Skill[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
}

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}