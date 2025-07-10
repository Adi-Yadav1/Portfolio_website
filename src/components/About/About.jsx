import React from 'react'
import './About.css'
import Aditya from '../../assets/Aditya.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="abouttitle">
            <h1>About Me</h1>
            <img src="" alt="" />
        </div>
        <div className="aboutsection">
            <div className="aboutleft">
                <img src={Aditya} alt="" />
            </div>
            <div className="aboutright">
                <div className="aboutpara">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi modi, aperiam reiciendis eius minima maxime at ut unde officiis facere. Soluta recusandae eius omnis.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro autem architecto reprehenderit aliquam perspiciatis sint harum dicta at obcaecati! Rem esse eveniet itaque dolorem?</p>
                </div>
                <div className="skills">
                    <div className="aboutskill">
                        <p>HTML AND CSS</p><hr  style={{width: "50%"}}/>
                    </div>
                    <div className="aboutskill">
                        <p>HTML AND CSS</p><hr  style={{width: "50%"}}/>
                    </div>
                    <div className="aboutskill">
                        <p>HTML AND CSS</p><hr  style={{width: "70%"}}/>
                    </div>
                    <div className="aboutskill">
                        <p>HTML AND CSS</p><hr  style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="aboutachievements">
            <div className="aboutachivement">
                <h1>AI IN FINANACE </h1>
                <p>HACKATHON WINNER</p>
            </div>
            <hr />
             <div className="aboutachivement">
                <h1>AI IN FINANACE </h1>
                <p>HACKATHON WINNER</p>
            </div>
            <hr />
             <div className="aboutachivement">
                <h1>AI IN FINANACE </h1>
                <p>HACKATHON WINNER</p>
            </div>
        </div>
    </div>
  )
}

export default About