import { Armchair, HeartHandshake, ShieldCheck, Sparkles, UserCheck, Waves } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import HoverLiftCard from '../motion/HoverLiftCard'
import RevealOnScroll from '../motion/RevealOnScroll'
import StaggerContainer from '../motion/StaggerContainer'

const reasons = [
  { icon: ShieldCheck, title: 'Student safety', text: 'A safe, structured environment where families can feel confident.' },
  { icon: UserCheck, title: 'Dedicated teachers', text: 'Qualified educators supported to teach with focus and dedication.' },
  { icon: Armchair, title: 'Comfortable seating', text: 'New desks and benches help students stay comfortable and attentive.' },
  { icon: Waves, title: 'Hygienic facilities', text: 'Clean washroom facilities support a healthier institute experience.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-[#f5f8fd]">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <RevealOnScroll className="lg:sticky lg:top-28">
          <SectionTitle eyebrow="Why choose Vidasa" title="Trust is built into the environment" description="Good teaching works best when the space around it is clean, comfortable and supportive." align="left" />
          <div className="mt-8 rounded-3xl bg-[#071b3d] p-7 text-white shadow-xl">
            <Sparkles size={26} className="text-blue-200" />
            <p className="mt-6 text-xl font-extrabold leading-8">A brighter future starts with a place where every student feels ready to learn.</p>
            <p className="mt-4 text-sm leading-6 text-blue-100">From Grade 1 to Grade 11, the focus remains on confidence, academic growth and personal development.</p>
          </div>
        </RevealOnScroll>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <HoverLiftCard key={title} className={`feature-card ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}>
              <span className={`feature-icon ${index === 1 ? 'feature-icon-red' : ''}`}><Icon size={24} /></span>
              <h3 className="mt-7 text-xl font-extrabold text-[#071b3d]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </HoverLiftCard>
          ))}
          <HoverLiftCard className="feature-card sm:col-span-2 lg:mt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center"><span className="feature-icon"><HeartHandshake size={24} /></span><div><h3 className="text-xl font-extrabold text-[#071b3d]">A genuinely student-centred approach</h3><p className="mt-2 leading-7 text-slate-600">Students are encouraged to learn with confidence while teachers are given an environment where they can teach with dedication.</p></div></div>
          </HoverLiftCard>
        </StaggerContainer>
      </div>
    </section>
  )
}
