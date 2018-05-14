import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import MediaQuery from 'react-responsive';

import Float from './Float';
import NavigationButton from './NavigationButton';
import DropdownButton from './DropdownButton';
import Wrapper from '../components/Wrapper';

import '../App.css';

class MainNavigation extends React.Component {
  logout(){ this.props.logout(); }

  renderRightNavigation(){
    if(this.props.token){
      return (
        <div>
          <NavigationButton link="#logout" label="Logout"
            onClick={this.logout.bind(this)} />
        </div>
      );
    }
  }

  render() {
    const { navStyle } = styles;

    return (
      <div>
        <MediaQuery minDeviceWidth={1260}>
          <div style={ navStyle }>
            <Wrapper>
              <NavigationButton link="/" label="Home" />
              <NavigationButton link="/clients" label="Clients" />
              <NavigationButton link="/contact" label="Contact" />

              <Float dir='right'>
                { this.renderRightNavigation() }
              </Float>
            </Wrapper>
          </div>
        </MediaQuery>
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
  const { token } = state.auth;

  return { token };
};

export default connect(mapStateToProps, { logout })(MainNavigation);
