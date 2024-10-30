import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { thunk } from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [
    middlewareEnhancer,
    monitorReducersEnhancer,
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
