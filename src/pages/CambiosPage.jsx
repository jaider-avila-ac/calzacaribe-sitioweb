import LegalLayout from './LegalLayout'

const APLICA = [
  'Producto en perfectas condiciones, sin uso',
  'Empaque original y etiquetas intactas',
  'Solicitud dentro de los 30 días calendario desde la recepción',
  'Compra realizada en nuestra tienda en línea o tienda física',
  'Cambio por talla diferente del mismo producto (sujeto a disponibilidad)',
  'Cambio por producto defectuoso o incorrecto (sin costo de envío)',
]

const NO_APLICA = [
  'Productos con señales de uso, suciedad o desgaste',
  'Artículos sin empaque original o sin etiquetas',
  'Solicitudes después de 30 días calendario',
  'Productos de venta final o en liquidación (marcados como tal)',
  'Artículos de ropa interior o medias por razones de higiene',
  'Daños causados por mal uso o accidentes del cliente',
]

const STEPS = [
  { title: '1. Contáctanos', desc: 'Escríbenos por WhatsApp al +57 301 509 7013 indicando tu número de pedido y el motivo del cambio.' },
  { title: '2. Autorización', desc: 'Nuestro equipo revisará tu solicitud y te enviará la autorización de cambio junto con las instrucciones de envío en un plazo de 24 horas hábiles.' },
  { title: '3. Envío del producto', desc: 'Empaca el artículo en su caja original con todos los elementos incluidos y envíalo a la dirección que te indicaremos. El costo de retorno corre por cuenta del cliente, salvo defecto de fabricación.' },
  { title: '4. Revisión y cambio', desc: 'Al recibir el producto, nuestro equipo lo revisará en un plazo de 2 días hábiles. Si cumple las condiciones, despacharemos el artículo de reemplazo a la mayor brevedad.' },
]

export default function CambiosPage() {
  return (
    <LegalLayout
      title="Política de Cambios"
      updated="Última actualización: enero de 2026"
      intro="En Calzacaribe queremos que estés completamente satisfecho con tu compra. Si por alguna razón necesitas cambiar un producto, aquí encontrarás todo lo que necesitas saber."
    >
      <h3 className="text-base font-black text-black mt-8 mb-2">Aplica para cambios</h3>
      <ul className="space-y-1.5">
        {APLICA.map((item) => (
          <li key={item} className="text-sm text-gray-600 leading-relaxed">— {item}</li>
        ))}
      </ul>

      <h3 className="text-base font-black text-black mt-8 mb-2">No aplica para cambios</h3>
      <ul className="space-y-1.5">
        {NO_APLICA.map((item) => (
          <li key={item} className="text-sm text-gray-600 leading-relaxed">— {item}</li>
        ))}
      </ul>

      <h3 className="text-base font-black text-black mt-8 mb-2">¿Cómo solicitar un cambio?</h3>
      {STEPS.map(({ title, desc }) => (
        <div key={title} className="mb-3">
          <p className="text-sm font-bold text-black">{title}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      ))}

      <p className="text-sm text-gray-600 leading-relaxed mt-8">
        ¿Necesitas ayuda con tu cambio? Escríbenos por WhatsApp al{' '}
        <a href="https://wa.me/573015097013" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline">
          +57 301 509 7013
        </a>{' '}
        de Lunes a Sábado de 8am a 6pm.
      </p>
    </LegalLayout>
  )
}
