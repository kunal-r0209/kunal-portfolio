import { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import FluidBackground from './components/FluidBackground';
import NeuralNetworkEasterEgg from './components/NeuralNetworkEasterEgg';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 min-h-screen text-white">
      <SpeedInsights />
      <ScrollProgress />

      <FluidBackground />

      <Navigation />
      <Hero />

      <About />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
      <Chatbot />

      <NeuralNetworkEasterEgg />
    </div>
  );
}

export default App;