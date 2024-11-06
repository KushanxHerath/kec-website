import React from 'react'
import './AchievementCard1.css'

export default function AchievementCard1({achievement}) {
  return (
    <div className="container-accard1">
        <div className="div-acimg">
          <img className='img-acthumbnail' src={`/achievements/${achievement.thumbnail}`} alt="bizquiz-24-winners" />
        </div>
        <div className="div-content">
          <h1 className="h2-actitle">
            {achievement.title}
          </h1>
          <p className="p-acdate">
            <i>{achievement.date}</i>
          </p>
          <div className="div-acdescription">
            {achievement.description}
          </div>
          <button className='bt-viewmore'><p>View More</p></button>
        </div>
      </div>
  )
}
