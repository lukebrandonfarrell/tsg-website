import React from 'react';
import Radium from 'radium';


const CustomButton = ({ children, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={styles.buttonStyle}>
      { children }
    </button>
  );
};

var styles = {
  buttonStyle: {
    width: '100%',
    height: '40px',
    color: '#F58F4D',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    border: '1px #F58F4D solid',
    cursor: 'pointer',

    ':hover': {
      color: 'white',
      backgroundColor: '#F58F4D',
    }
  },
};

const Button = Radium(CustomButton);

export { Button };
