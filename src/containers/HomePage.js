import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PageTemplate from './PageTemplate';
import ContainerWithBackground from '../components/ContainerWithBackground';
import ContainerOverlay from '../components/ContainerOverlay';
import ContentBoxes from '../components/ContentBoxes';
import Title from '../components/Title';
import HugeTitle from '../components/HugeTitle';
import TalentReel from '../components/TalentReel';
import backgroundImage from '../resources/backgrounds/home.jpg';
import Wrapper from '../components/Wrapper';
import Space from '../components/Space';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <ContainerWithBackground
            imageUrl={backgroundImage}>
            <ContainerOverlay
              opacity='0.3'
              color='rgba(0, 0, 0, 0.4)'>
              <Wrapper verticalPadding>
                <HugeTitle>
                  <MediaQuery minDeviceWidth={1260}>
                    REPRESENTING THE BEST OF BRITISH TALENT
                  </MediaQuery>
                  
                  <MediaQuery maxDeviceWidth={900}>
                    THE BEST OF BRITISH TALENT
                  </MediaQuery>
                </HugeTitle>
              </Wrapper>
            </ContainerOverlay>
            
            <Space vertical={50} />
            
            <MediaQuery minDeviceWidth={1260}>
              <ContainerOverlay
                opacity='0.3'
                color='rgba(31, 56, 78, 0.6)'>
                <Wrapper verticalPadding>
                  <div className="section group">
                    <div className="col span_1_of_2">
                      <ContentBoxes>
                        <Title label='about us' />
                        <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        TSG is an agency representing clients across all forms of the industry, including TV, film, theatre and commercials. We pride ourselves on discovering unique and fresh talent.
                        Formed in 2016 by a team with a wealth of experience in all areas of the industry. <br /><br /> We strived in building an agency dedicated to finding work for our clients and nurturing emerging talent.
                        </p>
                      </ContentBoxes>
                    </div>

                    <div className="col span_1_of_2">
                      <ContentBoxes>
                        <Title label='representation1' />
                        <p style={{ textAlign: 'justify', fontSize: '17px' }}>IIf you are seeking representation, please send your photo, CV, a short covering email and a link to a showreel or example of your work to agent@tsgcasting.com</p>
                      </ContentBoxes>
                    </div>
                  </div>
                </Wrapper>
              </ContainerOverlay>
            </MediaQuery>
            
            <MediaQuery maxDeviceWidth={950}>
              <div style={{ backgroundColor: 'white', padding: '12px 8px' }}>
                <Wrapper>
                  <Title label='about us' />
                  <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                TSG is an agency representing clients across all forms of the industry, including TV, film, theatre and commercials. We pride ourselves on discovering unique and fresh talent.
                Formed in 2016 by a team with a wealth of experience in all areas of the industry. <br /><br /> We strived in building an agency dedicated to finding work for our clients and nurturing emerging talent.
                  </p>
                </Wrapper>
              </div>
              
              <div style={{ backgroundColor: 'white', padding: '12px 8px' }}>
                <Wrapper>
                  <Title label='representation1' />
                  <p style={{ textAlign: 'justify', fontSize: '17px' }}>If you are seeking representation, please send your photo, CV, a short covering email and a link to a showreel or example of your work to agent@tsgcasting.com</p>
                </Wrapper>
              </div>
            </MediaQuery>
          </ContainerWithBackground>
          <TalentReel />
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
