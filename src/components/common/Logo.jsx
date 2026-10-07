import { Link } from 'react-router-dom'
import officialLogo from '../../assets/images/brand/vidasa-official-logo.jpg'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Vidasa Educational Institute home">
      <span className={`grid h-[60px] w-[54px] shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-0.5 transition-transform group-hover:-rotate-2 ${light ? 'ring-1 ring-white/20' : 'ring-1 ring-slate-100'}`}>
        <img
          src={officialLogo}
          alt=""
          className="h-full w-full object-contain"
          width="54"
          height="60"
        />
      </span>
      <span className="min-w-0 leading-none">
        <span className={`block text-xl font-extrabold tracking-[0.14em] ${light ? 'text-white' : 'text-[#0B4DA2]'}`}>VIDASA</span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.12em] ${light ? 'text-blue-100' : 'text-slate-500'}`}>Educational Institute</span>
      </span>
    </Link>
  )
}
