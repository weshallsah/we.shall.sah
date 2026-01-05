'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace('#', ''));
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full glass border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary font-mono">
              <span className="text-primary/60">&lt;</span>
              Portfolio
              <span className="text-primary/60">/&gt;</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                    className="relative text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary/5 group touch-manipulation min-h-[44px] flex items-center"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 group-hover:w-full transition-all duration-300" />
                  </button>
                ))}
              </div>

              {/* Download Resume Button */}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href="/resume/withexperience.pdf"
                  download="Vishal_Sah_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4 flex-shrink-0" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded="false"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className="text-muted-foreground hover:text-primary hover:bg-primary/5 block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-300 touch-manipulation min-h-[44px] flex items-center"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-2 border-t border-border/20">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a
                  href="/resume/withexperience.pdf"
                  download="Vishal_Sah_Resume.pdf"
                  className="flex items-center gap-2 w-full"
                >
                  <Download className="h-4 w-4 flex-shrink-0" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
