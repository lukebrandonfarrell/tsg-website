import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

class TalentBox extends React.Component {

  renderName(){
    const { firstName, lastName, hideName } = this.props;
    const { nameStyle } = styles;

    if(!hideName){
      return (
        <h4 style={ nameStyle }>
          {firstName} {lastName}
        </h4>
      );
    }

    return;
  }

  render(){
    const { id, imageUrl } = this.props;
    const { boxStyle, tintStyle } = styles;
    const profileLink = `/talent/${id}`;

    return (
      <Link to={ profileLink }>
        <div style={{
          ...boxStyle,
          ...{ backgroundImage: `url(${imageUrl})`, }}
        }>
          <div style={ tintStyle }>
            { this.renderName() }
          </div>
        </div>
      </Link>
    );
  }
}

var styles = {
  boxStyle: {
    width: '100%',
    backgroundColor: 'black',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
  },
  tintStyle: {
    paddingBottom: '135%',
    transition: 'background-color 0.5s ease',
    transitionProperty: 'background-color',
    transitionDuration: '0.5s',
    transitionTimingFunction: 'ease',
    transitionDelay: 'initial',
    cursor: 'pointer',
    position: 'relative',

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    }
  },
  nameStyle: {
    width: '100%',
    height: '60px',
    margin: '0px',
    lineHeight: '60px',
    backgroundColor: 'rgba(24, 69, 96, 0.7)',
    position: 'absolute',
    bottom: '0px',
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    overflow: 'hidden !important',
  },
};

export default Radium(TalentBox);
