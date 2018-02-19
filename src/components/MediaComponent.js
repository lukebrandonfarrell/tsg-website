import React from 'react';

const MediaEnum = Object.freeze({
  photos: 'photos',
  videos: 'videos',
  clips: 'clips',
});

class MediaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      photos: null,
      videos: null,
      clips: null,
    };
  }

  renderPhotos(){
    const { selected, photos } = this.state;

    if(selected == MediaEnum.photos){
      return photos.map((element) => {

      });
    }
  }

  renderVideos(){
    const { selected, videos } = this.state;

    if(selected == MediaEnum.videos){
      return videos.map((element) => {

      });
    }
  }

  renderClips(){
    const { selected, clips } = this.state;

    if(selected == MediaEnum.clips){
      return clips.map((element) => {

      });
    }
  }

  render() {
    const { listStyle, listItemStyle, listItemLinkStyle, itemSelectedStyle } = styles;

    return (
      <div>
        <div>
          <ul style={ listStyle }>
            <li style={ listItemStyle }>
              <a style={{ ...listItemLinkStyle, ...itemSelectedStyle }} href="#photos">Photos</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#videos">Showreel</a>
            </li>
            <li style={ listItemStyle }>
              <a style={ listItemLinkStyle } href="#clips">Voice Clips</a>
            </li>
          </ul>
        </div>
        { this.renderPhotos() }
        { this.renderVideos() }
        { this.renderClips() }
      </div>
    );
  }
}

const styles = {
  listStyle : {
    listStyle: 'none',
    padding: '0px',
  },
  listItemStyle : {
    display: 'table-cell',
    width: '1%',
    textAlign: 'center',
    cursor: 'pointer',
  },
  itemSelectedStyle : {
    color: '#555555',
    backgroundColor: '#f5f8fa',
    border: '1px solid #ddd',
    borderBottomColor: 'transparent',
    cursor: 'default',
  },
  listItemLinkStyle : {
    color: '#3097D1',
    textDecoration: 'none',
    fontWeight: 'lighter',
    display: 'block',
    padding: '12px 15px',
    borderBottom: '1px solid #ddd',
    borderRadius: '4px 4px 0 0',
  }
};

export default MediaComponent;
