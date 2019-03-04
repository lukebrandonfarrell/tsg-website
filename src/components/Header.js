import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import '../App.css';

const Header = ({ logo, tagline }) => {
  const { headerStyle, logoStyle, taglineStyle } = styles;

  let logoOnly = false;
  if (matchMedia('only screen and (max-width: 880px)').matches){ logoOnly = true; }

  return (
    <div style={ headerStyle }>
      <Wrapper>
        <Link exact="true" to='/'>
          <img src={ logo } style={ logoStyle } alt='Logo' />
        </Link>
        { logoOnly || <h1 style={ taglineStyle }>{ tagline }</h1> }
      </Wrapper>
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
