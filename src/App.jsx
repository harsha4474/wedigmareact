import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import Home from './pages/Home'
import CapabilitiesPage from './pages/CapabilitiesPage'
import WhyUsPage from './pages/WhyUsPage'
import ProcessPage from './pages/ProcessPage'
import EngineeringPage from './pages/EngineeringPage'
import GrowthPage from './pages/GrowthPage'
import CasesPage from './pages/CasesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route path="/growth" element={<GrowthPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <GoToTop />
    </>
  )
}

export default App
