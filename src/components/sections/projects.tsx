'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-pad" style={{ background: 'hsl(var(--secondary) / 0.25)' }}>
      <div className="section-inner">
        <motion.span className="section-label" {...fadeUp(0)}>Projects</motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
          {...fadeUp(0.05)}
        >
          Things I&apos;ve Built
        </motion.h2>
        <motion.p className="text-muted-foreground mb-12 max-w-xl" {...fadeUp(0.1)}>
          From Web3 protocols to scalable backend systems — a selection of what I&apos;ve shipped.
        </motion.p>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              className="card-clean p-6 flex flex-col gap-4 group"
              {...fadeUp(0.12 + i * 0.08)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/30 bg-primary/8 px-2 py-0.5 rounded mb-2">
                    Featured
                  </span>
                  <h3 className="font-semibold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="flex gap-1.5 flex-shrink-0 pt-1">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link w-8 h-8"
                      aria-label="GitHub"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.liveUrl && p.liveUrl !== 'https://example.com' && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link w-8 h-8"
                      aria-label="Live site"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.technologies.slice(0, 5).map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
                {p.technologies.length > 5 && (
                  <span className="tech-tag opacity-60">+{p.technologies.length - 5}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <motion.div className="flex items-center gap-4 mb-6" {...fadeUp(0.25)}>
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                Other Projects
              </h3>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {rest.map((p, i) => (
                <motion.div
                  key={p.id}
                  className="card-clean p-5 flex flex-col gap-3 group"
                  {...fadeUp(0.28 + i * 0.06)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2 flex-1">
                      {p.title}
                    </h3>
                    <div className="flex gap-1 flex-shrink-0">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {p.liveUrl && p.liveUrl !== 'https://example.com' && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live site"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.technologies.slice(0, 3).map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="tech-tag opacity-60">+{p.technologies.length - 3}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* GitHub CTA */}
        <motion.div className="text-center" {...fadeUp(0.4)}>
          <a
            href="https://github.com/weshallsah?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            <Github className="h-4 w-4" />
            View all repositories on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
