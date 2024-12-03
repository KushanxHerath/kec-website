import React from 'react'
import styles from './CommitteeCard.module.css'

export default function CommitteeCard(props) {
  return (
    <div className={`${styles['container-commicard']}`}>
      <img className={`${styles['img-pfp']}`} src={`/profiles/${props.pic}`} alt="" />
      <p className={`${styles['p-designation']}`}>{props.designation}</p>
      <div className={`${styles['p-name']}`}>{props.name}</div>
    </div>
  )
}
