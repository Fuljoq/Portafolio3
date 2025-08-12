import React, { useState } from 'react';
import './About.css';
import '../../styles/sections.css';
// Importar imagen de perfil
import profilePic from '../../../imgs/WhatsApp Image 2025-02-16 at 14.30.10 (1).jpeg';

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="about" className="section about">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Foto de perfil" className="profile-picture" />
        </div>
        <div className="about-text">
          <p>
            ¡Hola! Soy un apasionado desarrollador Front-End con un objetivo claro: transformar ideas en experiencias digitales, interactivas y accesibles para todos.
          </p>
          <p>
            Me especializo en la creación de interfaces web modernas y responsivas, utilizando las últimas tecnologías para construir soluciones eficientes y visualmente atractivas. Siempre estoy en busca de nuevos desafíos que me permitan crecer y perfeccionar mis habilidades.
          </p>
          <div className="contact-info">
            <p>Si tienes un proyecto en mente o simplemente quieres conectar, ¡no dudes en contactarme a mi correo electrónico!</p>
            
            <a 
              href="/cv-joaquin-orlandau-rosso.pdf" 
              className="download-cv-button"
              download="CV-Joaquin-Orlandau-Rosso-Desarrollador-Frontend.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="download-icon">📥</span> Descargar CV
                      </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;