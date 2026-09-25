import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageMeta = {
  '/': {
    title: 'Easy Automation | Industrial Automation & Electrical Engineering – Chennai, India',
    description:
      'Easy Automation – 500+ projects in PLC Programming, SCADA/HMI, Electrical Control Panels, Safety Systems & Industrial IoT. ISO 9001:2015 certified. Chennai, India.',
    canonical: 'https://www.easyautomation.in/',
  },
  '/about': {
    title: 'About Easy Automation | 15+ Years of Industrial Automation Excellence',
    description:
      'Learn about Easy Automation — our mission, vision, team, milestones and certifications. Trusted industrial automation partner in India and the Gulf since 2010.',
    canonical: 'https://www.easyautomation.in/about',
  },
  '/services': {
    title: 'Automation Services | PLC, SCADA, Panels, Safety, IoT – Easy Automation',
    description:
      'Explore our full range of industrial automation services: PLC programming, SCADA/HMI, electrical control panels, functional safety (SIL), IoT analytics, and AMC.',
    canonical: 'https://www.easyautomation.in/services',
  },
  '/projects': {
    title: 'Projects Portfolio | 500+ Industrial Automation Projects – Easy Automation',
    description:
      'Browse Easy Automation\'s portfolio of 500+ successful projects across manufacturing, oil & gas, pharma, automotive, water treatment and power sectors.',
    canonical: 'https://www.easyautomation.in/projects',
  },
  '/contact': {
    title: 'Contact Easy Automation | Free Consultation & Quote – Chennai, India',
    description:
      'Get in touch with Easy Automation for a free consultation, project quote or support. Call +91 98765 43210 or email info@easyautomation.in.',
    canonical: 'https://www.easyautomation.in/contact',
  },
}

export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/']

    // Title
    document.title = meta.title

    // Description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) { desc = document.createElement('meta'); desc.setAttribute('name', 'description'); document.head.appendChild(desc) }
    desc.setAttribute('content', meta.description)

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', meta.canonical)

    // OG title + description (dynamic update)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical)

    // Twitter title + description
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', meta.title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', meta.description)
  }, [pathname])

  return null
}
