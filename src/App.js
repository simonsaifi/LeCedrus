import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider
import Layout from './components/Layout';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import MenuPage from './components/MenuPage';
import AdminPage from './components/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <Layout>
              <Header />
              <Gallery />
              <Contact />
            </Layout>
          } />

          {/* Menu Page */}
          <Route path="/menu" element={
            <Layout>
              <MenuPage />
            </Layout>
          } />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
