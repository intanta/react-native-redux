import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

export default () => {
  const store = applyMiddleware(thunk)(createStore)(appReducer);
  return store;
}