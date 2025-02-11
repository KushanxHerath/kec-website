import React, { useEffect, useState } from 'react';
import AchievementCard1 from '../../Components/AchievementCard1/AchievementCard1';
import styles from './Achievements.module.css';
import axios from 'axios';

export default function Achievements() {
  const [achievements, setAchievements] = useState([]); // ✅ Initialize as an empty array

  useEffect(() => {
    axios.get('http://localhost:5000/api/achievements?limit=10&sort=desc')
      .then(res => {
        setAchievements(res.data)
      })
      .catch(err => console.log(err.message)); // ✅ Corrected error logging
  }, []); // ✅ Runs only once when component mounts

  return (
    <section className='websection'>
      <div className={styles['grid-achievements']}>
        {achievements.length > 0 ? (
          achievements.map(achievement => (
            <AchievementCard1 achievement={achievement} key={achievement.route_id}/>
          ))
        ) : (
          <p>Loading achievements...</p>
        )}
      </div>
    </section>
  );
}
