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
          return { key: element.field_name.replace('-', ' '), value: element.data.replace(';', element.field_seperator) };
        });

        //Responsiveness
        let width = '33%';
        if (matchMedia('only screen and (max-width: 1260px)').matches){ width = '50%'; }
        if (matchMedia('only screen and (max-width: 880px)').matches){ width = '100%'; }

        return (
          <div className="physical_details">
            <Subtitle textColor = {{color: 'black',fontWeight: 'bold'}}>Physical</Subtitle>
            <DetailList
              data={ physicalData }
              itemWidth={width}
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
