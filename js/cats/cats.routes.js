//let's inject the dependency. this is not neat looking but needed since we are using webpack
routes.$inject = ['$routeProvider'];
//contains the routes for the module
export default function routes($routeProvider) {

  $routeProvider.when('/cats', {
    template: require('./cats.html'),
    controller: 'CatsController',
    controllerAs: 'vm'
  });
}
