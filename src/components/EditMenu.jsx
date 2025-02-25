import React, { useState, useEffect } from "react";
import { ref, set, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

const EditMenu = () => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    const menuRef = ref(database, "/");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMenuData(data);
      }
    });
  }, []);

  const handleSave = () => {
    const menuRef = ref(database, "/");
    set(menuRef, menuData);
    alert("Menu updated successfully!");
  };

  return (
    <div>
      <h1>Edit Menu</h1>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default EditMenu;
