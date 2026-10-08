import { Link } from 'react-router-dom'
import { subjects } from '../../data/classes'
import ClassCard from '../common/ClassCard'
import SectionTitle from '../common/SectionTitle'
import StaggerContainer from '../motion/StaggerContainer'

export default function FeaturedClasses() {
  return (
    <section className="section-space bg-[#f5f8fd]">
      <div className="container-shell">
        <SectionTitle eyebrow="What we teach" title="Subjects for growing minds" description="Explore our subject areas for school students. Contact the institute to confirm the current class for your child’s grade." />
        <StaggerContainer className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subjects.slice(0, 6).map((item, index) => <ClassCard key={item.id} item={item} index={index} />)}
        </StaggerContainer>
        <div className="mt-10 text-center"><Link to="/classes" className="btn-secondary">View all 7 subjects</Link></div>
      </div>
    </section>
  )
}
