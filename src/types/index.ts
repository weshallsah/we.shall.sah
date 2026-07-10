export interface Project {
  id: string;
  title: string;
  description: string;
  blurb: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'languages' | 'backend' | 'databases' | 'web3' | 'infrastructure' | 'tools' | 'frontend' | 'design';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  blurb: string;
  technologies?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface Education {
  degree: string;
  institution: string;
  grade?: string;
  duration?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  project: string;
  description: string;
  blurb: string;
  result: string;
  grantWon?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  akindoUrl?: string;
}
