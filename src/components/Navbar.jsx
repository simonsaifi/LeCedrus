import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../data/translations'; // Import translations

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/Logo.png"
            alt="Le Cedrus Restaurant Logo"
            className="navbar-logo"
            style={{ height: "55px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {location.pathname === '/menu' ? (
            <Nav className="ms-auto">
              <button
                className="btn btn-custom-red text-white px-4 rounded-pill"
                onClick={() => navigate('/')}
              >
                {translations[language].backToHome}
              </button>
              <button
                className="btn btn-outline-dark ms-3"
                onClick={toggleLanguage}
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-hover">
                {translations[language].home}
              </Nav.Link>
              <Nav.Link href="/menu" className="nav-link-hover">
                {translations[language].menu}
              </Nav.Link>
              <Nav.Link href="#gallery" className="nav-link-hover">
                {translations[language].gallery}
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-hover">
                {translations[language].contact}
              </Nav.Link>
              <button className="btn btn-outline-dark ms-3" onClick={toggleLanguage}>
                {language === 'en' ? 'FR' : 'EN'}
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
