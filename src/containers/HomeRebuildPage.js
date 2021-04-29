import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Work from '../components/Work';
import Brands from '../components/Brands';
import FooterRebuild from '../components/FooterRebuild';
import Talent from '../components/Talent';
import InstagramFeed from '../components/InstagramFeed';
import HeroVideo from '../components/HeroVideo';

class HomeRebuildPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				{/* <Carousel /> */}
				<HeroVideo />
				<Work />
				<Talent />
				<InstagramFeed />
				<Brands />
				<FooterRebuild />
			</React.Fragment>
		);
	}
}

export default HomeRebuildPage;