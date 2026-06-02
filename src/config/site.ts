export const siteConfig = {
  name: "HopeBridge Foundation",
  tagline: "Restoring dignity, safety, and hope.",
  description: "HopeBridge Foundation supports street children, vulnerable families, and people affected by substance use through outreach, education, counseling, and community reintegration.",
  contact: {
    phone: "+255 622 671 804",
    email: "info@hopebridge.org",
    location: "Dar es Salaam, Tanzania",
  },
  ctas: {
    donate: "Donate Now",
    volunteer: "Become a Volunteer",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Programs", href: "/programs" },
    { title: "Impact", href: "/impact" },
    { title: "Stories", href: "/stories" },
    { title: "Events", href: "/events" },
  ],
  actionNav: [
    { title: "Get Help", href: "/get-help" },
    { title: "Contact", href: "/contact" },
  ]
};

export type SiteConfig = typeof siteConfig;
