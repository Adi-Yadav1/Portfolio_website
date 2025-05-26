import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <img src="logo" alt="" />
        <ul className="navmenu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="navconnect">Connect with me</div>
    </div>
  )
}

export default Navbar