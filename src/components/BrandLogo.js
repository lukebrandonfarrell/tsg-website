import React from 'react';

import { matchMediaDown } from '../helpers/MediaQueries';

const BrandLogo = ({ brand }) => {
	let responsiveStyles = {};

	if (matchMediaDown(550)) {
		responsiveStyles.imageWrap = {
			display: 'block',
			margin: '0 auto 40px'
		}
	} else {
		responsiveStyles = styles;
	}

	return (
		<div className="last-child-no-margin" style={{...styles.imageWrap, ...responsiveStyles.imageWrap}}>
			<img src={brand.url} alt={`${brand.title}'s logo`} title={brand.title} style={{maxWidth: '100%'}} />
		</div>
	)
}

const styles = {
	imageWrap: {
		display: 'inline-block',
		margin: '0 60px 66px 60px',
		verticalAlign: 'middle'
	}
}

export default BrandLogo;