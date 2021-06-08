'use strict';

import React from 'react';
import { matchMediaDown } from '../helpers/MediaQueries';

const HeroVideo = () => {  

  let responsiveStyles = {};

	if (matchMediaDown(1280)) {
		responsiveStyles.video = {
			height:850
		}
	};
	if (matchMediaDown(800)) {
		responsiveStyles.video = {
			height:300
		}
	};
	if (matchMediaDown(550)) {
		responsiveStyles.video = {
			height:220
		}
	};
    return (
      <div className="vimeo" style={styles.container}>
        <iframe src="https://player.vimeo.com/video/559987734?autoplay=1&muted=1" style={{...styles.video, ...responsiveStyles.video}} frameborder="0"  allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  };

const styles = {
	container: {
		marginBottom: '43px'
	},
    videoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        alignSelf: 'center',
        width: "100%",
        height:850,
        // maxHeight: 750,
        resizeMode: 'cover',
        objectFit: 'cover'
    }
}

export default HeroVideo;