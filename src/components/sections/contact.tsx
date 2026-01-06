'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { contactInfo } from '@/data/portfolio';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, MessageSquare, Sparkles, Zap, ArrowRight } from 'lucide-react';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
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

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const templateParams = {
      from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: contactInfo.email,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or contact me directly.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-50" />
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/15 to-primary/15 rounded-full blur-3xl"
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
            <Mail className="h-3 w-3" />
            Contact
          </Badge>
          <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info - 2 columns */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="modern-card border-2 border-transparent hover:border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 border border-primary/20">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <span>Contact Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-border/50 hover:border-primary/30 transition-all group"
                    whileHover={{ x: 5, scale: 1.01 }}
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {contactInfo.email}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.a>

                  {contactInfo.phone && (
                    <motion.a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent border border-border/50 hover:border-emerald-500/30 transition-all group"
                      whileHover={{ x: 5, scale: 1.01 }}
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                        <p className="font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
                          {contactInfo.phone}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )}

                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-500/5 to-transparent border border-border/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-500">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="font-semibold text-foreground">{contactInfo.location}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="modern-card border-2 border-transparent hover:border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-primary/20 border border-cyan-500/20">
                      <Sparkles className="h-5 w-5 text-cyan-500" />
                    </div>
                    <span>Connect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-5">
                    Follow me on social media for updates on my latest projects and tech insights.
                  </p>
                  <div className="flex gap-3">
                    {contactInfo.socialLinks.map((link, index) => {
                      const Icon = socialIcons[link.icon as keyof typeof socialIcons] || Github;
                      const colors = index === 0 ? 'hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800' :
                                    index === 1 ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-sky-500 hover:text-white';
                      return (
                        <motion.a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground transition-all duration-300 ${colors}`}
                          aria-label={link.platform}
                          whileHover={{ scale: 1.1, y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick response note - Enhanced */}
            <motion.div
              variants={itemVariants}
              className="relative p-5 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-pink-500/10 to-cyan-500/15" />
              <div className="absolute inset-px rounded-xl bg-card" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 mb-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="h-4 w-4 text-amber-500" />
                  </motion.div>
                  <span className="text-primary font-bold">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-pink-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-50" />

              <Card className="relative modern-card border-2 border-transparent hover:border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/20">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <span>Send a Message</span>
                  </CardTitle>
                </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className={`modern-input ${focusedField === 'firstName' ? 'border-primary ring-2 ring-primary/20' : ''}`}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className={`modern-input ${focusedField === 'lastName' ? 'border-primary ring-2 ring-primary/20' : ''}`}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className={`modern-input ${focusedField === 'email' ? 'border-primary ring-2 ring-primary/20' : ''}`}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      className={`modern-input ${focusedField === 'subject' ? 'border-primary ring-2 ring-primary/20' : ''}`}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`modern-input resize-none ${focusedField === 'message' ? 'border-primary ring-2 ring-primary/20' : ''}`}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-6 text-base font-medium transition-all duration-300 ${
                      isSubmitted
                        ? 'bg-green-500 hover:bg-green-500'
                        : 'glow-button'
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </motion.div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>

                  {error && (
                    <motion.div
                      className="flex items-center gap-2 text-red-500 text-sm p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
