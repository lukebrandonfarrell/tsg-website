import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';

const NavigationButton = ({ link, label }) => {
  const { buttonStyle, activeStyle, pStyle } = styles;

  return (
    <NavLink to={ link } activeStyle={ activeStyle } style={ buttonStyle }>
      <p style={ pStyle }>{ label }</p>
    </NavLink>
  );
};

var styles = {
  buttonStyle: {
    width: '120px',
    display: 'inline-block',
    color: '#474747',
    textAlign: 'center',
    textDecoration: 'none',
  },
  activeStyle: {
    color: 'white',
    backgroundColor: '#30A4DC',
  },
  pStyle: {
    margin: '0px',
    height: '56px',
    fontSize: '22px',
    fontWeight: '300',
    paddingTop: '14px',
    boxSizing: 'border-box',

    ':hover': {
      background: '#DFDFDF',
    }
  },
};

export default Radium(NavigationButton);
