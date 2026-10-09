import { BookOpen, CalendarDays, Clock3 } from 'lucide-react'
import { formatGradeLabel, formatSessionTime } from '../../data/timetable2027'
import SubjectBadge from './SubjectBadge'

export default function ScheduleTable({ sessions, teacherById }) {
  return (
    <div className="timetable-table-wrap hidden md:block">
      <table className="timetable-table">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">Grade / Group</th>
            <th scope="col"><span className="inline-flex items-center gap-2"><CalendarDays size={16} /> Day</span></th>
            <th scope="col"><span className="inline-flex items-center gap-2"><Clock3 size={16} /> Time</span></th>
            <th scope="col"><span className="inline-flex items-center gap-2"><BookOpen size={16} /> Class Type</span></th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => {
            const teacher = teacherById[session.teacherId]
            const pending = session.status === 'time-pending'
            return (
              <tr key={session.id}>
                <td><SubjectBadge subject={session.subject} /><span className="mt-2 block text-xs font-semibold text-slate-500">{teacher?.name}</span></td>
                <td className="font-extrabold text-[#071b3d]">{formatGradeLabel(session)}</td>
                <td>{session.day}</td>
                <td><span className={pending ? 'font-extrabold text-amber-700' : 'font-bold text-slate-700'}>{formatSessionTime(session)}</span>{pending && <span className="mt-1 block text-xs text-amber-700">Owner confirmation required</span>}</td>
                <td>{session.classType ? <span className={`class-type-badge class-type-${session.classType.toLowerCase().replace(' ', '-')}`}>{session.classType}</span> : <span className="text-slate-400" aria-label="Class type not provided">—</span>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
