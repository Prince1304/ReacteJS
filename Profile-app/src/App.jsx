import React from 'react'
import Home from './component/home';
import About from './component/about';
import Navbar from './component/Navbar';
import NF from './component/404';
import Contact from './component/contact';
import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';


export const MyContext = createContext();
const App = () => {
  const data = 'Prince';
  return (
    <MyContext.Provider value={data}>
      <Navbar />
      <div className="body">        
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App