'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/portfolio';
import { Server, Database, Globe, Cpu, FileCode, User, Wrench, Code2, GraduationCap, Sparkles, Rocket, Target } from 'lucide-react';

const skillCategories = {
  languages: { icon: FileCode, label: 'Languages', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10', textColor: 'text-blue-500', borderColor: 'border-blue-500/30' },
  backend: { icon: Server, label: 'Backend & Systems', color: 'from-emerald-500 to-green-500', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-500', borderColor: 'border-emerald-500/30' },
  databases: { icon: Database, label: 'Databases', color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-500/10', textColor: 'text-purple-500', borderColor: 'border-purple-500/30' },
  web3: { icon: Globe, label: 'Web3 & Blockchain', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500/10', textColor: 'text-orange-500', borderColor: 'border-orange-500/30' },
  infrastructure: { icon: Cpu, label: 'Infrastructure', color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-500/10', textColor: 'text-rose-500', borderColor: 'border-rose-500/30' },
  tools: { icon: Wrench, label: 'Tools & Platforms', color: 'from-slate-500 to-zinc-500', bgColor: 'bg-slate-500/10', textColor: 'text-slate-500', borderColor: 'border-slate-500/30' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 to-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
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
            <Sparkles className="h-3 w-3" />
            About Me
          </Badge>
          <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            Discover my background, skills, and what drives my passion for building innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Personal Info - Takes 2 columns on xl */}
          <motion.div
            className="xl:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="modern-card overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/20">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <span>My Story</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-responsive-base">
                  Versatile backend engineer with expertise in both <span className="text-foreground font-medium">Web2</span> and <span className="text-primary font-medium">Web3</span> technologies. Skilled in building scalable Node.js backends, Spring Boot microservices, blockchain protocols, and secure infrastructure.
                </p>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-cyan-500/5 border border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">B.Tech in Computer Science</p>
                    <p className="text-sm text-muted-foreground">
                      Gyan Ganga College of Technology
                    </p>
                    <p className="text-xs text-primary mt-1 font-medium">CGPA: 7.61</p>
                  </div>
                </motion.div>

                {/* Enhanced Code Example */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-pink-500/20 to-cyan-500/20 rounded-xl blur opacity-30" />
                  <div className="relative code-block p-4 pt-8">
                    <code className="text-xs sm:text-sm">
                      <span className="text-code-keyword">const</span>{' '}
                      <span className="text-code-variable">engineer</span> = {'{'}
                      <br />
                      <span className="pl-4 text-code-string">&quot;focus&quot;</span>:{' '}
                      <span className="text-cyan-500">&quot;Web2 ↔ Web3&quot;</span>,
                      <br />
                      <span className="pl-4 text-code-string">&quot;passion&quot;</span>:{' '}
                      <span className="text-pink-500">buildBridges</span>()
                      <br />
                      {'}'};
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expertise Cards - Enhanced */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-5 rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-primary/10 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-px rounded-xl bg-card" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Code2 className="h-5 w-5 text-cyan-500" />
                    </div>
                    <h4 className="font-bold text-lg text-cyan-500">Web2</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Node.js & Spring Boot</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> RESTful API Design</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Database Optimization</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> AWS Cloud</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-5 rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-primary/10 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-px rounded-xl bg-card" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                      <Globe className="h-5 w-5 text-pink-500" />
                    </div>
                    <h4 className="font-bold text-lg text-pink-500">Web3</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Smart Contracts</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Protocol Design</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> NFT Standards</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> IPFS & Lit Protocol</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Interests - Enhanced */}
            <Card className="modern-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 mb-5">
                  <Rocket className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-center">Passionate About</h4>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { name: 'System Architecture', color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-600 dark:text-blue-400' },
                    { name: 'Protocol Design', color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-600 dark:text-pink-400' },
                    { name: 'Scalable Backends', color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-600 dark:text-emerald-400' },
                    { name: 'Security', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-600 dark:text-amber-400' },
                    { name: 'Innovation', color: 'from-purple-500/20 to-primary/20 border-purple-500/30 text-purple-600 dark:text-purple-400' },
                  ].map((interest, index) => (
                    <motion.div
                      key={interest.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${interest.color} border px-3 py-1.5 font-medium cursor-default transition-all duration-300 hover:shadow-md`}
                      >
                        {interest.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills - Takes 3 columns on xl */}
          <motion.div
            className="xl:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                const { icon: Icon, label, color, bgColor, textColor, borderColor } = skillCategories[category as keyof typeof skillCategories];
                return (
                  <motion.div key={category} variants={itemVariants}>
                    <Card className={`modern-card h-full border ${borderColor} hover:border-opacity-50`}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`flex items-center gap-3 text-base`}>
                          <div className={`p-2.5 rounded-xl ${bgColor} border ${borderColor}`}>
                            <Icon className={`h-4 w-4 ${textColor}`} />
                          </div>
                          <span className={textColor}>{label}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3.5">
                          {categorySkills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              className="group"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.05 }}
                            >
                              <div className="flex justify-between items-center mb-2">
                                <span className={`text-sm font-medium text-foreground group-hover:${textColor} transition-colors`}>
                                  {skill.name}
                                </span>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                                        i < skill.level
                                          ? `bg-gradient-to-r ${color}`
                                          : 'bg-muted'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div className="skill-bar h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full rounded-full bg-gradient-to-r ${color}`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, delay: 0.1 + skillIndex * 0.05 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
