import { Award, BookText, Calculator, FlaskConical, Languages, Music2, PersonStanding } from 'lucide-react'
import { timetableSubjectMap } from '../../data/timetable2027'

const subjectIcons = {
  award: Award,
  'book-text': BookText,
  calculator: Calculator,
  flask: FlaskConical,
  languages: Languages,
  music: Music2,
  'person-standing': PersonStanding,
}

export function SubjectIcon({ subject, size = 18, className = '' }) {
  const metadata = timetableSubjectMap[subject]
  const Icon = subjectIcons[metadata?.icon] || BookText
  return <Icon size={size} className={className} aria-hidden="true" />
}

export default function SubjectBadge({ subject, showIcon = true }) {
  const metadata = timetableSubjectMap[subject]

  return (
    <span
      className="timetable-subject-badge"
      style={{ color: metadata.color, backgroundColor: metadata.softColor }}
    >
      {showIcon && <SubjectIcon subject={subject} size={15} />}
      {metadata.label}
    </span>
  )
}
