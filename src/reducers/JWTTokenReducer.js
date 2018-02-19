import {
  JWT_TOKEN_RECIEVED
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
  loggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case JWT_TOKEN_RECIEVED:
      return { ...state, token: action.payload, loggedIn: true };
    default:
      return state;
  }
};
