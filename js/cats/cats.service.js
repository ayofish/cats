//the service class in charge of retrieving the data from the json file
export default class CatsService {
	constructor($http) {
		this.$http = $http
	}
  // just retrieves the data via ajax
	getCats() {
		return this.$http.get('/cats-data.json')
	}
  //changes the images urls in the object
	setImageUrls(cats) {
    for(var i=0;i<cats.length;i++){
      var cat = cats[i];
      if (cat.image === '') {
        cat.image = 'images/' + cat.name.split(' ').join('-') + '.jpg';
  		} else {
  			cat.image = 'images/' + cat.image;
  		}
    }

	}
}
