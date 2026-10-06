import { BookOpenCheck, GraduationCap, HeartHandshake, UsersRound } from 'lucide-react'

const items = [
  { icon: UsersRound, title: 'Experienced Teachers', text: 'Guidance from committed educators' },
  { icon: GraduationCap, title: 'Grades 6–11', text: 'Support throughout key school years' },
  { icon: BookOpenCheck, title: 'Quality Education', text: 'Clear and focused subject learning' },
  { icon: HeartHandshake, title: 'Student Friendly', text: 'A welcoming learning environment' },
]

export default function Stats() {
  return (
    <section className="relative z-10 -mt-1 bg-white py-10 lg:-mt-8 lg:bg-transparent lg:py-0">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-blue-950/5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className={`flex gap-4 p-6 lg:p-7 ${index !== 0 ? 'border-t border-slate-100 sm:border-t-0 sm:border-l' : ''} ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Icon size={23} /></span>
              <div><h2 className="font-bold text-slate-950">{title}</h2><p className="mt-1 text-sm leading-5 text-slate-500">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
