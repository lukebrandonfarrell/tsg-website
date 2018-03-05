import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import AdminBar from '../components/AdminBar';

import logo from '../logo.jpg';

class PageTemplate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  renderAdmin(){
    if(this.props.is_admin){
      return <AdminBar />;
    }
  }

  render(){
    const { children } = this.props;

    return (
      <div>
        { this.renderAdmin() }
        <Header logo={logo} tagline='we take the lead' />
        <MainNavigation />
        { children }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { is_admin } = state.auth;
  console.log(state);
  return { is_admin };
};

export default connect(mapStateToProps, null)(PageTemplate);
