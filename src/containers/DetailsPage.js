import React from 'react';
import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import DetailsForm from '../components/forms/DetailsForm';

class DetailsPage extends React.Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="narrow-wrapper p-top30 p-bottom30">
            <Title label='Details' />
            <DetailsForm />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default DetailsPage;
