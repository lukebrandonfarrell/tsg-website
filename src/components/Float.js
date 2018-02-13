import React from 'react';

const Float = ({ children, dir }) => {
  return (
    <div style={{ float: dir }}>
      { children }
    </div>
  );
};

export default Float;
