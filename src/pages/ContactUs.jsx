import { useState } from 'react'
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaClock, FaLinkedinIn, FaFacebookF, FaInstagram,
  FaCheckCircle, FaWhatsapp, FaHeadset,
} from 'react-icons/fa'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const INIT = { name: '', email: '', phone: '', company: '', service: '', message: '' }

const services = [
  'PLC Programming', 'SCADA & HMI', 'Electrical Panels',
  'Safety Systems', 'IoT Solutions', 'AMC & Maintenance', 'Training', 'Other',
]

export default function ContactUs() {
  const [form,       setForm]       = useState(INIT)
  const [errors,     setErrors]     = useState({})
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!form.service)        e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Tell us about your project'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(err => ({ ...err, [e.target.name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
    setForm(INIT)
  }

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-all
     focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
     ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-brand-blue/40'}`

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════════ */}
      <section className="pt-36 pb-20 section-padding !py-0 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" />
        <div className="container-max py-28 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <HiSparkles className="text-brand-blueLight" size={16} />
            <span className="text-blue-200 text-sm font-semibold">We respond within 24 hours</span>
          </div>
          <p className="section-subtitle text-blue-300">Get In Touch</p>
          <h1 className="section-title text-white max-w-2xl">
            Let's Build Something{' '}
            <span className="text-brand-blueLight">Great Together</span>
          </h1>
          <p className="text-blue-100 mt-5 max-w-xl text-lg">
            Reach out to our team for a free consultation, project quote, or any enquiry.
          </p>
          {/* Quick contact cards */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="tel:+917824008001"
               className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 transition-all">
              <FaPhone className="text-brand-blueLight" size={14} />
              <span className="text-white text-sm font-medium">+91 78240 08001</span>
            </a>
            <a href="mailto:easy.automation@yahoo.com"
               className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 transition-all">
              <FaEnvelope className="text-brand-blueLight" size={14} />
              <span className="text-white text-sm font-medium">easy.automation@yahoo.com</span>
            </a>
            <a href="https://wa.me/917824008001"
               target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-xl px-5 py-3 hover:bg-green-500/30 transition-all">
              <FaWhatsapp className="text-green-400" size={16} />
              <span className="text-white text-sm font-medium">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ═════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max grid lg:grid-cols-3 gap-12">

          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Info card */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
              <p className="font-bold text-xl mb-6 relative z-10">Contact Details</p>

              {[
                { icon: FaMapMarkerAlt, title: 'Office Address', lines: ['No 19, Ground Floor, Emmanuel Nagar, Rohini St, Pudur, Ambattur, Chennai, Tamil Nadu 600053'] },
                { icon: FaPhone,        title: 'Phone Numbers',  lines: ['+91 78240 08001', '+91 44 2345 6789'], href: 'tel:+917824008001' },
                { icon: FaEnvelope,     title: 'Email Address',  lines: ['easy.automation@yahoo.com', 'easyprabhu@yahoo.com'], href: 'mailto:easy.automation@yahoo.com' },
                { icon: FaClock,        title: 'Working Hours',  lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'] },
              ].map(({ icon: Icon, title, lines, href }) => (
                <div key={title} className="flex gap-4 mb-6 last:mb-0 relative z-10">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={15} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-1">{title}</p>
                    {lines.map((l, i) => (
                      href && i === 0
                        ? <a key={l} href={href} className="text-blue-200 text-xs block hover:text-white transition-colors">{l}</a>
                        : <p key={l} className="text-blue-200 text-xs">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-brand-dark text-sm mb-4">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { icon: FaFacebookF,  href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
                  { icon: FaInstagram,  href: '#', label: 'Instagram', color: 'hover:bg-pink-500' },
                  { icon: FaWhatsapp,   href: 'https://wa.me/917824008001', label: 'WhatsApp', color: 'hover:bg-green-500' },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center
                               text-brand-blue hover:text-white transition-all duration-200 ${color}`}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917824008001?text=Hello%2C%20I'm%20interested%20in%20your%20automation%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 transition-all duration-200 shadow-lg shadow-green-500/20 group"
            >
              <FaWhatsapp size={28} />
              <div>
                <p className="font-bold text-sm">Chat on WhatsApp</p>
                <p className="text-green-100 text-xs">Usually replies within minutes</p>
              </div>
              <HiArrowRight className="ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Support card */}
            <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                <FaHeadset className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-sm">24/7 AMC Support</p>
                <p className="text-gray-500 text-xs">Emergency support for contract clients</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-24
                              bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl border border-green-100">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30">
                  <FaCheckCircle className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-500 mb-8 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-6"
                noValidate
              >
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill in the form and we'll be in touch shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                           placeholder="Arunkumar S." className={inputClass('name')} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                           placeholder="you@email.com" className={inputClass('email')} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                           placeholder="+91 98765 43210" className={inputClass('phone')} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Company Name</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange}
                           placeholder="Your Company Pvt Ltd" className={inputClass('company')} />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select name="service" value={form.service} onChange={handleChange}
                          className={inputClass('service')}>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                            placeholder="Tell us about your automation requirements, plant size, and expected timeline..."
                            className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Trust line */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                  {['Free Consultation', '24-hr Response', 'No Commitment'].map(item => (
                    <span key={item} className="flex items-center gap-1">
                      <FaCheckCircle className="text-green-500" size={10} /> {item}
                    </span>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <HiArrowRight /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══ MAP ═══════════════════════════════════════ */}
      <section className="section-padding !pt-0 bg-white">
        <div className="container-max">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80">
            <iframe
              title="Easy Automation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.027715265158!2d80.14241458715821!3d13.130392400000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263002e4b3a7b%3A0xd4948f66062edea1!2sEASY%20AUTOMATION%20%26%20INFOTECH!5e0!3m2!1sen!2sin!4v1790327658012!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
           
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How long does a typical automation project take?',
                a: 'Depending on complexity, projects range from 4 weeks (small HMI upgrades) to 6–12 months (full greenfield automation). We provide a detailed timeline during the proposal stage.' },
              { q: 'Do you offer after-sales support and AMC?',
                a: 'Yes. We offer comprehensive Annual Maintenance Contracts with 24/7 remote support, periodic preventive maintenance visits, and emergency on-site response within 4 hours in Chennai.' },
              { q: 'Can you work with existing legacy systems?',
                a: 'Absolutely. We specialise in brownfield projects — integrating new automation with existing PLCs, instruments, and control systems without disrupting ongoing production.' },
              { q: 'What industries do you serve?',
                a: 'We serve manufacturing, oil & gas, pharma, food & beverage, automotive, water treatment, power, and more. Our engineers have vertical-specific expertise.' },
              { q: 'Do you provide remote support?',
                a: 'Yes. All our AMC clients receive 24/7 remote support via VPN, TeamViewer or Secomea. Our response time is under 2 hours for critical issues.' },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer
                                    font-semibold text-brand-dark text-sm list-none select-none
                                    group-open:text-brand-blue group-open:bg-brand-blue/3">
                  {q}
                  <span className="text-brand-blue flex-shrink-0 transition-transform group-open:rotate-180 w-6 h-6 rounded-full border-2 border-brand-blue/30 flex items-center justify-center">▾</span>
                </summary>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
