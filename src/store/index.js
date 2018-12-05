import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
