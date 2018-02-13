import React from 'react';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import logo from '../logo.jpg';

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header logo={logo} tagline='we take the lead' />
      <MainNavigation />
      { children }
      <Footer />
    </div>
  );
};

export default PageTemplate;
