import { GraduationCap, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TeachersPreview() {
  return (
    <section className="section-space bg-[#071b3d] text-white">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">Our teaching team</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Seven educators. One shared commitment.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Our teachers are committed to clear guidance, dedicated teaching and a positive learning experience for every student.</p>
          <Link to="/teachers" className="btn-light mt-8">Meet the team</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"><UsersRound size={30} className="text-blue-200" /><strong className="mt-8 block text-5xl font-black">7</strong><span className="mt-2 block text-sm text-blue-100">Dedicated teachers</span></div>
          <div className="mt-8 rounded-3xl bg-[#D71920] p-7"><GraduationCap size={30} className="text-red-100" /><strong className="mt-8 block text-4xl font-black">1–11</strong><span className="mt-2 block text-sm text-red-100">Grade coverage</span></div>
        </div>
      </div>
    </section>
  )
}
