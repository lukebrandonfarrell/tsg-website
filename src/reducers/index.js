import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  user: [],
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
