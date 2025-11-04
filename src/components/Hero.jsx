import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient edges to improve text legibility without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-geist text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Visioni in movimento
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          Video, animazioni, pilotaggio drone e musica elettronica. Un portfolio essenziale che mette al centro l’immagine e il suono.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#portfolio"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Esplora il portfolio
          </a>
          <a
            href="#contatti"
            className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-md transition hover:border-white/60 hover:text-white"
          >
            Contatti
          </a>
        </div>
      </div>
    </section>
  );
}
