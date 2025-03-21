"use client";
import React from 'react';
import Image from 'next/image';


const Avenir = () => {
  return (
    <section id="avenir" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#f8a2f3] to-[#f06292] text-transparent bg-clip-text">À VENIR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-stretch">
            <div className="relative">
              <Image
                src="/assets/yt.webp"
                alt="Projet Créateur de Contenu"
                width={500}
                height={300}
                className=" height rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Site web pour une créatrice de contenu</h3>
                <p className="text-lg text-gray-700 text-justify">
                  Développement d&#39;un site web personnalisé pour une jeune créatrice de contenu sur les réseaux sociaux avec 8K abonnés. Ce projet vise à créer une plateforme attrayante et fonctionnelle pour mettre en valeur son contenu et interagir avec sa communauté.
                </p>
              </div>
              <div className="flex justify-center space-x-2">
                <span className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs font-semibold">React</span>
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs font-semibold">HTML</span>
                <span className="bg-indigo-200 text-indigo-800 py-1 px-2 rounded-full text-xs font-semibold">CSS</span>
                <span className="bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-semibold">Next.js</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="relative">
              <Image
                src="/assets/shop.webp"
                alt="Projet Créateur de Contenu"
                width={500}
                height={300}
                className=" height rounded-lg"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Création d&#39;une boutique en ligne d&#39;accessoires mode</h3>
                <p className="text-lg text-gray-700 text-justify">
                  Création d&#39;un site web marchand pour un jeune entrepreneur souhaitant promouvoir sa nouvelle marque de casquettes à Levallois-Perret. Ce projet mettra en avant ses créations uniques et offrira une expérience d&#39;achat en ligne fluide.
                </p>
              </div>
              <div className="flex justify-center space-x-2">
                <span className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs font-semibold">React</span>
                <span className="bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs font-semibold">HTML</span>
                <span className="bg-indigo-200 text-indigo-800 py-1 px-2 rounded-full text-xs font-semibold">CSS</span>
                <span className="bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-xs font-semibold">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avenir;