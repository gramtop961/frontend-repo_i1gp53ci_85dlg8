import React from 'react';
import { ExternalLink, Lock, Rocket, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'VulnLab: Attack & Learn',
    desc: 'Interactive vulnerable lab with guided writeups and live scoring.',
    tags: ['Next.js', 'Docker', 'WebSec'],
    icon: <Rocket className="h-5 w-5" />,
    link: '#',
  },
  {
    title: 'Hardening Toolkit',
    desc: 'Automated hardening scripts and dashboards for Linux servers.',
    tags: ['Python', 'Ansible', 'Grafana'],
    icon: <Lock className="h-5 w-5" />,
    link: '#',
  },
  {
    title: 'Binary Playground',
    desc: 'WASM-based RE playground for quick binary experiments in the browser.',
    tags: ['Rust', 'WASM', 'UI'],
    icon: <Cpu className="h-5 w-5" />,
    link: '#',
  },
];

function ProjectCard({ title, desc, tags, icon, link }) {
  return (
    <a
      href={link}
      className="group block rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:translate-y-[-2px] hover:border-emerald-500/40 hover:bg-zinc-900"
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-2 py-1 text-emerald-300">
          {icon}
          <span className="text-xs">Project</span>
        </div>
        <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:text-white/80" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A selection of experiments and shipped products across security and engineering.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
