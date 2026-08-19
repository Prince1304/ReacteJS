import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Contextdata} from '../App';

const Navbar = () => {
const data = useContext(Contextdata)

  return (
    <div id='nav'>
      <h2>{data}</h2>
      <Prince>Kp</Prince>
        <Link to='/'>Home</Link>
        <Link to='/abt'>About</Link>
        <Link to='/cnt'>Contact</Link>
    </div>
  )
}

export default Navbar