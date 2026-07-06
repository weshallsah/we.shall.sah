'use client';

import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { personalInfo, contactInfo } from '@/data/portfolio';

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, twitter: Twitter };

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
          <span className="font-mono font-bold text-foreground tracking-wider">
            <span className="text-primary">VS</span>.
          </span>
          <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          <div className="flex items-center gap-3">
            {contactInfo.socialLinks.map(s => {
              const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS] ?? Github;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          Back to top
          <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
