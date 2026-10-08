import { ArrowLeft, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center bg-slate-50 px-5 py-20 text-center">
      <div>
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-blue-50 text-[#0B4DA2]"><SearchX size={36} /></span>
        <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.25em] text-[#D71920]">404 error</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">The page you’re looking for may have moved or no longer exists.</p>
        <Link to="/" className="btn-primary mt-8"><ArrowLeft size={18} /> Back to home</Link>
      </div>
    </section>
  )
}
