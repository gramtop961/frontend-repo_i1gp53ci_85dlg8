import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const email = 'hacker@portfolio.dev';

  return (
    <section id="contact" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Want to collaborate, hire, or just chat about security and building things? I’m open to
            interesting challenges.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200"
          >
            <Mail className="h-5 w-5" />
            {email}
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
