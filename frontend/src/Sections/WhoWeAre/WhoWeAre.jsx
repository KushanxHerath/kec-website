import React , {useState} from 'react'
import './WhoWeAre.css'
import { wwaData } from './wwaData'
import LogoFlip from '../../Animations/LogoFlip/LogoFlip'

export default function WhoWeAre(){
  const [wwaState, setWwaState] = useState(wwaData[0])

  const getActiveClass = ( buttonState)=>{
    if(buttonState === wwaState.state){
      return 'bt-wwa-active'
    }else{
      return ''
    }
  }

  const changeWwaState = (e)=>{
    e.target.id === 'bt-wwa-au' ? setWwaState(wwaData[0]) : ''
    e.target.id === 'bt-wwa-ov' ? setWwaState(wwaData[1]) : ''
    e.target.id === 'bt-wwa-om' ? setWwaState(wwaData[2]) : ''
  }
  return (
    <section className='websection'>
      <div className="grid-wwa">

        <h2 className="sectiontitle h2-wwa-title"> Who We Are</h2>

        <div className="div-wwa-content">
          <div className="div-buttonlist">
            <button id='bt-wwa-au' className={`bt-wwa ${getActiveClass('wwa-au')}`} onClick={changeWwaState}>About Us</button>
            <button id='bt-wwa-ov' className={`bt-wwa ${getActiveClass('wwa-ov')}`} onClick={changeWwaState}>Our Vision</button>
            <button id='bt-wwa-om' className={`bt-wwa ${getActiveClass('wwa-om')}`} onClick={changeWwaState}>Our Mission</button>
          </div>
          <div className="div-description">
            <p>{wwaState.description}</p>
          </div>
        </div>

        <div className="div-anim">
          <LogoFlip/>
        </div>
      </div>

      
    </section>
  )
}
