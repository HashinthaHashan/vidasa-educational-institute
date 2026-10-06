import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { classes } from '../../data/classes'
import ClassCard from '../common/ClassCard'
import SectionTitle from '../common/SectionTitle'

export default function FeaturedClasses() {
  return (
    <section className="section-space bg-slate-50">
      <div className="container-shell">
        <SectionTitle eyebrow="Find your class" title="Featured Classes" description="Explore a selection of our currently listed classes. Contact the institute to confirm availability and enrolment details." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.slice(0, 3).map((item) => <ClassCard key={item.id} item={item} />)}
        </div>
        <div className="mt-10 text-center"><Link to="/classes" className="btn-secondary">View All Classes <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  )
}
