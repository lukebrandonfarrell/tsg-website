import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import LightboxReducer from './LightboxReducer';
import InstagramFeedReducer from './InstagramFeedReducer';

export default combineReducers({
  auth: AuthReducer,
  lightbox: LightboxReducer,
  instaFeed: InstagramFeedReducer,
  form: reduxFormReducer,
});
