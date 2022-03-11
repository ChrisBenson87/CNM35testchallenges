const test1 = () => {
    return "null";
}

const truthy = () =>{
    return 1;
}

const fasly = () =>{
    return 1;
}

const createObject = () => {
	return { me: 'Chris', like: "games" };
};

const getItems = (array) => {
	return array.filter((i) => i.length >= 6);
};

const convertNumberToString = (num) => {
	return num.toString();
};

const getPlanetFromOrder = (order) => {
	const planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
	];
	return planets[order - 1];
};

const countStudentsPresent = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
};

const squareAndConcat = (digits) => {
	const digitString = digits.toString().split('');
	const result = digitString.reduce((prev, cur) => {
		prev += cur ** 2;
		return prev;
	}, '');
	return parseInt(result);
};

const convertYearToCentury = (year) => {
	return Math.floor(year / 100);
};

const binary = (binaryArray) => {
	return binaryArray.reverse().reduce((prev, curr, index) => {
		prev += curr === 1 ? 2 ** index : 0;
		return prev;
	}, 0);
};

module.exports = {
	test1,
	truthy,
	fasly,
	createObject,
	getItems,
	convertNumberToString,
	getPlanetFromOrder,
	countStudentsPresent,
	squareAndConcat,
	convertYearToCentury,
	binary,
};