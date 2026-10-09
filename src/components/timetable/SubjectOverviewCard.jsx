import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { SubjectIcon } from './SubjectBadge'

export default function SubjectOverviewCard({ subject, sessionCount, index, onSelect }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      className="timetable-subject-card group"
      style={{ '--subject-color': subject.color, '--subject-soft': subject.softColor }}
      onClick={() => onSelect(subject.value)}
      aria-label={`View ${subject.label} schedule`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
    >
      <span className="timetable-subject-icon"><SubjectIcon subject={subject.value} size={23} /></span>
      <span className="mt-5 block text-left">
        <span className="block text-lg font-black text-[#071b3d]">{subject.label}</span>
        <span className="mt-1 block text-sm font-semibold text-slate-500" lang="si">{subject.sinhala}</span>
      </span>
      <span className="mt-6 flex items-end justify-between gap-3">
        <span className="text-left"><strong className="text-2xl font-black text-[#071b3d]">{sessionCount}</strong><span className="ml-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">sessions</span></span>
        <span className="flex items-center gap-1 text-xs font-extrabold" style={{ color: subject.color }}>View Schedule <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" /></span>
      </span>
    </motion.button>
  )
}
