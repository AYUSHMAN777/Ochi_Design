import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     // direction: 'horizontal'
  //     // Add any additional configuration options here
  //   });

  //   // Cleanup function
  //   return () => {
  //     locomotiveScroll.destroy();
  //   };
  // }, []);

  return (
    <div data-scroll-container  className=' w-full min-h-screen bg-zinc-900 text-white overflow-hidden'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />
    </div>
  )
}

export default App