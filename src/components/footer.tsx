'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo, contactInfo } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code2, Sparkles } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const quickLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Experience', href: 'experience' },
  { name: 'Contact', href: 'contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/50 border-t overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-t from-pink-500/10 to-transparent rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 text-2xl font-bold font-mono group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/20 group-hover:border-primary/40 transition-colors">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <span>
                <span className="text-primary/60 group-hover:text-primary transition-colors">&lt;</span>
                <span className="gradient-text">Vishal Sah</span>
                <span className="text-primary/60 group-hover:text-primary transition-colors">/&gt;</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {personalInfo.title} specializing in Web3 protocols, smart contracts, and secure infrastructure.
              Building bridges between traditional systems and decentralized future.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {contactInfo.socialLinks.map((link, index) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons] || Github;
                const colors = index === 0 ? 'hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800' :
                              index === 1 ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-sky-500 hover:text-white';
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground transition-all duration-300 ${colors}`}
                    aria-label={link.platform}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm animated-underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-muted-foreground">
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Section - Enhanced */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap justify-center">
            <span>&copy; {currentYear} {personalInfo.name}.</span>
            <span className="flex items-center gap-1.5">
              Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Heart className="h-4 w-4 text-red-500 fill-red-500" /></motion.span>
            </span>
            <span className="flex items-center gap-1.5">
              using <Code2 className="h-4 w-4 text-primary" /> <span className="font-medium text-foreground">Next.js</span>
            </span>
          </p>

          {/* Back to top button - Enhanced */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all group"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
