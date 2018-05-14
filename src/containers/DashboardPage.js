import React from 'react';
import { connect } from 'react-redux';
import { Line, Pie } from 'react-chartjs-2';

import PageTemplate from './PageTemplate';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Lightbox from '../components/Lightbox';
import Wrapper from '../components/Wrapper';

class DashboardPage extends React.Component {
  componentDidMount() {

  }

  render() {
    const payingChart = {
      labels: ['Paying','Non-paying'],
      datasets: [{
    		data: [300, 50],
    		backgroundColor: ['#2B57AC','#a6a6a6'],
    		hoverBackgroundColor: ['#1d4796','#878484']
    	}]
    };

    const userConversionChart = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Views', fill: false, borderColor: '#a6a6a6', backgroundColor: '#a6a6a6',
          borderJoinStyle: 'round', pointBackgroundColor: '#fff', pointBorderWidth: 1,
          pointHoverRadius: 5, pointHoverBackgroundColor: '#a6a6a6', pointHoverBorderWidth: 2,
          pointRadius: 1, pointHitRadius: 10, data: [65, 59, 80, 81, 56, 55, 400]
        },
        {
          label: 'Sign-ups', fill: false, borderColor: '#2B57AC', backgroundColor: '#2B57AC',
          borderJoinStyle: 'round', pointBackgroundColor: '#fff', pointBorderWidth: 1,
          pointHoverRadius: 5, pointHoverBackgroundColor: '#2B57AC', pointHoverBorderWidth: 2,
          pointRadius: 1, pointHitRadius: 10, data: [25, 19, 10, 11, 16, 15, 10]
        },
        {
          label: 'Payments', fill: false, borderColor: '#ac2b2b', backgroundColor: '#ac2b2b',
          borderJoinStyle: 'round', pointBackgroundColor: '#fff', pointBorderWidth: 1,
          pointHoverRadius: 5, pointHoverBackgroundColor: '#ac2b2b', pointHoverBorderWidth: 2,
          pointRadius: 1, pointHitRadius: 10, data: [5, 9, 8, 8, 6, 5, 4]
        },
      ]
    };

    return (
      <div className="root">
        <PageTemplate>
          <Wrapper verticalPadding>
            <Title label='Dashboard' />
            <p>Track the performance.</p>

            <div className="section group">
              <div className='col span_1_of_2'>
                <Subtitle>User conversion rate</Subtitle>
                <Line data={ userConversionChart } />
              </div>

              <div className='col span_1_of_2'>
                <Subtitle>Paying / Non-paying</Subtitle>
                <Pie data={ payingChart } />
              </div>
            </div>
          </Wrapper>
        </PageTemplate>
      </div>
    );
  }
}

export default DashboardPage;
