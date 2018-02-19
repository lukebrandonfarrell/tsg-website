import React from 'react';
import { reduxForm } from 'redux-form';

import { TextBox, Button } from './components';

class DetailsForm extends React.Component {
  render(){
    const { handleSubmit, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <TextBox
          label="First Name:"
          id="first_name"
        />
        <TextBox
          label="Last Name:"
          id="last_name"
        />

        <fieldset name="group_gender">
          <div>
            <label>
              <input type="radio" name="gender" value="Male" checked="&quot;checked&quot;" />Male
            </label>
          </div>
          <div>
            <label><input type="radio" name="gender" value="Female" />Female</label>
          </div>
        </fieldset>

        <TextBox
          label="Phone number:"
          id="phone"
        />
        <TextBox
          label="Location:"
          id="location"
        />
        <TextBox
          label="Website:"
          id="website"
        />
        <TextBox
          label="Spotlight:"
          id="spotlight"
        />

        <Button type="submit" disabled={submitting}>Save</Button>
      </form>
    );
  }
}

export default reduxForm({ form: 'details' })(DetailsForm);
