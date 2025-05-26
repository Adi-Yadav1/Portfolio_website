import React from 'react'
import './Hero.css'
import Aditya from "../../assets/Aditya.jpg";



const Hero = () => {
  return (
    <div className='hero'>
        <img src={Aditya} alt="" />
        <h1><span>I'm Aditya Yadav,</span> Cyber Security expert in India.</h1>
        <p>I am Aditya yadav nad i am a student of the bml munkal university </p>
        <div className="heroaction">
            <div className="heroconnect">
                Connect With Me
            </div>
            <div className="heroresume">My resume</div>
        </div>
    </div>
  )
}

export default Hero