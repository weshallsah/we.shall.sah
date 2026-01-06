'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-muted flex-shrink-0" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative z-10 flex-shrink-0 w-14 h-7 rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 overflow-hidden ${
        isDark
          ? 'bg-slate-700 border-slate-600'
          : 'bg-amber-100 border-amber-200'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className={`absolute inset-0 rounded-full ${isDark ? 'bg-blue-400/40' : 'bg-yellow-400/40'}`}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* Sliding knob */}
      <motion.span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md flex items-center justify-center ${
          isDark
            ? 'bg-slate-900 border border-slate-600'
            : 'bg-white border border-amber-200'
        }`}
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5 text-blue-300" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
}
