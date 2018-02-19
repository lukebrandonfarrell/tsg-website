import { JWT_TOKEN_RECIEVED } from './types';
import { config } from '../config/env.js';

import axios from 'axios';

var instance = axios.create({
  baseURL: config.API,
});

export const login = ({ email, password }) => {
  return (dispatch) => {
    instance.post('login', { email, password })
      .then((response) => {
        const { token } = response.data;

        if(token){
          dispatch({
            type: JWT_TOKEN_RECIEVED,
            payload: token,
          });

          localStorage.setItem('token', token);

          instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }else{
          console.log(response);
        }
      }).catch((error) => {
        console.log(error);
      });
  };
};

export const setToken = (token) => {
  return (dispatch) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    dispatch({
      type: JWT_TOKEN_RECIEVED,
      payload: token,
    });
  };
};
