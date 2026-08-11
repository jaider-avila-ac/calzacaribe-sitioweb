import LegalLayout from './LegalLayout'

const FAQS = [
  {
    category: 'Pedidos y compras',
    items: [
      { q: '¿Cómo realizo una compra?', a: 'Ingresa a nuestra tienda en línea, selecciona los productos que deseas, elige talla y color, agrégalos al carrito y completa el proceso de pago. Recibirás una confirmación por correo electrónico.' },
      { q: '¿Puedo modificar o cancelar mi pedido?', a: 'Puedes cancelar tu pedido mientras no haya sido despachado. Una vez emitido el número de guía, ya no aplica la cancelación ordinaria y debes tramitar un derecho de retracto. Contáctanos por WhatsApp lo antes posible.' },
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
      { q: '¿A qué ciudades hacen envíos?', a: 'Realizamos envíos únicamente dentro de la República de Colombia — no procesamos entregas a direcciones o casilleros internacionales. Ciertos municipios de difícil acceso pueden estar excluidos de la cobertura según las rutas de nuestras transportadoras aliadas.' },
      { q: '¿Cuánto tarda mi pedido?', a: 'Los pedidos se procesan en 1 a 2 días hábiles y el transporte terrestre toma entre 3 y 8 días hábiles adicionales. Son tiempos estimados y pueden presentar variaciones fortuitas.' },
      { q: '¿Cómo puedo rastrear mi pedido?', a: 'Una vez despachado tu pedido, recibirás por WhatsApp o correo el número de guía y el enlace de rastreo de la transportadora.' },
      { q: '¿Qué pasa si no estoy en casa cuando llegue el pedido?', a: 'La transportadora realiza hasta dos intentos de entrega en el domicilio. Si nadie recibe el paquete, este regresa a nuestro centro logístico.' },
    ],
  },
  {
    category: 'Tallas y productos',
    items: [
      { q: '¿Cómo sé qué talla pedir?', a: 'Consulta nuestra Guía de Tallas disponible en este sitio. Si tienes dudas adicionales, escríbenos por WhatsApp y un asesor te ayudará a elegir la talla correcta.' },
      { q: '¿Los colores del producto son exactos a las fotos?', a: 'Hacemos nuestro mejor esfuerzo para que las imágenes representen fielmente los colores. Sin embargo, puede haber pequeñas variaciones según la calibración de la pantalla del dispositivo.' },
      { q: '¿Qué hago si recibo un producto defectuoso?', a: 'Contáctanos de inmediato por WhatsApp o correo con fotos del defecto y tu número de pedido. Si el departamento de calidad confirma que es un defecto de fábrica, la empresa asume la totalidad de los fletes y costos de transporte del cambio.' },
    ],
  },
  {
    category: 'Cambios y devoluciones',
    items: [
      { q: '¿Puedo cambiar un producto porque no me quedó bien la talla o no me gustó?', a: 'No. Para garantizar la higiene y calidad de nuestro inventario, no realizamos cambios por talla, color, diseño, gusto o arrepentimiento. En ese caso aplica el derecho de retracto: puedes devolver el producto y te reembolsamos el dinero, dentro de los 5 días hábiles siguientes a la entrega.' },
      { q: '¿Cuándo sí aplica un cambio de producto?', a: 'Únicamente cuando la prenda presenta defectos de fabricación o fallas de calidad. El departamento de calidad hace una inspección técnica para validar que el defecto es de origen y no por mal uso.' },
      { q: '¿Cuánto tiempo tengo para devolver un producto por retracto?', a: 'Mínimo cinco (5) días hábiles contados desde la entrega del producto, conforme al artículo 47 de la Ley 1480 de 2011. El producto debe conservar su empaque original, etiquetas y no presentar señales de uso; los costos de transporte de la devolución corren por cuenta del cliente.' },
    ],
  },
]

export default function FAQPage() {
  return (
    <LegalLayout
      title="Preguntas Frecuentes"
      updated=""
      intro="Encuentra respuesta a las dudas más comunes sobre pedidos, pagos, envíos, tallas y cambios. Si no encuentras lo que buscas, escríbenos por WhatsApp."
    >
      {FAQS.map(({ category, items }) => (
        <div key={category} className="mt-8">
          <h3 className="text-base font-black text-black mb-3">{category}</h3>
          {items.map(({ q, a }) => (
            <div key={q} className="mb-3">
              <p className="text-sm font-bold text-black">{q}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      ))}

      <p className="text-sm text-gray-600 leading-relaxed mt-8">
        ¿No encontraste tu respuesta? Escríbenos por WhatsApp al{' '}
        <a href="https://wa.me/573015097013" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline">
          +57 301 509 7013
        </a>
        , respondemos en menos de 1 hora.
      </p>
    </LegalLayout>
  )
}
