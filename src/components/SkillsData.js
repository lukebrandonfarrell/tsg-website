import React from 'react';
import Subtitle from './Subtitle';
import { apiInstance } from '../config/env.js';

class SkillsData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { skills: null };
  }

  componentDidMount() {
    const { userId } = this.props;

    apiInstance.get(`/users/${userId}/skills`)
      .then((response) => {
        const { skills } = response.data;

        this.setState({ skills });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderSkills(){
    const { skills } = this.state;

    if(skills != null){
      if(skills.length){
        let skillsGroupedByCategory = {};

        skills.map((element) => {
          if(!skillsGroupedByCategory[element.category]){
            skillsGroupedByCategory[element.category] = new Array();
          }

          skillsGroupedByCategory[element.category].push(element.skill);
        });

        let jsx = [];
        jsx.push(<Subtitle textColor = {{color: 'black',fontWeight: 'bold'}} key="subtitle">Skills</Subtitle>);

        Object.keys(skillsGroupedByCategory).forEach(function( key ) {
          const groupedSkills = skillsGroupedByCategory[key];

          jsx.push(
            <div key={ key }>
              <h4>{ key }</h4>
              <p>{ groupedSkills.join(', ') }</p>
            </div>
          );
        });

        return jsx;
      }
    }
  }

  render() {
    return (
      <div>
        { this.renderSkills() }
      </div>
    );
  }
}

export default SkillsData;
