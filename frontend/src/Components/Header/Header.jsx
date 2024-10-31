import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['div-webtitle']}>
        <div className={styles['div-logos-title']}>
          <img src="KCK_Crest.ico" alt="kck-crest" className={styles["img-kck-crest" , "img-logo"]} />
          <img src="KEC_Logo.ico" alt="kec-logo" className={styles["img-logo" , "img-kec-logo"]} />
        </div>
        <div className={styles["div-h3-title"]}>
          <h4>KINGSWOOD</h4>
          <h4 className='red'>ENTREPRENEURS' CLUB</h4>
        </div>
      </div>

      <nav className={styles["navigation"]}>
        <NavLink className={styles['a-nav']} to='/'>Home</NavLink>
        <NavLink className={styles['a-nav']} to='/events'>Events</NavLink>
        <NavLink className={styles['a-nav']} to='/achievements'>Achievements</NavLink>
        <NavLink className={styles['a-nav']} to='/committee'>Committee</NavLink>
        <NavLink className={styles['a-nav']} to='/about-us'>About Us</NavLink>
        <button className={styles['bt-nav-contactus']}>
          <NavLink className={styles['a-bt-nav-contactus']} to='/contact-us'>Contact Us</NavLink>
        </button>
      </nav>

      <div className={styles["div-burger"]}>
        <IoMenu className={styles['icon-burger']}/>
      </div>
    </header>
  )
}
