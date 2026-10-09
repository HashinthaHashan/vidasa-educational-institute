import { BookOpenCheck } from 'lucide-react'
import BrandIcon from '../components/common/BrandIcon'
import PageHero from '../components/common/PageHero'
import ClassCard from '../components/common/ClassCard'
import SectionTitle from '../components/common/SectionTitle'
import { subjects, gradeGroups } from '../data/classes'
import { getWhatsAppUrl } from '../config/site'
import StaggerContainer from '../components/motion/StaggerContainer'

export default function Classes() {
  return (
    <>
      <PageHero title="Classes & Subjects" description="Learning opportunities for students from Grade 1 to Grade 11 across seven subject areas." />
      <section className="section-space bg-[#f5f8fd]">
        <div className="container-shell">
          <div className="grade-banner">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Grade coverage</p><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">From Grade 1 to Grade 11</h2></div>
            <div className="flex flex-wrap gap-2">{gradeGroups.map((group) => <span key={group} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white">{group}</span>)}</div>
          </div>

          <div className="mt-16">
            <SectionTitle eyebrow="Subject areas" title="Find the right learning support" description="Select a subject and contact us to confirm the current grade group, teacher and schedule." />
            <StaggerContainer className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {subjects.map((item, index) => <ClassCard key={item.id} item={item} index={index} />)}
            </StaggerContainer>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-9">
            <div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><BookOpenCheck size={24} /></span><div><h2 className="text-xl font-extrabold text-[#071b3d]">Need the latest class details?</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Schedules and grade availability can change. Message our team for the current information before attending.</p></div></div>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-primary shrink-0"><BrandIcon brand="whatsapp" size={18} /> Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
