import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart as outlineHeart } from '@fortawesome/fontawesome-free-regular';
import { faHeart as solidHeart } from '@fortawesome/fontawesome-free-solid';
import ScreenReader from './shared/ScreenReader';
import { matchMediaDown } from '../helpers/MediaQueries';

class WorkBoxImage extends Component {
	constructor(props) {
    super(props);

    this.state = {
			isFavorite: false
		};

		this.heartHandler = this.heartHandler.bind(this);
  };

	heartHandler() {
		this.setState({isFavorite: !this.state.isFavorite});
	};

	

	render() {
		let responsiveStyles = {};

		if (matchMediaDown(550)) {
			responsiveStyles.image = {
				marginBottom: '20px'
			}
		};

		return (
			<div className={"grid-col " + this.props.grid}>
				<div className="work-box" style={{...{ backgroundImage: `url(${this.props.item.url})` }, ...styles.image, ...this.props.customStyles, ...responsiveStyles.image}}>
					<div style={styles.content}>
						<h3 style={styles.title}>{this.props.item.title}</h3>
						<span style={styles.name}>{this.props.item.name}</span>
						{/* <button type="button" style={styles.button} onClick={this.heartHandler}>
							<FontAwesomeIcon color="white" size="2x" icon={ this.state.isFavorite ? solidHeart : outlineHeart }/>
						</button> */}
					</div>
					<Link to={this.props.item.path} style={styles.link}>
						<ScreenReader text={this.props.item.title} />
					</Link>
				</div>
			</div>
		);
	};
};

const styles = {
	image: {
		position: 'relative',
		paddingTop: '69%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center'
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
	title: {
		fontSize: '20px',
		letterSpacing: '0.5px',
		fontWeight: '400',
		margin: '0px 0px 3px'
	},
	name: {
		fontSize: '18px',
		letterSpacing: '0.3px'
	},
	button: {
		backgroundColor: 'transparent',
		padding: '0',
		border: '0',
		cursor: 'pointer',
		display: 'block',
		margin: '9px auto 5px'
	},
	link: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		zIndex: '1'
	}
};

export default WorkBoxImage;