import React from 'react';

const ContentBoxes = ({ children }) => {
  return (
    <div style={ styles.contentBoxStyle }>
      { children }
    </div>
  );
};

const styles = {
  contentBoxStyle: {
    width: '100%',
    height: '300px',
    padding: '10px 22px',
    backgroundColor: 'white',
    backgroundSize: 'cover',
    boxSizing: 'border-box',
  }
};

export default ContentBoxes;
