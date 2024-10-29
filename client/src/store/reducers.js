import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import projectsReducer from './projects/projectReducers';

const rootReducer = combineReducers({
  authorization: authReducer,
  projects: projectsReducer,
});

export default rootReducer;
