import { CalendarDays, Clock3, MapPin, UserRound } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { timetable } from '../data/timetable'

export default function Timetable() {
  return (
    <>
      <PageHero title="Class Timetable" description="View the weekly class schedule and plan your learning time with ease." />
      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Vidasa weekly class timetable</caption>
              <thead className="bg-[#0B4DA2] text-white"><tr>{['Day', 'Subject', 'Grade', 'Teacher', 'Time', 'Classroom'].map((heading) => <th key={heading} scope="col" className="px-5 py-4 text-sm font-bold">{heading}</th>)}</tr></thead>
              <tbody className="divide-y divide-slate-100">
                {timetable.map((item) => <tr key={item.id} className="transition hover:bg-blue-50/50"><td className="px-5 py-5 font-bold text-[#0B4DA2]">{item.day}</td><td className="px-5 py-5 font-semibold text-slate-950">{item.subject}</td><td className="px-5 py-5 text-slate-600">{item.grade}</td><td className="px-5 py-5 text-slate-600">{item.teacher}</td><td className="px-5 py-5 whitespace-nowrap text-slate-600">{item.time}</td><td className="px-5 py-5 text-slate-600">{item.classroom}</td></tr>)}
              </tbody>
            </table>
          </div>
          <div className="grid gap-5 md:hidden">
            {timetable.map((item) => (
              <article key={item.id} className="card overflow-hidden">
                <div className="flex items-center justify-between bg-[#0B4DA2] px-5 py-4 text-white"><h2 className="font-bold">{item.day}</h2><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">{item.grade}</span></div>
                <div className="p-5"><h3 className="text-xl font-bold text-slate-950">{item.subject}</h3><dl className="mt-4 space-y-3 text-sm text-slate-600"><div className="flex gap-3"><UserRound size={18} className="text-[#0B4DA2]" /><dt className="sr-only">Teacher</dt><dd>{item.teacher}</dd></div><div className="flex gap-3"><Clock3 size={18} className="text-[#0B4DA2]" /><dt className="sr-only">Time</dt><dd>{item.time}</dd></div><div className="flex gap-3"><MapPin size={18} className="text-[#0B4DA2]" /><dt className="sr-only">Classroom</dt><dd>{item.classroom}</dd></div><div className="flex gap-3"><CalendarDays size={18} className="text-[#0B4DA2]" /><dt className="sr-only">Day</dt><dd>Weekly on {item.day}</dd></div></dl></div>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-xl border-l-4 border-[#D71920] bg-white p-4 text-sm leading-6 text-slate-600">This timetable contains sample class details. Confirm the official schedule with Vidasa Educational Institute before attending.</p>
        </div>
      </section>
    </>
  )
}
