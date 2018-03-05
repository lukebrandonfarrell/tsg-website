import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import LightboxReducer from './LightboxReducer';

export default combineReducers({
  auth: AuthReducer,
  lightbox: LightboxReducer,
  form: reduxFormReducer,
});
