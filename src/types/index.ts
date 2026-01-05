export interface Project {
  id: string;
  title: string;
  description: string;
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
  technologies?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface GitHubRepo {
  id: string;
  name: string;
  url: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  featured: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}
