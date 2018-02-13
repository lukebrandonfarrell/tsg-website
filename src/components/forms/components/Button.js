import React from 'react';
import { Field } from 'redux-form';

const Button = ({ children, type, disabled }) => {
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
    marginTop: '15px',
    cursor: 'pointer',
  },
};

export { Button };
