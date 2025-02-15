import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../LanguageContext'; // Import language hook
import { galleryImages } from '../data/galleryImages';

const Gallery = () => {
  const { language } = useLanguage(); // Get current language

  return (
    <section id="gallery" className="py-5">
      <Container fluid="xxl">
        <h2 className="text-center mb-5 text-danger">
          {language === 'en' ? 'Food Gallery' : 'Galerie Culinaire'}
        </h2>
        <Row className="g-4">
          {galleryImages.map((img, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="gallery-item position-relative overflow-hidden rounded-3">
                <img
                  src={img}
                  alt={language === 'en' ? `Dish ${index + 1}` : `Plat ${index + 1}`}
                  className="img-fluid hover-zoom"
                  loading="lazy"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
