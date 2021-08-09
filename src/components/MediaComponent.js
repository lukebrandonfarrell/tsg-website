import React from 'react';
import { apiInstance } from '../config/env.js';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import Lightbox from 'react-image-lightbox';

const MediaEnum = Object.freeze({
  photos: 'photos',
  videos: 'videos',
  clips: 'clips',
});

class MediaComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'photos',
      photos: null,
      videos: null,
      clips: null,
      lightboxIndex: 0,
      lightboxOpen: false,
      displayStyle: {display:'none'},
      showButton: true
    };
  }

  componentDidMount() {
    const { userId } = this.props;

    apiInstance.get(`/users/${userId}/media/photos`)
      .then((response) => {
        this.setState({ photos : response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    apiInstance.get(`/users/${userId}/media/videos`)
      .then((response) => {
        this.setState({ videos : response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    apiInstance.get(`/users/${userId}/media/clips`)
      .then((response) => {
        console.log(response);
        this.setState({ clips : response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderPhotos(){
    const { selected, photos, lightboxOpen, lightboxIndex } = this.state;
    const { imageStyle , itemStyle} = styles;

    if(selected === MediaEnum.photos){
      if(photos){
        //Responsiveness
        let spanClass = 'span_1_of_4';
        if (matchMedia('only screen and (max-width: 880px)').matches){ spanClass = 'span_1_of_2'; }
        if (matchMedia('only screen and (max-width: 550px)').matches){ spanClass = 'span_1_of_1'; }

        let jsx = [];

        photos.map((element, i) => {
          if(i < 4) {
            jsx.push(
              <div key={i} className={`col ${spanClass}`}>
                <div style={{
                  ...imageStyle,
                  ...{ backgroundImage: `url(${element.source})`, }}
                }
                onClick={() => this.setState({ lightboxOpen: true, lightboxIndex: i })}
                />
              </div>);
          } else {
            if(i == 4 && this.state.showButton) {
              jsx.push(
                <div className={`col span_4_of_4`} style={{textAlign:'center'}}>
                    <a style={itemStyle} onClick={() => this.setState({ displayStyle: {display:'block'}, showButton:false})}>Load more images</a>
                </div>
              );
            }
            jsx.push(
              <div key={i} className={`col ${spanClass}`}>
                <div style={{
                  ...imageStyle,
                  ...{ backgroundImage: `url(${element.source})`, },
                  ...this.state.displayStyle}
                }
                onClick={() => this.setState({ lightboxOpen: true, lightboxIndex: i })}
                />
              </div>);
          }
        });

        if(!this.state.showButton) {
          jsx.push(
            <div className={`col span_4_of_4`} style={{textAlign:'center'}}>
                <a style={itemStyle} onClick={() => this.setState({ displayStyle: {display:'none'}, showButton:true})}>Hide images</a>
            </div>
          );
        }

        if(lightboxOpen){
          jsx.push(
            <Lightbox
              mainSrc={photos[lightboxIndex].source}
              nextSrc={photos[(lightboxIndex + 1) % photos.length].source}
              prevSrc={photos[(lightboxIndex + photos.length - 1) % photos.length].source}
              onCloseRequest={() => this.setState({ lightboxOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  lightboxIndex: (lightboxIndex + photos.length - 1) % photos.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  lightboxIndex: (lightboxIndex + 1) % photos.length,
                })
              }
            />
          );
        }

        return jsx;
      }
    }
  }

  renderVideos(){
    const { selected, videos } = this.state;

    if(selected === MediaEnum.videos){
      if(videos){
        //Responsiveness
        let spanClass = 'span_1_of_2';
        if (matchMedia('only screen and (max-width: 880px)').matches){ spanClass = 'span_1_of_1'; }

        return videos.map((element, i) => {
          const { source } = element;

          if(source.indexOf('www.youtube.com')){
            return (
              <div key={i} className={`col ${spanClass}`}>
                <iframe title='Video' width='100%' height='300px' src={ source }></iframe>
              </div>
            );
          } else {
            return (
              <div key={i} className={`col ${spanClass}`}>
                <Video muted loop
                  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                  <source src={ element.source }/>
                </Video>
              </div>
            );
          }
        });
      }
    }
  }

  renderClips(){
    const { selected, clips } = this.state;
    const { audioPlayerStyle } = styles;

    if(selected === MediaEnum.clips){
      if(clips){
        return clips.map((element, i) => {
          return (
            <div key={i} className="col span_4_of_4">
              <audio style={ audioPlayerStyle } controls>
                <source src={ element.source } />
                  Your browser does not support the audio element.
              </audio>
            </div>
          );
        });
      }
    }
  }

  renderPhotosListItem(){
    const { selected, photos } = this.state;
    const { listItemStyle, listItemLinkStyle, itemSelectedStyle } = styles;
    const photosSelected = (selected === 'photos') ? itemSelectedStyle : {};

    if(photos){
      if(photos.length){
        return (
          <li style={ listItemStyle }>
            <a style={{ ...listItemLinkStyle, ...photosSelected  }} href="#photos"
              onClick={() => this.setState({ selected : 'photos' })}>
              Photos
            </a>
          </li>
        );
      }
    }
  }

  renderVideosListItem(){
    const { selected, videos } = this.state;
    const { listItemStyle, listItemLinkStyle, itemSelectedStyle } = styles;
    const videosSelected = (selected === 'videos') ? itemSelectedStyle : {};

    if(videos){
      if(videos.length){
        return (
          <li style={ listItemStyle }>
            <a style={{ ...listItemLinkStyle, ...videosSelected }} href="#videos"
              onClick={() => this.setState({ selected : 'videos' })}>
              Showreel
            </a>
          </li>
        );
      }
    }
  }

  renderClipsListItem(){
    const { selected, clips } = this.state;
    const { listItemStyle, listItemLinkStyle, itemSelectedStyle } = styles;
    const clipsSelected = (selected === 'clips') ? itemSelectedStyle : {};

    if(clips){
      if(clips.length){
        return (
          <li style={ listItemStyle }>
            <a style={{ ...listItemLinkStyle, ...clipsSelected }} href="#clips"
              onClick={() => this.setState({ selected : 'clips' })}>
              Voice Clips
            </a>
          </li>
        );
      }
    }
  }

  render() {
    const { listStyle } = styles;

    return (
      <div>
        <div>
          <ul style={ listStyle }>
            { this.renderPhotosListItem() }
            { this.renderVideosListItem() }
            { this.renderClipsListItem() }
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
    color: 'black',
    backgroundColor: '#f5f8fa',
    border: '1px solid #ddd',
    borderBottomColor: 'transparent',
    cursor: 'default',
    borderRadius: '4px 4px 0 0',
  },
  listItemLinkStyle : {
    color: 'black',
    backgroundColor: '#e5e9ec',
    textDecoration: 'none',
    // fontWeight: 'bold',
    fontSize: '18px',
    display: 'block',
    padding: '12px 15px',
    borderBottom: '1px solid #ddd',
    borderRadius: '0px',
  },
  imageStyle: {
    display: 'inline-block',
    width: '100%',
    height: '280px',
    backgroundColor: 'black',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    textAlign: 'center',
    cursor: 'pointer',
  },
  audioPlayerStyle: {
    width: '100%',
  },
  itemStyle: {
    padding: '6px 12px',
    margin: '20px 0px',
    lineHeight: '1.6',
    textDecoration: 'none',
    color: 'black',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderColor: '#ddd',
    marginLeft: '-1px',
    cursor: 'pointer',
    display: 'inline-block'
  }
};

export default MediaComponent;
