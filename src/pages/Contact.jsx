import { useState } from 'react'
import { ExternalLink, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { getEmailUrl, getPhoneUrl, getWhatsAppUrl, siteConfig } from '../config/site'

const contactItems = [
  { icon: MapPin, title: 'Visit Us', text: siteConfig.address, href: '#map' },
  { icon: Phone, title: 'Call Us', text: siteConfig.phoneDisplay, href: getPhoneUrl() },
  { icon: MessageCircle, title: 'WhatsApp', text: siteConfig.whatsappDisplay, href: getWhatsAppUrl(), external: true },
  { icon: Mail, title: 'Email Us', text: siteConfig.emailDisplay, href: getEmailUrl() },
]

export default function Contact() {
  const [notice, setNotice] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!siteConfig.email) {
      setNotice('Your message is ready, but the official institute email address has not been added yet. Please use the phone or WhatsApp contact once those details are available.')
      return
    }
    const subject = encodeURIComponent(`Website inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setNotice('Your email application should open with the completed message. This form does not store or send data to a server.')
  }

  return (
    <>
      <PageHero title="Contact Us" description="Get in touch to ask about classes, schedules, enrolment or any other institute information." />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ icon: Icon, title, text, href, external }) => <a key={title} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="card group p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2] transition group-hover:bg-[#0B4DA2] group-hover:text-white"><Icon size={23} /></span><h2 className="mt-5 font-bold text-slate-950">{title}</h2><p className="mt-2 break-words text-sm leading-6 text-slate-600">{text}</p></a>)}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div id="contact-form" className="card p-6 sm:p-8">
              <p className="eyebrow">Send an inquiry</p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">How can we help?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">This frontend-only form opens your email application after the official institute email is configured. It does not submit information to a server.</p>
              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="form-label">Name <span className="text-[#D71920]">*</span><input className="form-input mt-2" type="text" name="name" autoComplete="name" required placeholder="Your full name" /></label>
                  <label className="form-label">Phone Number <span className="text-[#D71920]">*</span><input className="form-input mt-2" type="tel" name="phone" autoComplete="tel" required placeholder="Your phone number" /></label>
                </div>
                <label className="form-label">Email<input className="form-input mt-2" type="email" name="email" autoComplete="email" placeholder="Your email address" /></label>
                <label className="form-label">Message <span className="text-[#D71920]">*</span><textarea className="form-input mt-2 min-h-36 resize-y" name="message" required placeholder="Tell us which class or information you need" /></label>
                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">Prepare Email <Send size={18} /></button>
                {notice && <p className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-[#0B4DA2]" role="status">{notice}</p>}
              </form>
            </div>

            <div id="map" className="flex min-h-[460px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-[#f4f8ff] p-8 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0B4DA2] text-white"><MapPin size={30} /></span>
              <h2 className="mt-6 text-2xl font-extrabold text-slate-950">Find Vidasa</h2>
              <p className="mt-3 max-w-sm leading-7 text-slate-600">Add the official Google Maps embed URL here after the institute location is confirmed.</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-secondary mt-6">Open Google Maps <ExternalLink size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
