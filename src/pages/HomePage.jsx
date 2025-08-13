import React, { useContext } from 'react';
import { LanguageContext } from '../components/Header/Header';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  
  // You can add language-specific content here if needed
  
  return (
    <>
      <Projects language={language} />
      <Skills language={language} />
      <About language={language} />
    </>
  );
};

export default HomePage;
