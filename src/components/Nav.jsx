import React from "react";
import profilePic from '../assets/profile.jpg';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-lg shadow-classy z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="David Muendo"
              className="w-12 h-12 object-cover rounded-full border-2 border-accent"
            />
            <span className="font-display text-2xl font-bold text-accent">David Musau</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-accent hover:text-highlight font-semibold transition">About</Link>
            <Link to="/skills" className="text-accent hover:text-highlight font-semibold transition">Skills</Link>
            <Link to="/certifications" className="text-accent hover:text-highlight font-semibold transition">Certifications</Link>
            <Link to="/blog" className="text-accent hover:text-highlight font-semibold transition">Blog</Link>
            <Link to="/contact" className="text-accent hover:text-highlight font-semibold transition">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-accent hover:text-highlight focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}