"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Argent Bank : votre application bancaire simplifiée',
      description:
        "Argent Bank est une application web bancaire conçue pour offrir une expérience utilisateur fluide et intuitive. Développée avec React pour une interface dynamique et Redux pour une gestion efficace des données, l'application permet aux utilisateurs de consulter leurs comptes, effectuer des virements et gérer leurs finances en toute simplicité.",
      image: '/assets/argent.webp',
      previewLink: '#',
      sourceCodeLink: 'https://github.com/dorea5/ProjetBankOp',
      technologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    },
    {
      title: "L'interface mobile-first sur mesure!",
      description:
        "Intégrer Oh My Food a été un vrai terrain de jeu! En tirant parti de HTML, CSS et du préprocesseur Sass pour une architecture de styles robuste et maintenable. L'ajout d'animations CSS a permis de dynamiser l'expérience utilisateur et de créer une navigation intuitive.",
      image: '/assets/omff.png',
      previewLink: '#',
      sourceCodeLink: '#',
      technologies: ['HTML', 'CSS', 'Sass', 'Animations CSS'],
    },
    {
      title: 'Personal Projet',
      description:
        'Projet que je vais realiser avec tailwind et nextjs et React. Application de qualité et dynamique.',
      image: '/assets/kas.png',
      previewLink: '#',
      sourceCodeLink: 'https://github.com/dorea5/KASA',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
          ‍ Projets
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6">
                  <div className="bg-white rounded-lg shadow-md p-6 h-[600px] flex flex-col">
                    <div className="overflow-hidden mb-4 flex-grow">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={600}
                        layout="responsive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-teal-500">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4 mt-auto">
                      <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
                      >
                        Aperçu
                      </a>
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:text-teal-600"
                      >
                        Code Source
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
          >
            <FaChevronLeft size={24} color="black" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
          >
            <FaChevronRight size={24} color="black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;