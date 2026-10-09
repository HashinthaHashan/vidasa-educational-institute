import { Award, BookText, Calculator, FlaskConical, Languages, Music2, PersonStanding } from 'lucide-react'
import { getWhatsAppUrl } from '../../config/site'
import BrandIcon from './BrandIcon'
import HoverLiftCard from '../motion/HoverLiftCard'

const accents = {
  blue: 'from-[#0B4DA2] to-[#1f6bc7]',
  cyan: 'from-[#0086bd] to-[#25a8d6]',
  red: 'from-[#D71920] to-[#ef4444]',
  amber: 'from-[#d97706] to-[#f59e0b]',
  violet: 'from-[#6d3db8] to-[#8b5cf6]',
}

const icons = {
  mathematics: Calculator,
  science: FlaskConical,
  english: Languages,
  music: Music2,
  dancing: PersonStanding,
  sinhala: BookText,
  'grade-5-scholarship': Award,
}

export default function ClassCard({ item, index = 0 }) {
  const message = `Hello Vidasa Educational Institute, I would like information about ${item.name} classes.`
  const Icon = icons[item.id] || BookText
  return (
    <HoverLiftCard className="subject-card group">
      <div className={`subject-number bg-gradient-to-br ${accents[item.accent] || accents.blue}`}><Icon size={21} /><span className="sr-only">{String(index + 1).padStart(2, '0')}</span></div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">{item.grade || 'Grade availability — contact us'}</p>
        <h3 className="mt-2 text-xl font-extrabold text-[#071b3d]">{item.name}</h3>
        <a href={getWhatsAppUrl(message)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0B4DA2] transition hover:text-[#D71920]"><BrandIcon brand="whatsapp" size={17} /> Ask about this subject</a>
      </div>
    </HoverLiftCard>
  )
}
