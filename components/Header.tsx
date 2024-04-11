'use client'
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <header className="flex justify-between items-center z-50 pr-5">
      <a href='/' className="logo">
        <img src="./logo.png" alt="Logo" className="w-[250px] h-28 object-cover" />
      </a>
      <nav className="font-roboto bg-green-400">
        <ul className="flex josefin text-xl">
          <li><a href="/home" className="hover:text-green-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Home</a></li>
          <li><a href="/about" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">About</a></li>
          <li><a href="/books" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Books</a></li>
          <li className="relative">
            <a href="" onClick={toggleSubmenu} className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Research</a>
            <ul className={`submenu absolute p-2 space-y-1 bg-green-400 text-zinc-200 border-transparent px-4 py-2 ${showSubmenu ? 'block' : 'hidden'}`}>
              <li><a href="/project" className="hover:text-zinc-500 bg-green-400 text-black border-transparent py-2 border-[1px] px-2">Projects</a></li>
              <li><a href="/internship" className="hover:text-zinc-500 bg-green-400 text-black border-transparent py-2 border-[1px] px-2">Internship</a></li>
            </ul>
          </li>
          <li><a href="/training" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Training</a></li>
          <li><a href="/services" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Services</a></li>
          <li><a href="/gallery" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Gallery</a></li>
          <li><a href="/contact" className="hover:text-zinc-500 bg-green-400 text-black border-white py-2 border-[1px] px-2">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
