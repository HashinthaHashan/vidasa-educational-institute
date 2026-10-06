import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Classes', to: '/classes' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Timetable', to: '/timetable' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-[#D71920] after:transition-all ${isActive ? 'text-[#0B4DA2] after:w-full' : 'text-slate-700 hover:text-[#0B4DA2] after:w-0 hover:after:w-full'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>)}
          <NavLink to="/contact" className="btn-primary ml-1">Join a Class</NavLink>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#0B4DA2] transition hover:bg-blue-50 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-x-0 top-[76px] h-[calc(100vh-76px)] bg-slate-950/30 transition-opacity xl:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav className={`absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 pb-6 shadow-xl transition-all xl:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'}`} aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col py-3">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-3.5 font-semibold transition ${isActive ? 'bg-blue-50 text-[#0B4DA2]' : 'text-slate-700 hover:bg-slate-50'}`}>{link.label}</NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">Join a Class</NavLink>
        </div>
      </nav>
    </header>
  )
}
