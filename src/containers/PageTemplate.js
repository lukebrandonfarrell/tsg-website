import React from 'react';
import { connect } from 'react-redux';
import { push as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';

import Header from '../components/Header';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import AdminBar from '../components/AdminBar';
import NavigationButton from '../components/NavigationButton';

import logo from '../logo.jpg';
import crossSvg from '../resources/cross.svg';

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
      <div id="outer-container">
        <MediaQuery maxDeviceWidth={950}>
          <Menu right 
            styles={ mobileNavStyles } 
            pageWrapId={ 'page-wrap' } 
            outerContainerId={ 'outer-container' }
            width={ '100%' }
            customCrossIcon={ <img src={ crossSvg } alt="Media" /> }>
            <NavigationButton link="/" label="Home" width="100%" />
            <NavigationButton link="/clients" label="Clients" width="100%" />
            <NavigationButton link="/contact" label="Contact" width="100%" />
          </Menu>
        </MediaQuery>
        
        <main id="page-wrap">
          { this.renderAdmin() }
          <Header logo={logo} tagline='we take the lead' />
          <MainNavigation />
          { children }
          <Footer />
        </main>
      </div>
    );
  }
}

var mobileNavStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '28px',
    width: '28px'
  },
  bmCross: {
    background: 'transparent'
  },
  bmMenu: {
    background: '#EFEFEF',
    padding: '40px 0 0 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#EFEFEF'
  },
  bmItemList: {
    color: '#474747',
    padding: '0.2em',
  },
  bmOverlay: {
    background: '#EFEFEF'
  }
};

const mapStateToProps = (state) => {
  const { is_admin } = state.auth;

  return { is_admin };
};

export default connect(mapStateToProps, null)(PageTemplate);
