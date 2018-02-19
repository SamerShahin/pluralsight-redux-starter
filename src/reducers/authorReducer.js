import * as types from '../actions/actionTypes';
import initailState from './inititalState';

export default function authorReducer(state = initailState.authors,action) {
  switch (action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
