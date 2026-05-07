import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import ContactCard from '../components/ContactCard'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsPreview />
      <ContactCard />
    </>
  )
}
