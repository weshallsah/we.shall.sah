'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

const SOCIAL_ICONS = { github: Github, linkedin: Linkedin, twitter: Twitter };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: 'easeOut' as const },
});

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${fd.get('firstName')} ${fd.get('lastName')}`,
          from_email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
          to_email: contactInfo.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="section-inner">
        <motion.span className="section-label" {...fadeUp(0)}>Contact</motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
          {...fadeUp(0.05)}
        >
          Get in Touch
        </motion.h2>
        <motion.p className="text-muted-foreground mb-12 max-w-xl" {...fadeUp(0.1)}>
          Open to new opportunities, interesting projects, or a chat about technology.
        </motion.p>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div className="md:col-span-2 space-y-4" {...fadeUp(0.12)}>
            <div className="card-clean p-6 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="p-2 rounded-lg bg-secondary border border-border group-hover:border-primary/40 transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {contactInfo.phone && (
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-secondary border border-border flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Phone</p>
                    <p className="text-sm text-foreground">{contactInfo.phone}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary border border-border flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Location</p>
                  <p className="text-sm text-foreground">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="card-clean p-6">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-4">Social</p>
              <div className="flex gap-2">
                {contactInfo.socialLinks.map(s => {
                  const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS] ?? Github;
                  return (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.platform}
                      className="icon-link"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="md:col-span-3" {...fadeUp(0.16)}>
            <form onSubmit={handleSubmit} className="card-clean p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea…"
                  required
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`btn-primary w-full justify-center py-3 ${status === 'sent' ? 'bg-green-600 hover:opacity-100' : ''}`}
              >
                {status === 'sending' && (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message sent!
                  </>
                )}
                {(status === 'idle' || status === 'error') && (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>

              {status === 'error' && (
                <motion.p
                  className="flex items-center gap-2 text-sm text-red-500"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Failed to send. Please email me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
