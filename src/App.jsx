import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif] antialiased">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
      </main>
      <Footer />
    </div>
  );
}
