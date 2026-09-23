import { Link } from 'react-router-dom'
import logo from '../assets/logo/easy_automation.jpeg'
import {
  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaMapMarkerAlt, FaPhone, FaEnvelope,
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
  { icon: FaFacebookF, href: '#', label: 'Facebook'  },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube,   href: '#', label: 'YouTube'   },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* ── CTA Banner ── */}
      <div className="bg-brand-blue py-10 px-6 md:px-12 lg:px-24">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Automate Your Business?</h3>
            <p className="text-blue-100 mt-1">Let's discuss your project requirements today.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-brand-blue px-8 py-3 rounded-lg
                       font-bold hover:bg-brand-gray transition-colors duration-300 whitespace-nowrap"
          >
            Get Started <HiArrowRight />
          </Link>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="section-padding !py-16">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Easy Automation Logo"
                className="w-12 h-12 rounded-full object-contain"
              />
              <div>
                <p className="text-lg font-black text-brand-blue leading-none">Easy</p>
                <p className="text-xs font-bold tracking-widest uppercase leading-none text-white">Automation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading provider of industrial automation and electrical engineering solutions.
              Delivering innovation, reliability, and efficiency since 2010.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
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
                               flex items-center gap-2 group"
                  >
                    <HiArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
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
                  123 Industrial Park, Chennai, Tamil Nadu – 600001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand-blue flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-brand-blueLight transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-blue flex-shrink-0" />
                <a href="mailto:info@easyautomation.in" className="text-gray-400 text-sm hover:text-brand-blueLight transition-colors">
                  info@easyautomation.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 py-5 px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Easy Automation. All rights reserved. | Designed with ❤️
        </p>
      </div>
    </footer>
  )
}
