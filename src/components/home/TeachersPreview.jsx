import { Link } from 'react-router-dom'
import TeacherCard from '../common/TeacherCard'
import RevealOnScroll from '../motion/RevealOnScroll'
import StaggerContainer from '../motion/StaggerContainer'
import { teachers } from '../../data/teachers'

export default function TeachersPreview() {
  return (
    <section className="section-space bg-[#071b3d] text-white">
      <div className="container-shell">
        <RevealOnScroll className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">Our teaching team</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Learn with dedicated educators</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Meet a selection of the teachers supporting students across Vidasa’s subjects and grade levels.</p>
          </div>
          <Link to="/teachers" className="btn-light shrink-0">View All Teachers</Link>
        </RevealOnScroll>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" amount={0.08}>
          {teachers.slice(0, 3).map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} compact />)}
        </StaggerContainer>
      </div>
    </section>
  )
}
