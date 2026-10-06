import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Vidasa on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#0B4DA2] text-white shadow-[0_8px_28px_rgba(11,77,162,0.35)] transition hover:-translate-y-1 hover:bg-[#D71920] focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      <MessageCircle size={27} aria-hidden="true" />
    </a>
  )
}
