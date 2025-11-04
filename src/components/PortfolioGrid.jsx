import React from 'react';
import { Camera, Film, Music2, PlayCircle } from 'lucide-react';

const items = [
  {
    title: 'Showreel 2025',
    tag: 'Video',
    icon: Film,
    cover:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>`
      ),
  },
  {
    title: 'Motion Studies',
    tag: 'Animazione',
    icon: PlayCircle,
    cover:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#22d3ee"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>`
      ),
  },
  {
    title: 'Aerials',
    tag: 'Drone',
    icon: Camera,
    cover:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#34d399"/><stop offset="100%" stop-color="#10b981"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>`
      ),
  },
  {
    title: 'Live Set',
    tag: 'Musica',
    icon: Music2,
    cover:
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f472b6"/><stop offset="100%" stop-color="#fb7185"/></linearGradient></defs><rect width="1200" height="800" fill="url(#g)"/></svg>`
      ),
  },
];

function Card({ title, tag, icon: Icon, cover }) {
  return (
    <a
      href="#"
      className="group relative block overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 transition hover:shadow-xl hover:shadow-black/20"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      </div>
      <div className="absolute inset-0 flex items-end p-4">
        <div className="flex w-full items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Icon className="h-3.5 w-3.5" /> {tag}
            </span>
            <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
          </div>
          <div className="rounded-full bg-white/10 p-2 text-white/90 opacity-0 backdrop-blur transition group-hover:opacity-100">
            <PlayCircle className="h-5 w-5" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative bg-black px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-geist text-2xl font-semibold sm:text-3xl">Portfolio</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">
              Una selezione di lavori tra video, animazioni, riprese aeree e suono.
            </p>
          </div>
          <a href="#contatti" className="text-sm text-white/70 hover:text-white">
            Richiedi un progetto →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
