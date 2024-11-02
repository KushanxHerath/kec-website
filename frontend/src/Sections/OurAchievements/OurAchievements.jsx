import React from 'react'
import './OurAchievements.css'
import AchievementCard1 from '../../Components/AchievementCard1/AchievementCard1'
import AchievementCard2 from '../../Components/AchievementCard2/AchievementCard2'

import { achievementsData } from '../../Pages/Achievements/achievementsData'

export default function OurAchievements() {

  const latestAchievements = achievementsData.slice(0 , 3)

  return (
    <section className='websection'>
      <h2 className='sectiontitle title-oa'>Our Achievements</h2>
      <AchievementCard1 achievement={latestAchievements[0]}/>
      <div className="container-moreac">
        <AchievementCard2 achievement={latestAchievements[1]}/>
        <AchievementCard2 achievement={latestAchievements[2]}/>
        <AchievementCard2 achievement={{title:'View More Achievements' , thumbnail:'view our achievements-min.png'}} viewMore={true}/>
      </div>
    </section>
  )
}
