import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  AlertCircle,
  ArrowUpDown,
  CalendarDays,
  CalendarRange,
  LayoutList,
  Phone,
  RotateCcw,
  SearchX,
  SlidersHorizontal,
} from 'lucide-react'
import BrandIcon from '../components/common/BrandIcon'
import PageHero from '../components/common/PageHero'
import ScheduleTable from '../components/timetable/ScheduleTable'
import SessionCard from '../components/timetable/SessionCard'
import SubjectOverviewCard from '../components/timetable/SubjectOverviewCard'
import WeeklySchedule from '../components/timetable/WeeklySchedule'
import {
  filterTimetableSessions,
  sortByDayAndTime,
  sortByStartTime,
  timetable2027,
  timetableDays,
  timetableSubjects,
} from '../data/timetable2027'
import { teachers } from '../data/teachers'
import { getPhoneUrl, getWhatsAppUrl } from '../config/site'

const teacherById = Object.fromEntries(teachers.map((teacher) => [teacher.id, teacher]))
const gradeOptions = Array.from({ length: 12 }, (_, index) => index + 1)

export default function Timetable() {
  const reduceMotion = useReducedMotion()
  const [subjectFilter, setSubjectFilter] = useState('all')
  const [gradeFilter, setGradeFilter] = useState('all')
  const [dayFilter, setDayFilter] = useState('all')
  const [sortMode, setSortMode] = useState('day-time')
  const [viewMode, setViewMode] = useState('list')

  const sessionCounts = useMemo(
    () => Object.fromEntries(timetableSubjects.map((subject) => [subject.value, timetable2027.filter((session) => session.subject === subject.value).length])),
    [],
  )

  const filteredSessions = useMemo(() => {
    const matching = filterTimetableSessions(timetable2027, {
      subject: subjectFilter,
      grade: gradeFilter,
      day: dayFilter,
    })

    return [...matching].sort(sortMode === 'start-time' ? sortByStartTime : sortByDayAndTime)
  }, [dayFilter, gradeFilter, sortMode, subjectFilter])

  const hasActiveFilters = subjectFilter !== 'all' || gradeFilter !== 'all' || dayFilter !== 'all'
  const transitionKey = `${viewMode}-${subjectFilter}-${gradeFilter}-${dayFilter}-${sortMode}`

  const clearFilters = () => {
    setSubjectFilter('all')
    setGradeFilter('all')
    setDayFilter('all')
  }

  const selectSubject = (subject) => {
    setSubjectFilter(subject)
    window.requestAnimationFrame(() => {
      document.getElementById('timetable-results')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <PageHero
        eyebrow="Official 2027 schedule"
        title="2027 Class Timetable"
        description="Find your class schedule easily. Explore available subjects, grades, and class times at VIDASA Educational Institute."
      />

      <section className="section-space bg-[#f5f8fd]">
        <div className="container-shell">
          <div className="timetable-year-summary">
            <span className="academic-year-badge"><CalendarDays size={17} /> 2027 Academic Year</span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <p><strong>{timetable2027.length}</strong><span>official sessions</span></p>
              <p><strong>{timetableSubjects.length}</strong><span>subject areas</span></p>
              <p><strong>1</strong><span>time pending confirmation</span></p>
            </div>
          </div>

          <div className="mt-14">
            <p className="eyebrow">Explore by subject</p>
            <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div><h2 className="section-title text-[#071b3d]">Choose a subject to view its schedule</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Select a subject card or use the filters below to find the right class quickly.</p></div>
              <p className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0B4DA2]">Grade filters 1–12 • only supplied sessions shown</p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {timetableSubjects.map((subject, index) => (
                <SubjectOverviewCard key={subject.value} subject={subject} sessionCount={sessionCounts[subject.value]} index={index} onSelect={selectSubject} />
              ))}
            </div>
          </div>

          <div id="timetable-results" className="timetable-filter-panel mt-16 scroll-mt-28">
            <div className="flex flex-col justify-between gap-5 border-b border-slate-200 p-5 sm:p-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0B4DA2]"><SlidersHorizontal size={21} /></span>
                <div><h2 className="text-xl font-black text-[#071b3d]">Find your class</h2><p className="mt-1 text-sm text-slate-500">Subject, grade and day filters work together.</p></div>
              </div>
              <div className="timetable-view-toggle" role="group" aria-label="Timetable view">
                <button type="button" className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')} aria-pressed={viewMode === 'list'}><LayoutList size={17} /> List View</button>
                <button type="button" className={viewMode === 'weekly' ? 'active' : ''} onClick={() => setViewMode('weekly')} aria-pressed={viewMode === 'weekly'}><CalendarRange size={17} /> Weekly View</button>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-4">
              <label className="timetable-filter-label" htmlFor="subject-filter">Subject
                <select id="subject-filter" value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)}>
                  <option value="all">All Subjects</option>
                  {timetableSubjects.map((subject) => <option key={subject.value} value={subject.value}>{subject.filterLabel || subject.label}</option>)}
                </select>
              </label>
              <label className="timetable-filter-label" htmlFor="grade-filter">Grade
                <select id="grade-filter" value={gradeFilter} onChange={(event) => setGradeFilter(event.target.value)}>
                  <option value="all">All Grades</option>
                  {gradeOptions.map((grade) => <option key={grade} value={grade}>Grade {grade}</option>)}
                </select>
              </label>
              <label className="timetable-filter-label" htmlFor="day-filter">Day
                <select id="day-filter" value={dayFilter} onChange={(event) => setDayFilter(event.target.value)}>
                  <option value="all">All Days</option>
                  {timetableDays.map((day) => <option key={day} value={day}>{day}</option>)}
                </select>
              </label>
              {viewMode === 'list' ? (
                <label className="timetable-filter-label" htmlFor="sort-mode">Sort sessions
                  <select id="sort-mode" value={sortMode} onChange={(event) => setSortMode(event.target.value)}>
                    <option value="day-time">Day, then start time</option>
                    <option value="start-time">Start time, then day</option>
                  </select>
                </label>
              ) : (
                <div className="timetable-weekly-hint"><CalendarRange size={20} /><span>Sessions are grouped by day and ordered by start time.</span></div>
              )}
            </div>

            <div className="flex flex-col gap-4 border-y border-slate-200 bg-slate-50/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="text-sm font-semibold text-slate-600" aria-live="polite"><strong className="text-lg font-black text-[#071b3d]">{filteredSessions.length}</strong> matching {filteredSessions.length === 1 ? 'session' : 'sessions'}</p>
              <div className="flex flex-wrap items-center gap-3">
                {viewMode === 'list' && <span className="hidden items-center gap-1.5 text-xs font-semibold text-slate-400 sm:inline-flex"><ArrowUpDown size={14} /> Sorted by {sortMode === 'day-time' ? 'day and time' : 'start time'}</span>}
                <button type="button" className="clear-filter-button" onClick={clearFilters} disabled={!hasActiveFilters}><RotateCcw size={15} /> Clear Filters</button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={transitionKey}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.22 }}
                >
                  {filteredSessions.length === 0 ? (
                    <div className="timetable-empty-state">
                      <span><SearchX size={32} /></span>
                      <h3>No matching classes found</h3>
                      <p>Try another subject, grade or day, or clear the active filters.</p>
                      <button type="button" className="btn-secondary mt-6" onClick={clearFilters}><RotateCcw size={16} /> Clear Filters</button>
                    </div>
                  ) : viewMode === 'weekly' ? (
                    <WeeklySchedule sessions={filteredSessions} teacherById={teacherById} />
                  ) : (
                    <>
                      <ScheduleTable sessions={filteredSessions} teacherById={teacherById} />
                      <div className="grid gap-4 md:hidden">
                        {filteredSessions.map((session) => <SessionCard key={session.id} session={session} teacherName={teacherById[session.teacherId]?.name} />)}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="time-confirmation-note mt-8">
            <AlertCircle size={22} />
            <div><h2>English Grade 6 time is pending confirmation</h2><p>The supplied Saturday time was ambiguous, so no AM or PM assumption has been made. The schedule displays “Time to be confirmed” until the institute owner verifies it.</p></div>
          </div>

          <div className="timetable-help-panel mt-12">
            <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200">Need help?</p><h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Confirm your class before attending</h2><p className="mt-3 max-w-2xl leading-7 text-blue-100">Contact VIDASA directly if you need help choosing the correct grade, subject or session.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-light justify-center"><BrandIcon brand="whatsapp" size={18} /> Ask on WhatsApp</a>
              <a href={getPhoneUrl()} className="btn-outline-light justify-center"><Phone size={18} /> Call 076 720 2991</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
