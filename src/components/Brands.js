import React, { Component } from 'react';
import Slider from "react-slick";
import { matchMediaDown } from '../helpers/MediaQueries';
import { debounce } from '../helpers/Debounce';
import BrandLogo from './BrandLogo';
import Heading from './shared/Heading';
import Wrap from './Wrap';
import hm from '../assets/brands/hm.png';
import huawei from '../assets/brands/huawei.png';
import benetton from '../assets/brands/beneton.png';
import nike from '../assets/brands/nike.png';
import apple from '../assets/brands/apple.png';
import nokia from '../assets/brands/nokia.png';
import zara from '../assets/brands/zara.png';
import maxfactor from '../assets/brands/maxfactor.png';





const DUMMY_BRANDS = [
	{
		title: 'AMV BBDO',
		url: '/images/logos/aamv_bbdo.png'
	},
	{
		title: 'Aunt Bessies',
		url: '/images/logos/AuntBessiesLogo.png'
	},
	{
		title: 'BACARDI',
		url: '/images/logos/BACARDILOGO.png'
	},
	{
		title: 'BBC SOUNDS',
		url: '/images/logos/bbc_sounds_logo.png'
	},
	{
		title: 'Boots',
		url: '/images/logos/BootsLogo.png'
	},
	{
		title: 'Cancer Research',
		url: '/images/logos/cancerresearchlogo.jpg'
	},
	{
		title: 'Davidstow',
		url: '/images/logos/Davidstow_logo.png'
	},
	{
		title: 'DEADBEAT',
		url: '/images/logos/DEADBEAT_LOGO.png'
	},
	{
		title: 'Diet Coke',
		url: '/images/logos/diet_coke_logo.png'
	},
	{
		title: 'Eurostar international',
		url: '/images/logos/eurostar_international_logo.png'
	},
	{
		title: 'Furlined',
		url: '/images/logos/FurlinedLogo.jpg'
	},
	{
		title: 'ghd hair',
		url: '/images/logos/ghd_hair_logo.png'
	},
	{
		title: 'Google',
		url: '/images/logos/googlelogo.png'
	},
	{
		title: 'Havas Helias',
		url: '/images/logos/HavasHeliasLogo.png'
	},
	{
		title: 'Hogarth',
		url: '/images/logos/hogarthlogo.png'
	},
	{
		title: 'Holiday Inn',
		url: '/images/logos/HolidayInnLogo.png'
	},
	{
		title: 'HSBC',
		url: '/images/logos/HSBCLOGO.png'
	},
	{
		title: 'Inside Ideas Group',
		url: '/images/logos/InsideIdeasGroup.jpg'
	},
	{
		title: 'McDonalds',
		url: '/images/logos/McDonaldsLogo.png'
	},
	{
		title: 'ODD London',
		url: '/images/logos/oddlondon.png'
	},
	{
		title: 'PARTIZAN BELGRADE MNOGO SMO JAKI!!!',
		url: '/images/logos/partizanlogo.png'
	},
	{
		title: 'Pulse Films',
		url: '/images/logos/PulseFilms.png'
	},
	{
		title: 'Qatar Airways',
		url: '/images/logos/Qatar_Airways_Logo_2006.jpg'
	},
	{
		title: 'Radley Yeldar',
		url: '/images/logos/radley_yeldar_logo.png'
	},
	{
		title: 'RASCAL',
		url: '/images/logos/Rascal_Logo.png'
	},
	{
		title: 'Saatchi And Saatchi',
		url: '/images/logos/saatchi_and_saatchi_logo_vector.png'
	},
	{
		title: 'SAMSUNG',
		url: '/images/logos/Samsung.png'
	},
	{
		title: 'SKY Crime',
		url: '/images/logos/SkyCrime.jpg'
	},
	{
		title: 'ST.LUKES',
		url: '/images/logos/SL14_Logo.jpg'
	},
	{
		title: 'STINK',
		url: '/images/logos/stink_logo.png'
	},
	{
		title: 'tb',
		url: '/images/logos/TB_Avatar.jpg'
	},
	{
		title: 'The Open University',
		url: '/images/logos/The_Open_University-logo.png'
	},
	{
		title: 'VCCP',
		url: '/images/logos/vccp_logo.png'
	},
	{
		title: 'Vinted',
		url: '/images/logos/vinted_logo.png'
	}

]

const settings = {
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3500,
	infinite: true,
	speed: 900,
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



class Brands extends Component {
	constructor(props) {
    super(props);

    this.state = {
			brands: null,
			resized: false
		};

		this.toggleResize = this.toggleResize.bind(this);
  };


	componentDidMount() {
		this.setState({ brands: DUMMY_BRANDS });

		window.addEventListener('resize', debounce(() => {
			this.toggleResize();
		}, 200))
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.toggleResize);
	}

	toggleResize() {
		this.setState({ resized: !this.state.resized });
	}

	render() {
		let responsiveStyles = {};

		if (matchMediaDown(550)) {
			responsiveStyles.wrap = {
				marginBottom: '35px'
			};
		};

		return (
			<Wrap style={{...{marginBottom: '60px'}, ...responsiveStyles.wrap}}>
				<Heading title="CLIENTS WE WORK WITH" centered/>
				{this.state.brands && 
				<Slider className="feed-carousel" style={{height: '100%'}} {...settings}>
					{this.state.brands.map((brand, index) => <BrandLogo key={index} brand={brand} />)}
				</Slider>}
			</Wrap>
		);
	};
};

export default Brands;