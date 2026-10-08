import { Armchair, HeartHandshake, ShieldCheck, UsersRound } from 'lucide-react'
import HoverLiftCard from '../motion/HoverLiftCard'
import StaggerContainer from '../motion/StaggerContainer'

const items = [
  { icon: ShieldCheck, title: 'Safe & Supportive', text: 'A learning environment built around student wellbeing.' },
  { icon: UsersRound, title: 'Experienced Team', text: 'Qualified teachers dedicated to student progress.' },
  { icon: Armchair, title: 'Clean & Comfortable', text: 'Classrooms with comfortable desks and benches.' },
  { icon: HeartHandshake, title: 'Student-Centred', text: 'Guidance that helps every learner build confidence.' },
]

export default function Stats() {
  return (
    <section className="relative z-10 -mt-1 bg-white py-10 lg:-mt-9 lg:bg-transparent lg:py-0" aria-label="Vidasa values">
      <div className="container-shell">
        <StaggerContainer className="stats-panel">
          {items.map(({ icon: Icon, title, text }) => (
            <HoverLiftCard key={title} as="div" className="stat-item">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Icon size={23} /></span>
              <div><strong className="block text-base font-extrabold text-[#071b3d]">{title}</strong><span className="mt-1 block text-sm leading-5 text-slate-500">{text}</span></div>
            </HoverLiftCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
