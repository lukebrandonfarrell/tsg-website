import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ item }) => {
	const { title, path, pathType } = item;

	function renderLink() {
		if(pathType === 'internal') {
			return (<Link to={`/${path}`} style={styles.link}>{title}</Link>);
		} else {
			return (<a href={path} style={styles.link}>{title}</a>);
		}
	  }

	return (
		<li style={styles.listItem}>
			{renderLink()}
		</li>
	);
};

const styles = {
	listItem: {
		listStyleType: 'none',
		marginLeft: '21px',
		marginBottom: '36px'
	},
	link: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '20px',
		letterSpacing: '0.4px',
		textDecoration: 'none',
		color: '#000',
		padding: '5px 20px'
	}
};

export default NavigationItem;