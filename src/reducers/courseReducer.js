import * as types from '../actions/actionTypes';
export default function courseReducer(state = [],action) {
  switch (action.type){
    case types.CREATE_COURSE:
      //use spread  and create a new copy of the course because redux state is immutable and thus we need to create a new object and not change the current one
      return [...state,
        Object.assign({},action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
