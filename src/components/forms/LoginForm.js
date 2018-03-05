import React from 'react';
import { reduxForm } from 'redux-form';

import { TextBox, Button } from './components';

import Space from '../Space';

const LoginForm = (props) => {
  const { handleSubmit, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Space vertical="15px" />
    
      <TextBox
        label="Email:"
        id="email"
        placeholder="example@example.com"/>
      
      <Space vertical="10px" />
      
      <TextBox
        label="Password:"
        id="password"
        placeholder="**********"
        type="password" />
        
      <Space vertical="15px" />

      <Button type="submit" disabled={submitting}>Login</Button>
    </form>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
