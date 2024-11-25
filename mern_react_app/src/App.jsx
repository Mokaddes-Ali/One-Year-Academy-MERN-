import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutApp from './components/AboutApp'
import Services from './components/Services'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <AboutApp/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
      <Partners/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
