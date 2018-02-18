import 'babel-polyfill'; //babel transpile es6 to es5 , but there is a set of features in es6 that babel cannot transpile and for those we use the pollyfill
import React from 'react';
import { render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById("app")
);
