import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Sigil from '../Sigil' // <-- add this
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sigil />
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
