import React from 'react';

import ScreenReader from './ScreenReader';
import { matchMediaDown } from '../../helpers/MediaQueries';

const CustomArrow = ({style, onClick, type, className}) => {
	let srText = '';
	let customStyles = {};

	switch(type) {
		case 'next':
			srText = 'Show next slide';
			customStyles = {
				right: '86px',
				transform: 'rotate(-135deg)'
			};
			break;
		case 'prev':
			srText = 'Show previous slide';
			customStyles = {
				left: '86px',
				transform: 'rotate(45deg)'
			};
			break;
		default:
			break;
	};

	let responsiveStyles = {};

	if (matchMediaDown(880)) {
		responsiveStyles.arrow = {
			[type === 'next' ? 'right' : 'left']: '60px'
		}
	};
	if (matchMediaDown(550)) {
		responsiveStyles.arrow = {
			[type === 'next' ? 'right' : 'left']: '40px'
		}
	};

	return (
		<button type='button' className={className} style={{...style, ...arrowStyles, ...customStyles, ...responsiveStyles.arrow}} onClick={onClick}>
			<ScreenReader text={srText} />
		</button>
	);
}

const arrowStyles = {
	backgroundColor: 'transparent',
	position: 'absolute',
	height: '23px',
	width: '23px',
	top: 'calc(50% - 16px)',
	border: '0',
	borderLeft: '2px solid #fff',
	borderBottom: '2px solid #fff',
	outline: '0',
	cursor: 'pointer',
	zIndex: '1'
};

export default CustomArrow;