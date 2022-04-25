const helloVN = (name) => console.log(`Xin chào ${name}`);
const helloUK = (name) => console.log(`Hello ${name}`);
const helloThai = (name) => console.log(`Xa qua đi khạp ${name}`);

const helloFunction = {
	vn: helloVN,
	uk: helloUK,
	thai: helloThai,
};

export default helloFunction;
