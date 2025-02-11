import React from 'react'
import './AchievementCard1.css'
import { formatDate } from '../../../utils/convertions.js';

export default function AchievementCard1(props) {
  const imageURL = `http://localhost:5000/uploads/achievements/${props.achievement.thumbnail}`
  console.log(imageURL);
  
  return (
    <div className="container-accard1">
        <div className="div-acimg">
          <img className='img-acthumbnail' src={imageURL} alt="bizquiz-24-winners" />
        </div>
        <div className="div-content">
          <h1 className="h2-actitle">
            {props.achievement.title}
          </h1>
          <p className="p-acdate">
            <i>{formatDate(props.achievement.date)}</i>
          </p>
          <div className="div-acdescription">
            {props.achievement.short_description}
          </div>
          <button className='bt-viewmore'><p>View More</p></button>
        </div>
      </div>
  )
}
