import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaBolt, FaMicrochip, FaIndustry, FaShieldAlt,
  FaWifi, FaUsers, FaTools, FaChartLine,
  FaCheckCircle, FaArrowRight,
} from 'react-icons/fa'

const categories = ['All', 'Automation', 'Electrical', 'SCADA', 'IoT', 'Safety']

const services = [
  {
    id: 1,
    icon:     FaBolt,
    category: 'Automation',
    title:    'PLC Programming & Commissioning',
    shortDesc: 'Expert PLC programming across all major platforms.',
    features: [
      'Siemens S7-300/400/1200/1500',
      'Allen-Bradley / Rockwell ControlLogix',
      'Mitsubishi MELSEC & Omron NJ/NX',
      'Sequential & process control logic',
      'FAT/SAT testing and commissioning',
      'Remote monitoring integration',
    ],
    gradient: 'from-brand-blue to-indigo-600',
  },
  {
    id: 2,
    icon:     FaMicrochip,
    category: 'SCADA',
    title:    'SCADA & HMI Systems',
    shortDesc: 'Real-time supervisory control & data acquisition.',
    features: [
      'Wonderware, Ignition, WinCC',
      'Custom dashboard development',
      'Alarm management & historian',
      'Multi-site remote access',
      'Mobile-responsive HMI screens',
      'OPC UA/DA connectivity',
    ],
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    id: 3,
    icon:     FaIndustry,
    category: 'Electrical',
    title:    'Electrical Control Panels',
    shortDesc: 'Design, fabrication and testing of MCC/PCC panels.',
    features: [
      'MCC, PCC, VFD & motor control panels',
      'IEC/IS standard fabrication',
      'Short-circuit & thermal analysis',
      'Type-tested switchgear',
      'Cable scheduling & routing',
      'Panel GA and single-line drawings',
    ],
    gradient: 'from-cyan-500 to-brand-blue',
  },
  {
    id: 4,
    icon:     FaShieldAlt,
    category: 'Safety',
    title:    'Functional Safety Engineering',
    shortDesc: 'SIL assessment and safety instrumented systems.',
    features: [
      'HAZOP & LOPA studies',
      'SIL verification and validation',
      'Safety PLC (Siemens Safety, GuardLogix)',
      'Emergency Shutdown (ESD) design',
      'Fire & Gas detection systems',
      'IEC 61508 / IEC 61511 compliance',
    ],
    gradient: 'from-red-500 to-brand-blue',
  },
  {
    id: 5,
    icon:     FaWifi,
    category: 'IoT',
    title:    'Industrial IoT & Cloud Analytics',
    shortDesc: 'Connect your plant floor to the cloud.',
    features: [
      'Edge computing & MQTT gateways',
      'AWS IoT / Azure IoT Hub integration',
      'Predictive maintenance algorithms',
      'OEE dashboards and KPI tracking',
      'Digital twin development',
      'Cybersecurity for OT networks',
    ],
    gradient: 'from-teal-500 to-brand-blue',
  },
  {
    id: 6,
    icon:     FaChartLine,
    category: 'Automation',
    title:    'Process Instrumentation',
    shortDesc: 'Loop design, calibration and HART/Foundation Fieldbus.',
    features: [
      'P&ID review and loop design',
      'Instrument selection & datasheets',
      'HART, Profibus, FOUNDATION Fieldbus',
      'Control valve sizing & selection',
      'Calibration and functional testing',
      'As-built documentation',
    ],
    gradient: 'from-orange-500 to-brand-blue',
  },
  {
    id: 7,
    icon:     FaTools,
    category: 'Electrical',
    title:    'AMC & Maintenance Services',
    shortDesc: '24/7 Annual Maintenance Contracts for continuous uptime.',
    features: [
      'Preventive & predictive maintenance',
      'Emergency breakdown support',
      'Spare parts management',
      'PLC/SCADA software backup',
      'Monthly health reports',
      'Remote diagnostics',
    ],
    gradient: 'from-violet-500 to-brand-blue',
  },
  {
    id: 8,
    icon:     FaUsers,
    category: 'Automation',
    title:    'Training & Skill Development',
    shortDesc: 'Industry-recognised courses for operators and engineers.',
    features: [
      'PLC programming bootcamps',
      'SCADA & HMI operator training',
      'Electrical safety & panel wiring',
      'On-site & online delivery',
      'ISO-certified training centre',
      'Post-training certification',
    ],
    gradient: 'from-brand-blue to-green-500',
  },
]

export default function Services() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? services
    : services.filter(s => s.category === active)

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-16 section-padding !py-0 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>
        <div className="container-max py-24 relative z-10">
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

      {/* ══ FILTER + GRID ════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${active === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filtered.map(({ id, icon: Icon, title, shortDesc, features, gradient }) => (
              <div key={id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover flex flex-col">
                {/* Card header */}
                <div className={`bg-gradient-to-br ${gradient} p-7 flex items-start gap-4`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
                    <p className="text-white/75 text-xs mt-1">{shortDesc}</p>
                  </div>
                </div>
                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-2">
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
                               hover:gap-3 transition-all"
                  >
                    Request this Service <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
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
              <div key={step} className="relative text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <span className="text-7xl font-black text-brand-blue/10 absolute top-4 right-4 leading-none select-none">
                  {step}
                </span>
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-white font-black text-sm">{step}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="section-padding bg-brand-blue text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Automation Solution?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our team is ready to assess your requirements and propose the optimal solution.
          </p>
          <Link to="/contact" className="bg-white text-brand-blue btn-primary inline-flex items-center gap-2">
            Talk to an Expert <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
