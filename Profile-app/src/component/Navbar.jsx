import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/abt'>About</Link>
        <Link to='/cnt'>Contact</Link>
    </div>
  )
}

export default Navbar