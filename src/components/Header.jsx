import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import translations from '../data/translations'; // Import translations
import headerBg from '../assets/images/Background3.jpg';

const Header = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <header 
      id="hero" 
      className="vh-100 d-flex align-items-center position-relative"
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerBg}) center/cover fixed`
      }}
    >
      <Container fluid="xxl" className="position-relative z-2">
        <Row className="align-items-center g-5">
          <Col lg={6} className="text-center text-lg-start order-lg-1 order-2">
            <h1 className="header-title text-white">
              {translations[language].authenticFlavors}
            </h1>
            <p className="lead description-text text-white">
              {translations[language].experienceTradition}
            </p>
            <button 
              className="btn-menu btn-custom-red btn-lg px-5 shadow-sm"
              onClick={() => navigate('/menu')}
            >
              
              {translations[language].exploreMenu}
            </button>
          </Col> 
          <Col lg={6} className="order-lg-2 order-1">
            <div className="ratio ratio-1x1">
              <img 
                src="/images/Background2.jpeg"
                alt="Background Cedrus"
                className="img-fluid rounded-3 shadow-lg"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
