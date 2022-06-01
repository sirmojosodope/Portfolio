import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    Timeout()
}, [])

const Timeout = () => {
  return setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
}

return (
    <>
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>
         <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={15}
          />
        </h1>
          <p>
          This page displays projects that I have worked on / contributed to!
          I will be constantly updating this page with more projects as a fullstack developer !
          
          </p>
          <p align="LEFT">
           
          </p>
         {/* <img src="./Assets/images/Document (1).gif" alt="">
          <a href="https://sirmojosodope.github.io/Morning-meme-page/" target="_blank">Dashboard Daily</a>
       <img src="./Assets/images/Dashboard Daily.gif" alt="">
       <a href="https://lend-database.herokuapp.com/login" target="_blank">LEND-database</a>
       <img src="./Assets/images/LEND.gif" alt=""> */}
      </div>
    </div>
    <Loader type ="pacman" />
  </>
  )
}


export default Portfolio