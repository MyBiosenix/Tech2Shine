import React from 'react'
import '../Styles/proofs.css'
import { FaRegCalendarAlt, FaDownload } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md';

function ProofComp() {

  const pdfLinks = {
    2020: "/TRANSACTION DETAILS JAN TO DEC 2020.pdf",
    2021: "/TRANSACTION DETAILS JAN TO DEC 2021.pdf",
    2022: "/TRANSACTION DETAILS JAN TO DEC 2022.pdf",
    2023: "/TRANSACTION DETAILS JAN TO DEC 2023.pdf",
    2024: "/TRANSACTION DETAILS JAN TO DEC 2024.pdf",
    2025: "/TRANSACTION DETAILS JAN TO DEC 2025.pdf"
  }
  return (
    <div className='prof'>
      
      <h3 className='section-head' data-aos="fade-right">PROJECT BROCHURES</h3>
      <div className='brochers' data-aos="fade-left">
        
        <div className='proof-card'>
          <FaRegCalendarAlt className='mycal'/>
          <h4>Data Conversion Project Brochure</h4>
          <a
            href="/TECH2SHINE DATA CONVERSION PROJECT.pdf-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='proof-btn'
          >
            <FaDownload/>
            <p>Download</p>
          </a>
        </div>

        <div className='proof-card'>
          <FaRegCalendarAlt className='mycal'/>
          <h4>Data Segregation Project Brochure</h4>
          <a
            href="/TECH2SHINE SEGREGATION PROJECT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='proof-btn'
          >
            <FaDownload/>
            <p>Download</p>
          </a>
        </div>

        <div className='proof-card'>
          <FaRegCalendarAlt className='mycal'/>
          <h4>Captcha Verifier Project Brochure</h4>
          <a
            href="/TECH2SHINE CAPTCHA PROJECT.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='proof-btn'
          >
            <FaDownload/>
            <p>Download</p>
          </a>
        </div>

      </div>

      <h3 className='section-head' data-aos="fade-right">PAYMENT PROOFS</h3>

      <div className='brochers' data-aos="fade-left">
        {["2020","2021","2022","2023","2024","2025"].map((year) => (
          <div className='proof-card' key={year}>
            <FaRegCalendarAlt className='mycal'/>
            <h4>Payment Proofs of {year}</h4>
            <a
              href={pdfLinks[year]}
              target="_blank"
              rel="noopener noreferrer"
              className='proof-btn'
            >
              <MdMenu/>
              <p>View</p>
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ProofComp
