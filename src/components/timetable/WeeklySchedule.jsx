import { CalendarDays } from 'lucide-react'
import { timetableDays } from '../../data/timetable2027'
import SessionCard from './SessionCard'

export default function WeeklySchedule({ sessions, teacherById }) {
  const activeDays = timetableDays
    .map((day) => ({
      day,
      sessions: sessions
        .filter((session) => session.day === day)
        .sort((first, second) => (first.startTime || '99:99').localeCompare(second.startTime || '99:99')),
    }))
    .filter((group) => group.sessions.length > 0)

  return (
    <div className="weekly-schedule-grid">
      {activeDays.map((group) => (
        <section key={group.day} className="weekly-day-column" aria-labelledby={`weekly-${group.day.toLowerCase()}`}>
          <header className="weekly-day-header">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-[#0B4DA2]"><CalendarDays size={19} /></span>
            <div><h3 id={`weekly-${group.day.toLowerCase()}`} className="font-black text-[#071b3d]">{group.day}</h3><p className="mt-0.5 text-xs font-semibold text-slate-500">{group.sessions.length} {group.sessions.length === 1 ? 'session' : 'sessions'}</p></div>
          </header>
          <div className="grid gap-3 p-3 sm:p-4">
            {group.sessions.map((session) => <SessionCard key={session.id} session={session} teacherName={teacherById[session.teacherId]?.name} compact />)}
          </div>
        </section>
      ))}
    </div>
  )
}
