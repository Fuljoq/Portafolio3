  import React, { useState, useEffect } from 'react';
  import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
  import './Header.css';

  const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
      e.preventDefault();
      
      // Si estamos en la página de contacto, navegamos primero a la página de inicio
      if (location.pathname !== '/') {
        navigate('/');
        // Usamos un pequeño retraso para asegurar que la página de inicio se cargue antes de hacer scroll
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 100);
      } else {
        // Si ya estamos en la página de inicio, solo hacemos scroll
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    return (
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Link to="/" className="logo">Mi Portafolio</Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Proyectos</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Habilidades</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>Sobre Mí</a></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contacto</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default Header;