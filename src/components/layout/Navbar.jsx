import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../common/Logo'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Classes', to: '/classes' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Schedule', to: '/timetable' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'border-slate-200/80 shadow-[0_10px_35px_rgba(7,27,61,0.08)]' : 'border-slate-100 shadow-sm'}`}>
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `relative py-2 text-sm font-semibold transition-colors ${isActive ? 'text-[#0B4DA2]' : 'text-slate-700 hover:text-[#0B4DA2]'}`}>
              {({ isActive }) => <>{link.label}{isActive && <motion.span layoutId="nav-indicator" className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#D71920]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}</>}
            </NavLink>
          ))}
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}><Link to="/contact" className="btn-primary ml-1">Join a class</Link></motion.div>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#0B4DA2] transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" className="fixed inset-x-0 top-[76px] h-[calc(100vh-76px)] bg-slate-950/35 xl:hidden" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.nav id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 pb-6 shadow-2xl xl:hidden" aria-label="Mobile navigation" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mx-auto flex max-w-7xl flex-col py-3">
                {links.map((link, index) => <motion.div key={link.to} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.025 }}><NavLink to={link.to} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-xl px-3 py-3.5 font-semibold transition ${isActive ? 'bg-blue-50 text-[#0B4DA2]' : 'text-slate-700 hover:bg-slate-50'}`}>{link.label}</NavLink></motion.div>)}
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">Join a class</Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
