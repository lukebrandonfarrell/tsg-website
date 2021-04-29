import React, { Component } from 'react';

import ScreenReader from './shared/ScreenReader';
import { matchMediaDown } from '../helpers/MediaQueries';

class Slide extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0,
			isPlaying: false
		}
		this.playVideo = this.playVideo.bind(this);
  };

	playVideo() {
		this.setState({isPlaying: true});
	};

	componentWillReceiveProps(updatedProps) {
		if (updatedProps.slideChanged !== this.state.currentSlide) {
			this.setState({
				currentSlide: updatedProps.slideChanged,
				isPlaying: false
			});
		};
	};

	render() {
		let bkgImage = {
			backgroundImage: `url(${this.props.imageUrl})`
		};

		if (this.state.isPlaying) {
			bkgImage = {
				backgroundColor: '#000'
			};
		};

		let responsiveStyles = {}

		if (matchMediaDown(1260)) {
			responsiveStyles.image = {
				paddingTop: '45%'
			}
		};
		if (matchMediaDown(550)) {
			responsiveStyles.image = {
				paddingTop: '56.25%'
			}
			responsiveStyles.button = {
				borderTop: '24px solid transparent',
				borderBottom: '24px solid transparent',
				borderLeft: '44px solid #fff'
			}
		};

		return (
			<div style={{...bkgImage, ...styles.image, ...responsiveStyles.image}}>
				{this.props.videoSrc &&
					<React.Fragment>
						{!this.state.isPlaying &&
							<button style={{...styles.button, ...responsiveStyles.button}} type="button" onClick={this.playVideo}>
								<ScreenReader text="Play video" />
							</button>
						}
						{this.state.isPlaying &&
							<iframe title="Hero video" style={styles.iframe} src={(this.props.type && this.props.type == 'youtube') ? this.props.videoSrc +'?controls=0&autoplay=1' : this.props.videoSrc +'?autoplay=1&loop=1&autopause=0'} allow="autoplay fullscreen" allowFullScreen />
						}
					</React.Fragment>
				}
			</div>
		);
	};
};

const styles = {
	image: {
		position: 'relative',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		paddingTop: '31.2%'
	},
	iframe: {
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100%',
		width: '100%',
		border: '0',
		zIndex: '1'
	},
	button: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
		opacity: '0.6',
		border: '0',
		cursor: 'pointer',
		width: '0',
		height: '0',
		borderTop: '30px solid transparent',
		borderBottom: '30px solid transparent',
		borderLeft: '55px solid #fff',
		padding: '0',
		margin: '0 auto'
	}
};

export default Slide;