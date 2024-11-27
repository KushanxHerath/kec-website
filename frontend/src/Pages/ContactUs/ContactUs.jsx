import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div>
      <section className='websection section-cu'>
        <h2 className='sectiontitle'>
          Contact Us
        </h2>
      
          <div className="grid-flex-cucards">
            <a href=''>
              <div className="container-cucard cucard-email">
                <img src="https://img.icons8.com/?size=100&id=eFPBXQop6V2m&format=png&color=000000" alt="icon-gmail" className="icon-cu icon-gmail" />
                <div>
                  <p>{`entreprenuers.kingswood@gmail.com`}</p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="container-cucard">
                <img src="https://img.icons8.com/?size=100&id=DUEq8l5qTqBE&format=png&color=000000" alt="icon-gmail" className="icon-cu icon-gmail" />
                <p>{`CEO (Kushan Herath)`}</p>
              </div>
            </a>
            <a href="">
              <div className="container-cucard">
                <img src="https://img.icons8.com/?size=100&id=DUEq8l5qTqBE&format=png&color=000000" alt="icon-gmail" className="icon-cu icon-gmail" />
                <p>{`COO (Shamal Keerthibandara)`}</p>
              </div>
            </a>
          </div>
      </section>

      <section className='websection section-cu-map'>
        <div className="flex-container-map">

          <div className="div-container-mapiframe">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.675227287222!2d80.61308667563196!3d7.2777461139378605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368942d21023f%3A0x3843546e47aefe57!2sKingswood%20College%2C%20Kandy!5e0!3m2!1sen!2slk!4v1731068439270!5m2!1sen!2slk"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="div-flex-schooldetails">
            <img src="/KCK_Crest.ico" alt="kck-crest" className="img-mapsec-kck-crest" />
            <h2>KINGSWOOD COLLEGE</h2>
            <h2>KANDY</h2>

            <div className="div-cu-kck">
              <p>Kingswood College,</p> <p>Randles Hill, Peradeniya Rd,</p><p> Kandy 20000.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
