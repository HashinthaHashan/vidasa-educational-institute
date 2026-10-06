import SafeImage from './SafeImage'

export default function TeacherCard({ teacher }) {
  return (
    <article className="card group overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden bg-blue-50">
        <SafeImage src={teacher.image} alt={`${teacher.name}, ${teacher.subject} teacher`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-6">
        <span className="text-sm font-bold uppercase tracking-wider text-[#D71920]">{teacher.subject}</span>
        <h3 className="mt-2 text-xl font-bold text-slate-950">{teacher.name}</h3>
        <p className="mt-1 font-semibold text-[#0B4DA2]">{teacher.grades}</p>
        <p className="mt-4 text-sm leading-6 text-slate-600">{teacher.description}</p>
      </div>
    </article>
  )
}
