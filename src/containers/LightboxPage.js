import React from 'react';
import { connect } from 'react-redux';

import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Lightbox from '../components/Lightbox';
import Wrapper from '../components/Wrapper';

import { apiInstance } from '../config/env.js';

class LighboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxes: null,
    };
  }

  componentDidMount() {
    const { id } = this.props;

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
          <div key={i} className="col span_1_of_3">
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
          <Wrapper verticalPadding>
            <Title label='Lightbox' />
            <p>Your lightbox will allow you to favorite other users profiles and share them with the world.</p>

            <Subtitle>Lightboxes</Subtitle>

            <div className="section group">
              { this.renderLightboxes() }
            </div>
          </Wrapper>
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
