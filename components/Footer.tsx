"use client";
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/doreamokhtari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/dorea5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;