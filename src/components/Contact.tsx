'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresá un email válido'),
  phone: z.string().min(6, 'Ingresá un teléfono válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  wantsConsultation: z.boolean(),
})

type FormData = z.infer<typeof schema>

type Status = 'idle' | 'loading' | 'success'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { wantsConsultation: false },
  })

  const onSubmit = async (_data: FormData) => {
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1600))
    setStatus('success')
    reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-tierra-900 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-oliva-800/30 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-tierra-700/20 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-dorado-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Contacto
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Damos el primer
              <br />
              <span className="italic text-dorado-300">paso juntos.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Contanos un poco sobre lo que buscás y te asesoramos sin cargo y
              sin presión. Una consulta puede cambiar tu vida.
            </p>

            <div className="space-y-3">
              {[
                'Asesoramiento personalizado sin costo',
                'Respondemos en menos de 24 horas',
                'Visita al campo sin compromiso',
                'Financiación accesible disponible',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/75 text-sm">
                  <CheckCircle2 size={15} className="text-oliva-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-8 gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-oliva-500/20 border border-oliva-400/30 flex items-center justify-center"
                    >
                      <CheckCircle2 size={28} className="text-oliva-400" />
                    </motion.div>
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed max-w-xs">
                      Te contactamos en las próximas horas. ¡Gracias por confiar
                      en Territorio Cañuelas!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nombre" error={errors.name?.message}>
                        <input
                          {...register('name')}
                          placeholder="Tu nombre"
                          className={inputClass(!!errors.name)}
                        />
                      </Field>
                      <Field label="Teléfono" error={errors.phone?.message}>
                        <input
                          {...register('phone')}
                          placeholder="+54 9 ..."
                          type="tel"
                          className={inputClass(!!errors.phone)}
                        />
                      </Field>
                    </div>

                    <Field label="Email" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        placeholder="tu@email.com"
                        type="email"
                        className={inputClass(!!errors.email)}
                      />
                    </Field>

                    <Field label="Mensaje" error={errors.message?.message}>
                      <textarea
                        {...register('message')}
                        placeholder="¿Qué tipo de lote buscás? ¿Tenés algún proyecto o plazo en mente?"
                        rows={4}
                        className={cn(inputClass(!!errors.message), 'resize-none')}
                      />
                    </Field>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        {...register('wantsConsultation')}
                        type="checkbox"
                        className="mt-0.5 w-4 h-4 rounded accent-oliva-500 cursor-pointer flex-shrink-0"
                      />
                      <span className="text-white/65 text-xs leading-relaxed group-hover:text-white/80 transition-colors duration-200">
                        Quiero recibir asesoramiento personalizado y que me contacten
                        para coordinar una visita al campo.
                      </span>
                    </label>

                    {/*
                      ── Google Ads Conversion ──────────────────────────────
                      Cuando el formulario envía exitosamente, disparar:
                      gtag('event', 'conversion', {
                        'send_to': 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXX',
                        'value': 1.0,
                        'currency': 'ARS'
                      });
                      ──────────────────────────────────────────────────────
                    */}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 bg-oliva-600 hover:bg-oliva-500 disabled:bg-oliva-800 text-white rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Enviar consulta
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/40 text-xs">
                      Tus datos son confidenciales y no serán compartidos.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-white/80 text-xs font-semibold tracking-wide uppercase">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-400 text-xs"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full px-4 py-3 rounded-xl bg-white/[0.08] border text-white text-sm placeholder:text-white/35 focus:outline-none transition-all duration-200',
    hasError
      ? 'border-red-500/60 focus:border-red-400 focus:ring-1 focus:ring-red-500/30'
      : 'border-white/15 focus:border-oliva-400/60 focus:ring-1 focus:ring-oliva-400/20'
  )
}
