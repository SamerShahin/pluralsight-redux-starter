import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // removed the reduxImmutableStateInvariant because it is only useful for development
    applyMiddleware(thunk)
  );
}
