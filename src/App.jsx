import React, { use } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

const App = () => {
  useGSAP(()=>{
    var main = document.querySelector(".main")
    var cursor = document.querySelector(".cursor")
    main.addEventListener("mousemove" , function(dets){
    gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
    
})
    
  })
 
  return (
    <div className='main'>
      <div className="cursor"></div>
      <div>
      <Navbar/>
      <Hero/>
      <About/>
      </div>
      
    </div>
  )
}

export default App