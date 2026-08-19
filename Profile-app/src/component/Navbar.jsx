import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../App';

const Navbar = () => {
  const contextData = useContext(MyContext);
  return (
    <div id='nav'>
      <h2>{contextData}</h2>
        <Link to='/'>Home</Link>
        <Link to='/abt'>About</Link>
        <Link to='/cnt'>Contact</Link>
    </div>
  )
}

export default Navbar