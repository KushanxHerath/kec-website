import React from 'react'
import './LogoFlip.css'

export default function LogoFlip() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/KCK_Crest_Wireframe.png" alt="KCK-Crest-Wireframe" />
        </div>
        <div className="flip-card-back">
          <img className='img-logo-kec-anim' src="/KEC_Logo.ico" alt="KEC-Logo" />
        </div>
      </div>
    </div>

  )
}
