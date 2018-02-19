import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return { type: types.CREATE_COURSE , course: course};
}

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS , courses: courses};
}
//every thunk always return a function that accept a dispatch
export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}
