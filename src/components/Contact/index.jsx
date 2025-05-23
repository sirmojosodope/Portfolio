import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import PortalAura from '../About/PortalAura'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const formRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm(
    'pinkisland', // ✅ Your Service ID
    'template_yrud5pr', // ✅ Your Template ID
    formRef.current,
    '7ieVoWvTEkJ3o-Nk4' // ✅ Your Public Key
  )
  .then(
    () => {
      alert('Transmission sent.')
      window.location.reload()
    },
    (error) => {
      console.log('FAILED...', error)
      alert('Transmission failed. Try again.')
    }
  )
}


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
              idx={15}
            />
          </h1>

          <div className="ritual">
            <p className="mono">:: send signal //</p>
            <p className="mono">— silent channel open</p>
            <p className="mono highlight">standby for emergence...</p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="off"
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>

        <div className="info-zone">
          <div className="location-blip">
            <span>New York</span>
            <span className="contact-email">stoverlee29@gmail.com</span>
          </div>
          <PortalAura variant="contact" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
