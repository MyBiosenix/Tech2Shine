import React from 'react'
import Header from '../Components/Header'
import Plans from '../Components/Plans'
import Footer from '../Components/Footer'
import '../Styles/home.css'
import ScrollTop from '../Components/ScrollTop'

function Packages() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <Plans/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Packages