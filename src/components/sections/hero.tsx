'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';
import { personalInfo, contactInfo } from '@/data/portfolio';

const ROLES = [
  'Backend Engineer',
  'Web3 Developer',
  'System Architect',
  'Protocol Designer',
];

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, twitter: Twitter };

function useTyping(words: string[], typeSpeed = 80, deleteSpeed = 40, pauseMs = 2000) {
  const [text, setText] = useState('');
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setWIdx(i => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Hero() {
  const role = useTyping(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center dot-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="section-inner relative z-10 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div className="mb-8" {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div className="mb-4" {...fadeUp(0.2)}>
            <p className="text-muted-foreground text-lg mb-2 font-light tracking-wide">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div className="h-10 flex items-center mb-7" {...fadeUp(0.3)}>
            <span className="text-xl sm:text-2xl font-mono text-primary">
              {role}
              <span className="typing-cursor" />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
            {...fadeUp(0.4)}
          >
            Building the bridge between traditional systems and the decentralised
            future — scalable backends, smart contracts, and protocol design.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap items-center gap-3 mb-9" {...fadeUp(0.5)}>
            <a href="#projects" className="btn-primary">
              View my work →
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
            <a
              href="/resume/withexperience.pdf"
              download="Vishal_Sah_Resume.pdf"
              className="btn-outline"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div className="flex items-center gap-2" {...fadeUp(0.6)}>
            {contactInfo.socialLinks.map(s => {
              const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS] ?? Github;
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="icon-link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <a href={`mailto:${contactInfo.email}`} aria-label="Email" className="icon-link">
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
