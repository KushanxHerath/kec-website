import React from 'react'
import styles from './Committee.module.css'
import { committeeData } from './committeeData.js'
import CommitteeCard from '../../Components/CommitteeCard/CommitteeCard.jsx'

export default function Committee() {
  return (
    <section className={`${styles['']} websection`}>
      <h2 className={`${styles['']} sectiontitle`}>
        Committee 2024/25
      </h2>
      <div className={`${styles['grid-committeecards']}`}>
      {committeeData.map((member,index) => <CommitteeCard key={index} pic={member.pfp} designation={member.designation} name={member.name}/>)}
      </div>
    </section>
  )
}
