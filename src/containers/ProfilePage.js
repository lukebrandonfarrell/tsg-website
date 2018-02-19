import React, { Component } from 'react';
import axios from 'axios';
import PageTemplate from './PageTemplate';
import TalentBox from '../components/TalentBox';
import Title from '../components/Title';
import DetailList from '../components/DetailList';
import Float from '../components/Float';
import MediaComponent from '../components/MediaComponent';
import PhysicalData from '../components/PhysicalData';
import SkillsData from '../components/SkillsData';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/fontawesome-free-regular';
import defaultPhoto from '../default-photo.png';
import '../App.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      primaryPhotoUrl: null,
      firstName: 'Talent',
      lastName: 'Status',
      age: null,
      gender: null,
      location: null,
      website: null,
      agent: null,
      photos: null,
      videos: null,
      clips: null,
      physical: null,
      skills: null,
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile(){
    const userId = this.props.match.params.id;

    axios.get(`http://localhost:8000/talent/${userId}`)
      .then((response) => {
        console.log(response);
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

    axios.get(`http://localhost:8000/user/${userId}/media/photos`)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



    axios.get(`http://localhost:8000/user/${userId}/media/photos`)
      .then((response) => {
        console.log(response);
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
      location,
      website,
      agent
    } = this.state;

    const fullName = `${firstName} ${lastName}`;

    const detailsData = [
      {key : 'Age', value : age},
      {key : 'Gender', value : gender},
      {key : 'Location', value : location},
      {key : 'Website', value : website}
    ];

    return (
      <div className="root">
        <PageTemplate>
          <div className="wrapper p-top30">
            <div className="section group">
              <div className="col span_1_of_4">
                <TalentBox
                  id="1"
                  imageUrl={ primaryPhotoUrl || defaultPhoto }
                  hideName />
              </div>

              <div className="col span_2_of_4">
                <div className="section group">
                  <Title label={ fullName } />
                  <DetailList data={detailsData} />
                </div>
              </div>

              <div className="col span_1_of_4">
                <Float dir="right">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="3x"
                    color="#676767"
                    border />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="3x"
                    color="#676767"
                    border />
                </Float>
              </div>
            </div>

            <hr />

            <div className="section group">
              <MediaComponent />
            </div>

            <div className="section group">
              <PhysicalData userId={ this.state.id } />
            </div>

            <div className="section group">
              <SkillsData userId={ this.state.id } />
            </div>
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default ProfilePage;
