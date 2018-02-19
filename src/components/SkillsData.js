import React from 'react';
import axios from 'axios';
import DetailList from './DetailList';

class SkillsData extends React.Component {
  constructor(props) {
    super(props);

    this.state = { skills: null };
  }

  componentDidMount() {
    const { userId } = this.props;

    axios.get(`http://localhost:8000/user/${userId}/skills`)
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

    if(skills){
      let skillsGroupedByCategory = [];

      skills.map((element) => {
        if(!skillsGroupedByCategory[element.category]){
          skillsGroupedByCategory[element.category] = new Array();
        }

        skillsGroupedByCategory[element.category].push(element.skill);
      });
      console.log(skillsGroupedByCategory);
      for(let i=0; i<skillsGroupedByCategory.length; i++){
        console.log(skillsGroupedByCategory);
      }

      skillsGroupedByCategory.map((element, i) => {
        console.log(element);
        return (
          <div key={i}>
            <h2></h2>

          </div>
        );
      });
    }

    return;
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
