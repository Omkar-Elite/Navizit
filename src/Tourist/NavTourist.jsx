import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavTOurist.css'; // Import custom CSS for hover effects

export default function NavTourist() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Hamburger Icon */}
        <div className="flex items-center">
          <button 
            className="text-white focus:outline-none hamburger-icon"  // Apply the custom class here
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars text-2xl"></i> {/* Adjust icon size here */}
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`hidden md:flex md:items-center md:justify-between`}>
          <div className="flex flex-row space-x-6">
            <Link to="/touristplaces"  className="hover-animate font-serif flex items-center ">
              <span className="material-symbols-outlined">travel_explore</span>
              <p className='ml-2'>Tourist Places</p>
            </Link>
            
            <Link to="/hospitals" className="hover-animate font-serif flex items-center">
              <span className="material-symbols-outlined">home_health</span>
              <p className='ml-2'>Hospitals</p>
            </Link>
            <Link to="/hotels" className="hover-animate font-serif flex items-center">
              <span className="material-symbols-outlined">hotel</span>
              <p className='ml-2'>Hotels</p>
            </Link>
            <Link to="/restaurants" className="hover-animate font-serif flex items-center">
              <span className="material-symbols-outlined">restaurant</span>
              <p className='ml-2 mr-4'>Restaurants</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-80 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="w-[340px] h-full bg-gray-900 text-white p-6 pr-0 pl-0 flex flex-col space-y-6">
          
          <div className='flex justify-between text-3xl pr-4 font-semibold font-title'>
            <h4 className='ml-3'> NAVIZIT</h4>
            <button
              className="text-white text-2xl self-end close-icon"  // Apply the close-icon class here
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i> {/* Close icon */}
            </button>
          </div>
         
          <div className='h-[900px] mt-2 pt-[20px]'>
            <Link to="/events" className="hover-glow font-serif flex items-center">
              <span className="material-symbols-outlined">celebration</span>
              <p className='ml-2'>Events</p>
            </Link>
            <Link to="/localnews" className="hover-glow font-serif flex items-center">
              <span className="material-symbols-outlined">newspaper</span>
              <p className='ml-2'>Local News</p>
            </Link>
            <Link to="/emergency" className="hover-glow font-serif flex items-center">
              <span className="material-symbols-outlined">e911_emergency</span>
              <p className='ml-2'>Emergency Services</p>
            </Link>
            <Link to="/aroundyou" className="hover-glow font-serif flex items-center">
              <span class="material-symbols-outlined">assistant_navigation</span>             
              <p className='ml-2'>Around You</p>
            </Link>
            <Link to="/home" className="hover-glow font-serif flex items-center">
              <span className="material-symbols-outlined">home</span>
              <p className='ml-2'>Home</p>
            </Link>
          </div> 
        </div>
      </div>
    </nav>
  );
}
