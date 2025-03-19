"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl  font-bold mb-8 text-center bg-gradient-to-r from-[#f8a2f3] to-[#f06292] text-transparent bg-clip-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          À PROPOS DE MOI
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="mb-8 md:mb-0 md:mr-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/assets/profil.webp"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </motion.div>
          <motion.div
            className="text-left md:max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="mb-4 text-justify">
              Développeuse web, je suis animée par la création d&#39;interfaces web fonctionnelles et intuitives. Diplômée du parcours Intégrateur Web d&#39;OpenClassrooms, j&#39;ai acquis de solides bases en HTML, CSS et JavaScript. Soucieuse d&#39;approfondir mes compétences, j&#39;ai également suivi des formations complémentaires, notamment les cours de JavaScript de Harvard et un stage en Développement Web effectué fin 2024 dans une Start-Up parisienne. Rigoureuse et motivée, on dit de moi que je suis volontaire, impliquée et au service des projets que j&#39;entreprends.
            </p>
            <p className="mb-4">📍Paris  </p>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#f8a2f3] border border-[#f8a2f3] py-2 px-4 rounded-lg hover:bg-gradient-to-r from-[#f8a2f3] to-[#f06292] hover:text-white transition duration-300 flex items-center justify-center"
            >
              Cliquez ici pour télécharger mon CV 🚀
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;