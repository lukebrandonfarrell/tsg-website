import React from 'react';

const HugeTitle = ({ children }) => {
  
  let fontSize = '52px';
  if (matchMedia('only screen and (max-width: 880px)').matches){ fontSize = '40px'; }
  if (matchMedia('only screen and (max-width: 550px)').matches){ fontSize = '34px'; }
  
  return (
    <h1 style={{ ...styles.hugeTitleStyle, ...{ fontSize } }}>{ children }</h1>
  );
};

const styles = {
  hugeTitleStyle: {
    margin:'0px',
    fontFamily: 'hammersmith-one, sans-serif',
    fontSize: '52px',
    fontWeight: 'normal',
    color: 'white',
  }
};

export default HugeTitle;
