import React from 'react';

const HugeTitle = ({ children }) => {
  return (
    <h1 style={ styles.hugeTitleStyle }>{ children }</h1>
  );
};

const styles = {
  hugeTitleStyle: {
    margin:'0px',
    fontFamily: 'hammersmith-one, sans-serif',
    fontSize: '46px',
    fontWeight: 'normal',
    color: 'white',
  }
};

export default HugeTitle;
