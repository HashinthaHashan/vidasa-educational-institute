import { Check, DoorOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { instituteHalls } from '../../config/site'

export default function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="facility-showcase">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-100">Learning spaces</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Two halls, designed for different class sizes.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {instituteHalls.map((hall) => (
              <article key={hall.name} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <DoorOpen size={24} className="text-blue-200" />
                <h3 className="mt-5 text-lg font-extrabold text-white">{hall.name}</h3>
                <p className="mt-1 text-4xl font-black text-white">{hall.capacity}</p>
                <p className="mt-1 text-sm text-blue-100">student capacity</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-blue-100">A larger main hall and a focused small-group space support different learning needs.</p>
        </div>
        <div>
          <SectionTitle eyebrow="About Vidasa" title="Learning built around every student" description="Vidasa Educational Institute supports students from Grade 1 to Grade 11 in a safe, clean and welcoming environment in Kotamulla, Ratnapura." align="left" />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {['Student-centred learning', 'Qualified educators', 'Comfortable classrooms', 'Supportive guidance'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 text-[#0B4DA2]"><Check size={15} strokeWidth={3} /></span>{item}</li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary mt-9">Discover our story</Link>
        </div>
      </div>
    </section>
  )
}
