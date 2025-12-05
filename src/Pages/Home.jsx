import React from 'react'
import Header from '../Components/Header'
import '../Styles/home.css'
import Detail from '../Components/Detail'
import About from '../Components/About'
import Project from '../Components/Project'
import Freelancing from '../Components/Freelancing'
import Plans from '../Components/Plans'
import Reviews from '../Components/Reviews'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'

function Home() {
  return (
    <div className='home'>
        <div className='inhome'>
            <Header/>
            <Detail/>
        </div>

        <div className='hme2'>
          <About/>
          <Project/>
          <Freelancing/>
          <Reviews/>
        </div>
        <Footer/>
        <ScrollTop/>
    </div>
  )
}

export default Home
