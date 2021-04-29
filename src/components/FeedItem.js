import React from 'react';

import ScreenReader from './shared/ScreenReader';
import { matchMediaDown } from '../helpers/MediaQueries';

const FeedItem = (props) => {
	
	let responsiveStyles = {};
	let image_arr = props.item.node.thumbnail_resources;
	let image_src = image_arr[image_arr.length - 1].src;
	let insta_cap = props.item.node.edge_media_to_caption.edges[0].node.text;
	let shortcode = props.item.node.shortcode;

	if (matchMediaDown(550)) {
		responsiveStyles.imageWrap = {
			paddingTop: '100%',
		} 
	};

	return (
		<div className="work-box" style={{...styles.imageWrap, ...responsiveStyles.imageWrap,...{ backgroundImage: `url(${image_src})` }, ...props.customStyles}}>
				<div style={styles.content}>
			<span style={styles.name}>test text</span>
				</div>
			<a style={styles.link} href={`https://www.instagram.com/p/${shortcode}/`}  target="_blank">
				<ScreenReader text={insta_cap} />
			</a>
		</div>
	);
}

const styles = {
	imageWrap: {
		position: 'relative',
		width: '100%',
		display: 'inline-block',
		paddingTop: '107%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	},
	link: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		zIndex: '1'
	},
	content: {
		fontFamily: 'Roboto, sans-serif',
		textAlign: 'center',
		color: '#fff',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -60%)',
		opacity: '0',
		transition: '0.3s ease-in-out',
		transitionProperty: 'transform, opacity',
		zIndex: '2'
	},
	name: {
		fontSize: '18px',
		letterSpacing: '0.3px'
		
	}
};

export default FeedItem;