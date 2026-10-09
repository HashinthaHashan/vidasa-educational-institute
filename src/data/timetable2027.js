export const timetableDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const timetableSubjects = [
  {
    value: 'Science',
    label: 'Science',
    sinhala: 'විද්‍යාව',
    icon: 'flask',
    teacherId: 'science-muditha-lakmal',
    color: '#0B4DA2',
    softColor: '#EAF3FF',
  },
  {
    value: 'English',
    label: 'English',
    sinhala: 'ඉංග්‍රීසි',
    icon: 'languages',
    teacherId: 'english-nayanathara-rajapaksha',
    color: '#6D3DB8',
    softColor: '#F2ECFF',
  },
  {
    value: 'Mathematics',
    label: 'Mathematics',
    sinhala: 'ගණිතය',
    icon: 'calculator',
    teacherId: 'mathematics-duminda-navaratne',
    color: '#D71920',
    softColor: '#FFF0F1',
  },
  {
    value: 'Dancing',
    label: 'Dancing',
    sinhala: 'නැටුම්',
    icon: 'person-standing',
    teacherId: 'dancing-inusha-mees',
    color: '#C2417A',
    softColor: '#FFF0F7',
  },
  {
    value: 'Music',
    label: 'Music',
    sinhala: 'සංගීතය',
    icon: 'music',
    teacherId: 'music-amila-senarathna',
    color: '#D97706',
    softColor: '#FFF7E8',
  },
  {
    value: 'Scholarship',
    label: 'Grade 5 Scholarship',
    filterLabel: 'Scholarship',
    sinhala: 'ශිෂ්‍යත්ව',
    icon: 'award',
    teacherId: 'scholarship-kusumsiri-sir',
    color: '#047857',
    softColor: '#EAFBF4',
  },
  {
    value: 'Sinhala',
    label: 'Sinhala',
    sinhala: 'සිංහල',
    icon: 'book-text',
    teacherId: 'sinhala-lakshman-habaragamuwa',
    color: '#0369A1',
    softColor: '#EAF7FF',
  },
]

export const timetableSubjectMap = Object.fromEntries(
  timetableSubjects.map((subject) => [subject.value, subject]),
)

const session = ({
  id,
  subject,
  grades = [],
  groupLabel = null,
  day,
  startTime,
  endTime,
  classType = null,
  status = 'confirmed',
}) => ({
  id,
  subject,
  subjectSinhala: timetableSubjectMap[subject].sinhala,
  grades,
  groupLabel,
  day,
  startTime,
  endTime,
  classType,
  teacherId: timetableSubjectMap[subject].teacherId,
  year: 2027,
  status,
})

