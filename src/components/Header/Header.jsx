  import React, { useState, useEffect, useContext, createContext } from 'react';
  import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
  import './Header.css';

  // Create a context for language
  export const LanguageContext = createContext({
    language: 'es',
    toggleLanguage: () => {}
  });
  
  // Create a provider component
  export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    
    const toggleLanguage = () => {
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    };
    
    return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };

  const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, toggleLanguage } = useContext(LanguageContext);

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
          <Link to="/" className="logo">{language === 'es' ? 'Mi Portafolio' : 'My Portfolio'}</Link>
          <nav>
            <ul className="nav-links">
              <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
              <li><a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>{language === 'es' ? 'Habilidades' : 'Skills'}</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>{language === 'es' ? 'Sobre Mí' : 'About'}</a></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>{language === 'es' ? 'Contacto' : 'Contact'}</NavLink></li>
              <li>
                <button onClick={toggleLanguage} className="language-toggle" aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}>
                  <img 
                    src={language === 'es' 
                      ? 'https://flagcdn.com/w20/us.png' 
                      : 'https://flagcdn.com/w20/ar.png'} 
                    alt={language === 'es' ? 'English' : 'Español'}
                    width="20"
                    height="15"
                    className="flag-icon"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

  export default Header;