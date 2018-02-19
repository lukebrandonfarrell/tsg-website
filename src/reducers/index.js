import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import JWTTokenReducer from './JWTTokenReducer';

export default combineReducers({
  jwt: JWTTokenReducer,
  talent: [],
  form: reduxFormReducer,
});

// ({
//   user: [],
//   talent: [],
//
//   lightboxes: [],
//   selectedLightbox: null,
// });
