import React from 'react';

const ContainerWithBackground = ({ children, imageUrl, height }) => {
  return (
    <div style={{
      ...styles.backgroundImageStyle,
      ...{
        backgroundImage: `url(${imageUrl})`,
        height: height,
      }
    }}>
      { children }
    </div>
  );
};

const styles = {
  backgroundImageStyle: {
    width: '100%',
    height: '600px',
    position: 'relative',
    backgroundColor: '#9A9A98',
    backgroundSize: 'cover',
  }
};

export default ContainerWithBackground;
