export const siteConfig = {
  // Set this to true only after verified public business details, contact delivery,
  // legal review, and a production domain are configured.
  isReadyForPublicLaunch: false,

  // Business information
  businessName: 'Flava Depot',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  email: '',

  // Hours of operation
  hours: {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  },

  // Branding and aesthetics
  logo: '',
  primaryColor: '#0ea5e9',

  // Hero section
  heroHeadline: 'Your Premium Smoke Shop Destination',
  heroSubheadline:
    'Discover a refined selection of glass, vapes, and accessories with knowledgeable in-store support.',

  // Services and offerings
  services: [
    {
      title: 'Premium Glass',
      description: 'Hand-blown glass pipes, water pipes, and rigs from leading artists.',
      icon: 'glass',
    },
    {
      title: 'Vaporizers',
      description: 'Dry-herb and concentrate vaporizers from trusted brands.',
      icon: 'vape',
    },
    {
      title: 'Accessories',
      description: 'Grinders, papers, cleaning supplies, and other essentials.',
      icon: 'accessories',
    },
    {
      title: 'CBD Products',
      description: 'CBD tinctures, gummies, and topical products.',
      icon: 'cbd',
    },
  ],

  // Add a verified embed URL only after the business location is confirmed.
  googleMapsEmbed: '',

  // Add only verified official profiles.
  socialLinks: {
    instagram: '',
    facebook: '',
    twitter: '',
  },

  // Used only after the site is ready for public indexing.
  url: 'https://flavadepot.example',
  locale: 'en_US',
}

export type SiteConfig = typeof siteConfig
