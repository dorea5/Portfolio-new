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
          className="text-3xl font-bold mb-8 text-blue-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          À propos de moi
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="mb-8 md:mb-0 md:mr-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/assets/profile.png"
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
            <p className="mb-4">
              Développeuse front-end passionnée par la création dinterfaces utilisateur intuitives et performantes.
              Spécialisée dans le développement dapplications web modernes avec React, JavaScript et CSS.
              Animée l&#39;apprentissage,
              j&#39;aime projets stimulants qui me permettent de m&#39;épanouir dans mon travail.
              Mon portfolio témoigne de mon engagement à fournir un travail qualitatif, centré sur l&#39;utilisateur.
              N&#39;hésitez pas à explorer mes projets et à me contacter pour discuter de vos idées !
            </p>
            <p className="mb-4">📍Paris | ️ Passionnée de nature & randonnée 🏔️</p>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
            >
              CV
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;