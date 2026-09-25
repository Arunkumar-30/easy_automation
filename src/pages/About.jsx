import { Link } from 'react-router-dom'
import {
  FaAward, FaHandshake, FaLightbulb, FaUsers,
  FaGlobe, FaCheckCircle, FaIndustry, FaMedal,
  FaRocket, FaShieldAlt,
} from 'react-icons/fa'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'

const values = [
  { icon: FaLightbulb,  title: 'Innovation',     desc: 'We continuously invest in R&D and adopt the latest technologies to stay ahead of the curve.',          bg: 'from-yellow-400 to-orange-500' },
  { icon: FaAward,      title: 'Quality',         desc: 'Every project follows stringent quality checks, certifications and international standards.',          bg: 'from-blue-500 to-brand-blue'   },
  { icon: FaHandshake,  title: 'Integrity',       desc: 'Transparent communication and honest dealings form the foundation of every partnership.',              bg: 'from-green-500 to-teal-600'    },
  { icon: FaUsers,      title: 'Collaboration',   desc: 'We work as an extension of your team, aligning deeply with your goals and vision.',                   bg: 'from-purple-500 to-violet-600' },
]

const team = [
  { name: 'Krishnappa K.',      role: 'Founder & CEO',            initials: 'KK', expertise: 'Labview Data Acquisition & Signal Conditioning', bg: 'from-brand-blue to-indigo-600' },
  { name: 'Prabhu',             role: 'Manager',                  initials: 'P',  expertise: 'Project Execution & Strategy',                   bg: 'from-violet-500 to-purple-600' },
  { name: 'Samyvelu M.',        role: 'Assistant Manager',        initials: 'SM', expertise: 'Control Systems & Planning',                     bg: 'from-cyan-500 to-blue-600' },
  { name: 'Vijayakumar R.',     role: 'Sr. Application Engineer', initials: 'VR', expertise: 'PLC & SCADA Development',                        bg: 'from-green-500 to-teal-600' },
  { name: 'Shanmugaraj S.',     role: 'Sr. Application Engineer', initials: 'SS', expertise: 'Process Automation',                             bg: 'from-orange-500 to-amber-600' },
  { name: 'Arunkumar L.',       role: 'Application Engineer',     initials: 'AL', expertise: 'HMI Design & Integration',                       bg: 'from-pink-500 to-rose-600' },
  { name: 'Thangaraj P.',       role: 'Application Engineer',     initials: 'TP', expertise: 'System Commissioning',                           bg: 'from-blue-400 to-indigo-500' },
  { name: 'Naveenkumar',        role: 'Application Engineer',     initials: 'N',  expertise: 'Electrical Design',                              bg: 'from-amber-400 to-orange-500' },
  { name: 'Muthatamilselvan',   role: 'Application Engineer',     initials: 'M',  expertise: 'Control Panel Wiring',                           bg: 'from-emerald-400 to-teal-500' },
  { name: 'Harish',             role: 'Application Engineer',     initials: 'H',  expertise: 'Field Instrumentation',                          bg: 'from-fuchsia-500 to-pink-600' },
  { name: 'Arunkumar S.',       role: 'Application Engineer',     initials: 'AS', expertise: 'Software Development',                           bg: 'from-red-400 to-rose-500' },
  { name: 'Shantini B.',        role: 'Accounts Executive',       initials: 'SB', expertise: 'Finance & Operations',                           bg: 'from-indigo-400 to-violet-500' },
]

const milestones = [
  { year: '2010', event: 'Company founded with a vision to democratise industrial automation',    icon: FaRocket   },
  { year: '2013', event: 'First major SCADA project for a leading oil & gas company',             icon: FaIndustry },
  { year: '2016', event: 'Expanded to Gulf markets; opened offices in UAE and Qatar',             icon: FaGlobe    },
  { year: '2019', event: 'Launched IoT division and cloud-based monitoring products',             icon: FaLightbulb },
  { year: '2022', event: 'Achieved ISO 9001:2015 certification; crossed 400+ projects',           icon: FaAward    },
  { year: '2024', event: 'Opened state-of-the-art training centre for industry professionals',   icon: FaMedal    },
]

const awards = [
  { title: 'Best Automation Company',   year: '2023', by: 'CII Award'     },
  { title: 'Industrial Innovation',     year: '2022', by: 'IEEMA Award'   },
  { title: 'Top SCADA Provider',        year: '2021', by: 'Industry Today' },
  { title: 'Safety Excellence Award',   year: '2020', by: 'NASSCOM'       },
]

