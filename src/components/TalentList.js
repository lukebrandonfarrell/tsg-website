import React from 'react';
import TalentBox from '../components/TalentBox';
import defaultPhoto from '../default-photo.png';

const TalentList = ({ talent }) => {
  if(talent){
    return talent.map((element) => {
      let photo = defaultPhoto;
      if(element.photo_primary[0]) { photo = element.photo_primary[0].source; }
      return (
        <div key={element.id} className="col span_1_of_4">
          <TalentBox
            id={element.id}
            firstName={element.first_name}
            lastName={element.last_name}
            imageUrl={photo}
            icons />
        </div>
      );
    });
  } else {
    return <h1> No Talent </h1>;
  }
};

export default TalentList;
