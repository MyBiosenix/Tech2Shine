import React from 'react'
import Header from '../Components/Header'
import ComplainComp from '../Components/ComplainComp'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'

function Complain() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <ComplainComp/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Complain
