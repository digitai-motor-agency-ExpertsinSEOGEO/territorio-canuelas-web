'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { projects, type Project, type ProjectStatus } from '@/data/projects'
import ProjectModal from './ProjectModal'
import { cn, BLUR_DATA_URL } from '@/lib/utils'

type Filter = 'todos' | ProjectStatus

const filters: { value: Filter; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'en-construccion', label: 'En construcción' },
  { value: 'finalizado', label: 'Finalizado' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('todos')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'todos'
      ? projects
      : projects.filter((p) => p.status === activeFilter)

  return (
    <>
      <section id="proyectos" className="section-padding bg-crema-50">
        <div className="container-xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-oliva-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Nuestros desarrollos
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-tierra-900 mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cada proyecto, una{' '}
              <span className="italic text-oliva-600">historia nueva</span>
            </h2>
            <p className="text-tierra-600 text-lg max-w-xl mx-auto">
              Elegís el entorno, nosotros te guiamos en cada paso.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-2 mb-10 flex-wrap"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-250',
                  activeFilter === f.value
                    ? 'bg-oliva-600 text-white shadow-sm'
                    : 'bg-white text-tierra-600 border border-tierra-200 hover:border-oliva-300 hover:text-oliva-700'
                )}
              >
                {f.label}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: 'circOut',
                  }}
                >
                  <ProjectCard
                    project={project}
                    onOpen={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-tierra-500 py-12"
            >
              No hay proyectos con ese filtro activo.
            </motion.p>
          )}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer"
      onClick={onOpen}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-60 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-semibold',
              project.status === 'en-construccion'
                ? 'bg-dorado-400/90 text-tierra-900 backdrop-blur-sm'
                : 'bg-oliva-600/90 text-white backdrop-blur-sm'
            )}
          >
            {project.statusLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-oliva-600 text-xs font-semibold tracking-widest uppercase mb-1">
          {project.tagline}
        </p>
        <h3
          className="text-xl font-bold text-tierra-900 mb-1.5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.name}
        </h3>

        <div className="flex items-center gap-1.5 text-tierra-400 mb-3">
          <MapPin size={12} />
          <span className="text-xs">{project.location}</span>
        </div>

        <p className="text-tierra-600 text-sm leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        <button className="flex items-center gap-2 text-oliva-600 text-sm font-semibold group/btn hover:text-oliva-700 transition-colors duration-200">
          Ver más
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}
