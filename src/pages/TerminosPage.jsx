import LegalLayout from './LegalLayout'

const SECTIONS = [
  {
    title: '1. Aceptación de los términos',
    body: 'Al acceder y utilizar el sitio web de Calzacaribe, así como al realizar compras en nuestra tienda en línea, usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le pedimos que no utilice nuestros servicios.',
  },
  {
    title: '2. Sobre Calzacaribe',
    body: 'Calzacaribe es una empresa de comercio de calzado, ropa y accesorios con sede en Barranquilla, Colombia. Operamos tanto en tienda física como a través de nuestra plataforma de comercio electrónico, realizando envíos a todo el territorio nacional.',
  },
  {
    title: '3. Productos y disponibilidad',
    body: 'Todos los productos publicados en nuestra tienda están sujetos a disponibilidad de inventario. Nos reservamos el derecho de limitar las cantidades de cualquier artículo. Las descripciones, imágenes y precios de los productos pueden ser actualizados sin previo aviso. En caso de un error en el precio publicado, nos comunicaremos con el cliente para confirmar o cancelar el pedido.',
  },
  {
    title: '4. Precios y forma de pago',
    body: 'Los precios se expresan en pesos colombianos (COP) e incluyen IVA. Aceptamos pagos mediante Nequi, PSE, tarjetas Visa y Mastercard. El pago debe completarse en el momento de la compra. Calzacaribe no almacena datos de tarjetas de crédito; todos los pagos son procesados por pasarelas certificadas.',
  },
  {
    title: '5. Envíos y tiempos de entrega',
    body: 'Realizamos envíos a todo Colombia a través de operadores logísticos aliados. El tiempo estimado de entrega es de 2 a 5 días hábiles dependiendo del municipio de destino. Los pedidos superiores a $200.000 COP tienen envío gratuito. Calzacaribe no se responsabiliza por retrasos causados por la transportadora, situaciones de fuerza mayor o información incorrecta proporcionada por el cliente.',
  },
  {
    title: '6. Política de cambios y devoluciones',
    body: 'Aceptamos cambios de productos en perfectas condiciones, sin uso, con empaque original y etiquetas intactas, dentro de los 30 días calendario siguientes a la recepción del pedido. Para iniciar un proceso de cambio, el cliente debe contactarnos por WhatsApp o correo electrónico. Consulte nuestra Política de Cambios completa para más detalles.',
  },
  {
    title: '7. Propiedad intelectual',
    body: 'Todo el contenido publicado en este sitio web, incluyendo textos, imágenes, logotipos, diseños y gráficos, es propiedad de Calzacaribe o de sus respectivos titulares y está protegido por las leyes de derechos de autor y propiedad intelectual de Colombia. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa.',
  },
  {
    title: '8. Limitación de responsabilidad',
    body: 'Calzacaribe no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o la imposibilidad de uso de nuestros productos o servicios. Nuestra responsabilidad máxima estará limitada al valor del producto adquirido.',
  },
  {
    title: '9. Modificaciones',
    body: 'Calzacaribe se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde el momento de su publicación en este sitio. El uso continuado de nuestros servicios tras la publicación de cambios constituye la aceptación de los nuevos términos.',
  },
  {
    title: '10. Ley aplicable',
    body: 'Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa que surja en relación con estos términos será sometida a la jurisdicción de los tribunales competentes de la ciudad de Barranquilla, Atlántico.',
  },
]

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      updated="Última actualización: enero de 2026"
      intro="Por favor, lea detenidamente estos Términos y Condiciones antes de utilizar los servicios de Calzacaribe. Al acceder a nuestra plataforma o realizar una compra, usted acepta cumplir con las condiciones aquí descritas."
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
