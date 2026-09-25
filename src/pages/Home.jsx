import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/easy_automation.jpeg'
import {
  FaBolt, FaIndustry, FaMicrochip, FaShieldAlt,
  FaUsers, FaChartLine, FaStar, FaArrowRight,
  FaOilCan, FaFlask, FaCar, FaWater, FaTools,
  FaWifi, FaCheckCircle, FaQuoteLeft,
  FaChevronLeft, FaChevronRight,
  FaPhone,
} from 'react-icons/fa'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'

/* ═══════════════════════ DATA ═══════════════════════ */

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+',  label: 'Years Experience'   },
  { value: '200+', label: 'Happy Clients'       },
  { value: '50+',  label: 'Team Members'        },
]

const services = [
  { icon: FaBolt,     title: 'PLC Programming',     desc: 'Expert PLC programming for Siemens, Allen-Bradley, Mitsubishi & more.',        color: 'from-blue-500 to-brand-blue' },
  { icon: FaMicrochip,title: 'SCADA & HMI',          desc: 'Custom SCADA dashboards and HMI interfaces for real-time monitoring.',          color: 'from-indigo-500 to-brand-blue' },
  { icon: FaIndustry, title: 'Electrical Panels',    desc: 'Design and fabrication of control panels to international standards.',          color: 'from-violet-500 to-indigo-500' },
  { icon: FaShieldAlt,title: 'Safety Systems',       desc: 'SIL-rated safety systems and functional safety engineering.',                   color: 'from-brand-blue to-violet-500' },
  { icon: FaChartLine,title: 'IoT & Analytics',      desc: 'Connect your machines to the cloud with real-time analytics dashboards.',       color: 'from-cyan-500 to-brand-blue' },
  { icon: FaUsers,    title: 'Training & Support',   desc: '24/7 technical support and comprehensive operator training programs.',           color: 'from-brand-blue to-cyan-500' },
]

