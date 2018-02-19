import 'babel-polyfill'; //babel transpile es6 to es5 , but there is a set of features in es6 that babel cannot transpile and for those we use the pollyfill
import React from 'react';
import { render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import './styles/styles.css'; //Webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


//pass the initial state here
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);
