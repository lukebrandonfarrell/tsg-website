import {
  JWT_TOKEN_RECIEVED, JWT_TOKEN_REVOKED, SET_USER
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
  id: null,
  email: null,
  username: null,
  first_name: null,
  last_name: null,
  gender: null,
  date_of_birth: null,
  location: null,
  website: null,
  mail_list: false,
  activated: false,
  is_admin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case JWT_TOKEN_RECIEVED:
      return { ...state, token: action.payload };
    case JWT_TOKEN_REVOKED:
      return { ...state, ...INITIAL_STATE };
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
