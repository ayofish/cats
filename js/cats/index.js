//import all the dependencies for this module
import routes from './cats.routes';
import CatsController from './cats.controller';
import CatsService from './cats.service';
import CatDirective from './cat.directive';

export default angular.module('thecatsapp.cats', [CatDirective])
  .config(routes)
  .controller('CatsController', CatsController)
  .service('CatsService', CatsService)
  .name;
