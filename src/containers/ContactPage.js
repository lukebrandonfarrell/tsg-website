import React, { Component } from 'react';

import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import Row from '../components/Row';
import Wrapper from '../components/Wrapper';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="root" style={{backgroundColor:'white'}}>
        <PageTemplate>
          <Wrapper verticalPadding>
            <Title label='Contact' />
            <div className="section group">
              <p>Feel free to contact us if you have any queries</p>
              <div>
                <Row>
                  <FontAwesomeIcon icon={faPhone}/>
                  <p>0208 611 2763</p>
                </Row>
                <Row>
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <p>info@tsgcasting.com</p>
                </Row>
                <Row>
                  <FontAwesomeIcon icon={faMapMarker}/>
                  <p>Office 7, 35-37 Ludgate Hill, London, EC4M 7JN</p>
                </Row>
              </div>
            </div>
          </Wrapper>
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
