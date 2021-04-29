'use strict';

import React from 'react';

const HeroVideo = () => {  
    return (
      <div style={styles.container}>
        <video src="https://tsg.sitesstage.com/cdn-media/tsg-content.mp4" style={styles.video} loop autoPlay muted controls={true} />
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
        height: "auto",
        maxHeight: 750,
        resizeMode: 'cover',
        objectFit: 'cover'
    }
}

export default HeroVideo;