import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://territoriocanuelas.com.ar'),
  title: {
    default: 'Territorio Cañuelas — Tu lugar en el mundo, lejos del ruido',
    template: '%s | Territorio Cañuelas',
  },
  description:
    'Desarrollos inmobiliarios pensados para familias que buscan tranquilidad en Cañuelas, Buenos Aires. La Merlina, Santa Anita, Uribelarra. Atención personalizada, entorno natural seguro.',
  keywords: [
    'inmobiliaria Cañuelas',
    'barrio cerrado campo',
    'lotes Cañuelas',
    'La Merlina barrio',
    'Santa Anita campo',
    'Uribelarra',
    'desarrollos inmobiliarios Buenos Aires',
    'vivir en el campo',
    'Territorio Cañuelas',
  ],
  authors: [{ name: 'Territorio Cañuelas', url: 'https://www.instagram.com/territoriocanuelas' }],
  creator: 'Territorio Cañuelas',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://territoriocanuelas.com.ar',
    siteName: 'Territorio Cañuelas',
    title: 'Territorio Cañuelas — Tu lugar en el mundo, lejos del ruido',
    description:
      'Desarrollos inmobiliarios pensados para familias que buscan tranquilidad sin renunciar a la cercanía.',
    images: [
      {
        url: '/images/hero/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Territorio Cañuelas — Desarrollos inmobiliarios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Territorio Cañuelas',
    description: 'Tu lugar en el mundo, lejos del ruido.',
    images: ['/images/hero/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Meta Pixel ──────────────────────────────────────────────────
            Reemplazá YOUR_PIXEL_ID con tu ID real de Meta Pixel.
            Descomentá este bloque cuando lo tengas disponible.

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        */}

        {/* ── Google Ads Conversion Tag ───────────────────────────────────
            Reemplazá AW-XXXXXXXXX con tu ID de Google Ads.
            Descomentá cuando lo tengas disponible.

        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
