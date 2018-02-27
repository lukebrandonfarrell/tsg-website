import React from 'react';

import { connect } from 'react-redux';

import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Lightbox from '../components/Lightbox';

import { apiInstance } from '../config/env.js';

class LighboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxes: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps;

    if(id){
      apiInstance.get(`/users/${id}/lightbox`)
        .then((response) => {
          console.log(response);
          this.setState({ lightboxes: response.data.lightboxes });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  renderLightboxes(){
    const { lightboxes } = this.state;

    if(lightboxes){
      return lightboxes.map((element, i) => {
        return (
          <div key={i} className="col span_2_of_4">
            <Lightbox id={ element.id } title={ element.title } />
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="narrow-wrapper p-top30 p-bottom30">
            <Title label='Lightbox' />
            <p>Your lightbox will allow you to favorite other users profiles and share them with the world.</p>

            <Subtitle>Lightboxes</Subtitle>

            <div className="section group">
              { this.renderLightboxes() }
            </div>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { id } = state.auth;

  return { id };
};

export default connect(mapStateToProps, null)(LighboxPage);
