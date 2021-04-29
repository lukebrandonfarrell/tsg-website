import axios from 'axios';
import { GET_INSTA_FEED } from './types';
import { instagramFeedInstance } from '../config/env.js';

export const  getInstagramFeed = () => {


  return (dispatch) => {

    axios.get('https://www.instagram.com/talentstatus/?__a=1')
    .then((response) => {
        dispatch({
          type: GET_INSTA_FEED,
          payload: response.data,
        });
    });
}


}



