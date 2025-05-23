import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import PortalAura from './PortalAura'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't']}
              idx={15}
            />
          </h1>

          <div className="ritual">
            <p className="mono">:: pinkisland sequence initialized</p>
            <p className="mono">— code becomes relic</p>
            <p className="mono">— syntax forms memory</p>
            <p className="mono highlight">standby for recursion</p>
          </div>
        </div>

        <PortalAura variant="about" />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
