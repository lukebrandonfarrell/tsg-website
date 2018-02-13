import React from 'react';
import { reduxForm } from 'redux-form';

import { TextBox, Button } from './components';

const LoginForm = (props) => {
  const { handleSubmit, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextBox
        label="Email:"
        id="email"
        placeholder="example@example.com"/>

      <TextBox
        label="Password:"
        id="password"
        placeholder="**********"
        type="password" />

      <Button type="submit" disabled={submitting}>Login</Button>
    </form>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
