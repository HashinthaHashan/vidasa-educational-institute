import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getWhatsAppUrl } from '../../config/site'

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0B4DA2] px-6 py-12 text-center shadow-xl shadow-blue-950/15 sm:px-12 lg:py-16">
          <div className="cta-shape cta-shape-one" aria-hidden="true" />
          <div className="cta-shape cta-shape-two" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100">Take the next step</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Start Your Learning Journey with Vidasa</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">Speak with our team to learn about available classes, schedules and the right learning options for you or your child.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-light justify-center">Contact Us <ArrowRight size={18} /></Link>
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-outline-light justify-center"><MessageCircle size={18} /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
