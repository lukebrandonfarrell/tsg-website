import React from 'react';
import PageTemplate from './PageTemplate';
import Title from '../components/Title';

class MediaPage extends React.Component {
  render() {
    return (
      <div className="root">
        <PageTemplate>
          <div className="narrow-wrapper p-top30 p-bottom30">
            <Title label='Media' />
          </div>
        </PageTemplate>
      </div>
    );
  }
}

export default MediaPage;
