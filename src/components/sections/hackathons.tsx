'use client';

import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Github } from 'lucide-react';
import { hackathons } from '@/data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Hackathons() {
  return (
    <section id="hackathons" className="section-pad">
      <div className="section-inner">
        <motion.span className="section-label" {...fadeUp(0)}>Hackathons</motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
          {...fadeUp(0.05)}
        >
          Competitions &amp; Builds
        </motion.h2>
        <motion.p className="text-muted-foreground mb-12 max-w-xl" {...fadeUp(0.1)}>
          Competing and building at the intersection of backend systems and Web3.
        </motion.p>

        <div className="space-y-5">
          {hackathons.map((h, i) => {
            const isWinner = h.result.toLowerCase().includes('winner') ||
              h.result.toLowerCase().includes('bounty');
            return (
              <motion.div
                key={h.id}
                className="card-clean p-6"
                {...fadeUp(0.12 + i * 0.1)}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-1.5">
                      {isWinner ? (
                        <span className="result-badge-winner">
                          <Trophy className="h-3 w-3" />
                          {h.result}
                        </span>
                      ) : (
                        <span className="result-badge-participant">{h.result}</span>
                      )}
                      <span className="text-xs font-mono text-muted-foreground truncate">
                        {h.organizer}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground leading-snug">{h.name}</h3>
                    <p className="text-xs font-mono text-primary mt-1">
                      project:{' '}
                      <span className="text-foreground/65">{h.project}</span>
                    </p>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    {h.githubUrl && (
                      <a
                        href={h.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link w-8 h-8"
                        aria-label="GitHub"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {h.liveUrl && (
                      <a
                        href={h.liveUrl}
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

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {h.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {h.technologies.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
