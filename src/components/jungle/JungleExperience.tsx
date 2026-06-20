'use client'

import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, Trophy, Briefcase } from 'lucide-react'
import { Scene3D } from './Scene3D'
import { getLightingPreset, type LightingPreset } from './lighting'
import {
  personalInfo,
  projects,
  skills,
  experiences,
  hackathons,
  contactInfo,
} from '@/data/portfolio'

// ─── Typing animation ─────────────────────────────────────────────────────────
function useTyping(words: string[], speed = 90, pauseMs = 2000) {
  const [text, setText] = useState('')
  const [wIdx, setWIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    const delay = deleting ? 45 : speed
    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), pauseMs)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setWIdx(p => (p + 1) % words.length)
        return
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, wIdx, words, speed, pauseMs])

  return text
}

// ─── Scroll-triggered fade-in ─────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = '',
  y = 28,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const GLASS = 'bg-black/55 backdrop-blur-md border border-white/10 rounded-2xl'

const CATEGORY_COLORS: Record<string, string> = {
  languages:      'border-violet-500/40 text-violet-300 bg-violet-900/20',
  backend:        'border-emerald-500/40 text-emerald-300 bg-emerald-900/20',
  databases:      'border-blue-500/40 text-blue-300 bg-blue-900/20',
  web3:           'border-amber-500/40 text-amber-300 bg-amber-900/20',
  infrastructure: 'border-cyan-500/40 text-cyan-300 bg-cyan-900/20',
  tools:          'border-rose-500/40 text-rose-300 bg-rose-900/20',
  frontend:       'border-pink-500/40 text-pink-300 bg-pink-900/20',
}

const SECTION_LABELS = ['Home', 'About', 'Skills', 'Projects', 'Hackathons', 'Experience', 'Contact']

