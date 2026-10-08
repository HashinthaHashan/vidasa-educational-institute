import { GraduationCap, Sparkles, UsersRound } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import TeacherCard from '../components/common/TeacherCard'
import RevealOnScroll from '../components/motion/RevealOnScroll'
import StaggerContainer from '../components/motion/StaggerContainer'
import { teachers } from '../data/teachers'

export default function Teachers() {
  return (
    <>
      <PageHero
        title="Meet Our Dedicated Teachers"
        description="Learn from passionate and qualified educators who are committed to helping every student grow with confidence."
      />

      <section className="section-space bg-[#f5f8fd]">
        <div className="container-shell">
          <RevealOnScroll className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <SectionTitle
              eyebrow="The people behind the learning"
              title="Guidance across seven subject areas"
              description="Meet the educators currently teaching at Vidasa Educational Institute. Every profile below uses verified information supplied by the institute."
              align="left"
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span className="teacher-summary-badge"><UsersRound size={18} /> 7 teachers</span>
              <span className="teacher-summary-badge teacher-summary-badge-red"><GraduationCap size={18} /> Grades 1–11</span>
            </div>
          </RevealOnScroll>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.08}>
            {teachers.map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)}
          </StaggerContainer>

          <RevealOnScroll className="mt-10 flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 text-sm leading-6 text-slate-600">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-[#0B4DA2]" />
            <p>Teacher photographs will be added only when official images are provided by the institute.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
