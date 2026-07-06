'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: 'hsl(var(--secondary) / 0.25)' }}>
      <div className="section-inner">
        <motion.span className="section-label" {...fadeUp(0)}>Experience</motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
          {...fadeUp(0.05)}
        >
          Work History
        </motion.h2>
        <motion.p className="text-muted-foreground mb-12 max-w-xl" {...fadeUp(0.1)}>
          Professional roles where I&apos;ve built and shipped production systems.
        </motion.p>

        <div className="relative max-w-2xl">
          <div className="timeline-line" />

          <div className="space-y-8 pl-8">
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} className="relative" {...fadeUp(0.12 + i * 0.1)}>
                <div className="timeline-dot" />

                <div className="card-clean p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-foreground">{exp.position}</h3>
                      <p className="text-sm font-mono text-primary mt-0.5">{exp.company}</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
