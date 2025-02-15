import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { menuData } from '../data/menuData';
import { useLanguage } from '../LanguageContext';
import translations from '../data/translations';

const MenuPage = () => {
  const [clickedItem, setClickedItem] = useState(null); // Track clicked card
  const { language } = useLanguage();

  const handleCardClick = (id) => {
    if (clickedItem === id) {
      setClickedItem(null); // Deselect the card if clicked again
    } else {
      setClickedItem(id); // Set the clicked card
    }
  };

  return (
    <main className="py-5 navbar-offset">
      <Container fluid="xxl">
        <h1 className="text-center mb-5 text-danger">{translations[language].ourMenu}</h1>
        <Row>
          {Object.entries(menuData).map(([category, items], index) => (
            <Col xs={12} key={index} className="mb-5">
              <h3 className="text-danger text-center">{translations[language][category] || category}</h3>
              <h4 className="text-danger text-center">{translations[language].takeawayOnly}</h4>
              {Array.isArray(items) && !items[0]?.type ? (
                <Row className="g-4">
                  {items.map((item, idx) => (
                    <Col xs={12} sm={6} md={4} key={idx}>
                      <Card
                        className="h-100 shadow-sm position-relative menu-card"
                        onClick={() => handleCardClick(`${category}-${idx}`)}
                      >
                        <Card.Img
                          variant="top"
                          src={item.image || "/images/default.jpg"}
                          alt={item.name}
                          className="menu-card-img"
                        />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text className="text-danger">{item.price}</Card.Text>
                        </Card.Body>
                        <div
                          className={`menu-card-overlay d-flex align-items-center justify-content-center ${
                            clickedItem === `${category}-${idx}` ? "show-overlay" : ""
                          }`}
                        >
                          <p className="text-white m-0 text-center">
                            {translations[language][item.name] || item.description || translations[language].noDescription}
                          </p>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                items.map((subcategory, subIdx) => (
                  <div key={subIdx}>
                    <h4
                      className={`text-center ${
                        subcategory.type === "Mezzés Chauds" || subcategory.type === "Mezzés Froids"
                          ? "text-danger"
                          : ""
                      }`}
                    >
                      {translations[language][subcategory.type] || subcategory.type}
                    </h4>
                    <Row className="g-4">
                      {subcategory.items.map((item, itemIdx) => (
                        <Col xs={12} sm={6} md={4} key={itemIdx}>
                          <Card
                            className="h-100 shadow-sm position-relative menu-card"
                            onClick={() => handleCardClick(`${subcategory.type}-${itemIdx}`)}
                          >
                            <Card.Img
                              variant="top"
                              src={item.image || "/images/default.jpg"}
                              alt={item.name}
                              className="menu-card-img"
                            />
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text className="text-danger">{item.price}</Card.Text>
                            </Card.Body>
                            <div
                              className={`menu-card-overlay d-flex align-items-center justify-content-center ${
                                clickedItem === `${subcategory.type}-${itemIdx}` ? "show-overlay" : ""
                              }`}
                            >
                              <p className="text-white m-0 text-center">
                                {translations[language][item.name] || item.description || translations[language].noDescription}
                              </p>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default MenuPage;
