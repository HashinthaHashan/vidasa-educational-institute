import { BookOpen, Phone } from 'lucide-react'
import AnimatedButton from '../motion/AnimatedButton'
import RevealOnScroll from '../motion/RevealOnScroll'

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <RevealOnScroll className="cta-panel">
          <div className="cta-shape cta-shape-one" aria-hidden="true" />
          <div className="cta-shape cta-shape-two" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-100">Take the next step</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">Your Learning Journey Starts at VIDASA.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Explore our subjects or speak with the institute about the right class for your child.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <AnimatedButton to="/classes" className="btn-light justify-center"><BookOpen size={18} /> Explore classes</AnimatedButton>
              <AnimatedButton to="/contact" className="btn-outline-light justify-center"><Phone size={18} /> Contact us</AnimatedButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
