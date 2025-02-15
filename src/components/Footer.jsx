import React from 'react';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../LanguageContext';
import translations from '../data/translations'; // Import translations

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4">
      <Container fluid="xxl">
        <div className="text-center">
          <p className="mb-0 small">
            &copy; {currentYear} Le Cedrus - {translations[language].footerText}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
