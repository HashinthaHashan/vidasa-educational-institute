import { MapPin, Navigation } from 'lucide-react'
import { getDirectionsUrl, siteConfig } from '../../config/site'
import AnimatedButton from '../motion/AnimatedButton'
import RevealOnScroll from '../motion/RevealOnScroll'

export default function VisitVidasa() {
  return (
    <section className="section-space bg-[#f5f8fd]">
      <div className="container-shell">
        <RevealOnScroll className="home-location-card">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">Visit VIDASA</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{siteConfig.name}</h2>
            <p className="mt-4 flex items-center gap-2 font-bold text-white">
              <MapPin size={20} className="shrink-0 text-red-300" aria-hidden="true" />
              {siteConfig.location.shortAddress}
            </p>
            <p className="mt-5 max-w-xl leading-7 text-blue-100">Visit our welcoming learning space and discover a safe, comfortable, and supportive environment where every student can grow with confidence.</p>
            <AnimatedButton href={getDirectionsUrl()} external className="btn-light mt-7 justify-center">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </AnimatedButton>
          </div>
          <div className="home-location-marker" aria-hidden="true"><MapPin size={54} /></div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
