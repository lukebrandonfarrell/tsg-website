import React from 'react';

import { matchMediaDown } from '../../helpers/MediaQueries';

const SubHeading = ({title, isReversed}) => {
	let reversedStyles = {};
	let responsiveStyles = {};

	if (isReversed) {
		reversedStyles = {
			margin: '11px 3px'
		};

		if (matchMediaDown(550)) {
			responsiveStyles.heading = {
				margin: '-3px 3px 11px'
			}
		};
	};

	if (matchMediaDown(1280)) {
		responsiveStyles.title = {
			fontSize: '28px',
			letterSpacing: '1.2px'
		}
	};
	if (matchMediaDown(550)) {
		responsiveStyles.title = {
			fontSize: '22px',
			letterSpacing: '1px'
		}
	};

	return (
		<div style={{...styles.heading, ...reversedStyles, ...responsiveStyles.heading}}>
			<h2 style={{...styles.title, ...responsiveStyles.title}}>{title}</h2>
		</div>
	);
}

const styles = {
	heading: {
		borderBottom: '1px solid #000',
		padding: '4px 0px',
		margin: '4px 0 19px'
	},
	title: {
		fontFamily: 'Playfair Display',
		fontSize: '34px',
		letterSpacing: '1.4px',
		fontStyle: 'italic',
		fontWeight: '400',
		margin: '0px',
		marginLeft: '-1px'
	}
};

export default SubHeading;