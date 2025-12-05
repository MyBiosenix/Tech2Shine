import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'

function AboutPage() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <About/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default AboutPage
