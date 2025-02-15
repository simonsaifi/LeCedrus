import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../LanguageContext'; // Import language hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social icons
import translations from '../data/translations'; // Import translations

const Contact = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <section id="contact" className="py-5 bg-danger text-white">
      <Container fluid="xxl">
        <Row className="g-5 align-items-center">
          {/* Visit Us Section */}
          <Col md={12} lg={4}>
            <h3 className="mb-4">{translations[language].visitUs}</h3>
            <address className="mb-0">
              <p className="mb-2">2271 Cor Georges Pompidou, 83500</p>
              <p className="mb-2">La Seyne-sur-Mer, France</p>
              <p className="mb-2">+33 04 89 29 34 72</p>
            </address>

            {/* Follow Us Section */}
            <h3 className="mt-5">{language === 'en' ? 'Follow Us' : 'Suivez-nous'}</h3>
            <div className="d-flex gap-3 mt-3">
              <a href="https://www.facebook.com/lecedrus/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/lecedrus/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g1080054-d7136163-Reviews-Le_Cedrus-La_Seyne_sur_Mer_Var_Provence_Alpes_Cote_d_Azur.html?m=69573" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/images/socials/tripadvisor.png" alt="TripAdvisor" width="32" height="32" />
              </a>
            </div>
          </Col>

          {/* Map Section */}
          <Col md={12} lg={8}>
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
              <iframe
                title={language === 'en' ? 'Restaurant Location' : 'Localisation du Restaurant'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.1201939284156!2d5.891230276857711!3d43.08096837113516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90335f9dd6d69%3A0xcd4ae34a58abebee!2sLe%20Cedrus%20(Les%20sablettes)!5e0!3m2!1sen!2sfr!4v1738412759821!5m2!1sen!2sfr"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
