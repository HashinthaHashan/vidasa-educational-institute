import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SafeImage from '../common/SafeImage'
import heroImage from '../../assets/images/hero/hero-placeholder.svg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8ff]">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0B4DA2] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D71920]" /> Quality education for every learner
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.06] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.6rem]">
            Building Knowledge.<span className="mt-2 block text-[#0B4DA2]">Creating <span className="relative text-[#D71920]">Futures.<span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-[#D71920]/20" /></span></span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Quality education, experienced teachers and a supportive learning environment to help every student achieve their best.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/classes" className="btn-primary justify-center">Explore Classes <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn-secondary justify-center">Contact Us</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0B4DA2]" /> Grades 6–11</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#0B4DA2]" /> Student-centred learning</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-3xl bg-[#D71920]/10" aria-hidden="true" />
          <div className="absolute -right-7 -top-5 h-36 w-36 rounded-full border-[22px] border-[#0B4DA2]/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-2xl shadow-blue-900/15">
            <SafeImage src={heroImage} alt="Vidasa students learning together placeholder" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0B4DA2] text-lg font-extrabold text-white">V</span>
              <div><p className="font-bold text-slate-950">A place to learn and grow</p><p className="text-sm text-slate-500">Support • Guidance • Success</p></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-5 hidden rounded-2xl bg-[#D71920] px-5 py-4 text-white shadow-xl sm:block">
            <p className="text-2xl font-extrabold">6–11</p><p className="text-xs font-semibold uppercase tracking-wider text-red-100">School grades</p>
          </div>
        </div>
      </div>
    </section>
  )
}
