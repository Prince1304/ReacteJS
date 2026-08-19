import React, { createContext } from 'react'
import Home from './component/home';
import About from './component/about';
import Navbar from './component/Navbar';
import NF from './component/404';
import Contact from './component/contact';
import { Route, Routes } from 'react-router-dom';

export const Contextdata = createContext();

const App = () => {
  const name = 'Prince';
  return (
    <Contextdata.Provider value={name}>
      <Navbar />
      <div className="body">        
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Contextdata.Provider>
  );
}

export default App