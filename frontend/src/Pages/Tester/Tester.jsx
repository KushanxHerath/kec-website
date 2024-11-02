import React from 'react'
import './Tester.css'
import LogoFlip from '../../Animations/LogoFlip/LogoFlip'
import AchievementCard2 from '../../Components/AchievementCard2/AchievementCard2'
import { achievementsData } from '../../Pages/Achievements/achievementsData'
import AchievementCard1 from '../../Components/AchievementCard1/AchievementCard1'

export default function Tester() {
  return (
    <section className='websection section-tester'>
      <AchievementCard1 achievement={achievementsData[0]}/>
    </section>
  )
}