export default function About() {
  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════ */}
      <section className="pt-38 lg:pt-36 pb-20 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        {/* Ambient blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl" />

        <div className="container-max relative z-10 w-full mt-10 pt-0 p-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Text Content ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <HiSparkles className="text-brand-blueLight" size={16} />
                <span className="text-blue-200 text-sm font-semibold">Since 2010 — 15+ Years of Excellence</span>
              </div>
              <p className="section-subtitle text-brand-blueLight">About Easy Automation</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-xl mb-4 md:mb-6 leading-tight">
                Automating Industry,{' '}
                <span className="text-brand-blueLight">Empowering Progress</span>
              </h1>
              <p className="text-blue-100 mt-4 md:mt-6 max-w-lg text-base md:text-lg leading-relaxed">
                Since 2010, Easy Automation has been at the forefront of industrial automation and
                electrical engineering in India and beyond. We combine technical expertise with a
                client-first approach to deliver solutions that work — reliably, safely, efficiently.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                <Link to="/contact" className="w-full sm:w-auto justify-center bg-white text-brand-blue font-bold px-8 py-3.5 md:py-3 rounded-lg hover:bg-brand-gray transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
                  Work With Us <HiArrowRight />
                </Link>
                <Link to="/projects" className="w-full sm:w-auto justify-center border-2 border-white/50 text-white px-8 py-3.5 md:py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
                  Our Projects <HiArrowRight />
                </Link>
              </div>
              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12">
                {[['500+', 'Projects'], ['15+', 'Years'], ['200+', 'Clients'], ['50+', 'Engineers']].map(([v, l]) => (
                  <div key={l}>
                    <p className="text-2xl md:text-3xl font-black text-white">{v}</p>
                    <p className="text-blue-300 text-xs md:text-sm font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Animated Visual Panel ── */}
            <div className="hidden lg:flex items-center justify-center relative h-[380px] md:h-[450px] lg:h-[520px] mt-10 lg:mt-0 w-full overflow-hidden sm:overflow-visible">
              <div className="relative w-full h-full flex items-center justify-center scale-[0.7] sm:scale-[0.85] md:scale-95 lg:scale-100 origin-center">

              {/* Outer slow-spinning dashed ring */}
              <div className="absolute w-[430px] h-[430px] rounded-full border border-dashed border-white/10 animate-spin-slow" />
              {/* Middle dotted ring */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-dotted border-white/15" />
              {/* Inner glow ring */}
              <div className="absolute w-[250px] h-[250px] rounded-full border border-white/10 bg-white/5" />

              {/* ── Central Hub ── */}
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-white/20 to-white/5
                              border border-white/30 backdrop-blur-sm flex flex-col items-center justify-center
                              shadow-2xl glow-pulse z-10">
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-brand-blue flex items-center justify-center mb-2 shadow-lg shadow-brand-blue/60">
                  <FaIndustry className="text-white" size={30} />
                </div>
                <p className="text-white font-black text-base leading-none">Easy</p>
                <p className="text-blue-200 text-[10px] font-bold tracking-widest uppercase">Automation</p>
                <p className="text-brand-blueLight text-[9px] font-semibold mt-0.5 opacity-80">Est. 2010</p>
              </div>

              {/* ── TOP — ISO 9001 Badge ── */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0s' }}>
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3
                               flex items-center gap-3 shadow-xl">
                  <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaShieldAlt className="text-white" size={14} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs leading-tight">ISO 9001:2015</p>
                    <p className="text-blue-200 text-[10px]">Quality Certified</p>
                  </div>
                </div>
              </div>

              {/* ── RIGHT — Projects counter ── */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-4
                               shadow-xl text-center">
                  <p className="text-4xl font-black text-white leading-none">500+</p>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-wider mt-1">Projects</p>
                  <div className="flex justify-center gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-[10px]">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── BOTTOM — SIL / Safety Badge ── */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '1.4s' }}>
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3
                               flex items-center gap-3 shadow-xl">
                  <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-white" size={14} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs leading-tight">SIL 3 Rated</p>
                    <p className="text-blue-200 text-[10px]">IEC 61508 Compliant</p>
                  </div>
                </div>
              </div>

              {/* ── LEFT — Experience ── */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '2.1s' }}>
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-5 py-4
                               shadow-xl text-center">
                  <p className="text-4xl font-black text-brand-blueLight leading-none">15+</p>
                  <p className="text-blue-200 text-[10px] font-bold uppercase tracking-wider mt-1">Years Exp.</p>
                  <p className="text-white/50 text-[9px] mt-0.5">Since 2010</p>
                </div>
              </div>

              {/* ── TOP-RIGHT — Clients ── */}
              <div className="absolute top-14 right-10 animate-float-delay">
                <div className="bg-gradient-to-br from-yellow-500/25 to-orange-500/25 backdrop-blur-md
                               border border-yellow-400/30 rounded-xl px-3 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-yellow-300" size={13} />
                    <div>
                      <p className="text-white font-bold text-xs">200+ Clients</p>
                      <p className="text-yellow-200 text-[9px]">Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── BOTTOM-LEFT — Awards ── */}
              <div className="absolute bottom-14 left-10 animate-float-delay2">
                <div className="bg-gradient-to-br from-purple-500/25 to-violet-600/25 backdrop-blur-md
                               border border-purple-400/30 rounded-xl px-3 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaMedal className="text-purple-300" size={13} />
                    <div>
                      <p className="text-white font-bold text-xs">Award Winning</p>
                      <p className="text-purple-200 text-[9px]">CII · IEEMA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── TOP-LEFT — Global Reach ── */}
              <div className="absolute top-14 left-10 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-gradient-to-br from-cyan-500/25 to-blue-600/25 backdrop-blur-md
                               border border-cyan-400/30 rounded-xl px-3 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-cyan-300" size={13} />
                    <div>
                      <p className="text-white font-bold text-xs">15+ Countries</p>
                      <p className="text-cyan-200 text-[9px]">India & Gulf</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── BOTTOM-RIGHT — 24/7 Support ── */}
              <div className="absolute bottom-14 right-10 animate-float-delay" style={{ animationDelay: '0.5s' }}>
                <div className="bg-gradient-to-br from-green-500/25 to-teal-600/25 backdrop-blur-md
                               border border-green-400/30 rounded-xl px-3 py-2.5 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaRocket className="text-green-300" size={13} />
                    <div>
                      <p className="text-white font-bold text-xs">24/7 Support</p>
                      <p className="text-green-200 text-[9px]">AMC Contracts</p>
                    </div>
                  </div>
                </div>
              </div>

              </div>
            </div>
            {/* END right panel */}
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION ════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-brand-blue to-brand-blueDark rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
            <FaGlobe size={36} className="mb-5 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed text-blue-100">
              To deliver world-class industrial automation solutions that maximise operational
              efficiency, safety, and profitability — making cutting-edge technology accessible
              to industries of every size.
            </p>
          </div>
          <div className="bg-gradient-to-br from-brand-dark to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
            <FaLightbulb size={36} className="mb-5 text-yellow-400" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="leading-relaxed text-gray-300">
              To be South Asia's most trusted automation partner — recognised for technical
              excellence, innovation, and the tangible impact we create in every plant we touch.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ═══════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc, bg }) => (
              <div key={title} className="group text-center p-8 bg-white rounded-2xl shadow-sm card-hover border border-gray-100 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Milestones <span className="gradient-text">& Growth</span></h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue to-brand-blueLight hidden md:block" />
            <div className="space-y-8">
              {milestones.map(({ year, event, icon: Icon }, i) => (
                <div
                  key={year}
                  className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center
                              ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                      <span className="text-brand-blue font-black text-2xl">{year}</span>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{event}</p>
                    </div>
                  </div>
                  {/* Icon dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-brand-blue shadow-lg shadow-brand-blue/30 flex-shrink-0 z-10 items-center justify-center">
                    <Icon className="text-white" size={16} />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ AWARDS ════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-subtitle">Recognition</p>
            <h2 className="section-title">Awards & <span className="gradient-text">Recognition</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map(({ title, year, by }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FaMedal className="text-white" size={22} />
                </div>
                <p className="font-bold text-brand-dark text-sm mb-1">{title}</p>
                <p className="text-brand-blue text-xs font-semibold">{by} · {year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">The People</p>
            <h2 className="section-title">Meet Our <span className="gradient-text">Expert Team</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map(({ name, role, initials, expertise, bg }) => (
              <div key={name} className="group bg-white rounded-2xl p-8 text-center shadow-sm card-hover border border-gray-100 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-2xl font-black">{initials}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{name}</h3>
                <p className="text-brand-blue text-sm font-semibold mt-1">{role}</p>
                <p className="text-gray-400 text-xs mt-2 font-medium">{expertise}</p>
                <div className="flex gap-2 justify-center mt-4">
                  {['LinkedIn', 'Email'].map(s => (
                    <span key={s} className="px-3 py-1 bg-brand-blue/8 text-brand-blue rounded-full text-xs font-medium cursor-pointer hover:bg-brand-blue/15 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <p className="section-subtitle">Credentials</p>
            <h2 className="section-title">Certifications & <span className="gradient-text">Standards</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['ISO 9001:2015', 'CE Marking', 'IEC 61508 SIL', 'ATEX Certified', 'UL Listed', 'BIS Approved'].map(cert => (
              <div key={cert} className="group flex items-center gap-3 bg-white border border-brand-blue/20 rounded-xl px-6 py-4 shadow-sm hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 cursor-default">
                <FaShieldAlt className="text-brand-blue group-hover:text-white transition-colors" />
                <span className="text-brand-dark font-semibold text-sm group-hover:text-white transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="section-padding bg-gradient-to-br from-brand-dark to-brand-blue text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="container-max relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing List of Success Stories</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Let's build something remarkable together.</p>
          <Link to="/contact" className="bg-white text-brand-blue font-bold px-10 py-4 rounded-lg hover:bg-brand-gray transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            Start a Project <HiArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
