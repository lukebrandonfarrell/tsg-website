import React from 'react';

const ContainerOverlay = ({ children, height, color, bottom }) => {
  const pinToBottomStyle = bottom ? {
    position: 'absolute',
    bottom: '0',
  } : {};

  return (
    <div style={{
      ...styles.overlayStyle,
      ...{
        height: height,
        backgroundColor: color,
      },
      ...pinToBottomStyle
    }}>
      { children }
    </div>
  );
};

const styles = {
  overlayStyle: {
    width: '100%',
    textAlign: 'center',
  }
};

export default ContainerOverlay;
