"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="py-20 flex items-center justify-center h-screen">
      <div className="container mx-auto text-center rounded-3xl shadow-2xl p-16 bg-white/80 backdrop-filter backdrop-blur-lg max-w-5xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${inter.className} text-6xl font-bold text-blue-800 mb-6 leading-tight`}
        >
          Bonjour 👋 <br />
          Je m&#39;appelle <span className="text-teal-500">Doréa Mokhtari</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl text-blue-600 mb-10"
        >
          🚀 Développeuse Front-End <br />⚛️ Spécialisée React
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`px-8 py-4 rounded-full text-lg font-bold transition duration-300 ${isHovered
            ? 'bg-turquoise text-white'
            : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          En savoir plus
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;