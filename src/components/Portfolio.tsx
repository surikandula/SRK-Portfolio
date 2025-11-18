import { useState, useEffect } from 'react';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Navigation from './Navigation';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Portfolio;
