import React from 'react'
import HeroSection from '../components/HeroSection'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Project from '../components/Project'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Skills/>
        <Project/>
        <Footer/>
        
    </div>
  )
}

export default Home