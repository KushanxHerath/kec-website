import React from 'react'
import './LogoFlip.css'

export default function LogoFlip() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/KCK_Crest_Wireframe.png" alt="KCK-Crest-Wireframe" />
        </div>
        <div class="flip-card-back">
          <img className='img-logo-kec-anim' src="/KEC_Logo.ico" alt="KEC-Logo" />
        </div>
      </div>
    </div>

  )
}
