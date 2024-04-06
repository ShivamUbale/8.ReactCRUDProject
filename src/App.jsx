import React, { useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Routing from './utils/Routing';
import { Link, useLocation } from 'react-router-dom';
import { BackgroundColorContext } from './utils/Context';

function App() {

  const { pathname, search } = useLocation();

  const [ isDarkMode, setIsDarkMode ] = useContext(BackgroundColorContext);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);

  };


  return (
    <div className={`w-screen h-screen flex ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`} >
      {
        (pathname !== '/' || search.length > 0) && (
          <Link to='/' className='absolute left-64 top-5 px-1 py-1  border rounded border-red-300 text-red-300'>Home</Link>
        )
      }
      <div className='w-12 h-7 absolute top-4 right-20 bg-zinc-200 rounded-full p-1'>
        <button onClick={() => toggleDarkMode()} className={`h-5 w-5 rounded-full bg-zinc-500 absolute ${isDarkMode ? 'left-6' : ''}`}></button>
      </div>
      <Routing />
    </div>
  );
}

export default App;