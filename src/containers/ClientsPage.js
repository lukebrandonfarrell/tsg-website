import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'query-string';

import PageTemplate from './PageTemplate';
import TalentBox from '../components/TalentBox';
import Title from '../components/Title';
import Paginator from '../components/Paginator';

import '../App.css';
import '../Grid.css';
import defaultPhoto from '../default-photo.png';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { talent: [], talentCount: 0, page: this.getPage() };
  }

  componentWillMount() {
    this.fetchTalent();
  }

  componentDidUpdate(prevProps, prevState) {
    //if page changes, set the page
    const page = this.getPage(this.props.location.search); //1
    const prevPage = this.getPage(prevProps.location.search);

    if(prevState.page != page && prevPage != page){
      this.fetchTalent();
    }
  }

  fetchTalent(){
    const page = this.getPage(this.props.location.search);

    axios.get(`http://localhost:8000/talent?page=${page}`)
      .then((response) => {
        console.log(response);
        const talent = response.data.talent;
        const talentCount = response.data.count;

        this.setState({ talent, talentCount, page });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getPage(query){
    var params = querystring.parse(query);
    if(params.page){
      return parseInt(params.page);
    }

    return 1;
  }

  renderTalent(page){
    return this.state.talent.map((element) => {
      let photo = defaultPhoto;
      if(element.photo_primary[0]) { photo = element.photo_primary[0].source; }
      return (
        <div key={element.id} className="col span_1_of_4">
          <TalentBox
            id={element.id}
            firstName={element.first_name}
            lastName={element.last_name}
            imageUrl={photo} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="wrapper p-top30">
            <Title label='Clients' />
            <div  className="section group">
              { this.renderTalent(this.state.page) }
            </div>
            <Paginator url='/clients' page={this.state.page} count={this.state.talentCount} />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
