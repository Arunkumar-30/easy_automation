import { Link } from 'react-router-dom'
import logo from '../assets/logo/easy_automation.jpeg'
import {
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp,
  FaCheckCircle,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

const quickLinks = [
  { to: '/',         label: 'Home'       },
  { to: '/about',    label: 'About Us'   },
  { to: '/services', label: 'Services'   },
  { to: '/projects', label: 'Projects'   },
  { to: '/contact',  label: 'Contact Us' },
]

const services = [
  'PLC Programming',
  'SCADA Systems',
  'Electrical Panels',
  'HMI Integration',
  'Instrumentation',
  'IoT Solutions',
]

const socials = [
  { icon: FaFacebookF,  href: '#', label: 'Facebook'  },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
  { icon: FaInstagram,  href: '#', label: 'Instagram' },
  { icon: FaYoutube,    href: '#', label: 'YouTube'   },
  { icon: FaWhatsapp,   href: 'https://wa.me/917824008001', label: 'WhatsApp' },
]

const certifications = ['ISO 9001:2015', 'CE Certified', 'IEC 61508', 'SIL Rated']

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      {/* ── CTA Banner ── */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blueDark py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Automate Your Business?</h3>
            <p className="text-blue-100 mt-1">Let's discuss your project requirements today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-brand-blue px-8 py-3 rounded-lg
                         font-bold hover:bg-brand-gray transition-all duration-300 whitespace-nowrap shadow-lg"
            >
              Get Started <HiArrowRight />
            </Link>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border-2 border-white/50 text-white px-6 py-3 rounded-lg
                         font-bold hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              <FaPhone size={14} /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Certifications Strip ── */}
      <div className="border-b border-white/10 py-5 px-6">
        <div className="container-max flex flex-wrap items-center justify-center gap-8">
          {certifications.map(cert => (
            <div key={cert} className="flex items-center gap-2 text-gray-300 text-xs font-medium">
              <FaCheckCircle className="text-brand-blue flex-shrink-0" size={12} />
              {cert}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="section-padding !py-16">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src={logo}
                alt="Easy Automation Logo"
                className="w-12 h-12 rounded-full object-contain ring-2 ring-brand-blue/30 group-hover:ring-brand-blue/60 transition-all"
              />
              <div>
                <p className="text-xl font-black text-brand-blue leading-none">Easy Automation</p>
                <p className="text-lg font-bold tracking-widest uppercase leading-none text-white">& Infotech</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Leading provider of industrial automation and electrical engineering solutions.
              Delivering innovation, reliability, and efficiency since 2010.
            </p>
            {/* Rating */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-5">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-white text-sm font-bold">4.9/5 Rating</p>
              <p className="text-gray-400 text-xs">Based on 200+ client reviews</p>
            </div>
            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center
                             hover:bg-brand-blue transition-colors duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-400 text-sm hover:text-brand-blueLight transition-colors
                               flex items-center gap-2 group link-underline"
                  >
                    <HiArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-blue mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  No 19, Ground Floor, Emmanuel Nagar,<br/> Rohini St, Pudur, Ambattur, Chennai, Tamil Nadu 600053
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand-blue flex-shrink-0" />
                <a href="tel:+917824008001" className="text-gray-400 text-sm hover:text-brand-blueLight transition-colors">
                  +91 78240 08001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-blue flex-shrink-0" />
                <a href="mailto:easy.automation@yahoo.com" className="text-gray-400 text-sm hover:text-brand-blueLight transition-colors">
                  easy.automation@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500 flex-shrink-0" size={16} />
                <a
                  href="https://wa.me/917824008001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-green-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Easy Automation. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
              <a key={item} href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-xs">
            Designed with ❤️ in Chennai, India
          </p>
        </div>
      </div>
    </footer>
  )
}
