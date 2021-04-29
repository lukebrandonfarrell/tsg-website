import React, { Component } from 'react';

import ScreenReader from './shared/ScreenReader';

class NavigationHamButton extends Component {
	constructor(props) {
    super(props);

    this.state = {
			hover: false
		};

		this.toggleHover = this.toggleHover.bind(this);
  };


	toggleHover() {
		this.setState({ hover: !this.state.hover });
	};

	render() {
		const { btnLine } = styles;
		let hoverStyles = {};
		if (this.state.hover) {
			hoverStyles = {
				btnLine: {
					width: '27px'
				},
				btnDelay: {
					transitionDelay: '0.15s'
				}
			}
		} else {
			hoverStyles = {};
		};

		return (
			<button
				type="button"
				style={styles.button}
				onClick={this.props.onMenuClick}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
			>
				<span style={btnLine}></span>
				<span style={{...btnLine, ...styles.btnLineMiddle, ...hoverStyles.btnLine}}></span>
				<span style={{...btnLine, ...styles.btnLineBottom, ...hoverStyles.btnLine, ...hoverStyles.btnDelay}}></span>
				<ScreenReader text={'Toggle navigation'} />
			</button>
		);
	};
};

const styles = {
	button: {
		position: 'relative',
		height: '30px',
		width: '30px',
		backgroundColor: 'transparent',
		padding: '0',
		border: '0',
		float: 'right',
		cursor: 'pointer'
	},
	btnLine: {
		position: 'absolute',
		width: '27px',
		height: '3px',
		right: '0px',
		top: '0px',
		backgroundColor: '#000'
	},
	btnLineMiddle: {
		width: '20px',
		top: '10px',
		transition: 'width 0.15s ease-in-out'
	},
	btnLineBottom: {
		width: '14px',
		top: '20px',
		transition: 'width 0.15s ease-in-out'
	},
};

export default NavigationHamButton;