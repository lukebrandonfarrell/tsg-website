import React, { Component } from 'react';
import axios from 'react-axios';
import querystring from 'query-string';

import PageTemplate from './PageTemplate';
import TalentList from '../components/TalentList';
import Title from '../components/Title';
import Paginator from '../components/Paginator';

import { apiInstance } from '../config/env.js';

import '../App.css';
import '../Grid.css';

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

    apiInstance.get(`/users?page=${page}&type=tsg`)
      .then((response) => {
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

  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="wrapper p-top30">
            <Title label='Clients' />
            <div className="section group">
              <TalentList talent={ this.state.talent } />
            </div>
            <Paginator url='/clients' page={this.state.page} count={this.state.talentCount} />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default HomePage;
