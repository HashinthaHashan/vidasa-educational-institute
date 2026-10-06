export const siteConfig = {
  name: 'VIDASA EDUCATIONAL INSTITUTE',
  shortName: 'VIDASA',
  tagline: 'Learn today. Lead tomorrow.',
  address: 'Institute address to be added',
  phoneDisplay: 'Official phone number to be added',
  phoneNumber: '',
  whatsappDisplay: 'Official WhatsApp number to be added',
  whatsappNumber: '',
  emailDisplay: 'Official email address to be added',
  email: '',
  facebookUrl: '',
  whatsappMessage: 'Hello Vidasa Educational Institute, I would like to know more about your classes.',
}

export const getPhoneUrl = () => (siteConfig.phoneNumber ? `tel:${siteConfig.phoneNumber}` : '/contact')

export const getEmailUrl = (subject = 'Inquiry about Vidasa classes') =>
  siteConfig.email
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : '/contact#contact-form'

export const getWhatsAppUrl = () => {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`
}
