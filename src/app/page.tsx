import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import Projects from '@/components/Projects'
import Office from '@/components/Office'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <Office />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
