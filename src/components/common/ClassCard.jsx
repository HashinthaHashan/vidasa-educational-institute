import { CalendarDays, Clock3, MapPin, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ClassCard({ item }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden">
      <div className={`h-1.5 ${item.accent === 'red' ? 'bg-[#D71920]' : 'bg-[#0B4DA2]'}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="badge">{item.grade}</span>
            <h3 className="mt-3 text-xl font-bold text-slate-950">{item.subject}</h3>
          </div>
          <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-[#0B4DA2]">{item.fee}</span>
        </div>
        <dl className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-3"><UserRound className="text-[#0B4DA2]" size={18} /><dt className="sr-only">Teacher</dt><dd>{item.teacher}</dd></div>
          <div className="flex items-center gap-3"><CalendarDays className="text-[#0B4DA2]" size={18} /><dt className="sr-only">Day</dt><dd>{item.day}</dd></div>
          <div className="flex items-center gap-3"><Clock3 className="text-[#0B4DA2]" size={18} /><dt className="sr-only">Time</dt><dd>{item.startTime} – {item.endTime}</dd></div>
          <div className="flex items-center gap-3"><MapPin className="text-[#0B4DA2]" size={18} /><dt className="sr-only">Classroom</dt><dd>{item.classroom}</dd></div>
        </dl>
        <Link to="/contact" className="mt-6 inline-flex items-center font-bold text-[#0B4DA2] transition group-hover:text-[#D71920]">Inquire about this class <span className="ml-2" aria-hidden="true">→</span></Link>
      </div>
    </article>
  )
}
