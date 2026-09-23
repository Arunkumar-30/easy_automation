import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/services"  element={<Services />} />
            <Route path="/projects"  element={<Projects />} />
            <Route path="/contact"   element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
