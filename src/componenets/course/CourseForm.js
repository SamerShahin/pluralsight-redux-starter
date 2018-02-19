import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
      <form>
    <h1>Manage Course</h1>
        <TextInput name="title"
                   label="Title"
                   onChange={onChange}
                   value={course.title}
                   error={errors.title}/>
         <SelectInput name="authorId"
                     label="Author"
                     onChange={onChange}
                     value={course.authorId}
                     defaultOption="select Author"
                     options={allAuthors}
                     error={errors.title}/>
        <TextInput name="category"
                   label="Category"
                   onChange={onChange}
                   value={course.category}
                   error={errors.category}/>
        <TextInput name="length"
                   label="Length"
                   onChange={onChange}
                   value={course.length}
                   error={errors.length}/>
        <input  type="submit"
                disabled={saving}
                value={saving ? "Saving..." : "Save"}
                className="btn btn-primary"
                onClick={onSave}/>
      </form>
    );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  allAuthors: PropTypes.array,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
