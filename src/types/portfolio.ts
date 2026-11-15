export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  titles: string[];
  bio: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  available: boolean;
  info: ContactInfo[];
  socials: SocialLinks;
}

export interface ProjectLinks {
  demo: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: string;
  links: ProjectLinks;
  category: string;
}

export interface Skill {
  name: string;
  icon?: string;
  svg?: string;
}

export type Skills = Record<string, Skill[]>;

export interface Service {
  title: string;
  description: string;
  icon: string;
  svg?: string;
}

export interface ExperienceItem {
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  years: string;
  description: string;
  icon?: string;
  image?: string;
  svg?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  image?: string;
  svg?: string;
  url?: string;
  skills: string[];
}
