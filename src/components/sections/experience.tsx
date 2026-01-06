'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 badge-gradient">Career</Badge>
          <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-0">
                  <motion.div
                    className="timeline-dot"
                    whileHover={{ scale: 1.2 }}
                  />
                </div>

                {/* Year indicator */}
                <div className="absolute left-0 md:left-4 top-8 -translate-x-full pr-4 hidden lg:block">
                  <span className="text-sm font-mono text-primary">
                    {experience.duration.split(' - ')[0]}
                  </span>
                </div>

                <Card className="modern-card overflow-hidden group">
                  {/* Gradient top border */}
                  <div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />

                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {experience.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="flex items-center gap-1.5 text-primary font-medium">
                            <Building2 className="h-4 w-4" />
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <Badge variant="outline" className="shrink-0 w-fit flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {experience.duration}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-mono bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Experience number badge */}
                    <div className="absolute top-6 right-6 text-6xl font-bold text-primary/5 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20">
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Open to new opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
