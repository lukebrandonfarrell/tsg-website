import React from 'react';

import ScreenReader from './shared/ScreenReader';
import NavigationList from './NavigationList';
import { matchMediaDown } from '../helpers/MediaQueries';

const Navigation = (props) => {
	let menuActiveStyles = {};

	if (props.menuOpened) {
		menuActiveStyles = {
			transform: 'translate3d(0, 0, 0)'
		}
	};

	let responsiveStyles = {};

	if (matchMediaDown(880)) {
		responsiveStyles.navigation = {
			width: '60%',
			padding: '90px 3%'
		}
		responsiveStyles.button = {
			right: '40px'
		}
	};

	return (
		<div style={{...styles.navigation, ...menuActiveStyles, ...responsiveStyles.navigation}}>
			<button style={{...styles.button, ...responsiveStyles.button}} onClick={props.onNavClose}>
				<span style={styles.btnLine}></span>
				<span style={{...styles.btnLine, ...styles.btnLineRotate}}></span>
				<ScreenReader text="Close Navigation" />
			</button>
			<NavigationList toggleMenu={props.menuOpened} />
		</div>
	);
};

const styles = {
	navigation: {
		position: 'fixed',
		top: '0px',
		right: '0px',
		height: '100%',
		width: '510px',
		padding: '10% 3%',
    boxSizing: 'border-box',
		backgroundColor: '#1fa4df',
		transform: 'translate3d(101%, 0, 0)',
		transition: 'transform 0.3s ease-in-out',
		zIndex: '99'
	},
	button: {
		position: 'absolute',
		height: '30px',
		width: '30px',
		top: '19px',
		right: '75px',
		backgroundColor: 'transparent',
		padding: '0',
		border: '0',
		cursor: 'pointer',
	},
	btnLine: {
		position: 'absolute',
		width: '27px',
		height: '3px',
		right: '2px',
		top: '13px',
		backgroundColor: '#000',
		transform: 'rotate(-45deg)'
	},
	btnLineRotate: {
		transform: 'rotate(45deg)'
	}
};

export default Navigation;