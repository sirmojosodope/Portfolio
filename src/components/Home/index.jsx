import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible(true)
    }, 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className={`text-zone ${textVisible ? 'visible' : ''}`}>
          <h1 className="phase-text">Pinkisland</h1>
          <p className="sub-text">entry confirmed — threshold stable</p>
          <Link to="/contact" className="flat-button">
            OPEN CHANNEL
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
