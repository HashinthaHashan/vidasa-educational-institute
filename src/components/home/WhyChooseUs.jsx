import { Armchair, BookOpenCheck, CalendarCheck2, HeartHandshake, UserCheck, UsersRound } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const reasons = [
  { icon: UserCheck, title: 'Experienced Teachers', text: 'Knowledgeable educators dedicated to clear guidance and student progress.' },
  { icon: BookOpenCheck, title: 'Quality Education', text: 'Focused lessons designed to strengthen subject knowledge and confidence.' },
  { icon: UsersRound, title: 'Student Focused Learning', text: 'A supportive approach that recognizes different learning needs.' },
  { icon: Armchair, title: 'Comfortable Classrooms', text: 'Welcoming spaces created for focused and productive learning.' },
  { icon: CalendarCheck2, title: 'Organized Timetables', text: 'Clear schedules that help students and families plan with confidence.' },
  { icon: HeartHandshake, title: 'Supportive Environment', text: 'A positive culture where students are encouraged to ask and improve.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionTitle eyebrow="The Vidasa difference" title="Why Choose Vidasa?" description="A learning experience built around good teaching, careful organization and genuine student support." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-950/5">
              <div className="flex items-start gap-5">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition group-hover:scale-105 ${index % 3 === 1 ? 'bg-red-50 text-[#D71920]' : 'bg-blue-50 text-[#0B4DA2]'}`}><Icon size={23} /></span>
                <div><h3 className="text-lg font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
