export type ProjectStatus = 'en-construccion' | 'finalizado'

export type Project = {
  id: string
  name: string
  tagline: string
  status: ProjectStatus
  statusLabel: string
  description: string
  fullDescription: string
  location: string
  area: string
  features: string[]
  coverImage: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'la-merlina',
    name: 'La Merlina',
    tagline: 'Barrio cerrado de campo',
    status: 'en-construccion',
    statusLabel: 'En construcción',
    description:
      'Un barrio cerrado de campo donde los atardeceres son parte del paisaje diario. Lotes amplios, silencio real y naturaleza a pasos de tu puerta.',
    fullDescription:
      'La Merlina nació del sueño de crear un lugar donde las familias puedan construir su hogar rodeadas de campo y tranquilidad, sin renunciar a la seguridad y a los servicios esenciales. Cada lote fue diseñado para aprovechar las vistas naturales y los atardeceres únicos del paisaje de Cañuelas. El nombre La Merlina tiene historia: nació de la tierra misma, de ese campo que elegimos con cuidado y que hoy se convierte en tu próximo hogar.',
    location: 'Cañuelas, Buenos Aires',
    area: 'Lotes desde 1.000 m²',
    features: [
      'Seguridad 24/7',
      'Acceso asfaltado',
      'Servicios de luz y agua',
      'Espacios verdes comunes',
      'Lotes con vistas al campo',
      'A 60 km de CABA',
    ],
    coverImage: '/images/proyectos/la-merlina/1.jpg',
    images: [
      '/images/proyectos/la-merlina/1.jpg',
      '/images/proyectos/la-merlina/2.jpg',
      '/images/proyectos/la-merlina/3.jpg',
      '/images/proyectos/la-merlina/4.jpg',
      '/images/proyectos/la-merlina/5.jpg',
      '/images/proyectos/la-merlina/6.jpg',
      '/images/proyectos/la-merlina/7.jpg',
      '/images/proyectos/la-merlina/8.jpg',
    ],
  },
  {
    id: 'santa-anita',
    name: 'Santa Anita',
    tagline: 'Barrio residencial',
    status: 'finalizado',
    statusLabel: 'Finalizado',
    description:
      'Un barrio ideal para quienes buscan la combinación perfecta entre vida tranquila y cercanía a la ciudad. Comunidad consolidada, verde y familiar.',
    fullDescription:
      'Santa Anita es un barrio residencial consolidado que representa la esencia de lo que buscamos en Territorio: un lugar donde las familias puedan crecer en un entorno seguro, verde y con una comunidad real. Las familias que eligieron Santa Anita encontraron exactamente lo que buscaban: espacio para sus hijos, silencio para descansar y la tranquilidad de saber que tomaron la decisión correcta.',
    location: 'Cañuelas, Buenos Aires',
    area: 'Lotes desde 800 m²',
    features: [
      'Barrio consolidado',
      'Comunidad activa',
      'Espacios verdes cuidados',
      'Acceso directo a ruta',
      'Ideal para familias',
      'Servicios completos',
    ],
    coverImage: '/images/proyectos/santa-anita/1.jpg',
    images: [
      '/images/proyectos/santa-anita/1.jpg',
      '/images/proyectos/santa-anita/2.jpg',
    ],
  },
  {
    id: 'uribelarra',
    name: 'Uribelarra',
    tagline: 'Vida más lenta, más plena',
    status: 'finalizado',
    statusLabel: 'Finalizado',
    description:
      'El lugar donde decidiste vivir más lento. Uribelarra combina la tranquilidad del campo con un diseño de barrio que prioriza la calidad de vida.',
    fullDescription:
      'Uribelarra es más que un barrio: es una decisión de vida. Una decisión de intercambiar el ruido y el apuro por silencio y ritmo propio. El desarrollo ofrece lotes amplios con paisajes naturales cuidados, espacios para que los chicos jueguen al aire libre y una comunidad que eligió, como vos, vivir de otra manera. Estás a una sola decisión de esto.',
    location: 'Uribelarra, Buenos Aires',
    area: 'Lotes desde 1.200 m²',
    features: [
      'Paisaje natural preservado',
      'Lotes amplios y bien ubicados',
      'Calidad de vida garantizada',
      'Entorno seguro para familias',
      'Aire puro, verde y silencio',
      'Comunidad de alto nivel',
    ],
    coverImage: '/images/proyectos/uribelarra/1.jpg',
    images: [
      '/images/proyectos/uribelarra/1.jpg',
      '/images/proyectos/uribelarra/2.jpg',
      '/images/proyectos/uribelarra/3.jpg',
      '/images/proyectos/uribelarra/4.jpg',
      '/images/proyectos/uribelarra/5.jpg',
    ],
  },
]
