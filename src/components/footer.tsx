import { personalInfo, contactInfo } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {personalInfo.name}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {personalInfo.title} specializing in Web3 protocols, smart contracts, and secure infrastructure.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {contactInfo.socialLinks.map((link) => {
              const Icon = link.icon === 'github' ? Github : link.icon === 'linkedin' ? Linkedin : link.icon === 'twitter' ? Twitter : Mail;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} {personalInfo.name}. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 fill-current" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
