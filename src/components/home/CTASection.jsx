import { Mail, MessageCircle } from 'lucide-react'
import { getEmailUrl, getWhatsAppUrl } from '../../config/site'

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="cta-panel">
          <div className="cta-shape cta-shape-one" aria-hidden="true" />
          <div className="cta-shape cta-shape-two" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-100">Start the conversation</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Find the right class for your child.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Ask us about current grade groups, class schedules and enrolment details.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-light justify-center"><MessageCircle size={18} /> WhatsApp us</a>
              <a href={getEmailUrl()} className="btn-outline-light justify-center"><Mail size={18} /> Send an email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
