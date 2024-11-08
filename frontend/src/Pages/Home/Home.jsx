import React from 'react'
import Hero from '../../Sections/Hero/Hero'
import WhoWeAre from '../../Sections/WhoWeAre/WhoWeAre'
import OurSponsors from '../../Sections/Our Sponsors/OurSponsors'
import OurAchievements from '../../Sections/OurAchievements/OurAchievements'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Hero/>
      <WhoWeAre/>
      <OurSponsors/>
      <OurAchievements/>
      <Footer/>
    </>
  )
}
