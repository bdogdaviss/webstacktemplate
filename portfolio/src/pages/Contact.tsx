import ContactCard from '../components/ContactCard'

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="mx-auto max-w-3xl px-6 pt-16 pb-8"
    >
      <header className="mb-4">
        <h1
          id="contact-page-heading"
          className="text-4xl tracking-tight sm:text-5xl"
        >
          Contact
        </h1>
        <p className="mt-3 text-base text-subtle">
          {/* placeholder intro */}
        </p>
      </header>
      <ContactCard />
    </section>
  )
}
