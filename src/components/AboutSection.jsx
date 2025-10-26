import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="relative isolate py-24" aria-labelledby="about-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.12),transparent_50%)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="about-title" className="text-3xl sm:text-4xl font-bold tracking-tight">What this portfolio is</h2>
            <p className="mt-4 text-white/80">
              A portfolio's main goal is to showcase your identity, skills, and the projects you have created. This Cyber‑Brutalist or Interactive Maximalist design is an unconventional way of doing exactly that.
            </p>
            <p className="mt-4 text-white/80">
              Instead of a clean grid of projects, it invites you to discover work inside a chaotic 3D world. The intentionally ugly yet playful design functions as the first project — demonstrating 3D, physics, and creative coding skills before you even open a case study.
            </p>
            <p className="mt-4 text-white/80">
              It's a portfolio that says, “I am a creative developer who breaks rules,” instead of merely listing “proficient in React.”
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Principles</h3>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                  Discovery over lists — the world is the menu.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                  The design is a demo — skills are visible, not declared.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  Maximalist energy — texture, motion, and personality.
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="text-white/60">Stack</div>
                  <div className="mt-1 font-medium">React, Vite, Tailwind</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="text-white/60">3D</div>
                  <div className="mt-1 font-medium">Spline, R3F-ready</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="text-white/60">Focus</div>
                  <div className="mt-1 font-medium">Interaction & motion</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/40 p-3">
                  <div className="text-white/60">Vibe</div>
                  <div className="mt-1 font-medium">Tech, playful, modern</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
