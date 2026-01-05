import { Project, Skill, Experience, ContactInfo } from '@/types';

export const personalInfo = {
  name: 'Vishal Sah',
  title: 'Full-Stack Backend Engineer',
  bio: 'Versatile backend engineer with expertise in both Web2 and Web3 technologies. Skilled in building scalable Node.js backends, Spring Boot microservices, blockchain protocols, and secure infrastructure. Experienced in payment systems, API gateways, decentralized content access, and the intersection of traditional and blockchain-based architectures.',
  avatar: '/avatar.jpg',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'ProSound – Web3 Music Rental Protocol',
    description: 'A decentralized music rental system using NFTs for content ownership and access control. Record NFTs represent music ownership, while rental NFTs grant time-bound access to encrypted content. Integrated Story Protocol for IP registration and Lit Protocol for cryptographic access control with TEE-backed secure decryption.',
    image: '/projects/prosound.jpg',
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'Node.js', 'IPFS', 'Lit Protocol', 'Story Protocol', 'ERC-721'],
    liveUrl: 'https://www.prosound.live',
    githubUrl: 'https://github.com/prosound-live/contract-soundlive',
    featured: true,
  },
  {
    id: '2',
    title: 'x402-ratelimiter – Paid API & Anti-Scraping Gateway',
    description: 'A domain-aware rate-limiting gateway supporting multiple customer domains with dynamic SSL certificate resolution. Built with NGINX/OpenResty and Lua scripting, featuring payment-gated API access, domain onboarding, billing systems, and comprehensive abuse prevention. Prevents free scraping while enabling monetized API usage.',
    image: '/projects/x402.jpg',
    technologies: ['Node.js', 'TypeScript', 'Express', 'NGINX', 'OpenResty', 'Lua', 'PostgreSQL', 'x402'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/ddos-protector',
    featured: true,
  },
  {
    id: '3',
    title: 'RAG-based AI Backend System',
    description: 'Built a production-ready RAG system integrating LLMs with PostgreSQL vector databases for Attenomics. Processed Twitter data, generated Jina embeddings, and implemented LangChain memory for persistent conversational context. Developed comprehensive backend APIs and deployed on AWS with scalable services and caching.',
    image: '/projects/rag-system.jpg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'LangChain', 'LLMs', 'Vector Databases'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/weshallsah/Attenomics-LLM-backend',
    featured: false,
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript/TypeScript', level: 5, category: 'languages' },
  { name: 'Solidity', level: 4, category: 'languages' },
  { name: 'C/C++', level: 4, category: 'languages' },
  { name: 'Dart', level: 3, category: 'languages' },
  { name: 'SQL', level: 4, category: 'languages' },
  { name: 'Lua', level: 4, category: 'languages' },
  { name: 'Noir', level: 3, category: 'languages' },

  // Backend & Systems
  { name: 'Node.js', level: 5, category: 'backend' },
  { name: 'Express.js', level: 5, category: 'backend' },
  { name: 'Spring Boot', level: 4, category: 'backend' },
  { name: 'REST API Design', level: 5, category: 'backend' },
  { name: 'Rate Limiting', level: 4, category: 'backend' },
  { name: 'Authentication', level: 4, category: 'backend' },

  // Databases
  { name: 'PostgreSQL', level: 4, category: 'databases' },
  { name: 'MongoDB', level: 4, category: 'databases' },
  { name: 'Firebase Firestore', level: 4, category: 'databases' },
  { name: 'Neo4j', level: 3, category: 'databases' },
  { name: 'IPFS', level: 4, category: 'databases' },

  // Web3 & Blockchain
  { name: 'Ethereum/EVM', level: 4, category: 'web3' },
  { name: 'Smart Contracts', level: 4, category: 'web3' },
  { name: 'ERC-20/ERC-721', level: 4, category: 'web3' },
  { name: 'Hardhat/Foundry', level: 4, category: 'web3' },
  { name: 'Ethers.js/Web3.js', level: 4, category: 'web3' },
  { name: 'Story Protocol', level: 4, category: 'web3' },
  { name: 'Lit Protocol', level: 4, category: 'web3' },
  { name: 'OpenZeppelin', level: 4, category: 'web3' },

  // Infrastructure & DevOps
  { name: 'AWS', level: 4, category: 'infrastructure' },
  { name: 'NGINX/OpenResty', level: 4, category: 'infrastructure' },
  { name: 'SSL/TLS', level: 4, category: 'infrastructure' },

  // Tools & Platforms
  { name: 'Git/GitHub', level: 5, category: 'tools' },
  { name: 'VS Code', level: 5, category: 'tools' },
  { name: 'Postman', level: 4, category: 'tools' },
  { name: 'Figma', level: 3, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Attenomics',
    position: 'Software Engineering Intern',
    duration: 'April 2025 – July 2025',
    description: 'Built a RAG-based backend system integrating LLMs with PostgreSQL vector databases. Scraped and processed Twitter data, generated 1024-dimensional Jina embeddings, and implemented LangChain memory for persistent conversational context. Designed scalable backend services with async job handling and caching. Deployed production-ready systems on AWS for low-latency performance.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'LLMs', 'LangChain', 'Vector Databases'],
  },
];

export const githubRepos = [
  {
    id: '1',
    name: 'attenomics-backend-apis',
    url: 'https://github.com/weshallsah/attenomics-backend-apis',
    description: 'Backend APIs developed during Attenomics internship - production-ready Node.js services',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS'],
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: '2',
    name: 'Attenomics-LLM-backend',
    url: 'https://github.com/weshallsah/Attenomics-LLM-backend',
    description: 'LLM backend system with RAG implementation and vector database integration',
    technologies: ['Node.js', 'PostgreSQL', 'LangChain', 'Vector Databases'],
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: '3',
    name: 'Sound-live-Tee',
    url: 'https://github.com/prosound-live/Sound-live-Tee',
    description: 'Web3 music platform frontend and user interface components',
    technologies: ['JavaScript', 'Web3', 'React', 'IPFS'],
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: '4',
    name: 'contract-soundlive',
    url: 'https://github.com/prosound-live/contract-soundlive',
    description: 'Smart contracts for ProSound Web3 music rental protocol',
    technologies: ['Solidity', 'Hardhat', 'ERC-721', 'Web3'],
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    id: '5',
    name: 'ddos-protector',
    url: 'https://github.com/ddos-protector',
    description: 'Advanced rate limiting and anti-scraping gateway system',
    technologies: ['Node.js', 'NGINX', 'Lua', 'TypeScript'],
    stars: 0,
    forks: 0,
    featured: true,
  },
];

export const contactInfo: ContactInfo = {
  email: 'vishalk74064@gmail.com',
  phone: '+91 95112 86245',
  location: 'Ulhasnagar, Maharashtra, India',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/weshallsah', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/weshallsah', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://x.com/weshallsah', icon: 'twitter' },
  ],
};
