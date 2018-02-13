import React from 'react';
import { Field } from 'redux-form';

const TextBox = ({ label, id, placeholder, type }) => {
  return (
    <div style={ styles.containerStyle }>
      <label>{ label }</label>
      <Field
        name={ id }
        component="input"
        type={ type || 'text'}
        placeholder={ placeholder }
        style={ styles.fieldStyle }
      />
    </div>
  );
};

var styles = {
  containerStyle: {
    marginTop: '15px',
  },
  fieldStyle: {
    display: 'block',
    width: '100%',
    height: '36px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#555555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccd0d2',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
};

export { TextBox };
