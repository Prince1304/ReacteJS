import React, { createContext } from 'react'
import { Link } from 'react-router-dom'

const Context = createContext()

const Navbar = () => {
  return (
    <Context.Provider value='Prince'>
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/abt'>About</Link>
        <Link to='/cnt'>Contact</Link>
    </div>
    </Context.Provider>
  )
}

export default Navbar