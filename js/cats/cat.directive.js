
function cat() {
	return {
		restrict: 'E',
    replace: true,
		scope: {
			"name": "@",
			"image": "@",
			"temperament": "@",
			"grooming": "@",
			"energy": "@"
		},
		template: require('./cat.html')
	}
}

export default angular.module('thecatsapp.cat', [])
	.directive('cat', cat)
	.name;
