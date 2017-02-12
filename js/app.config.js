router.$inject = ['$routeProvider', '$locationProvider'];

export default function router($routeProvider, $locationProvider) {
	$routeProvider.otherwise({
		redirectTo: '/cats'
	});

	$locationProvider.html5Mode(true);
};
