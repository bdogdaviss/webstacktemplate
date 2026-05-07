import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
