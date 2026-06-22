'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react'
import type { Project } from '@/data/projects'
import { BLUR_DATA_URL } from '@/lib/utils'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (project) {
      setActiveImage(0)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight')
        setActiveImage((p) => (p + 1) % project.images.length)
      if (e.key === 'ArrowLeft')
        setActiveImage((p) => (p - 1 + project.images.length) % project.images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  const prev = () => {
    if (!project) return
    setActiveImage((p) => (p - 1 + project.images.length) % project.images.length)
  }
  const next = () => {
    if (!project) return
    setActiveImage((p) => (p + 1) % project.images.length)
  }

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 z-[80] bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-modal)] flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery */}
            <div className="relative flex-1 min-h-[260px] lg:min-h-0 bg-tierra-900">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[activeImage]}
                    alt={`${project.name} — imagen ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className="h-1 rounded-full transition-all duration-300 bg-white"
                    style={{
                      width: i === activeImage ? 24 : 8,
                      opacity: i === activeImage ? 1 : 0.45,
                    }}
                    aria-label={`Ver imagen ${i + 1}`}
                  />
                ))}
              </div>

              {/* Status badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'en-construccion'
                      ? 'bg-dorado-400/90 text-tierra-900'
                      : 'bg-oliva-600/90 text-white'
                  }`}
                >
                  {project.statusLabel}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-[380px] xl:w-[420px] flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-crema-200">
                <div>
                  <p className="text-oliva-600 text-xs font-semibold tracking-widest uppercase mb-1">
                    {project.tagline}
                  </p>
                  <h2
                    className="text-2xl font-bold text-tierra-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-1.5 text-tierra-500">
                    <MapPin size={13} />
                    <span className="text-xs">{project.location}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 w-9 h-9 rounded-full bg-tierra-100 hover:bg-tierra-200 text-tierra-700 flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-5">
                <p className="text-tierra-700 text-sm leading-relaxed">
                  {project.fullDescription}
                </p>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-tierra-400 mb-3">
                    Características
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-tierra-700">
                        <CheckCircle2 size={14} className="text-oliva-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-crema-100 rounded-xl px-4 py-3 text-sm">
                  <span className="text-tierra-500 text-xs uppercase tracking-wider block mb-0.5">
                    Superficie
                  </span>
                  <span className="font-semibold text-tierra-800">{project.area}</span>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-crema-200 bg-crema-50">
                <a
                  href="#contacto"
                  onClick={onClose}
                  className="w-full block py-3.5 px-6 bg-oliva-600 hover:bg-oliva-700 text-white rounded-full font-semibold text-sm text-center transition-all duration-300 hover:shadow-md"
                >
                  Me interesa este proyecto
                </a>
                <p className="mt-3 text-center text-xs text-tierra-400">
                  Te contactamos a la brevedad sin compromisos
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
