import React, {useState, useEffect} from 'react'
import './OurAchievements.css'
import AchievementCard1 from '../../Components/AchievementCard1/AchievementCard1'
import AchievementCard2 from '../../Components/AchievementCard2/AchievementCard2'
import axios from 'axios'

import { achievementsData } from '../../Pages/Achievements/achievementsData'

export default function OurAchievements() {

  const [latestAchievements, setLatestAchievements] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/achievements?limit=3&sort=desc')
      .then(res => {setLatestAchievements(res.data)
        console.log(res.data);
      })
      .catch(err => console.log('fghfgh')

      )
  },[])

  const ac2card = (
    <>
      <AchievementCard2 achievement={latestAchievements[1]}/>
      <AchievementCard2 achievement={latestAchievements[2]}/>
      <AchievementCard2 achievement={{title:'View More Achievements' , thumbnail:'view our achievements-min.png'}} viewMore={true}/>
    </>
  )

  return (
    <section className='websection'>
      <h2 className='sectiontitle title-oa'>Our Achievements</h2>
      {latestAchievements.length >0 ? <AchievementCard1 achievement={latestAchievements[0]}/> : null}
      <div className="container-moreac">
        {latestAchievements.length >0 ? ac2card : null} 
      </div>
    </section>
  )
}
