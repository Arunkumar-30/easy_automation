import { Link } from 'react-router-dom'
import logo from '../assets/logo/easy_automation.jpeg'
import {
  FaBolt, FaIndustry, FaMicrochip, FaShieldAlt,
  FaUsers, FaChartLine, FaStar, FaArrowRight,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

/* ── Data ─────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+',  label: 'Years Experience'   },
  { value: '200+', label: 'Happy Clients'       },
  { value: '50+',  label: 'Team Members'        },
]

const services = [
  {
    icon: FaBolt,
    title: 'PLC Programming',
    desc:  'Expert PLC programming for Siemens, Allen-Bradley, Mitsubishi & more.',
    color: 'from-blue-500 to-brand-blue',
  },
  {
    icon: FaMicrochip,
    title: 'SCADA & HMI',
    desc:  'Custom SCADA dashboards and HMI interfaces for real-time monitoring.',
    color: 'from-indigo-500 to-brand-blue',
  },
  {
    icon: FaIndustry,
    title: 'Electrical Panels',
    desc:  'Design and fabrication of control panels to international standards.',
    color: 'from-violet-500 to-indigo-500',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety Systems',
    desc:  'SIL-rated safety systems and functional safety engineering.',
    color: 'from-brand-blue to-violet-500',
  },
  {
    icon: FaChartLine,
    title: 'IoT & Analytics',
    desc:  'Connect your machines to the cloud with real-time analytics dashboards.',
    color: 'from-cyan-500 to-brand-blue',
  },
  {
    icon: FaUsers,
    title: 'Training & Support',
    desc:  '24/7 technical support and comprehensive operator training programs.',
    color: 'from-brand-blue to-cyan-500',
  },
]

const testimonials = [
  {
    name:    'Rajesh Kumar',
    role:    'Plant Manager, TechMech Industries',
    review:  'Easy Automation transformed our manufacturing line. Production efficiency improved by 40% within three months of implementation.',
    rating:  5,
  },
  {
    name:    'Priya Sharma',
    role:    'CEO, AutoFab Solutions',
    review:  'Professional team with deep expertise. Their SCADA system gives us real-time visibility we never had before.',
    rating:  5,
  },
  {
    name:    'Mohammed Farooq',
    role:    'Operations Head, Gulf Petrochem',
    review:  'Outstanding quality and on-time delivery. Their electrical panels exceed industry standards consistently.',
    rating:  5,
  },
]

/* ── Component ───────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-blueLight/5 rounded-full blur-3xl"></div>
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B4BC8" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        <div className="container-max section-padding !py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – Text */}
            <div className="animate-fade-in-up">
              <p className="section-subtitle flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-blue inline-block"></span>
                Industrial Automation Experts
              </p>
              <h1 className="section-title mb-6">
                Powering the Future of{' '}
                <span className="gradient-text">Smart Industries</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                We design, build, and deploy cutting-edge automation systems that increase
                productivity, reduce costs, and keep your operations running 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary flex items-center gap-2">
                  View Our Work <HiArrowRight />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center gap-2">
                  Get Free Quote <HiArrowRight />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mt-10">
                {['ISO 9001:2015', 'CE Certified', 'IEC 61508'].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaShieldAlt className="text-brand-blue" />
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Visual */}
            <div className="hidden lg:flex justify-center items-center relative">
              {/* Animated central logo */}
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-brand-gray to-white
                                shadow-2xl flex items-center justify-center animate-pulse-slow">
                  <img
                    src={logo}
                    alt="Easy Automation Logo"
                    className="w-56 h-56 rounded-full object-contain drop-shadow-xl"
                  />
                </div>
                {/* Orbiting chips */}
                {[
                  { top: '-8%',  left: '50%',  icon: FaBolt     },
                  { top: '50%',  left: '-8%',  icon: FaMicrochip },
                  { top: '50%',  right: '-8%', icon: FaIndustry  },
                  { bottom: '-8%', left: '50%', icon: FaChartLine },
                ].map(({ icon: Icon, ...pos }, i) => (
                  <div
                    key={i}
                    style={pos}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-brand-blue
                               rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Icon className="text-white" size={22} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════ */}
      <section className="bg-brand-blue py-14 px-6">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(({ value, label }) => (
            <div key={label} className="group">
              <p className="text-4xl md:text-5xl font-black mb-1 group-hover:scale-110 transition-transform">
                {value}
              </p>
              <p className="text-blue-100 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES OVERVIEW ══════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">What We Do</p>
            <h2 className="section-title">
              Our <span className="gradient-text">Core Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              End-to-end automation solutions tailored to your industry needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color}
                                 flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/services"
                  className="text-brand-blue text-sm font-semibold flex items-center gap-1
                             hover:gap-2 transition-all"
                >
                  Learn More <FaArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              All Services <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-gray to-brand-blue/10 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'On-time Delivery', value: '98%' },
                    { label: 'Client Satisfaction', value: '99%' },
                    { label: 'System Uptime', value: '99.9%' },
                    { label: 'Cost Reduction', value: '35%' },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                      <p className="text-3xl font-black text-brand-blue">{value}</p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white
                              rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-black">15+</p>
                <p className="text-xs text-blue-200">Years of Excellence</p>
              </div>
            </div>

            {/* Right – Text */}
            <div>
              <p className="section-subtitle">Why Choose Us</p>
              <h2 className="section-title mb-6">
                Engineering <span className="gradient-text">Excellence</span> in Every Project
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 15 years of hands-on experience, Easy Automation delivers precision-engineered
                automation solutions. Our certified engineers work with leading brands like Siemens,
                Rockwell, Schneider, and ABB to deliver world-class results.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Certified engineers with global expertise',
                  '24/7 after-sales support & maintenance',
                  'Custom solutions for every industry vertical',
                  'Strict adherence to safety and quality standards',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none">
                        <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More About Us <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Client Testimonials</p>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, review, rating }) => (
              <div key={name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-blue flex items-center justify-center
                                  text-white font-bold text-sm">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════ */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-blue to-brand-dark py-20 px-6">
        <div className="container-max text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start Your Automation Journey Today
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Talk to our experts and get a free consultation and project estimate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-blue btn-primary">
              Contact Us Now
            </Link>
            <Link to="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-brand-blue">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