const industries = [
  { icon: FaIndustry, label: 'Manufacturing',    color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { icon: FaOilCan,   label: 'Oil & Gas',        color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: FaFlask,    label: 'Pharmaceuticals',  color: 'bg-green-50 text-green-600 border-green-100' },
  { icon: FaCar,      label: 'Automotive',       color: 'bg-red-50 text-red-600 border-red-100' },
  { icon: FaWater,    label: 'Water Treatment',  color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
  { icon: FaBolt,     label: 'Power & Energy',   color: 'bg-yellow-50 text-yellow-600 border-yellow-100' },
  { icon: FaTools,    label: 'Food & Beverage',  color: 'bg-orange-50 text-orange-600 border-orange-100' },
  { icon: FaWifi,     label: 'Smart Buildings',  color: 'bg-purple-50 text-purple-600 border-purple-100' },
]

const processSteps = [
  { step: '01', title: 'Consultation',   desc: 'We deep-dive into your requirements through a structured discovery session with our senior engineers.', icon: FaUsers },
  { step: '02', title: 'Design & Plan',  desc: 'We craft a tailored solution — from architecture diagrams to panel GA drawings and software specs.',    icon: FaMicrochip },
  { step: '03', title: 'Build & Test',   desc: 'Every component is built and rigorously tested in-house (FAT) before leaving our facility.',            icon: FaTools },
  { step: '04', title: 'Deploy & Train', desc: 'Our team handles on-site commissioning, SAT, operator training, and handover documentation.',            icon: FaShieldAlt },
]

const clients = [
  'PepsiCo', 'ONGC', 'Sun Pharma', 'Tata Motors', 'Reliance Industries',
  'UltraTech Cement', 'TANGEDCO', 'CMWSSB', 'Siemens', 'Rockwell Automation',
  'Schneider Electric', 'ABB', 'Bosch', 'Honeywell', 'Emerson',
]

const testimonials = [
  {
    name:   'Rajesh Kumar',
    role:   'Plant Manager, TechMech Industries',
    review: 'Easy Automation transformed our manufacturing line completely. Production efficiency improved by 40% within three months of implementation. Their team was professional from day one.',
    rating: 5,
    company: 'TM',
    bg: 'from-blue-500 to-indigo-600',
  },
  {
    name:   'Priya Sharma',
    role:   'CEO, AutoFab Solutions',
    review: 'Professional team with deep technical expertise. Their SCADA system gives us real-time plant visibility we never had before. Support response is always within hours.',
    rating: 5,
    company: 'AF',
    bg: 'from-violet-500 to-brand-blue',
  },
  {
    name:   'Mohammed Farooq',
    role:   'Operations Head, Gulf Petrochem',
    review: 'Outstanding quality and on-time delivery. Their electrical panels exceed industry standards consistently. We rely on them for all our Gulf region automation projects.',
    rating: 5,
    company: 'GP',
    bg: 'from-cyan-500 to-blue-600',
  },
  {
    name:   'Anitha Krishnamurthy',
    role:   'VP Engineering, Sun Pharma',
    review: 'Their 21 CFR Part 11 compliant batch automation system passed FDA audit without a single observation. Exceptional understanding of pharma regulatory requirements.',
    rating: 5,
    company: 'SP',
    bg: 'from-green-500 to-teal-600',
  },
  {
    name:   'Suresh Narayanan',
    role:   'Project Director, TANGEDCO',
    review: 'IEC 61850 substation automation delivered ahead of schedule. Easy Automation\'s engineers demonstrated world-class competency in power system automation.',
    rating: 5,
    company: 'TN',
    bg: 'from-amber-500 to-orange-600',
  },
  {
    name:   'Deepa Ramachandran',
    role:   'CTO, AquaTech Solutions',
    review: 'Multi-site SCADA for our water treatment plants was seamlessly integrated. Real-time remote monitoring has reduced manual field visits by 70%. Highly recommended.',
    rating: 5,
    company: 'AT',
    bg: 'from-blue-600 to-cyan-600',
  },
]

const featuredProjects = [
  {
    title:    'Automated Bottling Line — PepsiCo India',
    category: 'Manufacturing',
    result:   '35% increase in line efficiency',
    tech:     ['Siemens S7-1500', 'WinCC SCADA'],
    gradient: 'from-blue-600 to-indigo-700',
    icon:     FaIndustry,
  },
  {
    title:    'Gas Compression ESD — ONGC',
    category: 'Oil & Gas',
    result:   'SIL 3 certified ESD system',
    tech:     ['Triconex TMR', 'IEC 61511'],
    gradient: 'from-amber-600 to-orange-700',
    icon:     FaOilCan,
  },
  {
    title:    'API Manufacturing — Sun Pharma',
    category: 'Pharmaceuticals',
    result:   'FDA & 21 CFR Part 11 compliant',
    tech:     ['Rockwell ControlLogix', 'Ignition'],
    gradient: 'from-green-600 to-teal-700',
    icon:     FaFlask,
  },
]

const faqs = [
  { q: 'How long does a typical automation project take?',
    a: 'Projects range from 4 weeks (small HMI upgrades) to 6–12 months (full greenfield automation). We provide a detailed timeline during the proposal stage.' },
  { q: 'Do you offer after-sales support and AMC?',
    a: 'Yes. We offer comprehensive Annual Maintenance Contracts with 24/7 remote support, periodic preventive maintenance visits, and emergency on-site response within 4 hours in Chennai.' },
  { q: 'Can you work with existing legacy systems?',
    a: 'Absolutely. We specialise in brownfield projects — integrating new automation with existing PLCs and instruments without disrupting ongoing production.' },
  { q: 'What brands of PLC do you work with?',
    a: 'We work with all major brands: Siemens, Rockwell Allen-Bradley, Mitsubishi, Omron, Schneider, ABB, Honeywell, Emerson, and more.' },
  { q: 'Do you provide training for our operators?',
    a: 'Yes. We run ISO-certified training programs — both on-site and at our training centre in Chennai — covering PLC programming, SCADA operation, and electrical safety.' },
]

/* ═══════════════════════ TESTIMONIAL SLIDER ═══════════════════════ */

function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo])

  // Auto-advance every 4 seconds
  useEffect(() => {
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [next])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 4000)
  }

  const handlePrev = () => { resetTimer(); prev() }
  const handleNext = () => { resetTimer(); next() }
  const handleDot  = (i) => { resetTimer(); goTo(i) }

  const t = testimonials[current]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main card */}
      <div
        key={current}
        className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden"
        style={{ animation: 'fadeInUp 0.4s ease forwards' }}
      >
        {/* Background decoration */}
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${t.bg} opacity-5 rounded-full -translate-y-12 translate-x-12`} />
        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${t.bg} opacity-5 rounded-full translate-y-8 -translate-x-8`} />

        <div className="relative flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.bg} flex items-center justify-center shadow-xl`}>
              <span className="text-white text-2xl font-black">{t.company}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <FaQuoteLeft className="text-brand-blue/20 mb-3" size={36} />
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={18} />
              ))}
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
              "{t.review}"
            </p>
            <div>
              <p className="font-bold text-brand-dark text-base">{t.name}</p>
              <p className="text-brand-blue text-sm font-medium">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Prev */}
        <button
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-white border-2 border-brand-blue/20 flex items-center
                     justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue
                     transition-all duration-200 shadow-sm"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft size={14} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-brand-blue' : 'w-2 bg-gray-300 hover:bg-brand-blue/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-white border-2 border-brand-blue/20 flex items-center
                     justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue
                     transition-all duration-200 shadow-sm"
          aria-label="Next testimonial"
        >
          <FaChevronRight size={14} />
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-gray-400 mt-3 font-medium">
        {current + 1} / {testimonials.length}
      </p>
    </div>
  )
}

