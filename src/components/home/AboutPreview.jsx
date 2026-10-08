import { Armchair, Check, DoorOpen, ShieldCheck, Sparkles, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import RevealOnScroll from '../motion/RevealOnScroll'
import { instituteHalls } from '../../config/site'

const facilities = [
  { icon: Sparkles, title: 'Clean classrooms', text: 'Well-maintained spaces that support focused learning.' },
  { icon: Armchair, title: 'Comfortable seating', text: 'New desks and benches selected for student comfort.' },
  { icon: Waves, title: 'Hygienic facilities', text: 'Clean washroom facilities for a safer daily experience.' },
  { icon: ShieldCheck, title: 'Safe learning', text: 'A supportive setting designed around student wellbeing.' },
]

export default function AboutPreview() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <RevealOnScroll className="grid items-end gap-8 lg:grid-cols-[1fr_0.75fr]">
          <SectionTitle eyebrow="Learning environment" title="Comfort helps students do their best work" description="Vidasa has invested in the everyday details that matter: clean rooms, comfortable seating, hygienic facilities and an environment where students and teachers feel supported." align="left" />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {instituteHalls.map((hall) => <span key={hall.name} className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0B4DA2]"><DoorOpen size={17} /> {hall.name}: {hall.capacity} students</span>)}
          </div>
        </RevealOnScroll>

        <div className="environment-layout mt-12">
          <RevealOnScroll className="environment-feature" y={20}>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Made for better learning</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">A better place to teach. A safer place to learn.</h3>
            <p className="mt-5 max-w-xl leading-7 text-blue-100">A welcoming atmosphere gives teachers the space to teach with dedication and students the confidence to participate, ask questions and grow.</p>
            <ul className="mt-8 grid gap-3 text-sm font-bold text-white sm:grid-cols-2">
              {['Purpose-built comfort', 'Clean daily environment', 'Room for focused learning', 'Student-first approach'].map((item) => <li key={item} className="flex items-center gap-2"><Check size={17} className="text-blue-200" /> {item}</li>)}
            </ul>
            <Link to="/about" className="btn-light mt-9">Learn about Vidasa</Link>
          </RevealOnScroll>
          <div className="grid gap-4 sm:grid-cols-2">
            {facilities.map(({ icon: Icon, title, text }, index) => (
              <RevealOnScroll key={title} delay={index * 0.07} className={`environment-card ${index % 2 === 1 ? 'sm:translate-y-7' : ''}`}>
                <span className="feature-icon"><Icon size={24} /></span>
                <h3 className="mt-6 text-xl font-extrabold text-[#071b3d]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
