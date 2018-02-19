import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
const Float = ({ children, dir }) => {
  return (
    <div style={{ float: dir }}>
      { children }
    </div>
  );
};

export default Float;
