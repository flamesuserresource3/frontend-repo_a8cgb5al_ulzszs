import React from 'react';
import Hero from './components/Hero.jsx';
import PortfolioGrid from './components/PortfolioGrid.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="font-geist text-sm font-semibold tracking-tight">
          chiara.
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#about" className="hover:text-white">Chi sono</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Chiara – Tutti i diritti riservati.</p>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
