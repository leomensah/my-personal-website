
import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Certificate from './components/certificates/Certificate'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Certificate />
      <Contact />
      <Footer />
      
    </>

  )
}

export default App