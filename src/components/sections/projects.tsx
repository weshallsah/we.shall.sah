'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github, Rocket, Folder, ArrowRight, Sparkles, Code2, Layers } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <motion.div
          className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/10 to-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 badge-gradient inline-flex items-center gap-2">
            <Layers className="h-3 w-3" />
            Portfolio
          </Badge>
          <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents
            a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="modern-card overflow-hidden group h-full border-2 border-transparent hover:border-primary/30">
                {/* Enhanced Project Image/Banner Area */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  {/* Gradient background with animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-primary/30 via-pink-500/20 to-cyan-500/30' : 'from-cyan-500/30 via-primary/20 to-pink-500/30'}`} />

                  {/* Animated mesh pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Floating icon with glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary via-pink-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                        <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Featured badge with sparkle */}
                  <div className="absolute top-4 left-4">
                    <Badge className="badge-gradient shadow-lg flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </Badge>
                  </div>

                  {/* Project number with gradient */}
                  <div className="absolute top-4 right-4 text-6xl sm:text-7xl font-bold bg-gradient-to-br from-primary/20 to-transparent bg-clip-text text-transparent">
                    0{index + 1}
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between gap-4">
                    <span className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/80 border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/80 border border-border hover:bg-gray-800 hover:text-white hover:border-gray-800 dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs bg-gradient-to-r from-primary/10 to-pink-500/10 border border-primary/20 hover:border-primary/40 transition-all"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.technologies.length > 5 && (
                      <Badge variant="outline" className="text-xs font-mono">
                        +{project.technologies.length - 5}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects - Enhanced */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h3 className="text-xl sm:text-2xl font-bold text-center flex items-center gap-3 px-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <span>More <span className="text-primary">Projects</span></span>
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherProjects.map((project, index) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <Card className="modern-card group h-full border border-border/50 hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${index % 3 === 0 ? 'bg-cyan-500/10 border border-cyan-500/20' : index % 3 === 1 ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-emerald-500/10 border border-emerald-500/20'}`}>
                            <Folder className={`h-4 w-4 ${index % 3 === 0 ? 'text-cyan-500' : index % 3 === 1 ? 'text-pink-500' : 'text-emerald-500'}`} />
                          </div>
                          <span className="truncate font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </span>
                        </div>
                        <div className="flex gap-1.5 flex-shrink-0">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                              whileHover={{ scale: 1.1 }}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                              whileHover={{ scale: 1.1 }}
                            >
                              <Github className="h-4 w-4" />
                            </motion.a>
                          )}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs font-mono border-border/50 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs font-mono text-muted-foreground">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* CTA to view all repos */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="glow-button group px-8 py-6"
            asChild
          >
            <a
              href="https://github.com/weshallsah?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Github className="h-5 w-5" />
              <span>View All 63 Repositories</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
