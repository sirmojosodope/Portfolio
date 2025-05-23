import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'a', 'l']}
              idx={15}
            />
          </h1>
          <p className="fragment">no artifacts // yet</p>
          <p className="fragment">this space is held for transmission</p>
          <p className="fragment final">standby for emergence</p>
        </div>

        <div className="stage-void">
          <div className="signal-pulse"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
