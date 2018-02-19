import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from "./CourseForm";
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  //in React This method is called when props are passed to the Component instance. Let's dig a little deeper into what this means.
  //update the state when the props is changed
  componentWillReceiveProps(nextProps) {
    if(this.props.course.id != nextProps.course.id) {
      // Necessary to populate from when existing course is loaded directly
      this.setState({course: Object.assign({} , nextProps.course)});
    }
  }
  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(()=>{
      this.redirect();
    }).catch(error =>{
      toastr.error(error);
      this.setState({saving: false});

    });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success("Course Saved");
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//context Types are static properties , thus it must be defined after the class is declared
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => {
    return course.id === id;
  });
  if (course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  let courseId = ownProps.params.id; // from the path 'course/:id' ***
  let course = null;
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  course = course === null ? {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''} : course;
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
