import { BookOpenCheck, DoorOpen, GraduationCap, UsersRound } from 'lucide-react'
import { siteConfig } from '../../config/site'

const items = [
  { icon: UsersRound, value: siteConfig.students, label: 'Registered students' },
  { icon: GraduationCap, value: siteConfig.teachers, label: 'Teachers' },
  { icon: DoorOpen, value: siteConfig.halls, label: 'Learning halls' },
  { icon: BookOpenCheck, value: '1–11', label: 'Grade coverage' },
]

export default function Stats() {
  return (
    <section className="relative z-10 -mt-1 bg-white py-10 lg:-mt-9 lg:bg-transparent lg:py-0" aria-label="Institute at a glance">
      <div className="container-shell">
        <div className="stats-panel">
          {items.map(({ icon: Icon, value, label }) => (
            <div key={label} className="stat-item">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Icon size={23} /></span>
              <div><strong className="block text-2xl font-black text-[#071b3d]">{value}</strong><span className="text-sm font-medium text-slate-500">{label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
