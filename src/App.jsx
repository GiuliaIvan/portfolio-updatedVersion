import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import GrundfosStudy from './components/casestudy/GrundfosStudy'
import LinderStudy from './components/casestudy/LinderStudy'

const HomePage = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/grundfos" element={<GrundfosStudy />} />
      <Route path="/projects/linder" element={<LinderStudy />} />
    </Routes>
  )
}

export default App
