import React from 'react';
import axios from 'axios';
import DetailList from './DetailList';

class PhysicalData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { physical: null };
  }

  componentDidMount() {
    const { userId } = this.props;

    axios.get(`http://localhost:8000/user/${userId}/physical`)
      .then((response) => {
        const { physical } = response.data;

        this.setState({ physical: physical });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderPhysical(){
    if(this.state.physical){
      const physicalData = this.state.physical.map((element) => {
        return { key: element.field_name, value: element.data };
      });

      return (
        <div>
          <h2>Physical</h2>
          <DetailList
            data={ physicalData }
            itemWidth="33%"
          />
        </div>
      );
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
