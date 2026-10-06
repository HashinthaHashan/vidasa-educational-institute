import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teachers } from '../../data/teachers'
import SectionTitle from '../common/SectionTitle'
import TeacherCard from '../common/TeacherCard'

export default function TeachersPreview() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-shell">
        <SectionTitle eyebrow="Meet the educators" title="Guidance from Dedicated Teachers" description="Our teachers help students understand key concepts, build confidence and develop consistent learning habits." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.slice(0, 3).map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)}
        </div>
        <div className="mt-10 text-center"><Link to="/teachers" className="btn-secondary">Meet Our Teachers <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  )
}
