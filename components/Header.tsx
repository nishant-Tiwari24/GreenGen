'use client'
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <header className="flex justify-between items-center bg-black p-4">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="w-16" />
      </div>
      <nav className="font-roboto">
        <ul className="flex space-x-4 josefin">
          <li><a href="/" className="hover:text-green-500">Home</a></li>
          <li><a href="/about" className="hover:text-green-500">About</a></li>
          <li><a href="/books" className="hover:text-green-500">Books</a></li>
          <li className="relative">
            <a href="/research" onClick={toggleSubmenu} className="hover:text-green-500">Research</a>
            <ul className={`submenu absolute bg-black p-2 space-y-1 ${showSubmenu ? 'block' : 'hidden'}`}>
              <li><a href="/project" className="hover:text-green-500">Projects</a></li>
              <li><a href="/internship" className="hover:text-green-500">Internship</a></li>
            </ul>
          </li>
          <li><a href="/training" className="hover:text-green-500">Training</a></li>
          <li><a href="/services" className="hover:text-green-500">Services</a></li>
          <li><a href="/gallery" className="hover:text-green-500">Gallery</a></li>
          <li><a href="/contact" className="hover:text-green-500">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
