import PageHero from '../components/common/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import TeacherCard from '../components/common/TeacherCard'
import { teachers } from '../data/teachers'

export default function Teachers() {
  return (
    <>
      <PageHero title="Our Teachers" description="Meet the educators who guide, encourage and support students throughout their learning journey." />
      <section className="section-space">
        <div className="container-shell">
          <SectionTitle eyebrow="Our teaching team" title="Committed to Student Progress" description="Vidasa teachers create a clear and encouraging learning experience that helps students strengthen their understanding and confidence." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teachers.map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)}
          </div>
          <p className="mt-8 rounded-xl border-l-4 border-[#D71920] bg-slate-50 p-4 text-sm leading-6 text-slate-600">Teacher names and profiles are sample content. Replace them with the institute’s official teacher information and photographs before publishing.</p>
        </div>
      </section>
    </>
  )
}
