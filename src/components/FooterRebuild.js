import React, { Component } from 'react';

import Wrap from './Wrap';
import logo from '../assets/images/logo-footer.png';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Social from './Social';
import { matchMediaDown } from '../helpers/MediaQueries';
import { debounce } from '../helpers/Debounce';

const SOCIALS = [
	{
		url: 'https://www.instagram.com',
		icon: faInstagram
	},
	{
		url: 'https://www.youtube.com',
		icon: faYoutube
	},
	{
		url: 'https://www.twitter.com',
		icon: faTwitter
	},
	{
		url: 'https://www.facebook.com',
		icon: faFacebookF
	}
]

class FooterRebuild extends Component {
	constructor(props) {
    super(props);

    this.state = {
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
			responsiveStyles.socials = {
				marginTop: '5px'
			}
			responsiveStyles.address = {
				marginBottom: '15px'
			}
			responsiveStyles.center = {
				float: 'none',
				display: 'block',
				textAlign: 'center'
			}
		};

		return (
			<footer style={styles.footer}>
				<Wrap>
					<div className="group" style={styles.footerTop}>
						<div style={styles.info}>
							<img src={logo} alt="TSG Logo" style={styles.logo} />
							<a href = "mailto: info@tsgcasting.com" style={{...styles.footerLink,...{paddingTop:10}}}>info@tsgcasting.com</a>
							<a href="tel:0208 611 2763" style={{...styles.footerLink,...{paddingTop:5}}}>0208 611 2763</a>
						</div>
						
						<div style={{...styles.socials, ...responsiveStyles.socials}}>
							{SOCIALS.map((social, index) => <Social key={index} url={social.url} icon={social.icon} />)}
						</div>
					</div>
					<div className="group">
						<span style={{...styles.address, ...responsiveStyles.center, ...responsiveStyles.address}}>Office 7, 35-37 Ludgate Hill, London, EC4M 7JN</span>
						<span style={{...styles.copyright, ...responsiveStyles.center}}>Copyright &copy; 2020 TSG <span style={styles.divider}> | </span> Design by <a href="https://www.weareelder.com/" style={styles.copyrightDesign}>Elder</a></span>
					</div>
				</Wrap>
			</footer>
		);
	}
};

const styles = {
	footer: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '300',
		color: '#fff',
		backgroundColor: 'rgba(0,0,0,.4)',
		padding: '35px 0 20px'
	},
	footerTop: {
		borderBottom: '1px solid black',
		paddingBottom: '19px',
		marginBottom: '17px'
	},
	logo: {
		float: 'left'
	},
	info: {
		float: 'left',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	socials: {
		float: 'right',
		marginTop: '11px'
	},
	address: {
		float: 'left'
	},
	copyright: {
		letterSpacing: '0.3px',
		float: 'right'
	},
	copyrightDesign: {
		textDecoration: 'none',
		color: '#125877'
	},
	divider: {
		textAlign: 'center',
		display: 'inline-block',
		width: '17px'
	},
	footerLink: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '300',
		color: '#fff',
		textDecoration: 'none'
	}
};

export default FooterRebuild;