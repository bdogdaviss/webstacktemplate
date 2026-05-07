import {
  SiTypescript,
  SiGo,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiTailwindcss,
  SiLinux,
  SiGithubactions,
  SiGrafana,
  SiSelenium,
  SiRailway,
  SiPostgresql,
  SiRedis,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import LogoLoop, { type LogoItem } from './LogoLoop'

const techLogos: LogoItem[] = [
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiGo />, title: 'Go', href: 'https://go.dev' },
  { node: <SiPython />, title: 'Python', href: 'https://www.python.org' },
  { node: <SiDocker />, title: 'Docker', href: 'https://www.docker.com' },
  { node: <SiKubernetes />, title: 'Kubernetes', href: 'https://kubernetes.io' },
  { node: <SiTerraform />, title: 'Terraform', href: 'https://www.terraform.io' },
  { node: <FaAws />, title: 'AWS', href: 'https://aws.amazon.com' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
  { node: <SiRedis />, title: 'Redis', href: 'https://redis.io' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiGithubactions />, title: 'GitHub Actions', href: 'https://github.com/features/actions' },
  { node: <SiGrafana />, title: 'Grafana', href: 'https://grafana.com' },
  { node: <SiSelenium />, title: 'Selenium', href: 'https://www.selenium.dev' },
  { node: <SiRailway />, title: 'Railway', href: 'https://railway.app' },
  { node: <SiLinux />, title: 'Linux', href: 'https://www.kernel.org' },
]

export default function SkillsMarquee() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="mx-auto w-full max-w-5xl px-6 py-16"
    >
      <h2
        id="stack-heading"
        className="text-center text-2xl tracking-tight sm:text-3xl"
      >
        Built with
      </h2>
      <p className="mt-2 text-center text-sm text-subtle">
        Tools and platforms I reach for daily.
      </p>

      <div
        className="mt-10 text-subtle"
        style={{ height: 80, position: 'relative', overflow: 'hidden' }}
      >
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={36}
          gap={56}
          scaleOnHover
          fadeOut
          ariaLabel="Tech stack"
        />
      </div>
    </section>
  )
}
