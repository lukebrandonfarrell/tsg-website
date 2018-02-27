import React from 'react';
import DetailList from './DetailList';
import Subtitle from './Subtitle';
import { apiInstance } from '../config/env.js';

class PhysicalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { physical: null };
  }

  componentDidMount() {
    const { userId } = this.props;

    apiInstance.get(`/users/${userId}/physical`)
      .then((response) => {
        const { physical } = response.data;

        this.setState({ physical });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderPhysical(){
    const { physical } = this.state;

    if(physical != null){
      if(physical.length){
        const physicalData = this.state.physical.map((element) => {
          return { key: element.field_name, value: element.data };
        });

        return (
          <div>
            <Subtitle>Physical</Subtitle>
            <DetailList
              data={ physicalData }
              itemWidth="33%"
            />
          </div>
        );
      }
    }

    return;
  }

  render() {
    return (
      <div>
        { this.renderPhysical() }
      </div>
    );
  }
}

export default PhysicalData;
