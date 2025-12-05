import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ScrollTop from '../Components/ScrollTop'
import ProofComp from '../Components/ProofComp'
import '../Styles/home.css'

function Proofs() {
  return (
    <div className='home'>
      <div className='inhome'>
        <Header/>
        <ProofComp/>
      </div>
      <Footer/>
      <ScrollTop/>
    </div>
  )
}

export default Proofs
