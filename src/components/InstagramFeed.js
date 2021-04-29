import React, { Component } from 'react';
import { connect } from 'react-redux';
import Wrap from './Wrap';
import Heading from './shared/Heading';
import Feed from './Feed';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { debounce } from '../helpers/Debounce';
import { getInstagramFeed } from '../actions/InstagramActions';

const DUMMY_DATA = [
	{
		url: 'https://i.picsum.photos/id/294/200/200.jpg?hmac=tSuqBbGGNYqgxQ-6KO7-wxq8B4m3GbZqQAbr7tNApz8',
	},
	{
		url: 'https://i.picsum.photos/id/678/200/200.jpg?hmac=_vsd4KulLF2Ykh1bkjYgpfkfWJoqhDPrzIbvw_pHhsQ'
	},
	{
		url: 'https://i.picsum.photos/id/1055/200/200.jpg?hmac=23b3LoSYozZgCujiEcPGpgSvTaW35YghR4_EK2eJU9w'
	},
	{
		url: 'https://i.picsum.photos/id/550/200/200.jpg?hmac=1cWp9LPVpvHr7sCXaCMeMnsIHNCLfqPwnIkIA0GUzcM'
	},
	{
		url: 'https://i.picsum.photos/id/393/200/200.jpg?hmac=1cxlqmpLdS274Utq1s9nhhevcTHNffgX3_0tnKc4Kgw'
	},
	{
		url: 'https://i.picsum.photos/id/320/200/200.jpg?hmac=Syj43GcEEip7sKg4XO0j94Ot5UbBIA84E_x2PzRo1ow'
	}
];

class InstagramFeed extends Component {
	constructor(props) {
    super(props);

    this.state = {
			feeds: null,
			resized: false
		};

		this.toggleResize = this.toggleResize.bind(this);
  };

	componentDidMount() {
		this.props.getInstagramFeed();
		console.log(this.props.instagramFeeds)
		//this.setState({ feeds: DUMMY_DATA	});

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
		return (
			<React.Fragment>
				<Wrap>
					<Heading title="INSTAGRAM FEED" ctaText="FOLLOW US" ctaUrl={"https://www.instagram.com/accounts/login/?next=%2Ftalentstatus%2F&source=follow"} ctaIcon={faInstagram} ctaStyles={styles.ctaStyles} customStyles={styles.heading} centered/>
				</Wrap>
				{this.props.instagramFeeds && <Feed items={this.props.instagramFeeds} grid="col-feed" />}
			</React.Fragment>
		)
	}
}

const styles = {
	ctaStyles: {
		background: 'linear-gradient(45deg, #405de6 0%, #fd1d1d 100%)'
	},
	heading: {
		marginBottom: '36px'
	}
}

//export default InstagramFeed;

const mapStateToProps = (state) => {
	const { instagramFeeds } = state.instaFeed;
	return { instagramFeeds };
  };

export default connect(mapStateToProps, { getInstagramFeed })(InstagramFeed);