import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ to, icon, label }) => {
  return (
    <Link to={to} className="flex flex-col items-center">
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </Link>
  )
}

export default NavItem