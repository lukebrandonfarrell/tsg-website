import React from 'react';
import '../App.css';

const Header = ({ logo, tagline }) => {
  const { headerStyle, logoStyle, taglineStyle } = styles;

  return (
    <div style={ headerStyle }>
      <div className='wrapper'>
        <img src={ logo } style={ logoStyle } />
        <h1 style={ taglineStyle }>{ tagline }</h1>
      </div>
    </div>
  );
};

var styles = {
  headerStyle: {
    overflow: 'hidden',
    margin: '0px auto',
    position: 'relative',
    backgroundColor: 'white',
  },
  logoStyle: {
    height: '60px',
    float: 'left',
    clear: 'both',
    margin: '20px 0',
  },
  taglineStyle: {
    float: 'right',
    color: '#26a3de',
    fontSize: '32px',
    fontWeight: '100',
    margin: '20px 0',
    paddingTop: '20px'
  },
};

export default Header;
