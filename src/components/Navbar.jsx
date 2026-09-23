import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import logo from '../assets/logo/easy_automation.jpeg'

const navLinks = [
  { to: '/',         label: 'Home'       },
  { to: '/about',    label: 'About'      },
  { to: '/services', label: 'Services'   },
  { to: '/projects', label: 'Projects'   },
  { to: '/contact',  label: 'Contact Us' },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 after:absolute after:-bottom-1 after:left-0
     after:h-0.5 after:bg-brand-blue after:transition-all after:duration-300
     ${isActive
       ? 'text-brand-blue after:w-full'
       : 'text-brand-dark hover:text-brand-blue after:w-0 hover:after:w-full'}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}
    >
      <div className="container-max px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Easy Automation Logo"
              className="w-12 h-12 rounded-full object-contain"
            />
            <div>
              <p className="text-lg font-black text-brand-blue leading-none tracking-tight">
                Easy
              </p>
              <p className="text-xs font-bold text-brand-dark tracking-widest uppercase leading-none">
                Automation
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5">
              Get Quote
            </Link>
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden p-2 rounded-lg text-brand-dark hover:text-brand-blue transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-white border-t border-brand-gray px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm font-semibold py-2 border-b border-gray-100
                 ${isActive ? 'text-brand-blue' : 'text-brand-dark hover:text-brand-blue'}`
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
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
