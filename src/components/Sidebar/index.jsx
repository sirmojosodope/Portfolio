import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../Assets/images/pinkisland.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Pinkisland" />
      </Link>

      <nav>
        <NavLink exact="true" to="/" activeclassname="active">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="about-link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink to="/contact" activeclassname="active" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink to="/portfolio" activeclassname="active" className="portfolio-link">
          <FontAwesomeIcon icon={faCode} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/lamontbarnett/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/sirmojosodope" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCY3Samgqdb2wPuOquCGAxmw" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
