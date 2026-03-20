import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

// ─── Photo config ─────────────────────────────────────────────────────────────
// Two separate rows — add/remove photos in each independently.
// Drop your images into /public and update the filenames here.
const PHOTOS_TOP = [
  { src: '/sophie-1.JPG',  alt: 'Sophie at her workshop desk' },
  { src: '/sophie-2.JPG',  alt: 'Calligraphy tools laid out' },
  { src: '/sophie-3.JPG',  alt: 'Engraving process close-up' },
  { src: '/sophie-4.JPG',  alt: 'Coffee and workspace details' },
  { src: '/sophie-9.JPG',  alt: 'Coffee and workspace details' },
  { src: '/sophie-12.JPG',  alt: 'Coffee and workspace details' },
]

const PHOTOS_BOTTOM = [
  { src: '/sophie-5.JPG',  alt: 'Finished engraved products' },
  { src: '/sophie-6.JPG',  alt: 'Behind the scenes setup' },
  { src: '/sophie-7.JPG',  alt: 'Sophie working on a piece' },
  { src: '/sophie-8.JPG',  alt: 'Content day flat lay' },
  { src: '/sophie-11.JPG',  alt: 'Coffee and workspace details' },
  { src: '/sophie-10.JPG',  alt: 'Coffee and workspace details' },
]

// ─── Collage strip ─────────────────────────────────────────────────────────────
function DriftingCollage({ photosTop, photosBottom }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '480px' }}>
      <style>{`
        @keyframes driftLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes driftRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .drift-left  { animation: driftLeft  40s linear infinite; }
        .drift-right { animation: driftRight 48s linear infinite; }
        .drift-left:hover,
        .drift-right:hover { animation-play-state: paused; }
      `}</style>

      {/* Row 1 — top photos, drifts left */}
      <div className="absolute top-0 flex gap-4 drift-left" style={{ width: 'max-content' }}>
        {[...photosTop, ...photosTop].map((photo, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 overflow-hidden rounded-sm"
            style={{
              width: i % 3 === 0 ? '280px' : '220px',
              height: '220px',
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ filter: 'brightness(0.97)' }}
            />
          </div>
        ))}
      </div>

      {/* Row 2 — bottom photos, drifts right */}
      <div className="absolute flex gap-4 drift-right" style={{ top: '240px', width: 'max-content' }}>
        {[...photosBottom, ...photosBottom].map((photo, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 overflow-hidden rounded-sm"
            style={{
              width: i % 4 === 0 ? '260px' : '200px',
              height: '220px',
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ filter: 'brightness(0.97)' }}
            />
          </div>
        ))}
      </div>

      {/* Soft edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(to right, white, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{ background: 'linear-gradient(to left, white, transparent)' }} />
    </div>
  )
}

// ─── Article page ──────────────────────────────────────────────────────────────
function FirstPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <a
          href="/notes"
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors uppercase tracking-widest"
        >
          ← Notes
        </a>
      </div>

      {/* Article header */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              17 February 2026
            </p>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-base font-medium text-gray-900 mb-4 leading-snug">
              A Content Day with Sophie from Pure Lettering
            </h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Berlin · Content Creation
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Article body */}
      <article className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3" />

          <div className="md:col-span-9 space-y-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              Some work days are just good from start to finish. A recent content shoot with 
              Sophie — the calligrapher behind Pure Lettering — was one of those days.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              We met at her workshop in Berlin, the kind of space that makes you want to slow 
              down the moment you walk in. Inks, nibs, paper stacked just so, afternoon light 
              coming in at the right angle. Sophie makes great coffee, which helps, and the 
              whole atmosphere made it easy to settle in and work.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              The idea for the day was to build up a solid bank of content for her Instagram — 
              process videos, detail shots, reels showing the work in motion. But Sophie had 
              also engraved a collection of our personal products ahead of the shoot, which 
              gave us a lot more to work with. Seeing familiar objects transformed by her 
              handwriting made for some of the most striking images of the day.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              What I enjoy most about working with Sophie is how naturally the day flows. 
              She's completely at ease in front of the camera because she's just doing what 
              she does — there's no performance to it. She moves through her work with focus 
              and quiet confidence, and that comes through in the footage. My job is mostly 
              to stay out of the way and catch the right moments.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              It's a reminder of why I love this kind of work. Not just the content itself, 
              but spending a few hours inside someone's creative process — watching how they 
              think, how they move, what they care about. That's the part that doesn't show 
              up in the feed, but it shapes everything that does.
            </p>
          </div>
        </div>
      </article>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Drifting photo collage */}
      <section className="py-16">
        <DriftingCollage photosTop={PHOTOS_TOP} photosBottom={PHOTOS_BOTTOM} />
        <p className="text-center text-xs text-gray-400 mt-6 tracking-wide">
          Berlin · Pure Lettering · February 2026
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-xs text-gray-500">© 2026 Kyra Hermann</div>
          <div className="flex gap-8 text-xs">
            <a href="https://github.com/bykyra" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/kyrahermann" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="mailto:hermann.kyra@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </motion.div>
  )
}

export default FirstPost