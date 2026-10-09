import { BookOpen, CalendarDays, Clock3, GraduationCap } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { formatGradeLabel, formatSessionTime } from '../../data/timetable2027'
import SubjectBadge from './SubjectBadge'

export default function SessionCard({ session, teacherName, compact = false }) {
  const reduceMotion = useReducedMotion()
  const pending = session.status === 'time-pending'

  return (
    <motion.article
      layout={!reduceMotion}
      className={compact ? 'weekly-session-card' : 'timetable-mobile-card'}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SubjectBadge subject={session.subject} />
        {pending && <span className="time-pending-badge">Time pending</span>}
      </div>
      <h3 className={`${compact ? 'mt-3 text-lg' : 'mt-5 text-xl'} font-black text-[#071b3d]`}>{formatGradeLabel(session)}</h3>
      <div className={`${compact ? 'mt-3 gap-2' : 'mt-5 gap-3'} grid text-sm text-slate-600`}>
        <p className="timetable-detail"><CalendarDays size={17} /><span>{session.day}</span></p>
        <p className={`timetable-detail ${pending ? 'font-bold text-amber-700' : ''}`}><Clock3 size={17} /><span>{formatSessionTime(session)}</span></p>
        <p className="timetable-detail"><BookOpen size={17} /><span>{session.classType || 'Class type not provided'}</span></p>
        {teacherName && <p className="timetable-detail"><GraduationCap size={17} /><span>{teacherName}</span></p>}
      </div>
    </motion.article>
  )
}
