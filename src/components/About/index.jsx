import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faReact,
  faNodeJs,
  faJs,
  faSass,
  faTypeScript,
  faNpm,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'

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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Logical and results-driven full stack developer dedicated to building and
            optimizing user-focused websites and applications. Judicious and creative
            when crafting effective websites, apps, and platforms to propel competitive
            advantage and revenue growth. Technically proficient and analytical problem
            solver with a calm and focused demeanor.
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be: creative thinker,
            family-oriented, dedicated, game enthusiast, and tech-obsessed.
          </p>
        </div>

        <div className="stage-cube-cont">
  <div className="cubespinner">
    <div className="face1">
      <FontAwesomeIcon icon={faGithub} color="#171515" />
    </div>
    <div className="face2">
      <FontAwesomeIcon icon={faReact} color="#61DAFB" />
    </div>
    <div className="face3">
      <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
    </div>
    <div className="face4">
      <FontAwesomeIcon icon={faJs} color="#F7DF1E" />
    </div>
    <div className="face5">
      <FontAwesomeIcon icon={faNpm} color="#CD6799" />
    </div>
    <div className="face6">
      <FontAwesomeIcon icon={faDocker} />
    </div>
  </div>
</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
