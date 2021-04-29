import React from 'react';

const Wrap = (props) => {
	let maxWidth = '1240px';

	return (
		<div style={{ ...styles.wrapperStyle, ...{ maxWidth }, ...props.style }}>
			{ props.children }
		</div>
	);
}

var styles = {
  wrapperStyle: {
		margin: '0 auto',
		padding: '0 30px',
		boxSizing: 'border-box'
  },
};

export default Wrap;
