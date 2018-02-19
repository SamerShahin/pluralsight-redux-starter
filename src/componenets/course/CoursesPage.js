import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
//determine what actions are available in the component
  return {
    // this way we wrap the createCourse func in a dispatcher
    // createCourse: (course) => dispatch(courseActions.createCourse(course))
    //bind action creator will go through the course actions an find all the actions in that file and then wrap them in a dispatch
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//call connect then call the result with coursesPage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
