import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';

const rootReducer = combineReducers({
  authorization: authReducer,
});

export default rootReducer;
