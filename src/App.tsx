import React, { useEffect } from 'react';
import Navbar from "./component/Navbar";
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Siddharth Chandrakar | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;