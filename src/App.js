import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Nav from './components/Nav';
import WelcomePopup from './components/WelcomePopup';

function App() {
  return (
    <div className="font-sans">
      <WelcomePopup/>
      <Nav/>
      <div class='py-10'></div>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
