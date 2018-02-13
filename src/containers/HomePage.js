import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ContainerWithBackground from '../components/ContainerWithBackground';
import ContainerOverlay from '../components/ContainerOverlay';
import ContentBoxes from '../components/ContentBoxes';
import Title from '../components/Title';
import HugeTitle from '../components/HugeTitle';
import TalentReel from '../components/TalentReel';
import backgroundImage from '../resources/backgrounds/home.jpg';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <ContainerWithBackground
            imageUrl={backgroundImage}
            height="550px">
            <ContainerOverlay
              height='90px'
              opacity='0.3'
              color='rgba(0, 0, 0, 0.4)'>
              <div className="wrapper center p-top20">
                <HugeTitle>
                  REPRESENTING THE BEST OF BRITISH TALENT
                </HugeTitle>
              </div>
            </ContainerOverlay>

            <ContainerOverlay
              height='400px'
              opacity='0.3'
              color='rgba(31, 56, 78, 0.6)'
              bottom>
              <div className="wrapper p-top40">
                <div  className="section group">
                  <div className="col span_1_of_2">
                    <ContentBoxes>
                      <Title label='aboutus' />
                      <p>.TSG is an agency representing clients across all forms of the industry, including TV, film, theatre and commercials. We pride ourselves on discovering unique and fresh talent.
                      Formed in 2016 by a team with a wealth of experience in all areas of the industry. We strived in building an agency dedicated to finding work for our clients and nurturing emerging talent.
                      </p>
                    </ContentBoxes>
                  </div>

                  <div className="col span_1_of_2">
                    <ContentBoxes>
                      <Title label='representation' />
                      <p>If you are seeking representation, please send your photo, CV, a short covering email and a link to a showreel or example of your work to agent@tsgcasting.com</p>
                    </ContentBoxes>
                  </div>
                </div>
              </div>
            </ContainerOverlay>
          </ContainerWithBackground>
          <TalentReel />
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
