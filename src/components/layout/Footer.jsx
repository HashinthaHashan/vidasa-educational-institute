import { Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { getEmailUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from '../../config/site'

const links = [
  ['Home', '/'], ['About', '/about'], ['Classes', '/classes'], ['Teachers', '/teachers'],
  ['Timetable', '/timetable'], ['Gallery', '/gallery'], ['Contact', '/contact'],
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#062e63] text-white">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr] lg:py-16">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-6 text-sm leading-7 text-blue-100">A supportive educational environment focused on quality teaching, academic development and student success.</p>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.facebookUrl || '/contact'} aria-label="Vidasa on Facebook" className="social-button"><Share2 size={18} /></a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" aria-label="Vidasa on WhatsApp" className="social-button"><MessageCircle size={18} /></a>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-blue-100">
            {links.map(([label, to]) => <li key={to}><Link className="transition hover:text-white" to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="mt-5 space-y-4 text-sm text-blue-100">
            <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-white" size={18} /><span>{siteConfig.address}</span></li>
            <li><a href={getPhoneUrl()} className="flex gap-3 transition hover:text-white"><Phone className="shrink-0 text-white" size={18} /><span>{siteConfig.phoneDisplay}</span></a></li>
            <li><a href={getEmailUrl()} className="flex gap-3 transition hover:text-white"><Mail className="shrink-0 text-white" size={18} /><span>{siteConfig.emailDisplay}</span></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-center text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {year} VIDASA EDUCATIONAL INSTITUTE. All Rights Reserved.</p>
          <p>Quality education. Brighter futures.</p>
        </div>
      </div>
    </footer>
  )
}
