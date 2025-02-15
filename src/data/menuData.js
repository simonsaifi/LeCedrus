export const menuData = {
  Sandwish: [
        { name: "Chawarma", price: "9.00€", description: "Emincé de boeuf mariné, persil oignons, tomates, cornichons, sauce tahini" },
        { name: "Chich Taouk", price: "8.00€", description: "Blanc de poulet mariné, salade, cornichons, crème d'ail" },
        { name: "Kafta", price: "8.00€", description: "Boeuf haché, persil oignons, tomates, cornichons, sauce tahini" },
        { name: "Soujouk", price: "8.00€", description: "Tranches de saucisses de boeuf épicés, salade, tomates, cornichons, houmous" },
        { name: "Falafel", price: "7.00€", description: "Boulettes de pois chiches, crudités, cornichons, sauce tahini" },
        { name: "Batata", price: "7.00€", description: "frites, salade, cornichons, crème d'ail, ketchup" },
        { name: "Formule", price: "+5.00€", description: "Sandwich + frite + boisson 33cl" }, 
  ],
  mezzes: [
    {
      type: "Mezzés Froids",
      items: [
        { name: "Houmous", price: "9.00€", description: "Purée de pois chiches, crème de sésame." },
        { name: "Houmous au Basilic", price: "9.00€", description: "Houmous avec du basilic frais." },
        { name: "Moutabal", price: "9.00€", description: "Caviar d’aubergines, crème de sésame." },
        { name: "Taboulé", price: "9.00€", description: "Persil, tomates, oignons, et boulgour." },
        { name: "Fatouch", price: "9.00€", description: "Salade de crudités, pain frit." },
        { name: "Feuilles de vignes", price: "9.00€", description: "Farcie au riz, 8 pièces." },
        { name: "Labné w Toum", price: "9.00€", description: "Fromage blanc à l’ail et menthe séchée." },
        { name: "Moussaka", price: "9.00€", description: "Aubergines, pois chiches, tomates." },
      ],
    },
    {
      type: "Mezzés Chauds",
      items: [
        { name: "Batata", price: "8.00€", description: "Pommes de terre rissolées, coriandre." },
        { name: "Boulgour", price: "9.00€", description: "Riz, lentilles et oignons." },
        { name: "Falafel", price: "9.00€", description: "Boulettes de pois chiches, 5 pièces.", image: "/images/menu/Falafel.jpg" },
        { name: "Halloumi", price: "12.00€", description: "Fromage de brebis, grillé." },
        { name: "Kébbé", price: "12.00€", description: "Boulettes de boeuf farci, 4 pièces." },
        { name: "Rakaat", price: "10.00€", description: "Feuilletés roulés au fromage, 4 pièces." },
      ],
    },
  ],
  formules: [
    {
      name: "Végétarienne",
      description: "Fattouch, houmous, moutabal, moussaka, feuilles de vignes, boulgour, falafel, fatayer, rakakat",
      price: "23.00€ par personne",
    },
    {
      name: "Découverte",
      description: "Fattouch, houmous, moutabal, moussaka, feuilles de vignes, soujouk, fatayer, rakakat, sambousik viande, kébbé",
      price: "25.00€ par personne",
    },
    {
      name: "Gourmande",
      description: "Fattouch, houmous, moutabal, moussaka, feuilles de vignes, soujouk, arayes, ailes de poulets, brochettes (taouk, kafta), accompagnement (boulgour ou moudardara)",
      price: "28.00€ par personne",
    },
  ],
  desserts: [
    { name: "Baklawa", price: "5.00€", description: "Feuilleté à base de noix de cajou et pistaches." },
    { name: "Namoura", price: "5.00€", description: "Gâteau de semoule imbibé au sirop." },
    { name: "Mouhalabieh", price: "5.00€", description: "Flan au lait et à la fleur d’oranger." },
    { name: "Glace Artisanale", price: "7.00€", description: "2 boules de glace artisanale." },
  ],
};
