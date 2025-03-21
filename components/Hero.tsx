"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '800'] });

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="flex items-center justify-center h-screen bg-white">
      <div className="container mx-auto text-center">
        <div className="flex  centered">
          <Image
            src="/assets/computer.webp"
            alt="ordinateur"
            width={250} // Taille réduite
            height={150} // Taille réduite
            className="rounded-lg mb-6 img-computer"
            style={{ objectFit: 'cover', height: 'fit-content' }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${montserrat.className} bold sm:normal-font font-bold mb-6 leading-tight text-black`}
          >
            👋
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 30, -30, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
            </motion.span><br />
            Bienvenue sur mon <span className="text-[#f8a2f3]"> portfolio !</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${montserrat.className} text-2xl mb-8 text-black`}
        >
          Je suis : ✨Développeuse Front-End ⚛️Spécialisée React
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`px-8 py-4 rounded-full text-lg font-bold transition duration-300 ${isHovered
            ? 'bg-[#9370DB] text-white'
            : 'bg-gradient-to-r from-[#9370DB] to-[#E0B0FF] text-white'
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