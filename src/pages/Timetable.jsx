import { CalendarClock, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { getPhoneUrl, getWhatsAppUrl } from '../config/site'

export default function Timetable() {
  return (
    <>
      <PageHero title="Class Schedules" description="Get the latest day and time for your child’s grade and subject directly from our team." />
      <section className="section-space bg-[#f5f8fd]">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-blue-950/5">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="grid min-h-72 place-items-center bg-[#071b3d] p-10 text-white"><div className="text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white/10"><CalendarClock size={38} /></span><h2 className="mt-6 text-3xl font-black">Current timetable</h2><p className="mt-3 text-blue-100">Verified schedule only</p></div></div>
              <div className="p-8 sm:p-12"><p className="eyebrow">Always up to date</p><h2 className="mt-3 text-3xl font-black text-[#071b3d]">Confirm your class before attending</h2><p className="mt-5 leading-8 text-slate-600">The official timetable has not been provided for the website yet. Contact Vidasa directly for the current day, time, teacher and hall for your chosen class.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-primary justify-center"><MessageCircle size={18} /> Ask on WhatsApp</a><a href={getPhoneUrl()} className="btn-secondary justify-center"><Phone size={18} /> Call 076 720 2991</a></div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
