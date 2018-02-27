import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

import LoginForm from '../components/forms/LoginForm';
import Title from '../components/Title';
import ContainerWithBackground from '../components/ContainerWithBackground';

import PageTemplate from './PageTemplate';

import backgroundImage from '../resources/backgrounds/login.jpg';
import '../App.css';

class LoginPage extends Component {
  componentDidUpdate() {
    if(this.props.token){
      this.props.history.push('/details');
    }
  }

  render() {
    return (
      <div className="root">
        <ContainerWithBackground
          imageUrl={backgroundImage}
          height="100%">
          <PageTemplate>
            <div className="narrow-wrapper p-top30 p-bottom30">
              <div style={ styles.formStyle }>
                <Title label='Login' />
                <LoginForm onSubmit={(data) => this.props.login(data)} />
              </div>
            </div>
          </PageTemplate>
        </ContainerWithBackground>
      </div>
    );
  }
}

const styles = {
  formStyle: {
    padding: '25px',
    backgroundColor: 'white',
    borderRadius: '5px',
  }
};

const mapStateToProps = (state) => {
  const { token } = state.auth;

  return { token };
};

export default connect(mapStateToProps, { login })(LoginPage);
