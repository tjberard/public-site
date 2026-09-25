// Tiles shown in the scrolling "Selected work" strip on the homepage.
// Add, remove or reorder entries here — the strip updates automatically.
//
//   title       Short project name (required)
//   category    Small label above the title, e.g. "Case study", "Launch", "Talk"
//   summary     One line on the outcome — keep it under ~90 characters
//   href        Where the tile links. Starts with "/" = page on this site;
//               anything else (https://…) opens in a new tab. Leave out for no link.
//   image       Optional cover image, e.g. "/work/checkout.jpg" (put the file in /public/work/).
//               Without one, the tile uses the solid `tone` color instead.
//   tone        Background when there's no image: "navy" | "teal" | "slate" | "sand"
//   metric      Optional headline number, e.g. "+32%" with metricLabel "conversion"

export const featuredWork = [
  {
    title: 'Checkout redesign',
    category: 'Case study',
    summary: 'Rebuilt a multi-step checkout into a single flow.',
    metric: '+32%',
    metricLabel: 'conversion',
    href: '/case-studies',
    tone: 'navy',
  },
  {
    title: 'Onboarding revamp',
    category: 'Case study',
    summary: 'Cut time-to-first-value for new customers in half.',
    metric: '2x',
    metricLabel: 'faster activation',
    href: '/case-studies',
    tone: 'teal',
  },
  {
    title: 'Pricing & packaging',
    category: 'Strategy',
    summary: 'Introduced a usage-based tier for growing teams.',
    metric: '+18%',
    metricLabel: 'ARPU',
    href: '/case-studies',
    tone: 'slate',
  },
  {
    title: 'Mobile app launch',
    category: 'Launch',
    summary: 'Took a companion app from concept to the app stores.',
    metric: '4.8★',
    metricLabel: 'store rating',
    href: '/case-studies',
    tone: 'sand',
  },
  {
    title: 'Analytics platform',
    category: 'Case study',
    summary: 'Gave every team a shared source of truth for metrics.',
    href: '/case-studies',
    tone: 'navy',
  },
  {
    title: 'Partner integrations',
    category: 'Growth',
    summary: 'Opened a new acquisition channel through partner APIs.',
    metric: '12',
    metricLabel: 'partners live',
    href: '/case-studies',
    tone: 'teal',
  },
]
