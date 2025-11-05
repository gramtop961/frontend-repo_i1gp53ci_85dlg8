import React from 'react';
import { Code, Shield, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Terminal className="h-5 w-5 text-emerald-400" />, label: 'Offensive Security' },
    { icon: <Shield className="h-5 w-5 text-emerald-400" />, label: 'Secure Architecture' },
    { icon: <Code className="h-5 w-5 text-emerald-400" />, label: 'Full‑Stack Engineering' },
  ];

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-zinc-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            I’m a hacker and product engineer who loves tearing systems apart and rebuilding them better.
            I focus on security, performance, and developer experience to ship products that are both robust and fun.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                {s.icon}
              </div>
              <p className="font-medium">{s.label}</p>
              <p className="mt-2 text-sm text-white/70">
                Practical, hands‑on experience across red/blue teaming, secure design, and building
                production‑grade web apps and tooling.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
