import * as types from '../actions/actionTypes';
import initailState from './inititalState';

export default function courseReducer(state = initailState.courses, action) {
  switch (action.type){
    case types.CREATE_COURSE_SUCCESS:
      //use spread  and create a new copy of the course because redux state is immutable and thus we need to create a new object and not change the current one
      return [...state,
        Object.assign({},action.course)
      ];
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
