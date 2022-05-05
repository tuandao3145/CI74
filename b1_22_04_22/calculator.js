const pi_number = 3.14;

const sum = (a, b) => {
	return a + b;
};

const calculateRectArea = (a, b) => {
	return a * b;
};

const calculateCircleArea = (r) => {
	return r * pi_number;
};

let calculatorInfo = {
	name: "fx-570",
	country: "Vietnam",
	producer: "Casio",
	year: 2014,
};

const calculator = {
	PI: pi_number,
	sum: sum,
	rectArea: calculateRectArea,
	circleArea: calculateCircleArea,
	info: calculatorInfo,
};

export default calculator;
