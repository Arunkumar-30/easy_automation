import { useState } from 'react'
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaClock, FaLinkedinIn, FaFacebookF, FaInstagram,
  FaCheckCircle,
} from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

const INIT = { name: '', email: '', phone: '', company: '', service: '', message: '' }

const services = [
  'PLC Programming',
  'SCADA & HMI',
  'Electrical Panels',
  'Safety Systems',
  'IoT Solutions',
  'AMC & Maintenance',
  'Training',
  'Other',
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
    await new Promise(r => setTimeout(r, 1500)) // simulate API
    setSubmitting(false)
    setSubmitted(true)
    setForm(INIT)
  }

  const Field = ({ label, name, type = 'text', placeholder, required, children }) => (
    <div>
      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors
            focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
            ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-brand-blue/40'}`}
        />
      )}
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
      )}
    </div>
  )

  return (
    <>
      {/* ══ PAGE HERO ════════════════════════════════ */}
      <section className="pt-32 pb-16 section-padding !py-0 bg-gradient-to-br from-brand-dark to-brand-blue
                          text-white relative overflow-hidden">
        <div className="container-max py-24">
          <p className="section-subtitle text-blue-300">Get In Touch</p>
          <h1 className="section-title text-white max-w-2xl">
            Let's Build Something <span className="text-brand-blueLight">Great Together</span>
          </h1>
          <p className="text-blue-100 mt-5 max-w-xl text-lg">
            Reach out to our team for a free consultation, project quote, or any enquiry.
            We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ══ MAIN CONTENT ════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-3 gap-12">

          {/* ── Left: Contact Info ── */}
          <div className="space-y-8">
            <div>
              <p className="section-subtitle">Contact Details</p>
              <h2 className="text-2xl font-bold text-brand-dark">We're Here to Help</h2>
            </div>

            {[
              {
                icon:  FaMapMarkerAlt,
                title: 'Office Address',
                lines: ['123 Industrial Park, SIDCO', 'Chennai, Tamil Nadu – 600001', 'India'],
              },
              {
                icon:  FaPhone,
                title: 'Phone Numbers',
                lines: ['+91 98765 43210', '+91 44 2345 6789'],
                href:  'tel:+919876543210',
              },
              {
                icon:  FaEnvelope,
                title: 'Email Address',
                lines: ['info@easyautomation.in', 'projects@easyautomation.in'],
                href:  'mailto:info@easyautomation.in',
              },
              {
                icon:  FaClock,
                title: 'Working Hours',
                lines: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
              },
            ].map(({ icon: Icon, title, lines, href }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon className="text-white" size={18} />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">{title}</p>
                  {lines.map((l, i) => (
                    href && i === 0
                      ? <a key={l} href={href} className="text-gray-500 text-sm block hover:text-brand-blue transition-colors">{l}</a>
                      : <p key={l} className="text-gray-500 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <p className="font-bold text-brand-dark text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn'  },
                  { icon: FaFacebookF,  href: '#', label: 'Facebook'  },
                  { icon: FaInstagram,  href: '#', label: 'Instagram' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center
                               text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20
                              bg-green-50 rounded-3xl border border-green-100">
                <FaCheckCircle className="text-green-500 mb-4" size={60} />
                <h3 className="text-2xl font-bold text-brand-dark mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-500 mb-6 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 space-y-6"
                noValidate
              >
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">Send Us a Message</h3>
                  <p className="text-gray-500 text-sm mt-1">Fill in the form and we'll be in touch shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name"    name="name"    placeholder="Arunkumar S."        required />
                  <Field label="Email Address" name="email"   type="email" placeholder="you@email.com" required />
                  <Field label="Phone Number" name="phone"   type="tel"   placeholder="+91 98765 43210" required />
                  <Field label="Company Name" name="company" placeholder="Your Company Pvt Ltd" />
                </div>

                <Field label="Service Required" name="service" required>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors
                      focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                      ${errors.service ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </Field>

                <Field label="Project Details" name="message" required>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your automation requirements, plant size, and expected timeline..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors resize-none
                      focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                      ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
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

      {/* ══ MAP EMBED ═══════════════════════════════ */}
      <section className="section-padding !pt-0">
        <div className="container-max">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80">
            <iframe
              title="Easy Automation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.94!2d80.07!3d13.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526753c8b9ec3b%3A0x4a3b6add1c9b9e02!2sChennai!5e0!3m2!1sen!2sin!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical automation project take?',
                a: 'Depending on complexity, projects range from 4 weeks (small HMI upgrades) to 6–12 months (full greenfield automation). We provide a detailed timeline during the proposal stage.',
              },
              {
                q: 'Do you offer after-sales support and AMC?',
                a: 'Yes. We offer comprehensive Annual Maintenance Contracts with 24/7 remote support, periodic preventive maintenance visits, and emergency on-site response within 4 hours in Chennai.',
              },
              {
                q: 'Can you work with existing legacy systems?',
                a: 'Absolutely. We specialise in brownfield projects — integrating new automation with existing PLCs, instruments, and control systems without disrupting ongoing production.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve manufacturing, oil & gas, pharma, food & beverage, automotive, water treatment, power, and more. Our engineers have vertical-specific expertise.',
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer
                                    font-semibold text-brand-dark text-sm list-none select-none
                                    group-open:text-brand-blue">
                  {q}
                  <span className="text-brand-blue flex-shrink-0 transition-transform group-open:rotate-180">▾</span>
                </summary>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
