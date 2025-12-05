import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactComp from '../Components/ContactComp'
import ScrollTop from '../Components/ScrollTop'

function Contact() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <ContactComp/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Contact
