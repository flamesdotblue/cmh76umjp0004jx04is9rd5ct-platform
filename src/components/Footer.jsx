import React from 'react';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Let’s build something weird.</h3>
            <p className="mt-1 text-white/70">Available for creative web, 3D, and interaction work.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Interactive Maximalist — Built with React + Spline</p>
      </div>
    </footer>
  );
}
