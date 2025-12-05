import React from 'react'
import '../Styles/reviewpage.css'
import Header from '../Components/Header'
import RComp from '../Components/RComp'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'

function ReviewPage() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <RComp/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default ReviewPage
