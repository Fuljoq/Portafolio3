import React, { useContext } from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../../styles/sections.css';
import { LanguageContext } from '../Header/Header';

const getProjectData = (language) => [
  {
    title: 'MariaAstroCoach',
    description: language === 'es' ? 'Astróloga' : 'Astrologer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Fuljoq/MariaAstroCoach.git',
    demoLink: 'https://mariaastrocoach.netlify.app'
  },
  {
    title: 'MasajesMarselarosso',
    description: language === 'es' ? 'Terapeuta Holística' : 'Holistic Therapist',
    technologies: ['HTML', 'SCSS'],
    codeLink: 'https://github.com/Fuljoq/MasajesMarselarosso.git',
    demoLink: 'https://www.marsselarosso.com'
  },
  {
    title: 'LandaGtf',
    description: language === 'es' ? 'Profesor de Taekwondo' : 'Taekwondo Instructor',
    technologies: ['React', 'CSS', 'JavaScript', 'Vite'],
    codeLink: 'https://github.com/Fuljoq/LandaGtf.git',
    demoLink: 'https://landa-gtf.vercel.app'
  }
];

const Projects = ({ language = 'es' }) => {
  const projectData = getProjectData(language);
  
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">
        {language === 'es' ? 'Mis Proyectos' : 'My Projects'}
      </h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            viewCodeText={language === 'es' ? 'Ver Código' : 'View Code'}
            viewDemoText={language === 'es' ? 'Ver Demo' : 'View Demo'}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;