import React from 'react'
import Home from './component/home';
import About from './component/about';
import Navbar from './component/Navbar';
import NF from './component/404';
import Contact from './component/contact';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
    <div className="body">
      <h1></h1>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/abt' element={<About />}/>
      <Route path='/cnt' element={<Contact />}/>
      <Route path='*' element={<NF />}/>
    </Routes>
    </div>
    <h1>This is Footer</h1>
    </>
  )
}

export default App