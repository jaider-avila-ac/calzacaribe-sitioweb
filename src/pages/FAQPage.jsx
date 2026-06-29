import { useState } from 'react'
import LegalLayout from './LegalLayout'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    category: 'Pedidos y compras',
    items: [
      { q: '¿Cómo realizo una compra?', a: 'Ingresa a nuestra tienda en línea, selecciona los productos que deseas, elige talla y color, agrégalos al carrito y completa el proceso de pago. Recibirás una confirmación por correo electrónico.' },
      { q: '¿Puedo modificar o cancelar mi pedido?', a: 'Puedes cancelar o modificar tu pedido dentro de las primeras 2 horas después de realizarlo, siempre que aún no haya sido despachado. Contáctanos por WhatsApp lo antes posible.' },
      { q: '¿Cómo sé si mi pedido fue confirmado?', a: 'Recibirás un correo electrónico de confirmación con el detalle de tu compra y el número de pedido. Si no lo recibes, revisa tu carpeta de spam o contáctanos.' },
    ],
  },
  {
    category: 'Pagos',
    items: [
      { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos pagos con Nequi, PSE (débito bancario), tarjetas Visa y Mastercard. Todos los pagos se procesan de forma segura a través de pasarelas certificadas.' },
      { q: '¿Es seguro pagar en línea?', a: 'Sí. No almacenamos datos de tarjetas en nuestros servidores. Todos los pagos son procesados por pasarelas certificadas con cifrado SSL/TLS. Además, puedes pagar con Nequi o PSE sin compartir datos de tarjeta.' },
      { q: '¿Por qué me puede fallar el pago?', a: 'Los rechazos más comunes son: fondos insuficientes, límites de transacciones del banco, datos incorrectos o bloqueos de seguridad del banco. Intenta con otro método de pago o contacta a tu banco.' },
    ],
  },
  {
    category: 'Envíos',
    items: [
      { q: '¿A qué ciudades hacen envíos?', a: 'Realizamos envíos a todo el territorio colombiano, incluyendo ciudades principales y municipios. El tiempo de entrega varía entre 2 y 5 días hábiles según la ubicación.' },
      { q: '¿Cuánto cuesta el envío?', a: 'El envío tiene un costo fijo de $12.000 COP. Los pedidos superiores a $200.000 COP tienen envío gratis a todo Colombia.' },
      { q: '¿Cómo puedo rastrear mi pedido?', a: 'Una vez despachado tu pedido, recibirás por WhatsApp o correo el número de guía y el enlace de rastreo de la transportadora.' },
      { q: '¿Qué pasa si no estoy en casa cuando llegue el pedido?', a: 'La transportadora realizará hasta dos intentos de entrega. Si no es posible entregar el paquete, será retenido en la oficina más cercana por un período limitado.' },
    ],
  },
  {
    category: 'Tallas y productos',
    items: [
      { q: '¿Cómo sé qué talla pedir?', a: 'Consulta nuestra Guía de Tallas disponible en este sitio. Si tienes dudas adicionales, escríbenos por WhatsApp y un asesor te ayudará a elegir la talla correcta.' },
      { q: '¿Los colores del producto son exactos a las fotos?', a: 'Hacemos nuestro mejor esfuerzo para que las imágenes representen fielmente los colores. Sin embargo, puede haber pequeñas variaciones según la calibración de la pantalla del dispositivo.' },
      { q: '¿Qué hago si recibo un producto defectuoso?', a: 'Contáctanos de inmediato por WhatsApp o correo con fotos del defecto y tu número de pedido. Los productos defectuosos tienen cambio o devolución sin costo de envío.' },
    ],
  },
  {
    category: 'Cambios y devoluciones',
    items: [
      { q: '¿Cuánto tiempo tengo para hacer un cambio?', a: 'Tienes 30 días calendario desde la fecha de recepción del producto para solicitar un cambio, siempre que el artículo esté en perfectas condiciones y con su empaque original.' },
      { q: '¿Hacen devoluciones de dinero?', a: 'En casos de productos defectuosos o errores en el envío, realizamos devolución del dinero o cambio según la preferencia del cliente. Para cambios voluntarios, solo aplicamos cambio de producto.' },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-bold text-black">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-sm text-gray-500 leading-relaxed pb-4 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <LegalLayout
      title="Preguntas Frecuentes"
      updated=""
      intro="Encuentra respuesta a las dudas más comunes sobre pedidos, pagos, envíos, tallas y cambios. Si no encuentras lo que buscas, escríbenos por WhatsApp."
    >
      <div className="mt-8 space-y-8">
        {FAQS.map(({ category, items }) => (
          <div key={category}>
            {/* Etiqueta de categoría: chip negro con texto blanco */}
            <div className="inline-flex items-center bg-black text-white text-xs font-black px-3 py-1 rounded-full mb-3">
              {category}
            </div>
            <div className="border-2 border-black rounded-2xl px-5">
              {items.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-black rounded-2xl p-6 text-center">
        <p className="text-white font-bold mb-1">¿No encontraste tu respuesta?</p>
        <p className="text-gray-400 text-sm mb-4">Escríbenos y respondemos en menos de 1 hora</p>
        <a
          href="https://wa.me/573155550001?text=Hola%2C%20tengo%20una%20pregunta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-white text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Preguntar por WhatsApp
        </a>
      </div>
    </LegalLayout>
  )
}
