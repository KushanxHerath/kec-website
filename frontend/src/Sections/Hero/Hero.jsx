import React from 'react'
import './Hero.css'
import Tilt from 'react-parallax-tilt'

export default function Hero() {
  return (
    <section className='section-hero'>
      <Tilt className='tilt-hero' tiltMaxAngleX={25} tiltMaxAngleY={8} transitionSpeed={4000}>
        <h1 className='sans'>
          THE ROAR FROM THE RANDLES HILL ON
        </h1>
        <h1 className='entrepreneurship sans red'>
          ENTREPRENEURSHIP
        </h1>
      </Tilt>
    </section>
  )
}
