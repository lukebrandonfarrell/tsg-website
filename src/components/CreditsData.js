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
    const { creditsContainerStyle, creditsRowStyle } = styles;

    if(credits != null){
      if(credits.length){
        const creditsJSX = credits.map((element) => {
          return (
            <div key={ element.id } style={ creditsRowStyle }>
              { element.value }
            </div>
          );
        });
        
        return (
          <div>
            <Subtitle>Credits</Subtitle>
            <div style={creditsContainerStyle}>
              { creditsJSX }
            </div>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        { this.renderCredits() }
      </div>
    );
  }
}

const styles = {
  creditsContainerStyle : {
    width: '100%',
    height: '250px',
    backgroundColor: 'white',
    borderRadius: '5px',
    overflow: 'scroll',
  },
  creditsRowStyle: {
    fontSize: '14px',
    padding: '10px 14px',
    borderBottom: '1px solid #BCBCBC',
  }
};

export default CreditsData;
