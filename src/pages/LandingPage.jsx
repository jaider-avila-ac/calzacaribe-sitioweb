import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, Star,
  MapPin, Phone, MessageCircle,
  ChevronLeft, ChevronRight,
} from 'lucide-react'
import { TIENDA_URL } from '../config'

/* ── Hero carousel ─────────────────────────────────────── */

const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=85', href: `${TIENDA_URL}/catalogo` },
  { src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1920&q=85', href: `${TIENDA_URL}/catalogo?categoria=1` },
  { src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&q=85', href: `${TIENDA_URL}/catalogo?descuento=true` },
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((i) => (i + 1) % SLIDES.length), 4500)
  }

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current) }, [])

  const go = (idx) => { setCurrent(idx); startTimer() }
  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length)
  const next = () => go((current + 1) % SLIDES.length)

  return (
    <div className="relative w-full overflow-hidden aspect-[16/6]">
      {SLIDES.map(({ src, href }, i) => {
        const offset = (i - current + SLIDES.length) % SLIDES.length
        const x = offset === 0 ? 0 : offset === SLIDES.length - 1 ? -100 : 100
        return (
          <div key={i} className="absolute inset-0 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${x}%)` }}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img src={src} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
            </a>
          </div>
        )
      })}
      <button onClick={prev} aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-black/40 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Banner ${i + 1}`}
            className={`transition-all duration-300 ${i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'}`} />
        ))}
      </div>
    </div>
  )
}

/* ── Acordeón de categorías (con auto-play cuando nadie lo toca) ── */

const CATS = [
  { label: 'Mujer', img: '/acordeon/mujer-sandalias.jpg' },
  { label: 'Hombre', img: '/acordeon/pareja-mujer-y-hombre.jpg' },
  { label: 'Calzado', img: '/acordeon/piernas-mujer-calzado.jpg' },
]

function CategoriasAccordion() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((i) => (i + 1) % CATS.length), 2200)
    return () => clearInterval(id)
  }, [paused])

  return (
    <div className="flex h-[380px] sm:h-[460px] lg:h-[540px]">
      {CATS.map(({ label, img }, i) => (
        <div
          key={label}
          onMouseEnter={() => { setPaused(true); setActive(i) }}
          onMouseLeave={() => setPaused(false)}
          className={`relative min-w-0 overflow-hidden transition-[flex] duration-500 ease-in-out ${
            active === i ? 'flex-[3]' : 'flex-1'
          }`}
        >
          <img
            src={img}
            alt={label}
            className={`absolute inset-0 w-full h-full object-cover object-bottom origin-bottom transition-transform duration-[1500ms] ease-in-out ${
              active === i ? 'scale-110' : ''
            }`}
          />
        </div>
      ))}
    </div>
  )
}

const TESTIMONIALS = [
  { name: 'María González', city: 'Barranquilla', stars: 5, text: 'Excelente calidad en los zapatos. Los tacones que compré son cómodos y muy elegantes. El envío llegó antes de lo esperado.' },
  { name: 'Carlos Pérez', city: 'Cartagena', stars: 5, text: 'Compré unos sneakers para mi hijo y quedó feliz. La guía de tallas es muy precisa, llegó el número exacto.' },
  { name: 'Laura Martínez', city: 'Santa Marta', stars: 5, text: 'El servicio al cliente es increíble. Me ayudaron a elegir el modelo perfecto y el proceso de cambio fue muy sencillo.' },
]

