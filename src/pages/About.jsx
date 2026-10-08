import { DoorOpen, Eye, ShieldCheck, Target, UsersRound } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import { instituteHalls, siteConfig } from '../config/site'

export default function About() {
  return (
    <>
      <PageHero title="About Vidasa" description="A trusted learning space in Kotamulla where students are encouraged to learn with confidence and grow with purpose." />

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="Who we are" title="Education with purpose, care and dedication" description="Vidasa Educational Institute provides classes for students from Grade 1 to Grade 11 in a safe, clean, comfortable and supportive learning environment." align="left" />
            <p className="mt-6 leading-8 text-slate-600">Located in Kotamulla, Karangoda, Ratnapura, our institute brings together 200+ registered students and seven teachers across a broad range of school subjects.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <article className="metric-card"><strong>{siteConfig.students}</strong><span>Registered students</span></article>
            <article className="metric-card mt-8"><strong>{siteConfig.teachers}</strong><span>Teachers</span></article>
            <article className="metric-card"><strong>7</strong><span>Subject areas</span></article>
            <article className="metric-card mt-8"><strong>1–11</strong><span>Grade coverage</span></article>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f5f8fd]">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <article className="purpose-card purpose-card-blue">
            <span className="purpose-icon"><Target size={28} /></span>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Our mission</p>
            <h2 className="mt-3 text-3xl font-black text-white">Learning with confidence</h2>
            <p className="mt-5 leading-8 text-blue-50">{siteConfig.mission}</p>
          </article>
          <article className="purpose-card purpose-card-light">
            <span className="purpose-icon purpose-icon-red"><Eye size={28} /></span>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#D71920]">Our vision</p>
            <h2 className="mt-3 text-3xl font-black text-[#071b3d]">A trusted standard in education</h2>
            <p className="mt-5 leading-8 text-slate-600">{siteConfig.vision}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle eyebrow="Our facilities" title="Two spaces for focused learning" description="Our halls support both larger class groups and more focused small-group sessions." />
          <div className="mx-auto mt-11 grid max-w-4xl gap-6 md:grid-cols-2">
            {instituteHalls.map((hall, index) => (
              <article key={hall.name} className="card p-7 sm:p-9">
                <div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><DoorOpen size={27} /></span><span className="text-sm font-extrabold text-slate-400">0{index + 1}</span></div>
                <h3 className="mt-7 text-2xl font-black text-[#071b3d]">{hall.name}</h3>
                <p className="mt-2 text-slate-500">{hall.description}</p>
                <div className="mt-7 flex items-end gap-3 border-t border-slate-100 pt-6"><UsersRound size={24} className="mb-1 text-[#D71920]" /><strong className="text-4xl font-black text-[#071b3d]">{hall.capacity}</strong><span className="mb-1 text-sm font-semibold text-slate-500">student capacity</span></div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl items-start gap-4 rounded-2xl bg-blue-50 p-5 text-sm leading-6 text-[#0B4DA2]"><ShieldCheck className="mt-0.5 shrink-0" size={21} /><p>Our learning environment is guided by safety, cleanliness, comfort and student wellbeing.</p></div>
        </div>
      </section>
    </>
  )
}
