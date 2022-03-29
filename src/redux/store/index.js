import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientesReducer from '../reducers';

const rootReducer = combineReducers({
  clientesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;

