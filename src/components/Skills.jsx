import React from 'react'
import '../css/Skills.css'
import expressjs from '../assets/expressjs.png'
import cpp from '../assets/c++.webp'
import python from '../assets/python.png'
import nodejs from '../assets/nodejs.png'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import postgresql from '../assets/postgresql.png'
import postman from '../assets/postman.png'



const Skills = () => {
  return (
    <div id='skills' className="skills">
        <div className='skillshead'>
      <h1>Skills</h1>
        </div>
        

    <div className="marquee">
      <div className="marquee-content">
        <img src={expressjs} alt="Express.js" />
        <img src={nodejs} alt="Node.js" />
        <img src={python} alt="Python" />
        <img src={react} alt="React" />
        <img src={cpp} alt="C++" />
        <img src={postgresql} alt="" />
        <img src={mongodb} alt="" />
        <img src={tailwind} alt="" />
          <img src={postman} alt="" />
      </div>
    </div>

    </div>

  )
}

export default Skills
