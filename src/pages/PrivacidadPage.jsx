import LegalLayout from './LegalLayout'

const SECTIONS = [
  {
    title: '1. Responsable del tratamiento',
    body: 'Calzacaribe, con domicilio en Barranquilla, Colombia, es el responsable del tratamiento de los datos personales recopilados a través de nuestro sitio web y tienda en línea, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
  },
  {
    title: '2. Datos que recopilamos',
    body: 'Recopilamos información que usted nos proporciona directamente al registrarse, realizar una compra o contactarnos: nombre completo, correo electrónico, número de teléfono, dirección de envío, tipo y número de documento de identidad. También recopilamos datos de navegación de forma automática (cookies, dirección IP, páginas visitadas) para mejorar la experiencia del usuario.',
  },
  {
    title: '3. Finalidad del tratamiento',
    body: 'Sus datos personales son utilizados para: procesar y gestionar sus pedidos; enviarle información sobre el estado de su compra; brindar atención al cliente; enviar comunicaciones comerciales y promociones (solo con su consentimiento); cumplir con obligaciones legales y contables; mejorar nuestros productos y servicios.',
  },
  {
    title: '4. Compartición de datos',
    body: 'Calzacaribe no vende, arrienda ni comercializa sus datos personales a terceros. Únicamente compartimos información con: operadores logísticos para gestionar el envío de sus pedidos; pasarelas de pago para procesar transacciones (quienes cuentan con sus propias políticas de privacidad certificadas); y autoridades públicas cuando la ley así lo exija.',
  },
  {
    title: '5. Seguridad de la información',
    body: 'Implementamos medidas técnicas y organizativas para proteger sus datos contra accesos no autorizados, pérdida, alteración o divulgación. Los datos de pago son procesados a través de pasarelas certificadas con cifrado SSL/TLS. Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro.',
  },
  {
    title: '6. Cookies',
    body: 'Utilizamos cookies propias y de terceros para mejorar la funcionalidad del sitio, analizar el tráfico y mostrar contenido relevante. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la experiencia de navegación en nuestro sitio.',
  },
  {
    title: '7. Derechos del titular',
    body: 'De conformidad con la Ley 1581 de 2012, usted tiene derecho a: conocer, actualizar, rectificar y suprimir sus datos personales; revocar la autorización otorgada para el tratamiento; ser informado sobre el uso de sus datos; presentar quejas ante la Superintendencia de Industria y Comercio. Para ejercer estos derechos, contáctenos en ventas@calzacaribe.co.',
  },
  {
    title: '8. Vigencia de la política',
    body: 'Esta Política de Privacidad puede ser actualizada periódicamente. La versión vigente siempre estará disponible en este sitio web. Le recomendamos revisarla con regularidad. El uso continuado de nuestros servicios tras la publicación de cambios implica la aceptación de la nueva política.',
  },
]

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      updated="Última actualización: enero de 2026"
      intro="En Calzacaribe valoramos y respetamos su privacidad. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos su información personal, de acuerdo con la normativa colombiana de protección de datos (Ley 1581 de 2012)."
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
