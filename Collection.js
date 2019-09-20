class Collection extends Map {
	constructor() {
		super();
	}

	filterValues(callback) {
		const array = [];
		for (const [key, value] of this) {
			if (callback(value)) {
				array.push(value);
			}
		}
		return array;
	}

	filterKeys(callback) {
		const array = [];
		for (const [key, value] of this) {
			if (callback(value)) {
				array.push(key);
			}
		}
		return array;
	}
}