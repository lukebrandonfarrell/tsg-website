import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

import LoginForm from '../components/forms/LoginForm';
import Title from '../components/Title';

import PageTemplate from './PageTemplate';

import '../App.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="narrow-wrapper">
            <Title label='Login' />
            <LoginForm onSubmit={(data) => this.props.login(data)} />      
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
