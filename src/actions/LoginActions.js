import { API } from '../config/global';

import axios from 'axios';

export const login = ({ email, password }) => {
  return (dispatch) => {
    axios.post('http://localhost:8000/login', { email, password })
      .then((response) => {
        if(response.data.token){
          console.log('Logged in!');
        }else{
          console.log(response);
        }
      }).catch((error) => {
        console.log(error);
      });
  };
};
