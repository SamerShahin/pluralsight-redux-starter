import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import HomePage from './componenets/home/HomePage';
import AboutPage from './componenets/about/AboutPage';
import CoursesPage from './componenets/course/CoursesPage';
export default (
  <Route path="/" component={App}>
    {/*index route could be interpolated as the default route . for example if the user goes to  'localhost:3000/' he will get to the indexRoute which directs to homePage */}
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
