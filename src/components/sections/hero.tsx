'use client';

import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      {/* Simple, clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                HI,
                <br />
                I&apos;m{' '}
                <span className="gradient-text bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              <h2 className="text-xl md:text-3xl text-muted-foreground mb-8 font-light">
                {personalInfo.title}
              </h2>

              <blockquote className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed italic border-l-4 border-primary pl-6">
                &ldquo;Building the bridge between traditional systems and decentralized future&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="min-w-[140px] sm:min-w-[160px] px-6 sm:px-8 py-3 text-sm sm:text-base font-medium touch-manipulation"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/weshallsah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/weshallsah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:vishalk74064@gmail.com"
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right side - Code terminal */}
          <div className="hidden lg:block order-2 lg:order-1">
            <div className="terminal max-w-lg mx-auto">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-xs text-muted-foreground ml-2">vishal@portfolio ~</span>
              </div>
              <div className="terminal-body">
                <div className="mb-4">
                  <span className="terminal-prompt">$</span>{' '}
                  <span className="terminal-command">whoami</span>
                </div>
                <div className="mb-4 terminal-output">
                  vishal-sah<br/>
                  Backend Engineer | Web3 Developer<br/>
                  Building bridges between traditional & decentralized systems
                </div>
                <div className="mb-4">
                  <span className="terminal-prompt">$</span>{' '}
                  <span className="terminal-command">cat skills.txt</span>
                </div>
                <div className="terminal-output">
                  Node.js, Spring Boot, Solidity<br/>
                  PostgreSQL, MongoDB, IPFS<br/>
                  Docker, AWS, Blockchain Protocols
                </div>
                <div className="mt-4">
                  <span className="terminal-prompt">$</span>{' '}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
