import React from 'react'
import './Tester.css'
import CommitteeCard from '../../Components/CommitteeCard/CommitteeCard'
import {committeeData} from '../Committee/committeeData.js'

export default function Tester() {
  return (
    <section className='websection section-tester'>
      <h2 className='sectiontitle'>Committee 2024/25</h2>
      <div className="grid-committeecards">
        {committeeData.map(member => <CommitteeCard pic={member.pfp} designation={member.designation} name={member.name}/>)}
      </div>

    </section>
  )
}
