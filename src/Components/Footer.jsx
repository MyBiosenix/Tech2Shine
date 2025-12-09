import React from 'react'
import { FaWhatsapp, FaInbox, FaLocationArrow } from 'react-icons/fa'
import '../Styles/footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate();
  return (
    <div className='myfooter'>
      <div className='alerts'data-aos="fade-right">
        <h3>Note:</h3>
        <ul>
            <li>PAYMENT SHOULD ALWAYS BE DONE ON OUR OFFICIAL BANKING NAME “TECH2SHINE LABS” OUR LINKED PAYMENT PARTNERS - MSWIPE & BIJILIPAY</li>
            <li>(ON SCANNING MSWIPE & BIJILIPAY SCANNER/UPI ID - COMPANY NAME “TECH2SHINE LABS” will be displayed & then proceed for further payments)</li>
            <li>OUR EXECUTIVES WILL ONLY SHARE SCANNER/UPI ID - DISPLAYING (when scanned) “TECH2SHINE LABS”</li>
            <li>IF ANY PERSONAL NAMES GETS DISPLAYED PRETENDING TO BE OFFICIALS THEN DON’T PROCEED FURTHER AS HE/SHE ARE NOT US & NOR LINKED WITH OUR FIRM.</li>
            <li>IF ANY PAYMENT RELATED QUERY CONTACT OUR CHAT SUPPORT FOR JOINING GUIDANCE.</li>
        </ul>
      </div>

      <div className='support' data-aos="fade-left">
        <h3>Support</h3>
        <div className='icntxt'>
            <FaWhatsapp className='icn'/>
            <a href="https://wa.me/919137683024" target="_blank" rel="noopener noreferrer">
              +91 91376 83024
            </a>
        </div>
        <div className='icntxt'>
            <FaInbox className='icn'/>
            <a href="mailto:info@tech2shinelabs.com">
              info@tech2shinelabs.com
            </a>
        </div>
        <div className='icntxt'>
            <FaLocationArrow className='icn'/>
            <a 
              href="https://www.google.com/maps/place/Bommanahalli,+Bengaluru,+Karnataka/@12.9006227,77.6007098,14z/data=!3m1!4b1!4m6!3m5!1s0x3bae14eec814197d:0xcf0ad378f26271e9!8m2!3d12.9029804!4d77.6241936!16zL20vMGYwazMw?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
            >

            Bommanahalli, Bangalore,Karnataka, 560068</a>
        </div>
      </div>

      <div className='cmps' data-aos="fade-left">
        <button onClick={()=>navigate('/complain')}>Submit Complaint(if any)</button>
        <p>Complaints Will be solved within 3 Working Days.</p>
        <a 
          href="/Tech2shine CIN.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='onme' 
          style={{ textDecoration: 'none', color: 'black' }}>
          Company Legal Document CIN
        </a>
        <p>Copyright © 2025 TECH2SHINE LABS PRIVATE LIMITED All Rights Reserved</p>
      </div>

    
    </div>
  )
}

export default Footer
