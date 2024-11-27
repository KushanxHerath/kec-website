import React from 'react'
import AchievementCard1 from '../../Components/AchievementCard1/AchievementCard1'
import styles from './Achievements.module.css'
import { achievementsData } from './achievementsData'

export default function Achievements() {
  return (
    <section className='websection'>
      <div className={styles['grid-achievements']}>
        <AchievementCard1 achievement={achievementsData[0]}></AchievementCard1>
        <AchievementCard1 achievement={achievementsData[1]}></AchievementCard1>
        <AchievementCard1 achievement={achievementsData[2]}></AchievementCard1>
      </div>
    </section>
  )
}
