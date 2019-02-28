import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faHeart as outlineHeart,
  faEnvelope as outlineEnvelope,
  faComment as outlineComment
} from '@fortawesome/fontawesome-free-regular';
import {
  faHeart as solidHeart,
  faEnvelope as solidEnvelope,
  faComment as solidComment,
} from '@fortawesome/fontawesome-free-solid';

import { apiInstance } from '../config/env.js';

class TalentBox extends React.Component {
  triggerLightbox(){
    const { id } = this.props;
    const lightbox_id = this.props.selectedLigthtboxId;

    apiInstance.post(`/lightbox1/${lightbox_id}/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  renderIcons(){
    if(this.props.icons){
      const { iconsContainerStyle, iconStyle } = styles;
      const { lightbox } = this.props;
  
      return (
        <div style={ iconsContainerStyle }>
          <div style={ iconStyle } onClick={() => this.triggerLightbox()}>
            <FontAwesomeIcon color='white' size='lg' icon={ lightbox ? solidHeart : outlineHeart }/>
          </div>
          <div style={ iconStyle }><FontAwesomeIcon color='white' size='lg' icon={outlineEnvelope}/></div>
          <div style={ iconStyle }><FontAwesomeIcon color='white' size='lg' icon={outlineComment}/></div>
        </div>
      );
    }
  }

  render(){
    const { id, imageUrl } = this.props;
    const { boxStyle, tintStyle } = styles;
    const profileLink = `/talent/${id}`;

    return (
      <div>
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
        { this.renderIcons() }
      </div>
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
    overflow: 'hidden',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
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
  iconsContainerStyle: {
    textAlign: 'left',
    padding: '8px',
    backgroundColor: '#000000CC',
  },
  iconStyle: {
    display: 'inline-block',
    marginRight: '10px',
    cursor: 'pointer',
  }
};

const mapStateToProps = (state) => {
  const { selectedLigthtboxId } = state.lightbox;

  return { selectedLigthtboxId };
};

export default connect(mapStateToProps, null)(Radium(TalentBox));
