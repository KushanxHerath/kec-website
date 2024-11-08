import React from 'react'
import './Footer.css'
import{ Link } from 'react-router-dom'

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <section className='section-footer websection'>
      <div className="grid-footer">

        <div className="div-kec">
            <img src="/KEC_Logo.ico" alt="" className="img-ft-kec-logo" />
            <h3>KINGSWOOD</h3>
            <h3 className='red'>ENTREPRENEURS' CLUB</h3>
            <p>Looking to collaborate with us?</p>
            <Link to={'/contact-us'} className='a-ft-kec-contactus red'>Contact Us</Link>
        </div>

        <div className="div-links">
            <p>Links</p>
            <div className="div-links-underline"></div>
            <div className="grid-ft-linkset">
              <Link to={'/'} className="a-ft-link">Home</Link>
              <Link to={'/committee'} className="a-ft-link">Committee</Link>
              <Link to={'/events'} className="a-ft-link">Events</Link>
              <Link to={'/about-us'} className="a-ft-link">About Us</Link>
              <Link to={'/achievements'} className="a-ft-link">Achievements</Link>
              <a href={'https://www.instagram.com/kingswood.entrepreneurs'} target='blank' className="a-ft-link">Instagram</a>
            </div>
        </div>

        <div className="div-kck">
          <div className="div-flex-kck">
            <img src="/KCK_Crest.ico" alt="" className="img-ft-kck-crest" />
            <h3>KINGSWOOD COLLEGE</h3>
            <h3>KANDY</h3>
            <div className="div-ft-kck-iconset">
            <a href="https://www.facebook.com/kingswoodcollegelk?mibextid=LQQJ4d" target='_blank'>
              <FaFacebookSquare className='sm-icon's />
            </a>
            <a href="https://www.instagram.com/kingswood.college" target='_blank' >
              <FaInstagramSquare className='sm-icon'  />
            </a>
            <a href="http://www.x.com/kingswoodlk" target='_blank'>
              <FaSquareXTwitter className='sm-icon'  />
            </a>
            <a href="https://www.linkedin.com/school/kingswoodcollegelk/" target='_blank'>
              <FaLinkedin className='sm-icon'  />
            </a>
            <a href="https://whatsapp.com/channel/0029Va9KTAcHltY9PeJvWb3S" target='_blank'>
              <FaWhatsappSquare className='sm-icon'  />
            </a>
            </div>
          </div>
        </div>

        <div className="div-copyright">
          <p>© {currentYear} Kingswood College Kandy | All Rights Reserved</p>
        </div>

      </div>
    </section>
  )
}
