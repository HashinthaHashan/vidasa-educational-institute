import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow = 'VIDASA EDUCATIONAL INSTITUTE', title, description }) {
  return (
    <section className="page-hero overflow-hidden">
      <div className="page-hero-pattern" aria-hidden="true" />
      <div className="container-shell relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-sm text-blue-100">
          <Link to="/" className="flex items-center gap-1.5 transition hover:text-white"><Home size={15} /> Home</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white" aria-current="page">{title}</span>
        </nav>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">{description}</p>
      </div>
    </section>
  )
}
