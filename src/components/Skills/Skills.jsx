import React, { useContext } from 'react';
import './Skills.css';
import { LanguageContext } from '../Header/Header';

const skillsData = [
  {
    name: 'HTML5',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.56L11.977 24l-8.564-2.44L1.5 0zm7.031 9.75l-.232-2.718 10.06.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.17 5.4 1.51 5.37-1.5.71-7.92H8.531z"/>
      </svg>
    )
  },
  {
    name: 'CSS3',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.734 511.99998">
        <g transform="translate(-193.633,-276.3622)">
          <g transform="translate(119,276.3622)">
            <polygon points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 " fill="#264de4"></polygon>
            <polygon points="376.03,447.246 404.27,130.894 256,130.894 256,480.523 " fill="#2965f1"></polygon>
            <polygon points="150.31,268.217 154.38,313.627 256,313.627 256,268.217 " fill="#ebebeb"></polygon>
            <polygon points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 " fill="#ebebeb"></polygon>
            <polygon points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 " fill="#ebebeb"></polygon>
            <polygon points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 " fill="#ffffff"></polygon>
          </g>
        </g>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
        <rect width="630" height="630" fill="#f7df1e"></rect>
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"></path>
      </svg>
    )
  },
  {
    name: 'React',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"></circle>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    )
  },
  {
    name: 'Git',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#F05032" d="M23.5 11.1L12.9.5c-.7-.7-1.8-.7-2.5 0l-2.2 2.2 2.8 2.8c.3-.1.6-.2 1-.2 1.4 0 2.5 1.1 2.5 2.5 0 .4-.1.7-.2 1l2.6 2.6c.3-.1.6-.2 1-.2 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-.2 0-.4.1-.6l-2.5-2.5v6.6c.2.1.4.2.6.2 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-.2 0-.4.1-.6V9.1c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3l-2.8-2.8L.5 11.1c-.7.7-.7 1.8 0 2.5l10.6 10.6c.7.7 1.8.7 2.5 0l10.6-10.6c.6-.7.6-1.8-.1-2.5z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="#181717" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 6.1 18.3 6 18.3 6c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/>
      </svg>
    )
  }
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  
  // Add translations for skill names that need them
  const getTranslatedSkillName = (name) => {
    const translations = {
      'HTML5': 'HTML5',
      'CSS3': 'CSS3',
      'JavaScript': 'JavaScript',
      'React': 'React'
    };
    
    return language === 'es' && translations[name] ? translations[name] : name;
  };
  
  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">
        {language === 'es' ? 'Mis Habilidades' : 'My Skills'}
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-logo">
              {skill.logo}
            </div>
            <h3>{getTranslatedSkillName(skill.name)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
