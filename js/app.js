//for browser compatibility
import 'babel-polyfill';

//bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

//import angular
import angular from 'angular';
//just because we might need routes, just a habit
import ngRoute from 'angular-route';

//routes
import appConfig from './app.config';

//modules to load
import cats from './cats';

angular.module('thecatsapp', [ngRoute, cats]).config(appConfig);
