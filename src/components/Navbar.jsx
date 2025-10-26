import React, { useState } from 'react';
import { Rocket, Github, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-black">
                <Rocket size={18} />
              </span>
              <span className="text-sm tracking-widest uppercase text-white/80">Maximalist</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-white/70 hover:text-white transition">About</a>
              <a href="#work" className="text-white/70 hover:text-white transition">Work</a>
              <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-white/90 hover:bg-white/20"
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

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                <a onClick={() => setOpen(false)} href="#about" className="text-white/80">About</a>
                <a onClick={() => setOpen(false)} href="#work" className="text-white/80">Work</a>
                <a onClick={() => setOpen(false)} href="#contact" className="text-white/80">Contact</a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white/90"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
