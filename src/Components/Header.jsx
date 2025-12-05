import React,{useState} from 'react'
import t2s from '../assets/t2s.JPG'
import '../Styles/header.css'
import ttt from '../assets/mylogo1.png'
import { useNavigate,useLocation } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = (path) => {
    navigate(path)
    setIsOpen(false)
  }
  return (
    <div className='header'>
        <img src={ttt} alt='Logo' className='logo'/>
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>

        <div className={`inhead ${isOpen ? "active":""}`}>
            <p onClick={() => closeMenu('/')} className={location.pathname === '/' ? 'active':''}>Home</p>
            <p onClick={() => closeMenu('/about')} className={location.pathname === '/about' ? 'active':''}>About</p>
            <p onClick={() => closeMenu('/services')} className={location.pathname === '/services' ? 'active':''}>Services</p>
            <p onClick={() => closeMenu('/packages')} className={location.pathname === '/packages'?'active':''}>Packages</p>
            <p onClick={() => closeMenu('/reviews')} className={location.pathname === '/reviews'?'active':''}>Reviews</p>
            <p onClick={() => closeMenu('/proofs')} className={location.pathname === '/proofs'?'active':''}>Proofs & Brochures</p>
            <p onClick={() => closeMenu('/contact')} className={location.pathname === '/contact'?'active':''}>Contact</p>
        </div>
    </div>
  )
}

export default Header