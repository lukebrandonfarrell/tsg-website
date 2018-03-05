import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Persist } from 'react-persist';

import { connect } from 'react-redux';
import { setToken, setUser } from './actions';

import HomePage from './containers/HomePage';
import ClientsPage from './containers/ClientsPage';
import ContactPage from './containers/ContactPage';
import AdminLoginPage from './containers/AdminLoginPage';
import ProfilePage from './containers/ProfilePage';

import LightboxPage from './containers/LightboxPage';
import LightboxViewPage from './containers/LightboxViewPage';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="routes">
          <Route exact path='/' component={HomePage}/>
          <Route path="/clients" component={ClientsPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/talent/:id" component={ProfilePage}/>

          <Switch>
            <Route exact path="/lightbox" component={LightboxPage} />
            <Route path="/lightbox/:id" component={LightboxViewPage} />
          </Switch>
          
          <Route path="/admin" component={AdminLoginPage}/>

          {/*<Persist
            name="user"
            data={this.props.auth}
            debounce={0}
            onMount={(data) => this.props.setUser(data)}
          />*/}
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
