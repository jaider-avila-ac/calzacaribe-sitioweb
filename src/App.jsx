import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageLayout from './components/layout/PageLayout'
import LandingPage from './pages/LandingPage'
import TerminosPage from './pages/TerminosPage'
import PrivacidadPage from './pages/PrivacidadPage'
import CambiosPage from './pages/CambiosPage'
import TallasPage from './pages/TallasPage'
import FAQPage from './pages/FAQPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="terminos"   element={<TerminosPage />} />
          <Route path="privacidad" element={<PrivacidadPage />} />
          <Route path="cambios"    element={<CambiosPage />} />
          <Route path="tallas"     element={<TallasPage />} />
          <Route path="faq"        element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
