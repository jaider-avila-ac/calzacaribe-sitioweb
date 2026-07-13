import LegalLayout from './LegalLayout'

const CALZADO_MUJER = [
  ['34', '21.5 cm', '3.5 US', '2 UK', '34 EU'],
  ['35', '22 cm', '4 US', '2.5 UK', '35 EU'],
  ['36', '23 cm', '5 US', '3 UK', '36 EU'],
  ['37', '23.5 cm', '6 US', '4 UK', '37 EU'],
  ['38', '24 cm', '7 US', '5 UK', '38 EU'],
  ['39', '25 cm', '8 US', '6 UK', '39 EU'],
  ['40', '25.5 cm', '9 US', '7 UK', '40 EU'],
  ['41', '26 cm', '10 US', '8 UK', '41 EU'],
]

const CALZADO_HOMBRE = [
  ['38', '24 cm', '6 US', '5.5 UK', '38 EU'],
  ['39', '24.5 cm', '7 US', '6 UK', '39 EU'],
  ['40', '25 cm', '7.5 US', '6.5 UK', '40 EU'],
  ['41', '25.5 cm', '8 US', '7 UK', '41 EU'],
  ['42', '26 cm', '9 US', '8 UK', '42 EU'],
  ['43', '27 cm', '10 US', '9 UK', '43 EU'],
  ['44', '27.5 cm', '11 US', '10 UK', '44 EU'],
  ['45', '28 cm', '12 US', '11 UK', '45 EU'],
]

const CALZADO_NINOS = [
  ['20', '12.5 cm', '4 US Kids', '3 UK Kids' ],
  ['22', '13.5 cm', '5 US Kids', '4 UK Kids' ],
  ['24', '14.5 cm', '7 US Kids', '6 UK Kids' ],
  ['26', '15.5 cm', '8 US Kids', '7 UK Kids' ],
  ['28', '16.5 cm', '10 US Kids', '9 UK Kids' ],
  ['30', '18 cm', '12 US Kids', '11 UK Kids'],
  ['32', '19.5 cm', '1 US', '13 UK Kids'],
  ['34', '21 cm', '3 US', '2 UK' ],
]

const ROPA = [
  { talla: 'XS', pecho: '82–86 cm', cintura: '62–66 cm', cadera: '88–92 cm' },
  { talla: 'S', pecho: '87–91 cm', cintura: '67–71 cm', cadera: '93–97 cm' },
  { talla: 'M', pecho: '92–96 cm', cintura: '72–76 cm', cadera: '98–102 cm' },
  { talla: 'L', pecho: '97–101 cm', cintura: '77–81 cm', cadera: '103–107 cm' },
  { talla: 'XL', pecho: '102–107 cm', cintura: '82–87 cm', cadera: '108–113 cm' },
  { talla: 'XXL', pecho: '108–113 cm', cintura: '88–94 cm', cadera: '114–120 cm' },
]

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-black text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-black/5'}>
              {(Array.isArray(row) ? row : Object.values(row)).map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 text-gray-700 ${j === 0 ? 'font-bold text-black' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TallasPage() {
  return (
    <LegalLayout
      title="Guía de Tallas"
      updated="Actualizada: enero de 2026"
      intro="Encuentra tu talla perfecta con nuestra guía. Si tienes dudas, escríbenos por WhatsApp y te asesoramos personalmente. Recuerda que puedes realizar cambios de talla dentro de los 30 días siguientes a tu compra."
    >
      <p className="mt-8 text-sm text-gray-600 leading-relaxed">
        <strong className="text-black">Consejo:</strong> Si tu pie está entre dos tallas, te recomendamos elegir la talla mayor. Para calzado cerrado como botines o zapatos formales, considera media talla más para mayor comodidad.
      </p>

      <h3 className="text-base font-black text-black mt-8 mb-1">Calzado Mujer (Colombia / US / UK / EU)</h3>
      <Table headers={['Col', 'Largo pie', 'US', 'UK', 'EU']} rows={CALZADO_MUJER} />

      <h3 className="text-base font-black text-black mt-8 mb-1">Calzado Hombre (Colombia / US / UK / EU)</h3>
      <Table headers={['Col', 'Largo pie', 'US', 'UK', 'EU']} rows={CALZADO_HOMBRE} />

      <h3 className="text-base font-black text-black mt-8 mb-1">Calzado Niños (Colombia / US / UK)</h3>
      <Table headers={['Col', 'Largo pie', 'US Kids', 'UK Kids']} rows={CALZADO_NINOS} />

      <h3 className="text-base font-black text-black mt-8 mb-1">Ropa — Tabla de tallas</h3>
      <p className="text-xs text-gray-500 mb-1">Medidas en centímetros. Toma las medidas sobre la ropa interior.</p>
      <Table headers={['Talla', 'Pecho / Busto', 'Cintura', 'Cadera']} rows={ROPA} />

      <p className="text-sm text-gray-600 leading-relaxed mt-8">
        ¿Aún tienes dudas sobre tu talla? Escríbenos por WhatsApp al{' '}
        <a href="https://wa.me/573015097013" target="_blank" rel="noopener noreferrer" className="font-bold text-black hover:underline">
          +57 301 509 7013
        </a>{' '}
        y un asesor te ayuda a elegir la talla perfecta.
      </p>
    </LegalLayout>
  )
}
