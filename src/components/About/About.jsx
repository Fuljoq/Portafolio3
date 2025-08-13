import React, { useState, useContext } from 'react';
import './About.css';
import '../../styles/sections.css';
import { LanguageContext } from '../Header/Header';
// Importar imagen de perfil
import profilePic from '../../../imgs/WhatsApp Image 2025-02-16 at 14.30.10 (1).jpeg';

const About = ({ language = 'es' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="about" className="section about">
      <h2 className="section-title">{language === 'es' ? 'Sobre Mí' : 'About Me'}</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt={language === 'es' ? 'Foto de perfil' : 'Profile picture'} className="profile-picture" />
        </div>
        <div className="about-text">
          <p>
            {language === 'es' 
              ? '¡Hola! Soy un apasionado desarrollador Front-End con un objetivo claro: transformar ideas en experiencias digitales, interactivas y accesibles para todos.'
              : 'Hello! I\'m a passionate Front-End developer with a clear goal: to transform ideas into digital experiences that are interactive and accessible to everyone.'}
          </p>
          <p>
            {language === 'es'
              ? 'Me especializo en la creación de interfaces web modernas y responsivas, utilizando las últimas tecnologías para construir soluciones eficientes y visualmente atractivas. Siempre estoy en busca de nuevos desafíos que me permitan crecer y perfeccionar mis habilidades.'
              : 'I specialize in creating modern and responsive web interfaces, using the latest technologies to build efficient and visually appealing solutions. I am always looking for new challenges that allow me to grow and improve my skills.'}
          </p>
          <div className="contact-info">
            <p>
              {language === 'es'
                ? 'Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme a mi correo electrónico!'
                : 'If you have a project in mind or just want to connect, feel free to contact me by email!'}
            </p>
            
            <a 
              href="/cv-joaquin-orlandau-rosso.pdf" 
              className="download-cv-button"
              download={`CV-Joaquin-Orlandau-Rosso-${language === 'es' ? 'Desarrollador' : 'Developer'}-Frontend.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="download-icon">📥</span> {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;