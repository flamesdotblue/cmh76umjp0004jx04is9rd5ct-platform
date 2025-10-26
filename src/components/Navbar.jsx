import React, { useEffect, useState } from 'react';
import { Rocket, Github, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(12,12,12,0.7)' : 'rgba(12,12,12,0.3)',
            backdropFilter: scrolled ? 'blur(10px)' : 'blur(6px)',
          }}
          className="mt-4 rounded-xl border border-white/10"
          style={{ boxShadow: '0 10px 40px rgba(255,255,255,0.05) inset' }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-black shadow-[0_0_0_2px_rgba(255,255,255,0.15)_inset]">
                <Rocket size={18} />
              </span>
              <span className="text-sm tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">Maximalist</span>
            </a>

            <nav className="hidden md:flex items-center gap-1 text-sm">
              {[
                { href: '#work', label: 'Work' },
                { href: '#capabilities', label: 'Capabilities' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-md px-3 py-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <motion.span
                    layoutId={`underline-${item.label}`}
                    className="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-400/70 to-fuchsia-400/0"
                    initial={false}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              ))}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-white/90 hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github size={16} /> GitHub
              </a>
            </nav>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/10 text-white/90"
              aria-label="Toggle Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-white/10 px-4"
              >
                <div className="flex flex-col gap-3 py-3">
                  <a onClick={() => setOpen(false)} href="#work" className="text-white/85">Work</a>
                  <a onClick={() => setOpen(false)} href="#capabilities" className="text-white/85">Capabilities</a>
                  <a onClick={() => setOpen(false)} href="#contact" className="text-white/85">Contact</a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white/90"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </header>
  );
}
