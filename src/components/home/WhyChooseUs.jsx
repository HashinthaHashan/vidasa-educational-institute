import { Armchair, BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles, UserCheck } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const reasons = [
  { icon: ShieldCheck, title: 'Safe & clean', text: 'A well-maintained environment where students can learn with confidence.' },
  { icon: UserCheck, title: 'Qualified educators', text: 'Dedicated teachers committed to quality teaching and student progress.' },
  { icon: BookOpenCheck, title: 'Grades 1–11', text: 'Learning support across the primary and secondary school journey.' },
  { icon: Armchair, title: 'Comfortable spaces', text: 'Two halls arranged for both larger classes and small-group learning.' },
  { icon: HeartHandshake, title: 'Student-centred', text: 'A supportive approach that keeps each student’s growth in focus.' },
  { icon: Sparkles, title: 'Personal growth', text: 'Education that develops knowledge, confidence and positive habits.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle eyebrow="Why Vidasa" title="A place where students feel supported" description="Everything we do is shaped around a simple goal: helping students learn well and grow with confidence." />
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="feature-card">
              <span className={`feature-icon ${index % 3 === 1 ? 'feature-icon-red' : ''}`}><Icon size={24} /></span>
              <h3 className="mt-6 text-xl font-extrabold text-[#071b3d]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
