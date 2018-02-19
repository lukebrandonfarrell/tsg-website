import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

class DropdownButton extends React.Component {
  renderMenu(){
    const { activeStyle, dropdownMenu, dropdownMenuButton } = styles;

    return (
      <ul style={ dropdownMenu }>
        <li>
          <NavLink to='/details' style={ dropdownMenuButton } activeStyle={ activeStyle }>
          Label
          </NavLink>
        </li>
      </ul>
    );
  }

  render() {
    const { buttonStyle, pStyle, iconStyle } = styles;

    return (
      <div to={ this.props.link } style={ buttonStyle }>
        <p style={ pStyle }>
          { this.props.label }
          <FontAwesomeIcon
            icon={ faChevronDown }
            size="xs"
            style={ iconStyle } />
        </p>

        { this.renderMenu() }
      </div>
    );
  }
}

var styles = {
  buttonStyle: {
    width: '120px',
    display: 'inline-block',
    color: '#474747',
    textAlign: 'center',
    textDecoration: 'none',
    position: 'relative',
  },
  iconStyle : {
    marginLeft: 5,
  },
  activeStyle: {
    color: 'white',
    backgroundColor: '#30A4DC',
  },
  pStyle: {
    margin: '0px',
    height: '56px',
    fontSize: '22px',
    fontWeight: '300',
    paddingTop: '14px',
    boxSizing: 'border-box',

    ':hover': {
      background: '#DFDFDF',
    }
  },
  dropdownMenu: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: '1000',
    float: 'left',
    minWidth: '160px',
    padding: '5px 0',
    margin: '2px 0 0',
    listStyle: 'none',
    fontSize: '14px',
    textAlign: 'left',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
    backgroundClip: 'padding-box',
  },
  dropdownMenuButton: {
    width: '100%',
    padding: '0px 15px',
    paddingTop: '10px',
    textAlign: 'left',
  }
};

export default Radium(DropdownButton);
