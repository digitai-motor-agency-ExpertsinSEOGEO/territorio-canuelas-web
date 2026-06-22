'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIconSmall({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

type InfoItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  sub?: string
  href?: string
}

const info: InfoItem[] = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'TERRITORIO — Negocios Inmobiliarios',
    sub: 'Cañuelas, Buenos Aires, Argentina',
  },
  {
    icon: Clock,
    label: 'Horarios de atención',
    value: 'Lunes a Viernes: 9 h – 18 h',
    sub: 'Sábados: 9 h – 13 h',
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+54 9 2226 682560',
    sub: 'Respondemos en minutos',
    href: 'https://wa.me/5492226682560?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20proyectos.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@territoriocanuelas.com.ar',
    href: 'mailto:info@territoriocanuelas.com.ar',
  },
]

export default function Office() {
  return (
    <section id="oficina" className="section-padding bg-white">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-oliva-600 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Nuestra oficina
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-tierra-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Venís, nos tomamos unos mates
            <span className="italic text-oliva-600"> y hablamos.</span>
          </h2>
          <p className="text-tierra-600 text-lg max-w-xl mx-auto">
            Estamos en Cañuelas para atenderte de manera personalizada.
            Sin turnos, sin apuro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="space-y-2"
          >
            {info.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-crema-50 transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-oliva-50 border border-oliva-100 flex items-center justify-center flex-shrink-0 group-hover:bg-oliva-100 transition-colors duration-200">
                    <Icon size={18} className="text-oliva-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-tierra-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-tierra-800 font-medium text-sm">{item.value}</p>
                    {item.sub && (
                      <p className="text-tierra-500 text-xs mt-0.5">{item.sub}</p>
                    )}
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex gap-3 px-4 pt-2"
            >
              <a
                href="https://www.instagram.com/territoriocanuelas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-crema-100 border border-crema-200 hover:bg-oliva-50 hover:border-oliva-200 text-tierra-700 hover:text-oliva-700 transition-all duration-200 text-sm font-medium"
              >
                <InstagramIcon size={16} />
                @territoriocanuelas
              </a>
              <a
                href="https://wa.me/5492226682560?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-crema-100 border border-crema-200 hover:bg-[#e7fbe8] hover:border-[#25d366]/30 text-tierra-700 hover:text-[#1a9e45] transition-all duration-200 text-sm font-medium"
              >
                <WhatsAppIconSmall size={16} />
                WhatsApp
              </a>
            </motion.div>

            {/* CTA visita */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 p-5 bg-oliva-50 border border-oliva-200 rounded-2xl"
            >
              <p className="text-tierra-800 font-medium text-sm mb-3">
                ¿Preferís una visita al campo? Te llevamos sin costo.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-oliva-600 text-white rounded-full text-sm font-semibold hover:bg-oliva-700 transition-colors duration-200"
              >
                Coordinar visita
              </a>
            </motion.div>
          </motion.div>

          {/* Google Maps — ubicación real de TERRITORIO */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-crema-300 shadow-[var(--shadow-card)] h-[360px] lg:h-[460px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-58.7623157!3d-35.0568843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd1f7fb362a7f3%3A0xb5cc11c850761b8c!2sTERRITORIO%20-%20Negocios%20Inmobiliarios!5e0!3m2!1ses-419!2sar!4v1720000000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TERRITORIO — Negocios Inmobiliarios, Cañuelas"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
