import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../config/site'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Vidasa on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#16a34a] text-white shadow-[0_8px_28px_rgba(22,163,74,0.3)] transition hover:-translate-y-1 hover:bg-[#15803d] focus:outline-none focus:ring-4 focus:ring-green-200"
    >
      <MessageCircle size={27} aria-hidden="true" />
    </a>
  )
}
