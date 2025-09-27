import React from 'react'
import deeplearning from '../assets/deeplearning.webp'
import crowdfunding from '../assets/crowdfunding.webp'
import synapse from '../assets/synapse.webp'
import '../css/Project.css'
import github from '../assets/github-mark.svg'

const Project = () => {
   
  return (
   <div id='project' className='projectcontainer'>
    <h1 className='project-main-heading'>Projects</h1>
    <div className='project-grid'>
        <div className='project-item'>
        <img src={crowdfunding} alt="" />
            <div className='project-description'>
                <div className='p-1'>
                    <h1>Crowdfunding</h1>
                    <a href="https://github.com/Akshayvemula?tab=repositories"><img src={github} alt="" /></a>

                </div>
            
            <p> Developed a decentralized platform for transparent and tamper-proof fundraising.Improved funding security with encrypted authentication and smart contract automation.Learned BlockChain integration, real-time tracking, and secure web architecture.</p>
            <span>#Reactjs #NodeJs #Mongodb </span>
            
            </div>
        </div>
        <div className='project-item'>
        <img src={deeplearning} alt="" />
            <div className='project-description'>
                 <div className='p-1'>
                    <h1>MonkeyPox</h1>
                    <a href="https://github.com/Akshayvemula/monkeypox-diagnosis"><img src={github} alt="" /></a>

                </div>
            
            <p> Developed a System that detects the monkeypox disease using deeplearning techniques like CNN.</p>
          <span>#MachineLeanring #Python #Deeplearning</span>
           
            </div>
        </div>
        <div className='project-item'>
        <img src={synapse} alt=""/>
            <div className='project-description'>
             <div className='p-1'>
                    <h1>Synapse.AI</h1>
                    <a href="https://github.com/Akshayvemula?tab=repositories"><img src={github} alt="" /></a>

                </div>
            <p> Built and deployed a SAAS platform with secure authentication,subscription system .Implemented AI-powered tools(Article&Blog Title Generator,Background & Object Removers,Resume Analyzer)
by integrating Google Gemini and OpenAI APIs.</p>
             <span>#Reactjs #NodeJs #Postgresql </span>
           
            </div>
        </div>

    </div>

   </div>
  )
}

export default Project