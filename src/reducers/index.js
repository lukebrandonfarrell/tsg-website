import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  form: reduxFormReducer,
});
