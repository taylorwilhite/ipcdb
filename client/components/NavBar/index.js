import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-gray-800 flex justify-end">
      <Link className="mx-2 py-4 px-3 text-teal-100 hover:bg-gray-600" to="/">Home</Link>
      <Link className="mx-2 py-4 px-3 text-teal-100 hover:bg-gray-600" to="/podcasts">Podcasts</Link>
      <Link className="mx-2 py-4 px-3 text-teal-100 hover:bg-gray-600" to="/episodes">Episodes</Link>
    </nav>
  )
}

export default NavBar
