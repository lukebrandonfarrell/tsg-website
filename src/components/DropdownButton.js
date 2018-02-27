import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };
  }

  renderMenu(){
    const { menu, reverseDropdownMenu } = this.props;

    if(this.state.dropdown && menu){
      const { activeStyle, dropdownMenu, dropdownMenuButton, dropdownMenuButtonText } = styles;

      const menuDirection = reverseDropdownMenu ? { right: '0px' } : { left: '0px' };

      return (
        <ul style={{
          ...dropdownMenu,
          ...menuDirection
        }}>
          {
            menu.map((element) => {
              return (
                <NavLink key={element.link} to={element.link} style={ dropdownMenuButton } activeStyle={ activeStyle }>
                  <li style={ dropdownMenuButtonText }>
                    { element.label }
                  </li>
                </NavLink>
              );
            })
          }
        </ul>
      );
    }
  }

  render() {
    const { buttonStyle, pStyle, iconStyle } = styles;

    return (
      <div
        style={{ ...buttonStyle, ...this.props.buttonContainerStyle }}
        onClick={() => this.setState({ dropdown : !this.state.dropdown })}>
        <p style={{ ...pStyle, ...this.props.buttonTextStyle }}>
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
    cursor: 'pointer',
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
    position: 'absolute',
    top: '100%',
    zIndex: '1000',
    float: 'left',
    width: '250px',
    padding: '5px 0',
    margin: '0px',
    listStyle: 'none',
    fontSize: '14px',
    textAlign: 'left',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
    backgroundClip: 'padding-box',
  },
  dropdownMenuButton: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'left',
    boxSizing: 'border-box',
    textDecoration: 'none',
    color: '#474747',
  },
  dropdownMenuButtonText: {
    padding: '10px 15px',
    fontSize: '22px',
  }
};

export default Radium(DropdownButton);
