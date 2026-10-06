export default function SectionTitle({ eyebrow, title, description, align = 'center', light = false }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-blue-100' : ''}`}>{eyebrow}</p>}
      <h2 className={`section-title ${light ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>}
    </div>
  )
}
