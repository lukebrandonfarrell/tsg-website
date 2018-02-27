import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Persist } from 'react-persist';

import { connect } from 'react-redux';
import { setToken, setUser } from './actions';

import HomePage from './containers/HomePage';
import ClientsPage from './containers/ClientsPage';
import ContactPage from './containers/ContactPage';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';

import DetailsPage from './containers/DetailsPage';
import PhysicalPage from './containers/PhysicalPage';
import MediaPage from './containers/MediaPage';
import SkillsPage from './containers/SkillsPage';
import CreditsPage from './containers/CreditsPage';
import LightboxPage from './containers/LightboxPage';
import LightboxViewPage from './containers/LightboxViewPage';

class Router extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <BrowserRouter basename="/">
        <div>
          <Route exact path='/' component={HomePage}/>
          <Route path="/clients" component={ClientsPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/talent/:id" component={ProfilePage}/>

          <Route path="/details" component={DetailsPage} />
          <Route path="/physical" component={PhysicalPage} />
          <Route path="/media" component={MediaPage} />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/credits" component={CreditsPage} />
          <Switch>
            <Route exact path="/lightbox" component={LightboxPage} />
            <Route path="/lightbox/:id" component={LightboxViewPage} />
          </Switch>

          <Persist
            name="user"
            data={this.props.auth}
            debounce={0}
            onMount={(data) => this.props.setUser(data)}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const auth = state.auth;

  return { auth };
};

export default connect(mapStateToProps, { setToken, setUser })(Router);
