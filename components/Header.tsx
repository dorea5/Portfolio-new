"use client";
import React from 'react';

const Header = () => {
  return (
    <header className="py-4 shadow-md sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#3f7efa] to-[#f8a2f3] text-transparent bg-clip-text">
          Doréa Mokhtari
        </h1>
        <nav className="flex items-center space-x-6">
          <a href="#about" className="hover:text-[#f8a2f3] transition duration-300">
            À propos
          </a>

          <a href="#contact" className="hover:text-[#f8a2f3] transition duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;