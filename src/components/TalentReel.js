import React from 'react';
import TalentBox from './TalentBox';
import defaultPhoto from '../default-photo.png';

class TalentReel extends React.Component {

  renderReel(){
    //map
    const talent = [2, 2,2,2,2,2,2,2,2,2,2];

    return talent.map((element, i) => {
      return (
        <div key={i} style={styles.reelPhotoStyle}>
          <TalentBox
            id="1"
            imageUrl={ defaultPhoto }
            hideName />
        </div>
      );
    });
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
    width: '15%',
    display: 'inline-block',
  }
};

export default TalentReel;
