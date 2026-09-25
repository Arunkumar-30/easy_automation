import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBolt, FaMicrochip, FaIndustry, FaShieldAlt,
  FaWifi, FaUsers, FaTools, FaChartLine,
  FaCheckCircle, FaArrowRight, FaStar,
} from 'react-icons/fa'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'

const categories = ['All', 'Automation', 'Electrical', 'SCADA', 'IoT', 'Safety']

const services = [
  {
    id: 1, icon: FaBolt, category: 'Automation',
    title: 'PLC Programming & Commissioning', shortDesc: 'Expert PLC programming across all major platforms.',
    features: ['Siemens S7-300/400/1200/1500', 'Allen-Bradley / Rockwell ControlLogix', 'Mitsubishi MELSEC & Omron NJ/NX', 'Sequential & process control logic', 'FAT/SAT testing and commissioning', 'Remote monitoring integration'],
    gradient: 'from-brand-blue to-indigo-600', highlight: 'Most Popular',
  },
  {
    id: 2, icon: FaMicrochip, category: 'SCADA',
    title: 'SCADA & HMI Systems', shortDesc: 'Real-time supervisory control & data acquisition.',
    features: ['Wonderware, Ignition, WinCC', 'Custom dashboard development', 'Alarm management & historian', 'Multi-site remote access', 'Mobile-responsive HMI screens', 'OPC UA/DA connectivity'],
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    id: 3, icon: FaIndustry, category: 'Electrical',
    title: 'Electrical Control Panels', shortDesc: 'Design, fabrication and testing of MCC/PCC panels.',
    features: ['MCC, PCC, VFD & motor control panels', 'IEC/IS standard fabrication', 'Short-circuit & thermal analysis', 'Type-tested switchgear', 'Cable scheduling & routing', 'Panel GA and single-line drawings'],
    gradient: 'from-cyan-500 to-brand-blue',
  },
  {
    id: 4, icon: FaShieldAlt, category: 'Safety',
    title: 'Functional Safety Engineering', shortDesc: 'SIL assessment and safety instrumented systems.',
    features: ['HAZOP & LOPA studies', 'SIL verification and validation', 'Safety PLC (Siemens Safety, GuardLogix)', 'Emergency Shutdown (ESD) design', 'Fire & Gas detection systems', 'IEC 61508 / IEC 61511 compliance'],
    gradient: 'from-red-500 to-rose-600',
  },
  {
    id: 5, icon: FaWifi, category: 'IoT',
    title: 'Industrial IoT & Cloud Analytics', shortDesc: 'Connect your plant floor to the cloud.',
    features: ['Edge computing & MQTT gateways', 'AWS IoT / Azure IoT Hub integration', 'Predictive maintenance algorithms', 'OEE dashboards and KPI tracking', 'Digital twin development', 'Cybersecurity for OT networks'],
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 6, icon: FaChartLine, category: 'Automation',
    title: 'Process Instrumentation', shortDesc: 'Loop design, calibration and HART/Foundation Fieldbus.',
    features: ['P&ID review and loop design', 'Instrument selection & datasheets', 'HART, Profibus, FOUNDATION Fieldbus', 'Control valve sizing & selection', 'Calibration and functional testing', 'As-built documentation'],
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    id: 7, icon: FaTools, category: 'Electrical',
    title: 'AMC & Maintenance Services', shortDesc: '24/7 Annual Maintenance Contracts for continuous uptime.',
    features: ['Preventive & predictive maintenance', 'Emergency breakdown support', 'Spare parts management', 'PLC/SCADA software backup', 'Monthly health reports', 'Remote diagnostics'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 8, icon: FaUsers, category: 'Automation',
    title: 'Training & Skill Development', shortDesc: 'Industry-recognised courses for operators and engineers.',
    features: ['PLC programming bootcamps', 'SCADA & HMI operator training', 'Electrical safety & panel wiring', 'On-site & online delivery', 'ISO-certified training centre', 'Post-training certification'],
    gradient: 'from-brand-blue to-green-500',
  },
]

const whyUs = [
  { icon: FaStar,         title: '15+ Years',       desc: 'Deep domain expertise' },
  { icon: FaCheckCircle,  title: '500+ Projects',    desc: 'Proven track record'  },
  { icon: FaShieldAlt,    title: 'ISO Certified',    desc: '9001:2015 quality'    },
  { icon: FaUsers,        title: '24/7 Support',     desc: 'Always available'     },
]

export default function Services() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? services : services.filter(s => s.category === active)

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════ */}
      <section className="pt-36 pb-20 section-padding !py-0 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-16 right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-xl animate-float-delay" />
        <div className="container-max py-28 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <HiSparkles className="text-brand-blueLight" size={16} />
            <span className="text-blue-200 text-sm font-semibold">8 Specialized Services</span>
          </div>
          <p className="section-subtitle text-blue-300">What We Offer</p>
          <h1 className="section-title text-white max-w-2xl">
            Comprehensive <span className="text-brand-blueLight">Automation Services</span>
          </h1>
          <p className="text-blue-100 mt-5 max-w-xl text-lg leading-relaxed">
            From initial concept to commissioning and beyond — we cover the full spectrum of
            industrial automation and electrical engineering.
          </p>
        </div>
      </section>

      {/* ══ WHY US STRIP ═════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="text-brand-blue" size={18} />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm">{title}</p>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FILTER + GRID ════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
                  ${active === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/30 scale-105'
                    : 'bg-white text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue border border-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filtered.map(({ id, icon: Icon, title, shortDesc, features, gradient, highlight }) => (
              <div key={id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover flex flex-col relative">
                {highlight && (
                  <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {highlight}
                  </div>
                )}
                {/* Card header */}
                <div className={`bg-gradient-to-br ${gradient} p-7 flex items-start gap-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-6 translate-x-6" />
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
                    <p className="text-white/75 text-xs mt-1">{shortDesc}</p>
                  </div>
                </div>
                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-2.5">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-brand-blue flex-shrink-0 mt-0.5" size={13} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-brand-blue text-sm font-semibold
                               hover:gap-3 transition-all group-hover:text-brand-blueDark"
                  >
                    Request this Service <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">How We Work</p>
            <h2 className="section-title">Our Proven <span className="gradient-text">Process</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation',   desc: 'We understand your requirements through a detailed discovery session.' },
              { step: '02', title: 'Design & Plan',  desc: 'Our engineers create a tailored solution design and project plan.'      },
              { step: '03', title: 'Build & Test',   desc: 'We build, program, and rigorously test every component in-house.'      },
              { step: '04', title: 'Deploy & Train', desc: 'On-site installation, commissioning, and operator training.'            },
            ].map(({ step, title, desc }) => (
              <div key={step} className="group relative text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 card-hover">
                <span className="text-8xl font-black text-brand-blue/5 absolute top-2 right-2 leading-none select-none">{step}</span>
                <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 shadow-brand-blue/20">
                  <span className="text-white font-black text-lg">{step}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════ */}
      <section className="section-padding bg-gradient-to-br from-brand-dark to-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="container-max relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Automation Solution?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our team is ready to assess your requirements and propose the optimal solution.
          </p>
          <Link to="/contact" className="bg-white text-brand-blue font-bold px-10 py-4 rounded-lg hover:bg-brand-gray transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            Talk to an Expert <HiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
