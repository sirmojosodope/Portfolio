import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../Assets/images/logo-s.png'
import LogoSubtitle from '../../Assets/images/logo-sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img src={LogoSubtitle} alt="lamont" />
    </Link>
  </div>
)

export default Sidebar
