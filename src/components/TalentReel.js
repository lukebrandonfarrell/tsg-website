import React from 'react';
import TalentBox from './TalentBox';
import { apiInstance } from '../config/env.js';
import defaultPhoto from '../default-photo.png';

class TalentReel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    apiInstance.get('/users?type=featured')
      .then((response) => {
        this.setState({ users : response.data.talent });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderReel(){
    const { users } = this.state;

    if(users){
      return users.map((element, i) => {
        const photo = element.photo_primary[0];

        if(photo){
          return (
            <div key={i} style={styles.reelPhotoStyle}>
              <TalentBox
                id={ element.id }
                imageUrl={ photo.source }
                hideName />
            </div>
          );
        }
      });
    }
  }

  render(){
    return (
      <div style={ styles.reelStyle }>
        { this.renderReel() }
      </div>
    );
  }
}

const styles = {
  reelStyle: {
    width: '100%',
    overflow:'hidden',
    whiteSpace: 'nowrap',
  },
  reelPhotoStyle: {
    width: '12%',
    display: 'inline-block',
  }
};

export default TalentReel;
