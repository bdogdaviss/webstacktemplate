import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { profile } from './data/profile'

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  )
}

describe('Portfolio shell', () => {
  it('renders the configured name in the Nav and Hero', () => {
    renderAt('/')
    const matches = screen.getAllByText(profile.name)
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Projects route heading', () => {
    renderAt('/projects')
    expect(
      screen.getByRole('heading', { level: 1, name: /projects/i }),
    ).toBeInTheDocument()
  })

  it('renders Contact route heading', () => {
    renderAt('/contact')
    expect(
      screen.getByRole('heading', { level: 1, name: /contact/i }),
    ).toBeInTheDocument()
  })

  it('renders the Resume link in the Nav', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument()
  })
})
