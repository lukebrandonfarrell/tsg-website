import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScreenReader from './shared/ScreenReader';
import { matchMediaDown } from '../helpers/MediaQueries';

class ReelItem extends Component {
	constructor(props) {
    super(props);

    this.state = {
			isFavorite: false
		};

		this.heartHandler = this.heartHandler.bind(this);
  }

	heartHandler() {
		this.setState({isFavorite: !this.state.isFavorite});
	}
	render() {
		let responsiveStyles = {};

		if (matchMediaDown(550)) {
			responsiveStyles.grid = {
				paddingLeft: '5px',
				paddingRight: '5px'
			}
			responsiveStyles.image = {
				marginBottom: '10px'
			}
		};

		return (
			<div className={"grid-col " + this.props.grid} style={responsiveStyles.grid}>
				<div className="talent-box" style={{...{ backgroundImage: `url(${this.props.item.url})` }, ...styles.image, ...this.props.customStyles, ...responsiveStyles.image}}>
					<div style={styles.content}>
						<span style={styles.name}>{this.props.item.name}, {this.props.item.age}</span>
						<h3 style={styles.title}>{this.props.item.title}</h3>
						{/* <button type="button" style={styles.button} onClick={this.heartHandler}>
							<FontAwesomeIcon color="white" size="3x" icon={ this.state.isFavorite ? solidHeart : outlineHeart }/>
						</button> */}
					</div>
					<a href={this.props.item.path} style={styles.link}>
						<ScreenReader text={`${this.props.item.name}, ${this.props.item.title}`} />
					</a>
				</div>
			</div>
		);
	};
};

const styles = {
	image: {
		position: 'relative',
		paddingTop: '114%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center'
	},
	content: {
		fontFamily: 'Roboto, sans-serif',
		color: '#fff',
		position: 'absolute',
		bottom: '0',
		left: '0',
		width: '100%',
		transform: 'translateY(20px)',
		opacity: '0',
		transition: '0.3s ease-in-out',
		transitionProperty: 'transform, opacity',
		padding: '18px 80px 15px 28px',
		backgroundColor: 'rgba(57, 160, 202, 0.8)',
		boxSizing: 'border-box',
		zIndex: '2'
	},
	title: {
		fontSize: '20px',
		fontWeight: '400',
		margin: '0px 0px 3px'
	},
	name: {
		fontSize: '20px',
		display: 'block',
		marginBottom: '2px'
	},
	button: {
		position: 'absolute',
		top: 'calc(50% - 28px)',
		right: '25px',
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


export default ReelItem;