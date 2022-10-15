import React from 'react'
import { Link } from 'react-router-dom'

const MarketHeader = () => {
  return (
    <div className="bg-blue-400 h-32">
    <div className="w-96 flex justify-between">
      <Link to="/home">Home</Link>
      <Link to="/market">Market</Link>
      <Link to="/other-about-me">About Me</Link>
      <Link to="/other-contact">Contact</Link>
    </div>
  </div>
  )
}

export default MarketHeader