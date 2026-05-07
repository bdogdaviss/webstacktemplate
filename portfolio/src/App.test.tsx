import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
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
      <Pagination />
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

  it('renders the theme toggle button in the Nav', () => {
    renderAt('/')
    expect(
      screen.getByRole('button', { name: /theme:/i }),
    ).toBeInTheDocument()
  })

  it('renders pagination with the current page marked active', () => {
    renderAt('/projects')
    const nav = screen.getByRole('navigation', { name: /pagination/i })
    const active = screen.getByRole('button', { name: /go to projects/i })
    expect(nav).toContainElement(active)
    expect(active).toHaveAttribute('aria-current', 'page')
    // The previous + next anchors flank the numbers
    expect(
      screen.getByRole('link', { name: /previous page: home/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /next page: contact/i }),
    ).toBeInTheDocument()
  })

  it('shows confirmation dialog when a project thumbnail is clicked, and opens the URL only after Continue', async () => {
    const user = userEvent.setup()
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    renderAt('/projects')

    // Click the first project thumbnail (Aura Optimizer is featured first)
    const triggers = screen.getAllByRole('button', { name: /open aura optimizer/i })
    await user.click(triggers[0])

    expect(
      await screen.findByRole('alertdialog', { name: /leaving the portfolio/i }),
    ).toBeInTheDocument()
    expect(open).not.toHaveBeenCalled()

    await user.click(screen.getByRole('button', { name: /continue/i }))
    expect(open).toHaveBeenCalledWith(
      'https://auraoptimizer.com/',
      '_blank',
      'noopener,noreferrer',
    )

    open.mockRestore()
  })
})
