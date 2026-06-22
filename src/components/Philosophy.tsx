'use client'

import { motion } from 'framer-motion'
import { Users, TreePine, Heart } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Atención personalizada',
    description:
      'No somos una inmobiliaria anónima. Somos personas que se sientan con vos, entienden tu situación y te acompañan en cada paso del proceso. Porque comprar un lote no es una transacción, es una decisión de vida.',
    color: 'text-tierra-600',
    bg: 'bg-tierra-50',
    border: 'border-tierra-200',
  },
  {
    icon: TreePine,
    title: 'Entorno natural seguro',
    description:
      'Todos nuestros desarrollos están diseñados para que la naturaleza sea parte de tu cotidiano. Verde, aire, espacio. Porque creemos que el mejor lugar para criar una familia es aquel donde los chicos pueden correr libres.',
    color: 'text-oliva-600',
    bg: 'bg-oliva-50',
    border: 'border-oliva-200',
  },
  {
    icon: Heart,
    title: 'Comunidad familiar',
    description:
      'Cada proyecto que desarrollamos es una comunidad que elegimos construir con cuidado. Vecinos que comparten valores, espacios que invitan a la conexión real. No solo vendemos lotes, construimos el lugar donde van a hacer raíces.',
    color: 'text-dorado-600',
    bg: 'bg-crema-100',
    border: 'border-crema-300',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'circOut' as const },
  },
}

export default function Philosophy() {
  return (
    <section id="filosofia" className="section-padding bg-white">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-oliva-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Nuestra filosofía
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-tierra-900 mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Por qué las familias nos{' '}
            <span className="italic text-oliva-600">eligen a nosotros?</span>
          </h2>
          <p className="text-tierra-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Hace años que trabajamos para llevar familias a entornos donde la calidad de vida
            no es un lujo, sino el punto de partida.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className={`rounded-2xl border p-8 ${value.bg} ${value.border} group hover:shadow-[var(--shadow-card-hover)] transition-all duration-300`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${value.bg} border ${value.border} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={value.color} />
                </div>
                <h3
                  className="text-xl font-bold text-tierra-900 mb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {value.title}
                </h3>
                <p className="text-tierra-600 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote
            className="text-2xl md:text-3xl font-medium text-tierra-800 italic max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            "Tu lugar en el mundo, lejos del ruido."
          </blockquote>
          <p className="mt-3 text-tierra-500 text-sm tracking-widest uppercase">
            — Territorio Cañuelas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
