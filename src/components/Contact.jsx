import React from 'react';
import { Mail, Send, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contatti" className="relative bg-black px-6 pb-20 pt-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-geist text-2xl font-semibold sm:text-3xl">Contatti</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Raccontami la tua idea: rispondo entro 24 ore con una proposta chiara e tempi definiti.
            </p>
          </div>
          <a
            href="mailto:hello@artist.studio"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Send className="h-4 w-4" /> Scrivimi
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a
            href="mailto:hello@artist.studio"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-white/80 transition hover:border-white/20 hover:text-white"
          >
            <Mail className="h-5 w-5" /> hello@artist.studio
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-white/80 transition hover:border-white/20 hover:text-white"
          >
            <Instagram className="h-5 w-5" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-white/80 transition hover:border-white/20 hover:text-white"
          >
            <Youtube className="h-5 w-5" /> YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
