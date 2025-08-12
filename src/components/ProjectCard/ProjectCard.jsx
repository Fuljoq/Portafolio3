import React, { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, codeLink, demoLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${isVisible ? 'is-visible' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {demoLink && (
        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            Ver Demo
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;