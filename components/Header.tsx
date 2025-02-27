"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isHoveredEN, setIsHoveredEN] = useState(false);
  const [isHoveredFR, setIsHoveredFR] = useState(false);

  return (
    <header className="bg-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-electric-blue to-turquoise text-transparent bg-clip-text">
          Doréa Mokhtari
        </h1>
        <nav className="flex items-center space-x-6">
          <a href="#about" className="text-electric-blue hover:text-turquoise transition duration-300">
            À propos
          </a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-3 py-1 rounded-full ${isHoveredEN ? 'bg-turquoise text-white' : 'bg-white text-electric-blue'
              } transition duration-300`}
            onMouseEnter={() => setIsHoveredEN(true)}
            onMouseLeave={() => setIsHoveredEN(false)}
          >
            EN
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-3 py-1 rounded-full ${isHoveredFR ? 'bg-turquoise text-white' : 'bg-white text-electric-blue'
              } transition duration-300`}
            onMouseEnter={() => setIsHoveredFR(true)}
            onMouseLeave={() => setIsHoveredFR(false)}
          >
            FR
          </motion.button>
        </nav>
      </div>
    </header>
  );
};

export default Header;