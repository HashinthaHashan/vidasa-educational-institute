import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'
import ScrollToTop from '../components/common/ScrollToTop'
import Home from '../pages/Home'
import About from '../pages/About'
import Classes from '../pages/Classes'
import Teachers from '../pages/Teachers'
import Timetable from '../pages/Timetable'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
