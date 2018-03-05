import React from 'react';

const ContainerWithBackground = ({ children, imageUrl, height, width, style }) => {
  return (
    <div style={{
      ...styles.backgroundImageStyle,
      ...{
        backgroundImage: `url(${imageUrl})`,
        width: width,
        height: height,
      },
      ...style,
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