// ─── Minimal sticky nav ───────────────────────────────────────────────────────
function MinimalNav({ accent }: { accent: string }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <span className="font-mono text-white/90 text-sm font-semibold tracking-wider">
        <span style={{ color: accent }}>{'>'}</span> vishal.sah
      </span>
      <div className="hidden md:flex items-center gap-6 text-xs font-mono text-white/45">
        {['about', 'skills', 'projects', 'contact'].map(s => (
          <a
            key={s}
            href={`#${s}`}
            className="hover:text-white/90 transition-colors"
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  )
}

// ─── Right-side section dot progress ─────────────────────────────────────────
function SectionDots({ active, accent }: { active: number; accent: string }) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {SECTION_LABELS.map((label, i) => (
        <button
          key={i}
          onClick={() => document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' })}
          title={label}
          className="group flex items-center justify-end gap-2"
        >
          <span className="text-xs text-white/35 font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width:  i === active ? 8 : 5,
              height: i === active ? 8 : 5,
              background: i === active ? accent : 'rgba(255,255,255,0.28)',
              boxShadow: i === active ? `0 0 8px ${accent}` : 'none',
            }}
          />
        </button>
      ))}
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection({ preset }: { preset: LightingPreset }) {
  const role = useTyping([
    'Backend Engineer',
    'Web3 Developer',
    'System Architect',
    'Protocol Designer',
  ])

  return (
    <section id="section-0" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono mb-6"
          style={{
            borderColor: `${preset.accent}55`,
            color: preset.accent,
            background: `${preset.accent}14`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: preset.accent }}
          />
          Available for opportunities
        </motion.div>

        <motion.div
          className="h-10 flex items-center justify-center gap-2 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-white/35 text-xl font-mono">//</span>
          <span className="text-lg sm:text-xl font-mono text-white/75">
            {role}
            <span
              className="inline-block w-0.5 ml-1 animate-pulse align-middle"
              style={{ height: '1.2em', background: preset.accent }}
            />
          </span>
        </motion.div>

        <motion.p
          className="text-white/55 text-base sm:text-lg max-w-md mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          Building the bridge between traditional systems and the decentralised future —
          scalable backends, smart contracts, protocol design.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {contactInfo.socialLinks.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-white/55 hover:text-white hover:border-white/30 transition-all hover:-translate-y-0.5"
            >
              {s.icon === 'github'   && <Github   size={17} />}
              {s.icon === 'linkedin' && <Linkedin size={17} />}
              {s.icon === 'twitter'  && <Twitter  size={17} />}
            </a>
          ))}
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: preset.accent, color: '#000' }}
          >
            <Mail size={14} />
            Get in touch
          </a>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-1.5 text-white/25 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          scroll to dive deeper
        </motion.div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection({ preset }: { preset: LightingPreset }) {
  return (
    <section id="section-1" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div id="about" className="max-w-3xl mx-auto w-full scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-5">
          <FadeIn delay={0.1}>
            <div className={`${GLASS} p-6 h-full`}>
              <p className="text-white/70 leading-relaxed text-sm sm:text-[0.9rem]">
                {personalInfo.bio}
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-3">
            {([
              { icon: '📍', label: 'Location',    value: contactInfo.location },
              { icon: '⚙️', label: 'Focus',       value: 'Backend Systems & Web3 Protocols' },
              { icon: '🌱', label: 'Currently',   value: 'Building decentralised access-control systems' },
              { icon: '🏆', label: 'Hackathons',  value: '3+ competitions · 1 bounty win' },
            ] as const).map(({ icon, label, value }, i) => (
              <FadeIn key={label} delay={0.1 + i * 0.07}>
                <div className={`${GLASS} p-4 flex items-start gap-3`}>
                  <span className="text-lg mt-0.5 leading-none">{icon}</span>
                  <div>
                    <div className="text-white/35 text-xs font-mono mb-0.5">{label}</div>
                    <div className="text-white/80 text-sm">{value}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function SkillsSection({ preset }: { preset: LightingPreset }) {
  const categories = [
    { key: 'languages',      label: 'Languages',      emoji: '📝' },
    { key: 'backend',        label: 'Backend',        emoji: '⚙️' },
    { key: 'databases',      label: 'Databases',      emoji: '🗄️' },
    { key: 'web3',           label: 'Web3',           emoji: '⛓️' },
    { key: 'infrastructure', label: 'Infrastructure', emoji: '☁️' },
    { key: 'tools',          label: 'Tools',          emoji: '🔧' },
  ]

  return (
    <section id="section-2" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div id="skills" className="max-w-4xl mx-auto w-full scroll-mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ key, label, emoji }, ci) => {
            const catSkills = skills.filter(s => s.category === key)
            if (!catSkills.length) return null
            return (
              <FadeIn key={key} delay={ci * 0.07}>
                <div className={`${GLASS} p-5 h-full`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-base leading-none">{emoji}</span>
                    <span className="text-white/85 font-semibold text-sm">{label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map(skill => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded-full text-xs font-mono border ${CATEGORY_COLORS[key] ?? 'border-white/20 text-white/55'}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function ProjectsSection({ preset }: { preset: LightingPreset }) {
  return (
    <section id="section-3" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div id="projects" className="max-w-5xl mx-auto w-full scroll-mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <div className={`${GLASS} p-5 flex flex-col h-full hover:border-white/20 transition-all`}>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-white/88 font-semibold text-sm leading-tight">{p.title}</h3>
                  <div className="flex gap-1.5 flex-shrink-0 pt-0.5">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/35 hover:text-white/90 transition-colors"
                      >
                        <Github size={13} />
                      </a>
                    )}
                    {p.liveUrl && p.liveUrl !== 'https://example.com' && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/35 hover:text-white/90 transition-colors"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-white/50 text-xs leading-relaxed mb-4 flex-1 line-clamp-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.technologies.slice(0, 5).map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-xs font-mono border border-white/10 text-white/40"
                    >
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 5 && (
                    <span className="text-[10px] text-white/25 font-mono self-end">
                      +{p.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Hackathons ───────────────────────────────────────────────────────────────
function HackathonsSection({ preset }: { preset: LightingPreset }) {
  return (
    <section id="section-4" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-5">
          {hackathons.map((h, i) => (
            <FadeIn key={h.id} delay={i * 0.1}>
              <div className={`${GLASS} p-6`}>
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div>
                    <h3 className="text-white/88 font-semibold text-sm sm:text-base leading-snug">
                      {h.name}
                    </h3>
                    <p className="text-white/35 text-xs font-mono mt-0.5">{h.organizer}</p>
                  </div>
                  <span
                    className="flex-shrink-0 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      background: h.result.includes('Winner')
                        ? `${preset.accent}20`
                        : 'rgba(255,255,255,0.05)',
                      color: h.result.includes('Winner')
                        ? preset.accent
                        : 'rgba(255,255,255,0.35)',
                      border: `1px solid ${h.result.includes('Winner') ? preset.accent + '45' : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    {h.result.includes('Winner') && <Trophy size={9} />}
                    {h.result}
                  </span>
                </div>

                <p className="text-white/55 text-xs font-mono mb-2">
                  project:{' '}
                  <span className="text-white/75 font-semibold">{h.project}</span>
                </p>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{h.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {h.technologies.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-amber-500/30 text-amber-300/65 bg-amber-900/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {h.githubUrl && (
                    <a
                      href={h.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/80 transition-colors font-mono"
                    >
                      <Github size={11} /> code
                    </a>
                  )}
                  {h.liveUrl && (
                    <a
                      href={h.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/80 transition-colors font-mono"
                    >
                      <ExternalLink size={11} /> live
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
function ExperienceSection({ preset }: { preset: LightingPreset }) {
  return (
    <section id="section-5" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div className="max-w-3xl mx-auto w-full">
        <div className="relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-3.5 top-2 bottom-4 w-px"
            style={{
              background: `linear-gradient(to bottom, ${preset.accent}90, transparent)`,
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.12}>
                <div className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-8 top-5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: preset.accent,
                      background: preset.accentDim,
                      boxShadow: `0 0 10px ${preset.accent}70`,
                    }}
                  />

                  <div className={`${GLASS} p-6`}>
                    <div className="flex items-start justify-between mb-3 gap-3">
                      <div>
                        <h3 className="text-white/90 font-bold text-base">{exp.position}</h3>
                        <p className="text-sm font-mono mt-0.5" style={{ color: preset.accent }}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-white/30 text-xs font-mono flex-shrink-0 flex items-center gap-1 mt-0.5">
                        <Briefcase size={10} />
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-cyan-500/30 text-cyan-300/65 bg-cyan-900/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection({ preset }: { preset: LightingPreset }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${contactInfo.email}?subject=Portfolio inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`
    setSent(true)
  }

  return (
    <section id="section-6" className="min-h-screen flex flex-col justify-end px-4 pb-20">
      <div id="contact" className="max-w-3xl mx-auto w-full scroll-mt-20">
        <FadeIn>
          <p className="text-white/35 text-xs font-mono mb-8">
            {preset.timeOfDay === 'night'
              ? '// you found the hidden lagoon'
              : preset.timeOfDay === 'dusk'
              ? '// settling in at the jungle heart'
              : '// the heart of the jungle — welcome'}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Contact details */}
          <FadeIn delay={0.1}>
            <div className={`${GLASS} p-6 flex flex-col gap-5 h-full`}>
              <div>
                <p className="text-white/30 text-xs font-mono mb-1">email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:opacity-80 transition-opacity"
                  style={{ color: preset.accent }}
                >
                  {contactInfo.email}
                </a>
              </div>

              {contactInfo.phone && (
                <div>
                  <p className="text-white/30 text-xs font-mono mb-1">phone</p>
                  <p className="text-white/75 text-sm">{contactInfo.phone}</p>
                </div>
              )}

              <div>
                <p className="text-white/30 text-xs font-mono mb-1">location</p>
                <p className="text-white/75 text-sm flex items-center gap-1.5">
                  <MapPin size={11} className="opacity-40" />
                  {contactInfo.location}
                </p>
              </div>

              <div>
                <p className="text-white/30 text-xs font-mono mb-3">socials</p>
                <div className="flex gap-2">
                  {contactInfo.socialLinks.map(s => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/45 hover:text-white hover:border-white/25 transition-all"
                      title={s.platform}
                    >
                      {s.icon === 'github'   && <Github   size={15} />}
                      {s.icon === 'linkedin' && <Linkedin size={15} />}
                      {s.icon === 'twitter'  && <Twitter  size={15} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Message form */}
          <FadeIn delay={0.18}>
            <form onSubmit={handleSubmit} className={`${GLASS} p-6 flex flex-col gap-4`}>
              <input
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white/85 text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white/85 text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors"
              />
              <textarea
                placeholder="Your message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white/85 text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-sm font-semibold font-mono transition-all hover:-translate-y-0.5 hover:opacity-90"
                style={{ background: preset.accent, color: '#000' }}
              >
                {sent ? '✓ opening mail client…' : '→ send message'}
              </button>
            </form>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-white/18 text-xs font-mono mt-16">
            crafted with three.js · next.js · framer-motion · {new Date().getFullYear()} · vishal sah
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function JungleExperience() {
  const [preset, setPreset] = useState<LightingPreset | null>(null)
  const [activeSection, setActiveSection] = useState(0)

  // Resolve time-of-day preset on the client
  useEffect(() => {
    setPreset(getLightingPreset())
  }, [])

  // Override globals.css overflow:hidden so the page is natively scrollable
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHO = html.style.overflow
    const prevHH = html.style.height
    const prevBO = body.style.overflow
    const prevBH = body.style.height
    html.style.overflow = 'auto'
    html.style.height   = 'auto'
    body.style.overflow = 'auto'
    body.style.height   = 'auto'
    return () => {
      html.style.overflow = prevHO
      html.style.height   = prevHH
      body.style.overflow = prevBO
      body.style.height   = prevBH
    }
  }, [])

  // Track which section is visible for the dot nav
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    for (let i = 0; i < 7; i++) {
      const el = document.getElementById(`section-${i}`)
      if (!el) continue
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i)
        },
        { threshold: 0.4 },
      )
      obs.observe(el)
      observers.push(obs)
    }
    return () => observers.forEach(o => o.disconnect())
  }, [])

  if (!preset) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#050c17]">
        <span className="text-white/25 text-xs font-mono animate-pulse">
          entering the jungle…
        </span>
      </div>
    )
  }

  return (
    <div style={{ background: preset.skyBg }}>
      {/* ── Fixed 3-D canvas, behind everything ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Canvas
          camera={{ fov: 60, near: 0.1, far: 160, position: [0, 3, 32] }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
        >
          <Scene3D preset={preset} />
        </Canvas>
      </div>

      {/* ── Scrollable HTML layer ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <MinimalNav accent={preset.accent} />
        <SectionDots active={activeSection} accent={preset.accent} />

        <HeroSection       preset={preset} />
        <AboutSection      preset={preset} />
        <SkillsSection     preset={preset} />
        <ProjectsSection   preset={preset} />
        <HackathonsSection preset={preset} />
        <ExperienceSection preset={preset} />
        <ContactSection    preset={preset} />
      </div>
    </div>
  )
}
