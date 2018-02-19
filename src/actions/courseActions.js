import {ActionTypes} from './actionsTypes';

export function createCourse(course) {
  return { type: ActionTypes.CREATE_COURSE , course: course};
}
