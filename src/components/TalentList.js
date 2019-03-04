import React from 'react';
import TalentBox from '../components/TalentBox';
import defaultPhoto from '../default-photo.png';

const TalentList = ({ talent, lightboxId }) => {
  if(talent){
    return talent.map((element) => {
      let photo = defaultPhoto;
      if(element.photo_primary[0]) { photo = element.photo_primary[0].source; }

      //Responsiveness
      let spanClass = 'span_1_of_4';
      if (matchMedia('only screen and (max-width: 1260px)').matches){ spanClass = 'span_1_of_3'; }
      if (matchMedia('only screen and (max-width: 880px)').matches){ spanClass = 'span_1_of_2'; }
      if (matchMedia('only screen and (max-width: 550px)').matches){ spanClass = 'span_1_of_1'; }

      return (
        <div key={element.id} className={`col ${spanClass}`}>
          <TalentBox
            id={element.id}
            firstName={element.first_name}
            lastName={element.last_name}
            imageUrl={photo}
            lightbox={ element.lightbox_link ? true : false }
            selectedLigthtboxId={ lightboxId }
            lightbox_id = { lightboxId }
            icons />
        </div>
      );
    });
  } else {
    return <h1> No Talent </h1>;
  }
};

export default TalentList;
