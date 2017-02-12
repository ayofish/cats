export default class CatsService {
	constructor($http) {
		this.$http = $http
	}

	getCats() {
		return this.$http.get('/cats-data.json')
	}

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
