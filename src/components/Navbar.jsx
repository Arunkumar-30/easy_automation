import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { FaPhone } from 'react-icons/fa'
import logo from '../assets/logo/easy_automation.jpeg'

const navLinks = [
  { to: '/',         label: 'Home'       },
  { to: '/about',    label: 'About'      },
  { to: '/services', label: 'Services'   },
  { to: '/projects', label: 'Projects'   },
  { to: '/contact',  label: 'Contact Us' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 px-1 py-1
     after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300
     ${isActive
       ? 'text-brand-blue after:w-full'
       : 'text-brand-dark hover:text-brand-blue after:w-0 hover:after:w-full'}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}
    >
      {/* Top bar (optional phone strip) */}
      <div className="hidden md:block bg-brand-dark text-white text-xs py-1.5 px-6 md:px-12 lg:px-24 -mt-4 mb-4">
        <div className="container-max flex items-center justify-between">
          <span className="text-gray-400">India's trusted industrial automation partner since 2010</span>
          <a href="tel:+917824008001" className="flex items-center gap-1.5 text-brand-blueLight hover:text-white transition-colors font-medium">
            <FaPhone size={10} />+91 78240 08001
          </a>
        </div>
      </div>

      <div className="container-max px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Easy Automation Home">
            <div className="relative">
              <img
                src={logo}
                alt="Easy Automation Logo"
                className="w-12 h-12 rounded-full object-contain ring-2 ring-brand-blue/20 group-hover:ring-brand-blue/50 transition-all duration-300"
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-brand-blue/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <div>
              <p className="text-xl font-black text-brand-blue leading-none tracking-tight">Easy Automation </p>
              <p className="text-lg font-bold text-brand-dark tracking-widest uppercase leading-none">& Infotech</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+917824008001"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors"
              aria-label="Call us"
            >
              <FaPhone size={13} className="text-brand-blue" />
              +91 78240 08001
            </a>
            <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5">
              Get Free Quote
            </Link>
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden p-2 rounded-lg text-brand-dark hover:text-brand-blue hover:bg-brand-blue/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-white border-t border-brand-gray px-6 py-4 flex flex-col gap-3 shadow-lg" role="navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2.5 px-3 rounded-lg border border-transparent transition-all
                 ${isActive
                   ? 'text-brand-blue bg-brand-blue/5 border-brand-blue/10'
                   : 'text-brand-dark hover:text-brand-blue hover:bg-brand-blue/5'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center text-sm mt-2"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:+919876543210"
            className="text-center text-sm text-brand-blue font-medium py-2"
          >
            📞 +91 98765 43210
          </a>
        </nav>
      </div>
    </header>
  )
}
