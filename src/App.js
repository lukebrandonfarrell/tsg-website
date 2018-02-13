import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import HomePage from './containers/HomePage';
import ClientsPage from './containers/ClientsPage';
import ContactPage from './containers/ContactPage';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/home" component={HomePage} />
            <Route path="/clients" component={ClientsPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/talent/:page" component={ProfilePage}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
