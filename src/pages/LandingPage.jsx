import { useState, useEffect, useRef } from 'react'
import {
  ArrowRight, Truck, RefreshCw, Shield, Star,
  MapPin, Phone, Mail, MessageCircle,
  ChevronLeft, ChevronRight, ShoppingBag,
} from 'lucide-react'

/* ── Hero carousel ─────────────────────────────────────── */

const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=85', href: 'https://pruebacalzacaribe.netlify.app/catalogo' },
  { src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1920&q=85', href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=1' },
  { src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&q=85', href: 'https://pruebacalzacaribe.netlify.app/catalogo?descuento=true' },
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm flex items-center justify-center text-white transition-colors">
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Banner ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'}`} />
        ))}
      </div>
    </div>
  )
}

/* ── Data ───────────────────────────────────────────────── */

const BENEFITS = [
  { Icon: Truck,     title: 'Envío gratis',       desc: 'En pedidos superiores a $200.000' },
  { Icon: RefreshCw, title: 'Cambios y devoluciones', desc: 'Sin complicaciones ni letras pequeñas' },
  { Icon: Shield,    title: 'Compra segura',        desc: 'Pagos cifrados y protegidos' },
  { Icon: Star,      title: 'Calidad garantizada',  desc: 'Productos seleccionados con cuidado' },
]

const CATS = [
  { label: 'Mujer',      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',  href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=1', color: 'from-violet-950' },
  { label: 'Hombre',     img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80', href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=2', color: 'from-black' },
  { label: 'Niños',      img: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80', href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=3', color: 'from-black' },
  { label: 'Ropa',       img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80', href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=4', color: 'from-violet-950' },
  { label: 'Sandalias',  img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80', href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=5', color: 'from-black' },
  { label: 'Accesorios', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',   href: 'https://pruebacalzacaribe.netlify.app/catalogo?categoria=6', color: 'from-black' },
]

const TESTIMONIALS = [
  { name: 'María González', city: 'Barranquilla', stars: 5, text: 'Excelente calidad en los zapatos. Los tacones que compré son cómodos y muy elegantes. El envío llegó antes de lo esperado.' },
  { name: 'Carlos Pérez',   city: 'Cartagena',    stars: 5, text: 'Compré unos sneakers para mi hijo y quedó feliz. La guía de tallas es muy precisa, llegó el número exacto.' },
  { name: 'Laura Martínez', city: 'Santa Marta',  stars: 5, text: 'El servicio al cliente es increíble. Me ayudaron a elegir el modelo perfecto y el proceso de cambio fue muy sencillo.' },
]

/* ══════════════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <HeroCarousel />

      {/* ── Beneficios ── */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3 py-1">
                <Icon size={18} className="text-white flex-shrink-0" />
                <div>
                  <p className="text-xs font-black text-white leading-tight">{title}</p>
                  <p className="text-[11px] text-white/70 leading-tight mt-0.5 hidden sm:block">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nosotros ── */}
      <section id="nosotros" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent text-white text-xs font-black px-3 py-1 rounded-full mb-4">
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
                href="https://pruebacalzacaribe.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-black hover:text-white transition-colors"
              >
                Ver la tienda <ArrowRight size={15} />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=85"
                  alt="Calzacaribe tienda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent rounded-2xl p-4">
                <p className="text-2xl font-black text-white leading-none">+10</p>
                <p className="text-xs font-semibold text-white/70">años de trayectoria</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4">
                <p className="text-2xl font-black text-black leading-none">+200</p>
                <p className="text-xs font-semibold text-black/60">referencias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categorías ── fondo blanco */}
      <section id="categorias" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-black">Encuentra tu estilo</h2>
            <p className="text-gray-500 text-sm mt-2">Explora nuestra selección de calzado y moda para toda la familia</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {CATS.map(({ label, img, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-[3/2] block">
                <img src={img} alt={label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent opacity-70`} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-lg leading-tight">{label}</h3>
                  <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más <ArrowRight size={11} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA hacia la tienda ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden px-8 py-14 text-center border border-black/10">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=70"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-5"
            />
            <div className="relative z-10">
              <span className="inline-block bg-accent text-white text-xs font-black px-3 py-1 rounded-full mb-4">
                Tienda online
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
                Compra desde donde estés
              </h2>
              <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                Envíos a todo Colombia. Paga con Nequi, PSE, Visa o Mastercard.
              </p>
              <a
                href="https://pruebacalzacaribe.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-black text-white font-black text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                <ShoppingBag size={16} />
                Visitar la tienda
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section className="bg-white py-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent text-white text-xs font-black px-3 py-1 rounded-full mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl font-black text-black">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, city, stars, text }) => (
              <div key={name} className="bg-gray-50 rounded-2xl p-6">
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
                    { Icon: Phone,  text: '301 509 7013', sub: 'WhatsApp sede principal' },
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
                    { Icon: Phone,  text: '304 461 6737', sub: 'WhatsApp sede La Paz' },
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

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-black">ventas@calzacaribe.co</p>
                  <p className="text-xs text-gray-500">Correo electrónico</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-black/10 rounded-3xl p-8 text-center">
              <MessageCircle size={40} className="text-accent mx-auto mb-5" />
              <h3 className="text-black font-black text-xl mb-2">Escríbenos por WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-6">
                Resolvemos tus dudas sobre tallas, colores, pedidos y envíos al instante.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/573015097013?text=Hola%2C%20quiero%20información%20sobre%20Calzacaribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-black text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  Sede Las Nieves
                </a>
                <a
                  href="https://wa.me/573044616737?text=Hola%2C%20quiero%20información%20sobre%20Calzacaribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-black/20 text-black hover:bg-black hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
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
