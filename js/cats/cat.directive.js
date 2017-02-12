//the cat directive, handles the assigning of the values to the template
function cat() {
	return {
		restrict: 'E',
    replace: true,
		scope: {
			//just bind using text no need for value assignment
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
