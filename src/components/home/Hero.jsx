import { BookOpen, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import officialLogo from '../../assets/images/brand/vidasa-official-logo.jpg'
import { siteConfig } from '../../config/site'
import AnimatedButton from '../motion/AnimatedButton'

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-orb hero-orb-one" aria-hidden="true" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }} />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[690px] items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <motion.div className="relative z-10 max-w-3xl" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }} initial="hidden" animate="visible">
          <motion.div variants={item} className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0B4DA2] shadow-sm backdrop-blur">
            <Sparkles size={15} className="text-[#D71920]" /> Grades 1 to 11 · Ratnapura
          </motion.div>
          <motion.h1 variants={item} className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#071b3d] sm:text-6xl lg:text-[4.75rem]">
            Building <span className="text-[#0B4DA2]">Knowledge.</span><span className="mt-1 block">Creating <span className="text-[#D71920]">Futures.</span></span>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Quality education, qualified teachers and a safe, welcoming learning environment where every student can grow with confidence.</motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <AnimatedButton to="/classes" className="btn-primary justify-center"><BookOpen size={18} /> Explore classes</AnimatedButton>
            <AnimatedButton to="/contact" className="btn-secondary justify-center"><Phone size={18} /> Contact us</AnimatedButton>
          </motion.div>
          <motion.p variants={item} className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin size={18} className="text-[#D71920]" /> {siteConfig.address}</motion.p>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end" initial={{ opacity: 0, x: 28, scale: 0.97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
          <div className="hero-logo-card">
            <span className="hero-card-kicker">Welcome to</span>
            <img src={officialLogo} alt="Vidasa Educational Institute official logo" className="mx-auto mt-4 aspect-square w-full max-w-[330px] object-contain" fetchPriority="high" />
            <p className="mt-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#0B4DA2]">Kotamulla · Ratnapura</p>
          </div>
          <motion.div className="absolute -bottom-7 left-2 rounded-2xl bg-[#071b3d] px-5 py-4 text-white shadow-2xl sm:-left-9" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5 }}>
            <strong className="block text-2xl font-black">200+</strong>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">Registered students</span>
          </motion.div>
          <motion.div className="absolute right-2 -top-6 rounded-2xl bg-white px-5 py-4 text-[#071b3d] shadow-2xl ring-1 ring-slate-100 sm:-right-7" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52, duration: 0.5 }}>
            <ShieldCheck className="text-[#D71920]" size={24} />
            <span className="mt-2 block text-xs font-extrabold uppercase tracking-wider">Safe & supportive</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
