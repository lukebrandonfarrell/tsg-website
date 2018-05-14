import React from 'react';
import { Link } from 'react-router-dom';

const Lightbox = ({ id, title }) => {
  const { containerStyle, textStyle, linkStyle } = styles;

  return (
    <Link to={`/lightbox/${id}`} style={linkStyle}>
      <div style={containerStyle}>
        <h4 style={textStyle}>{ title }</h4>
      </div>
    </Link>
  );
};

var styles = {
  linkStyle: {
    textDecoration: 'none',
  },
  containerStyle: {
    width: '100%',
    height: '60px',
    textAlign: 'center',
    backgroundColor: 'rgba(24, 69, 96, 0.7)',
  },
  textStyle: {
    margin: '0px',
    textDecoration: 'none',
    background: 'none',
    height: '60px',
    fontSize: '22px',
    color: '#fff',
    lineHeight: '60px',
    overflow: 'hidden',
  },
};

export default Lightbox;
