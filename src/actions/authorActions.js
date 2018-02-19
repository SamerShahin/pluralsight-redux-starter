import * as types from './actionTypes';
import authorsApi from '../api/mockAuthorApi';


export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS , authors: authors};
}
//every thunk always return a function that accept a dispatch
export function loadAuthors() {
  return function (dispatch) {
    return authorsApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
