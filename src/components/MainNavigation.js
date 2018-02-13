import React from 'react';

import Float from './Float';
import NavigationButton from './NavigationButton';

import '../App.css';

class MainNavigation extends React.Component {
  render() {
    const { navStyle } = styles;

    return (
      <div style={ navStyle }>
        <div className='wrapper'>
          <NavigationButton link="/home" label="Home" />
          <NavigationButton link="/clients" label="Clients" />
          <NavigationButton link="/contact" label="Contact" />

          <Float dir='right'>
            <NavigationButton link="/login" label="Login" />
          </Float>
        </div>
      </div>
    );
  }
}

var styles = {
  navStyle: {
    width: '100%',
    height: '55px',
    border: '1px solid #CCCCCC',
    backgroundColor: '#E6E6E6',
    background: 'linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%)',
    textAlign: 'left',
  },
};

export default MainNavigation;
