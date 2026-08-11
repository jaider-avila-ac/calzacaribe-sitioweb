import LegalLayout from './LegalLayout'

const RETRACTO_CONDICIONES = [
  'El producto debe devolverse en las mismas condiciones en que fue recibido.',
  'No debe presentar señales de uso, lavado, alteración, suciedad ni desgaste.',
  'Debe conservar el empaque original, etiquetas, marquillas, sellos de seguridad y accesorios completos.',
  'Los costos de transporte y demás que conlleve la devolución son asumidos en su totalidad por el consumidor, según lo estipulado por la ley colombiana.',
]

const CAMBIO_DEFECTO_CONDICIONES = [
  'El defecto no debe haber sido causado por mal uso, lavado inadecuado, fuerza desmedida o negligencia del cliente.',
  'La solicitud debe presentarse dentro del periodo de garantía legal estipulado para el tipo de producto.',
  'El departamento de calidad realizará una inspección técnica de la prenda para validar que la falla corresponde a un defecto de origen.',
  'Si se aprueba el defecto, la empresa asume la totalidad de los fletes y costos de transporte requeridos para el cambio.',
]

const STEPS = [
  { title: '1. Radicación', desc: 'Envía una solicitud formal por escrito a atencionalcliente@calzacaribe.com indicando el número de factura, tus datos de contacto y la descripción del caso (adjunta fotos del defecto si aplica).' },
  { title: '2. Respuesta inicial', desc: 'Emitimos un concepto técnico inicial en un plazo máximo de quince (15) días hábiles, conforme al artículo 58 de la Ley 1480 de 2011.' },
  { title: '3. Resolución', desc: 'Si se confirma el defecto de fábrica, procedemos en primera medida a la reparación gratuita o al cambio por un artículo idéntico. Si no contamos con inventario disponible, puedes optar por un saldo a favor en la tienda o la devolución de tu dinero.' },
]

export default function CambiosPage() {
  return (
    <LegalLayout
      title="Política de Cambios, Devoluciones y Tratamiento de Datos Personales"
      updated="Última actualización: agosto de 2026"
      intro="Esta política regula los términos, condiciones y procedimientos para la efectividad de la garantía, cambios, devoluciones y el derecho de retracto, de conformidad con la Ley 1480 de 2011 (Estatuto del Consumidor), la Constitución Política de 1991 y las normas de protección de datos personales."
    >
      <h3 className="text-base font-black text-black mt-8 mb-2">Derecho de retracto</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        De conformidad con el artículo 47 de la Ley 1480 de 2011, puedes ejercer el derecho de retracto
        y solicitar la devolución de la totalidad del dinero pagado. El término máximo para ejercer este
        derecho es de mínimo cinco (5) días hábiles, contados a partir de la entrega del producto por
        parte de la empresa de transporte o logística.
      </p>
      <p className="text-sm font-bold text-black mb-1.5">Para que la devolución sea procedente:</p>
      <ul className="space-y-1.5">
        {RETRACTO_CONDICIONES.map((item) => (
          <li key={item} className="text-sm text-gray-600 leading-relaxed">— {item}</li>
        ))}
      </ul>

      <h3 className="text-base font-black text-black mt-10 mb-2">Política estricta de cambios</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        Para garantizar la máxima higiene y calidad de nuestro inventario, <strong>no realizamos cambios
        de mercancía por concepto de talla, color, diseño, gusto o arrepentimiento del comprador.</strong> Para
        ese caso aplica el derecho de retracto descrito arriba, no un cambio de producto.
      </p>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        Los cambios de producto proceden única y exclusivamente cuando la prenda presenta defectos de
        fabricación o fallas de calidad (garantía legal): defectos de costura, tintura, insumos o
        materiales.
      </p>
      <p className="text-sm font-bold text-black mb-1.5">Condiciones para el cambio por defecto de fábrica:</p>
      <ul className="space-y-1.5">
        {CAMBIO_DEFECTO_CONDICIONES.map((item) => (
          <li key={item} className="text-sm text-gray-600 leading-relaxed">— {item}</li>
        ))}
      </ul>

      <h3 className="text-base font-black text-black mt-10 mb-2">¿Cómo solicitar un cambio o retracto?</h3>
      {STEPS.map(({ title, desc }) => (
        <div key={title} className="mb-3">
          <p className="text-sm font-bold text-black">{title}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        </div>
      ))}

      <h3 className="text-base font-black text-black mt-10 mb-2">Tratamiento de datos personales</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, los datos personales que
        recolectamos durante los procesos de cambios, devoluciones o reembolsos (nombre, cédula,
        teléfono, dirección, correo electrónico y datos bancarios) se tratan de forma estrictamente
        confidencial y se usan exclusivamente para validar tu identidad, gestionar la logística del
        retorno de mercancía, realizar las transferencias bancarias de reembolso y cumplir con
        obligaciones fiscales. Consulta nuestra{' '}
        <a href="/privacidad" className="font-bold text-black hover:underline">Política de Privacidad</a>{' '}
        para más detalle sobre tus derechos como titular de los datos.
      </p>

      <h3 className="text-base font-black text-black mt-10 mb-2">Canales autorizados</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        Correo electrónico: <a href="mailto:atencionalcliente@calzacaribe.com" className="font-bold text-black hover:underline">atencionalcliente@calzacaribe.com</a>
        <br />
        Dirección física: Calle 24 No. 12#14, Las Nieves — Barranquilla
        <br />
        Teléfono de atención: 301.607.4258 – 301.509.7013, o por{' '}
        <a href="https://wa.me/573015097013" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline">
          WhatsApp
        </a>.
      </p>
    </LegalLayout>
  )
}