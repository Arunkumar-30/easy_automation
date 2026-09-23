import { useState } from 'react'
import { FaIndustry, FaOilCan, FaFlask, FaCar,
         FaWater, FaBolt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

const categories = ['All', 'Manufacturing', 'Oil & Gas', 'Pharma', 'Automotive', 'Water Treatment', 'Power']

const projects = [
  {
    id:       1,
    title:    'Automated Bottling Line — PepsiCo India',
    category: 'Manufacturing',
    icon:     FaIndustry,
    location: 'Chennai, Tamil Nadu',
    year:     '2023',
    tech:     ['Siemens S7-1500', 'WinCC SCADA', 'Profinet'],
    result:   '35% increase in line efficiency',
    desc:     'Full PLC and SCADA automation of a 2400 BPH carbonated drinks bottling line including CIP system integration and OEE monitoring dashboard.',
    tags:     ['PLC', 'SCADA', 'HMI'],
    featured: true,
  },
  {
    id:       2,
    title:    'Gas Compression Station ESD — ONGC',
    category: 'Oil & Gas',
    icon:     FaOilCan,
    location: 'Hazira, Gujarat',
    year:     '2022',
    tech:     ['Triconex TMR', 'SIL 3', 'Modbus TCP'],
    result:   'SIL 3 certified ESD system',
    desc:     'Emergency shutdown system for a natural gas compression station using Triconex triple modular redundancy and IEC 61511 compliance.',
    tags:     ['ESD', 'Safety', 'SIL 3'],
    featured: true,
  },
  {
    id:       3,
    title:    'API Manufacturing Automation — Sun Pharma',
    category: 'Pharma',
    icon:     FaFlask,
    location: 'Vadodara, Gujarat',
    year:     '2023',
    tech:     ['Rockwell ControlLogix', 'Ignition SCADA', '21 CFR Part 11'],
    result:   'FDA & 21 CFR Part 11 compliant',
    desc:     'Reactor and distillation column automation with full electronic batch records, 21 CFR Part 11 audit trails and recipe management.',
    tags:     ['Batch', 'Pharma', 'Compliance'],
    featured: true,
  },
  {
    id:       4,
    title:    'Robotic Weld Cell — Tata Motors',
    category: 'Automotive',
    icon:     FaCar,
    location: 'Pune, Maharashtra',
    year:     '2022',
    tech:     ['Fanuc Robots', 'Allen-Bradley', 'Vision Systems'],
    result:   '40% reduction in cycle time',
    desc:     'Integration of 6 robotic welding cells with conveyor automation, vision inspection, and MES connectivity for body shop operations.',
    tags:     ['Robotics', 'Automotive', 'MES'],
    featured: false,
  },
  {
    id:       5,
    title:    'Sewage Treatment Plant SCADA — CMWSSB',
    category: 'Water Treatment',
    icon:     FaWater,
    location: 'Chennai, Tamil Nadu',
    year:     '2021',
    tech:     ['Siemens S7-300', 'WinCC OA', 'GPRS RTU'],
    result:   '60% reduction in manual monitoring',
    desc:     'Multi-site SCADA for 8 sewage treatment plants with GPRS telemetry, remote pump control, and automated chemical dosing.',
    tags:     ['SCADA', 'Remote', 'Water'],
    featured: false,
  },
  {
    id:       6,
    title:    '132 kV Substation Automation — TANGEDCO',
    category: 'Power',
    icon:     FaBolt,
    location: 'Coimbatore, Tamil Nadu',
    year:     '2023',
    tech:     ['IEC 61850 GOOSE', 'Relays', 'RTU'],
    result:   'IEC 61850 fully compliant SCADA',
    desc:     'Substation automation with IED configuration, IEC 61850 GOOSE messaging, SCADA integration and protection relay commissioning.',
    tags:     ['Power', 'IEC 61850', 'Substation'],
    featured: false,
  },
  {
    id:       7,
    title:    'Cement Plant Kiln Automation — UltraTech',
    category: 'Manufacturing',
    icon:     FaIndustry,
    location: 'Ariyalur, Tamil Nadu',
    year:     '2021',
    tech:     ['Siemens S7-400', 'PCS7', 'Profibus DP'],
    result:   '20% fuel savings achieved',
    desc:     'Complete kiln and raw mill automation with advanced process control (APC) and energy optimisation strategies.',
    tags:     ['DCS', 'APC', 'Cement'],
    featured: false,
  },
  {
    id:       8,
    title:    'Offshore Platform IoT Monitoring — Reliance',
    category: 'Oil & Gas',
    icon:     FaOilCan,
    location: 'Mumbai High, Maharashtra',
    year:     '2024',
    tech:     ['Edge IoT', 'Azure IoT Hub', 'MQTT', 'Power BI'],
    result:   'Real-time asset health monitoring',
    desc:     'Industrial IoT solution for offshore platform with 2000+ sensor tags, edge analytics, predictive maintenance, and Azure cloud dashboards.',
    tags:     ['IoT', 'Cloud', 'Predictive'],
    featured: false,
  },
]

export default function Projects() {
  const [active,   setActive]   = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-16 section-padding !py-0 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)' ,
                      backgroundSize: '20px 20px' }}></div>
        <div className="container-max py-24 relative z-10">
          <p className="section-subtitle text-blue-300">Our Portfolio</p>
          <h1 className="section-title text-white max-w-2xl">
            Projects That <span className="text-brand-blueLight">Define Excellence</span>
          </h1>
          <p className="text-blue-100 mt-5 max-w-xl text-lg">
            500+ successful projects across industries. Here are some highlights from our portfolio.
          </p>
        </div>
      </section>

      {/* ══ FEATURED ════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          <p className="section-subtitle">Featured Work</p>
          <h2 className="section-title mb-10">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projects.filter(p => p.featured).map(({ id, icon: Icon, title, category, location, tech, result, desc, tags }) => (
              <div
                key={id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover cursor-pointer"
                onClick={() => setSelected(id)}
              >
                {/* Top */}
                <div className="bg-gradient-to-br from-brand-blue to-brand-blueDark p-8">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={26} />
                  </div>
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">
                    {category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 leading-snug">{title}</h3>
                </div>
                {/* Body */}
                <div className="p-7">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <FaMapMarkerAlt className="text-brand-blue" size={11} />
                    {location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-xl px-4 py-3 mb-4">
                    <p className="text-brand-blue text-xs font-bold uppercase tracking-wide">Outcome</p>
                    <p className="text-brand-dark text-sm font-semibold mt-0.5">{result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Category Filter ── */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
                  ${active === cat
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-brand-blue/10 hover:text-brand-blue'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── All Projects Grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(({ id, icon: Icon, title, category, location, year, result, tags }) => (
              <div
                key={id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover cursor-pointer"
                onClick={() => setSelected(id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <Icon className="text-brand-blue" size={18} />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{year}</span>
                </div>
                <span className="text-xs text-brand-blue font-semibold uppercase tracking-wide">
                  {category}
                </span>
                <h3 className="text-sm font-bold text-brand-dark mt-1 mb-2 leading-snug line-clamp-2">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                  <FaMapMarkerAlt size={10} className="text-brand-blue" /> {location}
                </p>
                <p className="text-xs text-brand-blue font-semibold bg-brand-blue/5 px-3 py-1.5 rounded-lg">
                  {result}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tags.map(t => (
                    <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ═══════════════════════════════ */}
      <section className="section-padding bg-brand-blue text-white !py-14">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '500+',  l: 'Projects Delivered'  },
            { v: '25+',   l: 'Industries Served'   },
            { v: '15+',   l: 'Countries'            },
            { v: '99%',   l: 'On-time Delivery'    },
          ].map(({ v, l }) => (
            <div key={l}>
              <p className="text-4xl font-black mb-1">{v}</p>
              <p className="text-blue-200 text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ MODAL ═══════════════════════════════════ */}
      {selected && (() => {
        const p = projects.find(pr => pr.id === selected)
        const Icon = p.icon
        return (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-brand-blue to-brand-blueDark p-8 rounded-t-3xl">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Icon className="text-white" size={26} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs uppercase tracking-wide font-semibold">
                        {p.category}
                      </p>
                      <h2 className="text-white text-xl font-bold leading-tight">{p.title}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-white/60 hover:text-white text-2xl leading-none flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-brand-blue" /> {p.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaExternalLinkAlt className="text-brand-blue" size={12} /> {p.year}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                <div>
                  <h4 className="font-bold text-brand-dark mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-4">
                  <p className="text-green-700 text-xs font-bold uppercase tracking-wide">Result</p>
                  <p className="text-green-800 font-semibold mt-1">{p.result}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </>
  )
}
