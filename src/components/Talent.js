import React, { Component } from 'react';

import Wrap from './Wrap';
import Heading from './shared/Heading';
import Reel from './Reel';
import { debounce } from '../helpers/Debounce';

const DUMMY_DATA = [

	{
		url:'/images/youngtalents/Shea_Wall.jpeg',
		name: 'Shea Wall',
		age: '15 YEARS',
		title: '',
		path: 'https://www.spotlight.com/3419-0190-9649'
	},
	{
		url:'/images/youngtalents/IsaacHighams.jpg',
		name: 'Isaac Highams',
		age: '9 YEARS',
		title: '',
		path: 'https://www.spotlight.com/1178-0160-4065'
	},
	{
		url:'/images/youngtalents/MiaHeadshot2.jpg',
		name: 'Mia-Rose Lightfoot',
		age: '11 YEARS',
		title: '',
		path: 'https://www.spotlight.com/9419-7869-4075'
	},
	{
		url:'/images/youngtalents/Nyemah_Bentley.jpg',
		name: 'Nyemah Bentley',
		age: '7 YEARS',
		title: '',
		path: 'https://www.spotlight.com/4377-5645-2589'
	},
	{
		url:'/images/youngtalents/BabyNoah.jpg',
		name: 'Baby Noah',
		age: '20 MONTHS',
		title: '',
		path: '/'
	}

]

class Talent extends Component {
	constructor(props) {
    super(props);

    this.state = {
			talents: null,
			resized: false
		};

		this.toggleResize = this.toggleResize.bind(this);
  };

	componentDidMount() {
		this.setState({ talents: DUMMY_DATA });

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
					<Heading title="YOUNG TALENT" centered />
				</Wrap>
				{this.state.talents && <Reel items={this.state.talents}></Reel>}
			</React.Fragment>
		);
	};
};

export default Talent;