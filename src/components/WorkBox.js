import React from 'react';

import SubHeading from './shared/SubHeading';
import WorkBoxImage from './WorkBoxImage';
import { matchMediaDown } from '../helpers/MediaQueries';

const WorkBox = ({heading, items, grid, parentGrid, customStyles, isReversed}) => {

	let responsiveClass = grid || 'col-4';

	if (matchMediaDown(550)) {
		responsiveClass = grid || 'col-12'
	};

	let styleBackground = heading == "TV and Film" ? 'contain' : 'cover';

	return (
		<div className={parentGrid}>
			{!isReversed && <SubHeading title={heading} />}
			<div className="grid-row">
				{items.map((item, index) => <WorkBoxImage key={index} item={item} grid={grid || responsiveClass} customStyles={{...customStyles, ...{backgroundSize:styleBackground}}} />)}
			</div>
			{isReversed && <SubHeading isReversed title={heading} />}
		</div>
	);
};

export default WorkBox;