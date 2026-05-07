export type ExperienceEntry = {
  company: string
  role: string
  period: string
  description: string
  logo?: string
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Co-Founder',
    company: 'OmniStrive',
    period: '2025 – Present',
    description:
      "Co-founded an enterprise data platform extending Code Willing's patent-approved file system to healthcare, energy, retail, and government. Architected the product website and go-to-market presence and designed data ingestion, compute, and distribution pipelines.",
  },
  {
    role: 'Programmer',
    company: 'Safety Alert Patrol',
    period: 'Jun 2025 – Present',
    description:
      'Lead developer for a Louisiana nonprofit connecting retired military and law-enforcement veterans with schools, churches, and healthcare facilities seeking qualified security personnel. Built and maintain the central web platform for vetting, onboarding, and matching.',
    logo: '/images/sap.png',
  },
  {
    role: 'Founder & Developer',
    company: 'Aura Optimizer',
    period: 'Summer 2025 – Present',
    description:
      'Built and launched a PC optimization tool used by 50,000+ gamers. Engineered hardware-locked licensing, PayPal payment processing with automated key delivery, and a full-stack TypeScript / Tailwind web platform on Railway. Grew the brand to 10K+ TikTok followers.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Code Willing (CWIQ)',
    period: 'May 2025 – Aug 2025',
    description:
      'Built and maintained containerized microservices using Docker and Kubernetes for a financial data management platform. Authored CI/CD pipelines (YAML + Justfiles), automated SGE master server creation and node-balancer configuration, and managed AWS (EC2, S3, IAM, CloudWatch). Tooling in Go and Bash.',
    logo: '/images/cwiq.png',
  },
  {
    role: 'Data Team',
    company: 'Code Willing (CWIQ)',
    period: 'May 2023 – May 2024',
    description:
      'Supported data pipeline operations for elite quant hedge fund clients including Quantbot Technologies, Schonfeld, Jain Global, and Estimize. Worked directly with client teams to troubleshoot data issues. Represented Code Willing at Neudata Summit (NYC) and BattleFin (Miami).',
    logo: '/images/cwiq.png',
  },
]
