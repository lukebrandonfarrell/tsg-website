import React from 'react';
var ReactMenuAim = require('react-menu-aim');

const AdminBar = (props) => {
  const {
    adminBarStyle,
    menuStyle,
    subMenuStyle,
    subMenuItemStyle
  } = styles;

  return (
    <div style={ adminBarStyle }>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item" >Menu Item 1</li>
          <li className="menu-item" >Menu Item 2</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  adminBarStyle: {
    height: '40px',
    borderBottom: '1px solid #CCCCCC',
    backgroundColor: 'white',
  },
  menuStyle: {
    height: '40px',
    margin: '0px',
    width: '10%',
    padding: '10px 15px',
  },
  subMenuStyle: {
    listStyle: 'none',
  },
  subMenuItemStyle: {
    listStyle: 'none',
    marginTop: '20px',
  }
};

export default AdminBar;
