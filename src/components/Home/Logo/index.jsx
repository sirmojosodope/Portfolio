import React, { useRef } from 'react'
import './index.scss'

const Logo = () => {
  const audioRef = useRef(null)

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="logo-container" onMouseEnter={handleMouseEnter}>
      <div className="orbital-glow" />
      <audio ref={audioRef} src="/sounds/pulse.wav" preload="auto" />
    </div>
  )
}

export default Logo
