routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {

  $routeProvider.when('/cats', {
    template: require('./cats.html'),
    controller: 'CatsController',
    controllerAs: 'vm'
  });
}
