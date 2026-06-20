'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import {
  Github, Linkedin, Mail, ArrowRight, Sparkles, Terminal,
  Server, Database, Shield, GitBranch, Cpu, Layers, Cloud, Lock,
} from 'lucide-react';

const roles = [
  'Backend Engineer',
  'Web3 Developer',
  'System Architect',
  'Protocol Designer',
];

const floatingIcons = [
  { Icon: Server,    color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', glow: 'rgba(16,185,129,0.35)',  style: { top: '14%',  left: '3%'   }, delay: 0,   duration: 3.5, label: 'Node.js'     },
  { Icon: Database,  color: 'text-blue-400',    border: 'border-blue-500/30',    bg: 'bg-blue-500/10',    glow: 'rgba(59,130,246,0.35)',  style: { top: '42%',  left: '1.5%' }, delay: 1.4, duration: 4,   label: 'PostgreSQL'  },
  { Icon: Shield,    color: 'text-purple-400',  border: 'border-purple-500/30',  bg: 'bg-purple-500/10',  glow: 'rgba(168,85,247,0.35)', style: { top: '68%',  left: '3%'   }, delay: 0.7, duration: 3.8, label: 'Solidity'    },
  { Icon: Cloud,     color: 'text-cyan-400',    border: 'border-cyan-500/30',    bg: 'bg-cyan-500/10',    glow: 'rgba(6,182,212,0.35)',   style: { top: '87%',  left: '10%'  }, delay: 2.1, duration: 4.2, label: 'AWS'         },
  { Icon: GitBranch, color: 'text-orange-400',  border: 'border-orange-500/30',  bg: 'bg-orange-500/10',  glow: 'rgba(249,115,22,0.35)',  style: { top: '11%',  right: '3%'  }, delay: 0.4, duration: 3.6, label: 'DevOps'      },
  { Icon: Cpu,       color: 'text-rose-400',    border: 'border-rose-500/30',    bg: 'bg-rose-500/10',    glow: 'rgba(244,63,94,0.35)',   style: { top: '44%',  right: '1.5%'}, delay: 1.8, duration: 4.1, label: 'Docker'      },
  { Icon: Layers,    color: 'text-yellow-400',  border: 'border-yellow-500/30',  bg: 'bg-yellow-500/10',  glow: 'rgba(234,179,8,0.35)',   style: { top: '70%',  right: '3%'  }, delay: 2.7, duration: 3.9, label: 'K8s'         },
  { Icon: Lock,      color: 'text-teal-400',    border: 'border-teal-500/30',    bg: 'bg-teal-500/10',    glow: 'rgba(20,184,166,0.35)',  style: { top: '87%',  right: '10%' }, delay: 0.2, duration: 3.7, label: 'Web3 Sec'    },
];

// Blockchain network node positions (in 0-100 coordinate space matching viewBox)
const networkNodes = [
  { x: 8,  y: 15 }, { x: 25, y: 58 }, { x: 45, y: 10 },
  { x: 62, y: 42 }, { x: 85, y: 20 }, { x: 78, y: 74 },
  { x: 18, y: 83 }, { x: 50, y: 67 }, { x: 35, y: 32 },
];
const networkEdges = [
  [0, 8], [8, 1], [8, 2], [2, 3], [3, 4],
  [4, 5], [5, 7], [7, 6], [1, 6], [3, 7],
];

function BlockchainNetwork() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection lines */}
      {networkEdges.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={networkNodes[a].x} y1={networkNodes[a].y}
          x2={networkNodes[b].x} y2={networkNodes[b].y}
          stroke="#a855f7"
          strokeWidth="0.25"
          strokeOpacity="0.3"
          strokeDasharray="2 2"
          style={{ animation: `dash-flow ${2 + i * 0.3}s linear infinite` }}
        />
      ))}

      {/* Moving data packets along edges */}
      {networkEdges.map(([a, b], i) => (
        <motion.circle
          key={`packet-${i}`}
          r="0.9"
          fill="#c084fc"
          filter="url(#node-glow)"
          animate={{
            cx: [networkNodes[a].x, networkNodes[b].x],
            cy: [networkNodes[a].y, networkNodes[b].y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.9,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Network nodes */}
      {networkNodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r="1.5"
          fill="rgba(168,85,247,0.5)"
          stroke="#c084fc"
          strokeWidth="0.4"
          filter="url(#node-glow)"
          animate={{
            r: [1.5, 2.4, 1.5],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.35,
            repeat: Infinity,
            delay: i * 0.45,
          }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute inset-0 mesh-bg opacity-70" />

        {/* Blockchain network visualization — subtle background */}
        <div className="absolute inset-0 opacity-[0.18]">
          <BlockchainNetwork />
        </div>

        {/* Animated color blobs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-purple-500/10 via-cyan-500/5 to-transparent rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Floating tech icons — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {floatingIcons.map(({ Icon, color, border, bg, glow, style, delay, duration, label }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={style}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
              className={`group relative p-3 rounded-xl ${bg} border ${border} backdrop-blur-sm cursor-default`}
              style={{ boxShadow: `0 0 18px ${glow}` }}
            >
              <Icon className={`h-5 w-5 ${color}`} />
              {/* Tooltip */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 2 === 0 ? 6 : 4,
              height: i % 2 === 0 ? 6 : 4,
              background: i % 3 === 0 ? 'rgba(168,85,247,0.5)' : i % 3 === 1 ? 'rgba(6,182,212,0.5)' : 'rgba(16,185,129,0.5)',
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 4) * 18}%`,
            }}
            animate={{ y: [0, -28, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side — Text content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-mono mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </motion.div>

              <motion.h1
                className="text-responsive-hero font-bold mb-4 sm:mb-6 text-foreground leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="block text-muted-foreground text-2xl sm:text-3xl font-medium mb-2">
                  Hello, I&apos;m
                </span>
                <span className="animated-gradient-text">
                  {personalInfo.name}
                </span>
              </motion.h1>

              <motion.div
                className="h-10 sm:h-12 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-mono">
                  <span className="gradient-text font-semibold">{displayText}</span>
                  <span className="typing-cursor" />
                </h2>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Building the bridge between{' '}
                <span className="text-foreground font-medium">traditional systems</span>
                {' '}and the{' '}
                <span className="gradient-text font-medium">decentralized future</span>.
                Crafting scalable backends and innovative Web3 solutions.
              </motion.p>
            </div>

            {/* Tech stack pills */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              {[
                { label: 'Node.js', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
                { label: 'Solidity', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
                { label: 'PostgreSQL', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
                { label: 'AWS', color: 'bg-orange-500/10 border-orange-500/30 text-orange-400' },
                { label: 'Docker', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
              ].map(({ label, color }, i) => (
                <motion.span
                  key={label}
                  className={`text-xs font-mono px-3 py-1 rounded-full border ${color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.07 }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="glow-button min-w-[180px] px-8 py-6 text-base font-semibold group"
              >
                <span>View My Work</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="min-w-[180px] px-8 py-6 text-base font-semibold border-2 border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              {[
                { href: 'https://github.com/weshallsah', icon: Github, label: 'GitHub', color: 'hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800', glow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' },
                { href: 'https://linkedin.com/in/weshallsah', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white', glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' },
                { href: 'mailto:vishalk74064@gmail.com', icon: Mail, label: 'Email', color: 'hover:bg-purple-600 hover:text-white', glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} ${social.glow}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — Terminal */}
          <motion.div
            className="hidden lg:block order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60" />

              <div className="relative terminal shadow-2xl border-2 border-purple-500/20">
                <div className="terminal-header flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="terminal-dot red" />
                    <div className="terminal-dot yellow" />
                    <div className="terminal-dot green" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                    <Terminal className="h-3 w-3" />
                    vishal@dev ~ zsh
                  </span>
                  <div className="w-16" />
                </div>
                <div className="terminal-body text-sm space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <span className="text-purple-400 font-bold">$</span>{' '}
                    <span className="terminal-command">whoami</span>
                  </motion.div>
                  <motion.div
                    className="pl-4 py-2 rounded-lg bg-purple-500/5 border-l-2 border-purple-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    <div className="text-foreground font-semibold">Vishal Sah</div>
                    <div className="text-muted-foreground text-sm">Backend Engineer | Web3 Developer</div>
                    <div className="gradient-text text-sm mt-1 font-medium">Bridging Web2 &amp; Web3</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                  >
                    <span className="text-purple-400 font-bold">$</span>{' '}
                    <span className="terminal-command">cat tech-stack.json</span>
                  </motion.div>
                  <motion.div
                    className="font-mono text-xs sm:text-sm bg-code-bg/50 rounded-lg p-3 border border-purple-500/10"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                  >
                    <div className="text-purple-400">{'{'}</div>
                    <div className="pl-4">
                      <span className="text-emerald-400">&quot;backend&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-cyan-400">[&quot;Node.js&quot;, &quot;Express&quot;, &quot;Spring Boot&quot;]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-emerald-400">&quot;web3&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-pink-400">[&quot;Solidity&quot;, &quot;Hardhat&quot;, &quot;IPFS&quot;]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-emerald-400">&quot;devops&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-orange-400">[&quot;Docker&quot;, &quot;AWS&quot;, &quot;NGINX&quot;]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-emerald-400">&quot;db&quot;</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-blue-400">[&quot;PostgreSQL&quot;, &quot;MongoDB&quot;]</span>
                    </div>
                    <div className="text-purple-400">{'}'}</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                  >
                    <span className="text-purple-400 font-bold">$</span>{' '}
                    <span className="terminal-command">git log --oneline -3</span>
                  </motion.div>
                  <motion.div
                    className="font-mono text-xs space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.4 }}
                  >
                    <div><span className="text-yellow-400">a3f2c1b</span> <span className="text-muted-foreground">deploy: smart contract to mainnet</span></div>
                    <div><span className="text-yellow-400">9d8e7f4</span> <span className="text-muted-foreground">feat: add rate-limiting gateway</span></div>
                    <div><span className="text-yellow-400">2c1a0b9</span> <span className="text-muted-foreground">fix: optimize PostgreSQL queries</span></div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.4 }}
                  >
                    <span className="text-purple-400 font-bold">$</span>
                    <motion.span
                      className="w-2.5 h-5 bg-purple-400 rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 hidden md:flex flex-row items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="text-sm text-muted-foreground group-hover:text-purple-400 transition-colors">
            Swipe to explore
          </span>
          <motion.div
            className="p-2 rounded-full border border-purple-500/30 group-hover:border-purple-500/60 group-hover:bg-purple-500/10 transition-all"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="h-4 w-4 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
