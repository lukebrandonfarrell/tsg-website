import {
  SET_LIGHTBOX
} from '../actions/types';

const INITIAL_STATE = {
  selectedLigthtboxId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_LIGHTBOX:
      return { ...state, selectedLigthtboxId: action.payload };
    default:
      return state;
  }
};