/* ═══════════════════════ FAQ ITEM ═══════════════════════ */

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open ? 'border-brand-blue/30 shadow-md' : 'border-gray-100 shadow-sm bg-white'}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className={`font-semibold text-sm ${open ? 'text-brand-blue' : 'text-brand-dark'}`}>{q}</span>
        <span className={`text-brand-blue flex-shrink-0 transition-transform duration-300 w-6 h-6 rounded-full border-2 border-brand-blue/30 flex items-center justify-center ${open ? 'rotate-180 bg-brand-blue text-white border-brand-blue' : ''}`}>
          ▾
        </span>
      </button>
      {open && (
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </p>
      )}
    </div>
  )
}

/* ═══════════════════════ COMPONENT ═══════════════════════ */

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO  (Full redesign — dark theme)
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-dark pt-40 lg:pt-48 pb-20">

        {/* ── Layered background ── */}
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0d1547] to-[#091030]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        {/* Glowing orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px]" />
        {/* Animated scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)',
                 backgroundSize: '100% 4px',
               }} />
        </div>

        <div className="container-max w-full relative z-10 p-4 pt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Text Content ── */}
            <div className="animate-fade-in-up">

              {/* Top badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Live Operations</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/60 text-xs">500+ Systems Running</span>
              </div>

              {/* Overline */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-brand-blueLight" />
                <span className="text-brand-blueLight text-sm font-bold uppercase tracking-[0.2em]">
                  Industrial Automation Experts
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 md:mb-6">
                Powering the{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-blueLight to-cyan-400">
                    Future
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-brand-blueLight/20 to-cyan-400/20 blur-xl" />
                </span>
                {' '}of{' '}
                <br className="hidden sm:block" />
                <span className="text-white">Smart</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blueLight to-cyan-300">
                  Industries
                </span>
              </h1>

              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg">
                We design, build, and commission cutting-edge PLC, SCADA, and electrical
                automation systems that slash downtime, boost efficiency, and future-proof
                your plant — delivered by ISO-certified engineers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 md:mb-12">
                <Link
                  to="/contact"
                  className="group relative flex justify-center items-center gap-2 bg-gradient-to-r from-brand-blue to-blue-500
                             text-white font-bold px-8 py-4 rounded-xl overflow-hidden w-full sm:w-auto
                             hover:shadow-2xl hover:shadow-brand-blue/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-xl" />
                  <FaPhone size={14} />
                  Get Free Consultation
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="flex justify-center items-center gap-2 border border-white/20 text-white/80
                             font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-white/40
                             hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  View Our Work <HiArrowRight />
                </Link>
              </div>

              {/* Live stat chips */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  { v: '500+', l: 'Projects', color: 'border-blue-500/30 bg-blue-500/10 text-blue-300' },
                  { v: '15+',  l: 'Yrs Exp',  color: 'border-violet-500/30 bg-violet-500/10 text-violet-300' },
                  { v: '200+', l: 'Clients',  color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
                  { v: '99.9%',l: 'Uptime',   color: 'border-green-500/30 bg-green-500/10 text-green-300' },
                ].map(({ v, l, color }) => (
                  <div key={l} className={`flex items-center gap-1.5 md:gap-2 border rounded-full px-3 md:px-4 py-1 md:py-1.5 ${color}`}>
                    <span className="font-black text-xs md:text-sm">{v}</span>
                    <span className="text-[10px] md:text-xs opacity-70">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Bold Visual Dashboard ── */}
            <div className="hidden lg:flex relative mt-12 lg:mt-0 w-full justify-center max-w-full overflow-hidden sm:overflow-visible">
              
              <div className="relative w-full max-w-[450px] scale-[0.8] sm:scale-95 lg:scale-100 origin-center">
                {/* Glow behind the panel */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-cyan-600/10 rounded-3xl blur-3xl scale-110" />

                {/* Main panel container */}
                <div className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-6 backdrop-blur-sm">

                  {/* Panel header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-[10px] font-bold">LIVE SYSTEM</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1 h-4 bg-white/10 rounded-full" style={{ height: `${[12,18,10][i]}px` }} />
                      ))}
                    </div>
                  </div>

                  {/* Service cards grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { icon: FaBolt,      title: 'PLC Programming', metric: '200+ Systems', gradient: 'from-blue-600 to-blue-800',    glow: 'shadow-blue-500/20' },
                      { icon: FaMicrochip, title: 'SCADA & HMI',     metric: '150+ Installs', gradient: 'from-violet-600 to-violet-800', glow: 'shadow-violet-500/20' },
                      { icon: FaIndustry,  title: 'Control Panels',  metric: '300+ Built',    gradient: 'from-cyan-600 to-cyan-800',    glow: 'shadow-cyan-500/20' },
                      { icon: FaShieldAlt, title: 'Safety Systems',  metric: 'SIL 3 Rated',   gradient: 'from-green-600 to-green-800',  glow: 'shadow-green-500/20' },
                    ].map(({ icon: Icon, title, metric, gradient, glow }) => (
                      <div
                        key={title}
                        className={`group relative bg-gradient-to-br ${gradient} rounded-2xl p-4 md:p-5
                                   shadow-lg ${glow} hover:scale-[1.03] transition-all duration-300 cursor-default overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-6 translate-x-6" />
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                          <Icon className="text-white" size={16} />
                        </div>
                        <p className="text-white font-bold text-xs sm:text-sm leading-tight">{title}</p>
                        <p className="text-white/60 text-[10px] md:text-xs mt-1 font-medium">{metric}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom wide card — IoT Analytics */}
                  <div className="relative bg-gradient-to-r from-brand-blue via-indigo-700 to-violet-700
                                 rounded-2xl p-4 md:p-5 overflow-hidden group hover:scale-[1.01] transition-all duration-300">
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FaChartLine className="text-cyan-300" size={16} />
                          <span className="text-white font-bold text-xs md:text-sm">IoT & Cloud Analytics</span>
                        </div>
                        <p className="text-white/60 text-[10px] md:text-xs">Real-time plant monitoring · Edge AI</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl md:text-2xl font-black text-white">2000+</p>
                        <p className="text-cyan-300 text-[10px] md:text-xs font-semibold">Sensor Tags Live</p>
                      </div>
                    </div>
                    {/* Mini bar chart decoration */}
                    <div className="flex items-end gap-1 mt-4 h-8">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-white/20 rounded-sm"
                          style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="hidden sm:block absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20
                                 rounded-2xl px-4 py-2.5 shadow-xl animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                        <FaCheckCircle className="text-white" size={12} />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">ISO Certified</p>
                        <p className="text-white/50 text-[9px]">9001:2015</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20
                                 rounded-2xl px-4 py-2.5 shadow-xl animate-float-delay">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-brand-blue rounded-lg flex items-center justify-center">
                        <FaUsers className="text-white" size={12} />
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold">24/7 Support</p>
                        <p className="text-white/50 text-[9px]">AMC Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block absolute top-1/2 -right-6 -translate-y-1/2 bg-white/10 backdrop-blur-md
                                 border border-white/20 rounded-2xl px-3 py-2 shadow-xl animate-float-delay2">
                    <p className="text-2xl font-black text-white leading-none">99.9%</p>
                    <p className="text-cyan-300 text-[9px] font-semibold">System Uptime</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — STATS COUNTER
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-blue to-brand-dark py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="group">
              <p className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {value}
              </p>
              <div className="w-10 h-0.5 bg-white/40 mx-auto mb-2" />
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — SERVICES OVERVIEW
      ══════════════════════════════════════════════════ */}
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
              <div key={title} className="group bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100 relative overflow-hidden">
                {/* Hover bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/services"
                  className="text-brand-blue text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
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

      {/* ══════════════════════════════════════════════════
          SECTION 4 — INDUSTRIES WE SERVE (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Industries</p>
            <h2 className="section-title">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Delivering automation expertise across diverse verticals with deep domain knowledge
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, label, color }) => (
              <div key={label} className={`flex flex-col items-center gap-3 p-6 rounded-2xl border card-hover cursor-default ${color}`}>
                <div className="w-14 h-14 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                  <Icon size={26} />
                </div>
                <span className="text-sm font-semibold text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-gray to-brand-blue/10 rounded-3xl p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'On-time Delivery',    value: '98%' },
                    { label: 'Client Satisfaction', value: '99%' },
                    { label: 'System Uptime',       value: '99.9%' },
                    { label: 'Cost Reduction',      value: '35%' },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-2xl p-6 shadow-sm text-center group card-hover">
                      <p className="text-3xl font-black text-brand-blue group-hover:scale-110 transition-transform">{value}</p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white rounded-2xl p-5 shadow-xl hidden md:block glow-pulse">
                <p className="text-3xl font-black">15+</p>
                <p className="text-xs text-blue-200">Years of Excellence</p>
              </div>
            </div>

            {/* Right text */}
            <div>
              <p className="section-subtitle">Why Choose Us</p>
              <h2 className="section-title mb-6">
                Engineering <span className="gradient-text">Excellence</span> in Every Project
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over 15 years of hands-on experience, Easy Automation delivers precision-engineered
                automation solutions. Our certified engineers work with Siemens, Rockwell, Schneider,
                and ABB to deliver world-class results.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Certified engineers with global expertise',
                  '24/7 after-sales support & maintenance',
                  'Custom solutions for every industry vertical',
                  'Strict adherence to safety and quality standards',
                  'Competitive pricing with no hidden costs',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white" size={10} />
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

      {/* ══════════════════════════════════════════════════
          SECTION 6 — HOW IT WORKS (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="container-max relative z-10">
          <div className="text-center mb-14">
            <p className="section-subtitle text-brand-blueLight">Our Process</p>
            <h2 className="section-title1">
              How We <span className="text-brand-blueLight">Work</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Our proven 4-step process ensures every project is delivered on time, on budget, and to the highest quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, desc, icon: Icon }, idx) => (
              <div key={step} className="relative text-center p-8 rounded-2xl glass-dark card-hover group">
                {/* Step connector line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-white/20 z-10" />
                )}
                <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={22} />
                </div>
                <span className="text-6xl font-black text-white/5 absolute top-4 right-4 leading-none select-none">{step}</span>
                <p className="text-brand-blueLight text-xs font-bold uppercase tracking-widest mb-2">Step {step}</p>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — CLIENT LOGOS MARQUEE (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
        <div className="container-max mb-8 text-center">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Trusted by Industry Leaders</p>
        </div>
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          {/* Marquee */}
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 px-8 py-4 bg-gray-50 border border-gray-100 rounded-xl
                           text-gray-600 font-bold text-sm hover:bg-brand-blue/5 hover:text-brand-blue
                           hover:border-brand-blue/20 transition-all duration-200 cursor-default whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8 — TESTIMONIALS SLIDER (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Client Testimonials</p>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-gray-500 mt-4">
              200+ happy clients across India and the Gulf region
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9 — FEATURED PROJECTS (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Portfolio</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              A glimpse into our 500+ project portfolio across industries
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map(({ title, category, result, tech, gradient, icon: Icon }) => (
              <div key={title} className="group rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                {/* Header */}
                <div className={`bg-gradient-to-br ${gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={26} />
                  </div>
                  <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{category}</span>
                  <h3 className="text-white font-bold text-lg mt-1 leading-snug">{title}</h3>
                </div>
                {/* Body */}
                <div className="bg-white p-7">
                  <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-4">
                    <p className="text-green-600 text-xs font-bold uppercase tracking-wide">Result</p>
                    <p className="text-green-800 font-semibold text-sm mt-0.5">{result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map(t => (
                      <span key={t} className="text-xs bg-brand-blue/8 text-brand-blue font-semibold px-3 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                  <Link
                    to="/projects"
                    className="text-brand-blue text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Details <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
              View All Projects <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 10 — FAQ (NEW)
      ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <p className="section-subtitle">FAQ</p>
              <h2 className="section-title mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have questions about our services, timelines, or how we work?
                We've answered the most common ones below. Still have doubts?
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <FaPhone size={14} /> Talk to an Expert
              </Link>
            </div>
            {/* Right */}
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FaqItem key={i} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 11 — CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-brand-dark via-brand-blue to-brand-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        {/* Blobs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="container-max text-center text-white relative z-10">
          <p className="section-subtitle text-brand-blueLight">Ready to Transform?</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Start Your Automation Journey Today
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Talk to our experts and get a free consultation and project estimate within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-brand-blue font-bold px-8 py-3 rounded-lg hover:bg-brand-gray transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2">
              Contact Us Now <HiArrowRight />
            </Link>
            <Link to="/projects" className="border-2 border-white/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
              View Projects <HiArrowRight />
            </Link>
          </div>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 justify-center mt-14">
            {['Free Consultation', '24-hr Response', 'No Commitment Required'].map(item => (
              <div key={item} className="flex items-center gap-2 text-blue-200 text-sm">
                <FaCheckCircle className="text-brand-blueLight" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
