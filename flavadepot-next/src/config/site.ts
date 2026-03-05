export const siteConfig = {
    // Business Information
    businessName: "Flava Depot",
    phone: "(555) 123-4567",
    address: "123 Smoke Shop Blvd",
    city: "Denver",
    state: "CO",
    zip: "80202",
    email: "hello@flavadepot.com",

    // Hours of Operation
    hours: {
        monday: "9:00 AM - 10:00 PM",
        tuesday: "9:00 AM - 10:00 PM",
        wednesday: "9:00 AM - 10:00 PM",
        thursday: "9:00 AM - 10:00 PM",
        friday: "9:00 AM - 11:00 PM",
        saturday: "9:00 AM - 11:00 PM",
        sunday: "10:00 AM - 8:00 PM",
    },

    // Branding & Aesthetics
    logo: "/logo.png", // Path to logo in public directory
    primaryColor: "#0ea5e9", // Used for buttons, highlights, etc.

    // Hero Section
    heroHeadline: "Your Premium Smoke Shop Destination",
    heroSubheadline: "Discover the finest selection of glass, vapes, and accessories in the city. Expert staff, premium products.",

    // Services & Offerings
    services: [
        {
            title: "Premium Glass",
            description: "Hand-blown, artisan glass pipes, water pipes, and rigs from top artists.",
            icon: "glass" // Reference to an icon name
        },
        {
            title: "Vaporizers",
            description: "Latest dry herb and concentrate vaporizers from trusted brands.",
            icon: "vape"
        },
        {
            title: "Accessories",
            description: "Everything you need from grinders and papers to cleaning supplies.",
            icon: "accessories"
        },
        {
            title: "CBD Products",
            description: "High-quality CBD tinctures, gummies, and topicals.",
            icon: "cbd"
        }
    ],

    // Location & Contact
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8864700877983!2d-104.991531!3d39.7523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzknNDUnMDguMyJOIDEwNCc1OScyOS41Ilc!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",

    // Social Media Links
    socialLinks: {
        instagram: "https://instagram.com/flavadepot",
        facebook: "https://facebook.com/flavadepot",
        twitter: "https://twitter.com/flavadepot"
    },

    // Technical Configuration
    url: "https://flavadepot.com", // Base URL for SEO and sitemap
    locale: "en_US",
};

export type SiteConfig = typeof siteConfig;
