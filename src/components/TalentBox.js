import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faHeart as outlineHeart,
} from '@fortawesome/fontawesome-free-regular';
import {
  faHeart as solidHeart,
  faStickyNote as solidNote
} from '@fortawesome/fontawesome-free-solid';

import { apiInstance } from '../config/env.js';
import NoteForm from '../components/forms/NoteForm';

class TalentBox extends React.Component {
  triggerLightbox(){
    const { id, lightbox_id } = this.props;

    apiInstance.delete(`/lightbox/${lightbox_id}/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  toggleNote(id){
    const note = document.getElementById(`note-${id}`);
    note.style.display = (note.style.display === 'none') ? 'block' : 'none';
  }

  renderNote() {
    const { iconStyle, iconText, iconAddText } = styles;

    if(this.props.note) {
      return (
        <div style={ iconStyle } onClick={() => this.toggleNote(this.props.id)} >
          <FontAwesomeIcon color= 'red' size='lg' icon={solidNote} />
          <span style={ iconText }>Notes</span>
        </div>
      );
    }
    if(this.props.editable) {
      return (
        <div style={ iconStyle } onClick={() => this.toggleNote(this.props.id)} >
          <FontAwesomeIcon color= 'white' size='lg' icon={solidNote} />
          <span style={ iconAddText }>Add Notes</span>
        </div>
      );
    }

    return;
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
      const { lightbox, lightbox_id } = this.props;
      
      if(this.props.editable){
        return (
          <div style={ iconsContainerStyle }>
            <div style={ [styles.iconStyle, styles.iconRemove] } onClick={() => this.triggerLightbox()}>
              <FontAwesomeIcon color='red' size='lg' icon={ lightbox ? solidHeart : outlineHeart }/> Remove
            </div>
              {this.renderNote()}
          </div>
        );
      }

      return (
        <div style={ iconsContainerStyle }>
          <div style={ iconStyle }><FontAwesomeIcon color='white' size='lg' icon={ lightbox ? solidHeart : outlineHeart }/></div>
          { lightbox_id ? this.renderNote() : null }
        </div>
      );
    }
  }

  render(){
    const { id, imageUrl, editable, lightbox_id, note } = this.props;
    const { boxStyle, tintStyle } = styles;
    const profileLink = `/talent/${id}`;

    return (
      <div style={{...boxStyle, ...{ backgroundImage: `url(${imageUrl})`, }} }>
        <NoteForm id={id} lightbox_id={lightbox_id} editable={editable} note={note}/>
        <Link to={ profileLink }>
          <div>  
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
    overflow: 'hidden',
  },
  iconStyle: {
    display: 'inline-block',
    marginRight: '10px',
    cursor: 'pointer',
  },
  iconRemove: {
    float: 'right',
    color: 'red'
  },
  iconText: {
    color: 'red',
    marginLeft: 5,
  },
  iconAddText: {
    color: 'white',
    marginLeft: 5,
  }
};

const mapStateToProps = (state) => {
  const { selectedLigthtboxId } = state.lightbox;
  return { selectedLigthtboxId };
};

export default connect(mapStateToProps, null)(Radium(TalentBox));
