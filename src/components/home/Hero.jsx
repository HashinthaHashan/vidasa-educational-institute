import { BookOpen, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import officialLogo from '../../assets/images/brand/vidasa-official-logo.jpg'
import { getWhatsAppUrl, siteConfig } from '../../config/site'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[690px] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B4DA2] shadow-sm backdrop-blur">
            <Sparkles size={15} className="text-[#D71920]" /> Grades 1 to 11 · Ratnapura
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#071b3d] sm:text-6xl lg:text-[4.85rem]">
            A better place to <span className="text-[#0B4DA2]">learn</span>, grow and <span className="text-[#D71920]">succeed.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">A safe, supportive learning environment where 200+ students build knowledge and confidence with dedicated teachers.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/classes" className="btn-primary justify-center"><BookOpen size={18} /> Explore subjects</Link>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-secondary justify-center"><MessageCircle size={18} /> WhatsApp us</a>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin size={18} className="text-[#D71920]" /> {siteConfig.address}</p>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
          <div className="hero-logo-card">
            <span className="hero-card-kicker">Welcome to</span>
            <img src={officialLogo} alt="Vidasa Educational Institute official logo" className="mx-auto mt-4 aspect-square w-full max-w-[330px] object-contain" />
            <p className="mt-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0B4DA2]">{siteConfig.tagline}</p>
          </div>
          <div className="absolute -bottom-7 left-2 rounded-2xl bg-[#071b3d] px-5 py-4 text-white shadow-2xl sm:-left-9">
            <strong className="block text-2xl font-black">200+</strong>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Registered students</span>
          </div>
          <div className="absolute right-2 -top-6 rounded-2xl bg-[#D71920] px-5 py-4 text-white shadow-2xl sm:-right-7">
            <strong className="block text-2xl font-black">7</strong>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-100">Dedicated teachers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
