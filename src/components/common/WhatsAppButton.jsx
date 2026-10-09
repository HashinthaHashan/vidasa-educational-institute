import { motion } from 'motion/react'
import BrandIcon from './BrandIcon'
import { getWhatsAppUrl } from '../../config/site'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Vidasa on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#16a34a] text-white shadow-[0_8px_28px_rgba(22,163,74,0.3)] transition hover:-translate-y-1 hover:bg-[#15803d] focus:outline-none focus:ring-4 focus:ring-green-200"
      initial={{ opacity: 0, scale: 0.75, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
    >
      <BrandIcon brand="whatsapp" size={28} />
    </motion.a>
  )
}
