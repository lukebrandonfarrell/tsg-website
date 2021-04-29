import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { matchMediaDown } from '../../helpers/MediaQueries';

const Heading = ({title, ctaUrl, ctaText, ctaStyles, ctaIcon, centered, customStyles}) => {
	let canFloat = {};
	if (!centered) {
		canFloat = {
			float: 'left'
		}
	};

	let responsiveStyles = {};

	if (matchMediaDown(1280)) {
		responsiveStyles.title = {
			fontSize: '36px',
			lineHeight: '40px',
			letterSpacing: '6px'
		},
		responsiveStyles.link = {
			padding: '12px 20px',
			top: '8px'
		}
	};
	if (matchMediaDown(767)) {
		responsiveStyles.heading = {
			padding: '5px 0',
			marginTop: '10px',
			marginBottom: '30px'
		},
		responsiveStyles.link = {
			fontSize: '14px',
			padding: '8px 24px',
			position: 'absolute',
			left: '0',
			right: 'auto',
			top: 'calc(100% + 5px)'
		}
		if (ctaText) {
			responsiveStyles.heading = {
				...responsiveStyles.heading,
				marginBottom: '70px'
			}
		}
	};
	if (matchMediaDown(550)) {
		responsiveStyles.title = {
			fontSize: '24px',
			lineHeight: '28px',
			letterSpacing: '4px'
		}
	};

	return (
		<div className={"group" + (centered ? " center" : "")} style={{...styles.heading, ...customStyles, ...responsiveStyles.heading}}>
			<h1 style={{...styles.title, ...canFloat, ...responsiveStyles.title}}>{title}</h1>
			{ctaText &&
				<a href={ctaUrl} style={{...ctaStyles, ...styles.link, ...responsiveStyles.link}} target="_blank">
					{ctaIcon && <FontAwesomeIcon style={styles.icon} size="lg" icon={ctaIcon} />}
					{ctaText}
				</a>
			}
		</div>
	);
}

const styles = {
	heading: {
		borderBottom: '1px solid #000',
		position: 'relative',
		padding: '15px 0',
		marginTop: '31px',
		marginBottom: '49px'
	},
	title: {
		fontFamily: 'Playfair Display',
		fontSize: '45px',
		lineHeight: '50px',
		letterSpacing: '7px',
		fontWeight: '400',
		margin: '0px'
	},
	link: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '18px',
		letterSpacing: '0.3px',
		textDecoration: 'none',
		position: 'absolute',
		right: '0',
		top: '15px',
		color: '#fff',
		display: 'inline-block',
		borderRadius: '4px',
		padding: '12px 32px',
		marginTop: '2px'
	},
	icon: {
		marginRight: '6px'
	}
};

export default Heading;