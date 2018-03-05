import { JWT_TOKEN_RECIEVED, JWT_TOKEN_REVOKED, SET_USER } from './types';
import { apiInstance } from '../config/env.js';

export const login = ({ email = null, password = null }) => {
  return (dispatch) => {
    apiInstance.post('/login', {
      email: email,
      password: password
    })
      .then((response) => {
        const { token } = response.data;

        if(token){
          //Save token
          dispatch({
            type: JWT_TOKEN_RECIEVED,
            payload: token,
          });

          localStorage.setItem('token', token);

          apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          fetchUser(dispatch);
        }else{
          console.log(response);
        }
      }).catch((error) => {
        console.log(error);
      });
  };
};

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};

function fetchUser(dispatch){
  apiInstance.get('/me').then((response) => {
    dispatch({
      type: SET_USER,
      payload: response.data.user,
    });
  });
}

export const logout = () => {
  return (dispatch) => {
    //Reset header
    apiInstance.defaults.headers.common['Authorization'] = null;

    //Remove from local storage
    localStorage.removeItem('token');

    //TODO : Revoke token via api

    dispatch({
      type: JWT_TOKEN_REVOKED,
    });
  };
};

export const setToken = (token) => {
  return (dispatch) => {
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    dispatch({
      type: JWT_TOKEN_RECIEVED,
      payload: token,
    });
  };
};