/* ══════════════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <HeroCarousel />

      {/* ── Nosotros ── */}
      <section id="nosotros" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent text-white text-xs font-black px-3 py-1 mb-4">
                Nuestra esencia
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight mb-5">
                Orgullosamente del<br />
                <span className="text-accent">Caribe colombiano</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                En Calzacaribe creemos en el poder de dar el primer paso. Nos apasiona acompañarte a conquistar tus metas y a caminar con seguridad. Con más de 10 años de trayectoria, mantenemos intacto nuestro espíritu joven e innovador.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Somos una marca orgullosamente caribeña, comprometida con la energía, el talento y la riqueza cultural de nuestra región. No solo vendemos zapatos: impulsamos tu estilo. Transformamos la tradición en tendencias con diseños que empoderan y dejan huella.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Diseñamos y despachamos todo nuestro calzado desde Barranquilla, llevando el ritmo y el estilo del Caribe a cualquier rincón de Colombia con envíos rápidos y confiables.
              </p>
              <a
                href={TIENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                Ver la tienda <ArrowRight size={15} />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=85"
                  alt="Calzacaribe tienda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent p-4">
                <p className="text-2xl font-black text-white leading-none">+10</p>
                <p className="text-xs font-semibold text-white/70">años de trayectoria</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4">
                <p className="text-2xl font-black text-black leading-none">+200</p>
                <p className="text-xs font-semibold text-black/60">referencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categorías: acordeón full-bleed ── fondo blanco */}
      <section id="estilo" className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-black">Encuentra tu estilo</h2>
            <p className="text-gray-500 text-sm mt-2">Explora nuestra selección de calzado y moda para toda la familia</p>
          </div>
        </div>

        {/* Escapa el max-w-7xl para ocupar el 100% del ancho de la pantalla */}
        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
          <CategoriasAccordion />
        </div>
      </section>

      {/* ── CTA hacia la tienda ── */}
      <section className="bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img
              src="/cta/Sandalia-Tacón-Tiras-Minimalista.jpg"
              alt="Calzacaribe tienda online"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-8 py-14 lg:px-16 xl:px-24">
            <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-4">Tienda online</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Compra desde donde estés
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-md">
              Envíos a todo Colombia. Paga con Nequi, PSE, Visa o Mastercard.
            </p>
            <a
              href={TIENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-white hover:bg-accent hover:text-white text-black font-black text-sm px-7 py-3.5 transition-colors"
            >
              Visitar la tienda
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section className="bg-white py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent text-white text-xs font-black px-3 py-1 mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl font-black text-black">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, city, stars, text }) => (
              <div key={name} className="bg-gray-50 p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
                <div>
                  <p className="text-sm font-bold text-black">{name}</p>
                  <p className="text-xs text-gray-400">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── fondo blanco */}
      <section id="contacto" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-black mb-2">Encuéntranos</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Visítanos en cualquiera de nuestras dos sedes en Barranquilla, escríbenos por WhatsApp o envíanos un correo. Respondemos en menos de 1 hora.
              </p>

              {/* Sede Las Nieves */}
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-accent mb-3">Sede principal — Las Nieves</p>
                <ul className="space-y-3">
                  {[
                    { Icon: MapPin, text: 'Calle 26 No. 17B-25 Las Nieves, Barranquilla', sub: 'Sede Las Nieves' },
                    { Icon: Phone, text: '301 509 7013', sub: 'WhatsApp sede principal' },
                  ].map(({ Icon, text, sub }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-black">{text}</p>
                        <p className="text-xs text-gray-500">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sede La Paz */}
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-accent mb-3">Sede La Paz</p>
                <ul className="space-y-3">
                  {[
                    { Icon: MapPin, text: 'Carrera 13 No. 99B-85 Barrio La Paz, Barranquilla', sub: 'Sede La Paz' },
                    { Icon: Phone, text: '304 461 6737', sub: 'WhatsApp sede La Paz' },
                  ].map(({ Icon, text, sub }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon size={18} className="text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-black">{text}</p>
                        <p className="text-xs text-gray-500">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="bg-gray-50 border border-black/10 p-8 text-center">
              <h3 className="text-black font-black text-xl mb-2">Escríbenos por WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-6">
                Resolvemos tus dudas sobre tallas, colores, pedidos y envíos al instante.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/573015097013?text=Hola%2C%20quiero%20información%20sobre%20Calzacaribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-black text-white font-bold px-6 py-3 text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Sede Las Nieves
                </a>
                <a
                  href="https://wa.me/573044616737?text=Hola%2C%20quiero%20información%20sobre%20Calzacaribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-black/20 text-black hover:bg-black hover:text-white font-bold px-6 py-3 text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Sede La Paz
                </a>
              </div>
              <p className="text-gray-400 text-xs mt-4">Tiempo de respuesta: menos de 1 hora</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
