import React from 'react';

import WorkBox from './WorkBox';
import WorkBoxImage from './WorkBoxImage';
import { matchMediaDown } from '../helpers/MediaQueries';

const WorkBoxWrap = ({heading, items, grid, featured, type}) => {

	let responsiveStyles = {};
	let responsiveClass = '';

	if (matchMediaDown(550)) {
		responsiveClass = 'col-12';
		responsiveStyles.box = {
			paddingBottom: '0'
		};
		responsiveStyles.longImage = {
			paddingTop: '94%'
		};
		responsiveStyles.dualFeatured = {
			paddingTop: '167%'
		}
	};
	if (window.matchMedia(`only screen and (max-width: 1030px) and (min-width: 781px)`).matches) {
		responsiveStyles.dualFeatured = {
			paddingTop: '127%'
		}
		responsiveStyles.longImage = {
			paddingTop: '121.5%'
		}
	};
	if (window.matchMedia(`only screen and (max-width: 780px) and (min-width: 768px)`).matches) {
		responsiveStyles.dualFeatured = {
			paddingTop: '160%'
		}
		responsiveStyles.singleImage = {
			paddingTop: '54.7%'
		}
		responsiveStyles.longImage = {
			paddingTop: '135%'
		}
	};

	let content;

	switch(type) {
		case 'large':
			content = (
				<div className="grid-row">
					<WorkBox parentGrid={"grid-col " + (responsiveClass ? responsiveClass : "col-9")} heading={heading} items={items} customStyles={styles.squaredImage} />
					<WorkBoxImage grid={responsiveClass ? responsiveClass : "col-3"} item={featured} customStyles={{...styles.longImage, ...responsiveStyles.longImage}} />
				</div>
			);
			break;
		case 'dual':
			content = (
				<div className="grid-row">
					<WorkBoxImage grid="col-6" item={featured} customStyles={{...{paddingTop: "122%"}, ...responsiveStyles.dualFeatured}} />
					<WorkBox parentGrid="grid-col col-6" grid="col-12" heading={heading} items={items} customStyles={{paddingTop: "96.4%"}} isReversed />
				</div>
			);
			break;
		case 'single':
			content = <WorkBox heading={heading} items={items} grid={grid} customStyles={{...styles.singleImage, ...responsiveStyles.singleImage}} />;
			break;
		default:
			content = <WorkBox heading={heading} items={items} />;
			break;
	};

	return (
		<div style={{...styles.box, ...responsiveStyles.box}}>
			{content}
		</div>
	);
};

const styles = {
	box: {
		border: '1px solid #e0e0e0',
		paddingTop: '21px',
		paddingRight: '19px',
		paddingBottom: '20px',
		paddingLeft: '19px',
		marginBottom: '20px'
	},
	squaredImage: {
		paddingTop: '94%'
	},
	longImage: {
		paddingTop: '118%'
	},
	singleImage: {
		paddingTop: '46.7%'
	}
};

export default WorkBoxWrap;