//main controller for  displaying the cats module main
export default class CatsController {

	//initialize the class properties
	constructor($scope, CatsService) {
		this.selectedTemperament = null;
		this.selectedGrooming = null;
		this.selectedEnergy = null;
		this.cats = [];
		this.$scope = $scope;
		this.catsService = CatsService;
		// let's run it
		this.run();
	}

	//start of the app
	run() {
		//initial ajax request to get the data
		this.catsService.getCats().then((res) => {
			//set the correct urls
			this.catsService.setImageUrls(res.data.cats);
			this.catsData = res.data.cats;
			this.cats = this.catsData;
			//get the prop values for the filters
			this.temperaments = this.catsData.map((cat) => {
				return cat.temperament;
			});
			this.groomings = this.catsData.map((cat) => {
				return cat.grooming;
			});
			this.energys = this.catsData.map((cat) => {
				return cat.energy;
			});
		});
	}

	// utility function to get only the unique values. used for the filter values
	onlyUnique(arr) {
		var hash = {};
		var unique = [];
		for (var i = 0; i < arr.length; i++) {
			if (!hash.hasOwnProperty(arr[i])) {
				unique.push(arr[i]);
				hash[arr[i]] = arr[i];
			}
		}
		return unique;
	}
	//if you got the setter you need the getter
	get temperaments() {
		return this._temperaments;
	}
	//setter, so that we can manipulate the values as part of the class property, just for cleaner code in the template
	set temperaments(temperaments) {
		this._temperaments = this.onlyUnique(temperaments)
	}
	//if you got the setter you need the getter
	get groomings() {
		return this._groomings;
	}
	//setter, so that we can manipulate the values as part of the class property, just for cleaner code in the template
	set groomings(groomings) {
		this._groomings = this.onlyUnique(groomings)
	}
	//if you got the setter you need the getter
	get energy() {
		return this._energys;
	}
	//setter, so that we can manipulate the values as part of the class property, just for cleaner code in the template
	set energy(energys) {
		this._energys = this.onlyUnique(energys)
	}
  //filter it out by selection
	filterBySelection() {
    //like doing a select * from where... && where && ..where
		var cats = this.catsData;
		if (this.selectedTemperament !== null && this.selectedTemperament !== '') {
			cats = cats.filter((cat) => {
				return cat.temperament === this.selectedTemperament;
			});
		}
		if (this.selectedGrooming !== null && this.selectedGrooming !== '') {
			cats = cats.filter((cat) => {
				return cat.grooming === this.selectedGrooming;
			});
		}
		if (this.selectedEnergy !== null && this.selectedEnergy !== '') {
			cats = cats.filter((cat) => {
				return cat.energy === this.selectedEnergy;
			});
		}
    //set it in the class property again
		this.cats = cats;
	}
}
