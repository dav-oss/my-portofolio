import React from "react"
import profilePic from '../assets/profile.jpg';



export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={profilePic}
                alt='David Muendo'
                class="w-12 group-hover:w-12 group-hover:h-12 h-12 object-left object-cover rounded-full transition-all duration-500 delay-500 transform"
                />
          <div className="text-xl font-bold text-gray-800">David Musau</div>
          

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">

            <a href="#about" className="text-gray-700 hover:text-gray-900">
              Skills
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Certifications
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>

          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    );
}