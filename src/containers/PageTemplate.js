import React from 'react';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import AdminBar from '../components/AdminBar';

import logo from '../logo.jpg';

class PageTemplate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    const { children } = this.props;

    return (
      <div>
        <AdminBar />
        <Header logo={logo} tagline='we take the lead' />
        <MainNavigation />
        { children }
        <Footer />
      </div>
    );
  }
}

export default PageTemplate;
