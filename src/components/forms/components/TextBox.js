import React from 'react';
import { Field } from 'redux-form';

const TextBox = ({ label, id, input, placeholder, type }) => {
  const { containerStyle, fieldStyle, labelStyle } = styles;
  
  return (
    <div style={ containerStyle }>
      <label style={ labelStyle }>{ label }</label>
      <Field
        name={ id }
        component="input"
        type={ type || 'text'}
        placeholder={ placeholder }
        style={ fieldStyle }
      >
        { input }
      </Field>
    </div>
  );
};

var styles = {
  containerStyle: {
  },
  labelStyle: {
    fontSize: '18px',
  },
  fieldStyle: {
    display: 'block',
    width: '100%',
    height: '40px',
    marginTop: '5px',
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
