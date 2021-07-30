import React, { Component } from 'react';

import Wrap from './Wrap';
import Heading from './shared/Heading';
import WorkBoxWrap from './WorkBoxWrap';
import { matchMediaDown } from '../helpers/MediaQueries';
import { debounce } from '../helpers/Debounce';

const DUMMY_DATA = {
	tvAndFilm: [
		{
			url: '/images/tvfilm/Grantchester-banner.jpg',
			title: 'Grantchester - Kudos Productions',
			name: '',
			path: '/'
		},
		{
			url: '/images/tvfilm/Come_Away_poster.jpg',
			title: 'Come Away',
			name: '',
			path: '/'
		},
		{
			url: '/images/tvfilm/No_Mans_Land.jpg',
			title: 'No Man’s Land -Spiro Films',
			name: '',
			path: '/'
		}
	],
	campaigns: [
		{
			url: '/images/adcampaign/GHD_Gods_Gift_To_Queens__Cult_London.jpg',
			title: 'GHD – Gods Gift To Queens – Cult London',
			name: '',
			path: '/'
		},
		{
			url: '/images/adcampaign/EAT_THEM_TO_DEFEAT_THEM.jpg',
			title: 'Eat Them To Defeat Them - Veg Power Campaign - Agile Films',
			name: '',
			path: '/'
		},
		{
			url: '/images/adcampaign/Kode_Mia.jpg',
			title: 'Oppo Marvel Obsession - Produced by Kode Media',
			name: '',
			path: '/'
		}
	],
	campaignsFeatured: {
		url: '/images/adcampaign/Jaffa_Cakes.jpg',
		title: 'Jaffa Cakes - produced by Sweetshop',
		name: '',
		path: '/'
	},
	corporate: [
		{
			url: '/images/corporate/aml_group.png',
			title: 'AML - Burning Reel Productions',
			name: '',
			path: '/'
		}
	],
	music: [
		{url: '/images/musicvideo/Craig_David_and_Krupt_FM.jpg',
		title: '',
		name: 'Kurupt FM - Summertime (Official Video) ft. Craig David',
		path: '/'

		}
	],
	musicFeatured: {
		url: '/images/musicvideo/Krunk.jpg',
		title: '',
		name: 'Sad Night Dynamite - Krunk - Produced By Spindle and Ember Films',
		path: '/'
	},
	photographic: [
		{
			url: '/images/photographic/amazon-prime-day-2020-phone-accessories-sale.jpg',
			title: 'Amazon Prime Smile Sale',
			name: '',
			path: '/'
		},
		{
			url: '/images/photographic/HSBC_FUSION.png',
			title: 'HSBC - Fusion',
			name: '',
			path: '/'
		},
		{
			url: '/images/photographic/Bentley_Motors.jpg',
			title: 'Bentley Motors Campaign',
			name: '',
			path: '/'
		}
	]
}

class Work extends Component {
	constructor(props) {
    super(props);

    this.state = {
			tvAndFilm: null,
			campaigns: null,
			campaignsFeatured: null,
			corporate: null,
			music: null,
			musicFeatured: null,
			photographic: null,
			resized: false
		};

		this.toggleResize = this.toggleResize.bind(this);
  };

	componentDidMount() {
		this.setState(
			{
				tvAndFilm: DUMMY_DATA.tvAndFilm,
				campaigns: DUMMY_DATA.campaigns,
				campaignsFeatured: DUMMY_DATA.campaignsFeatured,
				corporate: DUMMY_DATA.corporate,
				music: DUMMY_DATA.music,
				musicFeatured: DUMMY_DATA.musicFeatured,
				photographic: DUMMY_DATA.photographic
			}
		);

		window.addEventListener('resize', debounce(() => {
			this.toggleResize();
		}, 200));
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.toggleResize);
	}

	toggleResize() {
		this.setState({ resized: !this.state.resized });
	}

	render() {

		let responsiveClass = '';
		let responsiveStyles = {};

		if (matchMediaDown(550)) {
			responsiveClass = 'col-12';
			responsiveStyles.wrap = {
				marginBottom: '35px'
			}
		};

		return (
			<Wrap style={{...{marginBottom: '66px'}, ...responsiveStyles.wrap}}>
				<Heading title="LATEST WORK" centered />
				{this.state.tvAndFilm && <WorkBoxWrap customStyle={{backgroundSize:'contain'}} heading="TV and Film" items={this.state.tvAndFilm} />}
				{this.state.campaigns && this.state.campaignsFeatured && <WorkBoxWrap heading="Ad Campaigns" items={this.state.campaigns} featured={this.state.campaignsFeatured} type="large" />}
				<div className="grid-row">
					<div className={"grid-col " + (responsiveClass || 'col-6')}> 
						{this.state.corporate && <WorkBoxWrap heading="Corporate Videos" items={this.state.corporate} type="single" grid="col-12" />}
					</div>
					<div className={"grid-col " + (responsiveClass || 'col-6')}>
						{this.state.music && this.state.musicFeatured && <WorkBoxWrap heading="Music Videos" items={this.state.music} featured={this.state.musicFeatured} type="dual" />}
					</div>
				</div>
				{this.state.photographic && <WorkBoxWrap heading="Photographic" items={this.state.photographic} />}
			</Wrap>
		);
	};
};

export default Work;