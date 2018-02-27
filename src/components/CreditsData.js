import React from 'react';
import DetailList from './DetailList';
import Subtitle from './Subtitle';
import { apiInstance } from '../config/env.js';

class CreditsData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { credits: null };
  }

  componentDidMount() {
    const { userId } = this.props;

    apiInstance.get(`/users/${userId}/credits`)
      .then((response) => {
        const { credits } = response.data;

        this.setState({ credits });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderCredits(){
    const { credits } = this.state;

    if(credits != null){
      if(credits.length){
        return (
          <div>

          </div>
        );
      }
    }

    return;
  }

  render() {
    return (
      <div>
        { this.renderCredits() }
      </div>
    );
  }
}

export default CreditsData;
