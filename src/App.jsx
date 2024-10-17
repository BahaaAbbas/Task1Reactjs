import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Outlet, Link } from 'react-router-dom';


function App() {

  const navLink = [
    {
      name: 'Home', To: '/'
    },

    {
      name: 'Search', To: '/search'
    },



  ];

  return (
    <div className="app">

      <header className="p-4 bg-gray-800 text-white ">
        <div className='flex justify-between items-center px-5 '>



          <div className=''>

            <Link to="/" className="font-bold text-lg  hover:text-yellow-300 transition-all">Bahaa <br></br> Abbas</Link>


          </div>

          <div className='flex justify-between gap-6   '>
            {
              navLink.map((key, index) => (
                <Link
                  key={index}
                  to={key.To}
                  className="font-bold text-lg hover:text-yellow-300 transition-all"
                >
                  {key.name}
                </Link>
              ))
            }

          </div>
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>REACT - Task1 - Bahaa Abbas @2024</p>
      </footer>

    </div>
  );
}

export default App
