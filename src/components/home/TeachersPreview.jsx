import { Camera, GraduationCap, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teachers } from '../../data/teachers'
import RevealOnScroll from '../motion/RevealOnScroll'
import StaggerContainer from '../motion/StaggerContainer'
import HoverLiftCard from '../motion/HoverLiftCard'

export default function TeachersPreview() {
  return (
    <section className="section-space bg-[#071b3d] text-white">
      <div className="container-shell">
        <RevealOnScroll className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">Our teaching team</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Seven educators. One shared commitment.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Our teachers are committed to clear guidance, dedicated teaching and a positive learning experience for every student.</p>
            <Link to="/teachers" className="btn-light mt-8">Meet the team</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><UsersRound size={30} className="text-blue-200" /><strong className="mt-8 block text-5xl font-black">7</strong><span className="mt-2 block text-sm text-blue-100">Dedicated teachers</span></div>
            <div className="mt-8 rounded-3xl bg-white p-7 text-[#071b3d]"><GraduationCap size={30} className="text-[#D71920]" /><strong className="mt-8 block text-4xl font-black">1–11</strong><span className="mt-2 block text-sm text-slate-500">Grade coverage</span></div>
          </div>
        </RevealOnScroll>

        {teachers.length > 0 && (
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
            {teachers.slice(0, 3).map((teacher) => (
              <HoverLiftCard key={teacher.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                {teacher.image ? <img src={teacher.image} alt={`${teacher.name}, ${teacher.subject} teacher at Vidasa`} className="aspect-[4/3] w-full object-cover" loading="lazy" /> : <div className="grid aspect-[4/3] place-items-center bg-white/5"><Camera size={34} className="text-blue-200" /></div>}
                <div className="p-6"><p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-200">{teacher.subject}</p><h3 className="mt-2 text-xl font-black text-white">{teacher.name}</h3><p className="mt-2 text-sm text-blue-100">{teacher.grades}</p></div>
              </HoverLiftCard>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  )
}
