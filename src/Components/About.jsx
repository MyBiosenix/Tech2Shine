import React from 'react'
import '../Styles/about.css'
import { FaCheckCircle,FaHandsHelping,FaGlobeAmericas} from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'


function About() {
  return (
    <div className='about'>
        <h3>About Us</h3>
        <div className='in-about' data-aos="fade-up">
            <div className='aboutit'>
                <h4>Over 8 Years of Trusted Expertise</h4>
                <p>	TECH2SHINE LABS PRIVATE LIMITED is a leading research and development company dedicated to providing real, reliable, and rewarding online job opportunities. With over six years of proven experience, we’ve become a trusted name in helping individuals build genuine work-from-home careers—across India and around the world.
                <br/>

                Backed by years of research and expertise, we design authentic online job programs that connect people with verified companies that truly pay for their work. In today’s digital landscape, where nearly 75% of online job offers are fraudulent, we take pride in being part of the trusted 25%—offering only legitimate and transparent opportunities that deliver real results.
                <br/>

                At TECH2SHINE LABS, we’ve guided thousands of online professionals toward sustainable income and financial independence. Our goal is simple: to help you earn confidently from home, without falling victim to scams or misinformation.
                <br/>

                We believe in empowerment through honesty—saving your time, protecting your efforts, and helping you turn your spare time into a secure, rewarding source of income.
                </p>
            </div>
            
        </div>

        <div className='grids'>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="0">
                <FaCheckCircle className='icon'/>
                <h3>Verified Online Job Programs</h3>
                <p>Every opportunity passes a strict authenticity check.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="200">
                <MdWorkOutline className='icon'/>
                <h3>Flexible Work Options</h3>
                <p>Earn from home, on your schedule, without limitations.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="400">
                <FaHandsHelping className='icon'/>
                <h3>Continuous Guidance</h3>
                <p>Expert support throughout your online career journey.</p>
            </div>
            <div className='ingrid' data-aos="fade-down" data-aos-delay="600">
                <FaGlobeAmericas className='icon'/>
                <h3>Global Partnerships</h3>
                <p>Collaborating with reputable online platforms worldwide.</p>
            </div>
        </div>
    </div>
  )
}

export default About
