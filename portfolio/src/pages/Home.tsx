import Hero from '../components/Hero'
import About from '../components/About'
import Divider from '../components/Divider'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import SkillsMarquee from '../components/SkillsMarquee'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divider />
      <Experience />
      <Skills />
      <ProjectsPreview />
      <SkillsMarquee />
    </>
  )
}
