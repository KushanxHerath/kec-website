import React from 'react'
import './AboutUs.css'
import { aboutUsData } from './aboutUsData'

export default function AboutUs() {
  return (
    <div>
      <section className='section-au websection'>
        <h2 className='sectiontitle sectiontitle-au-au'>About Us</h2>
        <div className="div-au-logos">
          <img src="/KCK_Crest_Wireframe.png" alt="" className="img-au-kck-crest" />
          <img src="/KEC_Logo.ico" alt="" className="img-au-kec-logo" />
        </div>
        <p className='p-au-au'>
          {aboutUsData[0].description}
        </p>
      </section>

      <section className="websection section-ov">
        <h2 className='sectiontitle sectiontitle-au-ov'>Our Vision</h2>
        <p>
          {aboutUsData[1].description}
        </p>
      </section>

      <section className="websection section-om">
        <h2 className='sectiontitle sectiontitle-au-om'>Our Mision</h2>
        <p>
          {aboutUsData[2].description}
        </p>
      </section>
    </div>
  )
}
