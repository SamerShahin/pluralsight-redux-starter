import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
//stateless function component
const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/classes" activeClassName="active">Classes</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link> {"   "}
      {loading &&  <LoadingDots interval={100} dots={10} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
