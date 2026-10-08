import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'
import ScrollToTop from '../components/common/ScrollToTop'
import ScrollToTopButton from '../components/common/ScrollToTopButton'
import PageTransition from '../components/motion/PageTransition'
import Home from '../pages/Home'
import About from '../pages/About'
import Classes from '../pages/Classes'
import Teachers from '../pages/Teachers'
import Timetable from '../pages/Timetable'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  const location = useLocation()
  const page = (content) => <PageTransition>{content}</PageTransition>

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={page(<Home />)} />
            <Route path="/about" element={page(<About />)} />
            <Route path="/classes" element={page(<Classes />)} />
            <Route path="/teachers" element={page(<Teachers />)} />
            <Route path="/timetable" element={page(<Timetable />)} />
            <Route path="/gallery" element={page(<Gallery />)} />
            <Route path="/contact" element={page(<Contact />)} />
            <Route path="*" element={page(<NotFound />)} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
}
