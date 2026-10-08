import { BookOpenCheck, Camera, GraduationCap, HeartHandshake, MessageCircle, ShieldCheck } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import { getWhatsAppUrl, siteConfig } from '../config/site'
import { teachers } from '../data/teachers'
import StaggerContainer from '../components/motion/StaggerContainer'
import HoverLiftCard from '../components/motion/HoverLiftCard'

const values = [
  { icon: GraduationCap, title: 'Qualified educators', text: 'Teachers committed to clear explanations and quality learning.' },
  { icon: HeartHandshake, title: 'Dedicated teaching', text: 'A supportive approach that helps students learn with confidence.' },
  { icon: BookOpenCheck, title: 'Academic progress', text: 'Guidance focused on understanding, improvement and success.' },
  { icon: ShieldCheck, title: 'Positive environment', text: 'A safe and welcoming setting for students and teachers.' },
]

export default function Teachers() {
  return (
    <>
      <PageHero title="Our Teachers" description="Seven dedicated educators working together to support student learning and personal growth." />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="teacher-count-panel"><GraduationCap size={42} className="text-blue-200" /><strong className="mt-12 block text-8xl font-black">{siteConfig.teachers}</strong><p className="mt-3 text-xl font-bold">Dedicated teachers</p><p className="mt-3 max-w-sm leading-7 text-blue-100">Supporting students from Grade 1 through Grade 11.</p></div>
            <div><SectionTitle eyebrow="The people behind the learning" title="Teachers who lead with dedication" description="Our teaching team is committed to creating a learning environment where students can ask questions, strengthen their knowledge and make steady progress." align="left" /><div className="mt-8 grid gap-4 sm:grid-cols-2">{values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-100 p-5 shadow-sm"><Icon size={22} className="text-[#0B4DA2]" /><h3 className="mt-4 font-extrabold text-[#071b3d]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div>
          </div>
        </div>
      </section>
      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          {teachers.length > 0 ? (
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teachers.map((teacher) => (
                <HoverLiftCard key={teacher.id} className="card overflow-hidden">
                  {teacher.image ? <img src={teacher.image} alt={`${teacher.name}, ${teacher.subject} teacher at Vidasa`} className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105" loading="lazy" width="900" height="675" /> : <div className="grid aspect-[4/3] place-items-center bg-blue-50 text-[#0B4DA2]" role="img" aria-label={`Photo not yet available for ${teacher.name}`}><GraduationCap size={46} /></div>}
                  <div className="p-6"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#D71920]">{teacher.subject}</p><h2 className="mt-2 text-xl font-black text-[#071b3d]">{teacher.name}</h2><p className="mt-1 font-semibold text-[#0B4DA2]">{teacher.grades}</p><p className="mt-4 text-sm leading-6 text-slate-600">{teacher.description}</p></div>
                </HoverLiftCard>
              ))}
            </StaggerContainer>
          ) : (
            <div className="photo-ready-panel"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Camera size={27} /></span><div className="flex-1"><h2 className="text-2xl font-black text-[#071b3d]">Teacher profiles are coming soon</h2><p className="mt-2 leading-7 text-slate-600">Official teacher names, subjects and photographs will be added here once the institute provides them.</p></div><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-secondary shrink-0"><MessageCircle size={18} /> Ask about a teacher</a></div>
          )}
        </div>
      </section>
    </>
  )
}
