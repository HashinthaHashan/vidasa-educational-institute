export const siteConfig = {
  name: 'Vidasa Educational Institute',
  shortName: 'VIDASA',
  tagline: 'A Better Place to Teach. A Safer Place to Learn. A Brighter Future for Every Student.',
  address: 'Kotamulla, Karangoda, Ratnapura',
  phoneDisplay: '076 720 2991',
  phoneNumber: '+94767202991',
  whatsappDisplay: '076 720 2991',
  whatsappNumber: '94767202991',
  emailDisplay: 'vidasanew@gmail.com',
  email: 'vidasanew@gmail.com',
  facebookUrl: 'https://www.facebook.com/share/1Dc1uhdMJp/?mibextid=wwXIfr',
  tiktokUrl: 'https://www.tiktok.com/@vidasa.education?_r=1&_t=ZS-9ANXxwEcXae',
  whatsappMessage: 'Hello Vidasa Educational Institute, I would like to know more about your classes.',
  gradeRange: 'Grades 1–11',
  students: '200+',
  teachers: '7',
  halls: '2',
  mission:
    "To provide a safe, clean, comfortable, and supportive learning environment where students can learn with confidence and teachers can teach with dedication. Through qualified educators, well-equipped classrooms, modern facilities, and a student-centred approach, we are committed to delivering quality education that supports every student's academic success and personal growth.",
  vision:
    'To become a trusted and respected educational institute that inspires young minds, empowers dedicated teachers, and sets a high standard for quality education through a safe, welcoming, and inspiring learning environment.',
}

export const instituteHalls = [
  { name: 'Hall 01', capacity: 60, description: 'Main learning hall' },
  { name: 'Hall 02', capacity: 15, description: 'Small-group learning hall' },
]

export const getPhoneUrl = () => `tel:${siteConfig.phoneNumber}`

export const getEmailUrl = (subject = 'Inquiry about Vidasa classes') =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`

export const getWhatsAppUrl = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

export const getMapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`
