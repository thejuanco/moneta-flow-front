import React from 'react'
import { Link } from 'react-router'

const NavBarForm = () => {
  return (
    <nav className="bg-gray-100 w-full flex justify-between items-center px-6 py-3 fixed top-0 left-0 z-50">
      <Link to='/' className="font-bold text-2xl">Moneta flow</Link>
    </nav>
  )
}

export default NavBarForm