import {
    GET_INSTA_FEED
  } from '../actions/types';
  
  const INITIAL_STATE = {
    instagramFeeds: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      // case GET_INSTA_FEED:
      //     console.log(action.payload.graphql.user.edge_owner_to_timeline_media.edges);
      //   return { ...state, instagramFeeds: action.payload.graphql.user.edge_owner_to_timeline_media.edges };
      default:
        return state;
    }
  };
  