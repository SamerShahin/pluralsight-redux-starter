import * as types from '../actions/actionTypes';
import initailState from './inititalState';

export default function courseReducer(state = initailState.courses, action) {
  switch (action.type){
    case types.UPDATE_COURSE_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id),
        Object.assign({},action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
