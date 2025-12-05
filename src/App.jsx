import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'
import ReviewPage from './Pages/ReviewPage'
import Services from './Pages/Services'
import Packages from './Pages/Packages'
import Contact from './Pages/Contact'     
import Complain from './Pages/Complain'
import Proofs from './Pages/Proofs'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './Components/ScrollToTop'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,    // animation duration (optional)
      offset: 100,      // trigger point (optional)
      once: true        // animation runs once (optional)
    });
  }, []);
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<ReviewPage/>}/>
        <Route path='/proofs' element={<Proofs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/complain' element={<Complain/>}/>
      </Routes>
    </Router>
  )
}

export default App