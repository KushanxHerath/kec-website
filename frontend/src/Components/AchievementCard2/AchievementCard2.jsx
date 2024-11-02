import React from 'react'
import styles from './AchievementCard2.module.css'
import { Link } from 'react-router-dom';


export default function ({achievement, viewMore}) {

  const getTitle = ()=>{
    if(!viewMore){
      return(
        <div className={styles["div-actitle"]}>
          {achievement.title}
        </div>
      )
    }else{
      return(
        <div className={styles["div-actitle"]}>
          <button className={styles['bt-viewmore']}>
            {achievement.title}
          </button>
        </div>
      )
    }
  }

  return (
    <Link to={'/achievements'}>
      <div className={styles['container-accard2']}>
        <div className={styles['div-acimg']}>
          <img src={`/achievements/${achievement.thumbnail}`} alt="" className={styles["img-acimg"]} />
        </div>
        {getTitle()}
      </div>
    </Link>

  )
}


{/* <div className={styles['container-accard2']}>
<div className={styles['div-acimg']}>
  <img src={`/achievements/${achievement.thumbnail}`} alt="" className={styles["img-acimg"]} />
</div>
<div className={styles["div-actitle"]}>
  {achievement.title}
</div>
</div> */}