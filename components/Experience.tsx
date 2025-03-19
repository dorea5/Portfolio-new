"use client";
import React from 'react';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/assets/tfa.webp"
            alt="The Forge Agency Logo"
            width={65}
            height={65}
            style={{ marginBottom: '1rem' }}
          />
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#f8a2f3] to-[#f06292] text-transparent bg-clip-text">EXPERIENCE</h2>
        </div>
        <div className="max-w-4xl mx-auto border border-blue-900 rounded-lg p-8 shadow-md">
          <div className="mb-8 text-lg text-gray-700 text-justify">
            J&#39;ai eu l&#39;opportunité de réaliser un stage enrichissant au sein de l&#39;entreprise <span className="text-[#f8a2f3] ">The Forge Agency</span>, située à Pont Cardinet, en novembre 2024.
            Durant ce stage, j&#39;ai activement participé au développement de projets web, ce qui m&#39;a permis de pratiquer ma théorie et d&#39;acquérir de solides notions en&nbsp;:
            <div className="flex justify-start space-x-2 mt-4">
              <span className="bg-[#8892BF] text-white py-1 px-2 rounded-full text-xs font-semibold">PHP</span>
              <span className="bg-[#F97316] text-white py-1 px-2 rounded-full text-xs font-semibold">Laravel</span>
            </div>
            <p className="mt-4">
              Cette expérience m&#39;a permis de renforcer mes compétences techniques, de développer mon esprit d&#39;équipe et de mieux comprendre les enjeux du développement web en entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;