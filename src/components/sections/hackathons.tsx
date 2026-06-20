'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hackathons } from '@/data/portfolio';
import { Trophy, ExternalLink, Sparkles, Medal, ArrowUpRight, Zap, DollarSign, Users } from 'lucide-react';
import Image from 'next/image';

const AKINDO_PROFILE = {
  avatar: 'https://res.cloudinary.com/travary/image/upload/c_fill,h_400,w_400/v1/prd-akindo-public/users/kzZVeLdE1So91a4R/icon/93vQJZ2MKToEr0aD.png',
  username: 'weshall',
  roles: ['Backend Developer', 'Blockchain Developer', 'Android Developer'],
  url: 'https://app.akindo.io/users/weshall',
  stats: [
    { label: 'Buildathons', value: '2', icon: Zap },
    { label: 'Hackathons', value: '1', icon: Users },
    { label: 'Total Earned', value: '$850 USDC', icon: DollarSign },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function Hackathons() {
  return (
    <section id="hackathons" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-yellow-500/10 to-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-yellow-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 badge-gradient inline-flex items-center gap-2">
            <Trophy className="h-3 w-3" />
            Akindo
          </Badge>
          <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
            Hackathon <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            Projects built and grants won through competitive buildathons on Akindo.
          </p>
        </motion.div>

        {/* Akindo Profile Widget */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-background to-orange-500/5 overflow-hidden">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

            <div className="p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">

                {/* Avatar */}
                <div className="relative flex-none">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 blur-md opacity-40" />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-yellow-500/40 overflow-hidden">
                    <Image
                      src={AKINDO_PROFILE.avatar}
                      alt="weshall on Akindo"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  {/* Online-style indicator */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background shadow" />
                </div>

                {/* Info */}
                <div className="flex-auto text-center sm:text-left min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      @{AKINDO_PROFILE.username}
                    </h3>
                    <Badge className="mx-auto sm:mx-0 bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30 text-xs font-semibold w-fit">
                      Akindo Builder
                    </Badge>
                  </div>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-4">
                    {AKINDO_PROFILE.roles.map(role => (
                      <span
                        key={role}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5">
                    {AKINDO_PROFILE.stats.map(({ label, value, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-2 bg-background/60 border border-border/60 rounded-xl px-3 py-2">
                        <div className="p-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                          <Icon className="h-3.5 w-3.5 text-yellow-500" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground leading-none">{value}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Profile CTA */}
                <div className="flex-none">
                  <motion.a
                    href={AKINDO_PROFILE.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-500 text-black text-sm font-bold shadow-lg hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View on Akindo
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </div>

              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hackathons.map((hackathon, index) => (
            <motion.div key={hackathon.id} variants={cardVariants}>
              <Card className="modern-card overflow-hidden group h-full border-2 border-transparent hover:border-yellow-500/30 project-card-content">
                {/* Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      index === 0
                        ? 'from-yellow-500/30 via-primary/20 to-orange-500/30'
                        : 'from-primary/30 via-cyan-500/20 to-pink-500/30'
                    }`}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 flex items-center justify-center shadow-2xl">
                        <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Result badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    {hackathon.grantWon ? (
                      <>
                        <Badge className="bg-yellow-500/90 text-black shadow-lg flex items-center gap-1.5 font-semibold">
                          <Sparkles className="h-3 w-3" />
                          {hackathon.result}
                        </Badge>
                        <Badge className="bg-green-500/90 text-white shadow-lg font-bold text-xs">
                          {hackathon.grantWon}
                        </Badge>
                      </>
                    ) : (
                      <Badge className="badge-gradient shadow-lg flex items-center gap-1.5">
                        <Medal className="h-3 w-3" />
                        {hackathon.result}
                      </Badge>
                    )}
                  </div>

                  {/* Organizer */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/60 backdrop-blur-sm text-xs font-mono">
                      {hackathon.organizer}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-mono mb-1">{hackathon.name}</p>
                      <span className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                        {hackathon.project}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {hackathon.liveUrl && (
                        <motion.a
                          href={hackathon.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/80 border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          title="Live site"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                      {hackathon.githubUrl && (
                        <motion.a
                          href={hackathon.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/80 border border-border hover:bg-gray-800 hover:text-white hover:border-gray-800 dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          title="GitHub"
                        >
                          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                        </motion.a>
                      )}
                      {hackathon.akindoUrl && (
                        <motion.a
                          href={hackathon.akindoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-muted/80 border border-border hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          title="View on Akindo"
                        >
                          <Trophy className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="project-card-body">
                  <p className="text-muted-foreground mb-4 card-description text-sm">
                    {hackathon.description}
                  </p>
                  <div className="badge-container">
                    {hackathon.technologies.slice(0, 5).map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="font-mono text-xs bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {hackathon.technologies.length > 5 && (
                      <Badge variant="outline" className="text-xs font-mono">
                        +{hackathon.technologies.length - 5}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
