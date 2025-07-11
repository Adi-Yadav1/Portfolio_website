import React, { useRef } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  

  useGSAP(() => {

    // const navmenu = document.querySelector(".navmenu")
    document.querySelector(".a").addEventListener("mousemove" , function(){
      gsap.to(".a" , {
        scale:1.2,
      })
    })
    document.querySelector(".a").addEventListener("mouseleave" , function(){
      gsap.to(".a" , {
        scale:1,
      })
    })
    document.querySelector(".c").addEventListener("mousemove" , function(){
      gsap.to(".c" , {
        scale:1.2,
      })
    })
    document.querySelector(".c").addEventListener("mouseleave" , function(){
      gsap.to(".c" , {
        scale:1,
      })
    })
    document.querySelector(".d").addEventListener("mousemove" , function(){
      gsap.to(".d" , {
        scale:1.2,
      })
    })
    document.querySelector(".d").addEventListener("mouseleave" , function(){
      gsap.to(".d" , {
        scale:1,
      })
    })
    document.querySelector(".e").addEventListener("mousemove" , function(){
      gsap.to(".e" , {
        scale:1.2,
      })
    })
    document.querySelector(".e").addEventListener("mouseleave" , function(){
      gsap.to(".e" , {
        scale:1,
      })
    })
    document.querySelector(".b").addEventListener("mousemove" , function(){
      gsap.to(".b" , {
        scale:1.2,
      })
    })
    document.querySelector(".b").addEventListener("mouseleave" , function(){
      gsap.to(".b" , {
        scale:1,
      })
    })
   
    const tl = gsap.timeline();
    tl.from(".Navbar .a", {
      y: -30,
      opacity: 0,
      duration: .3, 
      delay: 1,
      stagger: 0.3,
    })
    tl.from(".Navbar .b", {
      y: -30,
      opacity: 0,
      duration: 0.3, 
      
      stagger: 0.3,
    })
    tl.from(".Navbar .c", {
      y: -30,
      opacity: 0,
      duration: 0.3, 
      
      stagger: 0.3,
    })
    tl.from(".Navbar .d", {
      y: -30,
      opacity: 0,
      duration: 0.3, 
      
      stagger: 0.3,
    })
    tl.from(".Navbar .e", {
      y: -30,
      opacity: 0,
      duration: 0.3, 
      
      stagger: 0.3,
    })
      
      
    gsap.from(".navconnect" ,{
      y: -200,
      opacity:0,
      duration: 2,
      ease: "back.in",
    })
    document.querySelector(".navconnect").addEventListener("mousemove" , ()=>{
      gsap.to(".navconnect" , {
        
        
      })
    })
    document.querySelector(".navconnect").addEventListener("mouseleave" , ()=>{
      gsap.to(".navconnect" , {
        scale: 1,
        
      })
    })
      
      
  });
  return (
    <div className="Navbar">
      <img src="logo" alt="" />
      <ul className="navmenu">
        <li className="a">Home</li>
        <li className="b">About Me</li>
        <li className="c">Services</li>
        <li className="d">Portfolio</li>
        <li className="e">Contact</li>
      </ul>
      <div className="navconnect">Connect with me</div>
    </div>
  );
};

export default Navbar;
