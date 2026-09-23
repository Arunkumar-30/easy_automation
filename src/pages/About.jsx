import { Link } from 'react-router-dom'
import {
  FaAward, FaHandshake, FaLightbulb, FaUsers,
  FaGlobe, FaCheckCircle,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation',
    desc:  'We continuously invest in R&D and adopt the latest technologies to stay ahead of the curve.',
  },
  {
    icon: FaAward,
    title: 'Quality',
    desc:  'Every project follows stringent quality checks, certifications and international standards.',
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    desc:  'Transparent communication and honest dealings form the foundation of every partnership.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    desc:  'We work as an extension of your team, aligning deeply with your goals and vision.',
  },
]

const team = [
  { name: 'Arunkumar S.',  role: 'Founder & CEO',             initials: 'AS' },
  { name: 'Deepa R.',      role: 'Head of Engineering',        initials: 'DR' },
  { name: 'Suresh M.',     role: 'Lead PLC Programmer',        initials: 'SM' },
  { name: 'Kavitha P.',    role: 'SCADA & HMI Specialist',     initials: 'KP' },
  { name: 'Vikram T.',     role: 'Electrical Design Engineer',  initials: 'VT' },
  { name: 'Nithya L.',     role: 'Project Manager',             initials: 'NL' },
]

const milestones = [
  { year: '2010', event: 'Company founded with a vision to democratise industrial automation' },
  { year: '2013', event: 'First major SCADA project for a leading oil & gas company'         },
  { year: '2016', event: 'Expanded to Gulf markets; opened offices in UAE and Qatar'          },
  { year: '2019', event: 'Launched IoT division and cloud-based monitoring products'          },
  { year: '2022', event: 'Achieved ISO 9001:2015 certification; crossed 400+ projects'        },
  { year: '2024', event: 'Opened state-of-the-art training centre for industry professionals' },
]

export default function About() {
  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-20 section-padding !py-0 bg-gradient-to-br from-brand-gray to-white
                          relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 origin-top-right pointer-events-none"></div>
        <div className="container-max py-24">
          <p className="section-subtitle">About Easy Automation</p>
          <h1 className="section-title max-w-3xl">
            Automating Industry, <span className="gradient-text">Empowering Progress</span>
          </h1>
          <p className="text-gray-600 mt-6 max-w-2xl text-lg leading-relaxed">
            Since 2010, Easy Automation has been at the forefront of industrial automation and
            electrical engineering in India and beyond. We combine technical expertise with a
            client-first approach to deliver solutions that work — reliably, safely, efficiently.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Work With Us <HiArrowRight />
            </Link>
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
              Our Projects <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ MISSION / VISION ══════════════════════════ */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-10">
          <div className="bg-brand-blue rounded-3xl p-10 text-white">
            <FaGlobe size={36} className="mb-5 opacity-80" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed text-blue-100">
              To deliver world-class industrial automation solutions that maximise operational
              efficiency, safety, and profitability — making cutting-edge technology accessible
              to industries of every size.
            </p>
          </div>
          <div className="bg-brand-dark rounded-3xl p-10 text-white">
            <FaLightbulb size={36} className="mb-5 opacity-80" />
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
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 bg-white rounded-2xl shadow-sm card-hover border border-gray-100">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Milestones <span className="gradient-text">& Growth</span></h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/20 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center
                              ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
                      <span className="text-brand-blue font-black text-xl">{year}</span>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-brand-blue shadow-lg
                                  shadow-brand-blue/30 flex-shrink-0 z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEAM ════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="section-subtitle">The People</p>
            <h2 className="section-title">Meet Our <span className="gradient-text">Expert Team</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map(({ name, role, initials }) => (
              <div key={name} className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight
                                flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-black">{initials}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{name}</h3>
                <p className="text-brand-blue text-sm font-medium mt-1">{role}</p>
                <div className="flex gap-1 justify-center mt-4">
                  {['LinkedIn', 'Email'].map(s => (
                    <span key={s} className="px-3 py-1 bg-brand-gray rounded-full text-xs text-gray-500">
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
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-10">
            <p className="section-subtitle">Credentials</p>
            <h2 className="section-title">Certifications & <span className="gradient-text">Standards</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['ISO 9001:2015', 'CE Marking', 'IEC 61508 SIL', 'ATEX Certified', 'UL Listed', 'BIS Approved'].map(cert => (
              <div key={cert} className="flex items-center gap-3 bg-brand-blue/5 border border-brand-blue/20
                                         rounded-xl px-6 py-4 text-brand-dark font-semibold text-sm">
                <FaCheckCircle className="text-brand-blue" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
