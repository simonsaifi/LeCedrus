import React, { createContext, useState, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Language provider to wrap the app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default language is now French

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
