// const encript1 = (value) => {
// 	return value ** 2;
// };

// const encript2 = () => {
// 	return value * 10;
// };

// const main = (callback) => {
// 	let secret = 100;
// 	console.log("hello");
// 	let result = callback(secret);
// 	return result;
// };

// console.log(main(encript1()));

let films = [
	{ id: 1, name: "film 1", year: 2001, producer: "ABC" },
	{ id: 2, name: "film 2", year: 2002, producer: "DEF" },
	{ id: 3, name: "film 3", year: 2003, producer: "ABC" },
	{ id: 4, name: "film 4", year: 2004, producer: "DEF" },
];

const filmsID = (filmList) => {
	// let result = [];
	// for (let film of filmList) {
	// 	result.push(film["id"]);
	// }
	// return result;
	return filmList.map((film) => film["id"]);
};

const filmsYear = (filmList) => {
	return filmList.filter((film) => film["year"] > 2002);
};

const findByID = (filmList) => {
	return filmList.findIndex((film) => film["year"] > 2005);
};

const findFilm = (filmList) => {
	return filmList.find((film) => film["year"] > 2003);
};

console.log(findByID(films));
console.log(findFilm(films));
