function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-tierra-900 border-t border-white/5">
      <div className="container-xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-oliva-600 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2c1.93 0 3.68.78 4.95 2.05L4.05 13.95A4.965 4.965 0 014 9c0-2.76 2.24-5 5-5zm0 10c-1.93 0-3.68-.78-4.95-2.05l9.9-9.9A4.965 4.965 0 0114 9c0 2.76-2.24 5-5 5z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="leading-tight">
                <span
                  className="block text-sm font-bold text-white tracking-wide"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Territorio Cañuelas
                </span>
                <span className="block text-xs text-white/45 tracking-widest uppercase">
                  Inmobiliaria
                </span>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Tu lugar en el mundo, lejos del ruido. Desarrollos inmobiliarios
              pensados para familias que eligen vivir diferente.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2">
            <p className="text-white/35 text-xs uppercase tracking-widest mb-1">Secciones</p>
            {[
              ['#inicio', 'Inicio'],
              ['#filosofia', 'Filosofía'],
              ['#proyectos', 'Proyectos'],
              ['#oficina', 'Oficina'],
              ['#contacto', 'Contacto'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-white/55 text-sm hover:text-white/90 transition-colors duration-200 w-fit"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div>
            <p className="text-white/35 text-xs uppercase tracking-widest mb-3">Seguinos</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/territoriocanuelas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/55 text-sm hover:text-white/90 transition-colors duration-200 w-fit"
              >
                <InstagramIcon />
                @territoriocanuelas
              </a>
              <a
                href="https://wa.me/5492226682560?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20proyectos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/55 text-sm hover:text-white/90 transition-colors duration-200 w-fit"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Territorio Cañuelas. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Desarrollado con atención y cuidado.</p>
        </div>
      </div>
    </footer>
  )
}
