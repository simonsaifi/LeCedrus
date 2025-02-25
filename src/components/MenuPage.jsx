import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";
import { useLanguage } from "../LanguageContext";
import translations from "../data/translations";

const MenuPage = () => {
  const [menuData, setMenuData] = useState({});
  const [clickedItem, setClickedItem] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const menuRef = ref(database, "/");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMenuData(data);
      }
    });
  }, []);

  const handleCardClick = (id) => {
    setClickedItem(clickedItem === id ? null : id);
  };

  // 🔥 Sort categories manually to match the required order
  const categoryOrder = ["Sandwish", "mezzes", "formules", "desserts"];
  const sortedCategories = Object.keys(menuData).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <main className="py-5 navbar-offset">
      <Container fluid="xxl">
        <h1 className="text-center mb-5 text-danger">{translations[language].ourMenu}</h1>
        <Row>
          {sortedCategories.map((category, index) => (
            <Col xs={12} key={index} className="mb-5">
              <h3 className="text-danger text-center">
                {translations[language][category] || category}
              </h3>
              {category === "Sandwish" && <h4 className="text-danger text-center">{translations[language].takeawayOnly}</h4>}

              {/* Handling Regular Categories */}
              {Array.isArray(menuData[category]) && category !== "mezzes" ? (
                <Row className="g-4">
                  {menuData[category].map((item, idx) => (
                    <Col xs={12} sm={6} md={4} key={idx}>
                      <Card className="h-100 shadow-sm position-relative menu-card" onClick={() => handleCardClick(`${category}-${idx}`)}>
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
                        <div className={`menu-card-overlay d-flex align-items-center justify-content-center ${clickedItem === `${category}-${idx}` ? "show-overlay" : ""}`}>
                          <p className="text-white m-0 text-center">
                            {translations[language][item.name] || item.description || translations[language].noDescription}
                          </p>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : category === "mezzes" ? (
                menuData[category].map((subcategory, subIdx) => (
                  <div key={subIdx}>
                    <h4 className="text-danger text-center">{subcategory.type}</h4>
                    <Row className="g-4">
                      {subcategory.items &&
                        Object.entries(subcategory.items).map(([key, item], itemIdx) => (
                          <Col xs={12} sm={6} md={4} key={itemIdx}>
                            <Card className="h-100 shadow-sm position-relative menu-card" onClick={() => handleCardClick(`${subcategory.type}-${itemIdx}`)}>
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
                              <div className={`menu-card-overlay d-flex align-items-center justify-content-center ${clickedItem === `${subcategory.type}-${itemIdx}` ? "show-overlay" : ""}`}>
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
              ) : null}
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default MenuPage;
