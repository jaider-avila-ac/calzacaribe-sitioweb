import LegalLayout from './LegalLayout'

const SECTIONS = [
  {
    title: '1. Identificación de las partes',
    body: 'El propietario de esta plataforma digital y proveedor de los productos es Calzacaribe — el poder en cada paso — (NIT 72.275.095-1), con domicilio en Calle 24 No. 17B-43, Barranquilla, Colombia. Contacto: 301.607.4258 – 301.509.7013, atencionalcliente@calzacaribe.com. La navegación, el registro o la compra en esta plataforma implican la aceptación total de estas cláusulas.',
  },
  {
    title: '2. Condiciones de compra',
    list: [
      'El comprador debe ser mayor de edad según la ley colombiana.',
      'El cliente debe registrar datos personales reales, exactos y vigentes.',
      'La venta se consolida solo al verificar el pago exitoso.',
      'Los precios expuestos incluyen todos los impuestos aplicables por ley.',
      'La disponibilidad de inventario se actualiza de manera automática.',
      'Si ocurre un desfase de inventario, se notificará de inmediato al cliente.',
    ],
  },
  {
    title: '3. Métodos de pago aceptados',
    list: [
      'Tarjetas de crédito vigentes de franquicias nacionales e internacionales.',
      'Débito a cuentas corrientes y de ahorro mediante el sistema PSE.',
      'Billeteras digitales autorizadas en el territorio nacional colombiano.',
      'Pagos en efectivo a través de redes de recaudo aliadas.',
      'Los cupones de pago en efectivo tienen un vencimiento límite.',
    ],
  },
  {
    title: '4. Condiciones de envío y entrega',
    list: [
      'Los pedidos se procesan en un plazo de 1 a 2 días hábiles.',
      'El transporte terrestre toma entre 3 y 8 días hábiles.',
      'Los tiempos de entrega son estimados y pueden presentar variaciones fortuitas.',
      'Las transportadoras realizan hasta dos intentos de entrega en el domicilio.',
      'Si nadie recibe el paquete, este regresa a nuestro centro logístico.',
      'El cliente debe revisar el estado del empaque al recibirlo.',
    ],
  },
  {
    title: '5. Cobertura geográfica de las ventas',
    list: [
      'Las ventas y despachos se realizan únicamente dentro de la República de Colombia.',
      'No se procesan entregas hacia direcciones o casilleros internacionales.',
      'Ciertos municipios de difícil acceso pueden estar excluidos de la cobertura.',
      'Estas exclusiones dependen de las rutas de las transportadoras aliadas.',
    ],
  },
  {
    title: '6. Responsabilidades del comprador',
    list: [
      'Suministrar una dirección de despacho exacta, completa y verídica.',
      'Asegurar que un adulto reciba el pedido en la dirección.',
      'Custodiar de forma secreta sus credenciales de acceso al sitio.',
      'Utilizar los canales oficiales para reportar novedades o inconformidades.',
      'Seguir las instrucciones de lavado e higiene de las prendas.',
    ],
  },
  {
    title: '7. Responsabilidades de la empresa',
    list: [
      'Publicar imágenes reales y especificaciones técnicas claras de los productos.',
      'Proteger la información del cliente mediante certificados de seguridad SSL.',
      'Entregar los artículos en óptimas condiciones de higiene y calidad.',
      'Emitir la factura de venta o documento equivalente correspondiente.',
      'Tramitar las solicitudes de los usuarios en los términos legales.',
    ],
  },
  {
    title: '8. Restricciones de uso del sitio web',
    body: 'Queda prohibido cualquier uso indebido o malintencionado de la plataforma:',
    list: [
      'Extraer imágenes, textos o diseños para fines comerciales ajenos.',
      'Copiar o duplicar el código fuente del sitio web.',
      'Alojar software malicioso o virus en los servidores de la empresa.',
      'Suplantar la identidad de otros clientes o usar tarjetas robadas.',
      'Realizar ataques informáticos que saturen o caigan la página web.',
    ],
  },
  {
    title: '9. Cancelación de pedidos',
    list: [
      'Puedes cancelar tu pedido mientras no haya sido despachado.',
      'Una vez emitido el número de guía, no aplica la cancelación ordinaria: en ese caso debes tramitar un derecho de retracto (ver Política de Cambios y Devoluciones).',
      'Podemos cancelar pedidos por sospecha fundada de fraude bancario.',
      'También podemos cancelarlos si ocurre un error tipográfico evidente en los precios.',
    ],
  },
  {
    title: '10. Procedimiento para reclamaciones',
    list: [
      'Escribe un correo a atencionalcliente@calzacaribe.com.',
      'Adjunta el número de orden y tu número de cédula.',
      'Responderemos en un plazo máximo de 15 días hábiles, conforme al artículo 58 de la Ley 1480 de 2011.',
    ],
  },
  {
    title: '11. Legislación y jurisdicción aplicable',
    list: [
      'Este contrato electrónico se rige bajo el marco jurídico de Colombia.',
      'Cualquier disputa se resolverá bajo los códigos de la República.',
      'El primer paso de resolución será la conciliación directa entre las partes.',
      'De no haber acuerdo, intervendrán los jueces civiles colombianos.',
      'También tiene competencia la Superintendencia de Industria y Comercio (SIC).',
    ],
  },
]

export default function TerminosPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones de Uso y Contratación Comercial"
      updated="Última actualización: agosto de 2026"
      intro="El presente contrato regula la relación comercial entre este sitio web y el usuario. La navegación, registro o compra en esta plataforma implica la aceptación total de estas cláusulas."
    >
      {SECTIONS.map(({ title, body, list }) => (
        <div key={title}>
          <h3 className="text-base font-black text-black mt-8 mb-2">{title}</h3>
          {body && <p className="text-gray-600 text-sm leading-relaxed mb-2">{body}</p>}
          {list && (
            <ul className="space-y-1.5">
              {list.map((item) => (
                <li key={item} className="text-sm text-gray-600 leading-relaxed">— {item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </LegalLayout>
  )
}