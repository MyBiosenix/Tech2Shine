import React, { useState } from 'react'
import '../Styles/contact.css'
import { FaWhatsapp, FaEnvelope, FaLocationArrow} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function ContactComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if(!name || !email || !subject || !message){
            setStatus('Please Fill All the Fields');
            return;
        }

        const templateParams = {
            from_name : name,
            from_email : email,
            subject: subject,
            message: message
        }
        emailjs.send(
            "service_wpphot5",
            "template_vw82zj7",
            templateParams,
            "tYY-vfdd_MgvObNww"
        )
        .then(
            (response) => {
                setStatus("Message Sent Succesfully");
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            },
            (error) => {
                setStatus("Failed to send Message. Try Again!")
            }
        );
    };
  return (
    <div className='mycontact'>
      <h3 data-aos="fade-down">Contact Us!</h3><br/>
      <div className='container'>
        <div className='myform' data-aos="fade-right">
            <h4>Send a Message</h4>
            <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='text' placeholder='Enter Your Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            <textarea value={message} placeholder='Enter Your Message to us' onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={sendEmail}>Submit</button>

            {status && <p className="status">{status}</p>}
        </div>
        <div className='dets' data-aos="fade-left">
            <div className='indet'>
                <FaWhatsapp className='mycon'/>
                <div className='mytxt'>
                    <h5>Chat Support!</h5>
                    <p>+91 91376 83024</p>
                </div>
            </div>
            <div className='indet'>
                <FaEnvelope className='mycon'/>
                <div className='mytxt'>
                    <h5>Email Id!</h5>
                    <p>info.tech2shinelabs@gmail.com</p>
                </div>
            </div>
            <div className='indet'>
                <FaLocationArrow className='mycon'/>
                <div className='mytxt'>
                    <h5>Address!</h5>
                    <p>FNo-203, Neha Pride Apt, Roopena Agrahara, Bomnahalli, , Bangalore, Karnataka, India - 560068.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComp
