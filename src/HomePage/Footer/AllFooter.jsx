import React from "react";
import facebookIcon from './Facebook.svg';
import instagramIcon from './Instagram.svg';
import twitterIcon from './Twitter.svg';
import linkedinIcon from './Linkedin.svg';


export default function AllFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Website Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-4xl tracking-[5px] font-title font-semibold">NAVIZIT</h2>
          <div className="w-[180px] h-[1.2px]  mx-auto mt-2  bg-white " >
            </div>        
        </div>

        {/* Links Section */}
        <div className="ml-14">
          <ul className="flex space-x-6">
            <li><a href="" className="hover:text-gray-400">Home</a></li>
            <li><a href="" className="hover:text-gray-400">About</a></li>
            <li><a href="" className="hover:text-gray-400">Services</a></li>
            <li><a href="" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 mr-16">
          <a href="https://www.facebook.com/profile.php?id=61566412442595" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://x.com/navizitguide" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Twitter" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com/navizitguide/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Instagram" className="h-6 w-6 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/navizit-guide-22129a330/" target="_blank" rel="noopener noreferrer" className="h-6 w-6">
            <img src={linkedinIcon} alt="LinkedIn" className="m-0 p-0  hover:opacity-75" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} NAVIZIT . All rights reserved.</p>
      </div>
    </footer>
  );
}
