import React from 'react';

import { connect } from 'react-redux';

import PageTemplate from './PageTemplate';
import TalentList from '../components/TalentList';
import Subtitle from '../components/Subtitle';
import Lightbox from '../components/Lightbox';

import { apiInstance } from '../config/env.js';

class LighboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: 'Lightbox Title',
      talent: null,
    };
  }

  componentDidMount() {
    const lightboxId = this.props.match.params.id;
    const { id } = this.props;

    if(lightboxId){
      apiInstance.get(`/users/10002/lightbox/${lightboxId}`)
        .then((response) => {
          console.log(response);
          this.setState({ talent : response.data.talent });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  renderTalent(){
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
          <div className="wrapper vertical30">
            <Subtitle>{ this.state.title }</Subtitle>

            <div className="section group">
              <TalentList talent={ this.state.talent } />
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
