import React, { Component } from 'react';

import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import Row from '../components/Row';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/fontawesome-free-solid';
import '../App.css';
import logo from '../logo.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="wrapper stretch-to-bottom p-top30">
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
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
