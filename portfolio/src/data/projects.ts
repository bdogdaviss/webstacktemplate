export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  href: string
  image?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'aura-optimizer',
    title: 'Aura Optimizer',
    description:
      'A PC optimization SaaS used by 50,000+ gamers. Hardware-locked licensing, PayPal checkout with automated key delivery, and zero-downtime deploys on Railway. Grew to 10K+ TikTok followers organically.',
    tags: ['TypeScript', 'TSX', 'Tailwind', 'Railway', 'PayPal'],
    href: 'https://auraoptimizer.com/',
    image: '/images/aura-optimizer.jpg',
    featured: true,
  },
  {
    slug: 'omnistrive',
    title: 'OmniStrive',
    description:
      "Co-founded enterprise data platform extending Code Willing's patent-approved file system to healthcare, energy, retail, and government. Petabyte-scale ingestion, compute, and distribution.",
    tags: ['Data Platform', 'Go-to-market', 'Pipelines'],
    href: 'https://omni-strive.com/',
    image: '/images/omnistrive.jpg',
    featured: true,
  },
  {
    slug: 'safety-alert-patrol',
    title: 'Safety Alert Patrol',
    description:
      'Lead developer on a Louisiana nonprofit connecting retired military and law-enforcement veterans with institutions seeking security personnel. Built the central platform for vetting, onboarding, and matching.',
    tags: ['Full-stack', 'Nonprofit', 'TypeScript'],
    href: 'https://www.safetyalertpatrol.org/',
    image: '/images/safety-alert-patrol.jpg',
    featured: true,
  },
  {
    slug: 'cert-sync',
    title: 'CertSync',
    description:
      'Platform that converts paper certification rosters into structured digital records, eliminating manual data-entry delays. Backed by OmniStrive.',
    tags: ['Next.js', 'Records', 'Data ingestion'],
    href: 'https://cert-sync-master-web.vercel.app/',
    image: '/images/cert-sync.jpg',
    featured: false,
  },
  {
    slug: 'friday-ai',
    title: 'Friday',
    description:
      'Voice/video AI agent built on LiveKit Agents for real-time conversational interfaces.',
    tags: ['LiveKit', 'Voice AI', 'Agents'],
    href: 'https://jarvis-ai-pink.vercel.app/',
    image: '/images/friday-ai.jpg',
    featured: false,
  },
  {
    slug: 'wakeup',
    title: 'Wakeup',
    description: 'Lightweight web frontend — work in progress.',
    tags: ['React', 'Vite'],
    href: 'https://wuwebsite-web.vercel.app/',
    image: '/images/wakeup.jpg',
    featured: false,
  },
  {
    slug: 'bdog-pressure-washing',
    title: 'B-Dog Pressure Washing',
    description:
      'Small-business site for a pressure washing company I own and operate. Lead capture and service info.',
    tags: ['Marketing site', 'Small business'],
    href: 'http://bdogpressurewashing.com/',
    image: '/images/bdog-pressure-washing.jpg',
    featured: false,
  },
]
