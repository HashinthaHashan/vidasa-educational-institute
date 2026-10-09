import { Award, BookText, Calculator, CheckCircle2, FlaskConical, GraduationCap, Languages, Music2, PersonStanding } from 'lucide-react'
import HoverLiftCard from '../motion/HoverLiftCard'

const subjectIcons = {
  calculator: Calculator,
  flask: FlaskConical,
  languages: Languages,
  'book-text': BookText,
  music: Music2,
  'person-standing': PersonStanding,
  award: Award,
}

export default function TeacherCard({ teacher, compact = false }) {
  const SubjectIcon = subjectIcons[teacher.icon] || GraduationCap

  return (
    <HoverLiftCard className="teacher-profile-card group">
      <div className={`teacher-photo-area ${compact ? 'teacher-photo-area-compact' : ''}`}>
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={`${teacher.name}, ${teacher.subject} teacher at Vidasa Educational Institute`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ objectPosition: teacher.imagePosition || 'center' }}
            loading="lazy"
            width="900"
            height="675"
          />
        ) : (
          <div className="teacher-photo-placeholder" role="img" aria-label={`Official photograph not yet available for ${teacher.name}`}>
            <span className="teacher-placeholder-ring" aria-hidden="true" />
            <span className="teacher-placeholder-icon"><SubjectIcon size={compact ? 32 : 40} strokeWidth={1.7} /></span>
            <span className="teacher-photo-label">Official photo coming soon</span>
          </div>
        )}
        <span className="teacher-subject-icon" aria-hidden="true"><SubjectIcon size={21} /></span>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? 'p-5' : 'p-6 sm:p-7'}`}>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[#D71920]">
          <span className="text-xs font-extrabold uppercase tracking-[0.13em]">{teacher.subject}</span>
          {teacher.subjectSinhala && <span className="sinhala-text text-sm font-bold">· {teacher.subjectSinhala}</span>}
        </p>
        <h2 className={`sinhala-text mt-3 font-black leading-snug text-[#071b3d] ${compact ? 'text-xl' : 'text-2xl'}`}>{teacher.name}</h2>

        <div className={`${compact ? 'mt-5' : 'mt-6'} border-t border-slate-100 pt-5`}>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">{teacher.credentialLabel}</p>
          <ul className="mt-3 space-y-2.5">
            {(compact ? teacher.credentials.slice(0, 2) : teacher.credentials).map((credential) => (
              <li key={credential} className="sinhala-text flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0B4DA2]" />
                <span className="min-w-0 break-words">{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HoverLiftCard>
  )
}
