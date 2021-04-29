import React from 'react';

import NavigationItem from './NavigationItem';

const NAV_ITEMS = [
	{
		title: 'CLIENTS',
		path: 'clients',
		pathType: 'internal'
	},
	{
		title: 'CONTACT',
		path: 'contact',
		pathType: 'internal'
	}
];

const NavigationList = () => {
	return (
		<ul style={styles.list}>
			{NAV_ITEMS.map((item, index) => <NavigationItem key={index} item={item} />)}
		</ul>
	);
};

const styles = {
	list: {
		paddingLeft: '0',
		marginTop: '17px'
	}
};

export default NavigationList;