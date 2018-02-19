import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setToken } from './actions';

import HomePage from './containers/HomePage';
import ClientsPage from './containers/ClientsPage';
import ContactPage from './containers/ContactPage';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';

import DetailsPage from './containers/DetailsPage';

class Router extends Component {
  componentWillMount() {
    let token = localStorage.getItem('token');

    if(token){
      this.props.setToken(token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={HomePage} />
          <Route path="/clients" component={ClientsPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/talent/:id" component={ProfilePage}/>

          <Route path="/details" component={DetailsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { setToken })(Router);
