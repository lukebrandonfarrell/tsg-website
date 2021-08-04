import React from 'react';
import { connect } from 'react-redux';

import PageTemplate from './PageTemplate';
import TalentList from '../components/TalentList';
import Subtitle from '../components/Subtitle';
import Lightbox from '../components/Lightbox';
import Wrapper from '../components/Wrapper';

import { apiInstance } from '../config/env.js';

class LighboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Lightbox Title',
      talent: null,
      lightboxId: this.props.match.params.id,
      loading: false,
    };
  }

  componentDidMount() {
    const lightboxId = this.props.match.params.id;
    const { user_id } = this.props;

    if(lightboxId){
      this.setState({...this.state, loading: true});
      apiInstance.get(`/users/${user_id}/lightbox/${lightboxId}`)
        .then((response) => {
          this.setState({ loading: false, title: response.data.title, talent : response.data.talent, editable : response.data.editable });
        })
        .catch((error) => {
          console.log(error);
          this.setState({...this.state, loading: false})
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
      <div className="root" style={{backgroundColor:'white'}}>
        <PageTemplate>
          <Wrapper verticalPadding>
            <Subtitle>{ this.state.title }</Subtitle>
            <div className="section group">
              <TalentList loading={this.state.loading} editable={ this.state.editable } talent={ this.state.talent } lightboxId={ this.state.lightboxId } />
            </div>
          </Wrapper>
        </PageTemplate>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { id, user_id } = state.auth;

  return { id, user_id };
};

export default connect(mapStateToProps, null)(LighboxPage);
