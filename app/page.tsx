import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';
import Avenir from '@/components/Avenir';
import './globals.css';


export default function Home() {
  return (
    <main >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Avenir />
      <Contact />
      <Footer />
    </main>
  );
}