'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Trophy } from 'lucide-react';
import { personalInfo, contactInfo, skills } from '@/data/portfolio';

const CATEGORY_LABELS: Record<string, string> = {
  languages: 'Languages',
  backend: 'Backend',
  databases: 'Databases',
  web3: 'Web3',
  infrastructure: 'Infra',
  tools: 'Tools',
};

const FACTS = [
  { icon: MapPin,       label: 'Location',    value: 'Ulhasnagar, Maharashtra' },
  { icon: GraduationCap, label: 'Education',  value: 'B.Tech CS · GGCT · 7.61 CGPA' },
  { icon: Briefcase,    label: 'Currently',   value: 'SDE @ HQPL' },
  { icon: Trophy,       label: 'Hackathons',  value: '3+ events · 1 bounty win' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function About() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <section id="about" className="section-pad">
      <div className="section-inner">
        <motion.span className="section-label" {...fadeUp(0)}>About me</motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-10"
          {...fadeUp(0.05)}
        >
          Background & Skills
        </motion.h2>

        {/* Bio + facts */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          <motion.div {...fadeUp(0.1)}>
            <div className="card-clean p-6 h-full">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-[0.9375rem]">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3" {...fadeUp(0.15)}>
            {FACTS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card-clean p-4 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary border border-border flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-sm text-foreground font-medium mt-0.5 truncate">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div {...fadeUp(0.2)}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest whitespace-nowrap">
              Tech Stack
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-5">
            {Object.entries(CATEGORY_LABELS).map(([key, label], ci) => {
              const catSkills = grouped[key] ?? [];
              if (!catSkills.length) return null;
              return (
                <motion.div
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + ci * 0.06, duration: 0.4 }}
                >
                  <span className="text-[10px] font-mono text-muted-foreground/55 uppercase tracking-widest sm:w-20 sm:pt-1 flex-shrink-0">
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map(s => (
                      <span key={s.name} className="skill-tag">{s.name}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
