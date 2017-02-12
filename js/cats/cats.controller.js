export default class CatsController {
	constructor($scope, CatsService) {
		this.selectedTemperament = null;
		this.selectedGrooming = null;
		this.selectedEnergy = null;
		this.cats = [];
		this.$scope = $scope;
		this.catsService = CatsService;
		this.run();
	}

	run() {
		this.catsService.getCats().then((res) => {
			this.catsService.setImageUrls(res.data.cats);
			this.catsData = res.data.cats;
			this.cats = this.catsData;
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

	set temperaments(temperaments) {
		this._temperaments = this.onlyUnique(temperaments)
	}

	get temperaments() {
		return this._temperaments;
	}

	get groomings() {
		return this._groomings;
	}

	set groomings(groomings) {
		this._groomings = this.onlyUnique(groomings)
	}

	get energy() {
		return this._energys;
	}

	set energy(energys) {
		this._energys = this.onlyUnique(energys)
	}

	filterBySelection() {
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
		this.cats = cats;
	}
}
