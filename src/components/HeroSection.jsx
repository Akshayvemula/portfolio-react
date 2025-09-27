import React from 'react'
import '../css/HeroSection.css'
import HeroSectionImage from '../assets/HeroSection.webp'
import { NavLink } from 'react-router-dom'
import { Typewriter } from "react-simple-typewriter";



const HeroSection = () => {
   const handleOpenPDF = () => {
    window.open("/files/akshay_vemula.pdf", "_blank"); 
    
  };
  return (
    <div className='herosectioncontainer'>
      <div className="herototal">
        
      <div className='heromain'>
        
        <h1> Hey, I'm <span className='akshay'>Akshay</span></h1>
        

        <h2 style={{ fontSize: "30px", fontWeight: "bold" , fontFamily:"sans-serif"}}>
      {" "}
      <span style={{ color: "#6b7280" }}>
        <Typewriter
          words={["MERN Stack Developer", "AI Enthusiast", "Full-Stack Developer"]}
          loop={true}             
          cursor
          cursorStyle="|"
          typeSpeed={70}           
          deleteSpeed={50}         
          delaySpeed={1000}        
        />
      </span>
    </h2>



   <div className='herobuttons'>
        <NavLink to="#">
          <button onClick={handleOpenPDF}>Resume</button>
        </NavLink>
       
      </div>



      </div>






      <div className='heroimage'>
        <img src={HeroSectionImage}alt="" />
      </div>

      </div>
     


     
        
    </div>
  )
}

export default HeroSection