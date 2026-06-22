'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#oficina', label: 'Oficina' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-crema-50/95 backdrop-blur-md shadow-[0_1px_20px_rgba(74,47,30,0.08)]'
            : 'bg-transparent'
        )}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
            >
              <div className="w-8 h-8 rounded-full bg-oliva-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c1.93 0 3.68.78 4.95 2.05L4.05 13.95A4.965 4.965 0 014 9c0-2.76 2.24-5 5-5zm0 10c-1.93 0-3.68-.78-4.95-2.05l9.9-9.9A4.965 4.965 0 0114 9c0 2.76-2.24 5-5 5z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className={cn(
                    'block text-sm font-bold tracking-wide transition-colors duration-300',
                    scrolled ? 'text-tierra-900' : 'text-white'
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Territorio
                </span>
                <span
                  className={cn(
                    'block text-xs tracking-widest uppercase transition-colors duration-300',
                    scrolled ? 'text-tierra-500' : 'text-white/80'
                  )}
                >
                  Cañuelas
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-all duration-300 relative group',
                    scrolled
                      ? 'text-tierra-700 hover:text-oliva-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full',
                      scrolled ? 'bg-oliva-500' : 'bg-white'
                    )}
                  />
                </a>
              ))}

              <a
                href="#contacto"
                className={cn(
                  'ml-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300',
                  scrolled
                    ? 'bg-oliva-600 text-white hover:bg-oliva-700 shadow-sm'
                    : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25'
                )}
              >
                Contactanos
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                'md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300',
                scrolled
                  ? 'text-tierra-800 hover:bg-tierra-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-tierra-900/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-crema-50 shadow-2xl md:hidden flex flex-col pt-20 pb-8 px-8"
            >
              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className="py-3 px-4 text-lg font-medium text-tierra-800 rounded-xl hover:bg-oliva-50 hover:text-oliva-700 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contacto"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4 w-full py-3.5 px-6 bg-oliva-600 text-white rounded-full font-semibold text-center hover:bg-oliva-700 transition-colors duration-200"
              >
                Contactanos
              </motion.a>

              <p className="mt-6 text-xs text-tierra-400 text-center">
                @territoriocanuelas
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
