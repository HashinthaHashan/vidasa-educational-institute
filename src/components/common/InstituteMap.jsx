import { ExternalLink, MapPin, Navigation } from 'lucide-react'
import { getDirectionsUrl, getMapsUrl, siteConfig } from '../../config/site'
import AnimatedButton from '../motion/AnimatedButton'
import RevealOnScroll from '../motion/RevealOnScroll'

export default function InstituteMap({ className = '' }) {
  return (
    <RevealOnScroll className={className}>
      <section className="location-map-card" aria-labelledby="institute-map-title">
        <div className="location-map-details">
          <span className="location-map-icon" aria-hidden="true"><MapPin size={26} /></span>
          <p className="eyebrow mt-6">Visit our institute</p>
          <h2 id="institute-map-title" className="mt-3 text-3xl font-black tracking-tight text-[#071b3d] sm:text-4xl">Find Us on Google Maps</h2>
          <p className="mt-5 text-lg font-extrabold text-[#0B4DA2]">{siteConfig.name}</p>
          <p className="mt-2 flex items-start gap-2 text-sm font-semibold leading-6 text-slate-600">
            <MapPin className="mt-0.5 shrink-0 text-[#D71920]" size={18} aria-hidden="true" />
            <span>{siteConfig.location.address}</span>
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">Visit VIDASA Educational Institute and discover a safe, comfortable, and supportive environment for learning.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton href={getDirectionsUrl()} external className="btn-primary justify-center">
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </AnimatedButton>
            <AnimatedButton href={getMapsUrl()} external className="btn-secondary justify-center">
              <ExternalLink size={18} aria-hidden="true" /> Open in Google Maps
            </AnimatedButton>
          </div>
        </div>

        <div className="location-map-wrap">
          <iframe
            className="location-map-frame"
            src={siteConfig.location.embedUrl}
            title="VIDASA Educational Institute Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </RevealOnScroll>
  )
}
