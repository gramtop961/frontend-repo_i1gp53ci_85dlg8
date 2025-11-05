import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="text-xs tracking-wide text-white/80">Hacker • Builder • Problem Solver</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Crafting secure, delightful, and high‑performance experiences
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          I reverse‑engineer complexity into elegant solutions. From low‑level exploits to full‑stack
          products, I turn ideas into interactive reality.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            <Rocket className="h-5 w-5" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Terminal className="h-5 w-5" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
