import React from 'react'
import { FaWhatsapp, FaInbox, FaLocationArrow } from 'react-icons/fa'
import '../Styles/footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate();
  return (
    <div className='myfooter'>
      <div className='alerts'data-aos="fade-right">
        <h3>Stay Alert! Protect Yourself from Online Frauds</h3>
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
            <p>+91 91376 83024</p>
        </div>
        <div className='icntxt'>
            <FaInbox className='icn'/>
            <p>info@tech2shinelabs.com</p>
        </div>
        <div className='icntxt'>
            <FaLocationArrow className='icn'/>
            <p>FNo-203, Neha Pride Apt, Roopena Agrahara, Bomnahalli, , Bangalore, Karnataka, India - 560068.</p>
        </div>
      </div>

      <div className='cmps' data-aos="fade-left">
        <button onClick={()=>navigate('/complain')}>Submit Complaint(if any)</button>
        <p>Complaints Will be solved within 3 Working Days.</p>
        <button>Company Legal Document CIN</button>
        <p>Copyright © 2025 TECH2SHINE LABS PRIVATE LIMITED All Rights Reserved</p>
      </div>

    
    </div>
  )
}

export default Footer
