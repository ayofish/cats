//import all the dependencies for this module
import routes from './cats.routes';
import CatsController from './cats.controller';
import CatsService from './cats.service';
import CatDirective from './cat.directive';

//let's inject the dependency, in this case just the one directive for showing the cat
export default angular.module('thecatsapp.cats', [CatDirective])
	//the routes associated with this module
	.config(routes)
	//the main controller for this module
	.controller('CatsController', CatsController)
	//the main service we will be using here
	.service('CatsService', CatsService)
	.name;
