import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from './shared/Backdrop';
import Navigation from './Navigation';
import NavigationHamButton from './NavigationHamButton';
import { matchMediaDown } from '../helpers/MediaQueries';
import { debounce } from '../helpers/Debounce';
import logo from '../logo.jpg';
import NavigationList from './NavigationList';

const NAV_ITEMS = [
	{
		title: 'TALENT',
		path: 'clients',
		pathType: 'internal'
	},
	{
		title: 'CONTACT',
		path: 'contact',
		pathType: 'internal'
	}
];
class Navbar extends Component {
	constructor(props) {
    super(props);

    this.state = {
			isMenuOpened: false,
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

	toggleNavigationHandler = () => {
		this.setState({ isMenuOpened: !this.state.isMenuOpened });
	};

	renderLink(item) {
		if(item.pathType === 'internal') {
			return (<Link to={`/${item.path}`} style={styles.linkMenu}>{item.title}</Link>);
		} else {
			return (<a href={item.path} style={styles.linkMenu}>{item.title}</a>);
		}
	  }

	  renderRightMenu(responsiveStyles) {
		if (matchMediaDown(880)) {
			return (
					<div style={{...styles.titleWrap, ...responsiveStyles.titleWrap}}>
						<div className="group" style={styles.buttonWrap}>
							<NavigationHamButton onMenuClick={this.toggleNavigationHandler} />
						</div>
						{!matchMediaDown(880) &&
							<h1 className="center" style={{...styles.title, ...responsiveStyles.title}}><b>INFLUENTIAL TALENT AGENCY</b> <br/> <br/> REPRESENTING THE BEST OF BRITISH TALENT <br/> Actors, Young Talent, Voice Over Artists, Models, Extras</h1>
						}
					</div>
			)
		} else {
			return (
				<div style={{...styles.titleWrapFlex, ...responsiveStyles.titleWrap}}>
					<div className="group" style={styles.buttonWrapFlex}>
						{NAV_ITEMS.map((item, index) => this.renderLink(item))}
					</div>
					{!matchMediaDown(880) &&
						<h1 className="center" style={{...styles.title, ...responsiveStyles.title}}><b>INFLUENTIAL TALENT AGENCY</b> <br/> <br/> REPRESENTING THE BEST OF BRITISH TALENT <br/> Actors, Young Talent, Voice Over Artists, Models, Extras</h1>
					}
				</div>
		)
		}
	  }

	render () {
		let responsiveStyles = {};

		if (matchMediaDown(1260)) {
			responsiveStyles.header = {
				paddingLeft: '33px',
				paddingRight: '50px'
			}
			responsiveStyles.title = {
				fontSize: '30px'
			}
		};
		if (matchMediaDown(880)) {
			responsiveStyles.header = {
				paddingLeft: '23px',
				paddingRight: '40px'
			}
			responsiveStyles.image = {
				width: '180px'
			}
			responsiveStyles.titleWrap = {
				maxWidth: 'calc(100% - 230px)'
			}
			responsiveStyles.title = {
				fontSize: '26px',
				letterSpacing: '1px',
				paddingBottom: '5px',
				marginTop: '0'
			}
		};
		if (matchMediaDown(550)) {
			responsiveStyles.image = {
				width: '130px'
			}
			responsiveStyles.title = {
				...responsiveStyles.title,
				fontSize: '20px'
			}
		};
		return (
			<header style={{...styles.header, ...responsiveStyles.header}}>
				<div className="group" style={{marginBottom:'15px'}}>
					<div style={styles.link}>
						<Link to="/">
							<img src={logo} alt="Logo" style={{...styles.image, ...responsiveStyles.image}} />
						</Link>
						<div style={styles.infoWrap}>
							<a style={{...styles.info, marginBottom:10}} href = "mailto: info@tsgcasting.com">info@tsgcasting.com</a>
							<a style={{...styles.info, paddingBottom:10}} href="tel:0208 611 2763">0208 611 2763</a>
						</div>
					</div>
					{this.renderRightMenu(responsiveStyles)}
				</div>
				{matchMediaDown(880) &&
					<h1 className="center" style={{...styles.title, ...responsiveStyles.title}}><b>INFLUENTIAL TALENT AGENCY</b> <br/> <br/> REPRESENTING THE BEST OF BRITISH TALENT <br/> Actors, Young Talent, Voice Over Artists, Models, Extras</h1>
				}
				<Navigation menuOpened={this.state.isMenuOpened} onNavClose={this.toggleNavigationHandler} />
				{this.state.isMenuOpened && <Backdrop onBackdropClick={this.toggleNavigationHandler} />}
			</header>
		);
	};
};

const styles = {
	header: {
		width: '100%',
		minHeight: '140px',
		paddingTop: '2px',
		paddingRight: '80px',
		paddingBottom: '0px',
		paddingLeft: '63px',
		boxSizing: 'border-box',
		backgroundColor: '#fff'
	},
	link: {
		float: 'left',
		flexDirection: 'column',
		display: 'flex'
	},
	linkMenu: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '20px',
		letterSpacing: '0.4px',
		textDecoration: 'none',
		color: '#000',
		padding: '5px 20px'
	},
	infoWrap: {
		display:'flex',
		flexDirection:'column',
		alignItems:'center'
	},
	image: {
		width: '281px'
	},
	info: {
		color: 'black',
		fontFamily: 'Roboto, sans-serif',
    	fontWeight: 300,
		textDecoration: 'none',
	},
	titleWrap: {
		float: 'right',
		display: 'inline-block',
		width: '100%',
		maxWidth: 'calc(100% - 304px)'
	},
	titleWrapFlex: {
		float: 'right',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: 'calc(100% - 304px)'
	},
	title: {
		fontFamily: 'Playfair Display',
		fontSize: '25px',
		fontWeight: 'normal',
		letterSpacing: '1.9px',
		borderTop: '1px solid #000',
		paddingTop: '5px',
		marginTop: '17px',
		marginBottom: '0'
	},
	buttonWrap: {
		paddingTop: '24px'
	},
	buttonWrapFlex: {
		display:'flex',
		justifyContent: 'flex-end',
		paddingTop: '10px'
	}
};

export default Navbar;