import React from 'react';

import logo from '../logo.png';

const Footer = (props) => {
  const { footerStyle, imgStyle, textStyle, containerStyle } = styles;

  return (
    <div id="footer" style={ footerStyle }>
      <div className='wrapper'>
        <div style={ containerStyle }>
          <img src={ logo } alt="logo" style={ imgStyle } />
          <p style={ textStyle }>Copyright © 2016 TSG</p>
        </div>
      </div>
    </div>
  );
};

var styles = {
  footerStyle: {
    width: '100%',
    height: '55px',
    backgroundColor: '#474747',
  },
  imgStyle: {
    width: '80px',
    verticalAlign: 'middle',
    display: 'inline-block',
    margin: '0px 15px',
  },
  textStyle: {
    color: 'white',
    verticalAlign: 'middle',
    fontWeight: 'lighter',
    display: 'inline-block',
  },
  containerStyle: {
    textAlign: 'left',
  }
};

export default Footer;
