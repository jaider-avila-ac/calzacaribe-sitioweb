import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function LegalLayout({ title, updated, intro, children }) {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 pb-20">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8">
        <ArrowLeft size={15} /> Volver al inicio
      </Link>

      <h1 className="text-3xl sm:text-4xl font-black text-black mb-2">{title}</h1>
      {updated && <p className="text-xs text-gray-400 mb-5">{updated}</p>}
      {intro && (
        <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-accent pl-4 mb-2">{intro}</p>
      )}

      <hr className="border-black/10 my-6" />

      {children}
    </div>
  )
}
