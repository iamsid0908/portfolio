export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "languages" | "frameworks" | "tools";
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
