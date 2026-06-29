import LegalLayout from './LegalLayout'
import { CheckCircle, XCircle } from 'lucide-react'

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
  { num: '01', title: 'Contáctanos',        desc: 'Escríbenos por WhatsApp al +57 315 555 0001 o a ventas@calzacaribe.co indicando tu número de pedido y el motivo del cambio.' },
  { num: '02', title: 'Autorización',        desc: 'Nuestro equipo revisará tu solicitud y te enviará la autorización de cambio junto con las instrucciones de envío en un plazo de 24 horas hábiles.' },
  { num: '03', title: 'Envío del producto',  desc: 'Empaca el artículo en su caja original con todos los elementos incluidos y envíalo a la dirección que te indicaremos. El costo de retorno corre por cuenta del cliente, salvo defecto de fabricación.' },
  { num: '04', title: 'Revisión y cambio',   desc: 'Al recibir el producto, nuestro equipo lo revisará en un plazo de 2 días hábiles. Si cumple las condiciones, despacharemos el artículo de reemplazo a la mayor brevedad.' },
]

export default function CambiosPage() {
  return (
    <LegalLayout
      title="Política de Cambios"
      updated="Última actualización: enero de 2025"
      intro="En Calzacaribe queremos que estés completamente satisfecho con tu compra. Si por alguna razón necesitas cambiar un producto, aquí encontrarás todo lo que necesitas saber."
    >
      {/* Aplica / No aplica */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

        {/* Aplica: fondo lima, texto negro */}
        <div className="bg-accent rounded-2xl p-5">
          <h3 className="font-black text-black mb-4 flex items-center gap-2">
            <CheckCircle size={18} className="text-black" /> Aplica para cambios
          </h3>
          <ul className="space-y-2">
            {APLICA.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-black">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* No aplica: fondo negro, texto blanco */}
        <div className="bg-black rounded-2xl p-5">
          <h3 className="font-black text-white mb-4 flex items-center gap-2">
            <XCircle size={18} className="text-red-600" /> No aplica para cambios
          </h3>
          <ul className="space-y-2">
            {NO_APLICA.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-white">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Proceso */}
      <h3 className="text-base font-black text-black mt-10 mb-6">¿Cómo solicitar un cambio?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {STEPS.map(({ num, title, desc }) => (
          <div key={num} className="flex gap-4 border-2 border-black rounded-2xl p-5">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-accent font-black text-sm">{num}</span>
            </div>
            <div>
              <p className="font-black text-black text-sm mb-1">{title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-black rounded-2xl p-6 text-center">
        <p className="text-white font-bold mb-1">¿Necesitas ayuda con tu cambio?</p>
        <p className="text-gray-400 text-sm mb-4">Nuestro equipo está disponible de Lunes a Sábado de 8am a 6pm</p>
        <a
          href="https://wa.me/573155550001?text=Hola%2C%20quiero%20solicitar%20un%20cambio%20de%20producto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-white text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Iniciar cambio por WhatsApp
        </a>
      </div>
    </LegalLayout>
  )
}
