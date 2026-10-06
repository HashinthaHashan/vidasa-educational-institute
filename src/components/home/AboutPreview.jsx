import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import SafeImage from '../common/SafeImage'
import instituteImage from '../../assets/images/institute/institute-placeholder.svg'

export default function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -bottom-5 -right-4 h-full w-full rounded-3xl border-2 border-[#0B4DA2]/10" aria-hidden="true" />
          <SafeImage src={instituteImage} alt="Vidasa Educational Institute building placeholder" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-[#0B4DA2] p-5 text-white shadow-xl sm:left-auto sm:w-64">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-100">Our promise</p>
            <p className="mt-2 font-bold">Every student is supported to do their best.</p>
          </div>
        </div>
        <div className="pt-8 lg:pt-0">
          <SectionTitle eyebrow="About Vidasa" title="Welcome to Vidasa Educational Institute" description="Vidasa provides a supportive educational environment focused on academic development, quality teaching and student success." align="left" />
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {['Clear subject guidance', 'Organized class schedules', 'Student-focused support', 'Comfortable learning spaces'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700"><span className="grid h-6 w-6 place-items-center rounded-full bg-blue-50 text-[#0B4DA2]"><Check size={14} strokeWidth={3} /></span>{item}</li>
            ))}
          </ul>
          <Link to="/about" className="btn-primary mt-8">Learn More <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  )
}
