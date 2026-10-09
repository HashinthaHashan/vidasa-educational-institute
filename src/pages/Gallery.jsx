import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Camera, ChevronLeft, ChevronRight, ImagePlus, Maximize2, X } from 'lucide-react'
import BrandIcon from '../components/common/BrandIcon'
import PageHero from '../components/common/PageHero'
import { getWhatsAppUrl } from '../config/site'
import { galleryItems } from '../data/gallery'
import StaggerContainer from '../components/motion/StaggerContainer'
import HoverLiftCard from '../components/motion/HoverLiftCard'

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const categories = useMemo(() => ['All', ...new Set(galleryItems.map((item) => item.category))], [])
  const items = category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)
  const selected = selectedIndex === null ? null : items[selectedIndex]

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowRight') setSelectedIndex((current) => (current + 1) % items.length)
      if (event.key === 'ArrowLeft') setSelectedIndex((current) => (current - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [items.length, selected])

  const showPrevious = () => setSelectedIndex((current) => (current - 1 + items.length) % items.length)
  const showNext = () => setSelectedIndex((current) => (current + 1) % items.length)

  return (
    <>
      <PageHero title="Gallery" description="Real moments from our institute, classrooms and student activities will be shared here." />
      <section className="section-space">
        <div className="container-shell">
          {galleryItems.length > 0 ? (
            <>
              {categories.length > 2 && <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by category">{categories.map((item) => <button key={item} type="button" onClick={() => { setCategory(item); setSelectedIndex(null) }} className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${category === item ? 'bg-[#0B4DA2] text-white' : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#0B4DA2]'}`} aria-pressed={category === item}>{item}</button>)}</div>}
              <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => <HoverLiftCard key={item.id} as="button" type="button" onClick={() => setSelectedIndex(index)} className="group relative overflow-hidden rounded-2xl bg-blue-50 text-left shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"><img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="1200" height="900" /><span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" /><span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><span><span className="block text-xs font-bold uppercase tracking-wider text-blue-100">{item.category}</span><span className="mt-1 block text-lg font-bold">{item.title}</span></span><Maximize2 size={20} /></span></HoverLiftCard>)}
              </StaggerContainer>
            </>
          ) : (
            <><div className="photo-ready-panel mx-auto max-w-5xl"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Camera size={30} /></span><div className="flex-1"><p className="eyebrow">Photos coming soon</p><h2 className="mt-2 text-3xl font-black text-[#071b3d]">Our gallery is being prepared</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Official institute, teacher and classroom photos will be added once they are available. No stock or unrelated images are used here.</p></div></div><div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">{['Institute', 'Teachers', 'Classrooms'].map((label, index) => <div key={label} className={`gallery-ready-card ${index === 1 ? 'sm:mt-8' : ''}`}><ImagePlus size={28} /><span>{label}</span></div>)}</div></>
          )}
          <div className="mt-10 text-center"><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-secondary"><BrandIcon brand="whatsapp" size={18} /> Contact Vidasa</a></div>
        </div>
      </section>

      <AnimatePresence>
        {selected && <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/92 p-4" role="dialog" aria-modal="true" aria-label={`${selected.title} image preview`} onClick={() => setSelectedIndex(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><button type="button" onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300" aria-label="Close image preview"><X size={22} /></button>{items.length > 1 && <><button type="button" onClick={(event) => { event.stopPropagation(); showPrevious() }} className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 sm:left-6" aria-label="Previous image"><ChevronLeft size={25} /></button><button type="button" onClick={(event) => { event.stopPropagation(); showNext() }} className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 sm:right-6" aria-label="Next image"><ChevronRight size={25} /></button></>}<motion.div className="max-w-5xl" onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}><img src={selected.src} alt={selected.alt} className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" /><p className="mt-4 text-center font-bold text-white">{selected.title}</p></motion.div></motion.div>}
      </AnimatePresence>
    </>
  )
}
