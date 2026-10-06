import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import ClassCard from '../components/common/ClassCard'
import { classes } from '../data/classes'

export default function Classes() {
  const [grade, setGrade] = useState('All grades')
  const [subject, setSubject] = useState('All subjects')
  const grades = ['All grades', ...new Set(classes.map((item) => item.grade))]
  const subjects = ['All subjects', ...new Set(classes.map((item) => item.subject))]
  const filtered = useMemo(() => classes.filter((item) => (grade === 'All grades' || item.grade === grade) && (subject === 'All subjects' || item.subject === subject)), [grade, subject])

  return (
    <>
      <PageHero title="Classes" description="Find a class by grade or subject and contact our team for current enrolment and fee details." />
      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <div className="mb-10 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4"><Search size={20} className="text-[#0B4DA2]" /><h2 className="font-bold text-slate-950">Find the right class</h2></div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="form-label">Grade<select className="form-input mt-2" value={grade} onChange={(event) => setGrade(event.target.value)}>{grades.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="form-label">Subject<select className="form-input mt-2" value={subject} onChange={(event) => setSubject(event.target.value)}>{subjects.map((item) => <option key={item}>{item}</option>)}</select></label>
            </div>
          </div>
          <p className="mb-6 text-sm font-semibold text-slate-500">Showing {filtered.length} {filtered.length === 1 ? 'class' : 'classes'}</p>
          {filtered.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <ClassCard key={item.id} item={item} />)}</div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center"><h2 className="text-xl font-bold text-slate-950">No matching classes</h2><p className="mt-2 text-slate-600">Try changing one of the filters.</p></div>
          )}
          <p className="mt-8 rounded-xl border-l-4 border-[#D71920] bg-white p-4 text-sm leading-6 text-slate-600">Class details shown are sample content for the first website version. Please confirm the final subject, teacher, room, schedule and fee information before publishing.</p>
        </div>
      </section>
    </>
  )
}
