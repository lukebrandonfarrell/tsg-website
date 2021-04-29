import React from 'react';
import Slider from "react-slick";

import FeedItem from './FeedItem';
import { matchMediaDown } from '../helpers/MediaQueries';
const settings = {
	dots: false,
	arrows: false,
	autoplay: false,
	autoplaySpeed: 3500,
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 6,
	centerPadding: '10px',
	useTransform: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
	]
};

const Feed = ({items}) => {
	let responsiveStyles = {};

	if (matchMediaDown(550)) {
		responsiveStyles.wrap = {
			marginBottom: '35px'
		};
	};
	return (
		<div style={{...{marginBottom: '70px', overflow: 'hidden'}, ...responsiveStyles.wrap}}>
			<div style={{whiteSpace: 'nowrap'}}>
				<Slider className="feed-carousel" style={{height: '100%'}} {...settings}>
					{items.map((item, index) => <FeedItem  key={index} item={item} />)}
        </Slider>
			</div>
		</div>
	);
};

export default Feed;