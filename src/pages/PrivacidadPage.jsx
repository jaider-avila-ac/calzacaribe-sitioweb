import LegalLayout from './LegalLayout'

const SECTIONS = [
  {
    title: '1. Responsable del tratamiento',
    body: 'Calzacaribe (NIT 72.275.095-1), con domicilio en Calle 24 No. 17B-43, Barranquilla, Colombia, es responsable del tratamiento de los datos personales recopilados a través de este sitio web y de nuestra tienda en línea, en cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013.',
  },
  {
    title: '2. Marco constitucional',
    body: 'Esta política se fundamenta en la Constitución Política de Colombia de 1991: el artículo 15 garantiza el derecho de toda persona a conocer, actualizar y rectificar la información que se haya recogido sobre ella en bancos de datos (Habeas Data); el artículo 78 eleva a rango constitucional el control de calidad de los bienes y servicios ofrecidos a la comunidad y la protección del consumidor.',
  },
  {
    title: '3. Datos que recopilamos',
    body: 'Recopilamos la información que nos proporcionas directamente al registrarte, comprar o contactarnos —nombre, cédula, correo electrónico, teléfono, dirección de envío— y, en procesos de cambios, devoluciones o reembolsos, también datos bancarios. También recopilamos datos de navegación de forma automática (cookies, dirección IP, páginas visitadas) para mejorar la experiencia del sitio.',
  },
  {
    title: '4. Finalidad del tratamiento',
    body: 'Tus datos se usan para procesar y gestionar tus pedidos, validar tu identidad en solicitudes de cambio o devolución, gestionar la logística del retorno de mercancía, realizar transferencias bancarias de reembolso, brindar atención al cliente, cumplir obligaciones fiscales y legales y, solo con tu consentimiento, enviarte comunicaciones comerciales y promocionales.',
  },
  {
    title: '5. Compartición de datos',
    body: 'No vendemos, arrendamos ni comercializamos tus datos personales. Únicamente los compartimos con operadores logísticos para gestionar el envío de tus pedidos, pasarelas de pago para procesar transacciones (con sus propias políticas de privacidad certificadas), y autoridades públicas cuando la ley así lo exija.',
  },
  {
    title: '6. Seguridad de la información',
    body: 'Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados, pérdida, alteración o divulgación. Los datos de pago se procesan a través de pasarelas certificadas con cifrado SSL/TLS. Ningún sistema de transmisión de datos por internet es completamente seguro, pero trabajamos para minimizar ese riesgo.',
  },
  {
    title: '7. Cookies',
    body: 'Utilizamos cookies propias y de terceros para mejorar la funcionalidad del sitio, analizar el tráfico y mostrar contenido relevante. Puedes configurar tu navegador para rechazarlas, aunque esto puede afectar la experiencia de navegación.',
  },
  {
    title: '8. Derechos del titular',
    body: 'De acuerdo con el artículo 8 de la Ley 1581 de 2012, tienes derecho a conocer, actualizar, rectificar y solicitar la supresión de tus datos personales en cualquier momento, así como a revocar la autorización otorgada para su tratamiento y a presentar quejas ante la Superintendencia de Industria y Comercio (SIC).',
  },
  {
    title: '9. Canales para ejercer tus derechos',
    body: 'Puedes ejercer tus derechos de Habeas Data escribiendo a atencionalcliente@calzacaribe.com, en nuestra dirección física (Calle 24 No. 12#14, Las Nieves — Barranquilla), a los teléfonos 301.607.4258 / 301.509.7013, o por WhatsApp al +57 301 509 7013.',
  },
  {
    title: '10. Vigencia de la política',
    body: 'Esta Política de Privacidad puede actualizarse periódicamente. La versión vigente siempre estará disponible en este sitio web. El uso continuado de nuestros servicios tras la publicación de cambios implica la aceptación de la nueva política.',
  },
]

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      updated="Última actualización: agosto de 2026"
      intro="En Calzacaribe valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal, de acuerdo con la normativa colombiana de protección de datos (Ley 1581 de 2012 y Decreto 1377 de 2013)."
    >
      {SECTIONS.map(({ title, body }) => (
        <div key={title}>
          <h3 className="text-base font-black text-black mt-8 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
        </div>
      ))}
    </LegalLayout>
  )
}