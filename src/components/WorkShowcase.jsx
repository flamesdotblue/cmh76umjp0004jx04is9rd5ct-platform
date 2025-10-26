import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Camera, Cube, Code, Play } from 'lucide-react';

const projects = [
  {
    title: 'Procedural Playground',
    tag: 'WebGL / R3F',
    desc: 'Generative shapes, noise-driven motion, post-processing.
',
    icon: Cube,
    hue: 'from-fuchsia-500/20 to-cyan-500/10',
  },
  {
    title: 'Cinematic Scroll',
    tag: 'Motion / Framer',
    desc: 'Scroll-bound camera work and scene choreography.
',
    icon: Camera,
    hue: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    title: 'Physics Lab',
    tag: 'Rapier / Cannon',
    desc: 'Playful stacks, constraints, and soft-body experiments.
',
    icon: Play,
    hue: 'from-emerald-500/20 to-fuchsia-500/10',
  },
  {
    title: 'Design Systems',
    tag: 'UI / Tailwind',
    desc: 'Shadcn + Radix + tokens: accessible and expressive.
',
    icon: Code,
    hue: 'from-purple-500/20 to-pink-500/10',
  },
  {
    title: 'Realtime Collab',
    tag: 'WebSocket / CRDT',
    desc: 'Shared cursors, presence, and multiplayer UI.
',
    icon: Code,
    hue: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    title: 'Volumetric UI',
    tag: 'Three.js / GLSL',
    desc: 'Fog, god rays, and layered depth interactions.
',
    icon: Cube,
    hue: 'from-sky-500/20 to-indigo-500/10',
  },
];

function Card({ item, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset]"
      style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))` }}
    >
      <div className={`relative h-full rounded-[10px] bg-gradient-to-b ${item.hue}`}>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ backgroundImage: 'radial-gradient(650px 200px at 0% 0%, rgba(255,255,255,0.08), transparent), radial-gradient(400px 200px at 100% 100%, rgba(255,255,255,0.06), transparent)'}} />
        <div className="relative z-10 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[11px] text-white/70">
              <item.icon size={14} /> {item.tag}
            </div>
            <div className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/10 p-1 text-white/80 group-hover:bg-white/20 transition-colors">
              <ExternalLink size={14} />
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-tight">{item.title}</h3>
          <p className="mt-1 text-sm text-white/75 leading-relaxed">{item.desc}</p>
        </div>
        <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:scale-125" />
      </div>
    </motion.a>
  );
}

export default function WorkShowcase() {
  return (
    <section id="work" className="relative isolate py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.12),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 max-w-2xl text-white/80"
            >
              Discovery over lists: each project is a doorway to playful systems, motion, and emergent behavior.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-white/10"><Cube size={14} /></span>
            Real‑time, shaders, physics, and narrative UI.
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Card key={p.title} item={p} i={i} />
          ))}
        </div>

        <motion.div
          id="capabilities"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              title: '3D & Creative Tech',
              bullet: ['React Three Fiber', 'Shaders / GLSL', 'Physics (Rapier/Cannon)'],
            },
            {
              title: 'Motion & Systems',
              bullet: ['Framer Motion', 'Scroll choreography', 'State machines'],
            },
            {
              title: 'Design & DX',
              bullet: ['Tailwind + Radix', 'A11y & theming', 'Tooling & performance'],
            },
          ].map((cap, idx) => (
            <div key={cap.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{cap.title}</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                {cap.bullet.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
