import React from 'react';

import ReelItem from './ReelItem';
import { matchMediaDown } from '../helpers/MediaQueries';

const Reel = ({items, grid}) => {
	let responsiveStyles = {};

	if (matchMediaDown(550)) {
		responsiveStyles.row = {
			marginLeft: '-5px',
			marginRight: '-5px'
		};
		responsiveStyles.wrap = {
			marginBottom: '35px'
		};
	};

	return (
		<div style={{...{overflow: 'hidden', marginBottom: '99px'}, ...responsiveStyles.wrap}}>
			<div className="grid-row" style={responsiveStyles.row}>
				{matchMediaDown(550) ?
					items.map((item, index) => <ReelItem key={index} item={item} grid={index < 2 ? 'col-6' : grid || 'col-4'} />)
				:
					items.map((item, index) => <ReelItem key={index} item={item} grid={grid || 'col-2'} />)
				}
			</div>
		</div>
	);
};

export default Reel;