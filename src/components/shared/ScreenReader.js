import React from 'react';

const ScreenReader = ({text}) => {
	return <span style={styles}>{text}</span>;
};

const styles = {
	position: 'absolute',
	height: '1px',
	width: '1px',
	border: 0,
	padding: 0,
	margin: '-1px',
	overflow: 'hidden',
	clip: 'rect(0 0 0 0)'
};

export default ScreenReader;