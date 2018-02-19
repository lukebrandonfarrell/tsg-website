import React from 'react';

import { connect } from 'react-redux';

import Float from './Float';
import NavigationButton from './NavigationButton';
import DropdownButton from './DropdownButton';

import '../App.css';

class MainNavigation extends React.Component {
  renderRightNavigation(){
    if(this.props.loggedIn){
      return (
        <DropdownButton link="/details" label="Profile" />
      );
    }

    return (
      <NavigationButton link="/login" label="Login" />
    );
  }

  render() {
    const { navStyle } = styles;

    return (
      <div style={ navStyle }>
        <div className='wrapper'>
          <NavigationButton link="/home" label="Home" />
          <NavigationButton link="/clients" label="Clients" />
          <NavigationButton link="/contact" label="Contact" />

          <Float dir='right'>
            { this.renderRightNavigation() }
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

const mapStateToProps = (state) => {
  const { loggedIn } = state.jwt;

  return { loggedIn };
};

export default connect(mapStateToProps, null)(MainNavigation);
