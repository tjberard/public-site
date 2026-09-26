// Projects for the "Selected work" section on the homepage.
// The homepage shows the FIRST THREE entries as cards — reorder to choose which ones.
//
//   title       Short project name (required)
//   category    Small label above the title, e.g. "Case study", "Launch", "Talk"
//   summary     One line on the outcome — keep it under ~90 characters
//   href        Where the card links. Starts with "/" = page on this site;
//               anything else (https://…) opens in a new tab. Leave out for no link.
//   image       Optional cover image, e.g. "/work/checkout.jpg" (put the file in /public/work/).
//               A 4:3 landscape image works best (e.g. 1200x900).
//               Without one, the card shows the solid `tone` color instead.
//   tone        Preview color when there's no image: "navy" | "teal" | "slate" | "sand"
//   metric      Optional headline number, e.g. "+32%" with metricLabel "conversion"

export const featuredWork = [
  {
    title: 'Checkout redesign',
    category: 'Case study',
    summary: 'Rebuilt a multi-step checkout into a single flow.',
    metric: '+32%',
    metricLabel: 'conversion',
    href: '/my-work',
    tone: 'navy',
  },
  {
    title: 'Onboarding revamp',
    category: 'Case study',
    summary: 'Cut time-to-first-value for new customers in half.',
    metric: '2x',
    metricLabel: 'faster activation',
    href: '/my-work',
    tone: 'teal',
  },
  {
    title: 'Pricing & packaging',
    category: 'Strategy',
    summary: 'Introduced a usage-based tier for growing teams.',
    metric: '+18%',
    metricLabel: 'ARPU',
    href: '/my-work',
    tone: 'slate',
  },
  {
    title: 'Mobile app launch',
    category: 'Launch',
    summary: 'Took a companion app from concept to the app stores.',
    metric: '4.8★',
    metricLabel: 'store rating',
    href: '/my-work',
    tone: 'sand',
  },
  {
    title: 'Analytics platform',
    category: 'Case study',
    summary: 'Gave every team a shared source of truth for metrics.',
    href: '/my-work',
    tone: 'navy',
  },
  {
    title: 'Partner integrations',
    category: 'Growth',
    summary: 'Opened a new acquisition channel through partner APIs.',
    metric: '12',
    metricLabel: 'partners live',
    href: '/my-work',
    tone: 'teal',
  },
]
