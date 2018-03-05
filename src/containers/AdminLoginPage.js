import React, { Component } from 'react';

import { connect } from 'react-redux';
import { login } from '../actions';

import LoginForm from '../components/forms/LoginForm';
import Title from '../components/Title';
import ContainerWithBackground from '../components/ContainerWithBackground';

import backgroundImage from '../resources/backgrounds/login.jpg';
import '../App.css';

class LoginPage extends Component {
  componentDidUpdate() {
    if(this.props.token){
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <ContainerWithBackground
          imageUrl={backgroundImage}
          height="100%"
          width="100%"
          style={ styles.containerStyle }>

          <div className='x-narrow-wrapper'>
            <div style={ styles.formStyle }>
              <Title label='Login' />
              <LoginForm onSubmit={(data) => this.props.login(data)} />
            </div>
          </div>
        </ContainerWithBackground>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStyle: {
    width: '100%',
    padding: '25px',
    backgroundColor: 'white',
    display: 'inline-block',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    borderRadius: '5px',
  }
};

const mapStateToProps = (state) => {
  const { token } = state.auth;

  return { token };
};

export default connect(mapStateToProps, { login })(LoginPage);
