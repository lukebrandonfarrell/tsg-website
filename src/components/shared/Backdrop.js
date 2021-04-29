import React from 'react';

const Backdrop = (props) => {
	return (
		<div style={styles} onClick={props.onBackdropClick}></div>
	);
}

const styles = {
	position: 'fixed',
	top: '0px',
	left: '0px',
	width: '100%',
	height: '100%',
	zIndex: '9'
};

export default Backdrop;