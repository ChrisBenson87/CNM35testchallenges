const app = require('../app.js');

it('Doesnt return null', () => {
	expect(app.getNotNull()).not.toBeNull();
});

it('Doesnt return Truthy', () => {
	expect(app.getTruthy()).toBeTruthy();
});

it('Doesnt return falsy', () => {
	expect(app.getNotFalsy()).not.toBeFalsy();
});

it('Adds the object and then fills in the properties', () => {
	expect(app.createObject()).toMatchObject({ me: 'Chris', like: "games"});
});

describe('Gets any items with 6 or more characters', () => {
	it('Gets the correct items of elements containg 6 or more characters', () => {
		const input = ['javascript', 'element', 'html', 'selector', 'css', 'DOM'];
		expect(app.getItems(input)).toContain('javascript', 'selector', 'element');
		expect(app.getItems(input)).not.toContain('html', 'css', 'DOM');
	});

	it('Returns no items if they contain 6 or less characters', () => {
		const input = ['html', 'css', 'DOM'];
		expect(app.getItems(input).length).toBe(0);
	});
});

it('Converts to a string', () => {
	expect(app.convertNumberToString(17)).toBe('17');
});

describe('Gets the 3rd item in the array', () => {
	it('Returns the 3rd item in the array', () => {
		expect(app.getPlanetFromOrder(3)).toBe('Earth');
	});

	it('Returns the first item in the array', () => {
		expect(app.getPlanetFromOrder(1)).toBe('Mercury');
	});
});

describe('Counts number of students present', () => {
	it('Returns 4 true statements', () => {
		expect(
			app.countStudentsPresent([false, true, false, true, true, true]),
		).toBe(4);
	});

	it('Returns 2 true statements', () => {
		expect(app.countStudentsPresent([true, true])).toBe(2);
	});

	it('Returns 0 because there are no true statements', () => {
		expect(app.countStudentsPresent([false, false])).toBe(0);
	});
});

describe('square and concat digits', () => {
	it('Squares 34 and return 916', () => {
		expect(app.squareAndConcat(34)).toBe(916);
	});

	it('Squares 57 and return 2549', () => {
		expect(app.squareAndConcat(57)).toBe(2549);
	});
});

describe('converting years to century', () => {
	it('Converts 1705 to 17th century', () => {
		expect(app.convertYearToCentury(1705)).toBe(17);
	});

	it('Converts 2000 to 20th century', () => {
		expect(app.convertYearToCentury(2000)).toBe(20);
	});

	it('Converts 1999 to 19th century', () => {
		expect(app.convertYearToCentury(1999)).toBe(19);
	});
});

describe('binary tests', () => {
	it('Returns 1 when given 0,0,0,1 in binary', () => {
		expect(app.binary([0, 0, 0, 1])).toBe(1);
	});

	it('Returns 4 when given 0,1,0,0 in binary', () => {
		expect(app.binary([0, 1, 0, 0])).toBe(4);
	});
});