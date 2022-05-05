const people = [
	{
		id: 1,
		first_name: "Cynthy",
		last_name: "Blunsden",
		email: "cblunsden0@tuttocitta.it",
		gender: "Female",
	},
	{
		id: 2,
		first_name: "Anna-diana",
		last_name: "Whitlock",
		email: "awhitlock1@go.com",
		gender: "Female",
	},
	{
		id: 3,
		first_name: "Aurora",
		last_name: "Lawrance",
		email: "alawrance2@google.com.hk",
		gender: "Female",
	},
	{
		id: 4,
		first_name: "Netti",
		last_name: "McDonnell",
		email: "nmcdonnell3@tmall.com",
		gender: "Female",
	},
	{
		id: 5,
		first_name: "Elfie",
		last_name: "McGinnis",
		email: "emcginnis4@un.org",
		gender: "Female",
	},
	{
		id: 6,
		first_name: "Eugine",
		last_name: "Wyndham",
		email: "ewyndham5@tinyurl.com",
		gender: "Genderfluid",
	},
	{
		id: 7,
		first_name: "Franky",
		last_name: "Reiner",
		email: "freiner6@gov.uk",
		gender: "Polygender",
	},
	{
		id: 8,
		first_name: "Amity",
		last_name: "Luparto",
		email: "aluparto7@eventbrite.com",
		gender: "Female",
	},
	{
		id: 9,
		first_name: "Vivien",
		last_name: "Tolle",
		email: "vtolle8@mapquest.com",
		gender: "Female",
	},
	{
		id: 10,
		first_name: "Arnoldo",
		last_name: "Deval",
		email: "adeval9@google.fr",
		gender: "Male",
	},
];

const getFstName = (person_list) => {
	return person_list.map((person) => {
		return person["first_name"];
	});
};

const getFullNameGender = (person_list) => {
	return person_list.map((person) => {
		return {
			fullname: person["first_name"] + person["last_name"],
			gender: person["gender"],
		};
	});
};

const filterID = (person_list) => {
	return person_list.filter((person) => person["id"] > 5);
};

const filterGenderID = (person_list) => {
	return person_list.filter((person) => {
		if (person["gender" === "Male"] && person["id"] < 5) {
			return person;
		}
	});
};

const findID = (person_list) => {
	return person_list.find((person) => person["id"] === 10);
};

//
console.log(getFstName(people));
console.log(getFullNameGender(people));
console.log(filterID(people));
console.log(filterGenderID(people));
console.log(findID(people));
