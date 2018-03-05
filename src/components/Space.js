import React from 'react';
import PropTypes from 'prop-types';

const Space = ({ vertical, horizontal }) => {
  return (
    <div style={{
      marginTop: vertical,
      marginBottom: vertical,
      marginLeft: horizontal,
      marginRight: horizontal
    }} />
  );
};

Space.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string
};

Space.defaultProps = {
  vertical: '0px',
  horizontal: '0px'
};

export default Space;
