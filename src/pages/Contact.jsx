import { useState } from 'react'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import BrandIcon from '../components/common/BrandIcon'
import InstituteMap from '../components/common/InstituteMap'
import PageHero from '../components/common/PageHero'
import { getEmailUrl, getMapsUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from '../config/site'

const contactItems = [
  { icon: MapPin, title: 'Visit us', text: siteConfig.location.address, href: getMapsUrl(), external: true },
  { icon: Phone, title: 'Call us', text: siteConfig.phoneDisplay, href: getPhoneUrl() },
  { icon: BrandIcon, iconProps: { brand: 'whatsapp' }, title: 'WhatsApp', text: siteConfig.whatsappDisplay, href: getWhatsAppUrl(), external: true },
  { icon: Mail, title: 'Email us', text: siteConfig.emailDisplay, href: getEmailUrl() },
]

export default function Contact() {
  const [notice, setNotice] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hello Vidasa Educational Institute,',
      '',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      data.get('email') ? `Email: ${data.get('email')}` : null,
      '',
      `Inquiry: ${data.get('message')}`,
    ].filter(Boolean).join('\n')
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
    setNotice('WhatsApp has opened with your inquiry ready. Please review and tap Send to deliver it.')
  }

  return (
    <>
      <PageHero title="Contact Vidasa" description="Ask about classes, schedules and enrolment. Our team is ready to help." />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{contactItems.map(({ icon: Icon, iconProps = {}, title, text, href, external }) => <a key={title} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="contact-card"><span className="contact-icon"><Icon size={23} {...iconProps} /></span><h2 className="mt-5 font-extrabold text-[#071b3d]">{title}</h2><p className="mt-2 break-words text-sm leading-6 text-slate-600">{text}</p></a>)}</div>

          <InstituteMap className="mt-12" />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div id="contact-form" className="card p-6 sm:p-9"><p className="eyebrow">Send an inquiry</p><h2 className="mt-3 text-3xl font-black text-[#071b3d]">How can we help?</h2><p className="mt-3 text-sm leading-6 text-slate-600">Complete the form and WhatsApp will open with your message ready. Nothing is sent until you review it and tap Send.</p><form className="mt-8 space-y-5" onSubmit={handleSubmit}><div className="grid gap-5 sm:grid-cols-2"><label className="form-label">Name <span className="text-[#D71920]">*</span><input className="form-input mt-2" type="text" name="name" autoComplete="name" required placeholder="Your full name" /></label><label className="form-label">Phone number <span className="text-[#D71920]">*</span><input className="form-input mt-2" type="tel" name="phone" autoComplete="tel" required inputMode="tel" placeholder="Your phone number" /></label></div><label className="form-label">Email<input className="form-input mt-2" type="email" name="email" autoComplete="email" placeholder="Your email address" /></label><label className="form-label">Message <span className="text-[#D71920]">*</span><textarea className="form-input mt-2 min-h-36 resize-y" name="message" required placeholder="Tell us the grade or subject you need" /></label><button type="submit" className="btn-primary w-full justify-center sm:w-auto"><BrandIcon brand="whatsapp" size={18} /> Continue to WhatsApp</button>{notice && <p className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-[#0B4DA2]" role="status">{notice}</p>}</form></div>

            <aside className="contact-side-panel"><MapPin size={34} className="text-blue-200" /><p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Our location</p><h2 className="mt-3 text-3xl font-black text-white">{siteConfig.location.address}</h2><a href={getMapsUrl()} target="_blank" rel="noopener noreferrer" className="btn-light mt-7">Open in Google Maps <ExternalLink size={17} /></a><div className="mt-10 border-t border-white/10 pt-8"><p className="text-sm font-bold text-white">Follow Vidasa</p><div className="mt-4 flex flex-col gap-3"><a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-link"><BrandIcon brand="facebook" size={18} /> Facebook page</a><a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" className="social-link"><BrandIcon brand="tiktok" size={18} /> TikTok @vidasa.education</a></div></div></aside>
          </div>
        </div>
      </section>
    </>
  )
}
