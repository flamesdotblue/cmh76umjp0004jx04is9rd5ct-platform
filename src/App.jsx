import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
