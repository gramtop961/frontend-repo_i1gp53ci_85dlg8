import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-zinc-950 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Hacker Portfolio — Built with love, coffee, and curiosity.
      </footer>
    </div>
  );
}
