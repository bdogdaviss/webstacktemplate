import { Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const email = 'baronmichaeldavis@gmail.com'
const linkedinUrl = 'https://www.linkedin.com/in/baron-davis-ba0275292/'
const linkedinHandle = 'linkedin.com/in/baron-davis-ba0275292'
const githubUrl = 'https://github.com/bdogdaviss'
const githubHandle = 'github.com/bdogdaviss'

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="mx-auto max-w-3xl px-6 pt-16 pb-8"
    >
      <header className="mb-12">
        <h1
          id="contact-page-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Contact
        </h1>
        <p className="mt-3 text-base text-subtle">
          Available for inquiries, collaborations, and new opportunities.
        </p>
      </header>

      <ul className="mb-10 space-y-4">
        <li>
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 font-mono text-base text-subtle transition-colors hover:text-fg sm:text-lg"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="group-hover:underline underline-offset-4">
              {email}
            </span>
          </a>
        </li>
        <li>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-base text-subtle transition-colors hover:text-fg sm:text-lg"
          >
            <FaLinkedin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="group-hover:underline underline-offset-4">
              {linkedinHandle}
            </span>
          </a>
        </li>
        <li>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-base text-subtle transition-colors hover:text-fg sm:text-lg"
          >
            <SiGithub className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="group-hover:underline underline-offset-4">
              {githubHandle}
            </span>
          </a>
        </li>
      </ul>

      <div className="border-t border-border" />
    </section>
  )
}
