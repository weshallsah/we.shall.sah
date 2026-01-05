'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, Briefcase } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export function FloatingButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    try {
      if (isScrolled) {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Scroll to projects
        scrollToSection('projects');
      }
    } catch (error) {
      console.error('Scroll error:', error);
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0 touch-manipulation"
      aria-label={isScrolled ? "Scroll to top" : "View projects"}
    >
      {isScrolled ? (
        <ArrowUp className="h-6 w-6" />
      ) : (
        <Briefcase className="h-6 w-6" />
      )}
    </Button>
  );
}
