import { useEffect, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import SafeImage from '../components/common/SafeImage'
import { galleryItems } from '../data/gallery'

const categories = ['All', 'Institute', 'Classes', 'Events', 'Students']

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)
  const items = category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)

  useEffect(() => {
    if (!selected) return undefined
    const handleKey = (event) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <PageHero title="Gallery" description="A glimpse of the Vidasa learning environment, class experiences and institute activities." />
      <section className="section-space">
        <div className="container-shell">
          <div className="mb-9 flex flex-wrap justify-center gap-2" role="group" aria-label="Gallery category filters">
            {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === item ? 'bg-[#0B4DA2] text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#0B4DA2]'}`}>{item}</button>)}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <button key={item.id} type="button" onClick={() => setSelected(item)} className="group relative overflow-hidden rounded-2xl bg-blue-50 text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200">
                <SafeImage src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><span><span className="block text-xs font-bold uppercase tracking-wider text-blue-100">{item.category}</span><span className="mt-1 block text-lg font-bold">{item.title}</span></span><Maximize2 size={20} /></span>
              </button>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">The current gallery uses local branded placeholders. Replace them with real institute photos before launch.</p>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90 p-4" role="dialog" aria-modal="true" aria-label={`${selected.title} image preview`} onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-900 transition hover:bg-red-50 hover:text-[#D71920]" aria-label="Close image preview"><X size={22} /></button>
          <div className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <SafeImage src={selected.src} alt={selected.alt} className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            <p className="mt-4 text-center font-bold text-white">{selected.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
