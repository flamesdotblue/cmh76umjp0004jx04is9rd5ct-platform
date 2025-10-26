import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, MousePointer, Move, ZoomIn, Grid, ExternalLink, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,.35), transparent)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,.28), transparent)' }}
        animate={{ x: [0, -25, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  );
}

function ControlsHUD() {
  const items = [
    { icon: MousePointer, label: 'Drag to orbit' },
    { icon: ZoomIn, label: 'Scroll to zoom' },
    { icon: Move, label: 'Pan with right click' },
    { icon: Grid, label: 'Discover projects in 3D' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-6 left-1/2 z-[5] -translate-x-1/2"
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item, idx) => (
          <div
            key={item.label + idx}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md"
          >
            <item.icon size={14} className="text-white/70" /> {item.label}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function SocialRail() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto absolute right-4 top-1/2 z-[5] -translate-y-1/2"
    >
      <div className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md">
        <a
          href="mailto:hello@example.com"
          className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20"
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white hover:bg-white/20"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 16 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px);
      my.set(py);
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  const handleExplore = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full" aria-label="Interactive 3D Hero">
      <div className="absolute inset-0" ref={ref}>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <GradientOrbs />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/15 to-black" />

      <ControlsHUD />
      <SocialRail />

      <motion.div
        className="relative z-10 flex h-full items-end"
        style={{ perspective: 1200 }}
      >
        <motion.div
          style={{ rotateX: rx, rotateY: ry }}
          className="mx-auto mb-20 w-full max-w-7xl px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none select-none"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 px-3 py-1 text-xs text-fuchsia-100">
              <Sparkles size={14} /> Interactive Maximalist
            </div>
            <h1 className="mt-3 text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
              Cyber-Brutalist Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-white/85">
              A chaotic, playful 3D world where discovery is the interface. The design itself is the first project — proving 3D, physics, and creative coding fluency instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <button
              onClick={handleExplore}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-black hover:bg-white/90 transition-colors"
            >
              Explore Projects <ExternalLink size={16} />
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
