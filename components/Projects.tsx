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
      image: '/assets/omf.webp',
      previewLink: '#',
      sourceCodeLink: '#',
      technologies: ['HTML', 'CSS', 'Sass', 'Animations CSS'],
    },
    {
      title: 'KASA',
      description:
        'Kasa est un site qui permet une navigation intuituve et simplifiée : une bonne vision des logements proposés, des bonnes pratiques de développement respectées et une architecture classique. Ce projet est un vrai défi à la fois de style et de fonctionnalité.',
      image: '/assets/kasa.webp',
      previewLink: '#',
      sourceCodeLink: 'https://github.com/dorea5/KASA',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Trouver son hébergement avec Booki',
      description: "Booki permet au client de réserver un logement en fonction de la localisation. Il est particulièrement bien pensé au niveau du resposive et de l'inteface générale. C'est un site moderne et sobre qui permet une prise en main facile.",
      image: '/assets/booki.webp',
      previewLink: '#',
      sourceCodeLink: '#',
      technologies: ['HTML', 'SASS'],
    },
    {
      title: 'La galerie de Sophie Bluel',
      description: "Composé de plusieurs rubriques et option de filtrage, ce portfolio au dynamisme intelligent permet d'apprécier toutes les oeuvres présentées par l'architecte. Des options de suppression & ajout de photos permettent de personnaliser la galerie davantage.",
      image: '/assets/sophie.webp',
      previewLink: '#',
      sourceCodeLink: '#',
      technologies: ['JavaScript', 'Node.JS ', 'API Swagger'],
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
        <h2 className="text-4xl font-bold mb-8 text-center text-[#f8a2f3]">
          PROJETS
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
                    <div className="overflow-hidden mb-4 h-64"> {/* Hauteur fixe pour l'image */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={600}
                        layout="responsive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-teal-500 h-12 overflow-hidden"> {/* Hauteur fixe pour le titre */}
                      {project.title}
                    </h3>
                    <p className="mb-4 h-24 overflow-hidden"> {/* Hauteur fixe pour la description */}
                      {project.description}
                    </p>
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
            aria-label="Projet précédent"
          >
            <FaChevronLeft size={24} color="black" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
            aria-label="Projet suivant"
          >
            <FaChevronRight size={24} color="black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;