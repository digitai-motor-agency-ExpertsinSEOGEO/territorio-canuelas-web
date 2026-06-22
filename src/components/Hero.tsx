'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/proyectos/uribelarra/3.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/videos/territorio.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/65 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent z-10" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-dorado-300 text-sm font-medium tracking-[0.3em] uppercase mb-6"
        >
          Territorio Cañuelas
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'circOut' }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Viví donde el silencio
          <br />
          <span className="italic text-dorado-300">tiene valor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="text-white/80 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Desarrollos inmobiliarios pensados para familias que buscan
          tranquilidad sin renunciar a la cercanía.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#proyectos"
            className="px-8 py-3.5 bg-oliva-600 hover:bg-oliva-700 text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
          >
            Hablar con un asesor
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
