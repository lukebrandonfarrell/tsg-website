import React from 'react';
import DropdownButton from './DropdownButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Float from '../components/Float';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLightbulb, faCommentAlt, faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { apiInstance } from '../config/env.js';

class AdminBar extends React.Component {
  state = {
    lightboxSelectedOption: '',
    smsboxSelectedOption: '',
    mailboxSelectedOption: '',

    lightboxes: null,
  }
  handleSelectChange = (prop, data) => {
    this.setState({ [prop]: data });
  }

  componentDidMount() {
    apiInstance.get('/users/10002/lightbox')
      .then((response) => {
        this.setState({ lightboxes: response.data.lightboxes });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderLightboxSelect(){
    const {
      adminBarSection,
      selectStyle,
      iconStyle
    } = styles;
    const { lightboxSelectedOption, lightboxes } = this.state;
    const lightboxValue = lightboxSelectedOption && lightboxSelectedOption.value;

    if(lightboxes){
      return (
        <div style={ adminBarSection }>
          <div style={ adminBarSection }>
            <FontAwesomeIcon
              icon={ faLightbulb }
              size="lg"
              style={ iconStyle } />
          </div>
          <div style={ adminBarSection }>
            <Select
              name="lightboxes-select"
              value={lightboxValue}
              onChange={(data) => this.handleSelectChange('lightboxSelectedOption', data)}
              options={lightboxes.map((element) => {
                return { value: element.title, label: element.title };
              })}
              style={ selectStyle }
            />
          </div>
        </div>
      );
    }
  }

  render(){
    const {
      adminBarStyle,
      adminBarSection,
      selectStyle,
      iconStyle
    } = styles;

    const {
      smsboxSelectedOption,
      mailboxSelectedOption
    } = this.state;
    const smsboxValue = smsboxSelectedOption && smsboxSelectedOption.value;
    const mailboxValue = mailboxSelectedOption && mailboxSelectedOption.value;

    const menuItems = [
      { link: '/dashboard', label: 'Dashboard' },
      { link: '/lightbox', label: 'Lightbox' }
    ];

    return (
      <div style={ adminBarStyle }>
        <div style={ adminBarSection }>
          <DropdownButton
            label="Admin"
            menu={ menuItems }
            buttonTextStyle={{ height: 50, paddingTop: '12px' }} />
        </div>

        { this.renderLightboxSelect() }

        <div style={ adminBarSection }>
          <FontAwesomeIcon
            icon={ faEnvelope }
            size="lg"
            style={ iconStyle } />
        </div>

        <div style={ adminBarSection }>
          <Select
            name="mailboxes-select"
            value={mailboxValue}
            onChange={(data) => this.handleSelectChange('mailboxSelectedOption', data)}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            style={ selectStyle }
          />
        </div>

        <div style={ adminBarSection }>
          <FontAwesomeIcon
            icon={ faCommentAlt }
            size="lg"
            style={ iconStyle } />
        </div>

        <div style={ adminBarSection }>
          <Select
            name="smsboxes-select"
            value={smsboxValue}
            onChange={(data) => this.handleSelectChange('smsboxSelectedOption', data)}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            style={ selectStyle }
          />
        </div>

        <Float dir="right">
          <div style={ adminBarSection }>
            <DropdownButton
              label="User ID"
              menu={ menuItems }
              buttonTextStyle={{ height: 50, paddingTop: '12px' }}
              reverseDropdownMenu />
          </div>
        </Float>
      </div>
    );
  }
}

const styles = {
  adminBarStyle: {
    height: '50px',
    borderBottom: '1px solid #CCCCCC',
    backgroundColor: 'white',
  },
  adminBarSection: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  selectStyle: {
    width: '200px',
    margin: '0px 4px',
  },
  iconStyle: {
    display: 'inline-block',
    marginLeft: '6px',
  }
};

export default AdminBar;
