import React from 'react';
import './App.css';
import './index.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import About from './sections/About';
import SignatureDishes from './sections/SignatureDishes';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Reservation from './sections/Reservation';
import Location from './sections/Location';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <SignatureDishes />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
