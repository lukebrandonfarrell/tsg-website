import React, { Component } from 'react';
import queryString from 'query-string';
import PageTemplate from './PageTemplate';
import TalentBox from '../components/TalentBox';
import Title from '../components/Title';
import DetailList from '../components/DetailList';
import MediaComponent from '../components/MediaComponent';
import PhysicalData from '../components/PhysicalData';
import SkillsData from '../components/SkillsData';
import CreditsData from '../components/CreditsData';
import Wrapper from '../components/Wrapper';
import { apiInstance } from '../config/env.js';
import pivotData from '../resources/pivot';
import defaultPhoto from '../default-photo.png';
import '../App.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    const params = queryString.parse(this.props.location.search);
    const { member_id } = params;

    const oldId = this.pivot(member_id);

    this.state = {
      id: oldId || this.props.match.params.id,
      primaryPhotoUrl: null,
      firstName: 'Talent',
      lastName: 'Member',
      age: null,
      gender: null,
      location: null,
      photos: null,
      videos: null,
      clips: null,
      physical: null,
      skills: null,
    };
  }

  //Pivot member_id to id
  pivot(id){
    if(!id){ return null; }

    for(let i=0; i<pivotData.length; i++){
      if(id === pivotData[i].user_id){
        return pivotData[i].id;
      }
    }
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile(){
    const userId = this.state.id;

    apiInstance.get(`/users/${userId}`)
      .then((response) => {
        const {
          photo_primary,
          first_name,
          last_name,
          date_of_birth,
          gender,
          location,
          website,
          agent,
        } = response.data;

        const { source } = photo_primary[0];

        this.setState({
          primaryPhotoUrl: source,
          firstName: first_name,
          lastName: last_name,
          age: date_of_birth,
          gender: gender,
          location: location,
          website: website,
          agent: agent,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {
      primaryPhotoUrl,
      firstName,
      lastName,
      age,
      gender,
      location
    } = this.state;

    const fullName = `${firstName} ${lastName}`;

    const detailsData = [
      {key : 'Age', value : age},
      {key : 'Gender', value : gender},
      {key : 'Location', value : location},
    ];

    //Responsiveness
    let profilePictureSpanClass = 'span_1_of_4'; let detailsSpanClass = 'span_3_of_4';
    if (matchMedia('only screen and (max-width: 880px)').matches){
      profilePictureSpanClass = 'span_2_of_4';
      detailsSpanClass = 'span_2_of_4';
    }
    if (matchMedia('only screen and (max-width: 550px)').matches){
      profilePictureSpanClass = 'span_1_of_1';
      detailsSpanClass = 'span_1_of_1';
    }

    return (
      <div className="root">
        <PageTemplate>
          <Wrapper verticalPadding>
            <div className="section group">
              <div className={`col ${profilePictureSpanClass}`}>
                <TalentBox
                  id="1"
                  imageUrl={ primaryPhotoUrl || defaultPhoto }
                  hideName />
                <div class="print_options">
                  <a href={`https://talentstatus.com/api/print_card/${ this.state.id }`}>Print card</a>
                  <a style={{ float: 'right'}} href={`https://talentstatus.com/api/print_cv/${ this.state.id }`}>Print CV</a>
                </div>
              </div>

              <div className={`col ${detailsSpanClass}`}>
                <div className="section group">
                  <Title label={ fullName } />
                  <DetailList data={detailsData} />
                </div>
              </div>
            </div>

            
            <hr />

            <div className="section group">
              <MediaComponent userId={ this.state.id } />
            </div>

            <div className="section group">
              <PhysicalData userId={ this.state.id } />
            </div>

            <div className="section group">
              <CreditsData userId={ this.state.id } />
            </div>

            <div className="section group">
              <SkillsData userId={ this.state.id } />
            </div>
          </Wrapper>
        </PageTemplate>
      </div>
    );
  }
}

export default ProfilePage;