export const timetable2027 = [
  session({ id: 'science-grade-6-monday', subject: 'Science', grades: [6], day: 'Monday', startTime: '16:30', endTime: '18:30', classType: 'Regular' }),
  session({ id: 'science-grade-7-friday', subject: 'Science', grades: [7], day: 'Friday', startTime: '16:30', endTime: '18:30', classType: 'Regular' }),
  session({ id: 'science-grade-8-tuesday', subject: 'Science', grades: [8], day: 'Tuesday', startTime: '14:00', endTime: '16:00', classType: 'Regular' }),
  session({ id: 'science-grade-9-tuesday', subject: 'Science', grades: [9], day: 'Tuesday', startTime: '16:00', endTime: '18:00', classType: 'Regular' }),
  session({ id: 'science-grade-10-wednesday', subject: 'Science', grades: [10], day: 'Wednesday', startTime: '14:30', endTime: '16:30', classType: 'Regular' }),
  session({ id: 'science-grade-11-thursday', subject: 'Science', grades: [11], day: 'Thursday', startTime: '19:00', endTime: '22:00', classType: 'Paper Class' }),

  session({ id: 'english-grade-1-saturday', subject: 'English', grades: [1], day: 'Saturday', startTime: '13:30', endTime: '15:30', classType: 'Regular' }),
  session({ id: 'english-grade-3-saturday', subject: 'English', grades: [3], day: 'Saturday', startTime: '15:30', endTime: '18:00', classType: 'Regular' }),
  session({ id: 'english-grade-4-monday', subject: 'English', grades: [4], day: 'Monday', startTime: '14:30', endTime: '17:30', classType: 'Regular' }),
  session({ id: 'english-grade-6-saturday-pending', subject: 'English', grades: [6], day: 'Saturday', startTime: null, endTime: null, classType: 'Regular', status: 'time-pending' }),
  session({ id: 'english-grade-7-friday', subject: 'English', grades: [7], day: 'Friday', startTime: '14:30', endTime: '16:30', classType: 'Regular' }),
  session({ id: 'english-grade-10-monday', subject: 'English', grades: [10], day: 'Monday', startTime: '17:30', endTime: '20:30', classType: 'Regular' }),

  session({ id: 'mathematics-grade-6-saturday', subject: 'Mathematics', grades: [6], day: 'Saturday', startTime: '11:00', endTime: '13:00', classType: 'Regular' }),
  session({ id: 'mathematics-grade-7-saturday', subject: 'Mathematics', grades: [7], day: 'Saturday', startTime: '13:00', endTime: '15:00', classType: 'Regular' }),
  session({ id: 'mathematics-grade-8-sunday', subject: 'Mathematics', grades: [8], day: 'Sunday', startTime: '15:30', endTime: '17:30', classType: 'Regular' }),
  session({ id: 'mathematics-grade-9-tuesday', subject: 'Mathematics', grades: [9], day: 'Tuesday', startTime: '16:45', endTime: '18:45', classType: 'Regular' }),
  session({ id: 'mathematics-grade-10-tuesday', subject: 'Mathematics', grades: [10], day: 'Tuesday', startTime: '14:00', endTime: '16:00', classType: 'Regular' }),
  session({ id: 'mathematics-grade-11-sunday', subject: 'Mathematics', grades: [11], day: 'Sunday', startTime: '17:30', endTime: '19:30', classType: 'Regular' }),

  session({ id: 'dancing-grades-9-10-11-thursday', subject: 'Dancing', grades: [9, 10, 11], day: 'Thursday', startTime: '15:15', endTime: '17:15' }),
  session({ id: 'dancing-grades-6-7-8-12-sunday', subject: 'Dancing', grades: [6, 7, 8, 12], day: 'Sunday', startTime: '08:00', endTime: '13:00' }),

  session({ id: 'music-group-1-friday', subject: 'Music', groupLabel: 'Group 1', day: 'Friday', startTime: '18:30', endTime: '21:30' }),
  session({ id: 'music-grade-2-saturday', subject: 'Music', grades: [2], day: 'Saturday', startTime: '08:00', endTime: '10:00' }),

  session({ id: 'scholarship-grade-3-friday', subject: 'Scholarship', grades: [3], day: 'Friday', startTime: '16:30', endTime: '19:30', classType: 'Group Class' }),
  session({ id: 'scholarship-grade-4-wednesday', subject: 'Scholarship', grades: [4], day: 'Wednesday', startTime: '16:30', endTime: '19:30', classType: 'Paper Class' }),

  session({ id: 'sinhala-grade-10-wednesday', subject: 'Sinhala', grades: [10], day: 'Wednesday', startTime: '16:30', endTime: '18:30' }),
  session({ id: 'sinhala-grade-11-monday', subject: 'Sinhala', grades: [11], day: 'Monday', startTime: '18:00', endTime: '20:00' }),
]

export const formatGradeLabel = ({ grades, groupLabel }) => {
  if (groupLabel) return groupLabel
  if (grades.length === 1) return `Grade ${grades[0]}`
  return `Grades ${grades.join(', ')}`
}

export const formatTime = (time) => {
  if (!time) return null
  const [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const hour = hours % 12 || 12
  return `${hour}:${String(minutes).padStart(2, '0')} ${period}`
}

export const formatSessionTime = ({ startTime, endTime, status }) => {
  if (status === 'time-pending') return 'Time to be confirmed'
  return `${formatTime(startTime)} – ${formatTime(endTime)}`
}

export const getDayIndex = (day) => timetableDays.indexOf(day)

export const sortByDayAndTime = (first, second) => {
  const dayDifference = getDayIndex(first.day) - getDayIndex(second.day)
  if (dayDifference !== 0) return dayDifference
  return (first.startTime || '99:99').localeCompare(second.startTime || '99:99')
}

export const sortByStartTime = (first, second) => {
  const timeDifference = (first.startTime || '99:99').localeCompare(second.startTime || '99:99')
  return timeDifference || getDayIndex(first.day) - getDayIndex(second.day)
}

export const filterTimetableSessions = (
  sessions,
  { subject = 'all', grade = 'all', day = 'all' } = {},
) => sessions.filter((item) => {
  const matchesSubject = subject === 'all' || item.subject === subject
  const matchesGrade = grade === 'all' || item.grades.includes(Number(grade))
  const matchesDay = day === 'all' || item.day === day
  return matchesSubject && matchesGrade && matchesDay
})
