import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../../styles/sections.css';

const projectData = [
  {
    title: 'MariaAstroCoach',
    description: 'Astrologa',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Fuljoq/MariaAstroCoach.git',
    demoLink: 'https://mariaastrocoach.netlify.app'
  },
  {
    title: 'MasajesMarselarosso',
    description: 'Terapeuta Holistica',
    technologies: ['HTML', 'SCSS'],
    codeLink: 'https://github.com/Fuljoq/MasajesMarselarosso.git',
    demoLink: 'https://www.marsselarosso.com'
  },
  {
    title: 'LandaGtf',
    description: 'Profesor de Taekwondo',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PowerShell'],
    codeLink: 'https://github.com/Fuljoq/LandaGtf.git',
    demoLink: 'https://landagtf.netlify.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;