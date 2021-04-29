import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { matchMediaDown } from '../helpers/MediaQueries';

const Social = ({url, icon}) => {
	let responsiveStyles = {};

	if (matchMediaDown(550)) {
		responsiveStyles.link = {
			marginLeft: '20px'
		};
	};

	return (
		<a href={url} style={{...styles.link, ...responsiveStyles.link}}>
			<FontAwesomeIcon size="lg" icon={icon} />
		</a>
	);
};

const styles = {
	link: {
		color: '#fff',
		marginLeft: '35px'
	}
};

export default Social;