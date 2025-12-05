import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Project from '../Components/Project'
import ScrollTop from '../Components/ScrollTop'

function Services() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <Project/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Services
