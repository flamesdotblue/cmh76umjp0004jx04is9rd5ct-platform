import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full" aria-label="Interactive 3D Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto mb-24 w-full max-w-7xl px-4">
          <div className="pointer-events-none select-none">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Cyber-Brutalist Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              A chaotic, playful 3D world that makes discovery the interface. Drag, pan, and zoom through the scene. The design itself is the first project.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={scrollToAbout}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black hover:bg-white/90"
            >
              Explore the Concept
            </button>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20"
            >
              <Github size={18} /> Source
            </a>
            <a
              href="mailto:hello@example.com"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/20 px-4 py-2 font-medium text-fuchsia-100 hover:bg-fuchsia-500/30"
            >
              <Mail size={18} /> Contact
            </a>
          </div>

          <div className="pointer-events-none mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
            Interactive scene loaded — try dragging and scrolling
          </div>
        </div>
      </div>
    </section>
  );
}
