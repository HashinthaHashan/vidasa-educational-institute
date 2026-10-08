import { useEffect, useState } from 'react'
import { Camera, ImagePlus, Maximize2, MessageCircle, X } from 'lucide-react'
import PageHero from '../components/common/PageHero'
import { getWhatsAppUrl } from '../config/site'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <PageHero title="Gallery" description="Real moments from our institute, classrooms and student activities will be shared here." />
      <section className="section-space">
        <div className="container-shell">
          {galleryItems.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item) => <button key={item.id} type="button" onClick={() => setSelected(item)} className="group relative overflow-hidden rounded-2xl bg-blue-50 text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200"><img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" /><span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><span><span className="block text-xs font-bold uppercase tracking-wider text-blue-100">{item.category}</span><span className="mt-1 block text-lg font-bold">{item.title}</span></span><Maximize2 size={20} /></span></button>)}
            </div>
          ) : (
            <><div className="photo-ready-panel mx-auto max-w-5xl"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0B4DA2]"><Camera size={30} /></span><div className="flex-1"><p className="eyebrow">Photos coming soon</p><h2 className="mt-2 text-3xl font-black text-[#071b3d]">Our gallery is being prepared</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Official institute, teacher and classroom photos will be added once they are available. No stock or unrelated images are used here.</p></div></div><div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">{['Institute', 'Teachers', 'Classrooms'].map((label, index) => <div key={label} className={`gallery-ready-card ${index === 1 ? 'sm:mt-8' : ''}`}><ImagePlus size={28} /><span>{label}</span></div>)}</div></>
          )}
          <div className="mt-10 text-center"><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn-secondary"><MessageCircle size={18} /> Contact Vidasa</a></div>
        </div>
      </section>
      {selected && <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90 p-4" role="dialog" aria-modal="true" aria-label={`${selected.title} image preview`} onClick={() => setSelected(null)}><button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-900" aria-label="Close image preview"><X size={22} /></button><div className="max-w-5xl" onClick={(event) => event.stopPropagation()}><img src={selected.src} alt={selected.alt} className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" /><p className="mt-4 text-center font-bold text-white">{selected.title}</p></div></div>}
    </>
  )
}
