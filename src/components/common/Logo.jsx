import { GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Vidasa Educational Institute home">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${light ? 'bg-white text-[#0B4DA2]' : 'bg-[#0B4DA2] text-white'} transition-transform group-hover:-rotate-3`}>
        <GraduationCap size={25} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="min-w-0 leading-none">
        <span className={`block text-xl font-extrabold tracking-[0.14em] ${light ? 'text-white' : 'text-[#0B4DA2]'}`}>VIDASA</span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] ${light ? 'text-blue-100' : 'text-slate-500'}`}>Educational Institute</span>
      </span>
    </Link>
  )
}
