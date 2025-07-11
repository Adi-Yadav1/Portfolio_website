import React from 'react'
import './Hero.css'
import Aditya from "../../assets/Aditya.jpg";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";



const Hero = () => {
  useGSAP(()=>{
    gsap.from(".img" , {
      x: 1000,
      opacity:0,
      duration:3,
      ease: 'back.inOut',
      
    })

    gsap.from(".hero h1" , {
      x: 1000,
      opacity:0,
      duration:1,
      delay:3,
      
    })
  })
  return (
    <div className='hero'>
        <img className='img' src={Aditya} alt="" />
        <h1><span>I'm Aditya Yadav,</span> Cyber Security expert in India.</h1>
        <p>I am Aditya yadav and i am a student of the bml munkal university </p>
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