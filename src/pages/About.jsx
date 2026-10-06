import { Armchair, BookMarked, CheckCircle2, Lightbulb, MonitorCheck, Target } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import SafeImage from '../components/common/SafeImage'
import instituteImage from '../assets/images/institute/institute-placeholder.svg'
import classroomImage from '../assets/images/institute/classroom-placeholder.svg'

const facilities = [
  { icon: Armchair, title: 'Comfortable Classrooms', text: 'Learning spaces arranged to support focus and participation.' },
  { icon: MonitorCheck, title: 'Teaching Resources', text: 'Space for the teaching tools and resources used in each lesson.' },
  { icon: BookMarked, title: 'Organized Learning', text: 'Clear class structures and schedules for students and parents.' },
]

export default function About() {
  return (
    <>
      <PageHero title="About Vidasa" description="A welcoming place where quality teaching, consistent guidance and student development come together." />

      <section className="section-space">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Who we are" title="Education with Purpose and Care" description="Vidasa Educational Institute provides classes for school students in an organized, supportive environment. Our focus is to help every learner strengthen their knowledge, confidence and study habits." align="left" />
            <p className="mt-5 leading-7 text-slate-600">We believe learning works best when students feel comfortable asking questions, receive clear explanations and are encouraged to make steady progress. Vidasa brings these values together through committed teachers and thoughtfully planned classes.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Student-centred approach', 'Clear academic guidance', 'Experienced teaching team', 'Positive learning culture'].map((item) => <p key={item} className="flex items-center gap-3 font-semibold text-slate-700"><CheckCircle2 size={19} className="text-[#0B4DA2]" />{item}</p>)}
            </div>
          </div>
          <SafeImage src={instituteImage} alt="Vidasa Educational Institute exterior placeholder" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <article className="card p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Target size={28} /></span>
            <h2 className="mt-6 text-2xl font-extrabold text-slate-950">Our Mission</h2>
            <p className="mt-4 leading-7 text-slate-600">To provide clear, reliable and student-focused education that helps school students develop knowledge, confidence and the motivation to reach their academic potential.</p>
          </article>
          <article className="card p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-[#D71920]"><Lightbulb size={28} /></span>
            <h2 className="mt-6 text-2xl font-extrabold text-slate-950">Our Vision</h2>
            <p className="mt-4 leading-7 text-slate-600">To be a trusted learning environment where students are inspired to think, grow and prepare for a future shaped by knowledge and good values.</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionTitle eyebrow="Learning environment" title="Designed for Focused Learning" description="Vidasa aims to provide an organized and comfortable setting where students can participate, ask questions and learn with confidence." />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SafeImage src={classroomImage} alt="Vidasa classroom interior placeholder" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" loading="lazy" />
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {facilities.map(({ icon: Icon, title, text }) => (
                <article key={title} className="flex gap-5 rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0B4DA2]"><Icon size={21} /></span>
                  <div><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell rounded-3xl bg-[#f4f8ff] p-8 sm:p-12">
          <SectionTitle eyebrow="Why Vidasa?" title="A Supportive Place to Progress" description="Our approach combines committed teaching, organized schedules and a positive environment so students can focus on meaningful academic growth." />
        </div>
      </section>
    </>
  )
}
