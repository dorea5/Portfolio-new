"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  previewLink: string;
  sourceCodeLink: string;
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Argent Bank : votre application bancaire simplifiée',
      description: "Argent Bank est une application web bancaire conçue pour offrir une expérience utilisateur fluide et intuitive. Développée avec React pour une interface dynamique et Redux pour une gestion efficace des données, l'application permet aux utilisateurs de consulter leurs comptes, effectuer des virements et gérer leurs finances en toute simplicité.",
      image: '/assets/argent.webp',
      previewLink: 'https://github.com/dorea5/ProjetBankOp',
      sourceCodeLink: 'https://github.com/dorea5/ProjetBankOp',
      technologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    },
    {
      title: "L'interface mobile-first sur mesure!",
      description: "Intégrer Oh My Food a été un vrai terrain de jeu! En tirant parti de HTML, CSS et du préprocesseur Sass pour une architecture de styles robuste et maintenable. L'ajout d'animations CSS a permis de dynamiser l'expérience utilisateur et de créer une navigation intuitive.",
      image: '/assets/omf.webp',
      previewLink: 'https://github.com/dorea5/OpenclassroomsProjet4',
      sourceCodeLink: '#',
      technologies: ['HTML', 'CSS', 'Sass', 'Animations CSS'],
    },
    {
      title: 'KASA',
      description: 'Kasa est un site qui permet une navigation intuituve et simplifiée : une bonne vision des logements proposés, des bonnes pratiques de développement respectées et une architecture classique. Ce projet est un vrai défi à la fois de style et de fonctionnalité.',
      image: '/assets/kasa.webp',
      previewLink: 'https://github.com/dorea5/KASA',
      sourceCodeLink: 'https://github.com/dorea5/KASA',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },

    {
      title: 'La galerie de Sophie Bluel',
      description: "Composé de plusieurs rubriques et option de filtrage, ce portfolio au dynamisme intelligent permet d'apprécier toutes les oeuvres présentées par l'architecte. Des options de suppression & ajout de photos permettent de personnaliser la galerie davantage.",
      image: '/assets/sophie.webp',
      previewLink: '#',
      sourceCodeLink: '#',
      technologies: ['JavaScript', 'Node.JS ', 'API Swagger'],
    },
    {
      title: 'Nina Carducci SEO',
      description: "Faire une optimisation globale du site tant sur les performances que sur le SEO, mettre en place le référencement local ,ajouter les metas pour les réseaux sociaux, faire les modifications liées à laccessibilité du site,produire un rapport d'optimisation présentant toutes vos actions et leur impact.",
      image: '/assets/nina.webp',
      previewLink: 'https://github.com/dorea5/Referencement-Nina-Carducci',
      sourceCodeLink: 'https://github.com/votre-nom/nouveau-projet-1',
      technologies: ['Google LightHouse', 'Wave', 'Schema.org'],
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
      title: 'Gestion de projet',
      description: "Entreprendre une veille technologique pour rester informé des dernières tendances et technologies pertinentes pour le projet, Rédiger les spécifications techniques du projet : identification des besoins fonctionnels et la décomposition des fonctionnalités en tâches spécifiques. Utilisation d'outils de gestion de projet, comme Notion, pour organiser le projet et créer un tableau Kanban.",
      image: '/assets/qwenta.png',
      previewLink: '#',
      sourceCodeLink: 'https://github.com/votre-nom/nouveau-projet-2',
      technologies: ['Notion', 'Trello'],
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
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#f8a2f3] to-[#f06292] text-transparent bg-clip-text">
          QUELQUES PROJETS
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
                    <div className="overflow-hidden mb-4 h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1000}
                        height={600}
                        layout="responsive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#9370DB] h-12 overflow-hidden">
                      {project.title}
                    </h3>
                    <p className="mb-4 h-24 overflow-hidden text-justify">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap mb-4">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="bg-[#E0B0FF]/20 text-[#9370DB] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full mb-2"
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
                        className="bg-gradient-to-r from-[#9370DB] to-[#E0B0FF] text-white py-2 px-4 rounded-lg hover:brightness-110 transition duration-300"
                      >
                        Aperçu
                      </a>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-transform duration-300 hover:scale-110 animate-pulse-balloon"
            aria-label="Projet précédent"
          >
            <FaChevronLeft size={30} color="#9370DB" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-transform duration-300 hover:scale-110 animate-pulse-balloon"
            aria-label="Projet suivant"
          >
            <FaChevronRight size={30} color="#9370DB" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;