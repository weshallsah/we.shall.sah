'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Terminal } from 'lucide-react';

const roles = [
  'Backend Engineer',
  'Web3 Developer',
  'System Architect',
  'Protocol Designer',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background with mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute inset-0 mesh-bg opacity-70" />

        {/* Animated blobs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/10 via-pink-500/5 to-transparent rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,92,223,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,92,223,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <motion.h1
                className="text-responsive-hero font-bold mb-4 sm:mb-6 text-foreground leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block text-muted-foreground text-2xl sm:text-3xl font-medium mb-2">
                  Hello, I&apos;m
                </span>
                <span className="animated-gradient-text">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.div
                className="h-10 sm:h-12 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-mono">
                  <span className="text-primary font-semibold">{displayText}</span>
                  <span className="typing-cursor" />
                </h2>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Building the bridge between{' '}
                <span className="text-foreground font-medium">traditional systems</span>
                {' '}and the{' '}
                <span className="text-primary font-medium">decentralized future</span>.
                Crafting scalable backends and innovative Web3 solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="glow-button min-w-[180px] px-8 py-6 text-base font-semibold group"
              >
                <span>View My Work</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="min-w-[180px] px-8 py-6 text-base font-semibold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links - Enhanced */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                { href: 'https://github.com/weshallsah', icon: Github, label: 'GitHub', color: 'hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800' },
                { href: 'https://linkedin.com/in/weshallsah', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
                { href: 'mailto:vishalk74064@gmail.com', icon: Mail, label: 'Email', color: 'hover:bg-primary hover:text-white' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Terminal (hidden on mobile) */}
          <motion.div
            className="hidden lg:block order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              {/* Glow effect behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative terminal shadow-2xl border-2 border-border/50">
                <div className="terminal-header flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                    <Terminal className="h-3 w-3" />
                    vishal@dev ~ zsh
                  </span>
                  <div className="w-16" />
                </div>
                <div className="terminal-body text-sm space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <span className="terminal-prompt">$</span>{' '}
                    <span className="terminal-command">whoami</span>
                  </motion.div>
                  <motion.div
                    className="pl-4 py-2 rounded-lg bg-primary/5 border-l-2 border-primary"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    <div className="text-foreground font-semibold">Vishal Sah</div>
                    <div className="text-muted-foreground text-sm">Backend Engineer | Web3 Developer</div>
                    <div className="text-primary text-sm mt-1">Bridging Web2 & Web3</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                  >
                    <span className="terminal-prompt">$</span>{' '}
                    <span className="terminal-command">cat tech-stack.json</span>
                  </motion.div>
                  <motion.div
                    className="font-mono text-xs sm:text-sm bg-code-bg/50 rounded-lg p-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                  >
                    <div className="text-code-keyword">{'{'}</div>
                    <div className="pl-4 flex flex-wrap gap-x-1">
                      <span className="text-code-string">&quot;backend&quot;</span>:
                      <span className="text-cyan-500">[&quot;Node.js&quot;, &quot;Express&quot;]</span>,
                    </div>
                    <div className="pl-4 flex flex-wrap gap-x-1">
                      <span className="text-code-string">&quot;web3&quot;</span>:
                      <span className="text-pink-500">[&quot;Solidity&quot;, &quot;Hardhat&quot;]</span>,
                    </div>
                    <div className="pl-4 flex flex-wrap gap-x-1">
                      <span className="text-code-string">&quot;database&quot;</span>:
                      <span className="text-emerald-500">[&quot;PostgreSQL&quot;, &quot;MongoDB&quot;]</span>,
                    </div>
                    <div className="pl-4 flex flex-wrap gap-x-1">
                      <span className="text-code-string">&quot;cloud&quot;</span>:
                      <span className="text-amber-500">[&quot;AWS&quot;, &quot;IPFS&quot;]</span>
                    </div>
                    <div className="text-code-keyword">{'}'}</div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                  >
                    <span className="terminal-prompt">$</span>
                    <motion.span
                      className="w-2.5 h-5 bg-primary rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
            Scroll to explore
          </span>
          <motion.div
            className="p-2 rounded-full border border-primary/30 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
