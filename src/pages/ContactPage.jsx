import React, { useState, useContext } from 'react';
import './ContactPage.css';
import { LanguageContext } from '../components/Header/Header';

const ContactPage = () => {
  const { language } = useContext(LanguageContext);
  
  // Translations
  const translations = {
    title: language === 'es' ? 'Ponte en Contacto' : 'Get in Touch',
    subtitle: language === 'es' 
      ? 'Estoy disponible para colaboraciones, proyectos o simplemente para charlar. ¡No dudes en escribirme!' 
      : 'I\'m available for collaborations, projects, or just a chat. Feel free to reach out!',
    emailsTitle: language === 'es' ? 'Correos Electrónicos' : 'Email',
    emailLabel: language === 'es' ? 'Correo:' : 'Email:',
    whatsappTitle: language === 'es' ? 'WhatsApp' : 'WhatsApp',
    whatsappText: language === 'es' 
      ? 'Háblame directamente por WhatsApp' 
      : 'Chat with me directly on WhatsApp',
    whatsappButton: language === 'es' ? 'Enviar mensaje' : 'Send message',
    copyButton: language === 'es' ? 'Copiado' : 'Copied',
    copyButtonLabel: language === 'es' 
      ? 'Copiar correo al portapapeles' 
      : 'Copy email to clipboard',
    whatsappButtonLabel: language === 'es' 
      ? 'Abrir WhatsApp' 
      : 'Open WhatsApp'
  };
  const userGmail = 'joaquin.orlandau.rosso@gmail.com';
  const userWhatsApp = '+541134372005';
  const [copiedGmail, setCopiedGmail] = useState(false);

  const copyToClipboard = (email, setCopiedFunction) => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiedFunction(true);
        setTimeout(() => setCopiedFunction(false), 2000);
      })
      .catch(err => {
        console.error('Error al copiar el correo: ', err);
      });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-page-header">
        <h1>{translations.title}</h1>
        <p>{translations.subtitle}</p>
      </div>
      <div className="contact-options-container">
        <div className="contact-card-link email-card">
          <div className="contact-card-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <h3>{translations.emailsTitle}</h3>
          <div className="emails-inline">
            <div className="email-item">
              <span className="email-label">{translations.emailLabel}</span>
              <div className="email-content">
                <span className="contact-info-text gmail">{userGmail}</span>
                <button 
                  onClick={() => copyToClipboard(userGmail, setCopiedGmail)} 
                  className={`copy-button ${copiedGmail ? 'copied' : ''}`}
                  aria-label={translations.copyButtonLabel}
                  title={translations.copyButtonLabel}
                >
                  {copiedGmail ? `✓ ${translations.copyButton}` : '📋'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href={`https://wa.me/${userWhatsApp.replace(/\D/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-card-link whatsapp-card"
          aria-label={translations.whatsappButtonLabel}
        >
          <div className="contact-card-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.905 6.161l-1.117 4.096 4.195-1.1z"></path>
            </svg>
          </div>
          <h3>{translations.whatsappTitle}</h3>
          <p>{translations.whatsappText}</p>
          <span className="contact-card-button">
            {language === 'es' ? 'Chatear Ahora' : 'Chat Now'}
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
