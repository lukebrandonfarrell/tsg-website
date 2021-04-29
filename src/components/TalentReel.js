import React from 'react';
import TalentBox from './TalentBox';
import { apiInstance } from '../config/env.js';

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

          let width = '250px';
          if (matchMedia('only screen and (max-width: 1260px)').matches){ width = '230px'; }
          if (matchMedia('only screen and (max-width: 880px)').matches){ width = '200px'; }
          if (matchMedia('only screen and (max-width: 550px)').matches){ width = '25%'; }

          return (
            <div key={i} style={{ ...styles.reelPhotoStyle, ...{ width } }}>
              <TalentBox
                id={ element.id }
                imageUrl={ photo.source }
                hideName />
            </div>
          );
        }else{
          return null;
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
    width: '250px',
    display: 'inline-block',
  }
};

export default TalentReel;
