import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import WelcomePopup from './components/WelcomePopup';
import Blog from './components/Blog';

function Home() {
  return (
    <>
      <WelcomePopup />
      <Nav />
      <div className="py-16"></div>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="font-sans bg-background min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
