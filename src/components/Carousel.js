import React, { Component } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

import Slide from './Slide';
import CustomArrow from './shared/CustomArrow';
import { matchMediaDown } from '../helpers/MediaQueries';
import { debounce } from '../helpers/Debounce';

const SLIDES = [
	{
		imageUrl: '/images/video_screenshots/Vinted.png',
		videoSrc: 'https://player.vimeo.com/video/474715028',
		type:     'vimeo'
	},
	{
		imageUrl: '/images/video_screenshots/first.png',
		videoSrc: 'https://www.youtube.com/embed/lRpBLAwIbeA',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/second.png',
		videoSrc: 'https://player.vimeo.com/video/380021848',
		type:     'vimeo'
	},
	{
		imageUrl: '/images/video_screenshots/third.png',
		videoSrc: 'https://www.youtube.com/embed/LXaxMKQSxTw',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/fourth.png',
		videoSrc: 'https://www.youtube.com/embed/OndWrKMADMI',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/fifth.png',
		videoSrc: '',
		type:''
	},
	{
		imageUrl: '/images/video_screenshots/NewLove.png',
		videoSrc: 'https://www.youtube.com/embed/ZW5LkUnCoSE',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/seventh.png',
		videoSrc: 'https://www.youtube.com/embed/0eZyQuCr1RQ',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/eighth.png',
		videoSrc: 'https://www.youtube.com/embed/C7PPTGqZcf8',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/nineth.png',
		videoSrc: 'https://player.vimeo.com/video/385963744',
		type:     'vimeo'
	},
	{
		imageUrl: '/images/video_screenshots/tenth.png',
		videoSrc: 'https://www.youtube.com/embed/HAPc4sucXXY',
		type:	  'youtube'
	},
	{
		imageUrl: '/images/video_screenshots/sixth.png',
		videoSrc: 'https://www.youtube.com/embed/RmE-Cr72qH0',
		type:	  'youtube'
	}
]

class Carousel extends Component {
	constructor(props) {
    super(props);

    this.state = {
			currentSlide: 0,
			resized: false
		};

		this.toggleResize = this.toggleResize.bind(this);
  };

	componentDidMount() {
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

		let responsiveStyles = {};

		if (matchMediaDown(550)) {
			responsiveStyles.dots = {
				bottom: '30px'
			}
		};

		const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
			slidesToScroll: 1,
			useTransform: false,
			nextArrow: <CustomArrow type='next' />,
			prevArrow: <CustomArrow type='prev' />,
			appendDots: dots => (
        <div style={{...styles.dots, ...responsiveStyles.dots}}>
					{dots.map((dot, index) => <span key={index} style={styles.dot} className={dot.props.className}>{dot.props.children}</span>)}
        </div>
			),
			afterChange: currentSlide => (
					this.setState({ currentSlide })
			)
		};

		return (
			<div style={styles.container}>
        <Slider style={styles.carousel} {...settings}>
          {SLIDES.map((slide, index) => <Slide key={index} slideChanged={this.state.currentSlide} imageUrl={slide.imageUrl} videoSrc={slide.videoSrc} type={slide.type} />)}
        </Slider>
      </div>
		);
	};
};

const styles = {
	container: {
		marginBottom: '43px'
	},
	carousel: {
		height: '100%'
	},
	dots: {
		textAlign: 'center',
		position: 'absolute',
		left: '0',
		right: '0',
		bottom: '34px',
		height: '0',
		margin: '0 auto'
	},
	dot: {
		display: 'inline-block',
		position: 'relative',
		height: '11px',
		width: '11px',
		border: '1px solid #fff',
		borderRadius: '50%',
		marginRight: '13px'
	}
};

export default Carousel;
