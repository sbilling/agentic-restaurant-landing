export const siteConfig = {
  name: "Hostess",
  url: "https://tryhostess.com",
  getStartedUrl: "#pricing",
  ogImage: "https://tryhostess.com/og.jpg",
  description:
    "AI-powered phone agents for restaurants. Handle orders, reservations, and customer inquiries during your hours with seamless Toast POS integration.",
  links: {
    twitter: "https://twitter.com/tryhostess",
    github: "https://github.com/tryhostess",
    email: "mailto:contact@tryhostess.com",
  },
  pricing: {
    starter: "#",
    professional: "#",
    enterprise: "#",
  },
  stats: {
    calls: "100k+",
    restaurants: "500+",
    uptime: "99.9%",
    avgResponseTime: "< 2s",
    languages: 5,
    integrations: 12,
    satisfactionRate: "98%",
    orderAccuracy: "99.5%",
  },
};

export type SiteConfig = typeof siteConfig;
